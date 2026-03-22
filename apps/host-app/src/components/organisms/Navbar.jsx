import { useAuth } from '../../app/providers/AuthProvider';
import PortalSwitcher from '../molecules/PortalSwitcher';

export default function Navbar({
  appName = 'Host Workspace',
  environmentLabel = 'HOST / 3000',
  portalLinks,
  subtitle = 'navbar, sidebar ve authentication host tarafinda yonetilir',
}) {
  const { isAuthenticated, signOut, user } = useAuth();

  return (
    <header className="shell-navbar">
      <div>
        <p className="remote-label">Host Owned Shell</p>
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
          <div className="guest-chip">Host auth henuz acilmadi</div>
        )}
      </div>
    </header>
  );
}
