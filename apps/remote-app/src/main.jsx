import React from 'react';
import ReactDOM from 'react-dom/client';
import RemoteApp from './RemoteApp';
import RootProviders from './app/providers/RootProviders';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootProviders>
      <RemoteApp />
    </RootProviders>
  </React.StrictMode>,
);
