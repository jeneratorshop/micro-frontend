export default function AuthenticationPage() {
  return (
    <>
      <section className="preview-card">
        <p className="remote-label">Authentication Scope</p>
        <h2>Authentication sahipligi host uygulamadadir.</h2>
        <p>
          Remote uygulama auth UI veya provider expose etmez. Sadece host'un
          icinde calisacak content modulleri ve navigation kayitlari saglar.
        </p>
      </section>

      <section className="route-card-grid">
        <article className="preview-card preview-card--compact">
          <p className="remote-label">Rule 1</p>
          <h2>Login host'ta</h2>
          <p>Kullanici oturumu, navbar aksiyonlari ve session state host tarafinda tutulur.</p>
        </article>
        <article className="preview-card preview-card--compact">
          <p className="remote-label">Rule 2</p>
          <h2>Remote sadece contract bilir</h2>
          <p>Remote sayfalar bu siniri bilir ama auth akisini kendisi yonetmez.</p>
        </article>
        <article className="preview-card preview-card--compact">
          <p className="remote-label">Rule 3</p>
          <h2>Icerik bagimsiz kalir</h2>
          <p>Remote ekip shell degistirmeden yeni content modulleri ekleyebilir.</p>
        </article>
      </section>
    </>
  );
}
