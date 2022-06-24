import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({mode}) => {
  return {
    define: {
      ENV_TYPE_1: true,
      ENV_TYPE_2: JSON.stringify('cloud'),
    },
    build: {
      rollupOptions: {
        input : {
          'index.html': resolve(__dirname, './index.html')
        },
        output: {
          dir: 'dist',
        }
      }
    }
  }
});
