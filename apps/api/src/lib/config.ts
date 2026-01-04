import 'dotenv/config';

function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const config = {
  port: parseInt(process.env.PORT || '3001', 10),

  twitch: {
    clientId: requireEnv('TWITCH_CLIENT_ID'),
    clientSecret: requireEnv('TWITCH_CLIENT_SECRET'),
    redirectUri: requireEnv('TWITCH_REDIRECT_URI'),
    scopes: ['channel:manage:raids', 'user:write:chat', 'user:read:email'],
  },

  encryption: {
    key: requireEnv('ENCRYPTION_KEY'),
  },

  session: {
    secret: requireEnv('SESSION_SECRET'),
  },

  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  },
} as const;
