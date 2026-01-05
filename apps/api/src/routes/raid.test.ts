import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Fastify, { FastifyInstance } from 'fastify';
import cookie from '@fastify/cookie';
import session from '@fastify/session';
import { raidRoutes } from './raid.js';
import { prisma } from '../lib/prisma.js';
import * as authModule from '../lib/auth.js';
import { twitchApi } from '../services/twitch-api.js';
import { createMockUser, createMockSettings, createMockRaidHistory } from '../test/helpers.js';

// Mock dependencies
vi.mock('../lib/prisma.js', () => ({
  prisma: {
    user: {
      findUnique: vi.fn(),
    },
    raidHistory: {
      findMany: vi.fn(),
      findFirst: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      updateMany: vi.fn(),
      count: vi.fn(),
    },
  },
}));

vi.mock('../lib/auth.js', () => ({
  getAuthUserId: vi.fn(),
}));

vi.mock('./auth.js', () => ({
  getAccessToken: vi.fn().mockResolvedValue('mock_access_token'),
}));

vi.mock('../services/twitch-api.js', () => ({
  twitchApi: {
    startRaid: vi.fn().mockResolvedValue(undefined),
    cancelRaid: vi.fn().mockResolvedValue(undefined),
    sendChatMessage: vi.fn().mockResolvedValue(undefined),
  },
}));

describe('raidRoutes', () => {
  let app: FastifyInstance;

  beforeEach(async () => {
    vi.clearAllMocks();

    app = Fastify({ logger: false });
    await app.register(cookie);
    await app.register(session, {
      secret: 'test_session_secret_min_32_chars',
      cookie: { secure: false },
    });
    await app.register(raidRoutes);
  });

  afterEach(async () => {
    await app.close();
  });

  describe('POST /api/raid/start', () => {
    it('should return 401 when not authenticated', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue(null);

      const response = await app.inject({
        method: 'POST',
        url: '/api/raid/start',
        payload: {
          toBroadcasterId: '87654321',
          toBroadcasterLogin: 'targetstreamer',
          toBroadcasterName: 'Target Streamer',
        },
      });

      expect(response.statusCode).toBe(401);
    });

    it('should return 400 for invalid request body', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');

      const response = await app.inject({
        method: 'POST',
        url: '/api/raid/start',
        payload: {}, // Missing required fields
      });

      expect(response.statusCode).toBe(400);
    });

    it('should start raid successfully', async () => {
      const mockUser = {
        ...createMockUser(),
        settings: createMockSettings(),
      };
      const mockRaidHistory = createMockRaidHistory();

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.user.findUnique).mockResolvedValue(mockUser);
      vi.mocked(prisma.raidHistory.create).mockResolvedValue(mockRaidHistory);

      const response = await app.inject({
        method: 'POST',
        url: '/api/raid/start',
        payload: {
          toBroadcasterId: '87654321',
          toBroadcasterLogin: 'targetstreamer',
          toBroadcasterName: 'Target Streamer',
          categoryId: '12345',
          categoryName: 'Just Chatting',
          sendMessages: true,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = response.json();
      expect(body.success).toBe(true);
      expect(body.raidHistoryId).toBeDefined();
      expect(twitchApi.startRaid).toHaveBeenCalled();
    });

    it('should handle Twitch API errors', async () => {
      const mockUser = {
        ...createMockUser(),
        settings: createMockSettings(),
      };

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.user.findUnique).mockResolvedValue(mockUser);
      vi.mocked(twitchApi.startRaid).mockRejectedValue(new Error('Twitch API error'));
      vi.mocked(prisma.raidHistory.create).mockResolvedValue(createMockRaidHistory({ status: 'FAILED' }));

      const response = await app.inject({
        method: 'POST',
        url: '/api/raid/start',
        payload: {
          toBroadcasterId: '87654321',
          toBroadcasterLogin: 'targetstreamer',
          toBroadcasterName: 'Target Streamer',
        },
      });

      expect(response.statusCode).toBe(500);
    });
  });

  describe('POST /api/raid/cancel', () => {
    it('should return 401 when not authenticated', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue(null);

      const response = await app.inject({
        method: 'POST',
        url: '/api/raid/cancel',
      });

      expect(response.statusCode).toBe(401);
    });

    it('should cancel raid successfully', async () => {
      const mockUser = createMockUser();

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.user.findUnique).mockResolvedValue(mockUser);
      vi.mocked(prisma.raidHistory.updateMany).mockResolvedValue({ count: 1 });

      const response = await app.inject({
        method: 'POST',
        url: '/api/raid/cancel',
      });

      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({ success: true, message: 'Raid canceled' });
      expect(twitchApi.cancelRaid).toHaveBeenCalled();
    });
  });

  describe('POST /api/raid/rate', () => {
    it('should return 401 when not authenticated', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue(null);

      const response = await app.inject({
        method: 'POST',
        url: '/api/raid/rate',
        payload: {
          raidHistoryId: 'raid-123',
          rating: 1,
        },
      });

      expect(response.statusCode).toBe(401);
    });

    it('should rate raid successfully', async () => {
      const mockRaidHistory = createMockRaidHistory();

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.raidHistory.findFirst).mockResolvedValue(mockRaidHistory);
      vi.mocked(prisma.raidHistory.update).mockResolvedValue({
        ...mockRaidHistory,
        manualRating: 1,
      });

      const response = await app.inject({
        method: 'POST',
        url: '/api/raid/rate',
        payload: {
          raidHistoryId: mockRaidHistory.id,
          rating: 1,
          notes: 'Great raid!',
        },
      });

      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({ success: true });
    });

    it('should return 404 when raid not found', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.raidHistory.findFirst).mockResolvedValue(null);

      const response = await app.inject({
        method: 'POST',
        url: '/api/raid/rate',
        payload: {
          raidHistoryId: 'non-existent',
          rating: 1,
        },
      });

      expect(response.statusCode).toBe(404);
    });

    it('should validate rating range', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');

      const response = await app.inject({
        method: 'POST',
        url: '/api/raid/rate',
        payload: {
          raidHistoryId: 'raid-123',
          rating: 5, // Invalid: should be -1 to 1
        },
      });

      expect(response.statusCode).toBe(400);
    });
  });

  describe('GET /api/history', () => {
    it('should return 401 when not authenticated', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue(null);

      const response = await app.inject({
        method: 'GET',
        url: '/api/history',
      });

      expect(response.statusCode).toBe(401);
    });

    it('should return raid history with pagination', async () => {
      const mockRaids = [
        createMockRaidHistory({ id: '1' }),
        createMockRaidHistory({ id: '2' }),
      ];

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.raidHistory.findMany).mockResolvedValue(mockRaids);
      vi.mocked(prisma.raidHistory.count).mockResolvedValue(10);

      const response = await app.inject({
        method: 'GET',
        url: '/api/history?limit=2&offset=0',
      });

      expect(response.statusCode).toBe(200);
      const body = response.json();
      expect(body.raids).toHaveLength(2);
      expect(body.total).toBe(10);
      expect(body.limit).toBe(2);
      expect(body.offset).toBe(0);
    });

    it('should cap limit at 100', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.raidHistory.findMany).mockResolvedValue([]);
      vi.mocked(prisma.raidHistory.count).mockResolvedValue(0);

      const response = await app.inject({
        method: 'GET',
        url: '/api/history?limit=200',
      });

      expect(response.statusCode).toBe(200);
      expect(response.json().limit).toBe(100);
    });
  });
});
