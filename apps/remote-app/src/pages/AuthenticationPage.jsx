import { AuthStatusCard, SignInPanel } from '../components/organisms/auth';

export default function AuthenticationPage() {
  return (
    <>
      <section className="preview-grid">
        <SignInPanel />
        <AuthStatusCard />
      </section>

      <section className="preview-card">
        <p className="remote-label">Authentication Scope</p>
        <h2>Oturum yonetimi tek yerde toplanir.</h2>
        <p>
          Demo hesaplarla giris yapip host uygulamada ayni auth deneyimini
          gorebilirsin. Sonraki adimda bu provider gercek API ile
          degistirilebilir.
        </p>
      </section>
    </>
  );
}
