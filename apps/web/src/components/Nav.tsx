'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, logout, getAuthUrl, clearStoredToken } from '@/lib/api';

interface NavProps {
  user: User | null;
}

export function Nav({ user }: NavProps) {
  const pathname = usePathname();

  const handleLogout = () => {
    // Call logout API first (needs the token to delete from server)
    // Then clear local token and redirect
    logout()
      .catch(() => {})
      .finally(() => {
        clearStoredToken();
        window.location.replace('/');
      });
  };

  return (
    <nav className="main-nav">
      <div className="nav-brand">
        <Link href="/">
          <span className="logo-icon">⚡</span>
          Raid Autopilot
        </Link>
      </div>

      {user ? (
        <>
          <div className="nav-links">
            <Link href="/end" className={pathname === '/end' ? 'active' : ''}>
              End Stream
            </Link>
            <Link href="/warmlist" className={pathname === '/warmlist' ? 'active' : ''}>
              Favorites
            </Link>
            <Link href="/history" className={pathname === '/history' ? 'active' : ''}>
              History
            </Link>
            <Link href="/settings" className={pathname === '/settings' ? 'active' : ''}>
              Settings
            </Link>
          </div>
          <div className="nav-user">
            <img src={user.profileImageUrl || ''} alt={user.displayName} className="nav-avatar" />
            <span>{user.displayName}</span>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        </>
      ) : (
        <div className="nav-auth">
          <a href={getAuthUrl()} className="login-button">
            Connect with Twitch
          </a>
        </div>
      )}
    </nav>
  );
}
