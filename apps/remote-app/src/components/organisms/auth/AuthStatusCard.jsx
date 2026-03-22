import '../../../app/styles/shell.css';
import { useAuth } from '../../../app/providers/AuthProvider';

export default function AuthStatusCard() {
  const { isAuthenticated, user } = useAuth();

  return (
    <section className="auth-card auth-card--status">
      <p className="remote-label">Session</p>
      <h3>{isAuthenticated ? 'Kullanici dogrulandi' : 'Bekleyen oturum'}</h3>
      <p>
        {isAuthenticated
          ? `${user.name} / ${user.role}`
          : 'Host uygulama bu auth durumunu remote taraftan aliyor.'}
      </p>
    </section>
  );
}
