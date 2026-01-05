import { prisma, MatureFilter, BroadcasterTypeFilter, ViewerPreference, DurationPreference } from 'database';
import { twitchApi } from './twitch-api.js';
import { loggers } from '../lib/logger.js';

const log = loggers.recommendations;

export interface RecommendationCandidate {
  broadcasterId: string;
  broadcasterLogin: string;
  broadcasterName: string;
  profileImageUrl: string;
  viewerCount: number;
  categoryId: string | null;
  categoryName: string | null;
  language: string;
  isMature: boolean;
  startedAt: string;
  source: 'warmlist' | 'discovery';
  lastRaidDate: Date | null;
  warmListPriority: number | null;
  warmListNotes: string | null;
}

interface UserStream {
  isLive: boolean;
  viewerCount: number;
  categoryId: string | null;
  categoryName: string | null;
}

interface TwitchStream {
  user_id: string;
  user_login: string;
  user_name: string;
  game_id: string;
  game_name: string;
  viewer_count: number;
  started_at: string;
  thumbnail_url: string;
  language: string;
  is_mature: boolean;
}

export class RecommendationsService {
  async getUserStreamStatus(
    accessToken: string,
    userId: string
  ): Promise<UserStream> {
    log.debug({ userId }, 'Checking user stream status');
    const streams = await twitchApi.getStreams(accessToken, [userId]);
    const stream = streams.find((s) => s.user_id === userId);

    if (!stream) {
      log.debug({ userId, isLive: false }, 'User is offline');
      return { isLive: false, viewerCount: 0, categoryId: null, categoryName: null };
    }

    log.debug({ userId, isLive: true, viewerCount: stream.viewer_count, category: stream.game_name }, 'User stream status');
    return {
      isLive: true,
      viewerCount: stream.viewer_count,
      categoryId: stream.game_id || null,
      categoryName: stream.game_name || null,
    };
  }

  private passesFilters(
    stream: TwitchStream,
    settings: {
      allowedLanguages: string[];
      matureContentFilter: MatureFilter;
      minTargetViewers: number;
      maxTargetViewers: number;
    },
    blockedCategories: Set<string>
  ): { passes: boolean; reason?: string } {
    // Language filter
    if (settings.allowedLanguages.length > 0) {
      if (!settings.allowedLanguages.includes(stream.language)) {
        return { passes: false, reason: `language:${stream.language}` };
      }
    }

    // Mature content filter
    if (settings.matureContentFilter === 'EXCLUDE' && stream.is_mature) {
      return { passes: false, reason: 'mature:excluded' };
    }
    if (settings.matureContentFilter === 'ONLY' && !stream.is_mature) {
      return { passes: false, reason: 'mature:only' };
    }

    // Viewer count filter
    if (stream.viewer_count < settings.minTargetViewers || stream.viewer_count > settings.maxTargetViewers) {
      return { passes: false, reason: `viewers:${stream.viewer_count}` };
    }

    // Category blocklist
    if (stream.game_id && blockedCategories.has(stream.game_id)) {
      return { passes: false, reason: `blocked_category:${stream.game_id}` };
    }

    return { passes: true };
  }

  private calculateScore(
    stream: TwitchStream,
    settings: {
      viewerCountPreference: ViewerPreference;
      streamDurationPreference: DurationPreference;
    },
    userViewerCount: number,
    recentRaidMap: Map<string, Date>,
    ratingMap: Map<string, number>
  ): number {
    let score = 0;

    // Bonus for not recently raided
    if (!recentRaidMap.has(stream.user_id)) {
      score += 10;
    }

    // Bonus/penalty based on past ratings
    const rating = ratingMap.get(stream.user_id) || 0;
    score += rating * 5;

    // Viewer count preference scoring
    const viewerRatio = stream.viewer_count / (userViewerCount || 1);
    switch (settings.viewerCountPreference) {
      case 'SMALLER':
        if (viewerRatio < 0.5) score += 10;
        else if (viewerRatio < 1) score += 5;
        break;
      case 'LARGER':
        if (viewerRatio > 2) score += 10;
        else if (viewerRatio > 1) score += 5;
        break;
      case 'SIMILAR':
        if (viewerRatio >= 0.5 && viewerRatio <= 2) score += 10;
        break;
      case 'ANY':
      default:
        break;
    }

    // Stream duration preference scoring
    const streamStarted = new Date(stream.started_at);
    const hoursLive = (Date.now() - streamStarted.getTime()) / (1000 * 60 * 60);
    switch (settings.streamDurationPreference) {
      case 'NEW':
        if (hoursLive < 1) score += 10;
        else if (hoursLive < 2) score += 5;
        break;
      case 'ESTABLISHED':
        if (hoursLive > 3) score += 10;
        else if (hoursLive > 2) score += 5;
        break;
      case 'ANY':
      default:
        break;
    }

    return score;
  }

