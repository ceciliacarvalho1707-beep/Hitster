import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' permite hospedar o build em qualquer subpasta (GitHub Pages, Netlify etc.)
export default defineConfig({
  base: './',
  plugins: [react()],
  // Compatível com navegadores de Smart TV (Chromium 64+), iPhone com iOS 13+ e navegadores atuais.
  build: { target: ['chrome64', 'safari13', 'firefox67', 'edge79'], cssTarget: ['chrome64', 'safari13'] },
  server: { host: true, port: 5173 },
  test: { environment: 'node', include: ['src/**/*.test.ts'] },
} as never);
