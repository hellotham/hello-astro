# hello-astro

Test repository for playing around with [Astro](https://astro.build).

Uses the following integrations:

- @astrojs/image
- @astrojs/sitemap
- @astrojs/rss
- @astrojs/tailwind
- astro-icon
- astro-seo

In addition, SVG and PNG illustrations sourced from [Undraw](https://undraw.co)

Contains a bare bones port of [hello-gatsby-starter](https://github.com/hellotham/hello-gatsby-starter)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

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

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components or layouts.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `yarn`              | Installs dependencies                                 |
| `yarn dev`          | Starts local dev server at `localhost:3000`           |
| `yarn build`        | Build your production site to `./dist/`               |
| `yarn preview`      | Preview your build locally, before deploying          |
| `yarn format`       | Pretty print the source code                          |
| `yarn lint`         | Check the source code for errors                      |
| `yarn astro ...`    | Run CLI commands like `astro add`, `astro preview`    |
| `yarn astro --help` | Get help using the Astro CLI                          |
