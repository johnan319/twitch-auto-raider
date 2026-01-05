'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { useUser, useWarmList } from '@/lib/hooks';

export default function WarmListPage() {
  const router = useRouter();
  const { user, loading: userLoading } = useUser();
  const { entries, loading, error, add, remove } = useWarmList();
  const [newLogin, setNewLogin] = useState('');
  const [newNotes, setNewNotes] = useState('');
  const [adding, setAdding] = useState(false);
  const [addError, setAddError] = useState<string | null>(null);

  useEffect(() => {
    if (!userLoading && !user) {
      router.push('/');
    }
  }, [user, userLoading, router]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLogin.trim()) return;

    setAdding(true);
    setAddError(null);
    try {
      await add(newLogin.trim(), newNotes.trim() || undefined);
      setNewLogin('');
      setNewNotes('');
    } catch (err) {
      setAddError(err instanceof Error ? err.message : 'Failed to add');
    } finally {
      setAdding(false);
    }
  };

  const handleRemove = async (id: string) => {
    try {
      await remove(id);
    } catch (err) {
      console.error('Failed to remove:', err);
    }
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
          <h1>Favorites</h1>
          <span className="header-count">{entries.length} streamers</span>
        </div>

        <form className="add-form" onSubmit={handleAdd}>
          <input
            type="text"
            placeholder="Enter Twitch username..."
            value={newLogin}
            onChange={(e) => setNewLogin(e.target.value)}
          />
          <input
            type="text"
            placeholder="Notes (optional)"
            value={newNotes}
            onChange={(e) => setNewNotes(e.target.value)}
            className="notes-input"
          />
          <button type="submit" disabled={adding || !newLogin.trim()}>
            {adding ? 'Adding...' : 'Add'}
          </button>
        </form>

        {addError && <div className="error">{addError}</div>}
        {error && <div className="error">{error}</div>}

        {loading ? (
          <div className="loading">
            <div className="loading-spinner" />
            <p>Loading...</p>
          </div>
        ) : entries.length === 0 ? (
          <div className="empty-state">
            <p>No favorites yet.</p>
            <p>Add streamers you frequently raid to get priority recommendations!</p>
          </div>
        ) : (
          <div className="warmlist-grid">
            {entries.map((entry) => (
              <div key={entry.id} className="warmlist-entry">
                {entry.profileImageUrl && (
                  <img
                    src={entry.profileImageUrl}
                    alt={entry.broadcasterName}
                    className="warmlist-avatar"
                  />
                )}
                <div className="info">
                  <h3>{entry.broadcasterName}</h3>
                  <span className="login">@{entry.broadcasterLogin}</span>
                  {entry.notes && <p className="notes">{entry.notes}</p>}
                </div>
                <button
                  className="remove-button"
                  onClick={() => handleRemove(entry.id)}
                  title="Remove from favorites"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
