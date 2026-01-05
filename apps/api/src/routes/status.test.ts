import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Fastify, { FastifyInstance } from 'fastify';
import cookie from '@fastify/cookie';
import session from '@fastify/session';
import { statusRoutes } from './status.js';
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
    getUserStreamStatus: vi.fn(),
  },
}));

describe('statusRoutes', () => {
  let app: FastifyInstance;

  beforeEach(async () => {
    vi.clearAllMocks();

    app = Fastify({ logger: false });
    await app.register(cookie);
    await app.register(session, {
      secret: 'test_session_secret_min_32_chars',
      cookie: { secure: false },
    });
    await app.register(statusRoutes);
  });

  afterEach(async () => {
    await app.close();
  });

  describe('GET /api/status', () => {
    it('should return 401 when not authenticated', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue(null);

      const response = await app.inject({
        method: 'GET',
        url: '/api/status',
      });

      expect(response.statusCode).toBe(401);
      expect(response.json()).toEqual({ error: 'Not authenticated' });
    });

    it('should return 401 when user not found', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.user.findUnique).mockResolvedValue(null);

      const response = await app.inject({
        method: 'GET',
        url: '/api/status',
      });

      expect(response.statusCode).toBe(401);
      expect(response.json()).toEqual({ error: 'User not found' });
    });

    it('should return stream status when live', async () => {
      const mockUser = createMockUser();
      const mockStatus = {
        isLive: true,
        viewerCount: 150,
        categoryId: '509658',
        categoryName: 'Just Chatting',
      };

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.user.findUnique).mockResolvedValue(mockUser);
      vi.mocked(recommendationsService.getUserStreamStatus).mockResolvedValue(mockStatus);

      const response = await app.inject({
        method: 'GET',
        url: '/api/status',
      });

      expect(response.statusCode).toBe(200);
      const body = response.json();
      expect(body.isLive).toBe(true);
      expect(body.viewerCount).toBe(150);
      expect(body.categoryId).toBe('509658');
      expect(body.categoryName).toBe('Just Chatting');
      expect(recommendationsService.getUserStreamStatus).toHaveBeenCalledWith(
        'mock_access_token',
        mockUser.twitchUserId
      );
    });

    it('should return stream status when offline', async () => {
      const mockUser = createMockUser();
      const mockStatus = {
        isLive: false,
        viewerCount: 0,
        categoryId: null,
        categoryName: null,
      };

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.user.findUnique).mockResolvedValue(mockUser);
      vi.mocked(recommendationsService.getUserStreamStatus).mockResolvedValue(mockStatus);

      const response = await app.inject({
        method: 'GET',
        url: '/api/status',
      });

      expect(response.statusCode).toBe(200);
      const body = response.json();
      expect(body.isLive).toBe(false);
      expect(body.viewerCount).toBe(0);
      expect(body.categoryId).toBeNull();
      expect(body.categoryName).toBeNull();
    });

    it('should return 500 when status service fails', async () => {
      const mockUser = createMockUser();

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.user.findUnique).mockResolvedValue(mockUser);
      vi.mocked(recommendationsService.getUserStreamStatus).mockRejectedValue(
        new Error('Twitch API error')
      );

      const response = await app.inject({
        method: 'GET',
        url: '/api/status',
      });

      expect(response.statusCode).toBe(500);
      expect(response.json()).toEqual({ error: 'Failed to get stream status' });
    });
  });
});
