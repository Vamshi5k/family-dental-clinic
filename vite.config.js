import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const port = Number(process.env.PORT) || 5173;
const basePath = process.env.BASE_PATH || '/';

export default defineConfig({
  base: basePath,
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 5173,
    allowedHosts: true,
  },
  build: {
    outDir: 'dist/public',
    emptyOutDir: true,
  },
  preview: {
    host: '0.0.0.0',
    port,
    allowedHosts: true,
  },
});
