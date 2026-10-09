import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import { resolve } from 'path';
import { svelteLite } from './build/svelte-lite.mjs';

const CONTROLLER_MODULE = /\.controller\.ts$/;
const FRAMEWORK_IMPORT = /^(vue|vuetify|react|react-dom|svelte)(\/|$)/;

/** One build, one entry per public subpath. Frameworks stay external peers. */
export const LIB_ENTRIES = {
  index: resolve(import.meta.dirname, 'src/index.ts'),
  core: resolve(import.meta.dirname, 'src/core/index.ts'),
  theme: resolve(import.meta.dirname, 'src/theme/starship-theme.ts'),
  vue: resolve(import.meta.dirname, 'src/vue.ts'),
  react: resolve(import.meta.dirname, 'src/react.ts'),
  svelte: resolve(import.meta.dirname, 'src/svelte.ts'),
};

export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true }), svelteLite()],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
    },
  },
  build: {
    emptyOutDir: true,
    cssCodeSplit: true,
    lib: {
      entry: LIB_ENTRIES,
      formats: ['es'],
      fileName: (_format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: (id) => FRAMEWORK_IMPORT.test(id),
      output: {
        chunkFileNames: 'chunks/[name]-[hash].js',
        // Headless controllers are shared by every framework bundle: one named chunk.
        manualChunks: (id) => (CONTROLLER_MODULE.test(id) ? 'controllers' : undefined),
        assetFileNames: '[name][extname]',
      },
    },
  },
});
