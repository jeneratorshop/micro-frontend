import { OverviewCard } from '../../components/molecules';
import { RouteHero } from '../../components/organisms';
import { ROUTE_PATHS } from '../../app/routes/routePaths';
import { RemoteAuthStatusCard } from '../../shared/federation';

export default function RemoteOverviewPage() {
  return (
    <>
      <RouteHero
        eyebrow="Remote Route"
        title="Remote moduller host uygulama icinde kullaniliyor."
        description="Bu route 3000 portunda render edilir. Fakat shell ve auth bilesenleri 3001 uzerindeki remote app tarafindan saglanir."
        paths={[ROUTE_PATHS.remoteOverview, 'arka planda remoteEntry.js']}
      >
        <article className="overview-card route-note-card">
          <p className="eyebrow">Arka Plan</p>
          <h3>3001 kullanici icin degil, moduller icin calisir</h3>
          <p>
            Gerekirse remote preview ayrica acilabilir; esas uygulama deneyimi
            ise 3000 portunda toplanir.
          </p>
        </article>
      </RouteHero>

      <section className="overview-grid">
        <OverviewCard
          title="Remote UI"
          description="Navbar ve sidebar remote app'ten gelir."
          detail="Tasarim sistemi ve shell gelisimini ayri bir ekip yonetebilir."
        />
        <OverviewCard
          title="Host Router"
          description="Sayfa akisi yine host tarafinda kalir."
          detail="Boylece kullanici tek uygulama hissi yasar."
        />
        <RemoteAuthStatusCard />
      </section>
    </>
  );
}
