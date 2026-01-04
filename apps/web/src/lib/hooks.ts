'use client';

import { useState, useEffect, useCallback } from 'react';
import * as api from './api';

export function useUser() {
  const [user, setUser] = useState<api.User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .getMe()
      .then(setUser)
      .catch((err) => {
        setError(err.message);
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  return { user, loading, error };
}

export function useStreamStatus(enabled = true) {
  const [status, setStatus] = useState<api.StreamStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(() => {
    if (!enabled) return;
    setLoading(true);
    api
      .getStatus()
      .then(setStatus)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [enabled]);

  useEffect(() => {
    refetch();
    // Poll every 30 seconds
    const interval = setInterval(refetch, 30000);
    return () => clearInterval(interval);
  }, [refetch]);

  return { status, loading, error, refetch };
}

export function useRecommendations() {
  const [recommendations, setRecommendations] = useState<api.RecommendationCandidate[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(() => {
    setLoading(true);
    setError(null);
    api
      .getRecommendations()
      .then((data) => setRecommendations(data.recommendations))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { recommendations, loading, error, refetch };
}

export function useHistory(initialLimit = 20) {
  const [raids, setRaids] = useState<api.RaidHistory[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHistory = useCallback((limit: number, offset: number) => {
    setLoading(true);
    api
      .getHistory(limit, offset)
      .then((data) => {
        setRaids(data.raids);
        setTotal(data.total);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchHistory(initialLimit, 0);
  }, [fetchHistory, initialLimit]);

  return { raids, total, loading, error, fetchHistory };
}

export function useSettings() {
  const [settings, setSettings] = useState<api.Settings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .getSettings()
      .then((data) => setSettings(data.settings))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const update = useCallback(async (data: Partial<api.Settings>) => {
    const result = await api.updateSettings(data);
    setSettings(result.settings);
    return result.settings;
  }, []);

  return { settings, loading, error, update };
}

export function useWarmList() {
  const [entries, setEntries] = useState<api.WarmListEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(() => {
    setLoading(true);
    api
      .getWarmList()
      .then((data) => setEntries(data.entries))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  const add = useCallback(
    async (broadcasterLogin: string, notes?: string, priority?: number) => {
      const result = await api.addToWarmList(broadcasterLogin, notes, priority);
      setEntries((prev) => [result.entry, ...prev]);
      return result.entry;
    },
    []
  );

  const remove = useCallback(async (id: string) => {
    await api.removeFromWarmList(id);
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }, []);

  return { entries, loading, error, refetch, add, remove };
}

export function useCategoryBlocklist() {
  const [blocklist, setBlocklist] = useState<api.CategoryBlocklistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(() => {
    setLoading(true);
    api
      .getCategoryBlocklist()
      .then((data) => setBlocklist(data.blocklist))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  const add = useCallback(async (categoryId: string, categoryName: string) => {
    const result = await api.addCategoryBlock(categoryId, categoryName);
    setBlocklist((prev) => [...prev, result.entry]);
    return result.entry;
  }, []);

  const remove = useCallback(async (id: string) => {
    await api.removeCategoryBlock(id);
    setBlocklist((prev) => prev.filter((e) => e.id !== id));
  }, []);

  return { blocklist, loading, error, refetch, add, remove };
}
