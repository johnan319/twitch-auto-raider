'use client';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { useUser, useHistory } from '@/lib/hooks';
import { rateRaid } from '@/lib/api';

export default function HistoryPage() {
  const router = useRouter();
  const { user, loading: userLoading } = useUser();
  const { raids, total, loading, error, fetchHistory } = useHistory(20);
  const [page, setPage] = useState(0);
  const limit = 20;

  useEffect(() => {
    if (!userLoading && !user) {
      router.push('/');
    }
  }, [user, userLoading, router]);

  // Calculate stats
  const stats = useMemo(() => {
    const successful = raids.filter(r => r.status === 'EXECUTED').length;
    const positive = raids.filter(r => r.manualRating === 1).length;
    return { successful, positive };
  }, [raids]);

  const handleRate = async (raidHistoryId: string, rating: number) => {
    await rateRaid(raidHistoryId, rating);
    fetchHistory(limit, page * limit);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    fetchHistory(limit, newPage * limit);
  };

  if (userLoading) {
    return (
      <div className="loading">
        <div className="loading-spinner" />
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <Nav user={user} />
      <main className="page-container">
        <div className="page-header">
          <h1>Raid History</h1>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="value">{total}</div>
            <div className="label">Total Raids</div>
          </div>
          <div className="stat-card success">
            <div className="value">{stats.successful}</div>
            <div className="label">Successful</div>
          </div>
          <div className="stat-card accent">
            <div className="value">{stats.positive}</div>
            <div className="label">Positive Ratings</div>
          </div>
        </div>

        {error && <div className="error">{error}</div>}

        {loading ? (
          <div className="loading">
            <div className="loading-spinner" />
            <p>Loading...</p>
          </div>
        ) : raids.length === 0 ? (
          <div className="empty-state">
            <p>No raids yet. Start raiding to see your history!</p>
          </div>
        ) : (
          <>
            <table className="history-table">
              <thead>
                <tr>
                  <th>Target</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Viewers</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {raids.map((raid) => (
                  <tr key={raid.id}>
                    <td>
                      <strong>{raid.toBroadcasterName}</strong>
                      <br />
                      <span className="text-secondary">
                        @{raid.toBroadcasterLogin}
                      </span>
                    </td>
                    <td>{raid.categoryName || '-'}</td>
                    <td>
                      {new Date(raid.startedAt).toLocaleDateString()}
                      <br />
                      <span className="text-secondary">
                        {new Date(raid.startedAt).toLocaleTimeString()}
                      </span>
                    </td>
                    <td>
                      <span className={`status ${raid.status}`}>{raid.status}</span>
                    </td>
                    <td>{raid.viewerCountAtRaid?.toLocaleString() || '-'}</td>
                    <td>
                      <div className="rating-buttons">
                        <button
                          className={raid.manualRating === -1 ? 'active' : ''}
                          onClick={() => handleRate(raid.id, -1)}
                          title="Bad raid"
                        >
                          -
                        </button>
                        <button
                          className={raid.manualRating === 0 ? 'active' : ''}
                          onClick={() => handleRate(raid.id, 0)}
                          title="Neutral"
                        >
                          0
                        </button>
                        <button
                          className={raid.manualRating === 1 ? 'active' : ''}
                          onClick={() => handleRate(raid.id, 1)}
                          title="Good raid"
                        >
                          +
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {total > limit && (
              <div className="pagination">
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 0}
                >
                  Previous
                </button>
                <span className="page-info">
                  Page {page + 1} of {Math.ceil(total / limit)}
                </span>
                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={(page + 1) * limit >= total}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </main>

      <style jsx>{`
        .text-secondary {
          font-size: 13px;
          color: var(--text-secondary);
        }
      `}</style>
    </>
  );
}
