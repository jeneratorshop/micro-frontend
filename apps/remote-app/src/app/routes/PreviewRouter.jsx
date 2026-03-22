import { Navigate, Route, Routes } from 'react-router-dom';
import { remoteRouteRegistry } from '../registry/routeRegistry';
import { PreviewShellTemplate } from '../../components/templates';
import HostRedirectGuard from '../guards/HostRedirectGuard';

export default function PreviewRouter() {
  const fallbackRoute = remoteRouteRegistry[0]?.path ?? '/remote/overview';

  return (
    <HostRedirectGuard>
      <PreviewShellTemplate routeEntries={remoteRouteRegistry}>
        <Routes>
          <Route path="/" element={<Navigate to={fallbackRoute} replace />} />
          {remoteRouteRegistry.map((entry) => {
            const PageComponent = entry.component;

            return (
              <Route
                key={entry.id}
                path={entry.path}
                element={<PageComponent />}
              />
            );
          })}
          <Route path="*" element={<Navigate to={fallbackRoute} replace />} />
        </Routes>
      </PreviewShellTemplate>
    </HostRedirectGuard>
  );
}
