import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes/Routes';
import { theme } from './theme/index';
import { GeolocationProvider } from './hooks/geolocation';
import { AuthProvider } from './hooks/auth';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GeolocationProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </GeolocationProvider>
      <ToastContainer />
    </ChakraProvider>
  </React.StrictMode>,
);
