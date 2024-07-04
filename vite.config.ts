import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      // Use SVGR only for SVG imports
      include: "**/*.svg",
    }),
  ],
  esbuild: {
    loader: "tsx",
    include: [
      // Only process files in src directory with SVGR
      "src/**/*.ts",
      "src/**/*.tsx",
      "src/**/*.svg",
    ],
    exclude: ["node_modules"],
  },
});
