// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    // Optional: set the output directory to 'build' (CRA default) instead of 'dist' (Vite default)
    build: {
        outDir: "build",
    },
});
