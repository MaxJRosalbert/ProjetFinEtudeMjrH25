import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './src',
  base: "./",  
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "src/index.html",
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
});
