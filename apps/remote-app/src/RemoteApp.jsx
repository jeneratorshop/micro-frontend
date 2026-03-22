import { AuthProvider } from './auth/AuthProvider';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { AuthStatusCard, SignInPanel } from './components/AuthWidgets';

export default function RemoteApp() {
  return (
    <AuthProvider>
      <div className="remote-preview">
        <Navbar
          appName="Remote Shell"
          subtitle="Navbar, sidebar ve auth bu uygulamada yonetiliyor"
        />

        <div className="remote-preview__body">
          <Sidebar />

          <main className="remote-preview__main">
            <section className="preview-card">
              <p className="remote-label">Remote Uygulama</p>
              <h1>Ortak shell bileşenlerini burada geliştirebilirsin.</h1>
              <p>
                Bu ekran remote uygulamanın tek başına da çalışabildiğini
                gösterir. Host uygulama aynı bileşenleri `module federation`
                ile kullanır.
              </p>
            </section>

            <section className="preview-grid">
              <SignInPanel />
              <AuthStatusCard />
            </section>
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}
