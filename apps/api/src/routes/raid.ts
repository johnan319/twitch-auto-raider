import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { prisma, RaidStatus } from 'database';
import { getAccessToken } from './auth.js';
import { twitchApi } from '../services/twitch-api.js';

const startRaidSchema = z.object({
  toBroadcasterId: z.string(),
  toBroadcasterLogin: z.string(),
  toBroadcasterName: z.string(),
  categoryId: z.string().optional(),
  categoryName: z.string().optional(),
  sendMessages: z.boolean().optional().default(true),
});

const rateRaidSchema = z.object({
  raidHistoryId: z.string(),
  rating: z.number().min(-1).max(1),
  notes: z.string().optional(),
});

export async function raidRoutes(fastify: FastifyInstance): Promise<void> {
  // Start a raid
  fastify.post('/api/raid/start', async (request: FastifyRequest, reply: FastifyReply) => {
    if (!request.session.userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const parseResult = startRaidSchema.safeParse(request.body);
    if (!parseResult.success) {
      return reply.status(400).send({ error: 'Invalid request body', details: parseResult.error });
    }

    const body = parseResult.data;

    const user = await prisma.user.findUnique({
      where: { id: request.session.userId },
      include: { settings: true },
    });

    if (!user) {
      return reply.status(401).send({ error: 'User not found' });
    }

    try {
      const accessToken = await getAccessToken(user.id);

      // Start the raid via Twitch API
      await twitchApi.startRaid(accessToken, user.twitchUserId, body.toBroadcasterId);

      // Create raid history record
      const raidHistory = await prisma.raidHistory.create({
        data: {
          userId: user.id,
          fromBroadcasterId: user.twitchUserId,
          toBroadcasterId: body.toBroadcasterId,
          toBroadcasterLogin: body.toBroadcasterLogin,
          toBroadcasterName: body.toBroadcasterName,
          categoryId: body.categoryId,
          categoryName: body.categoryName,
          status: RaidStatus.QUEUED,
        },
      });

      // Send chat messages if enabled
      if (body.sendMessages && user.settings) {
        const raidMessage = user.settings.raidMessage.replace(
          '{target}',
          body.toBroadcasterName
        );
        const raidRunMessage = user.settings.raidRunMessage;

        try {
          await twitchApi.sendChatMessage(
            accessToken,
            user.twitchUserId,
            user.twitchUserId,
            raidMessage
          );

          // Small delay between messages
          await new Promise((resolve) => setTimeout(resolve, 1000));

          await twitchApi.sendChatMessage(
            accessToken,
            user.twitchUserId,
            user.twitchUserId,
            raidRunMessage
          );
        } catch (chatError) {
          console.error('Chat message error:', chatError);
          // Don't fail the raid if chat messages fail
        }
      }

      return {
        success: true,
        raidHistoryId: raidHistory.id,
        message: 'Raid started! The raid will execute after the 90-second countdown or when you click "Raid Now" in Twitch.',
      };
    } catch (error) {
      console.error('Start raid error:', error);

      // Create failed raid history record
      await prisma.raidHistory.create({
        data: {
          userId: user.id,
          fromBroadcasterId: user.twitchUserId,
          toBroadcasterId: body.toBroadcasterId,
          toBroadcasterLogin: body.toBroadcasterLogin,
          toBroadcasterName: body.toBroadcasterName,
          categoryId: body.categoryId,
          categoryName: body.categoryName,
          status: RaidStatus.FAILED,
        },
      });

      return reply.status(500).send({ error: 'Failed to start raid' });
    }
  });

  // Cancel a raid
  fastify.post('/api/raid/cancel', async (request: FastifyRequest, reply: FastifyReply) => {
    if (!request.session.userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const user = await prisma.user.findUnique({
      where: { id: request.session.userId },
    });

    if (!user) {
      return reply.status(401).send({ error: 'User not found' });
    }

    try {
      const accessToken = await getAccessToken(user.id);

      // Cancel the raid via Twitch API
      await twitchApi.cancelRaid(accessToken, user.twitchUserId);

      // Update queued raid history records to canceled
      await prisma.raidHistory.updateMany({
        where: {
          userId: user.id,
          status: RaidStatus.QUEUED,
        },
        data: {
          status: RaidStatus.CANCELED,
        },
      });

      return { success: true, message: 'Raid canceled' };
    } catch (error) {
      console.error('Cancel raid error:', error);
      return reply.status(500).send({ error: 'Failed to cancel raid' });
    }
  });

  // Rate a raid
  fastify.post('/api/raid/rate', async (request: FastifyRequest, reply: FastifyReply) => {
    if (!request.session.userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const parseResult = rateRaidSchema.safeParse(request.body);
    if (!parseResult.success) {
      return reply.status(400).send({ error: 'Invalid request body', details: parseResult.error });
    }

    const { raidHistoryId, rating, notes } = parseResult.data;

    const raidHistory = await prisma.raidHistory.findFirst({
      where: {
        id: raidHistoryId,
        userId: request.session.userId,
      },
    });

    if (!raidHistory) {
      return reply.status(404).send({ error: 'Raid history not found' });
    }

    await prisma.raidHistory.update({
      where: { id: raidHistoryId },
      data: {
        manualRating: rating,
        notes,
      },
    });

    return { success: true };
  });

  // Get raid history
  fastify.get<{
    Querystring: { limit?: string; offset?: string };
  }>('/api/history', async (request, reply) => {
    if (!request.session.userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const limit = Math.min(parseInt(request.query.limit || '20', 10), 100);
    const offset = parseInt(request.query.offset || '0', 10);

    const [raids, total] = await Promise.all([
      prisma.raidHistory.findMany({
        where: { userId: request.session.userId },
        orderBy: { startedAt: 'desc' },
        take: limit,
        skip: offset,
      }),
      prisma.raidHistory.count({
        where: { userId: request.session.userId },
      }),
    ]);

    return { raids, total, limit, offset };
  });
}
