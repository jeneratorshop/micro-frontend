import { RemoteAuthProvider } from '../../shared/federation';

export default function RemoteShellProvider({ children }) {
  return <RemoteAuthProvider>{children}</RemoteAuthProvider>;
}
