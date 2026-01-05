import { describe, it, expect, vi, beforeEach } from 'vitest';
import { FastifyRequest } from 'fastify';
import { getAuthUserId } from './auth.js';
import { prisma } from './prisma.js';

// Mock the prisma module
vi.mock('./prisma.js', () => ({
  prisma: {
    session: {
      findUnique: vi.fn(),
    },
  },
}));

describe('getAuthUserId', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return userId from valid bearer token', async () => {
    const mockToken = 'valid_bearer_token';
    const mockUserId = 'user-123';

    vi.mocked(prisma.session.findUnique).mockResolvedValue({
      id: `bearer_${mockToken}`,
      data: JSON.stringify({ userId: mockUserId }),
      expiresAt: new Date(Date.now() + 1000 * 60 * 60), // 1 hour from now
    });

    const mockRequest = {
      headers: {
        authorization: `Bearer ${mockToken}`,
      },
      session: {
        userId: undefined,
      },
    } as unknown as FastifyRequest;

    const result = await getAuthUserId(mockRequest);

    expect(result).toBe(mockUserId);
    expect(prisma.session.findUnique).toHaveBeenCalledWith({
      where: { id: `bearer_${mockToken}` },
    });
  });

  it('should return null for expired bearer token', async () => {
    const mockToken = 'expired_token';

    vi.mocked(prisma.session.findUnique).mockResolvedValue({
      id: `bearer_${mockToken}`,
      data: JSON.stringify({ userId: 'user-123' }),
      expiresAt: new Date(Date.now() - 1000), // Expired 1 second ago
    });

    const mockRequest = {
      headers: {
        authorization: `Bearer ${mockToken}`,
      },
      session: {
        userId: undefined,
      },
    } as unknown as FastifyRequest;

    const result = await getAuthUserId(mockRequest);

    expect(result).toBeNull();
  });

  it('should return null for non-existent bearer token', async () => {
    vi.mocked(prisma.session.findUnique).mockResolvedValue(null);

    const mockRequest = {
      headers: {
        authorization: 'Bearer invalid_token',
      },
      session: {
        userId: undefined,
      },
    } as unknown as FastifyRequest;

    const result = await getAuthUserId(mockRequest);

    expect(result).toBeNull();
  });

  it('should fall back to session userId when no bearer token', async () => {
    const mockUserId = 'session-user-123';

    const mockRequest = {
      headers: {},
      session: {
        userId: mockUserId,
      },
    } as unknown as FastifyRequest;

    const result = await getAuthUserId(mockRequest);

    expect(result).toBe(mockUserId);
    expect(prisma.session.findUnique).not.toHaveBeenCalled();
  });

  it('should return null when no auth provided', async () => {
    const mockRequest = {
      headers: {},
      session: {
        userId: undefined,
      },
    } as unknown as FastifyRequest;

    const result = await getAuthUserId(mockRequest);

    expect(result).toBeNull();
  });

  it('should handle database errors gracefully', async () => {
    vi.mocked(prisma.session.findUnique).mockRejectedValue(new Error('DB error'));

    const mockRequest = {
      headers: {
        authorization: 'Bearer some_token',
      },
      session: {
        userId: undefined,
      },
    } as unknown as FastifyRequest;

    const result = await getAuthUserId(mockRequest);

    expect(result).toBeNull();
  });

  it('should ignore malformed authorization header', async () => {
    const mockRequest = {
      headers: {
        authorization: 'NotBearer token',
      },
      session: {
        userId: 'fallback-user',
      },
    } as unknown as FastifyRequest;

    const result = await getAuthUserId(mockRequest);

    expect(result).toBe('fallback-user');
    expect(prisma.session.findUnique).not.toHaveBeenCalled();
  });
});
