import { useLocation } from 'react-router-dom';
import { buildPortalLinks, buildSidebarSections } from '../../app/routes/navigationConfig';
import { RemoteNavbar, RemoteSidebar } from '../../shared/federation';

export default function ShellTemplate({ children }) {
  const location = useLocation();

  return (
    <div className="host-shell">
      <RemoteNavbar
        appName="Host App"
        subtitle="tum routing host tarafinda, shell remote uygulamadan geliyor"
        environmentLabel="HOST SPA / 3000"
        portalLinks={buildPortalLinks(location.pathname)}
      />

      <div className="host-shell__body">
        <RemoteSidebar sections={buildSidebarSections(location.pathname)} />

        <main className="host-main">{children}</main>
      </div>
    </div>
  );
}
