import { OverviewCard } from '../../components/molecules';
import { RouteHero } from '../../components/organisms';
import { ROUTE_PATHS } from '../../app/routes/routePaths';
import {
  RemoteAuthStatusCard,
  RemoteSignInPanel,
} from '../../shared/federation';

export default function RemoteAuthenticationPage() {
  return (
    <>
      <RouteHero
        eyebrow="Remote Authentication"
        title="Authentication modulleri remote app'ten geliyor."
        description="Bu route host uygulama icinde acilir, ancak login paneli ve session karti remote taraftan paylasilir."
        paths={[ROUTE_PATHS.remoteAuthentication, ROUTE_PATHS.hostOrders]}
      >
        <RemoteSignInPanel />
      </RouteHero>

      <section className="content-grid content-grid--two">
        <RemoteAuthStatusCard />
        <OverviewCard
          title="Auth Scope"
          description="Oturum mantigi tek yerde toplandi."
          detail="Gercek API baglandiginda tum host route'lari ayni auth provider ile calismaya devam eder."
        />
      </section>
    </>
  );
}
