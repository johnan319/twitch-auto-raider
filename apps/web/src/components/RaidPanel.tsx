'use client';

import { useState } from 'react';
import { cancelRaid } from '@/lib/api';

interface RaidPanelProps {
  targetName: string;
  raidHistoryId: string;
  onCanceled: () => void;
}

export function RaidPanel({ targetName, raidHistoryId: _raidHistoryId, onCanceled }: RaidPanelProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCancel = async () => {
    setLoading(true);
    setError(null);
    try {
      await cancelRaid();
      onCanceled();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to cancel raid');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="raid-panel">
      <div className="raid-info">
        <h2>Raid Queued!</h2>
        <p>Raiding <strong>{targetName}</strong></p>
        <p className="countdown-note">
          The raid will execute after the 90-second countdown in Twitch,
          or you can click "Raid Now" in your Twitch dashboard.
        </p>
        <p className="message-sent">Chat messages have been sent!</p>
      </div>

      {error && <p className="error">{error}</p>}

      <button
        className="cancel-button"
        onClick={handleCancel}
        disabled={loading}
      >
        {loading ? 'Canceling...' : 'Cancel Raid'}
      </button>
    </div>
  );
}
