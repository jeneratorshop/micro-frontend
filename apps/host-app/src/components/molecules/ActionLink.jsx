import { Link } from 'react-router-dom';

export default function ActionLink({ href, label, external = false }) {
  if (external) {
    return (
      <a className="action-link action-link--secondary" href={href}>
        {label}
      </a>
    );
  }

  return (
    <Link className="action-link" to={href}>
      {label}
    </Link>
  );
}
