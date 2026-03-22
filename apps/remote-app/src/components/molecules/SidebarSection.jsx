import ShellLink from './ShellLink';

export default function SidebarSection({ section }) {
  return (
    <section className="sidebar-section">
      <h3>{section.title}</h3>
      <nav className="sidebar-nav">
        {section.items.map((link) => (
          <ShellLink
            key={link.href}
            className={`sidebar-link ${link.active ? 'sidebar-link--active' : ''}`}
            href={link.href}
          >
            <span>{link.label}</span>
            {link.description ? <small>{link.description}</small> : null}
          </ShellLink>
        ))}
      </nav>
    </section>
  );
}
