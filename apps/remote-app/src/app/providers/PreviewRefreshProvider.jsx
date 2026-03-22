import { useEffect } from 'react';

const POLL_INTERVAL_MS = 1200;

function isLocalRemotePreviewSession() {
  return (
    typeof window !== 'undefined' &&
    window.location.hostname === 'localhost' &&
    window.location.port === '3001'
  );
}

export default function PreviewRefreshProvider({ children }) {
  useEffect(() => {
    if (!isLocalRemotePreviewSession()) {
      return undefined;
    }

    let isCancelled = false;
    let lastRemoteEntry = null;

    async function checkRemoteEntry() {
      try {
        const response = await fetch(`/assets/remoteEntry.js?t=${Date.now()}`, {
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
        // Preview yeniden dosya yayinlarken gecici hata olabilir.
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
