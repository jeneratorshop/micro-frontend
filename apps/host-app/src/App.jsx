import { Suspense } from 'react';
import { AuthProvider } from 'remote_shell/AuthProvider';
import { Navbar } from 'remote_shell/Navbar';
import { Sidebar } from 'remote_shell/Sidebar';
import { AuthStatusCard, SignInPanel } from 'remote_shell/AuthWidgets';

function OverviewCard({ title, description, detail }) {
  return (
    <article className="overview-card">
      <p className="eyebrow">{title}</p>
      <h3>{description}</h3>
      <p>{detail}</p>
    </article>
  );
}

function HostDashboard() {
  return (
    <div className="host-shell">
      <Navbar
        appName="Host App"
        subtitle="Ana is akisini burada gelistirebilirsin"
      />

      <div className="host-shell__body">
        <Sidebar
          links={[
            { label: 'Ana Panel', href: '#overview' },
            { label: 'Raporlar', href: '#reports' },
            { label: 'Takvim', href: '#calendar' },
          ]}
        />

        <main className="host-main">
          <section className="hero-card" id="overview">
            <div>
              <p className="eyebrow">Host Alani</p>
              <h1>Kendi ekranlarini microfrontend yapisinda guvenle gelistir.</h1>
              <p>
                Navbar, sidebar ve authentication akisi remote uygulamada
                yonetiliyor. Sen burada urun ekranlarini, tablolari ve
                is akislarini bagimsiz gelistirebilirsin.
              </p>
            </div>

            <SignInPanel />
          </section>

          <section className="overview-grid" id="reports">
            <OverviewCard
              title="Bagimsiz Yayin"
              description="Remote ekip ortak kabugu ayri deploy edebilir."
              detail="Navigasyon ve oturum yonetimi merkezi olarak guncellenir."
            />
            <OverviewCard
              title="Takim Ayrismasi"
              description="Host ekip yalnizca is alanina odaklanir."
              detail="Boylece domain ekranlari ortak shell'den ayrilir."
            />
            <AuthStatusCard />
          </section>

          <section className="task-card" id="calendar">
            <div>
              <p className="eyebrow">Ornek Icerik</p>
              <h2>Gelistirme yol haritasi</h2>
            </div>

            <ul className="task-list">
              <li>Host tarafinda gercek sayfalarini route bazli ekle.</li>
              <li>Remote auth provider'i gercek API ile entegre et.</li>
              <li>Ortak tasarim sistemini remote uygulamadan paylas.</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<div className="loading-state">Remote yukleniyor...</div>}>
      <AuthProvider>
        <HostDashboard />
      </AuthProvider>
    </Suspense>
  );
}
