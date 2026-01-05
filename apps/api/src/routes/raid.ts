import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { RaidStatus } from 'database';
import { prisma } from '../lib/prisma.js';
import { getAccessToken } from './auth.js';
import { getAuthUserId } from '../lib/auth.js';
import { twitchApi } from '../services/twitch-api.js';
import { loggers } from '../lib/logger.js';

const log = loggers.raid;

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
    const userId = await getAuthUserId(request);
    if (!userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const parseResult = startRaidSchema.safeParse(request.body);
    if (!parseResult.success) {
      log.warn({ userId, errors: parseResult.error.errors }, 'Invalid start raid request');
      return reply.status(400).send({ error: 'Invalid request body', details: parseResult.error });
    }

    const body = parseResult.data;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { settings: true },
    });

    if (!user) {
      return reply.status(401).send({ error: 'User not found' });
    }

    log.info({
      userId: user.id,
      fromBroadcasterId: user.twitchUserId,
      toBroadcasterId: body.toBroadcasterId,
      toBroadcasterName: body.toBroadcasterName,
      category: body.categoryName,
      sendMessages: body.sendMessages,
    }, 'Starting raid');

    try {
      const accessToken = await getAccessToken(userId);

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

      log.debug({ userId: user.id, raidHistoryId: raidHistory.id }, 'Raid history record created');

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

          log.debug({ userId: user.id }, 'Chat messages sent');
        } catch (chatError) {
          log.warn({ userId: user.id, error: chatError instanceof Error ? chatError.message : String(chatError) }, 'Chat message failed (non-fatal)');
          // Don't fail the raid if chat messages fail
        }
      }

      log.info({
        userId: user.id,
        raidHistoryId: raidHistory.id,
        toBroadcasterName: body.toBroadcasterName,
      }, 'Raid started successfully');

      return {
        success: true,
        raidHistoryId: raidHistory.id,
        message: 'Raid started! The raid will execute after the 90-second countdown or when you click "Raid Now" in Twitch.',
      };
    } catch (error) {
      log.error({
        userId: user.id,
        toBroadcasterId: body.toBroadcasterId,
        error: error instanceof Error ? error.message : String(error),
      }, 'Failed to start raid');

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
    const userId = await getAuthUserId(request);
    if (!userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return reply.status(401).send({ error: 'User not found' });
    }

    log.info({ userId: user.id, twitchUserId: user.twitchUserId }, 'Canceling raid');

    try {
      const accessToken = await getAccessToken(userId);

      // Cancel the raid via Twitch API
      await twitchApi.cancelRaid(accessToken, user.twitchUserId);

      // Update queued raid history records to canceled
      const updateResult = await prisma.raidHistory.updateMany({
        where: {
          userId: user.id,
          status: RaidStatus.QUEUED,
        },
        data: {
          status: RaidStatus.CANCELED,
        },
      });

      log.info({ userId: user.id, canceledCount: updateResult.count }, 'Raid canceled');

      return { success: true, message: 'Raid canceled' };
    } catch (error) {
      log.error({ userId: user.id, error: error instanceof Error ? error.message : String(error) }, 'Failed to cancel raid');
      return reply.status(500).send({ error: 'Failed to cancel raid' });
    }
  });

  // Rate a raid
  fastify.post('/api/raid/rate', async (request: FastifyRequest, reply: FastifyReply) => {
    const userId = await getAuthUserId(request);
    if (!userId) {
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
        userId,
      },
    });

    if (!raidHistory) {
      log.warn({ userId, raidHistoryId }, 'Raid history not found for rating');
      return reply.status(404).send({ error: 'Raid history not found' });
    }

    await prisma.raidHistory.update({
      where: { id: raidHistoryId },
      data: {
        manualRating: rating,
        notes,
      },
    });

    log.info({ userId, raidHistoryId, rating }, 'Raid rated');

    return { success: true };
  });

  // Get raid history
  fastify.get<{
    Querystring: { limit?: string; offset?: string };
  }>('/api/history', async (request, reply) => {
    const userId = await getAuthUserId(request);
    if (!userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const limit = Math.min(parseInt(request.query.limit || '20', 10), 100);
    const offset = parseInt(request.query.offset || '0', 10);

    const [raids, total] = await Promise.all([
      prisma.raidHistory.findMany({
        where: { userId },
        orderBy: { startedAt: 'desc' },
        take: limit,
        skip: offset,
      }),
      prisma.raidHistory.count({
        where: { userId },
      }),
    ]);

    log.debug({ userId, count: raids.length, total, limit, offset }, 'Raid history fetched');

    return { raids, total, limit, offset };
  });
}
