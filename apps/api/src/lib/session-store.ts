import { prisma } from './prisma.js';

type Callback = (err?: Error) => void;

// Custom session store that persists to database
// Uses callback-based interface required by @fastify/session
export const sessionStore = {
  get(sessionId: string, callback: (err: Error | null, session?: Record<string, unknown> | null) => void): void {
    console.log('[SESSION] GET sessionId:', sessionId);
    prisma.session.findUnique({
      where: { id: sessionId },
    })
      .then((session) => {
        if (!session) {
          console.log('[SESSION] GET - session not found');
          callback(null, null);
          return;
        }

        // Check if expired
        if (session.expiresAt < new Date()) {
          console.log('[SESSION] GET - session expired');
          prisma.session.delete({ where: { id: sessionId } })
            .then(() => callback(null, null))
            .catch(() => callback(null, null));
          return;
        }

        const data = JSON.parse(session.data);
        console.log('[SESSION] GET - found session with keys:', Object.keys(data));
        callback(null, data);
      })
      .catch((error) => {
        console.error('[SESSION] Error getting session:', error);
        callback(null, null);
      });
  },

  set(sessionId: string, session: Record<string, unknown>, callback: Callback): void {
    console.log('[SESSION] SET sessionId:', sessionId, 'keys:', Object.keys(session));
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    prisma.session.upsert({
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
    })
      .then(() => {
        console.log('[SESSION] SET - success');
        callback();
      })
      .catch((error) => {
        console.error('[SESSION] Error setting session:', error);
        callback(error instanceof Error ? error : new Error(String(error)));
      });
  },

  destroy(sessionId: string, callback: Callback): void {
    console.log('[SESSION] DESTROY sessionId:', sessionId);
    prisma.session.delete({
      where: { id: sessionId },
    })
      .then(() => callback())
      .catch(() => callback()); // Ignore errors (might not exist)
  },
};
