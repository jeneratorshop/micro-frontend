import { OverviewCard } from '../../components/molecules';
import { AuthStatusCard, RouteHero } from '../../components/organisms';
import { ROUTE_PATHS } from '../../app/routes/routePaths';

export default function HostOrdersPage() {
  return (
    <>
      <RouteHero
        eyebrow="Host Orders"
        title="Domain ekranlari host uygulama icinde yasasin."
        description="Siparis, katalog veya raporlama gibi is modulleri host tarafinda buyur. Shell ve auth da host uygulamanin yonetimindedir."
        paths={[ROUTE_PATHS.hostOrders, ROUTE_PATHS.remoteAuthentication]}
      >
        <div className="stack-panel">
          <AuthStatusCard />
          <article className="overview-card">
            <p className="eyebrow">Domain Scope</p>
            <h3>Host ekip yalnizca is akisina odaklanir</h3>
            <p>
              Bu alanlari kendi ekranlarinla, tablolarinla ve formlarinla
              kolayca genisletebilirsin.
            </p>
          </article>
        </div>
      </RouteHero>

      <section className="content-grid content-grid--two">
        <OverviewCard
          title="Host Kontrolu"
          description="Routing karari merkezi olarak host'ta."
          detail="Remote sayfaya gecsen bile router ve auth host React uygulamasi tarafindan yonetilir."
        />
        <OverviewCard
          title="Remote Katki"
          description="Remote ekip icerik ekranlarini ve sidebar kayitlarini gunceller."
          detail="Boylece host shell sabit kalirken remote bagimsiz olarak genisleyebilir."
        />
      </section>
    </>
  );
}
