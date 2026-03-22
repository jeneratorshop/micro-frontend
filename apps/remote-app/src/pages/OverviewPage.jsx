import RouteChip from '../components/atoms/RouteChip';
import { AuthStatusCard } from '../components/organisms';
import { APP_ORIGINS } from '../shared/constants/origins';

export default function OverviewPage() {
  return (
    <>
      <section className="preview-card preview-card--hero">
        <p className="remote-label">Remote Uygulama</p>
        <h1>Navbar, sidebar ve authentication burada yonetiliyor.</h1>
        <p>
          Bu uygulama shared shell kaynagidir. Host tarafi bu bilesenleri
          federation ile tuketir.
        </p>

        <div className="route-chip-list">
          <RouteChip>{`${APP_ORIGINS.remote}/remote/overview`}</RouteChip>
          <RouteChip>{`${APP_ORIGINS.host}/host/dashboard`}</RouteChip>
        </div>

        <div className="preview-actions">
          <a className="preview-link" href={`${APP_ORIGINS.host}/host/dashboard`}>
            Host Dashboard
          </a>
          <a
            className="preview-link"
            href={`${APP_ORIGINS.remote}/remote/authentication`}
          >
            Remote Authentication
          </a>
        </div>
      </section>

      <section className="preview-grid">
        <AuthStatusCard />
        <section className="preview-card">
          <p className="remote-label">Shared Ownership</p>
          <h2>Shell remote tarafta tek kaynaktan gelir.</h2>
          <p>
            Host uygulamalar ayni navbar, sidebar ve auth deneyimini tekrar
            yazmadan kullanabilir.
          </p>
        </section>
      </section>
    </>
  );
}
