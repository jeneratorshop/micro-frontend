import '../../app/styles/shell.css';
import { useAuth } from '../../app/providers/AuthProvider';
import SidebarSection from '../molecules/SidebarSection';

const defaultLinks = [
  { label: 'Dashboard', href: '#overview' },
  { label: 'Analytics', href: '#reports' },
  { label: 'Schedule', href: '#calendar' },
];

function buildSections(links) {
  return [
    {
      title: 'Navigation',
      items: links.map((link) => ({
        label: link.label,
        href: link.href,
        description: link.description,
        active: link.active,
      })),
    },
  ];
}

export function Sidebar({ links = defaultLinks, sections }) {
  const { isAuthenticated, user } = useAuth();
  const navigationSections = sections?.length ? sections : buildSections(links);

  return (
    <aside className="shell-sidebar">
      <div className="sidebar-card">
        <p className="remote-label">Navigation</p>
        <div className="sidebar-sections">
          {navigationSections.map((section) => (
            <SidebarSection key={section.title} section={section} />
          ))}
        </div>
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
