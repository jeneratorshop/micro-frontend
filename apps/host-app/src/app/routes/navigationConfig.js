import { ROUTE_PATHS } from './routePaths';

function buildRemoteSections(pathname, remoteRouteEntries) {
  const groupedSections = new Map();

  remoteRouteEntries.forEach((entry) => {
    const sectionTitle = entry.sectionTitle ?? 'Remote Content';

    if (!groupedSections.has(sectionTitle)) {
      groupedSections.set(sectionTitle, []);
    }

    groupedSections.get(sectionTitle).push({
      active: pathname === entry.path,
      description: entry.description,
      href: entry.path,
      label: entry.label,
    });
  });

  return Array.from(groupedSections.entries()).map(([title, items]) => ({
    title,
    items,
  }));
}

export function buildPortalLinks(pathname, remoteRouteEntries) {
  return [
    {
      label: 'Host Routes',
      href: ROUTE_PATHS.hostDashboard,
      isActive: pathname.startsWith('/host'),
    },
    {
      label: 'Remote Content',
      href: remoteRouteEntries[0]?.path ?? ROUTE_PATHS.remoteOverview,
      isActive: pathname.startsWith('/remote'),
    },
  ];
}

export function buildSidebarSections(pathname, remoteRouteEntries, remoteState) {
  const sections = [
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
  ];

  if (remoteState.isLoading) {
    sections.push({
      title: 'Remote Content',
      items: [
        {
          label: 'Yukleniyor',
          href: '#',
          description: 'Remote route listesi okunuyor.',
          disabled: true,
        },
      ],
    });

    return sections;
  }

  if (remoteState.error) {
    sections.push({
      title: 'Remote Content',
      items: [
        {
          label: 'Remote baglanamadi',
          href: '#',
          description: '3001 portundaki remote uygulama acik olmali.',
          disabled: true,
        },
      ],
    });

    return sections;
  }

  return sections.concat(buildRemoteSections(pathname, remoteRouteEntries));
}
