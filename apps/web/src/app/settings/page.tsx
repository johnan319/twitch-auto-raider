'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { useUser, useSettings, useCategoryBlocklist } from '@/lib/hooks';
import type { MatureFilter, BroadcasterTypeFilter, ViewerPreference, DurationPreference } from '@/lib/api';

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'it', name: 'Italian' },
  { code: 'ru', name: 'Russian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'zh', name: 'Chinese' },
  { code: 'pl', name: 'Polish' },
  { code: 'tr', name: 'Turkish' },
  { code: 'nl', name: 'Dutch' },
  { code: 'sv', name: 'Swedish' },
  { code: 'th', name: 'Thai' },
];

export default function SettingsPage() {
  const router = useRouter();
  const { user, loading: userLoading } = useUser();
  const { settings, loading, error, update } = useSettings();
  const { blocklist, add: addBlock, remove: removeBlock } = useCategoryBlocklist();
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [newCategoryId, setNewCategoryId] = useState('');
  const [newCategoryName, setNewCategoryName] = useState('');

  const [formData, setFormData] = useState({
    allowedLanguages: ['en'] as string[],
    matureContentFilter: 'EXCLUDE' as MatureFilter,
    broadcasterTypeFilter: 'ALL' as BroadcasterTypeFilter,
    minTargetViewers: 5,
    maxTargetViewers: 500,
    viewerCountPreference: 'SIMILAR' as ViewerPreference,
    sameCategoryOnly: true,
    streamDurationPreference: 'ANY' as DurationPreference,
    raidMessage: "We're raiding @{target} - show them some love!",
    raidRunMessage: 'Raid and run! See you next stream!',
  });

  useEffect(() => {
    if (!userLoading && !user) {
      router.push('/');
    }
  }, [user, userLoading, router]);

  useEffect(() => {
    if (settings) {
      setFormData({
        allowedLanguages: settings.allowedLanguages,
        matureContentFilter: settings.matureContentFilter,
        broadcasterTypeFilter: settings.broadcasterTypeFilter,
        minTargetViewers: settings.minTargetViewers,
        maxTargetViewers: settings.maxTargetViewers,
        viewerCountPreference: settings.viewerCountPreference,
        sameCategoryOnly: settings.sameCategoryOnly,
        streamDurationPreference: settings.streamDurationPreference,
        raidMessage: settings.raidMessage,
        raidRunMessage: settings.raidRunMessage,
      });
    }
  }, [settings]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    try {
      await update(formData);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      console.error('Failed to save:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleLanguageToggle = (code: string) => {
    setFormData((prev) => {
      const current = prev.allowedLanguages;
      if (current.includes(code)) {
        return { ...prev, allowedLanguages: current.filter((c) => c !== code) };
      }
      return { ...prev, allowedLanguages: [...current, code] };
    });
  };

  const handleAddCategory = async () => {
    if (!newCategoryId || !newCategoryName) return;
    try {
      await addBlock(newCategoryId, newCategoryName);
      setNewCategoryId('');
      setNewCategoryName('');
    } catch (err) {
      console.error('Failed to add category:', err);
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
          <h1>Settings</h1>
        </div>

        {error && <div className="error">{error}</div>}

        {loading ? (
          <div className="loading">
            <div className="loading-spinner" />
            <p>Loading...</p>
          </div>
        ) : (
          <form className="settings-form" onSubmit={handleSubmit}>
            <section className="settings-section">
              <h2>Language & Content</h2>

              <div className="form-group">
                <label>Allowed Languages</label>
                <div className="language-grid">
                  {LANGUAGES.map((lang) => (
                    <label
                      key={lang.code}
                      className={`language-checkbox ${formData.allowedLanguages.includes(lang.code) ? 'checked' : ''}`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.allowedLanguages.includes(lang.code)}
                        onChange={() => handleLanguageToggle(lang.code)}
                      />
                      <span>{lang.name}</span>
                    </label>
                  ))}
                </div>
                <p className="help">
                  Only recommend streamers broadcasting in these languages.
                </p>
              </div>

              <div className="form-group">
                <label htmlFor="matureFilter">Mature Content</label>
                <select
                  id="matureFilter"
                  value={formData.matureContentFilter}
                  onChange={(e) =>
                    setFormData({ ...formData, matureContentFilter: e.target.value as MatureFilter })
                  }
                >
                  <option value="INCLUDE">Include all streams</option>
                  <option value="EXCLUDE">Exclude mature streams</option>
                  <option value="ONLY">Only mature streams</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="broadcasterType">Broadcaster Type</label>
                <select
                  id="broadcasterType"
                  value={formData.broadcasterTypeFilter}
                  onChange={(e) =>
                    setFormData({ ...formData, broadcasterTypeFilter: e.target.value as BroadcasterTypeFilter })
                  }
                >
                  <option value="ALL">All broadcasters</option>
                  <option value="AFFILIATE">Affiliates & Partners only</option>
                  <option value="PARTNER">Partners only</option>
                </select>
              </div>
            </section>

            <section className="settings-section">
              <h2>Viewer Count</h2>

              <div className="form-group">
                <label>Target Viewer Range</label>
                <div className="range-inputs">
                  <input
                    type="number"
                    value={formData.minTargetViewers}
                    onChange={(e) =>
                      setFormData({ ...formData, minTargetViewers: parseInt(e.target.value) || 0 })
                    }
                    min={0}
                  />
                  <span>to</span>
                  <input
                    type="number"
                    value={formData.maxTargetViewers}
                    onChange={(e) =>
                      setFormData({ ...formData, maxTargetViewers: parseInt(e.target.value) || 1 })
                    }
                    min={1}
                  />
                  <span>viewers</span>
                </div>
                <p className="help">
                  Only recommend streamers within this viewer range.
                </p>
              </div>

              <div className="form-group">
                <label htmlFor="viewerPreference">Viewer Count Preference</label>
                <select
                  id="viewerPreference"
                  value={formData.viewerCountPreference}
                  onChange={(e) =>
                    setFormData({ ...formData, viewerCountPreference: e.target.value as ViewerPreference })
                  }
                >
                  <option value="ANY">No preference</option>
                  <option value="SMALLER">Prefer smaller streamers</option>
                  <option value="SIMILAR">Prefer similar size</option>
                  <option value="LARGER">Prefer larger streamers</option>
                </select>
              </div>
            </section>

            <section className="settings-section">
              <h2>Category & Duration</h2>

              <div className="form-group">
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="sameCategoryOnly"
                    checked={formData.sameCategoryOnly}
                    onChange={(e) =>
                      setFormData({ ...formData, sameCategoryOnly: e.target.checked })
                    }
                  />
                  <label htmlFor="sameCategoryOnly">Only recommend streamers in the same category</label>
                </div>
                <p className="help">
                  When enabled, discovery recommendations will only include streamers in the same game/category.
                </p>
              </div>

              <div className="form-group">
                <label htmlFor="durationPreference">Stream Duration Preference</label>
                <select
                  id="durationPreference"
                  value={formData.streamDurationPreference}
                  onChange={(e) =>
                    setFormData({ ...formData, streamDurationPreference: e.target.value as DurationPreference })
                  }
                >
                  <option value="ANY">No preference</option>
                  <option value="NEW">Prefer new streams (&lt; 1 hour)</option>
                  <option value="ESTABLISHED">Prefer established streams (&gt; 2 hours)</option>
                </select>
              </div>
            </section>

            <section className="settings-section">
              <h2>Category Blocklist</h2>

              <div className="blocklist-list">
                {blocklist.length === 0 ? (
                  <p className="blocklist-empty">No blocked categories</p>
                ) : (
                  blocklist.map((entry) => (
                    <div key={entry.id} className="blocklist-item">
                      <span>{entry.categoryName}</span>
                      <button
                        type="button"
                        className="blocklist-remove"
                        onClick={() => removeBlock(entry.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div className="add-form">
                <input
                  type="text"
                  placeholder="Category ID (e.g., 509658)"
                  value={newCategoryId}
                  onChange={(e) => setNewCategoryId(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Category Name"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                />
                <button type="button" onClick={handleAddCategory}>
                  Add
                </button>
              </div>
              <p className="help">
                Find category IDs from Twitch URLs or use the Twitch API.
              </p>
            </section>

            <section className="settings-section">
              <h2>Chat Messages</h2>

              <div className="form-group">
                <label htmlFor="raidMessage">Raid Announcement Message</label>
                <textarea
                  id="raidMessage"
                  value={formData.raidMessage}
                  onChange={(e) => setFormData({ ...formData, raidMessage: e.target.value })}
                  rows={2}
                />
                <p className="help">
                  Use {'{target}'} to insert the target streamer's name.
                </p>
              </div>

              <div className="form-group">
                <label htmlFor="raidRunMessage">Raid & Run Message</label>
                <textarea
                  id="raidRunMessage"
                  value={formData.raidRunMessage}
                  onChange={(e) => setFormData({ ...formData, raidRunMessage: e.target.value })}
                  rows={2}
                />
                <p className="help">
                  This message is sent right after the raid announcement.
                </p>
              </div>
            </section>

            <button type="submit" className={`save-button ${saved ? 'saved' : ''}`} disabled={saving}>
              {saving ? 'Saving...' : saved ? 'Saved!' : 'Save Settings'}
            </button>
          </form>
        )}
      </main>

      <style jsx>{`
        .blocklist-list {
          margin-bottom: var(--space-md);
        }

        .blocklist-empty {
          color: var(--text-tertiary);
          font-style: italic;
          padding: var(--space-md);
        }

        .blocklist-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-sm) var(--space-md);
          background: var(--bg-tertiary);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          margin-bottom: var(--space-sm);
        }

        .blocklist-remove {
          background: var(--danger-subtle);
          color: var(--danger);
          border: 1px solid var(--danger);
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-sm);
          font-size: 12px;
          font-weight: 600;
        }

        .blocklist-remove:hover {
          background: var(--danger);
          color: white;
        }
      `}</style>
    </>
  );
}
