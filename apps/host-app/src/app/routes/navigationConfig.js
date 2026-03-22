import { ROUTE_PATHS } from './routePaths';

export function buildPortalLinks(pathname) {
  return [
    {
      label: 'Host Routes',
      href: ROUTE_PATHS.hostDashboard,
      isActive: pathname.startsWith('/host'),
    },
    {
      label: 'Remote Routes',
      href: ROUTE_PATHS.remoteOverview,
      isActive: pathname.startsWith('/remote'),
    },
  ];
}

export function buildSidebarSections(pathname) {
  return [
    {
      title: 'Host Routes',
      items: [
        {
          label: 'Dashboard',
          href: ROUTE_PATHS.hostDashboard,
          description: 'Ana host karsilama ekrani',
          active: pathname === ROUTE_PATHS.hostDashboard,
        },
        {
          label: 'Orders',
          href: ROUTE_PATHS.hostOrders,
          description: 'Siparis ve operasyon alani',
          active: pathname === ROUTE_PATHS.hostOrders,
        },
        {
          label: 'Roadmap',
          href: ROUTE_PATHS.hostRoadmap,
          description: 'Host ekip gelisim plani',
          active: pathname === ROUTE_PATHS.hostRoadmap,
        },
      ],
    },
    {
      title: 'Remote Routes',
      items: [
        {
          label: 'Overview',
          href: ROUTE_PATHS.remoteOverview,
          description: 'Remote modullerin host icindeki girisi',
          active: pathname === ROUTE_PATHS.remoteOverview,
        },
        {
          label: 'Navigation',
          href: ROUTE_PATHS.remoteNavigation,
          description: 'Tek SPA routing kurali',
          active: pathname === ROUTE_PATHS.remoteNavigation,
        },
        {
          label: 'Authentication',
          href: ROUTE_PATHS.remoteAuthentication,
          description: 'Auth widgetlari remote taraftan gelir',
          active: pathname === ROUTE_PATHS.remoteAuthentication,
        },
      ],
    },
  ];
}
