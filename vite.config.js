import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "/rent-a-car/",
  resolve: {
    alias: {
      "@/": "/src",
      "@/assets": "/src/assets",
      "@/components": "/src/components",
      "@/data": "/src/data",
      "@/hooks": "/src/hooks",
      "@/pages": "/src/pages",
      "@/services": "/src/services",
      "@/store": "/src/store",
      "@/styles": "/src/styles",
      "@/utils": "/src/utils",
    },
  },
});
