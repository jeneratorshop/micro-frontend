import { lazy } from 'react';

export default function lazyRemote(loader, exportName) {
  return lazy(() =>
    loader().then((module) => {
      const resolvedExport =
        module[exportName] ??
        module.default?.[exportName] ??
        module.default;

      if (!resolvedExport) {
        throw new Error(`Remote export bulunamadi: ${exportName}`);
      }

      return { default: resolvedExport };
    }),
  );
}
