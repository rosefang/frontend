import { defineConfig } from 'vite';
import { resolve } from 'path';
import commonjs from '@rollup/plugin-commonjs';
export default defineConfig(({mode}) => {
  return {
    build: {
      rollupOptions: {
        input : {
          'index.html': resolve(__dirname, './index.html')
        },
        output: {
          dir: 'dist',
          // format: 'umd',
        },
      },
      minify: false,
      target: 'es2015',
    },
    plugins: [
      // commonjs(),
    ]
  }
});
