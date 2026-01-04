'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { StatusBadge } from '@/components/StatusBadge';
import { RecommendationCard } from '@/components/RecommendationCard';
import { RaidPanel } from '@/components/RaidPanel';
import { useUser, useStreamStatus, useRecommendations } from '@/lib/hooks';

export default function EndStreamPage() {
  const router = useRouter();
  const { user, loading: userLoading } = useUser();
  const { status, loading: statusLoading } = useStreamStatus(!!user);
  const { recommendations, loading: recsLoading, error: recsError, refetch } = useRecommendations();

  const [activeRaid, setActiveRaid] = useState<{
    raidHistoryId: string;
    targetName: string;
  } | null>(null);

  useEffect(() => {
    if (!userLoading && !user) {
      router.push('/');
    }
  }, [user, userLoading, router]);

  useEffect(() => {
    if (user) {
      refetch();
    }
  }, [user, refetch]);

  if (userLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (!user) {
    return null;
  }

  const handleRaidStarted = (raidHistoryId: string, targetName: string) => {
    setActiveRaid({ raidHistoryId, targetName });
  };

  const handleRaidCanceled = () => {
    setActiveRaid(null);
  };

  const handleExcluded = () => {
    refetch();
  };

  return (
    <>
      <Nav user={user} />
      <main className="page-container">
        <div className="page-header">
          <h1>End Stream</h1>
          <StatusBadge status={status} loading={statusLoading} />
        </div>

        {activeRaid ? (
          <RaidPanel
            targetName={activeRaid.targetName}
            raidHistoryId={activeRaid.raidHistoryId}
            onCanceled={handleRaidCanceled}
          />
        ) : (
          <>
            <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p style={{ color: 'var(--text-secondary)' }}>
                {status?.isLive
                  ? 'Choose a streamer to raid when you end your stream:'
                  : "You're not live, but you can still browse raid targets:"}
              </p>
              <button
                onClick={refetch}
                disabled={recsLoading}
                style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}
              >
                {recsLoading ? 'Loading...' : 'Refresh'}
              </button>
            </div>

            {recsError && <div className="error">{recsError}</div>}

            {recommendations.length === 0 && !recsLoading ? (
              <div className="empty-state">
                <p>No recommendations available right now.</p>
                <p>Add some favorites in the Favorites tab, or try again later.</p>
                <button onClick={refetch}>Refresh</button>
              </div>
            ) : (
              <>
                {/* Favorites Section */}
                {recommendations.filter((c) => c.source === 'warmlist').length > 0 && (
                  <section className="recommendation-section">
                    <h2 className="section-title">Favorites</h2>
                    <div className="recommendations-grid">
                      {recommendations
                        .filter((c) => c.source === 'warmlist')
                        .map((candidate) => (
                          <RecommendationCard
                            key={candidate.broadcasterId}
                            candidate={candidate}
                            onRaidStarted={(id) => handleRaidStarted(id, candidate.broadcasterName)}
                            onExcluded={handleExcluded}
                          />
                        ))}
                    </div>
                  </section>
                )}

                {/* Discovery Section */}
                {recommendations.filter((c) => c.source === 'discovery').length > 0 && (
                  <section className="recommendation-section">
                    <h2 className="section-title">Discovery</h2>
                    <div className="recommendations-grid">
                      {recommendations
                        .filter((c) => c.source === 'discovery')
                        .map((candidate) => (
                          <RecommendationCard
                            key={candidate.broadcasterId}
                            candidate={candidate}
                            onRaidStarted={(id) => handleRaidStarted(id, candidate.broadcasterName)}
                            onExcluded={handleExcluded}
                          />
                        ))}
                    </div>
                  </section>
                )}
              </>
            )}
          </>
        )}
      </main>
    </>
  );
}