  async getRecommendations(
    accessToken: string,
    userId: string,
    twitchUserId: string
  ): Promise<RecommendationCandidate[]> {
    const start = Date.now();
    log.info({ userId, twitchUserId }, 'Starting recommendation generation');

    // Fetch user settings
    const settings = await prisma.settings.findUnique({
      where: { userId },
    });

    const filterSettings = {
      allowedLanguages: settings?.allowedLanguages ?? ['en'],
      matureContentFilter: settings?.matureContentFilter ?? MatureFilter.EXCLUDE,
      broadcasterTypeFilter: settings?.broadcasterTypeFilter ?? BroadcasterTypeFilter.ALL,
      minTargetViewers: settings?.minTargetViewers ?? 5,
      maxTargetViewers: settings?.maxTargetViewers ?? 500,
      viewerCountPreference: settings?.viewerCountPreference ?? ViewerPreference.SIMILAR,
      streamDurationPreference: settings?.streamDurationPreference ?? DurationPreference.ANY,
      sameCategoryOnly: settings?.sameCategoryOnly ?? true,
    };

    log.debug({ userId, filterSettings }, 'Loaded user filter settings');

    // Get exclude list
    const excludes = await prisma.raidExclude.findMany({
      where: { userId },
      select: { excludedBroadcasterId: true },
    });
    const excludeSet = new Set(excludes.map((e) => e.excludedBroadcasterId));
    excludeSet.add(twitchUserId); // Don't recommend self

    // Get blocked categories
    const blockedCategories = await prisma.categoryBlocklist.findMany({
      where: { userId },
      select: { categoryId: true },
    });
    const blockedCategorySet = new Set<string>(blockedCategories.map((c) => c.categoryId));

    log.debug({ userId, excludeCount: excludeSet.size, blockedCategoryCount: blockedCategorySet.size }, 'Loaded exclusions');

    // Get recent raids (last 7 days) to deprioritize
    const recentRaids = await prisma.raidHistory.findMany({
      where: {
        userId,
        startedAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
      },
      select: { toBroadcasterId: true, startedAt: true },
    });
    const recentRaidMap = new Map<string, Date>(
      recentRaids.map((r): [string, Date] => [r.toBroadcasterId, r.startedAt])
    );

    // Get past ratings for scoring
    const ratedRaids = await prisma.raidHistory.findMany({
      where: { userId, manualRating: { not: null } },
      select: { toBroadcasterId: true, manualRating: true },
    });
    const ratingMap = new Map<string, number>();
    for (const r of ratedRaids) {
      const current = ratingMap.get(r.toBroadcasterId) || 0;
      ratingMap.set(r.toBroadcasterId, current + (r.manualRating ?? 0));
    }

    log.debug({ userId, recentRaidCount: recentRaidMap.size, ratedCount: ratingMap.size }, 'Loaded raid history');

    // Get user's current stream status for category-based recommendations
    const userStatus = await this.getUserStreamStatus(accessToken, twitchUserId);

    const candidates: RecommendationCandidate[] = [];
    const seenIds = new Set<string>();
    let filteredOutCount = 0;

    // --- Warm List Candidates (priority 1) ---
    const warmList = await prisma.warmListEntry.findMany({
      where: { userId },
      orderBy: [{ priority: 'desc' }, { createdAt: 'desc' }],
    });

    log.debug({ userId, warmListCount: warmList.length }, 'Fetched warm list');

    if (warmList.length > 0) {
      const warmListIds = warmList.map((w) => w.broadcasterId);
      const liveStreams = await twitchApi.getStreams(accessToken, warmListIds);
      const liveMap = new Map(liveStreams.map((s) => [s.user_id, s]));

      log.debug({ userId, warmListLive: liveMap.size }, 'Warm list live streams');

      for (const entry of warmList) {
        if (excludeSet.has(entry.broadcasterId)) continue;
        if (seenIds.has(entry.broadcasterId)) continue;

        const stream = liveMap.get(entry.broadcasterId);
        if (!stream) continue; // Not live

        // Apply filters (but be more lenient for favorites - skip language filter)
        const warmlistFilters = { ...filterSettings, allowedLanguages: [] as string[] };
        const filterResult = this.passesFilters(stream, warmlistFilters, blockedCategorySet);
        if (!filterResult.passes) {
          log.debug({ broadcasterId: entry.broadcasterId, reason: filterResult.reason }, 'Warm list entry filtered out');
          filteredOutCount++;
          continue;
        }

        // Apply category filter if enabled
        if (filterSettings.sameCategoryOnly && userStatus.categoryId && stream.game_id !== userStatus.categoryId) {
          log.debug({ broadcasterId: entry.broadcasterId, reason: 'category_mismatch' }, 'Warm list entry filtered out');
          filteredOutCount++;
          continue;
        }

        seenIds.add(entry.broadcasterId);
        candidates.push({
          broadcasterId: entry.broadcasterId,
          broadcasterLogin: stream.user_login,
          broadcasterName: stream.user_name,
          profileImageUrl: stream.thumbnail_url.replace('{width}', '150').replace('{height}', '150'),
          viewerCount: stream.viewer_count,
          categoryId: stream.game_id || null,
          categoryName: stream.game_name || null,
          language: stream.language,
          isMature: stream.is_mature,
          startedAt: stream.started_at,
          source: 'warmlist',
          lastRaidDate: recentRaidMap.get(entry.broadcasterId) ?? null,
          warmListPriority: entry.priority,
          warmListNotes: entry.notes,
        });

        if (candidates.filter((c) => c.source === 'warmlist').length >= 6) {
          break;
        }
      }
    }

    const warmListCandidates = candidates.length;
    log.debug({ userId, warmListCandidates }, 'Warm list candidates found');

    // --- Category Discovery (priority 2) ---
    if (userStatus.isLive && userStatus.categoryId) {
      const categoryStreams = await twitchApi.getStreamsByCategory(
        accessToken,
        userStatus.categoryId,
        100
      );

      log.debug({ userId, categoryId: userStatus.categoryId, categoryStreams: categoryStreams.length }, 'Fetched category streams');

      // Score and sort discovery candidates with randomization
      const discoveryScored = categoryStreams
        .filter((stream) => {
          if (excludeSet.has(stream.user_id)) return false;
          if (seenIds.has(stream.user_id)) return false;
          const filterResult = this.passesFilters(stream, filterSettings, blockedCategorySet);
          if (!filterResult.passes) {
            filteredOutCount++;
            return false;
          }
          return true;
        })
        .map((stream) => {
          const baseScore = this.calculateScore(
            stream,
            filterSettings,
            userStatus.viewerCount,
            recentRaidMap,
            ratingMap
          );
          // Add random factor (0-15) to create variety on each refresh
          // Higher-scored candidates still generally rank higher, but order varies
          const randomBonus = Math.random() * 15;
          return { stream, score: baseScore + randomBonus };
        })
        .sort((a, b) => b.score - a.score);

      // Take top 8 discovery candidates
      for (const { stream } of discoveryScored.slice(0, 20)) {
        seenIds.add(stream.user_id);
        candidates.push({
          broadcasterId: stream.user_id,
          broadcasterLogin: stream.user_login,
          broadcasterName: stream.user_name,
          profileImageUrl: stream.thumbnail_url.replace('{width}', '150').replace('{height}', '150'),
          viewerCount: stream.viewer_count,
          categoryId: stream.game_id || null,
          categoryName: stream.game_name || null,
          language: stream.language,
          isMature: stream.is_mature,
          startedAt: stream.started_at,
          source: 'discovery',
          lastRaidDate: recentRaidMap.get(stream.user_id) ?? null,
          warmListPriority: null,
          warmListNotes: null,
        });
      }
    } else {
      log.debug({ userId, isLive: userStatus.isLive, categoryId: userStatus.categoryId }, 'Skipping category discovery');
    }

    // Sort final list: warmlist first, then by score
    const result = candidates.sort((a, b) => {
      if (a.source === 'warmlist' && b.source !== 'warmlist') return -1;
      if (b.source === 'warmlist' && a.source !== 'warmlist') return 1;
      return 0;
    });

    const duration = Date.now() - start;
    log.info({
      userId,
      duration,
      totalCandidates: result.length,
      warmListCandidates,
      discoveryCandidates: result.length - warmListCandidates,
      filteredOut: filteredOutCount,
      userIsLive: userStatus.isLive,
      userCategory: userStatus.categoryName,
    }, 'Recommendations generated');

    return result;
  }
}

export const recommendationsService = new RecommendationsService();
