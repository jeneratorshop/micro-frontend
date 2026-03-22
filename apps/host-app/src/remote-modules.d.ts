declare module 'remote_shell/AuthProvider' {
  export const AuthProvider: React.ComponentType<React.PropsWithChildren>;
}

declare module 'remote_shell/Navbar' {
  export const Navbar: React.ComponentType<{
    appName?: string;
    subtitle?: string;
    environmentLabel?: string;
    portalLinks?: Array<{
      label: string;
      href: string;
      isActive?: boolean;
    }>;
  }>;
}

declare module 'remote_shell/Sidebar' {
  export const Sidebar: React.ComponentType<{
    links?: Array<{ label: string; href: string }>;
    sections?: Array<{
      title: string;
      items: Array<{
        label: string;
        href: string;
        description?: string;
        active?: boolean;
      }>;
    }>;
  }>;
}

declare module 'remote_shell/AuthWidgets' {
  export const AuthStatusCard: React.ComponentType;
  export const SignInPanel: React.ComponentType;
}
