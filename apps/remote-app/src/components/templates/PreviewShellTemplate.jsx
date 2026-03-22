import { useLocation } from 'react-router-dom';
import { buildPortalLinks, buildSidebarSections } from '../../app/routes/navigationConfig';
import { Navbar, Sidebar } from '../organisms';

export default function PreviewShellTemplate({ children }) {
  const location = useLocation();

  return (
    <div className="remote-preview">
      <Navbar
        appName="Remote Shell"
        subtitle="atomic design ile ayrilan shared shell preview"
        environmentLabel="REMOTE / 3001"
        portalLinks={buildPortalLinks(location.pathname)}
      />

      <div className="remote-preview__body">
        <Sidebar sections={buildSidebarSections(location.pathname)} />

        <main className="remote-preview__main">{children}</main>
      </div>
    </div>
  );
}
