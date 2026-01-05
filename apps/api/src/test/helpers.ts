import Fastify, { FastifyInstance } from 'fastify';
import cookie from '@fastify/cookie';
import session from '@fastify/session';

/**
 * Build a Fastify app for testing with minimal plugins
 */
export async function buildTestApp(): Promise<FastifyInstance> {
  const app = Fastify({
    logger: false,
  });

  await app.register(cookie);
  await app.register(session, {
    secret: 'test_session_secret_min_32_chars',
    cookie: {
      secure: false,
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
    saveUninitialized: false,
  });

  return app;
}

/**
 * Create a mock user for testing
 */
export function createMockUser(overrides = {}) {
  return {
    id: 'test-user-id',
    twitchUserId: '12345678',
    login: 'testuser',
    displayName: 'Test User',
    profileImageUrl: 'https://example.com/avatar.png',
    createdAt: new Date(),
    ...overrides,
  };
}

/**
 * Create a mock session record for testing
 */
export function createMockSession(overrides = {}) {
  return {
    id: 'test-session-id',
    data: JSON.stringify({ userId: 'test-user-id' }),
    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    ...overrides,
  };
}

/**
 * Create a mock bearer token for testing
 */
export function createMockBearerToken(userId = 'test-user-id') {
  const token = 'test_bearer_token_123';
  return {
    token,
    record: {
      id: `bearer_${token}`,
      data: JSON.stringify({ userId }),
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    },
  };
}

/**
 * Create mock settings for testing
 */
export function createMockSettings(overrides = {}) {
  return {
    id: 'test-settings-id',
    userId: 'test-user-id',
    allowedLanguages: ['en'],
    matureContentFilter: 'EXCLUDE',
    broadcasterTypeFilter: 'ALL',
    minTargetViewers: 5,
    maxTargetViewers: 500,
    viewerCountPreference: 'SIMILAR',
    sameCategoryOnly: true,
    streamDurationPreference: 'ANY',
    raidMessage: "We're raiding @{target} - show them some love!",
    raidRunMessage: 'Raid and run! See you next stream!',
    ...overrides,
  };
}

/**
 * Create a mock warm list entry for testing
 */
export function createMockWarmListEntry(overrides = {}) {
  return {
    id: 'test-warmlist-id',
    userId: 'test-user-id',
    broadcasterId: '87654321',
    broadcasterLogin: 'favoritestreamer',
    broadcasterName: 'Favorite Streamer',
    profileImageUrl: 'https://example.com/streamer.png',
    notes: 'Great streamer!',
    priority: 1,
    createdAt: new Date(),
    ...overrides,
  };
}

/**
 * Create a mock raid history entry for testing
 */
export function createMockRaidHistory(overrides = {}) {
  return {
    id: 'test-raid-id',
    userId: 'test-user-id',
    fromBroadcasterId: '12345678',
    toBroadcasterId: '87654321',
    toBroadcasterLogin: 'targetstreamer',
    toBroadcasterName: 'Target Streamer',
    categoryId: '12345',
    categoryName: 'Just Chatting',
    startedAt: new Date(),
    executedAt: null,
    status: 'QUEUED',
    viewerCountAtRaid: null,
    manualRating: null,
    notes: null,
    ...overrides,
  };
}
