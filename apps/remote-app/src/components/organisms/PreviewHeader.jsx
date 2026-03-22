import { APP_ORIGINS } from '../../shared/constants/origins';

export default function PreviewHeader() {
  return (
    <header className="preview-header">
      <div className="preview-header__copy">
        <p className="remote-label">Remote Preview</p>
        <h1>Remote uygulama sadece content ve menu kayitlari saglar.</h1>
        <p>
          Host uygulama navbar, sidebar ve authentication'i yonetir. Remote ekip
          burada sadece icerik modullerini gelistirir.
        </p>
      </div>

      <div className="preview-header__actions">
        <a className="preview-link" href={`${APP_ORIGINS.host}/host/dashboard`}>
          Host Dashboard
        </a>
        <a className="preview-link preview-link--secondary" href={`${APP_ORIGINS.host}/remote/overview`}>
          Host Remote View
        </a>
      </div>
    </header>
  );
}
