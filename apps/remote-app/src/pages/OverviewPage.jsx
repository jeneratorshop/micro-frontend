import RouteChip from '../components/atoms/RouteChip';
import { APP_ORIGINS } from '../shared/constants/origins';

export default function OverviewPage() {
  return (
    <>
      <section className="preview-card preview-card--hero">
        <p className="remote-label">Yeni Modul</p>
        <h1>Bu alan ayri ekipten gelen yeni modul codebase'ini temsil eder.</h1>
        <p>
          Bu uygulama mevcut host urununu yeniden yazmaz. Sadece sonradan
          entegre edilen yeni modul sayfalarini ve route registry'sini saglar.
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
          <p className="remote-label">Ayri Codebase</p>
          <h2>Bu modul farkli repo gibi dusunulebilir.</h2>
          <p>
            Yeni bir sayfa eklediginde host uygulama bu route'u ve sidebar
            elemanini registry uzerinden okuyup kendi shell'inde gosterebilir.
          </p>
        </section>
        <section className="preview-card">
          <p className="remote-label">Host Entegrasyonu</p>
          <h2>Mevcut urun shell'i bozulmadan kalir.</h2>
          <p>
            Boylece core ekip ana uygulamayi yonetir, modul ekibi ise yalnizca
            kendi feature alanina odaklanir.
          </p>
        </section>
      </section>
    </>
  );
}
