import { createContext, useContext, useState } from 'react';
import { DEMO_USERS } from '../../shared/config/demoUsers';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const signIn = ({ username, password }) => {
    const account = DEMO_USERS[username?.trim().toLowerCase()];

    if (!account || account.password !== password) {
      setError('Gecersiz kullanici adi veya sifre. Demo icin admin/123456 kullan.');
      return false;
    }

    setUser({
      username,
      name: account.name,
      role: account.role,
    });
    setError('');
    return true;
  };

  const signOut = () => {
    setUser(null);
    setError('');
  };

  return (
    <AuthContext.Provider
      value={{
        error,
        isAuthenticated: Boolean(user),
        signIn,
        signOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}
