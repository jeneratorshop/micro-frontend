let remoteRouteRegistryPromise;

function resolveRemoteExport(module, exportName) {
  return module[exportName] ?? module.default?.[exportName] ?? module.default;
}

function normalizeRouteEntries(routeEntries) {
  if (!Array.isArray(routeEntries)) {
    throw new Error('Remote route registry bir dizi olmali.');
  }

  return routeEntries.map((entry, index) => {
    if (!entry?.component || !entry?.path || !entry?.label) {
      throw new Error(`Remote route entry gecersiz: ${index}`);
    }

    return {
      description: '',
      sectionTitle: 'Remote Content',
      ...entry,
    };
  });
}

export function loadRemoteRouteRegistry() {
  if (!remoteRouteRegistryPromise) {
    remoteRouteRegistryPromise = import('remote_content/RouteRegistry')
      .then((module) =>
        normalizeRouteEntries(resolveRemoteExport(module, 'remoteRouteRegistry')),
      )
      .catch((error) => {
        remoteRouteRegistryPromise = null;
        throw error;
      });
  }

  return remoteRouteRegistryPromise;
}
