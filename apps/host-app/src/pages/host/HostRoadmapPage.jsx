import { OverviewCard } from '../../components/molecules';
import { RouteHero } from '../../components/organisms';
import { ROUTE_PATHS } from '../../app/routes/routePaths';

export default function HostRoadmapPage() {
  return (
    <>
      <RouteHero
        eyebrow="Host Roadmap"
        title="Host uygulamanin sonraki adimlarini planla."
        description="Bu route ornek bir yol haritasi ekrani. Buraya kendi dashboard, tablo ve form sayfalarini yerlestirebilirsin."
        paths={[ROUTE_PATHS.hostRoadmap, ROUTE_PATHS.remoteOverview]}
      >
        <article className="overview-card route-note-card">
          <p className="eyebrow">Next Step</p>
          <h3>Gercek uygulamaya gecis</h3>
          <p>
            Bundan sonra host icine yeni route'lar ve domain komponentleri
            eklemek daha kolay olur.
          </p>
        </article>
      </RouteHero>

      <section className="overview-grid">
        <OverviewCard
          title="1. Routing"
          description="Tum route kararlarini host'ta topla."
          detail="Tek SPA deneyimi bu noktada korunur."
        />
        <OverviewCard
          title="2. Auth"
          description="Login ve oturum yonetimini remote app'te tut."
          detail="Host sadece provider ve widgetlari kullanir."
        />
        <OverviewCard
          title="3. Domain"
          description="Gercek is sayfalarini host'a ekle."
          detail="Ornegin `/host/orders`, `/host/customers`, `/host/reports`."
        />
      </section>
    </>
  );
}
