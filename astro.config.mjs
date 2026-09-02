import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import seoGraph from '@jdevalk/astro-seo-graph/integration';

export default defineConfig({
  site: 'https://ravi-webdesign.pages.dev',
  base: '/showcase',
  integrations: [
    sitemap(),
    seoGraph({
      validateH1: true,
      validateUniqueMetadata: true,
      validateImageAlt: true,
      validateMetadataLength: {
        title: { min: 30, max: 65 },
        description: { min: 70, max: 160 },
      },
      validateInternalLinks: true,
    }),
  ],
  build: { format: 'directory' },
});
