import { useEffect } from 'react';
import { APP_ORIGINS } from '../../shared/constants/origins';

const REMOTE_ENTRY_URL = `${APP_ORIGINS.remotePreview}/assets/remoteEntry.js`;
const POLL_INTERVAL_MS = 1200;

function isLocalHostDevSession() {
  return (
    typeof window !== 'undefined' &&
    window.location.hostname === 'localhost' &&
    window.location.port === '3000'
  );
}

export default function RemoteDevRefreshProvider({ children }) {
  useEffect(() => {
    if (!isLocalHostDevSession()) {
      return undefined;
    }

    let isCancelled = false;
    let lastRemoteEntry = null;

    async function checkRemoteEntry() {
      try {
        const response = await fetch(`${REMOTE_ENTRY_URL}?t=${Date.now()}`, {
          cache: 'no-store',
        });

        if (!response.ok || isCancelled) {
          return;
        }

        const nextRemoteEntry = await response.text();

        if (lastRemoteEntry && lastRemoteEntry !== nextRemoteEntry) {
          window.location.reload();
          return;
        }

        lastRemoteEntry = nextRemoteEntry;
      } catch {
        // Remote rebuild sirasinda kisa sureli erisim hatalari olabilir.
      }
    }

    checkRemoteEntry();
    const timerId = window.setInterval(checkRemoteEntry, POLL_INTERVAL_MS);

    return () => {
      isCancelled = true;
      window.clearInterval(timerId);
    };
  }, []);

  return children;
}
