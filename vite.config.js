import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react({
    jsxRuntime: "automatic" // ensures JSX works without needing global React
  })],
  base: "./" // ensures paths work correctly on Vercel
});
