import { PreviewHeader, PreviewSidebar } from '../organisms';

export default function PreviewShellTemplate({ children, routeEntries }) {
  return (
    <div className="remote-preview">
      <PreviewHeader />

      <div className="remote-preview__body">
        <PreviewSidebar routeEntries={routeEntries} />

        <main className="remote-preview__main">{children}</main>
      </div>
    </div>
  );
}
