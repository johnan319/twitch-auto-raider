import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { getAccessToken } from './auth.js';
import { twitchApi } from '../services/twitch-api.js';

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
    if (!request.session.userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const entries = await prisma.warmListEntry.findMany({
      where: { userId: request.session.userId },
      orderBy: [{ priority: 'desc' }, { createdAt: 'desc' }],
    });

    return { entries };
  });

  // Add to warm list
  fastify.post('/api/warmlist', async (request: FastifyRequest, reply: FastifyReply) => {
    if (!request.session.userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const parseResult = addWarmListSchema.safeParse(request.body);
    if (!parseResult.success) {
      return reply.status(400).send({ error: 'Invalid request body', details: parseResult.error });
    }

    const { broadcasterLogin, notes, priority } = parseResult.data;

    try {
      const accessToken = await getAccessToken(request.session.userId);

      // Fetch user profile to get ID, name, and profile image
      const user = await twitchApi.getUserByLogin(accessToken, broadcasterLogin);

      if (!user) {
        return reply.status(404).send({ error: 'Channel not found' });
      }

      // Add to warm list
      const entry = await prisma.warmListEntry.upsert({
        where: {
          userId_broadcasterId: {
            userId: request.session.userId,
            broadcasterId: user.id,
          },
        },
        update: {
          notes,
          priority,
          profileImageUrl: user.profile_image_url,
        },
        create: {
          userId: request.session.userId,
          broadcasterId: user.id,
          broadcasterLogin: user.login,
          broadcasterName: user.display_name,
          profileImageUrl: user.profile_image_url,
          notes,
          priority,
        },
      });

      return { entry };
    } catch (error) {
      console.error('Add warm list error:', error);
      return reply.status(500).send({ error: 'Failed to add to warm list' });
    }
  });

  // Update warm list entry
  fastify.put<{
    Params: { id: string };
  }>('/api/warmlist/:id', async (request, reply) => {
    if (!request.session.userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const parseResult = updateWarmListSchema.safeParse(request.body);
    if (!parseResult.success) {
      return reply.status(400).send({ error: 'Invalid request body', details: parseResult.error });
    }

    const entry = await prisma.warmListEntry.findFirst({
      where: {
        id: request.params.id,
        userId: request.session.userId,
      },
    });

    if (!entry) {
      return reply.status(404).send({ error: 'Entry not found' });
    }

    const updated = await prisma.warmListEntry.update({
      where: { id: request.params.id },
      data: parseResult.data,
    });

    return { entry: updated };
  });

  // Remove from warm list
  fastify.delete<{
    Params: { id: string };
  }>('/api/warmlist/:id', async (request, reply) => {
    if (!request.session.userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const entry = await prisma.warmListEntry.findFirst({
      where: {
        id: request.params.id,
        userId: request.session.userId,
      },
    });

    if (!entry) {
      return reply.status(404).send({ error: 'Entry not found' });
    }

    await prisma.warmListEntry.delete({
      where: { id: request.params.id },
    });

    return { success: true };
  });
}
