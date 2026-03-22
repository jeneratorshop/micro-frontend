import { createContext, useContext, useEffect, useState } from 'react';
import { loadRemoteRouteRegistry } from '../../shared/federation';

const RemoteRouteContext = createContext(null);

export function RemoteRouteProvider({ children }) {
  const [routeEntries, setRouteEntries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    loadRemoteRouteRegistry()
      .then((entries) => {
        if (!isMounted) {
          return;
        }

        setRouteEntries(entries);
        setError(null);
      })
      .catch((loadError) => {
        if (!isMounted) {
          return;
        }

        setError(loadError);
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <RemoteRouteContext.Provider value={{ error, isLoading, routeEntries }}>
      {children}
    </RemoteRouteContext.Provider>
  );
}

export function useRemoteRoutes() {
  const context = useContext(RemoteRouteContext);

  if (!context) {
    throw new Error('useRemoteRoutes must be used within RemoteRouteProvider');
  }

  return context;
}
