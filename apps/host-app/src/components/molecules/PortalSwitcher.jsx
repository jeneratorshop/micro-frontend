import { NavLink } from 'react-router-dom';

function PortalLink({ href, isActive, label }) {
  const classes = (currentActive) =>
    ['portal-link', isActive || currentActive ? 'portal-link--active' : '']
      .filter(Boolean)
      .join(' ');

  if (href.startsWith('/')) {
    return (
      <NavLink className={({ isActive: currentActive }) => classes(currentActive)} to={href}>
        {label}
      </NavLink>
    );
  }

  return (
    <a className={classes(false)} href={href}>
      {label}
    </a>
  );
}

export default function PortalSwitcher({ links }) {
  return (
    <div className="portal-switcher">
      {links.map((link) => (
        <PortalLink key={link.href} {...link} />
      ))}
    </div>
  );
}
