// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://podiumex.com',
  build: {
    assets: '_assets',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/dist/'),
    }),
  ],
  compressHTML: true,
});
