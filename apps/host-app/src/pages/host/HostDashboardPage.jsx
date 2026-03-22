import { ActionLink, OverviewCard } from '../../components/molecules';
import { AuthStatusCard, RouteHero, SignInPanel } from '../../components/organisms';
import { ROUTE_PATHS } from '../../app/routes/routePaths';
import { APP_ORIGINS } from '../../shared/constants/origins';

export default function HostDashboardPage() {
  return (
    <>
      <RouteHero
        eyebrow="Core Dashboard"
        title="Bu alan mevcut host uygulamanin yazilmis ana ekranidir."
        description="Yeni modul ayri bir codebase'de gelistirilse bile kullanici deneyimi hala bu mevcut uygulamanin icinde kalir."
        paths={[ROUTE_PATHS.hostDashboard, ROUTE_PATHS.remoteOverview]}
      >
        <SignInPanel />
      </RouteHero>

      <section className="overview-grid">
        <OverviewCard
          title="Var Olan Uygulama"
          description="Dashboard, siparis ve ana shell zaten host tarafinda yasar."
          detail="Sen yeni bir modul gelistirirken mevcut urun akisini bozmadan entegre olursun."
        />
        <OverviewCard
          title="Modul Entegrasyonu"
          description="Yeni modul ayri repo gibi gelistirilip host'a takilir."
          detail="Host shell, auth ve navigasyon sahipligini birakmadan remote content'i icerir."
        />
        <AuthStatusCard />
      </section>

      <section className="task-card">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Entegrasyon Ornegi</p>
            <h2>Core uygulama ve yeni modul ayni deneyimde bulusur</h2>
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
