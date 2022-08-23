# hello-astro

![screenshot](https://github.com/hellotham/hello-astro/raw/main/screenshot-light.png)

Hello Astro is a full featured [Astro](https://astro.build) corporate/marketing/blog starter theme written in Typescript and TailwindCSS. It supports Markdown and MDX based pages and blog posts.

Uses the following integrations:

- @astrojs/mdx
- @astrojs/image
- @astrojs/sitemap
- @astrojs/rss
- @astrojs/tailwind
- @astrojs/alpinejs
- astro-icon
- astro-seo

In addition, SVG and PNG illustrations sourced from [Undraw](https://undraw.co)

Contains a bare bones port of [hello-gatsby-starter](https://github.com/hellotham/hello-gatsby-starter)

## 🚀 Project Structure

Inside this starter, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── header.astro
│   ├── images/
│   │   └── image.png
│   ├── layouts/
│   │   └── base.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── blog/
│   │       └── 2022-08-01-post.md
│   ├── svg/
│   │   └── image.svg
│   └── config.ts
└── package.json
```

Astro looks for `.astro`, `.md` or `.mdx` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

`src/components/` is where we put any Astro components and similarly `src/layouts/` for layouts.

Images can be placed in `src/images/` or `src/svg/` depending on type.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `yarn`              | Installs dependencies                              |
| `yarn dev`          | Starts local dev server at `localhost:3000`        |
| `yarn build`        | Build your production site to `./dist/`            |
| `yarn preview`      | Preview your build locally, before deploying       |
| `yarn format`       | Pretty print the source code                       |
| `yarn lint`         | Check the source code for errors                   |
| `yarn astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `yarn astro --help` | Get help using the Astro CLI                       |
