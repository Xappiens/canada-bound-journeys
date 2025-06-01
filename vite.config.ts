import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 4173,
    allowedHosts: [
      'canadabcexperience.com',
      'www.canadabcexperience.com',
      'canadabcexperience.es',
      'www.canadabcexperience.es',
      'localhost',
      '127.0.0.1'
    ]
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
