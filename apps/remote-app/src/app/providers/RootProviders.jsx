import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';

export default function RootProviders({ children }) {
  return (
    <BrowserRouter>
      <AuthProvider>{children}</AuthProvider>
    </BrowserRouter>
  );
}
