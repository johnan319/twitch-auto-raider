import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Fastify, { FastifyInstance } from 'fastify';
import cookie from '@fastify/cookie';
import session from '@fastify/session';
import { recommendationsRoutes } from './recommendations.js';
import { prisma } from '../lib/prisma.js';
import * as authModule from '../lib/auth.js';
import { recommendationsService } from '../services/recommendations.js';
import { createMockUser } from '../test/helpers.js';

// Mock dependencies
vi.mock('../lib/prisma.js', () => ({
  prisma: {
    user: {
      findUnique: vi.fn(),
    },
  },
}));

vi.mock('../lib/auth.js', () => ({
  getAuthUserId: vi.fn(),
}));

vi.mock('./auth.js', () => ({
  getAccessToken: vi.fn().mockResolvedValue('mock_access_token'),
}));

vi.mock('../services/recommendations.js', () => ({
  recommendationsService: {
    getRecommendations: vi.fn(),
  },
}));

describe('recommendationsRoutes', () => {
  let app: FastifyInstance;

  beforeEach(async () => {
    vi.clearAllMocks();

    app = Fastify({ logger: false });
    await app.register(cookie);
    await app.register(session, {
      secret: 'test_session_secret_min_32_chars',
      cookie: { secure: false },
    });
    await app.register(recommendationsRoutes);
  });

  afterEach(async () => {
    await app.close();
  });

  describe('POST /api/recommendations', () => {
    it('should return 401 when not authenticated', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue(null);

      const response = await app.inject({
        method: 'POST',
        url: '/api/recommendations',
      });

      expect(response.statusCode).toBe(401);
      expect(response.json()).toEqual({ error: 'Not authenticated' });
    });

    it('should return 401 when user not found', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.user.findUnique).mockResolvedValue(null);

      const response = await app.inject({
        method: 'POST',
        url: '/api/recommendations',
      });

      expect(response.statusCode).toBe(401);
      expect(response.json()).toEqual({ error: 'User not found' });
    });

    it('should return recommendations successfully', async () => {
      const mockUser = createMockUser();
      const mockRecommendations = [
        {
          id: '111',
          login: 'streamer1',
          displayName: 'Streamer One',
          viewerCount: 50,
          categoryName: 'Just Chatting',
          score: 85,
        },
        {
          id: '222',
          login: 'streamer2',
          displayName: 'Streamer Two',
          viewerCount: 100,
          categoryName: 'Gaming',
          score: 75,
        },
      ];

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.user.findUnique).mockResolvedValue(mockUser);
      vi.mocked(recommendationsService.getRecommendations).mockResolvedValue(mockRecommendations);

      const response = await app.inject({
        method: 'POST',
        url: '/api/recommendations',
      });

      expect(response.statusCode).toBe(200);
      const body = response.json();
      expect(body.recommendations).toHaveLength(2);
      expect(body.recommendations[0].login).toBe('streamer1');
      expect(recommendationsService.getRecommendations).toHaveBeenCalledWith(
        'mock_access_token',
        mockUser.id,
        mockUser.twitchUserId
      );
    });

    it('should return empty array when no recommendations', async () => {
      const mockUser = createMockUser();

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.user.findUnique).mockResolvedValue(mockUser);
      vi.mocked(recommendationsService.getRecommendations).mockResolvedValue([]);

      const response = await app.inject({
        method: 'POST',
        url: '/api/recommendations',
      });

      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({ recommendations: [] });
    });

    it('should return 500 when recommendations service fails', async () => {
      const mockUser = createMockUser();

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.user.findUnique).mockResolvedValue(mockUser);
      vi.mocked(recommendationsService.getRecommendations).mockRejectedValue(
        new Error('Service error')
      );

      const response = await app.inject({
        method: 'POST',
        url: '/api/recommendations',
      });

      expect(response.statusCode).toBe(500);
      expect(response.json()).toEqual({ error: 'Failed to get recommendations' });
    });
  });
});
