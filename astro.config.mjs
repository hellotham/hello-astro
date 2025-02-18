import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite'
import alpinejs from '@astrojs/alpinejs';
import robotsTxt from 'astro-robots-txt';
import remarkMath from 'remark-math';
import remarkEmoji from 'remark-emoji';
import rehypeKatex from 'rehype-katex';
import rehypeMermaid from 'rehype-mermaid';
import remarkPlantUML from '@akebifiky/remark-simple-plantuml';
import { remarkReadingTime } from './remark-plugins/remark-reading-time.mjs';
import { remarkDiagram } from './remark-plugins/remark-diagram.mjs';
import icon from "astro-icon";

import markdoc from "@astrojs/markdoc";

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['svgo'],
      noExternal: ['swiper']
    },
    optimizeDeps: { include: ['leaflet'] }
  },
  site: 'https://hellotham.github.io',
  base: '/hello-astro/',
  integrations: [icon(), sitemap(), alpinejs(), robotsTxt(), markdoc(), expressiveCode(), mdx()],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [remarkReadingTime, remarkMath, remarkPlantUML, remarkDiagram, remarkEmoji],
    rehypePlugins: [rehypeMermaid, rehypeKatex]
  },
  scopedStyleStrategy: 'where'
})