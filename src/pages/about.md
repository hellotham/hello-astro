---
layout: ../layouts/page.astro
title: About
description: Description of Hello Astro Starter
publishDate: '2022-08-08T00:00:00.000Z'
coverSVG: ../svg/undraw/undraw_about_me.svg
socialImage: /images/undraw/undraw_about_me.png
---

This is starter template for a full featured marketing and blog website based on the following:

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com) and [TailwindUI](https://tailwindui.com)
- [Iconify](https://iconify.design/)
- [Hero Patterns](https://heropatterns.com/)
- [unDraw](https://undraw.co/) for illustrations
- [MDX](https://mdxjs.com/) and [Markdown](https://www.markdownguide.org/)
- [Schema.org](https://schema.org/) and [JSON for Linking Data](https://json-ld.org/), type-checked using [schema-dts](https://github.com/google/schema-dts)
- [Open Graph](https://ogp.me/) used by [Facebook](https://developers.facebook.com/docs/sharing/webmasters/#markup)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [AlpineJS](https://alpinejs.dev)
- [Lunr](https://lunrjs.com)
- [remark-math and rehype-katex](https://github.com/remarkjs/remark-math)
- [Lunr](https://lunrjs.com)
- [KaTeX](https://katex.org)
- [Mermaid](https://mermaid-js.github.io/mermaid/#/)
- [Markmap](https://markmap.js.org)
- [PlantUML](https://plantuml.com)

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and the demo is deployed on Github Pages.

This website is open source (MIT licence) - fork it and customise for your needs.

## Features

- Full-featured blog with frontmatter (title, description, author, date, image, tags)
- High performance low overhead with minimal Javascript (AlpineJS)
- Full text client based search of blog pages via lunrjs
- Categories index page and individual category pages
- Tags index page and individual tag pages
- Pagination for blog, category and tag pages
- Support for RSS feed, sitemap and robots.txt
- Automatic optimization of images in Markdown/MDX posts
- SVG design (unDraw, Hero Patterns, Iconify)
- Support for code syntax highlighting
- Full SEO support including Open Graph, Twitter Cards and Schema.org via JSON-LD
- Full support for Light and dark UI modes, as well as following system preferences, in accordance to TailwindCSS recommendation
- Customised 404 error page
- Display math equations using KaTeX via remark-math/rehype-katex
- Display Mermaid diagrams (requires `<div class="mermaid">` wrap and using the `withmermaid` layout, for now)
- Display Markmap diagrams (requires `<div class="markmap">` wrap and using the `withmarkmap` layout, for now)
- Display PlantUML diagrams (as a code block with language `plantuml`)
