import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../lib/prisma.js';
import { getAccessToken } from './auth.js';
import { getAuthUserId } from '../lib/auth.js';
import { recommendationsService } from '../services/recommendations.js';
import { loggers } from '../lib/logger.js';

const log = loggers.recommendations;

export async function recommendationsRoutes(fastify: FastifyInstance): Promise<void> {
  // Get raid recommendations
  fastify.post('/api/recommendations', async (request: FastifyRequest, reply: FastifyReply) => {
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
      const recommendations = await recommendationsService.getRecommendations(
        accessToken,
        user.id,
        user.twitchUserId
      );

      return { recommendations };
    } catch (error) {
      log.error({ userId: user.id, error: error instanceof Error ? error.message : String(error) }, 'Failed to get recommendations');
      return reply.status(500).send({ error: 'Failed to get recommendations' });
    }
  });
}
