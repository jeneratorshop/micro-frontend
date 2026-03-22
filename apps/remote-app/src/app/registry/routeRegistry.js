import {
  AuthenticationPage,
  NavigationPage,
  OverviewPage,
} from '../../pages';

export const remoteRouteRegistry = [
  {
    id: 'remote-overview',
    path: '/remote/overview',
    label: 'Modul Overview',
    description: 'Yeni modulun host icindeki ilk ekrani',
    sectionTitle: 'Yeni Modul / Ayri Codebase',
    component: OverviewPage,
  },
  {
    id: 'remote-navigation',
    path: '/remote/navigation',
    label: 'Modul Navigation',
    description: "Menu kayitlarinin host sidebar'ina nasil aktigini aciklar",
    sectionTitle: 'Yeni Modul / Ayri Codebase',
    component: NavigationPage,
  },
  {
    id: 'remote-auth-contract',
    path: '/remote/authentication',
    label: 'Modul Contract',
    description: 'Yeni modul ile mevcut host arasindaki auth sinirini anlatir',
    sectionTitle: 'Yeni Modul / Ayri Codebase',
    component: AuthenticationPage,
  },
];
