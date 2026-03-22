import { APP_ORIGINS } from '../../shared/constants/origins';
import { PREVIEW_ROUTE_PATHS } from './routePaths';

export function buildPortalLinks(pathname) {
  return [
    {
      label: 'Remote Routes',
      href: `${APP_ORIGINS.remote}${PREVIEW_ROUTE_PATHS.remoteOverview}`,
      isActive: pathname.startsWith('/remote'),
    },
    {
      label: 'Host Routes',
      href: `${APP_ORIGINS.host}/host/dashboard`,
    },
  ];
}

export function buildSidebarSections(pathname) {
  return [
    {
      title: 'Remote / 3001',
      items: [
        {
          label: 'Overview',
          href: `${APP_ORIGINS.remote}${PREVIEW_ROUTE_PATHS.remoteOverview}`,
          description: 'Remote shell ana ekrani',
          active: pathname === PREVIEW_ROUTE_PATHS.remoteOverview,
        },
        {
          label: 'Navigation',
          href: `${APP_ORIGINS.remote}${PREVIEW_ROUTE_PATHS.remoteNavigation}`,
          description: 'Prefix ve port kurallari',
          active: pathname === PREVIEW_ROUTE_PATHS.remoteNavigation,
        },
        {
          label: 'Authentication',
          href: `${APP_ORIGINS.remote}${PREVIEW_ROUTE_PATHS.remoteAuthentication}`,
          description: 'Auth provider ve widgetlar',
          active: pathname === PREVIEW_ROUTE_PATHS.remoteAuthentication,
        },
      ],
    },
    {
      title: 'Host / 3000',
      items: [
        {
          label: 'Dashboard',
          href: `${APP_ORIGINS.host}/host/dashboard`,
          description: 'Host ana ekranina git',
        },
        {
          label: 'Orders',
          href: `${APP_ORIGINS.host}/host/orders`,
          description: 'Host operasyon sayfasi',
        },
        {
          label: 'Roadmap',
          href: `${APP_ORIGINS.host}/host/roadmap`,
          description: 'Host yol haritasi',
        },
      ],
    },
  ];
}
