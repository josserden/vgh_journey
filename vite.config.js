import FullReload from 'vite-plugin-full-reload';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  server: {
    open: true,
  },
});
