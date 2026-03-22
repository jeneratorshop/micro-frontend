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
      <p className="eyebrow">Core Authentication</p>
      <h3>Mevcut uygulamanin oturumu host tarafinda yonetilir</h3>
      <p>
        Sonradan eklenen modul de ayni auth kabugunun icinde calisir. Demo icin
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
