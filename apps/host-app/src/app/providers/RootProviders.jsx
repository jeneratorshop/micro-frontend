import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
import { RemoteRouteProvider } from './RemoteRouteProvider';

export default function RootProviders({ children }) {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RemoteRouteProvider>{children}</RemoteRouteProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
