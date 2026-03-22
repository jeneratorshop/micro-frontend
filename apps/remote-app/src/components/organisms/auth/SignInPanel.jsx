import '../../../app/styles/shell.css';
import { useState } from 'react';
import { useAuth } from '../../../app/providers/AuthProvider';

export default function SignInPanel() {
  const { signIn, error, isAuthenticated, user } = useAuth();
  const [form, setForm] = useState({
    username: 'admin',
    password: '123456',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(form);
  };

  return (
    <section className="auth-card">
      <div>
        <p className="remote-label">Authentication</p>
        <h3>{isAuthenticated ? 'Oturum aktif' : 'Demo girisi yap'}</h3>
      </div>

      {isAuthenticated ? (
        <p className="auth-helper">
          Aktif kullanici: <strong>{user.name}</strong>
        </p>
      ) : (
        <p className="auth-helper">
          Demo hesaplar: <strong>admin / 123456</strong> veya{' '}
          <strong>editor / 123456</strong>
        </p>
      )}

      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Kullanici Adi
          <input
            value={form.username}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                username: event.target.value,
              }))
            }
            placeholder="admin"
          />
        </label>

        <label>
          Sifre
          <input
            type="password"
            value={form.password}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                password: event.target.value,
              }))
            }
            placeholder="123456"
          />
        </label>

        <button className="primary-button" type="submit">
          Giris Yap
        </button>
      </form>

      {error ? <p className="auth-error">{error}</p> : null}
    </section>
  );
}
