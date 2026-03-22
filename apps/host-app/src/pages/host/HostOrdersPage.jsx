import { OverviewCard } from '../../components/molecules';
import { RouteHero } from '../../components/organisms';
import { ROUTE_PATHS } from '../../app/routes/routePaths';
import { RemoteAuthStatusCard } from '../../shared/federation';

export default function HostOrdersPage() {
  return (
    <>
      <RouteHero
        eyebrow="Host Orders"
        title="Domain ekranlari host uygulama icinde yasasin."
        description="Siparis, katalog veya raporlama gibi is modulleri host tarafinda buyur. Shell ise arkada remote uygulamadan saglanmaya devam eder."
        paths={[ROUTE_PATHS.hostOrders, ROUTE_PATHS.remoteAuthentication]}
      >
        <div className="stack-panel">
          <RemoteAuthStatusCard />
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
          detail="Remote sayfaya gecsen bile router host React uygulamasi tarafindan yonetilir."
        />
        <OverviewCard
          title="Remote Katki"
          description="Auth ve ortak layout yine remote kaynaktan gelir."
          detail="Bu da microfrontend ayrimini korurken tek uygulama hissini verir."
        />
      </section>
    </>
  );
}
