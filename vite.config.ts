import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

// https://vite.dev/config/
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync("src/certs/unireserva-key.key"),
      cert: fs.readFileSync("src/certs/unireserva-cert.crt"),
    },
  },
  plugins: [react()],
});
