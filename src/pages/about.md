---
published: true
title: About
description: Description of Hello Gatsby Starter
layout: ../layouts/page.astro
image: ../images/undraw/undraw_About_me_re_82bv.png
---

This is starter template for a full featured marketing and blog website based on the following:

- [Gatsby Starter Default](https://github.com/gatsbyjs/gatsby-starter-default)
- [How To Set Up a Gatsby Project with TypeScript](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-gatsby-project-with-typescript)
- [Gatsby](https://gatsbyjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com) and [TailwindUI](https://tailwindui.com)
- [HeroIcons](https://heroicons.com/)
- [Hero Patterns](https://heropatterns.com/)
- [HeadlessUI](https://headlessui.dev/)
- [unDraw](https://undraw.co/) for illustrations
- [MDX](https://mdxjs.com/) and [Markdown](https://www.markdownguide.org/)
- [ESLint](https://eslint.org)for type-checking
- [SendGrid](https://sendgrid.com/) email delivery
- [Schema.org](https://schema.org/) and [JSON for Linking Data](https://json-ld.org/)
- [Open Graph](https://ogp.me/) used by [Facebook](https://developers.facebook.com/docs/sharing/webmasters/#markup)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and is deployed on Gatsby Cloud.

This website is open source (0BSD licence) - fork it and customise for your needs.

## Features

- Full-featured blog with frontmatter (title, description, author, date, image, tags)
- Tags index page and individual tag pages
- Pagination in posts and tag pages
- Support for RSS feed, sitemap and robots.txt
- Automatic optimization of images in Markdown/MDX posts
- SVG design (unDraw, Hero Patterns, HeroIcons)
- Support for code syntax highlighting
- Manifest and offline support
- Contact form using sendgrid email and Gatsby functions
- Full SEO support (via React Helmet) including Open Graph, Twitter Cards and Schema.org via JSON-LD

## SendGrid configuration (for contact form)

Insert the following environment variables (either in .env or on deployment host):

- `SENDGRID_API_KEY`
- `SENDGRID_AUTHORIZED_EMAIL`
