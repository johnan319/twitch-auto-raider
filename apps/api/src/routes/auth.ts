import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { randomBytes } from 'crypto';
import { prisma } from '../lib/prisma.js';
import { encrypt, decrypt } from '../lib/encryption.js';
import { twitchApi } from '../services/twitch-api.js';
import { eventSubService } from '../services/eventsub.js';
import { config } from '../lib/config.js';

declare module '@fastify/session' {
  interface FastifySessionObject {
    userId?: string;
    oauthState?: string;
  }
}

export async function authRoutes(fastify: FastifyInstance): Promise<void> {
  // Auth rate limit config - stricter than global
  const authRateLimit = {
    config: {
      rateLimit: {
        max: 10,
        timeWindow: '1 minute',
      },
    },
  };

  // Start OAuth flow
  fastify.get('/auth/twitch/start', { ...authRateLimit }, async (request: FastifyRequest, reply: FastifyReply) => {
    const state = randomBytes(16).toString('hex');
    request.session.oauthState = state;

    const authUrl = twitchApi.getAuthorizationUrl(state);
    return reply.redirect(authUrl);
  });

  // OAuth callback
  fastify.get<{
    Querystring: { code?: string; state?: string; error?: string };
  }>('/auth/twitch/callback', { ...authRateLimit }, async (request, reply) => {
    const { code, state, error } = request.query;

    if (error) {
      return reply.redirect(`${config.cors.origin}/?error=${encodeURIComponent(error)}`);
    }

    if (!code || !state) {
      return reply.redirect(`${config.cors.origin}/?error=missing_params`);
    }

    if (state !== request.session.oauthState) {
      return reply.redirect(`${config.cors.origin}/?error=invalid_state`);
    }

    delete request.session.oauthState;

    try {
      // Exchange code for tokens
      const tokens = await twitchApi.exchangeCode(code);

      // Get user profile
      const twitchUser = await twitchApi.getUser(tokens.access_token);

      // Upsert user
      const user = await prisma.user.upsert({
        where: { twitchUserId: twitchUser.id },
        update: {
          login: twitchUser.login,
          displayName: twitchUser.display_name,
          profileImageUrl: twitchUser.profile_image_url,
        },
        create: {
          twitchUserId: twitchUser.id,
          login: twitchUser.login,
          displayName: twitchUser.display_name,
          profileImageUrl: twitchUser.profile_image_url,
        },
      });

      // Create default settings if not exists
      await prisma.settings.upsert({
        where: { userId: user.id },
        update: {},
        create: { userId: user.id },
      });

      // Store encrypted tokens
      const expiresAt = new Date(Date.now() + tokens.expires_in * 1000);

      await prisma.oAuthToken.upsert({
        where: { userId: user.id },
        update: {
          accessToken: encrypt(tokens.access_token),
          refreshToken: encrypt(tokens.refresh_token),
          expiresAt,
          scopes: tokens.scope,
        },
        create: {
          userId: user.id,
          accessToken: encrypt(tokens.access_token),
          refreshToken: encrypt(tokens.refresh_token),
          expiresAt,
          scopes: tokens.scope,
        },
      });

      // Subscribe to EventSub for this user
      await eventSubService.subscribeToRaids(twitchUser.id, tokens.access_token);

      // Set session
      request.session.userId = user.id;

      return reply.redirect(`${config.cors.origin}/end`);
    } catch (err) {
      console.error('OAuth callback error:', err);
      return reply.redirect(`${config.cors.origin}/?error=auth_failed`);
    }
  });

  // Logout
  fastify.post('/auth/logout', async (request, reply) => {
    request.session.destroy();
    return { success: true };
  });

  // Get current user
  fastify.get('/api/me', async (request, reply) => {
    if (!request.session.userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const user = await prisma.user.findUnique({
      where: { id: request.session.userId },
      select: {
        id: true,
        twitchUserId: true,
        login: true,
        displayName: true,
        profileImageUrl: true,
      },
    });

    if (!user) {
      request.session.destroy();
      return reply.status(401).send({ error: 'User not found' });
    }

    return user;
  });
}

// Helper to get access token (with auto-refresh)
export async function getAccessToken(userId: string): Promise<string> {
  const tokenRecord = await prisma.oAuthToken.findUnique({
    where: { userId },
  });

  if (!tokenRecord) {
    throw new Error('No tokens found');
  }

  // Check if token expires within 5 minutes
  const expiresIn = tokenRecord.expiresAt.getTime() - Date.now();
  if (expiresIn < 5 * 60 * 1000) {
    // Refresh token
    const refreshToken = decrypt(tokenRecord.refreshToken);
    const newTokens = await twitchApi.refreshToken(refreshToken);

    const newExpiresAt = new Date(Date.now() + newTokens.expires_in * 1000);

    await prisma.oAuthToken.update({
      where: { userId },
      data: {
        accessToken: encrypt(newTokens.access_token),
        refreshToken: encrypt(newTokens.refresh_token),
        expiresAt: newExpiresAt,
        scopes: newTokens.scope,
      },
    });

    return newTokens.access_token;
  }

  return decrypt(tokenRecord.accessToken);
}
