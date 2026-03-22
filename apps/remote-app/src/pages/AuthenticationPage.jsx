export default function AuthenticationPage() {
  return (
    <>
      <section className="preview-card">
        <p className="remote-label">Integration Contract</p>
        <h2>Authentication sahipligi mevcut host uygulamadadir.</h2>
        <p>
          Bu modul auth UI veya provider expose etmez. Sadece host'un icinde
          calisacak content ekranlarini ve navigation kayitlarini saglar.
        </p>
      </section>

      <section className="route-card-grid">
        <article className="preview-card preview-card--compact">
          <p className="remote-label">Rule 1</p>
          <h2>Login mevcut urunde</h2>
          <p>Kullanici oturumu, navbar aksiyonlari ve session state host tarafinda tutulur.</p>
        </article>
        <article className="preview-card preview-card--compact">
          <p className="remote-label">Rule 2</p>
          <h2>Modul sadece contract bilir</h2>
          <p>Modul sayfalari bu siniri bilir ama auth akisini kendisi yonetmez.</p>
        </article>
        <article className="preview-card preview-card--compact">
          <p className="remote-label">Rule 3</p>
          <h2>Feature bagimsiz kalir</h2>
          <p>Modul ekibi shell degistirmeden yeni content ekranlari ekleyebilir.</p>
        </article>
      </section>
    </>
  );
}
