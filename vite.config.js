import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/ProjetFinEtudeMjrH25/",
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "./index.html",
      output: {
        entryFileNames: "assets/[name].js", // Assure que main.js soit bien dans assets
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      }
    },
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
});
