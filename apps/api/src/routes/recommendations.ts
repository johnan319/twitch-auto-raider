import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { prisma } from '../lib/prisma.js';
import { getAccessToken } from './auth.js';
import { recommendationsService } from '../services/recommendations.js';

export async function recommendationsRoutes(fastify: FastifyInstance): Promise<void> {
  // Get raid recommendations
  fastify.post('/api/recommendations', async (request: FastifyRequest, reply: FastifyReply) => {
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
      const recommendations = await recommendationsService.getRecommendations(
        accessToken,
        user.id,
        user.twitchUserId
      );

      return { recommendations };
    } catch (error) {
      console.error('Recommendations error:', error);
      return reply.status(500).send({ error: 'Failed to get recommendations' });
    }
  });
}
