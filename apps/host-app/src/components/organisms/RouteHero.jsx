import RoutePill from '../atoms/RoutePill';

export default function RouteHero({
  eyebrow,
  title,
  description,
  paths,
  children,
}) {
  return (
    <section className="hero-card">
      <div className="route-hero__content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="route-pill-list">
          {paths.map((path) => (
            <RoutePill key={path}>{path}</RoutePill>
          ))}
        </div>
      </div>

      {children}
    </section>
  );
}
