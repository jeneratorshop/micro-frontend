import { Navigate, Route, Routes } from 'react-router-dom';
import { useRemoteRoutes } from '../providers/RemoteRouteProvider';
import { ShellTemplate } from '../../components/templates';
import {
  HostDashboardPage,
  HostOrdersPage,
  HostRoadmapPage,
} from '../../pages/host';
import { ROUTE_PATHS } from './routePaths';

function RemoteStatePage({ title, description }) {
  return (
    <section className="task-card">
      <p className="eyebrow">Remote Content</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}

export default function AppRouter() {
  const { error, isLoading, routeEntries } = useRemoteRoutes();

  return (
    <ShellTemplate>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTE_PATHS.home} replace />} />
        <Route path={ROUTE_PATHS.hostDashboard} element={<HostDashboardPage />} />
        <Route path={ROUTE_PATHS.hostOrders} element={<HostOrdersPage />} />
        <Route path={ROUTE_PATHS.hostRoadmap} element={<HostRoadmapPage />} />

        {isLoading ? (
          <Route
            path="/remote/*"
            element={
              <RemoteStatePage
                description="Remote route registry host tarafinda yukleniyor."
                title="Remote icerikler hazirlaniyor"
              />
            }
          />
        ) : null}

        {error ? (
          <Route
            path="/remote/*"
            element={
              <RemoteStatePage
                description="3001 portundaki remote uygulama acik degil veya route registry okunamadi."
                title="Remote iceriklere ulasilamadi"
              />
            }
          />
        ) : null}

        {!isLoading && !error
          ? routeEntries.map((entry) => {
              const RemotePage = entry.component;

              return (
                <Route
                  key={entry.id}
                  path={entry.path}
                  element={<RemotePage />}
                />
              );
            })
          : null}

        <Route path="*" element={<Navigate to={ROUTE_PATHS.home} replace />} />
      </Routes>
    </ShellTemplate>
  );
}
