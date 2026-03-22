import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_shell',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthProvider': './src/app/providers/AuthProvider.jsx',
        './Navbar': './src/components/organisms/Navbar.jsx',
        './Sidebar': './src/components/organisms/Sidebar.jsx',
        './AuthWidgets': './src/components/organisms/auth/index.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3001,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  preview: {
    port: 4001,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  build: {
    target: 'esnext',
    modulePreload: false,
    cssCodeSplit: false,
  },
});
