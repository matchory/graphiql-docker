import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";

export default defineConfig({
    plugins: [react()],
    build: {
        sourcemap: true,
        minify: true,
        cssMinify: true,
        chunkSizeWarningLimit: 1000,
    },
    server: {
        warmup: {
            clientFiles: [
                "src/main.tsx",
                "src/App.tsx",
                "src/GraphiQL.tsx",
            ]
        }
    },
});
