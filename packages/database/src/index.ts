import { PrismaClient } from '../generated/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export * from '../generated/client';
export { MatureFilter, BroadcasterTypeFilter, ViewerPreference, DurationPreference, RaidStatus } from '../generated/client';
