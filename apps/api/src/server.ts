console.log('[BOOT] Starting...');

// Catch any uncaught errors
process.on('uncaughtException', (err) => {
  console.error('[FATAL] Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('[FATAL] Unhandled Rejection:', reason);
});

import Fastify from 'fastify';
import cors from '@fastify/cors';
import cookie from '@fastify/cookie';
import session from '@fastify/session';

console.log('[BOOT] Core modules loaded');

import { config } from './lib/config.js';

console.log('[BOOT] Config loaded, port:', config.port);

import { authRoutes } from './routes/auth.js';
import { statusRoutes } from './routes/status.js';
import { recommendationsRoutes } from './routes/recommendations.js';
import { raidRoutes } from './routes/raid.js';
import { warmlistRoutes } from './routes/warmlist.js';
import { settingsRoutes } from './routes/settings.js';

console.log('[BOOT] Routes loaded');

const isProduction = process.env.NODE_ENV === 'production';

const fastify = Fastify({
  logger: {
    level: 'info',
  },
});

async function main() {
  console.log('[MAIN] Starting main function');

  try {
    await fastify.register(cors, {
      origin: config.cors.origin,
      credentials: true,
    });
    console.log('[MAIN] CORS registered');

    await fastify.register(cookie);
    console.log('[MAIN] Cookie registered');

    await fastify.register(session, {
      secret: config.session.secret,
      cookie: {
        secure: isProduction,
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      },
      saveUninitialized: false,
    });
    console.log('[MAIN] Session registered');

    // Register routes
    await fastify.register(authRoutes);
    await fastify.register(statusRoutes);
    await fastify.register(recommendationsRoutes);
    await fastify.register(raidRoutes);
    await fastify.register(warmlistRoutes);
    await fastify.register(settingsRoutes);
    console.log('[MAIN] Routes registered');

    // Health check - simple response
    fastify.get('/health', async () => {
      return { status: 'ok' };
    });

    // Start server
    const address = await fastify.listen({ port: config.port, host: '0.0.0.0' });
    console.log(`[MAIN] Server listening on ${address}`);
  } catch (err) {
    console.error('[MAIN] Fatal error:', err);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('[BOOT] Main failed:', err);
  process.exit(1);
});
