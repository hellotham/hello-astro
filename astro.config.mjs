import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import alpinejs from '@astrojs/alpinejs'
import robotsTxt from 'astro-robots-txt'

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkPlantUML from '@akebifiky/remark-simple-plantuml'
import remarkCodeExtra from 'remark-code-extra'
import { remarkReadingTime } from './remark-reading-time.mjs';

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
    remarkPlugins: [
      remarkReadingTime,
      remarkMath,
      remarkPlantUML,
      [remarkCodeExtra, {
        transform: node => (node.lang == 'markmap' || node.lang == 'mermaid') && ({ 
          transform: node => {
            node.data.hProperties.className = [node.lang]
            node.data.hChildren = [{type: 'text', value: node.value}]
          }
        })
      }]
    ],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'github-light',
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
})
