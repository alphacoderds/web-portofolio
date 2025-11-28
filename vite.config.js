import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Tailwind v4 tidak perlu konfigurasi tambahan
export default defineConfig({
  plugins: [react()],
});
