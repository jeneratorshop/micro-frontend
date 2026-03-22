export default function NavigationPage() {
  return (
    <>
      <section className="preview-card">
        <p className="remote-label">Navigation Rules</p>
        <h1>Yeni modulun menu elemanlari host sidebar'ina registry ile eklenir.</h1>
        <p>
          Bu ekran modul ekibinin preview alanidir. Gercek kullanici akisi yine
          mevcut host uygulamada `3000` portu uzerinde yasar.
        </p>
      </section>

      <section className="route-card-grid">
        <article className="preview-card preview-card--compact">
          <p className="remote-label">Rule 1</p>
          <h2>Registry modul codebase'inde tanimlanir</h2>
          <p>Modul ekibi yeni sayfa eklerken path, label ve description bilgisini yazar.</p>
        </article>
        <article className="preview-card preview-card--compact">
          <p className="remote-label">Rule 2</p>
          <h2>Mevcut uygulama bunu okur</h2>
          <p>Host uygulama sidebar UI'ini kendisi cizer ama modul verisini registry'den alir.</p>
        </article>
        <article className="preview-card preview-card--compact">
          <p className="remote-label">Rule 3</p>
          <h2>Shell mevcut uygulamada kalir</h2>
          <p>Navbar, sidebar ve auth mantigi host uygulamada merkezilestirilir.</p>
        </article>
      </section>
    </>
  );
}
