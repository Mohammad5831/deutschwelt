import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: process.env.DEV_SERVER_HOST || "0.0.0.0",
    port: parseInt(process.env.PORT || "8443", 10),
    strictPort: true,
  },

  preview: {
    host: process.env.DEV_SERVER_HOST || "0.0.0.0",
    port: parseInt(process.env.PORT || "8443", 10),
  },

  build: {
    sourcemap: false,
    minify: true,
  },
});