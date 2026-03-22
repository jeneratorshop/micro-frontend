import { Suspense } from 'react';
import RemoteErrorBoundary from './boundaries/RemoteErrorBoundary';
import RemoteShellProvider from './providers/RemoteShellProvider';
import AppRouter from './routes/AppRouter';

export default function App() {
  return (
    <RemoteErrorBoundary>
      <Suspense fallback={<div className="loading-state">Remote yukleniyor...</div>}>
        <RemoteShellProvider>
          <AppRouter />
        </RemoteShellProvider>
      </Suspense>
    </RemoteErrorBoundary>
  );
}
