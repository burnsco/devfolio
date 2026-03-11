import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://coreyburns.ca",
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "always",
  },
});
