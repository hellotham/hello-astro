# hello-astro

Hello Astro is a full featured [Astro](https://astro.build) multi-purpose starter theme written in Typescript and TailwindCSS. It supports Markdown and MDX based pages and blog posts.

![Light](https://github.com/hellotham/hello-astro/raw/main/screenshot-light.png)

![Dark](https://github.com/hellotham/hello-astro/raw/main/screenshot-dark.png)

![Lighthouse](https://github.com/hellotham/hello-astro/raw/main/lighthouse.png)

Hello Astro can used for any/all of the following:

- corporate/marketing site
- blog
- documentation site
- portfolio site supporting photo galleries

Uses the following integrations:

- @astrojs/mdx
- @astrojs/markdoc
- @astrojs/sitemap
- @astrojs/rss
- @astrojs/tailwind
- @astrojs/alpinejs
- astro-icon
- astro-seo
- astro-robots-txt

In addition, SVG and PNG illustrations sourced from [Undraw](https://undraw.co)

This project initially started as a bare bones port of [hello-gatsby-starter](https://github.com/hellotham/hello-gatsby-starter), but now contains more features (light/dark modes, category pages, search, diagrams, math and more!)

## Features

- Full-featured blog with frontmatter (title, description, author, date, image, tags)
- High performance low overhead with minimal Javascript (AlpineJS)
- Full text client based search of blog pages via lunrjs (search index only loaded on first invocation of search on a page)
- Index page and individual pages for authors, categories and tags, including pagination
- Support for RSS feed, sitemap and robots.txt
- SVG design (unDraw, Hero Patterns, Iconify)
- Support for code syntax highlighting
- Full SEO support including Open Graph, Twitter Cards and Schema.org via JSON-LD
- Full support for Light and dark UI modes, as well as following system preferences, in accordance to TailwindCSS recommendation
- Customised 404 error page
- Display math equations using KaTeX via remark-math/rehype-katex (enclosed in `$`...`$` or `$$`...`$$`)
- Display Mermaid, Markmap, PlantUML diagrams (authored as a code block with language `mermaid`, `markmap` and `plantuml`)
- Display map at geo coordinates and zoom level using `Map` component (need to also include `extra: ['map']` is frontmatter to load CSS/JS assets for page)
- Calculates and show reading time for blog posts
- CSS/JS assets of external libraries loaded only when needed on a per page and per package basis - no unnecessary bloat
- Photo gallery and lightbox using PhotoSwipe (including display of EXIF tags)
- Carousel component using Swiper
- Documentation pages (modelled after astro docs starter but using Tailwind)

## External Packages

The start uses the following external packages:

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
- Local full text search using [Lunr](https://lunrjs.com)
- Math equations using [KaTeX](https://katex.org) via [remark-math and rehype-katex](https://github.com/remarkjs/remark-math)
- Diagrams using [Mermaid](https://mermaid-js.github.io/mermaid/#/), [Markmap](https://markmap.js.org) and [PlantUML](https://plantuml.com)
- Open Street Map using [Leaflet](https://leafletjs.com/)
- [reading-time](https://github.com/ngryman/reading-time)
- [PhotoSwipe](https://photoswipe.com)
- [exifr](https://mutiny.cz/exifr/)
- [Swiper](https://swiperjs.com/)
- [Remark Emoji](https://github.com/rhysd/remark-emoji)

It follows the [JAMstack architecture](https://jamstack.org) by automatically building a static version from the Git repository. The demo is deployed on Github Pages.

## 🚀 Project Structure

Inside this starter, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── image.png
│   │   └── gallery/
│   │       └── gallery-name/
│   │           └── image.jpg
│   ├── components/
│   │   └── header.astro
│   ├── content/
│   │   ├── blog/
│   │   |   └── 2022-08-01-post.md
│   │   ├── doc/
│   │   |   └── documentation-page.md
|   │   └── config.ts
│   ├── layouts/
│   │   ├── base.astro
│   │   ├── blog.astro
│   │   └── doc.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── contact.astro
│   └── config.ts
└── package.json
```

Astro looks for `.astro`, `.md` or `.mdx` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

`src/components/` is where we put any Astro components and similarly `src/layouts/` for layouts.

Images can be placed in `src/assets/`.

Blog and documentation content are created as collections of Markdown or MDX files in `src/content`.

Any static assets, eg. images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `pnpm install`              | Installs dependencies                              |
| `pnpm dev`          | Starts local dev server at `localhost:3000`        |
| `pnpm build`        | Build your production site to `./dist/`            |
| `pnpm preview`      | Preview your build locally, before deploying       |
| `pnpm lint`         | Pretty print the source code                       |
| `pnpm check`        | Check the source code for errors                   |                 |
| `pnpm astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `pnpm astro --help` | Get help using the Astro CLI                       |

## Release History

- 1.0.0: Initial Release
- 1.0.1: Moved social images to src, improved coverImage processing
- 1.0.2: Upgrade packages to latest
- 1.1.0: Update to astro v2.x, now works with node 18 and 19
- 2.0.0: New version supporting Astro collections! Also clarified that this is a
  multipurpose theme. Search can now include both Markdown and MDX pages!
- 2.0.1: Updated screenshots, and improved landing page.
- 2.1.0: updated to latest packages, fixed dev links, backported features from
  personal blog, including Next/Prev links, photo gallery support in Markdown,
  and improved pagination control.
- 2.2.0: Fixed lint errors, reimplemented map, lightbox and carousel to use
  leaflet, photoswipe and swiper packages instead of relying on external CDN.
- 2.2.1: Update to astro 2.0.10, fixed asset loading issue with base
- 2.3.0: Removed layout from blog and doc content
- 2.4.0:`@astrojs/images` now support `svg` so no need for special handling
- 2.4.1: Use rendered frontmatter for blog and doc posts, fixes issue with diagrams not rendering.
- 2.4.2: Updated packages
- 3.0.0: Major update:
  - Use new Astro optimised asset support
  - new Astro logo
  - optimised post draft filtering
  - cleaned up gallery
  - fixed up SEO errors
  - cleaned up lint errors
  - migrated authors and categories to collections and use referential integrity based on Astro 2.5.0
  - converted social links to a data collection (requires Astro >2.5.0)
  - updated favicon and header metadata
  - improve search to include documentation
- 3.1.0: Enhancement update:
  - Migrated package manager from yarn to pnpm
  - Reference base for head links
  - Added eslint and prettier with plugins
  - Fixed image attributes error in seo component
  - Updated tsconfig to match astro strict
  - Update Katex CSS link
  - Fixed author not appearing in blog card
  - Added Markdoc support
- 3.1.1: Minor update:
  - Lazy load images
  - Support Github emoji via remark-emoji
- 3.1.2: Minor fixes:
  - Check for null categories
  - Slightly improved contact page
  - Improved next/prev processing
  - Updated packages
  - Reduce size of search button to accommodate min width
  - Changed image option for pages from object-contain to object-cover
  - Fixed site.webmanifest
- 3.1.3: Minor fixes:
  - Upgrade to `@astrojs/markdoc` 0.4.x and latest astro
  - Fixed Props declaration in [slug].astro
  - disabled Markdoc sample file due to this issue: https://github.com/withastro/astro/issues/7520
- 3.1.4: Minor enhancement:
  - Unified Image processing for svg and bitmaps
  - Enabled ViewTransitions
- 3.1.5: Minor enhancements:
  - Upgrade to latest version of packages
  - Fixed minor astro check error
- 3.2.0: Major enhancement:
  - Updated to Astro 3.x
  - Implement permissive Content Security Policy
- 3.2.1: Minor enhancement:
  - Updated packages, resolved astro check errors
