'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

  return (
    <div className="error-page">
      <div className="error-content">
        <div className="error-icon">!</div>
        <h1>Something went wrong</h1>
        <p>An unexpected error occurred while loading this page.</p>
        <div className="error-actions">
          <button onClick={() => reset()}>Try Again</button>
          <button onClick={() => (window.location.href = '/')} className="secondary">
            Go Home
          </button>
        </div>
      </div>
      <style jsx>{`
        .error-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-primary);
          color: var(--text-primary);
        }
        .error-content {
          text-align: center;
          padding: 48px;
          max-width: 400px;
        }
        .error-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(235, 4, 0, 0.2);
          color: var(--danger);
          font-size: 32px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }
        h1 {
          font-size: 28px;
          margin-bottom: 12px;
        }
        p {
          color: var(--text-secondary);
          margin-bottom: 32px;
          line-height: 1.6;
        }
        .error-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
        }
        button {
          background: var(--accent);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
        button:hover {
          background: var(--accent-hover);
        }
        button.secondary {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }
        button.secondary:hover {
          background: var(--bg-secondary);
        }
      `}</style>
    </div>
  );
}
