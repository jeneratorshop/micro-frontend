import ShellLink from './ShellLink';

export default function PortalSwitcher({ links }) {
  if (!links.length) {
    return null;
  }

  return (
    <div className="portal-switcher">
      {links.map((link) => (
        <ShellLink
          key={link.href}
          className="portal-link"
          activeClassName="portal-link--active"
          href={link.href}
          isActive={link.isActive}
        >
          {link.label}
        </ShellLink>
      ))}
    </div>
  );
}
