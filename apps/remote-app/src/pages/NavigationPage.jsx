export default function NavigationPage() {
  return (
    <>
      <section className="preview-card">
        <p className="remote-label">Navigation Rules</p>
        <h1>Remote menu elemanlari host sidebar'ina registry ile eklenir.</h1>
        <p>
          Bu ekran preview amaclidir. Gercek kullanici akisi host uygulamada
          `3000` portu uzerinde yasar.
        </p>
      </section>

      <section className="route-card-grid">
        <article className="preview-card preview-card--compact">
          <p className="remote-label">Rule 1</p>
          <h2>Registry remote tarafta tanimlanir</h2>
          <p>Remote ekip yeni sayfa eklerken path, label ve description yazar.</p>
        </article>
        <article className="preview-card preview-card--compact">
          <p className="remote-label">Rule 2</p>
          <h2>Host sidebar bunu okur</h2>
          <p>Host uygulama sidebar UI'ini kendisi cizer ama menu verisini registry'den alir.</p>
        </article>
        <article className="preview-card preview-card--compact">
          <p className="remote-label">Rule 3</p>
          <h2>Shell host'ta kalir</h2>
          <p>Navbar, sidebar ve auth mantigi host uygulamada merkezilestirilir.</p>
        </article>
      </section>
    </>
  );
}
