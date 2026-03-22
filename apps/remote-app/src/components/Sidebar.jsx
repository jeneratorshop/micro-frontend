import '../styles.css';
import { useAuth } from '../auth/AuthProvider';

const defaultLinks = [
  { label: 'Dashboard', href: '#overview' },
  { label: 'Analytics', href: '#reports' },
  { label: 'Schedule', href: '#calendar' },
];

export function Sidebar({ links = defaultLinks }) {
  const { isAuthenticated, user } = useAuth();

  return (
    <aside className="shell-sidebar">
      <div className="sidebar-card">
        <p className="remote-label">Navigation</p>
        <nav className="sidebar-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="sidebar-card sidebar-card--muted">
        <p className="remote-label">Auth State</p>
        <strong>{isAuthenticated ? 'Oturum Acik' : 'Oturum Kapali'}</strong>
        <p>
          {isAuthenticated
            ? `${user.name} kullanicisi bagli.`
            : 'Remote shell bu alanda auth durumunu kontrol ediyor.'}
        </p>
      </div>
    </aside>
  );
}
