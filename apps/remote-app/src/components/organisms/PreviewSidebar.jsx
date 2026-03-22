import ShellLink from '../molecules/ShellLink';

export default function PreviewSidebar({ routeEntries }) {
  return (
    <aside className="preview-sidebar">
      <section className="preview-sidebar__card">
        <p className="remote-label">Route Registry</p>
        <div className="preview-sidebar__nav">
          {routeEntries.map((entry) => (
            <ShellLink
              key={entry.id}
              activeClassName="preview-sidebar__link--active"
              className="preview-sidebar__link"
              href={entry.path}
            >
              <strong>{entry.label}</strong>
              <small>{entry.description}</small>
            </ShellLink>
          ))}
        </div>
      </section>

      <section className="preview-sidebar__card preview-sidebar__card--muted">
        <p className="remote-label">Ownership</p>
        <strong>Host shell sahibi</strong>
        <p>Remote burada sadece sayfa icerigi ve navigation kaydi uretir.</p>
      </section>
    </aside>
  );
}
