import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { getAccessToken } from './auth.js';
import { getAuthUserId } from '../lib/auth.js';
import { twitchApi } from '../services/twitch-api.js';
import { loggers } from '../lib/logger.js';

const log = loggers.warmlist;

const addWarmListSchema = z.object({
  broadcasterLogin: z.string(),
  notes: z.string().optional(),
  priority: z.number().optional().default(0),
});

const updateWarmListSchema = z.object({
  notes: z.string().optional(),
  priority: z.number().optional(),
});

export async function warmlistRoutes(fastify: FastifyInstance): Promise<void> {
  // Get warm list
  fastify.get('/api/warmlist', async (request: FastifyRequest, reply: FastifyReply) => {
    const userId = await getAuthUserId(request);
    if (!userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const entries = await prisma.warmListEntry.findMany({
      where: { userId },
      orderBy: [{ priority: 'desc' }, { createdAt: 'desc' }],
    });

    log.debug({ userId, count: entries.length }, 'Warm list fetched');

    return { entries };
  });

  // Add to warm list
  fastify.post('/api/warmlist', async (request: FastifyRequest, reply: FastifyReply) => {
    const userId = await getAuthUserId(request);
    if (!userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const parseResult = addWarmListSchema.safeParse(request.body);
    if (!parseResult.success) {
      return reply.status(400).send({ error: 'Invalid request body', details: parseResult.error });
    }

    const { broadcasterLogin, notes, priority } = parseResult.data;

    log.info({ userId, broadcasterLogin, priority }, 'Adding to warm list');

    try {
      const accessToken = await getAccessToken(userId);

      // Fetch user profile to get ID, name, and profile image
      const user = await twitchApi.getUserByLogin(accessToken, broadcasterLogin);

      if (!user) {
        log.warn({ userId, broadcasterLogin }, 'Channel not found on Twitch');
        return reply.status(404).send({ error: 'Channel not found' });
      }

      // Add to warm list
      const entry = await prisma.warmListEntry.upsert({
        where: {
          userId_broadcasterId: {
            userId,
            broadcasterId: user.id,
          },
        },
        update: {
          notes,
          priority,
          profileImageUrl: user.profile_image_url,
        },
        create: {
          userId,
          broadcasterId: user.id,
          broadcasterLogin: user.login,
          broadcasterName: user.display_name,
          profileImageUrl: user.profile_image_url,
          notes,
          priority,
        },
      });

      log.info({
        userId,
        broadcasterId: user.id,
        broadcasterLogin: user.login,
        priority,
      }, 'Added to warm list');

      return { entry };
    } catch (error) {
      log.error({ userId, broadcasterLogin, error: error instanceof Error ? error.message : String(error) }, 'Failed to add to warm list');
      return reply.status(500).send({ error: 'Failed to add to warm list' });
    }
  });

  // Update warm list entry
  fastify.put<{
    Params: { id: string };
  }>('/api/warmlist/:id', async (request, reply) => {
    const userId = await getAuthUserId(request);
    if (!userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const parseResult = updateWarmListSchema.safeParse(request.body);
    if (!parseResult.success) {
      return reply.status(400).send({ error: 'Invalid request body', details: parseResult.error });
    }

    const entry = await prisma.warmListEntry.findFirst({
      where: {
        id: request.params.id,
        userId,
      },
    });

    if (!entry) {
      return reply.status(404).send({ error: 'Entry not found' });
    }

    const updated = await prisma.warmListEntry.update({
      where: { id: request.params.id },
      data: parseResult.data,
    });

    log.info({
      userId,
      entryId: request.params.id,
      updatedFields: Object.keys(parseResult.data),
    }, 'Warm list entry updated');

    return { entry: updated };
  });

  // Remove from warm list
  fastify.delete<{
    Params: { id: string };
  }>('/api/warmlist/:id', async (request, reply) => {
    const userId = await getAuthUserId(request);
    if (!userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const entry = await prisma.warmListEntry.findFirst({
      where: {
        id: request.params.id,
        userId,
      },
    });

    if (!entry) {
      return reply.status(404).send({ error: 'Entry not found' });
    }

    await prisma.warmListEntry.delete({
      where: { id: request.params.id },
    });

    log.info({
      userId,
      entryId: request.params.id,
      broadcasterLogin: entry.broadcasterLogin,
    }, 'Removed from warm list');

    return { success: true };
  });
}
