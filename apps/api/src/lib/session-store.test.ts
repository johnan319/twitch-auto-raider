import { describe, it, expect, vi, beforeEach } from 'vitest';
import { sessionStore } from './session-store.js';
import { prisma } from './prisma.js';

// Mock the prisma module
vi.mock('./prisma.js', () => ({
  prisma: {
    session: {
      findUnique: vi.fn(),
      upsert: vi.fn(),
      delete: vi.fn(),
    },
  },
}));

describe('sessionStore', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('get', () => {
    it('should return session data for valid session', async () => {
      const sessionId = 'test-session';
      const sessionData = { userId: 'user-123', cookie: {} };

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        id: sessionId,
        data: JSON.stringify(sessionData),
        expiresAt: new Date(Date.now() + 1000 * 60 * 60),
      });

      const result = await new Promise<Record<string, unknown> | null>((resolve) => {
        sessionStore.get(sessionId, (err, data) => {
          resolve(data ?? null);
        });
      });

      expect(result).toEqual(sessionData);
    });

    it('should return null for non-existent session', async () => {
      vi.mocked(prisma.session.findUnique).mockResolvedValue(null);

      const result = await new Promise<Record<string, unknown> | null>((resolve) => {
        sessionStore.get('non-existent', (err, data) => {
          resolve(data ?? null);
        });
      });

      expect(result).toBeNull();
    });

    it('should return null and delete expired session', async () => {
      const sessionId = 'expired-session';

      vi.mocked(prisma.session.findUnique).mockResolvedValue({
        id: sessionId,
        data: JSON.stringify({ userId: 'user-123' }),
        expiresAt: new Date(Date.now() - 1000), // Expired
      });
      vi.mocked(prisma.session.delete).mockResolvedValue({} as never);

      const result = await new Promise<Record<string, unknown> | null>((resolve) => {
        sessionStore.get(sessionId, (err, data) => {
          resolve(data ?? null);
        });
      });

      expect(result).toBeNull();
      expect(prisma.session.delete).toHaveBeenCalledWith({
        where: { id: sessionId },
      });
    });
  });

  describe('set', () => {
    it('should upsert session data', async () => {
      const sessionId = 'test-session';
      const sessionData = { userId: 'user-123', cookie: {} };

      vi.mocked(prisma.session.upsert).mockResolvedValue({} as never);

      await new Promise<void>((resolve, reject) => {
        sessionStore.set(sessionId, sessionData, (err) => {
          if (err) reject(err);
          else resolve();
        });
      });

      expect(prisma.session.upsert).toHaveBeenCalledWith({
        where: { id: sessionId },
        update: {
          data: JSON.stringify(sessionData),
          expiresAt: expect.any(Date),
        },
        create: {
          id: sessionId,
          data: JSON.stringify(sessionData),
          expiresAt: expect.any(Date),
        },
      });
    });

    it('should call callback with error on failure', async () => {
      const sessionId = 'test-session';
      const dbError = new Error('DB error');

      vi.mocked(prisma.session.upsert).mockRejectedValue(dbError);

      const error = await new Promise<Error | undefined>((resolve) => {
        sessionStore.set(sessionId, {}, (err) => {
          resolve(err);
        });
      });

      expect(error).toBeDefined();
      expect(error?.message).toBe('DB error');
    });
  });

  describe('destroy', () => {
    it('should delete session', async () => {
      const sessionId = 'test-session';

      vi.mocked(prisma.session.delete).mockResolvedValue({} as never);

      await new Promise<void>((resolve) => {
        sessionStore.destroy(sessionId, () => {
          resolve();
        });
      });

      expect(prisma.session.delete).toHaveBeenCalledWith({
        where: { id: sessionId },
      });
    });

    it('should not throw on delete failure', async () => {
      const sessionId = 'non-existent';

      vi.mocked(prisma.session.delete).mockRejectedValue(new Error('Not found'));

      // Should not throw
      await new Promise<void>((resolve) => {
        sessionStore.destroy(sessionId, () => {
          resolve();
        });
      });

      expect(prisma.session.delete).toHaveBeenCalled();
    });
  });
});
