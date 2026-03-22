import { OverviewCard } from '../../components/molecules';
import { AuthStatusCard, RouteHero } from '../../components/organisms';
import { ROUTE_PATHS } from '../../app/routes/routePaths';

export default function HostOrdersPage() {
  return (
    <>
      <RouteHero
        eyebrow="Core Orders"
        title="Bu sayfa mevcut uygulamanin siparis modulu gibi davranir."
        description="Sen yeni bir remote modul eklerken bu mevcut business ekranlari host tarafinda yasamaya devam eder."
        paths={[ROUTE_PATHS.hostOrders, ROUTE_PATHS.remoteAuthentication]}
      >
        <div className="stack-panel">
          <AuthStatusCard />
          <article className="overview-card">
            <p className="eyebrow">Domain Scope</p>
            <h3>Mevcut ekip kendi business akisina odaklanir</h3>
            <p>
              Siparis, operasyon ve raporlama gibi mevcut alanlar host codebase
              icinde gelismeye devam eder.
            </p>
          </article>
        </div>
      </RouteHero>

      <section className="content-grid content-grid--two">
        <OverviewCard
          title="Core Uygulama Kontrolu"
          description="Routing, auth ve shell karari merkezi olarak host'ta."
          detail="Yeni modul entegre edilse bile mevcut urunun davranisi host tarafinda kalir."
        />
        <OverviewCard
          title="Yeni Modul Katkisi"
          description="Ayri ekip yeni modulu ayri codebase gibi gelistirebilir."
          detail="Host sadece registry'yi okuyup bu modulu mevcut urun icine yerlestirir."
        />
      </section>
    </>
  );
}
