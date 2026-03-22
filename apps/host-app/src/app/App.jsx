import RemoteErrorBoundary from './boundaries/RemoteErrorBoundary';
import AppRouter from './routes/AppRouter';

export default function App() {
  return (
    <RemoteErrorBoundary>
      <AppRouter />
    </RemoteErrorBoundary>
  );
}
