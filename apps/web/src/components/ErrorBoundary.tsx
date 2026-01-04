'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="error-boundary">
          <div className="error-content">
            <h1>Something went wrong</h1>
            <p>An unexpected error occurred. Please try refreshing the page.</p>
            <button onClick={() => window.location.reload()}>
              Refresh Page
            </button>
          </div>
          <style jsx>{`
            .error-boundary {
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
            }
            h1 {
              font-size: 32px;
              margin-bottom: 16px;
            }
            p {
              color: var(--text-secondary);
              margin-bottom: 24px;
            }
            button {
              background: var(--accent);
              color: white;
              border: none;
              padding: 12px 24px;
              border-radius: 4px;
              font-size: 16px;
              cursor: pointer;
            }
            button:hover {
              background: var(--accent-hover);
            }
          `}</style>
        </div>
      );
    }

    return this.props.children;
  }
}
