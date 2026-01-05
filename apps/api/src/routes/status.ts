import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../lib/prisma.js';
import { getAccessToken } from './auth.js';
import { getAuthUserId } from '../lib/auth.js';
import { recommendationsService } from '../services/recommendations.js';
import { loggers } from '../lib/logger.js';

const log = loggers.status;

export async function statusRoutes(fastify: FastifyInstance): Promise<void> {
  // Get current stream status
  fastify.get('/api/status', async (request: FastifyRequest, reply: FastifyReply) => {
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

    try {
      const accessToken = await getAccessToken(userId);
      const status = await recommendationsService.getUserStreamStatus(
        accessToken,
        user.twitchUserId
      );

      log.debug({
        userId: user.id,
        isLive: status.isLive,
        viewerCount: status.viewerCount,
        category: status.categoryName,
      }, 'Stream status fetched');

      return {
        isLive: status.isLive,
        viewerCount: status.viewerCount,
        categoryId: status.categoryId,
        categoryName: status.categoryName,
      };
    } catch (error) {
      log.error({ userId: user.id, error: error instanceof Error ? error.message : String(error) }, 'Failed to get stream status');
      return reply.status(500).send({ error: 'Failed to get stream status' });
    }
  });
}
