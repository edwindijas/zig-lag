import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
// eslint-disable-next-line import-x/no-default-export
export default defineConfig({
  plugins: [
    react(),
    eslint({
      cache: false,
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
      exclude: ['node_modules'],
      lintOnStart: true,
      emitErrorAsWarning: true,
    }),
    svgr(),
  ],
  resolve: {
    alias: {
      '@/src': '/src',
      '@/features': '/src/features',
      '@/app': '/src/app',
      '@/components': '/src/components',
      '@/hooks': '/src/hooks',
      '@/assets': '/src/assets',
      '@/utils': '/src/utils',
    },
  },
});
