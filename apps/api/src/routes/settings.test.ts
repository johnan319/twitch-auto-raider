import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Fastify, { FastifyInstance } from 'fastify';
import cookie from '@fastify/cookie';
import session from '@fastify/session';
import { settingsRoutes } from './settings.js';
import { prisma } from '../lib/prisma.js';
import * as authModule from '../lib/auth.js';
import { createMockSettings } from '../test/helpers.js';

// Mock dependencies
vi.mock('../lib/prisma.js', () => ({
  prisma: {
    settings: {
      findUnique: vi.fn(),
      update: vi.fn(),
    },
    raidExclude: {
      findMany: vi.fn(),
      findFirst: vi.fn(),
      upsert: vi.fn(),
      delete: vi.fn(),
    },
    categoryBlocklist: {
      findMany: vi.fn(),
      findFirst: vi.fn(),
      upsert: vi.fn(),
      delete: vi.fn(),
    },
  },
}));

vi.mock('../lib/auth.js', () => ({
  getAuthUserId: vi.fn(),
}));

describe('settingsRoutes', () => {
  let app: FastifyInstance;

  beforeEach(async () => {
    vi.clearAllMocks();

    app = Fastify({ logger: false });
    await app.register(cookie);
    await app.register(session, {
      secret: 'test_session_secret_min_32_chars',
      cookie: { secure: false },
    });
    await app.register(settingsRoutes);
  });

  afterEach(async () => {
    await app.close();
  });

  describe('GET /api/settings', () => {
    it('should return 401 when not authenticated', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue(null);

      const response = await app.inject({
        method: 'GET',
        url: '/api/settings',
      });

      expect(response.statusCode).toBe(401);
    });

    it('should return settings when authenticated', async () => {
      const mockSettings = createMockSettings();

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.settings.findUnique).mockResolvedValue(mockSettings);

      const response = await app.inject({
        method: 'GET',
        url: '/api/settings',
      });

      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({ settings: mockSettings });
    });

    it('should return 404 when settings not found', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.settings.findUnique).mockResolvedValue(null);

      const response = await app.inject({
        method: 'GET',
        url: '/api/settings',
      });

      expect(response.statusCode).toBe(404);
    });
  });

  describe('PUT /api/settings', () => {
    it('should return 401 when not authenticated', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue(null);

      const response = await app.inject({
        method: 'PUT',
        url: '/api/settings',
        payload: { minTargetViewers: 10 },
      });

      expect(response.statusCode).toBe(401);
    });

    it('should update settings', async () => {
      const mockSettings = createMockSettings();
      const updatedSettings = { ...mockSettings, minTargetViewers: 10 };

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.settings.update).mockResolvedValue(updatedSettings);

      const response = await app.inject({
        method: 'PUT',
        url: '/api/settings',
        payload: { minTargetViewers: 10 },
      });

      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({ settings: updatedSettings });
    });

    it('should return 400 for invalid settings', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');

      const response = await app.inject({
        method: 'PUT',
        url: '/api/settings',
        payload: { matureContentFilter: 'INVALID_VALUE' },
      });

      expect(response.statusCode).toBe(400);
    });

    it('should accept valid enum values', async () => {
      const mockSettings = createMockSettings({ matureContentFilter: 'INCLUDE' });

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.settings.update).mockResolvedValue(mockSettings);

      const response = await app.inject({
        method: 'PUT',
        url: '/api/settings',
        payload: { matureContentFilter: 'INCLUDE' },
      });

      expect(response.statusCode).toBe(200);
    });
  });

  describe('GET /api/excludes', () => {
    it('should return excludes list', async () => {
      const mockExcludes = [
        { id: '1', userId: 'test-user-id', excludedBroadcasterId: '111', reason: 'Spam' },
        { id: '2', userId: 'test-user-id', excludedBroadcasterId: '222', reason: null },
      ];

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.raidExclude.findMany).mockResolvedValue(mockExcludes);

      const response = await app.inject({
        method: 'GET',
        url: '/api/excludes',
      });

      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({ excludes: mockExcludes });
    });
  });

  describe('POST /api/excludes', () => {
    it('should add exclude', async () => {
      const mockExclude = {
        id: '1',
        userId: 'test-user-id',
        excludedBroadcasterId: '111',
        reason: 'Not interested',
      };

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.raidExclude.upsert).mockResolvedValue(mockExclude);

      const response = await app.inject({
        method: 'POST',
        url: '/api/excludes',
        payload: {
          excludedBroadcasterId: '111',
          reason: 'Not interested',
        },
      });

      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({ exclude: mockExclude });
    });
  });

  describe('GET /api/category-blocklist', () => {
    it('should return category blocklist', async () => {
      const mockBlocklist = [
        { id: '1', userId: 'test-user-id', categoryId: '509658', categoryName: 'Just Chatting' },
      ];

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.categoryBlocklist.findMany).mockResolvedValue(mockBlocklist);

      const response = await app.inject({
        method: 'GET',
        url: '/api/category-blocklist',
      });

      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({ blocklist: mockBlocklist });
    });
  });

  describe('POST /api/category-blocklist', () => {
    it('should add category to blocklist', async () => {
      const mockEntry = {
        id: '1',
        userId: 'test-user-id',
        categoryId: '509658',
        categoryName: 'Just Chatting',
      };

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.categoryBlocklist.upsert).mockResolvedValue(mockEntry);

      const response = await app.inject({
        method: 'POST',
        url: '/api/category-blocklist',
        payload: {
          categoryId: '509658',
          categoryName: 'Just Chatting',
        },
      });

      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({ entry: mockEntry });
    });
  });

  describe('DELETE /api/category-blocklist/:id', () => {
    it('should remove category from blocklist', async () => {
      const mockEntry = {
        id: '1',
        userId: 'test-user-id',
        categoryId: '509658',
        categoryName: 'Just Chatting',
      };

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.categoryBlocklist.findFirst).mockResolvedValue(mockEntry);
      vi.mocked(prisma.categoryBlocklist.delete).mockResolvedValue(mockEntry);

      const response = await app.inject({
        method: 'DELETE',
        url: '/api/category-blocklist/1',
      });

      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({ success: true });
    });

    it('should return 404 when category not found', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.categoryBlocklist.findFirst).mockResolvedValue(null);

      const response = await app.inject({
        method: 'DELETE',
        url: '/api/category-blocklist/non-existent',
      });

      expect(response.statusCode).toBe(404);
    });
  });
});
