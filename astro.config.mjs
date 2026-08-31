import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ravi-webdesign-1qh.pages.dev',
  base: '/',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
