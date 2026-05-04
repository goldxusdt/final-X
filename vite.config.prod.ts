import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// Production configuration for Vercel/Netlify deployment
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        exportType: "named",
        namedExport: "ReactComponent",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom") || id.includes("react-router")) {
              return "react-vendor";
            }
            if (id.includes("@supabase")) {
              return "supabase-vendor";
            }
            if (id.includes("@radix-ui") || id.includes("lucide-react") || id.includes("tailwind")) {
              return "ui-vendor";
            }
            if (id.includes("recharts") || id.includes("d3")) {
              return "chart-vendor";
            }
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 5173,
    strictPort: false,
  },
  preview: {
    port: 4173,
    strictPort: false,
  },
});
