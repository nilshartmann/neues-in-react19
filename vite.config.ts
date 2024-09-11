import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      name: "delay-css",
      configureServer(server) {
        server.middlewares.use((req, _, next) => {
          // Check if the request is for a specific CSS file
          if (req.originalUrl?.endsWith("changelog.css")) {
            // Simulate a delay of 2 seconds (2000 milliseconds)
            setTimeout(() => {
              next();
            }, 2000);
          } else {
            next();
          }
        });
      },
    },
    TanStackRouterVite(),
    react({
      // babel: { plugins: ["babel-plugin-react-compiler", {}] },
    }),
  ],
  server: {
    port: 3019,
  },
});
