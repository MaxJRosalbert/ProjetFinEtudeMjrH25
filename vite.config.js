import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ProjetFinEtudeMjrH25/',
  plugins: [react()],
  server: {
    mimeTypes: {
      'application/javascript': ['js', 'jsx']
    }
  }
});
