import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://coreyburns.ca",
  integrations: [sitemap(), icon()],

  build: {
    inlineStylesheets: "always",
  },

  adapter: cloudflare(),
});