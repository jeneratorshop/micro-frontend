import { Navigate, Route, Routes } from 'react-router-dom';
import { ShellTemplate } from '../../components/templates';
import {
  HostDashboardPage,
  HostOrdersPage,
  HostRoadmapPage,
} from '../../pages/host';
import {
  RemoteAuthenticationPage,
  RemoteNavigationPage,
  RemoteOverviewPage,
} from '../../pages/remote';
import { ROUTE_PATHS } from './routePaths';

export default function AppRouter() {
  return (
    <ShellTemplate>
      <Routes>
        <Route path="/" element={<Navigate to={ROUTE_PATHS.home} replace />} />
        <Route path={ROUTE_PATHS.hostDashboard} element={<HostDashboardPage />} />
        <Route path={ROUTE_PATHS.hostOrders} element={<HostOrdersPage />} />
        <Route path={ROUTE_PATHS.hostRoadmap} element={<HostRoadmapPage />} />
        <Route path={ROUTE_PATHS.remoteOverview} element={<RemoteOverviewPage />} />
        <Route
          path={ROUTE_PATHS.remoteNavigation}
          element={<RemoteNavigationPage />}
        />
        <Route
          path={ROUTE_PATHS.remoteAuthentication}
          element={<RemoteAuthenticationPage />}
        />
        <Route path="*" element={<Navigate to={ROUTE_PATHS.home} replace />} />
      </Routes>
    </ShellTemplate>
  );
}
