import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { getAuthUserId } from '../lib/auth.js';
import { loggers } from '../lib/logger.js';

const log = loggers.settings;

const updateSettingsSchema = z.object({
  // Language & Content filters
  allowedLanguages: z.array(z.string()).optional(),
  matureContentFilter: z.enum(['INCLUDE', 'EXCLUDE', 'ONLY']).optional(),

  // Broadcaster type filter
  broadcasterTypeFilter: z.enum(['ALL', 'AFFILIATE', 'PARTNER']).optional(),

  // Viewer count settings
  minTargetViewers: z.number().min(0).optional(),
  maxTargetViewers: z.number().min(1).optional(),
  viewerCountPreference: z.enum(['SMALLER', 'SIMILAR', 'LARGER', 'ANY']).optional(),

  // Category settings
  sameCategoryOnly: z.boolean().optional(),

  // Stream duration preference
  streamDurationPreference: z.enum(['NEW', 'ESTABLISHED', 'ANY']).optional(),

  // Chat messages
  raidMessage: z.string().max(500).optional(),
  raidRunMessage: z.string().max(500).optional(),
});

const addExcludeSchema = z.object({
  excludedBroadcasterId: z.string(),
  reason: z.string().optional(),
});

const addCategoryBlockSchema = z.object({
  categoryId: z.string(),
  categoryName: z.string(),
});

export async function settingsRoutes(fastify: FastifyInstance): Promise<void> {
  // Get settings
  fastify.get('/api/settings', async (request: FastifyRequest, reply: FastifyReply) => {
    const userId = await getAuthUserId(request);
    if (!userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const settings = await prisma.settings.findUnique({
      where: { userId },
    });

    if (!settings) {
      log.warn({ userId }, 'Settings not found');
      return reply.status(404).send({ error: 'Settings not found' });
    }

    log.debug({ userId }, 'Settings fetched');
    return { settings };
  });

  // Update settings
  fastify.put('/api/settings', async (request: FastifyRequest, reply: FastifyReply) => {
    const userId = await getAuthUserId(request);
    if (!userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const parseResult = updateSettingsSchema.safeParse(request.body);
    if (!parseResult.success) {
      log.warn({ userId, errors: parseResult.error.errors }, 'Invalid settings update');
      return reply.status(400).send({ error: 'Invalid request body', details: parseResult.error });
    }

    const settings = await prisma.settings.update({
      where: { userId },
      data: parseResult.data,
    });

    log.info({ userId, updatedFields: Object.keys(parseResult.data) }, 'Settings updated');

    return { settings };
  });

  // Get excludes
  fastify.get('/api/excludes', async (request: FastifyRequest, reply: FastifyReply) => {
    const userId = await getAuthUserId(request);
    if (!userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const excludes = await prisma.raidExclude.findMany({
      where: { userId },
    });

    log.debug({ userId, count: excludes.length }, 'Excludes fetched');
    return { excludes };
  });

  // Add exclude
  fastify.post('/api/excludes', async (request: FastifyRequest, reply: FastifyReply) => {
    const userId = await getAuthUserId(request);
    if (!userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const parseResult = addExcludeSchema.safeParse(request.body);
    if (!parseResult.success) {
      return reply.status(400).send({ error: 'Invalid request body', details: parseResult.error });
    }

    const { excludedBroadcasterId, reason } = parseResult.data;

    const exclude = await prisma.raidExclude.upsert({
      where: {
        userId_excludedBroadcasterId: {
          userId,
          excludedBroadcasterId,
        },
      },
      update: { reason },
      create: {
        userId,
        excludedBroadcasterId,
        reason,
      },
    });

    log.info({ userId, excludedBroadcasterId, reason }, 'Broadcaster excluded');

    return { exclude };
  });

  // Remove exclude
  fastify.delete<{
    Params: { id: string };
  }>('/api/excludes/:id', async (request, reply) => {
    const userId = await getAuthUserId(request);
    if (!userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const exclude = await prisma.raidExclude.findFirst({
      where: {
        id: request.params.id,
        userId,
      },
    });

    if (!exclude) {
      return reply.status(404).send({ error: 'Exclude not found' });
    }

    await prisma.raidExclude.delete({
      where: { id: request.params.id },
    });

    log.info({ userId, excludeId: request.params.id, excludedBroadcasterId: exclude.excludedBroadcasterId }, 'Exclude removed');

    return { success: true };
  });

  // --- Category Blocklist ---

  // Get blocked categories
  fastify.get('/api/category-blocklist', async (request: FastifyRequest, reply: FastifyReply) => {
    const userId = await getAuthUserId(request);
    if (!userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const blocklist = await prisma.categoryBlocklist.findMany({
      where: { userId },
    });

    log.debug({ userId, count: blocklist.length }, 'Category blocklist fetched');
    return { blocklist };
  });

  // Add category to blocklist
  fastify.post('/api/category-blocklist', async (request: FastifyRequest, reply: FastifyReply) => {
    const userId = await getAuthUserId(request);
    if (!userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const parseResult = addCategoryBlockSchema.safeParse(request.body);
    if (!parseResult.success) {
      return reply.status(400).send({ error: 'Invalid request body', details: parseResult.error });
    }

    const { categoryId, categoryName } = parseResult.data;

    const entry = await prisma.categoryBlocklist.upsert({
      where: {
        userId_categoryId: {
          userId,
          categoryId,
        },
      },
      update: { categoryName },
      create: {
        userId,
        categoryId,
        categoryName,
      },
    });

    log.info({ userId, categoryId, categoryName }, 'Category blocked');

    return { entry };
  });

  // Remove category from blocklist
  fastify.delete<{
    Params: { id: string };
  }>('/api/category-blocklist/:id', async (request, reply) => {
    const userId = await getAuthUserId(request);
    if (!userId) {
      return reply.status(401).send({ error: 'Not authenticated' });
    }

    const entry = await prisma.categoryBlocklist.findFirst({
      where: {
        id: request.params.id,
        userId,
      },
    });

    if (!entry) {
      return reply.status(404).send({ error: 'Category not found in blocklist' });
    }

    await prisma.categoryBlocklist.delete({
      where: { id: request.params.id },
    });

    log.info({ userId, categoryId: entry.categoryId, categoryName: entry.categoryName }, 'Category unblocked');

    return { success: true };
  });
}
