// Catch any uncaught errors
process.on('uncaughtException', (err) => {
  console.error('[FATAL] Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error('[FATAL] Unhandled Rejection:', reason);
});

// Use dynamic imports so we can catch and log errors
async function boot() {
  try {
    const { default: Fastify } = await import('fastify');
    const { default: cors } = await import('@fastify/cors');
    const { default: cookie } = await import('@fastify/cookie');
    const { default: session } = await import('@fastify/session');

    const { config } = await import('./lib/config.js');

    const { authRoutes } = await import('./routes/auth.js');
    const { statusRoutes } = await import('./routes/status.js');
    const { recommendationsRoutes } = await import('./routes/recommendations.js');
    const { raidRoutes } = await import('./routes/raid.js');
    const { warmlistRoutes } = await import('./routes/warmlist.js');
    const { settingsRoutes } = await import('./routes/settings.js');

    // Verify database connection with retries
    const { prisma } = await import('./lib/prisma.js');

    const maxRetries = 5;
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        await prisma.$connect();
        await prisma.user.count();
        break;
      } catch (dbError) {
        console.error(`[BOOT] Database connection attempt ${attempt}/${maxRetries} failed:`, dbError);
        if (attempt === maxRetries) {
          throw dbError;
        }
        await new Promise(resolve => setTimeout(resolve, attempt * 2000));
      }
    }

    const isProduction = process.env.NODE_ENV === 'production';

    const fastify = Fastify({
      logger: {
        level: 'warn',
      },
    });

    await fastify.register(cors, {
      origin: config.cors.origin,
      credentials: true,
    });

    await fastify.register(cookie);

    // Use database-backed session store to survive container restarts
    const { sessionStore } = await import('./lib/session-store.js');

    await fastify.register(session, {
      secret: config.session.secret,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      store: sessionStore as any,
      cookie: {
        secure: isProduction,
        httpOnly: true,
        // Use 'none' for cross-origin cookies (web app on different subdomain)
        sameSite: isProduction ? 'none' : 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000,
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

    // Health check - simple response
    fastify.get('/health', async () => {
      return { status: 'ok' };
    });

    // Start server
    const address = await fastify.listen({ port: config.port, host: '0.0.0.0' });
    console.log(`Server listening on ${address}`);
  } catch (err) {
    console.error('[BOOT] Fatal error during startup:', err);
    process.exit(1);
  }
}

boot();
