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
        './AuthProvider': './src/auth/AuthProvider.jsx',
        './Navbar': './src/components/Navbar.jsx',
        './Sidebar': './src/components/Sidebar.jsx',
        './AuthWidgets': './src/components/AuthWidgets.jsx',
      },
      shared: ['react', 'react-dom'],
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
