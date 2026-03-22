export default function OverviewCard({ title, description, detail }) {
  return (
    <article className="overview-card">
      <p className="eyebrow">{title}</p>
      <h3>{description}</h3>
      <p>{detail}</p>
    </article>
  );
}
