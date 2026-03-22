import { ActionLink, OverviewCard } from '../../components/molecules';
import { RouteHero } from '../../components/organisms';
import { ROUTE_PATHS } from '../../app/routes/routePaths';
import { APP_ORIGINS } from '../../shared/constants/origins';
import {
  RemoteAuthStatusCard,
  RemoteSignInPanel,
} from '../../shared/federation';

export default function HostDashboardPage() {
  return (
    <>
      <RouteHero
        eyebrow="Host Route"
        title="Tum routing host uygulamada, tum deneyim 3000 portunda."
        description="Bu sayfa host tarafinda calisir. Navbar, sidebar ve authentication ise remote app'ten gelir ama kullanici tek bir React uygulamasindaymis gibi 3000 uzerinde kalir."
        paths={[ROUTE_PATHS.hostDashboard, ROUTE_PATHS.remoteOverview]}
      >
        <RemoteSignInPanel />
      </RouteHero>

      <section className="overview-grid">
        <OverviewCard
          title="Tek SPA"
          description="Host React Router tum route'lari yonetir."
          detail="Kullanici host ve remote sayfalari arasinda gezerken port degistirmez."
        />
        <OverviewCard
          title="Remote Shell"
          description="Shell bilesenleri hala remote taraftan geliyor."
          detail="Boylece ortak navbar, sidebar ve auth deneyimi tek kaynaktan yonetilir."
        />
        <RemoteAuthStatusCard />
      </section>

      <section className="task-card">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Rota Gecisleri</p>
            <h2>Hepsi 3000 uzerinden acilir</h2>
          </div>
        </div>

        <div className="action-row">
          <ActionLink href={ROUTE_PATHS.hostOrders} label="Host Orders" />
          <ActionLink
            href={ROUTE_PATHS.remoteNavigation}
            label="Remote Navigation"
          />
          <ActionLink
            href={`${APP_ORIGINS.remotePreview}${ROUTE_PATHS.remoteOverview}`}
            label="Remote Preview (3001)"
            external
          />
        </div>

        <ul className="task-list">
          <li>Host route'lari: `/host/...`</li>
          <li>Remote route'lari: `/remote/...`</li>
          <li>Kullanici hep `http://localhost:3000` uzerinde kalir.</li>
        </ul>
      </section>
    </>
  );
}
