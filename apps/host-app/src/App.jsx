import { Component, Suspense, lazy } from 'react';

const AuthProvider = lazy(() =>
  import('remote_shell/AuthProvider').then((module) => ({
    default: module.AuthProvider,
  })),
);

const Navbar = lazy(() =>
  import('remote_shell/Navbar').then((module) => ({
    default: module.Navbar,
  })),
);

const Sidebar = lazy(() =>
  import('remote_shell/Sidebar').then((module) => ({
    default: module.Sidebar,
  })),
);

const SignInPanel = lazy(() =>
  import('remote_shell/AuthWidgets').then((module) => ({
    default: module.SignInPanel,
  })),
);

const AuthStatusCard = lazy(() =>
  import('remote_shell/AuthWidgets').then((module) => ({
    default: module.AuthStatusCard,
  })),
);

class RemoteErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error('Remote shell yuklenemedi:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="remote-error-state">
          <section className="remote-error-card">
            <p className="eyebrow">Remote Hatasi</p>
            <h1>3001 portundaki remote uygulama su anda erisilemiyor.</h1>
            <p>
              Once remote uygulamayi, sonra host uygulamayi baslat. Bu ornek
              yapida host, navbar, sidebar ve authentication modullerini
              `3001` uzerinden alir.
            </p>
            <code>npm.cmd run dev</code>
          </section>
        </div>
      );
    }

    return this.props.children;
  }
}

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
    <RemoteErrorBoundary>
      <Suspense fallback={<div className="loading-state">Remote yukleniyor...</div>}>
        <AuthProvider>
          <HostDashboard />
        </AuthProvider>
      </Suspense>
    </RemoteErrorBoundary>
  );
}
