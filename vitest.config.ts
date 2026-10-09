import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import { svelteLite } from './build/svelte-lite.mjs';

export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true }), svelteLite()],
  resolve: {
    // Svelte's client runtime (mount/unmount, onDestroy) lives behind the browser condition.
    conditions: ['browser', 'module', 'import', 'default'],
  },
  esbuild: {
    jsx: 'automatic',
  },
  test: {
    environment: 'happy-dom',
    include: ['tests/**/*.test.{ts,tsx}'],
    setupFiles: ['tests/setup.ts'],
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
  },
});
