import {
  AuthenticationPage,
  NavigationPage,
  OverviewPage,
} from '../../pages';

export const remoteRouteRegistry = [
  {
    id: 'remote-overview',
    path: '/remote/overview',
    label: 'Overview',
    description: 'Remote modulun host icindeki icerik girisi',
    sectionTitle: 'Remote Content',
    component: OverviewPage,
  },
  {
    id: 'remote-navigation',
    path: '/remote/navigation',
    label: 'Navigation',
    description: 'Sidebar kayitlarinin host tarafina nasil aktigini aciklar',
    sectionTitle: 'Remote Content',
    component: NavigationPage,
  },
  {
    id: 'remote-auth-contract',
    path: '/remote/authentication',
    label: 'Authentication Contract',
    description: 'Auth sahipliginin host uygulamada oldugunu anlatir',
    sectionTitle: 'Remote Content',
    component: AuthenticationPage,
  },
];
