// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['lib/**/*'],
      tsconfigPath: './tsconfig.app.json',
    })
  ],
  resolve: {
    alias: {
      'chukotka-ui': resolve(__dirname, 'lib/index.ts')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'chukotka-ui',
      formats: ['es', 'cjs'],
      fileName: (format) => `chukotka-ui.${format === 'es' ? 'esm.js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        interop: 'auto',
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
          'react/jsx-runtime': 'react/jsx-runtime'
        },
        chunkFileNames: 'chunks/[name]-[hash].js'
      },
    },
    minify: false,
    emptyOutDir: true,
    cssCodeSplit: true
  },
})
