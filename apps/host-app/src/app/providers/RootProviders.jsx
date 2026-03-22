import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
import RemoteDevRefreshProvider from './RemoteDevRefreshProvider';
import { RemoteRouteProvider } from './RemoteRouteProvider';

export default function RootProviders({ children }) {
  return (
    <BrowserRouter>
      <RemoteDevRefreshProvider>
        <AuthProvider>
          <RemoteRouteProvider>{children}</RemoteRouteProvider>
        </AuthProvider>
      </RemoteDevRefreshProvider>
    </BrowserRouter>
  );
}
