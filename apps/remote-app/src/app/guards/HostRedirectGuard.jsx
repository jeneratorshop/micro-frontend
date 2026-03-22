import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { APP_ORIGINS } from '../../shared/constants/origins';

export default function HostRedirectGuard({ children }) {
  const location = useLocation();
  const shouldRedirect = location.pathname.startsWith('/host');

  useEffect(() => {
    if (shouldRedirect) {
      window.location.replace(
        `${APP_ORIGINS.host}${location.pathname}${location.search}${location.hash}`,
      );
    }
  }, [location.hash, location.pathname, location.search, shouldRedirect]);

  if (shouldRedirect) {
    return (
      <div className="remote-loading-state">
        <div className="redirect-card">
          <p className="remote-label">Port Switching</p>
          <h1>Host URL algilandi, 3000 portuna yonlendiriliyor.</h1>
          <p>{`${APP_ORIGINS.host}${location.pathname}`}</p>
        </div>
      </div>
    );
  }

  return children;
}
