import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Fastify, { FastifyInstance } from 'fastify';
import cookie from '@fastify/cookie';
import session from '@fastify/session';
import { warmlistRoutes } from './warmlist.js';
import { prisma } from '../lib/prisma.js';
import * as authModule from '../lib/auth.js';
import { createMockWarmListEntry, createMockUser } from '../test/helpers.js';

// Mock dependencies
vi.mock('../lib/prisma.js', () => ({
  prisma: {
    warmListEntry: {
      findMany: vi.fn(),
      findFirst: vi.fn(),
      upsert: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
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
    getUserByLogin: vi.fn().mockResolvedValue({
      id: '87654321',
      login: 'teststreamer',
      display_name: 'Test Streamer',
      profile_image_url: 'https://example.com/avatar.png',
    }),
  },
}));

describe('warmlistRoutes', () => {
  let app: FastifyInstance;

  beforeEach(async () => {
    vi.clearAllMocks();

    app = Fastify({ logger: false });
    await app.register(cookie);
    await app.register(session, {
      secret: 'test_session_secret_min_32_chars',
      cookie: { secure: false },
    });
    await app.register(warmlistRoutes);
  });

  afterEach(async () => {
    await app.close();
  });

  describe('GET /api/warmlist', () => {
    it('should return 401 when not authenticated', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue(null);

      const response = await app.inject({
        method: 'GET',
        url: '/api/warmlist',
      });

      expect(response.statusCode).toBe(401);
      expect(response.json()).toEqual({ error: 'Not authenticated' });
    });

    it('should return warmlist entries when authenticated', async () => {
      const mockEntries = [
        createMockWarmListEntry({ id: '1' }),
        createMockWarmListEntry({ id: '2', broadcasterLogin: 'streamer2' }),
      ];

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.warmListEntry.findMany).mockResolvedValue(mockEntries);

      const response = await app.inject({
        method: 'GET',
        url: '/api/warmlist',
      });

      expect(response.statusCode).toBe(200);
      const body = response.json();
      expect(body.entries).toHaveLength(2);
      expect(body.entries[0].id).toBe('1');
      expect(body.entries[1].broadcasterLogin).toBe('streamer2');
      expect(prisma.warmListEntry.findMany).toHaveBeenCalledWith({
        where: { userId: 'test-user-id' },
        orderBy: [{ priority: 'desc' }, { createdAt: 'desc' }],
      });
    });

    it('should return empty array when no entries', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.warmListEntry.findMany).mockResolvedValue([]);

      const response = await app.inject({
        method: 'GET',
        url: '/api/warmlist',
      });

      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({ entries: [] });
    });
  });

  describe('POST /api/warmlist', () => {
    it('should return 401 when not authenticated', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue(null);

      const response = await app.inject({
        method: 'POST',
        url: '/api/warmlist',
        payload: { broadcasterLogin: 'teststreamer' },
      });

      expect(response.statusCode).toBe(401);
    });

    it('should return 400 for invalid request body', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');

      const response = await app.inject({
        method: 'POST',
        url: '/api/warmlist',
        payload: {}, // Missing required broadcasterLogin
      });

      expect(response.statusCode).toBe(400);
    });

    it('should add streamer to warmlist', async () => {
      const mockEntry = createMockWarmListEntry();

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.warmListEntry.upsert).mockResolvedValue(mockEntry);

      const response = await app.inject({
        method: 'POST',
        url: '/api/warmlist',
        payload: {
          broadcasterLogin: 'teststreamer',
          notes: 'Great streamer',
          priority: 5,
        },
      });

      expect(response.statusCode).toBe(200);
      const body = response.json();
      expect(body.entry.id).toBe(mockEntry.id);
      expect(body.entry.broadcasterLogin).toBe(mockEntry.broadcasterLogin);
    });
  });

  describe('PUT /api/warmlist/:id', () => {
    it('should return 401 when not authenticated', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue(null);

      const response = await app.inject({
        method: 'PUT',
        url: '/api/warmlist/entry-123',
        payload: { notes: 'Updated notes' },
      });

      expect(response.statusCode).toBe(401);
    });

    it('should return 404 when entry not found', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.warmListEntry.findFirst).mockResolvedValue(null);

      const response = await app.inject({
        method: 'PUT',
        url: '/api/warmlist/non-existent',
        payload: { notes: 'Updated' },
      });

      expect(response.statusCode).toBe(404);
    });

    it('should update warmlist entry', async () => {
      const mockEntry = createMockWarmListEntry();
      const updatedEntry = { ...mockEntry, notes: 'Updated notes' };

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.warmListEntry.findFirst).mockResolvedValue(mockEntry);
      vi.mocked(prisma.warmListEntry.update).mockResolvedValue(updatedEntry);

      const response = await app.inject({
        method: 'PUT',
        url: `/api/warmlist/${mockEntry.id}`,
        payload: { notes: 'Updated notes' },
      });

      expect(response.statusCode).toBe(200);
      const body = response.json();
      expect(body.entry.id).toBe(mockEntry.id);
      expect(body.entry.notes).toBe('Updated notes');
    });
  });

  describe('DELETE /api/warmlist/:id', () => {
    it('should return 401 when not authenticated', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue(null);

      const response = await app.inject({
        method: 'DELETE',
        url: '/api/warmlist/entry-123',
      });

      expect(response.statusCode).toBe(401);
    });

    it('should return 404 when entry not found', async () => {
      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.warmListEntry.findFirst).mockResolvedValue(null);

      const response = await app.inject({
        method: 'DELETE',
        url: '/api/warmlist/non-existent',
      });

      expect(response.statusCode).toBe(404);
    });

    it('should delete warmlist entry', async () => {
      const mockEntry = createMockWarmListEntry();

      vi.mocked(authModule.getAuthUserId).mockResolvedValue('test-user-id');
      vi.mocked(prisma.warmListEntry.findFirst).mockResolvedValue(mockEntry);
      vi.mocked(prisma.warmListEntry.delete).mockResolvedValue(mockEntry);

      const response = await app.inject({
        method: 'DELETE',
        url: `/api/warmlist/${mockEntry.id}`,
      });

      expect(response.statusCode).toBe(200);
      expect(response.json()).toEqual({ success: true });
      expect(prisma.warmListEntry.delete).toHaveBeenCalledWith({
        where: { id: mockEntry.id },
      });
    });
  });
});
