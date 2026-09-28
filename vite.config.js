import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If deploying to https://<username>.github.io/<repo>/ set base to "/<repo>/".
// If deploying to a custom domain or a User/Org page (https://<username>.github.io/), keep base as "/".
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/",
  server: {
    allowedHosts: true
  }
});
