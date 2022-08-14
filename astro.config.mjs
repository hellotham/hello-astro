import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  site: 'https://christinetham.github.io',
  base: '/hello-astro',
  integrations: [tailwind(), sitemap(), image()],
  experimental: {
    integrations: true
  }
});