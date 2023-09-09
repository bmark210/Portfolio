import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://bmark210.vercel.app/",
  integrations: [
    sitemap(),
    tailwind(),
    astroI18next(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
      cacheDir: "./.cache/image",
      logLevel: "debug",
    }),
  ],
});
