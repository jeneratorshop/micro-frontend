import '../styles.css';
import { useAuth } from '../auth/AuthProvider';

export function Navbar({
  appName = 'Microfrontend Workspace',
  subtitle = 'Remote shell tarafindan yonetilen ortak alan',
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
      </div>

      <div className="shell-navbar__actions">
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
