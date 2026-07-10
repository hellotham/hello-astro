import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'
import robotsTxt from 'astro-robots-txt'
import mermaid from 'astro-mermaid'
import icon from 'astro-icon'
import markdoc from '@astrojs/markdoc'
import { satteri } from '@astrojs/markdown-satteri'
import { satteriReadingTime } from './satteri-plugins/satteri-reading-time.mjs'
import { satteriDiagram } from './satteri-plugins/satteri-diagram.mjs'
import { satteriEmoji } from './satteri-plugins/satteri-emoji.mjs'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['astro-leaflet > leaflet']
    }
  },
  site: 'https://hellotham.github.io',
  base: '/hello-astro/',
  image: {
    layout: 'constrained'
  },
  integrations: [icon(), sitemap(), robotsTxt(), markdoc(), mdx(), mermaid()],
  markdown: {
    processor: satteri({
      features: {
        math: true
      },
      mdastPlugins: [satteriReadingTime(), satteriDiagram(), satteriEmoji()]
    }),
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      },
      // Enable word wrap to prevent horizontal scrolling
      wrap: true
    }
  },
  scopedStyleStrategy: 'where'
})
