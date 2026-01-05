console.log('[BOOT] Starting server...');
console.log('[BOOT] Node version:', process.version);
console.log('[BOOT] Environment:', process.env.NODE_ENV);
console.log('[BOOT] PORT env:', process.env.PORT);

// Catch any uncaught errors
process.on('uncaughtException', (err) => {
  console.error('[FATAL] Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error('[FATAL] Unhandled Rejection:', reason);
});

// Log shutdown signals
process.on('SIGTERM', () => {
  console.log('[SHUTDOWN] Received SIGTERM signal');
});

process.on('SIGINT', () => {
  console.log('[SHUTDOWN] Received SIGINT signal');
});

process.on('exit', (code) => {
  console.log('[SHUTDOWN] Process exiting with code:', code);
});

// Use dynamic imports so we can catch and log errors
async function boot() {
  try {
    console.log('[BOOT] Loading Fastify...');
    const { default: Fastify } = await import('fastify');
    const { default: cors } = await import('@fastify/cors');
    const { default: cookie } = await import('@fastify/cookie');
    const { default: session } = await import('@fastify/session');
    console.log('[BOOT] Core modules loaded');

    console.log('[BOOT] Loading config...');
    const { config } = await import('./lib/config.js');
    console.log('[BOOT] Config loaded, port:', config.port);

    console.log('[BOOT] Loading routes...');
    const { authRoutes } = await import('./routes/auth.js');
    const { statusRoutes } = await import('./routes/status.js');
    const { recommendationsRoutes } = await import('./routes/recommendations.js');
    const { raidRoutes } = await import('./routes/raid.js');
    const { warmlistRoutes } = await import('./routes/warmlist.js');
    const { settingsRoutes } = await import('./routes/settings.js');
    console.log('[BOOT] Routes loaded');

    // Verify database connection
    console.log('[BOOT] Testing database connection...');
    const { prisma } = await import('./lib/prisma.js');
    await prisma.$connect();
    const userCount = await prisma.user.count();
    console.log('[BOOT] Database connected, user count:', userCount);

    const isProduction = process.env.NODE_ENV === 'production';

    const fastify = Fastify({
      logger: {
        level: 'info',
      },
    });

    console.log('[MAIN] Registering plugins...');

    await fastify.register(cors, {
      origin: config.cors.origin,
      credentials: true,
    });
    console.log('[MAIN] CORS registered, origin:', config.cors.origin);

    await fastify.register(cookie);
    console.log('[MAIN] Cookie registered');

    // Use database-backed session store to survive container restarts
    const { sessionStore } = await import('./lib/session-store.js');

    await fastify.register(session, {
      secret: config.session.secret,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      store: sessionStore as any,
      cookie: {
        secure: isProduction,
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      },
      saveUninitialized: false,
    });
    console.log('[MAIN] Session registered with database store');

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
    console.log('[MAIN] Starting to listen on port', config.port);
    const address = await fastify.listen({ port: config.port, host: '0.0.0.0' });
    console.log(`[MAIN] Server listening on ${address}`);
  } catch (err) {
    console.error('[BOOT] Fatal error during startup:', err);
    process.exit(1);
  }
}

boot();
