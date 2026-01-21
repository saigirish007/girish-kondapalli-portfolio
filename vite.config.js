import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic" // ensures JSX works in production
    })
  ],
  base: "./" // fixes blank page paths on Vercel
});
