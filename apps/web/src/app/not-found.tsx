import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          padding: '48px',
          maxWidth: '400px',
        }}
      >
        <div
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            color: 'var(--accent)',
            marginBottom: '16px',
          }}
        >
          404
        </div>
        <h1
          style={{
            fontSize: '28px',
            marginBottom: '12px',
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            color: 'var(--text-secondary)',
            marginBottom: '32px',
            lineHeight: '1.6',
          }}
        >
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            background: 'var(--accent)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: '600',
            textDecoration: 'none',
          }}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
