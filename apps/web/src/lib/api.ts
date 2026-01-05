const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

interface ApiOptions extends Omit<RequestInit, 'body'> {
  body?: Record<string, unknown>;
}

async function api<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
  const { body, ...rest } = options;

  const headers: Record<string, string> = {
    ...rest.headers as Record<string, string>,
  };

  // Only set Content-Type if we have a body
  if (body) {
    headers['Content-Type'] = 'application/json';
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...rest,
    headers,
    credentials: 'include',
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(error.error || `API error: ${response.status}`);
  }

  return response.json();
}

// Types
export interface User {
  id: string;
  twitchUserId: string;
  login: string;
  displayName: string;
  profileImageUrl: string | null;
}

export interface StreamStatus {
  isLive: boolean;
  viewerCount: number;
  categoryId: string | null;
  categoryName: string | null;
}

export interface RecommendationCandidate {
  broadcasterId: string;
  broadcasterLogin: string;
  broadcasterName: string;
  profileImageUrl: string;
  viewerCount: number;
  categoryId: string | null;
  categoryName: string | null;
  source: 'warmlist' | 'discovery';
  lastRaidDate: string | null;
  warmListPriority: number | null;
  warmListNotes: string | null;
}

export interface RaidHistory {
  id: string;
  toBroadcasterId: string;
  toBroadcasterLogin: string;
  toBroadcasterName: string;
  categoryName: string | null;
  startedAt: string;
  executedAt: string | null;
  status: 'QUEUED' | 'CANCELED' | 'EXECUTED' | 'FAILED';
  viewerCountAtRaid: number | null;
  manualRating: number | null;
  notes: string | null;
}

export type MatureFilter = 'INCLUDE' | 'EXCLUDE' | 'ONLY';
export type BroadcasterTypeFilter = 'ALL' | 'AFFILIATE' | 'PARTNER';
export type ViewerPreference = 'SMALLER' | 'SIMILAR' | 'LARGER' | 'ANY';
export type DurationPreference = 'NEW' | 'ESTABLISHED' | 'ANY';

export interface Settings {
  allowedLanguages: string[];
  matureContentFilter: MatureFilter;
  broadcasterTypeFilter: BroadcasterTypeFilter;
  minTargetViewers: number;
  maxTargetViewers: number;
  viewerCountPreference: ViewerPreference;
  sameCategoryOnly: boolean;
  streamDurationPreference: DurationPreference;
  raidMessage: string;
  raidRunMessage: string;
}

export interface CategoryBlocklistEntry {
  id: string;
  categoryId: string;
  categoryName: string;
}

export interface WarmListEntry {
  id: string;
  broadcasterId: string;
  broadcasterLogin: string;
  broadcasterName: string;
  profileImageUrl: string | null;
  notes: string | null;
  priority: number;
}

// API functions
export const getMe = () => api<User>('/api/me');

export const getStatus = () => api<StreamStatus>('/api/status');

export const getRecommendations = () =>
  api<{ recommendations: RecommendationCandidate[] }>('/api/recommendations', { method: 'POST', body: {} });

export const startRaid = (data: {
  toBroadcasterId: string;
  toBroadcasterLogin: string;
  toBroadcasterName: string;
  categoryId?: string;
  categoryName?: string;
  sendMessages?: boolean;
}) =>
  api<{ success: boolean; raidHistoryId: string; message: string }>('/api/raid/start', {
    method: 'POST',
    body: data,
  });

export const cancelRaid = () =>
  api<{ success: boolean; message: string }>('/api/raid/cancel', { method: 'POST' });

export const rateRaid = (raidHistoryId: string, rating: number, notes?: string) =>
  api<{ success: boolean }>('/api/raid/rate', {
    method: 'POST',
    body: { raidHistoryId, rating, notes },
  });

export const getHistory = (limit = 20, offset = 0) =>
  api<{ raids: RaidHistory[]; total: number }>(`/api/history?limit=${limit}&offset=${offset}`);

export const getSettings = () => api<{ settings: Settings }>('/api/settings');

export const updateSettings = (data: Partial<Settings>) =>
  api<{ settings: Settings }>('/api/settings', { method: 'PUT', body: data });

export const getWarmList = () => api<{ entries: WarmListEntry[] }>('/api/warmlist');

export const addToWarmList = (broadcasterLogin: string, notes?: string, priority?: number) =>
  api<{ entry: WarmListEntry }>('/api/warmlist', {
    method: 'POST',
    body: { broadcasterLogin, notes, priority },
  });

export const removeFromWarmList = (id: string) =>
  api<{ success: boolean }>(`/api/warmlist/${id}`, { method: 'DELETE' });

export const addExclude = (excludedBroadcasterId: string, reason?: string) =>
  api<{ exclude: { id: string } }>('/api/excludes', {
    method: 'POST',
    body: { excludedBroadcasterId, reason },
  });

export const getCategoryBlocklist = () =>
  api<{ blocklist: CategoryBlocklistEntry[] }>('/api/category-blocklist');

export const addCategoryBlock = (categoryId: string, categoryName: string) =>
  api<{ entry: CategoryBlocklistEntry }>('/api/category-blocklist', {
    method: 'POST',
    body: { categoryId, categoryName },
  });

export const removeCategoryBlock = (id: string) =>
  api<{ success: boolean }>(`/api/category-blocklist/${id}`, { method: 'DELETE' });

export const getAuthUrl = () => `${API_URL}/auth/twitch/start`;

export const logout = () => api<{ success: boolean }>('/auth/logout', { method: 'POST' });

export const exchangeAuthToken = (token: string) =>
  api<{ success: boolean }>('/auth/exchange-token', { method: 'POST', body: { token } });
