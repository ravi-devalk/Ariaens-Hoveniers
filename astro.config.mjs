import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ravi-devalk.github.io',
  base: '/Ariaens-Hoveniers',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
