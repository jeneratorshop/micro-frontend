export default function NavigationPage() {
  return (
    <>
      <section className="preview-card">
        <p className="remote-label">Navigation Rules</p>
        <h1>Remote preview hala kendi portunda calisir.</h1>
        <p>
          Bu ekran sadece preview amaclidir. Gercek kullanici akisi host
          uygulamada `3000` portu uzerinde yasar.
        </p>
      </section>

      <section className="route-card-grid">
        <article className="preview-card preview-card--compact">
          <p className="remote-label">Rule 1</p>
          <h2>{'Preview remote tarafinda kalir'}</h2>
          <p>Remote preview route'lari 3001 uzerinde ayrica test edilebilir.</p>
        </article>
        <article className="preview-card preview-card--compact">
          <p className="remote-label">Rule 2</p>
          <h2>{'Host ana akis 3000 uzerinde'}</h2>
          <p>Kullaniciya donuk routing host uygulamada merkezilestirilir.</p>
        </article>
        <article className="preview-card preview-card--compact">
          <p className="remote-label">Rule 3</p>
          <h2>Shared shell korunur</h2>
          <p>Navbar, sidebar ve auth yine remote tarafta gelistirilir.</p>
        </article>
      </section>
    </>
  );
}
