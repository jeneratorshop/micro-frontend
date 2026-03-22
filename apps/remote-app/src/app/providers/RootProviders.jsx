import { BrowserRouter } from 'react-router-dom';

export default function RootProviders({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
