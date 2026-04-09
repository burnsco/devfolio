import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: "https://coreyburns.ca",
  integrations: [sitemap(), icon()],
});
