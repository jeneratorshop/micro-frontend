import { OverviewCard } from '../../components/molecules';
import { RouteHero } from '../../components/organisms';
import { ROUTE_PATHS } from '../../app/routes/routePaths';

export default function HostRoadmapPage() {
  return (
    <>
      <RouteHero
        eyebrow="Core Roadmap"
        title="Mevcut uygulamanin sonraki adimlarini planla."
        description="Bu alan host ekibin kendi roadmap ekranini temsil eder. Remote modul bunun yanina sonradan eklenir."
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
          description="Tum son kullanici route kararlarini host'ta topla."
          detail="Var olan uygulama his olarak hep ana urun gibi kalir."
        />
        <OverviewCard
          title="2. Auth"
          description="Login ve oturum yonetimini mevcut uygulamada tut."
          detail="Yeni moduller ayni auth kabugunun icinde calisir."
        />
        <OverviewCard
          title="3. Modul"
          description="Yeni ekip sadece kendi content modulunu gelistirsin."
          detail="Ornegin ayri repo icinde yeni remote sayfa ve sidebar kaydi eklenebilir."
        />
      </section>
    </>
  );
}
