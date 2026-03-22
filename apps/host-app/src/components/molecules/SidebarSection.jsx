import { NavLink } from 'react-router-dom';

function SidebarItem({ active, description, disabled, href, label }) {
  const className = ['sidebar-link', active ? 'sidebar-link--active' : '']
    .filter(Boolean)
    .join(' ');

  if (disabled) {
    return (
      <div className={`${className} sidebar-link--disabled`}>
        <strong>{label}</strong>
        {description ? <small>{description}</small> : null}
      </div>
    );
  }

  if (href.startsWith('/')) {
    return (
      <NavLink className={className} to={href}>
        <strong>{label}</strong>
        {description ? <small>{description}</small> : null}
      </NavLink>
    );
  }

  return (
    <a className={className} href={href}>
      <strong>{label}</strong>
      {description ? <small>{description}</small> : null}
    </a>
  );
}

export default function SidebarSection({ section }) {
  return (
    <section className="sidebar-section">
      <h3>{section.title}</h3>
      <nav className="sidebar-nav">
        {section.items.map((item) => (
          <SidebarItem key={`${section.title}-${item.label}`} {...item} />
        ))}
      </nav>
    </section>
  );
}
