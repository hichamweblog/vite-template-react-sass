import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    devSourcemap: true,
    postcss: "./postcss.config.js",
    preprocessorOptions: {
      scss: {},
    },
  },
  plugins: [react()],
});
