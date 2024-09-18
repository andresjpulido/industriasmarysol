import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false }), sitemap({
    filter: (page) =>
      page !== "https://industriasmarysol.com/palette/" 
  })],
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  site: 'https://industriasmarysol.com',
  base: '/',
});
