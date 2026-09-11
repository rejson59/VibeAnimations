import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  // Względny base => strona działa pod każdą ścieżką,
  // np. https://rejson59.github.io/VibeAnimations/
  base: "./",
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    // Cały serwis jest inline'owany do jednego pliku index.html
    // (vite-plugin-singlefile), więc nie ma osobnych assetów.
    assetsInlineLimit: 100000000,
  },
  // Nasłuch na 0.0.0.0 + akceptacja dowolnego hosta, żeby dało się
  // odpalić podgląd za proxy (np. w środowiskach sandbox / Codespaces).
  server: { host: true },
  preview: { host: true, allowedHosts: true },
});
