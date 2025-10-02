// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://lumen112015.github.io",
  base: "/becoming",
  integrations: [mdx()],
  devToolbar: {
    enabled: false,
  },
});
