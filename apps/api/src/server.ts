import Fastify from 'fastify';
import cors from '@fastify/cors';
import cookie from '@fastify/cookie';
import session from '@fastify/session';
import rateLimit from '@fastify/rate-limit';
import { config } from './lib/config.js';
import { authRoutes } from './routes/auth.js';
import { statusRoutes } from './routes/status.js';
import { recommendationsRoutes } from './routes/recommendations.js';
import { raidRoutes } from './routes/raid.js';
import { warmlistRoutes } from './routes/warmlist.js';
import { settingsRoutes } from './routes/settings.js';
import { eventSubService } from './services/eventsub.js';

const isProduction = process.env.NODE_ENV === 'production';

const fastify = Fastify({
  logger: isProduction
    ? {
        level: process.env.LOG_LEVEL || 'info',
      }
    : {
        level: process.env.LOG_LEVEL || 'debug',
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'HH:MM:ss',
            ignore: 'pid,hostname',
          },
        },
      },
});

async function main() {
  // Register plugins
  await fastify.register(cors, {
    origin: config.cors.origin,
    credentials: true,
  });

  // Rate limiting - global default
  await fastify.register(rateLimit, {
    max: 100, // 100 requests per minute
    timeWindow: '1 minute',
    errorResponseBuilder: () => ({
      statusCode: 429,
      error: 'Too Many Requests',
      message: 'Rate limit exceeded. Please try again later.',
    }),
  });

  await fastify.register(cookie);

  // Session configuration (in-memory store)
  await fastify.register(session, {
    secret: config.session.secret,
    cookie: {
      secure: isProduction,
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    },
    saveUninitialized: false,
  });

  // Register routes
  await fastify.register(authRoutes);
  await fastify.register(statusRoutes);
  await fastify.register(recommendationsRoutes);
  await fastify.register(raidRoutes);
  await fastify.register(warmlistRoutes);
  await fastify.register(settingsRoutes);

  // Health check
  fastify.get('/health', async () => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  });

  // Connect to EventSub
  eventSubService.connect().catch((error) => {
    fastify.log.error({ err: error }, 'Failed to connect to EventSub');
  });

  // Start server
  try {
    await fastify.listen({ port: config.port, host: '0.0.0.0' });
    fastify.log.info(`Server running on http://localhost:${config.port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

main();
