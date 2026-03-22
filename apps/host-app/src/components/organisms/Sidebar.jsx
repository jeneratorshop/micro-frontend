import { useAuth } from '../../app/providers/AuthProvider';
import SidebarSection from '../molecules/SidebarSection';

export default function Sidebar({ sections }) {
  const { isAuthenticated, user } = useAuth();

  return (
    <aside className="shell-sidebar">
      <div className="sidebar-card">
        <p className="remote-label">Ana Navigasyon</p>
        <div className="sidebar-sections">
          {sections.map((section) => (
            <SidebarSection key={section.title} section={section} />
          ))}
        </div>
      </div>

      <div className="sidebar-card sidebar-card--muted">
        <p className="remote-label">Auth State</p>
        <strong>{isAuthenticated ? 'Oturum Acik' : 'Oturum Kapali'}</strong>
        <p>
          {isAuthenticated
            ? `${user.name} core uygulama auth'u ile bagli.`
            : 'Login akisi mevcut host uygulama tarafinda yonetiliyor.'}
        </p>
      </div>
    </aside>
  );
}
