import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Adjust to your repository name
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
