import lazyRemote from './lazyRemote';

export const RemoteAuthProvider = lazyRemote(
  () => import('remote_shell/AuthProvider'),
  'AuthProvider',
);

export const RemoteNavbar = lazyRemote(
  () => import('remote_shell/Navbar'),
  'Navbar',
);

export const RemoteSidebar = lazyRemote(
  () => import('remote_shell/Sidebar'),
  'Sidebar',
);

export const RemoteSignInPanel = lazyRemote(
  () => import('remote_shell/AuthWidgets'),
  'SignInPanel',
);

export const RemoteAuthStatusCard = lazyRemote(
  () => import('remote_shell/AuthWidgets'),
  'AuthStatusCard',
);
