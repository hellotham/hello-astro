import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import alpinejs from '@astrojs/alpinejs'
import robotsTxt from 'astro-robots-txt'

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import remarkPlantUML from '@akebifiky/remark-simple-plantuml'

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  site: 'https://hellotham.github.io',
  base: '/hello-astro',
  integrations: [tailwind(), sitemap(), image(), mdx(), alpinejs(), robotsTxt()],
  experimental: {
    integrations: true,
  },
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [remarkMath, remarkPlantUML],
    rehypePlugins: [rehypeKatex, rehypeRaw],
    remarkRehype: { allowDangerousHtml: true },
    shikiConfig: {
      theme: 'github-light',
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
})
