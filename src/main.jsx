import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import AppRoutes from './routes/Routes';
import { theme } from './theme/index';
import { GeolocationProvider } from './hooks/geolocation';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GeolocationProvider>
        <AppRoutes />
      </GeolocationProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
