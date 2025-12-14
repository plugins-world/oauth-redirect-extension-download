import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  root: 'src',
  base: '/',
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
  publicDir: resolve(__dirname, 'public'),
});
