import { OverviewCard } from '../../components/molecules';
import { RouteHero } from '../../components/organisms';
import { ROUTE_PATHS } from '../../app/routes/routePaths';

export default function RemoteNavigationPage() {
  return (
    <>
      <RouteHero
        eyebrow="Remote Navigation"
        title="Remote route'lar da host router tarafindan acilir."
        description="Sidebar ve navbar linkleri React Router ile calisir. Tiklandiginda sayfa yenilenmez ve kullanici 3000 portunda kalir."
        paths={[ROUTE_PATHS.remoteNavigation, ROUTE_PATHS.hostDashboard]}
      >
        <div className="stack-panel">
          <article className="overview-card">
            <p className="eyebrow">Rule 1</p>
            <h3>Route'lar 3000 ustunde</h3>
            <p>
              `/host/...` ve `/remote/...` path'lerinin tamami host uygulamada
              acilir.
            </p>
          </article>
          <article className="overview-card">
            <p className="eyebrow">Rule 2</p>
            <h3>Remote shell ayrik kalir</h3>
            <p>
              Shell bilesenleri federation ile uzaktan gelir ama gezinme tek
              React router uzerinde akar.
            </p>
          </article>
        </div>
      </RouteHero>

      <section className="content-grid content-grid--two">
        <OverviewCard
          title="Link Davranisi"
          description="Sidebar ve navbar artik internal route kullanir."
          detail="Bu sayede SPA hissi korunur ve full page refresh olmaz."
        />
        <OverviewCard
          title="Preview Opsiyonu"
          description="Istersen remote app'i 3001'de ayri da gorebilirsin."
          detail="Ama ana uygulama akisinda kullanici yalnizca 3000'i kullanir."
        />
      </section>
    </>
  );
}
