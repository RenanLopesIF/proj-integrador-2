// eslint-disable-next-line import/namespace
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin(['MAP_ACCESS_TOKEN'])],
  server: {
    port: 3000,
  },
});
