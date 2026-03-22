import RouteChip from '../components/atoms/RouteChip';
import { APP_ORIGINS } from '../shared/constants/origins';

export default function OverviewPage() {
  return (
    <>
      <section className="preview-card preview-card--hero">
        <p className="remote-label">Remote Uygulama</p>
        <h1>Host shell disinda kalan content modulleri burada uretiliyor.</h1>
        <p>
          Bu uygulama artik shared shell saglamaz. Host tarafi yalnizca remote
          route registry ve page content'i federation ile tuketir.
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
            className="preview-link preview-link--secondary"
            href={`${APP_ORIGINS.remote}/remote/authentication`}
          >
            Remote Contract
          </a>
        </div>
      </section>

      <section className="preview-grid">
        <section className="preview-card">
          <p className="remote-label">Content Ownership</p>
          <h2>Remote ekip kendi icerigini ve menu kaydini yonetir.</h2>
          <p>
            Yeni bir remote sayfa eklediginde host uygulama bu route'u ve menu
            elemanini registry uzerinden okuyabilir.
          </p>
        </section>
        <section className="preview-card">
          <p className="remote-label">Host Ownership</p>
          <h2>Navbar, sidebar ve auth host tarafinda sabit kalir.</h2>
          <p>
            Boylece shell davranisi merkezi olur, remote ekip ise sadece kendi
            content sinirlarinda calisir.
          </p>
        </section>
      </section>
    </>
  );
}
