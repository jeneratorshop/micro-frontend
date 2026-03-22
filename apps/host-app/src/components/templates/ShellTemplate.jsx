import { useLocation } from 'react-router-dom';
import { useRemoteRoutes } from '../../app/providers/RemoteRouteProvider';
import { buildPortalLinks, buildSidebarSections } from '../../app/routes/navigationConfig';
import { Navbar, Sidebar } from '../organisms';

export default function ShellTemplate({ children }) {
  const location = useLocation();
  const remoteState = useRemoteRoutes();

  return (
    <div className="host-shell">
      <Navbar
        appName="Host App"
        subtitle="navbar, sidebar ve authentication host tarafinda yonetilir"
        environmentLabel="HOST SPA / 3000"
        portalLinks={buildPortalLinks(location.pathname, remoteState.routeEntries)}
      />

      <div className="host-shell__body">
        <Sidebar
          sections={buildSidebarSections(
            location.pathname,
            remoteState.routeEntries,
            remoteState,
          )}
        />

        <main className="host-main">{children}</main>
      </div>
    </div>
  );
}
