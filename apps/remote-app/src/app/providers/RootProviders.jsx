import { BrowserRouter } from 'react-router-dom';
import PreviewRefreshProvider from './PreviewRefreshProvider';

export default function RootProviders({ children }) {
  return (
    <BrowserRouter>
      <PreviewRefreshProvider>{children}</PreviewRefreshProvider>
    </BrowserRouter>
  );
}
