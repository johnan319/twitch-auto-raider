import { prisma } from './prisma.js';

interface SessionData {
  [key: string]: unknown;
}

export class PrismaSessionStore {
  async get(sessionId: string): Promise<SessionData | null> {
    try {
      const session = await prisma.session.findUnique({
        where: { id: sessionId },
      });

      if (!session) {
        return null;
      }

      // Check if expired
      if (session.expiresAt < new Date()) {
        await this.destroy(sessionId);
        return null;
      }

      return JSON.parse(session.data);
    } catch (error) {
      console.error('[SESSION] Error getting session:', error);
      return null;
    }
  }

  async set(sessionId: string, session: SessionData, callback?: (err?: Error) => void): Promise<void> {
    try {
      const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

      await prisma.session.upsert({
        where: { id: sessionId },
        update: {
          data: JSON.stringify(session),
          expiresAt,
        },
        create: {
          id: sessionId,
          data: JSON.stringify(session),
          expiresAt,
        },
      });

      callback?.();
    } catch (error) {
      console.error('[SESSION] Error setting session:', error);
      callback?.(error instanceof Error ? error : new Error(String(error)));
    }
  }

  async destroy(sessionId: string, callback?: (err?: Error) => void): Promise<void> {
    try {
      await prisma.session.delete({
        where: { id: sessionId },
      }).catch(() => {
        // Ignore if not found
      });

      callback?.();
    } catch (error) {
      console.error('[SESSION] Error destroying session:', error);
      callback?.(error instanceof Error ? error : new Error(String(error)));
    }
  }
}

export const sessionStore = new PrismaSessionStore();
