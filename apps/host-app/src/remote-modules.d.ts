declare module 'remote_content/RouteRegistry' {
  export const remoteRouteRegistry: Array<{
    id: string;
    label: string;
    path: string;
    description?: string;
    sectionTitle?: string;
    component: React.ComponentType;
  }>;
}
