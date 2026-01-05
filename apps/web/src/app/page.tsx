'use client';

import { Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Nav } from '@/components/Nav';
import { useUser } from '@/lib/hooks';
import { getAuthUrl } from '@/lib/api';

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, loading } = useUser();
  const error = searchParams.get('error');

  useEffect(() => {
    if (!loading && user) {
      router.push('/end');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner" />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Nav user={user} />
      <main className="home-hero">
        <h1>Raid Autopilot</h1>
        <p>End your stream with the perfect raid. Every time.</p>

        {error && (
          <div className="error">
            {error === 'auth_failed' && 'Authentication failed. Please try again.'}
            {error === 'invalid_state' && 'Invalid session. Please try again.'}
            {error !== 'auth_failed' && error !== 'invalid_state' && `Error: ${error}`}
          </div>
        )}

        <a href={getAuthUrl()} className="login-button">
          Connect with Twitch
        </a>

        <div className="home-features">
          <h2>How it works</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>1. Connect</h3>
              <p>Link your Twitch account securely with OAuth</p>
            </div>
            <div className="feature-card">
              <h3>2. Pick</h3>
              <p>Get smart recommendations from favorites and same-category streamers</p>
            </div>
            <div className="feature-card">
              <h3>3. Raid</h3>
              <p>One click to start the raid with automated chat messages</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="loading">
        <div className="loading-spinner" />
        <p>Loading...</p>
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}
