import { useState } from 'react';
import { useAuth } from '../../../app/providers/AuthProvider';

export default function SignInPanel() {
  const { error, signIn } = useAuth();
  const [form, setForm] = useState({
    username: 'admin',
    password: '123456',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    signIn(form);
  }

  return (
    <section className="auth-card">
      <p className="eyebrow">Host Authentication</p>
      <h3>Oturum host uygulamada yonetilir</h3>
      <p>
        Remote icerikler bu auth kabugunun icinde calisir. Demo icin
        `admin / 123456` kullanabilirsin.
      </p>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Kullanici Adi
          <input
            name="username"
            onChange={handleChange}
            value={form.username}
          />
        </label>

        <label>
          Sifre
          <input
            name="password"
            onChange={handleChange}
            type="password"
            value={form.password}
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
