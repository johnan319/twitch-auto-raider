import pino from 'pino';

const isProduction = process.env.NODE_ENV === 'production';

// Create a standalone logger for use outside of Fastify context
export const logger = pino({
  level: process.env.LOG_LEVEL || (isProduction ? 'info' : 'debug'),
  ...(isProduction
    ? {}
    : {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'HH:MM:ss',
            ignore: 'pid,hostname',
          },
        },
      }),
});

// Create child loggers for different components
export const createLogger = (component: string) => {
  return logger.child({ component });
};

// Pre-configured loggers for major components
export const loggers = {
  auth: createLogger('auth'),
  twitch: createLogger('twitch-api'),
  eventsub: createLogger('eventsub'),
  recommendations: createLogger('recommendations'),
  raid: createLogger('raid'),
  settings: createLogger('settings'),
  warmlist: createLogger('warmlist'),
  status: createLogger('status'),
};

// Helper for logging API calls with timing
export async function loggedApiCall<T>(
  log: pino.Logger,
  operation: string,
  context: Record<string, unknown>,
  fn: () => Promise<T>
): Promise<T> {
  const start = Date.now();
  log.debug({ operation, ...context }, `Starting ${operation}`);

  try {
    const result = await fn();
    const duration = Date.now() - start;
    log.info({ operation, duration, ...context }, `Completed ${operation}`);
    return result;
  } catch (error) {
    const duration = Date.now() - start;
    log.error(
      { operation, duration, error: error instanceof Error ? error.message : String(error), ...context },
      `Failed ${operation}`
    );
    throw error;
  }
}

// Export types for use in other files
export type Logger = pino.Logger;
