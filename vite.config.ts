import { resolve } from 'pathe';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/react-splt.tsx'),
      name: 'React Splt',
      fileName: 'react-splt',
    },
    rollupOptions: {
      // deps that shouldn't be bundled
      external: ['react'],
      output: {
        // global variables used in UMD build
        globals: {
          react: 'React',
        },
      },
    },
  },

  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
});
