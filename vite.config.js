import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic" // handles JSX without requiring React globally
    })
  ],
  base: "./" // fixes blank page in production on Vercel
});
