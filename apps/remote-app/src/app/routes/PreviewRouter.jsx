import { Navigate, Route, Routes } from 'react-router-dom';
import { PreviewShellTemplate } from '../../components/templates';
import {
  AuthenticationPage,
  NavigationPage,
  OverviewPage,
} from '../../pages';
import HostRedirectGuard from '../guards/HostRedirectGuard';
import { PREVIEW_ROUTE_PATHS } from './routePaths';

export default function PreviewRouter() {
  return (
    <HostRedirectGuard>
      <PreviewShellTemplate>
        <Routes>
          <Route path="/" element={<Navigate to={PREVIEW_ROUTE_PATHS.home} replace />} />
          <Route
            path={PREVIEW_ROUTE_PATHS.remoteOverview}
            element={<OverviewPage />}
          />
          <Route
            path={PREVIEW_ROUTE_PATHS.remoteNavigation}
            element={<NavigationPage />}
          />
          <Route
            path={PREVIEW_ROUTE_PATHS.remoteAuthentication}
            element={<AuthenticationPage />}
          />
          <Route path="*" element={<Navigate to={PREVIEW_ROUTE_PATHS.home} replace />} />
        </Routes>
      </PreviewShellTemplate>
    </HostRedirectGuard>
  );
}
