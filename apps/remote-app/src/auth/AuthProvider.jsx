import { createContext, useContext, useState } from 'react';

const demoUsers = {
  admin: {
    password: '123456',
    name: 'Admin User',
    role: 'Platform Admin',
  },
  editor: {
    password: '123456',
    name: 'Editor User',
    role: 'Content Editor',
  },
};

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const signIn = ({ username, password }) => {
    const account = demoUsers[username?.trim().toLowerCase()];

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

  const value = {
    isAuthenticated: Boolean(user),
    user,
    error,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}
