import React, { createContext, useEffect, useContext, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const GeolocationContext = createContext({});

function GeolocationProvider({ children }) {
  const [geolocationIsAuthorized, setGeolocationIsAuthorized] = useState(false);
  const [currentGeolocation, setCurrentGeolocation] = useState({ lat: null, lng: null });

  function chancgeGeolocation() {
    // eslint-disable-next-line no-undef
    navigator.geolocation.getCurrentPosition((e) => {
      setCurrentGeolocation({ lat: e.coords.longitude, lng: e.coords.longitude });
    });
  }

  useEffect(() => {
    // eslint-disable-next-line no-undef
    navigator.permissions.query({ name: 'geolocation' }).then((res) => {
      if (res.state === 'granted') {
        setGeolocationIsAuthorized(true);
      }

      if (res.state === 'prompt') {
        chancgeGeolocation();
      }

      res.onchange = (onC) => {
        if (onC.currentTarget.name === 'geolocation') {
          setGeolocationIsAuthorized(onC.currentTarget.state === 'granted');
        }
      };
    });
  }, []);

  useEffect(() => {
    if (geolocationIsAuthorized) {
      chancgeGeolocation();
    }
  }, [geolocationIsAuthorized]);

  if (!geolocationIsAuthorized) {
    return <LoadingSpinner text="Aguardando permissão da sua localização" />;
  }

  return (
    <GeolocationContext.Provider value={{ geolocationIsAuthorized, currentGeolocation }}>
      {children}
    </GeolocationContext.Provider>
  );
}

function useGeolocation() {
  const context = useContext(GeolocationContext);
  if (!context) {
    throw new Error('useGeolocation must be used within an GeolocationProvider');
  }
  return context;
}

export { GeolocationProvider, useGeolocation };
