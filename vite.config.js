import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: './', // Ensures assets load cleanly on GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
