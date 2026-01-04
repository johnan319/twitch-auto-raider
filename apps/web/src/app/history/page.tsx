'use client';

import { useEffect, useState } from 'react';
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

  const handleRate = async (raidHistoryId: string, rating: number) => {
    await rateRaid(raidHistoryId, rating);
    fetchHistory(limit, page * limit);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    fetchHistory(limit, newPage * limit);
  };

  if (userLoading) {
    return <div className="loading">Loading...</div>;
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
          <span style={{ color: 'var(--text-secondary)' }}>{total} raids total</span>
        </div>

        {error && <div className="error">{error}</div>}

        {loading ? (
          <div className="loading">Loading...</div>
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
                      <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                        @{raid.toBroadcasterLogin}
                      </span>
                    </td>
                    <td>{raid.categoryName || '-'}</td>
                    <td>
                      {new Date(raid.startedAt).toLocaleDateString()}
                      <br />
                      <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
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
              <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 0}
                  style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}
                >
                  Previous
                </button>
                <span style={{ padding: '8px 16px', color: 'var(--text-secondary)' }}>
                  Page {page + 1} of {Math.ceil(total / limit)}
                </span>
                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={(page + 1) * limit >= total}
                  style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)' }}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
}
