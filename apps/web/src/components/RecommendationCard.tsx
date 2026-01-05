'use client';

import { useState } from 'react';
import { RecommendationCandidate, startRaid, addExclude } from '@/lib/api';

interface RecommendationCardProps {
  candidate: RecommendationCandidate;
  onRaidStarted: (raidHistoryId: string) => void;
  onExcluded: () => void;
}

export function RecommendationCard({ candidate, onRaidStarted, onExcluded }: RecommendationCardProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRaid = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await startRaid({
        toBroadcasterId: candidate.broadcasterId,
        toBroadcasterLogin: candidate.broadcasterLogin,
        toBroadcasterName: candidate.broadcasterName,
        categoryId: candidate.categoryId || undefined,
        categoryName: candidate.categoryName || undefined,
        sendMessages: true,
      });
      onRaidStarted(result.raidHistoryId);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to start raid');
    } finally {
      setLoading(false);
    }
  };

  const handleExclude = async () => {
    try {
      await addExclude(candidate.broadcasterId);
      onExcluded();
    } catch (err) {
      console.error('Failed to exclude:', err);
    }
  };

  return (
    <div className="recommendation-card">
      <div className="card-header">
        <img
          src={candidate.profileImageUrl}
          alt={candidate.broadcasterName}
          className="avatar"
        />
        <div className="info">
          <h3>{candidate.broadcasterName}</h3>
          <span className="login">@{candidate.broadcasterLogin}</span>
        </div>
        <span className={`source-badge ${candidate.source}`}>
          {candidate.source === 'warmlist' ? 'Favorite' : 'Discovery'}
        </span>
      </div>

      <div className="card-stats">
        <span className="viewers">
          <span className="live-dot"></span>
          {candidate.viewerCount.toLocaleString()} viewers
        </span>
        {candidate.categoryName && (
          <span className="category">{candidate.categoryName}</span>
        )}
      </div>

      {candidate.warmListNotes && (
        <p className="notes">{candidate.warmListNotes}</p>
      )}

      {candidate.lastRaidDate && (
        <p className="last-raid">
          Last raided: {new Date(candidate.lastRaidDate).toLocaleDateString()}
        </p>
      )}

      {error && <p className="error">{error}</p>}

      <div className="card-actions">
        <button
          className="raid-button"
          onClick={handleRaid}
          disabled={loading}
        >
          {loading ? 'Starting...' : '⚡ Raid'}
        </button>
        <button
          className="exclude-button"
          onClick={handleExclude}
          title="Don't show this streamer"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
