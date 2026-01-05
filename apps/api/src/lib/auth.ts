import { FastifyRequest } from 'fastify';
import { prisma } from './prisma.js';
import { loggers } from './logger.js';

const log = loggers.auth;

/**
 * Get the authenticated user ID from either bearer token or session cookie
 */
export async function getAuthUserId(request: FastifyRequest): Promise<string | null> {
  // Check for bearer token first
  const authHeader = request.headers.authorization;

  if (authHeader?.startsWith('Bearer ')) {
    const bearerToken = authHeader.substring(7);
    try {
      const tokenRecord = await prisma.session.findUnique({
        where: { id: `bearer_${bearerToken}` },
      });

      if (tokenRecord && tokenRecord.expiresAt > new Date()) {
        const tokenData = JSON.parse(tokenRecord.data);
        return tokenData.userId;
      }
    } catch (error) {
      log.error({ error }, 'Error validating bearer token');
    }
  }

  // Fall back to session cookie
  return request.session.userId || null;
}
