import '../../app/styles/shell.css';
import { useAuth } from '../../app/providers/AuthProvider';
import PortalSwitcher from '../molecules/PortalSwitcher';

export function Navbar({
  appName = 'Microfrontend Workspace',
  subtitle = 'Remote shell tarafindan yonetilen ortak alan',
  environmentLabel = 'REMOTE / 3001',
  portalLinks = [],
}) {
  const { isAuthenticated, user, signOut } = useAuth();

  return (
    <header className="shell-navbar">
      <div>
        <p className="remote-label">Shared Shell</p>
        <div className="shell-navbar__title-row">
          <h2>{appName}</h2>
          <span>{subtitle}</span>
        </div>
        <PortalSwitcher links={portalLinks} />
      </div>

      <div className="shell-navbar__actions">
        <div className="environment-chip">{environmentLabel}</div>
        {isAuthenticated ? (
          <>
            <div className="profile-chip">
              <strong>{user.name}</strong>
              <span>{user.role}</span>
            </div>
            <button className="secondary-button" onClick={signOut}>
              Cikis Yap
            </button>
          </>
        ) : (
          <div className="guest-chip">Misafir modunda goruntuleniyor</div>
        )}
      </div>
    </header>
  );
}
