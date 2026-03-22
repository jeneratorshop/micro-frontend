import { useAuth } from '../../../app/providers/AuthProvider';

export default function AuthStatusCard() {
  const { isAuthenticated, user } = useAuth();

  return (
    <section className="auth-card auth-card--status">
      <p className="eyebrow">Session</p>
      <h3>{isAuthenticated ? 'Host auth aktif' : 'Misafir mod'}</h3>
      <p>
        {isAuthenticated
          ? `${user.name} olarak giris yaptin. Bu durum host shell tarafinda tutulur.`
          : 'Navbar, sidebar ve route korumalari host auth state ile yonetilir.'}
      </p>
    </section>
  );
}
