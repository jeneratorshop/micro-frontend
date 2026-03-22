import { ROUTE_PATHS } from './routePaths';

function buildRemoteSections(pathname, remoteRouteEntries) {
  const groupedSections = new Map();

  remoteRouteEntries.forEach((entry) => {
    const sectionTitle = entry.sectionTitle ?? 'Yeni Modul';

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
      label: 'Core Uygulama',
      href: ROUTE_PATHS.hostDashboard,
      isActive: pathname.startsWith('/host'),
    },
    {
      label: 'Yeni Modul',
      href: remoteRouteEntries[0]?.path ?? ROUTE_PATHS.remoteOverview,
      isActive: pathname.startsWith('/remote'),
    },
  ];
}

export function buildSidebarSections(pathname, remoteRouteEntries, remoteState) {
  const sections = [
    {
      title: 'Core Uygulama',
      items: [
        {
          label: 'Dashboard',
          href: ROUTE_PATHS.hostDashboard,
          description: 'Var olan uygulamanin genel bakis ekrani',
          active: pathname === ROUTE_PATHS.hostDashboard,
        },
        {
          label: 'Orders',
          href: ROUTE_PATHS.hostOrders,
          description: 'Mevcut siparis ve operasyon modulu',
          active: pathname === ROUTE_PATHS.hostOrders,
        },
        {
          label: 'Roadmap',
          href: ROUTE_PATHS.hostRoadmap,
          description: 'Core uygulamanin gelisim plani',
          active: pathname === ROUTE_PATHS.hostRoadmap,
        },
      ],
    },
  ];

  if (remoteState.isLoading) {
    sections.push({
      title: 'Yeni Modul',
      items: [
        {
          label: 'Yukleniyor',
          href: '#',
          description: 'Ayri codebase icindeki modul route listesi okunuyor.',
          disabled: true,
        },
      ],
    });

    return sections;
  }

  if (remoteState.error) {
    sections.push({
      title: 'Yeni Modul',
      items: [
        {
          label: 'Modul baglanamadi',
          href: '#',
          description: '3001 portundaki remote modul uygulamasi acik olmali.',
          disabled: true,
        },
      ],
    });

    return sections;
  }

  return sections.concat(buildRemoteSections(pathname, remoteRouteEntries));
}
