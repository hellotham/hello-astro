import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'
import alpinejs from '@astrojs/alpinejs'
import robotsTxt from 'astro-robots-txt'
import plantuml from 'astro-plantuml'
import mermaid from 'astro-mermaid'
import remarkMath from 'remark-math'
import remarkEmoji from 'remark-emoji'
import rehypeKatex from 'rehype-katex'
import { remarkReadingTime } from './remark-plugins/remark-reading-time.mjs'
import { remarkDiagram } from './remark-plugins/remark-diagram.mjs'
import icon from 'astro-icon'
import markdoc from '@astrojs/markdoc'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://hellotham.github.io',
  base: '/hello-astro/',
  integrations: [
    icon(),
    sitemap(),
    alpinejs(),
    robotsTxt(),
    markdoc(),
    mdx(),
    plantuml(),
    mermaid()
  ],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [remarkReadingTime, remarkMath, remarkDiagram, remarkEmoji],
    rehypePlugins: [rehypeKatex],
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
