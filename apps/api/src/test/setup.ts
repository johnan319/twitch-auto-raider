import { vi } from 'vitest';

// Mock environment variables
process.env.NODE_ENV = 'test';
process.env.PORT = '3001';
process.env.TWITCH_CLIENT_ID = 'test_client_id';
process.env.TWITCH_CLIENT_SECRET = 'test_client_secret';
process.env.TWITCH_REDIRECT_URI = 'http://localhost:3001/auth/twitch/callback';
process.env.ENCRYPTION_KEY = 'test_encryption_key_32_chars_xx';
process.env.SESSION_SECRET = 'test_session_secret_min_32_chars';
process.env.CORS_ORIGIN = 'http://localhost:3000';
process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test';

// Global mocks
vi.mock('../lib/prisma.js', () => ({
  prisma: {
    user: {
      findUnique: vi.fn(),
      upsert: vi.fn(),
      count: vi.fn(),
    },
    session: {
      findUnique: vi.fn(),
      create: vi.fn(),
      upsert: vi.fn(),
      delete: vi.fn(),
    },
    settings: {
      findUnique: vi.fn(),
      upsert: vi.fn(),
      update: vi.fn(),
    },
    oAuthToken: {
      findUnique: vi.fn(),
      upsert: vi.fn(),
      update: vi.fn(),
    },
    warmListEntry: {
      findMany: vi.fn(),
      findFirst: vi.fn(),
      upsert: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
    raidHistory: {
      findMany: vi.fn(),
      findFirst: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      updateMany: vi.fn(),
      count: vi.fn(),
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
    $connect: vi.fn(),
  },
}));
