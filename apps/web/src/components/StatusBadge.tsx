'use client';

import { StreamStatus } from '@/lib/api';

interface StatusBadgeProps {
  status: StreamStatus | null;
  loading?: boolean;
}

export function StatusBadge({ status, loading }: StatusBadgeProps) {
  if (loading) {
    return (
      <div className="status-badge loading">
        <span className="dot"></span>
        <span>Loading...</span>
      </div>
    );
  }

  if (!status) {
    return (
      <div className="status-badge offline">
        <span className="dot"></span>
        <span>Unknown</span>
      </div>
    );
  }

  if (status.isLive) {
    return (
      <div className="status-badge live">
        <span className="dot"></span>
        <span className="status-text">LIVE</span>
        <span className="divider">•</span>
        <span className="viewers">{status.viewerCount.toLocaleString()} viewers</span>
        {status.categoryName && (
          <>
            <span className="divider">•</span>
            <span className="category">{status.categoryName}</span>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="status-badge offline">
      <span className="dot"></span>
      <span>OFFLINE</span>
    </div>
  );
}
