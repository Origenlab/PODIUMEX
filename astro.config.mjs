import sitemap from '@astrojs/sitemap';// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://podiumex.com',
  build: {
    assets: '_assets'
  }
  integrations: [sitemap()],
});
