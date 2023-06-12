import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import Gallery from './src/components/gallery.astro';

export default defineMarkdocConfig({
  tags: {
    Gallery: {
      render: Gallery,
      attributes: {
        folder: { type: String },
      }
    },
  },
})