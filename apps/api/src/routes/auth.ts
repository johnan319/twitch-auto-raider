import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { randomBytes } from 'crypto';
import { prisma } from '../lib/prisma.js';
import { encrypt, decrypt } from '../lib/encryption.js';
import { twitchApi } from '../services/twitch-api.js';
// import { eventSubService } from '../services/eventsub.js'; // Temporarily disabled
import { config } from '../lib/config.js';
import { loggers } from '../lib/logger.js';

const log = loggers.auth;

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

    // Explicitly save session before redirect
    await request.session.save();

    const authUrl = twitchApi.getAuthorizationUrl(state);
    return reply.redirect(authUrl);
  });

  // OAuth callback
  fastify.get<{
    Querystring: { code?: string; state?: string; error?: string };
  }>('/auth/twitch/callback', { ...authRateLimit }, async (request, reply) => {
    const { code, state, error } = request.query;

    if (error) {
      log.warn({ error, ip: request.ip }, 'OAuth callback received error from Twitch');
      return reply.redirect(`${config.cors.origin}/?error=${encodeURIComponent(error)}`);
    }

    if (!code || !state) {
      log.warn({ hasCode: !!code, hasState: !!state, ip: request.ip }, 'OAuth callback missing parameters');
      return reply.redirect(`${config.cors.origin}/?error=missing_params`);
    }

    if (state !== request.session.oauthState) {
      log.warn({ ip: request.ip }, 'OAuth callback state mismatch');
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

      // Subscribe to EventSub for this user (temporarily disabled)
      // await eventSubService.subscribeToRaids(twitchUser.id, tokens.access_token);

      // Set session and save before redirect
      request.session.userId = user.id;
      await request.session.save();

      // Create a one-time auth token to pass via URL (for cross-origin cookie issues)
      const authToken = randomBytes(32).toString('hex');
      await prisma.session.create({
        data: {
          id: `auth_token_${authToken}`,
          data: JSON.stringify({ userId: user.id, sessionId: request.session.sessionId }),
          expiresAt: new Date(Date.now() + 60 * 1000), // 1 minute expiry
        },
      });

      return reply.redirect(`${config.cors.origin}/end?auth_token=${authToken}`);
    } catch (err) {
      log.error({ error: err instanceof Error ? err.message : String(err), ip: request.ip }, 'OAuth callback error');
      return reply.redirect(`${config.cors.origin}/?error=auth_failed`);
    }
  });

  // Logout
  fastify.post('/auth/logout', async (request, _reply) => {
    request.session.destroy();
    return { success: true };
  });

  // Exchange auth token for a long-lived bearer token (handles cross-origin cookie issues)
  fastify.post<{ Body: { token: string } }>('/auth/exchange-token', async (request, reply) => {
    const { token } = request.body;

    if (!token) {
      return reply.status(400).send({ error: 'Token required' });
    }

    try {
      const tokenRecord = await prisma.session.findUnique({
        where: { id: `auth_token_${token}` },
      });

      if (!tokenRecord) {
        return reply.status(401).send({ error: 'Invalid or expired token' });
      }

      // Check if expired
      if (tokenRecord.expiresAt < new Date()) {
        await prisma.session.delete({ where: { id: tokenRecord.id } });
        return reply.status(401).send({ error: 'Token expired' });
      }

      const tokenData = JSON.parse(tokenRecord.data);

      // Create a long-lived bearer token
      const bearerToken = randomBytes(32).toString('hex');
      await prisma.session.create({
        data: {
          id: `bearer_${bearerToken}`,
          data: JSON.stringify({ userId: tokenData.userId }),
          expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        },
      });

      // Delete the one-time token
      await prisma.session.delete({ where: { id: tokenRecord.id } });

      return { success: true, bearerToken };
    } catch (error) {
      log.error({ error: error instanceof Error ? error.message : String(error) }, 'Token exchange failed');
      return reply.status(500).send({ error: 'Token exchange failed' });
    }
  });

  // Get current user
  fastify.get('/api/me', async (request, reply) => {
    // Check for bearer token first
    const authHeader = request.headers.authorization;
    let userId: string | undefined;

    if (authHeader?.startsWith('Bearer ')) {
      const bearerToken = authHeader.substring(7);
      try {
        const tokenRecord = await prisma.session.findUnique({
          where: { id: `bearer_${bearerToken}` },
        });

        if (tokenRecord && tokenRecord.expiresAt > new Date()) {
          const tokenData = JSON.parse(tokenRecord.data);
          userId = tokenData.userId;
        }
      } catch (error) {
        log.error({ error }, 'Error validating bearer token');
      }
    }

    // Fall back to session cookie
    if (!userId) {
      userId = request.session.userId;
    }

    if (!userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
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
    log.error({ userId }, 'No tokens found for user');
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
