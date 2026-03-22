import { NavLink } from 'react-router-dom';

export default function ShellLink({
  href,
  className,
  activeClassName = '',
  isActive = false,
  children,
}) {
  const classes = [className, isActive ? activeClassName : '']
    .filter(Boolean)
    .join(' ');

  if (href.startsWith('/')) {
    return (
      <NavLink className={classes} to={href}>
        {children}
      </NavLink>
    );
  }

  return (
    <a className={classes} href={href}>
      {children}
    </a>
  );
}
