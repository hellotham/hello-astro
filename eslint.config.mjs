import { defineConfig } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import astro from 'eslint-plugin-astro'
import prettier from 'eslint-plugin-prettier'
import markdown from '@eslint/markdown'
// import * as mdx from 'eslint-plugin-mdx'

// parsers
const tsParser = tseslint.parser
const astroParser = astro.parser

export default defineConfig([
  // Global configuration
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },

  // Base configs
  js.configs.recommended,
  tseslint.configs.recommended,

  // Prettier config
  {
    plugins: {
      prettier: prettier
    },
    rules: {
      // disable warnings, since prettier should format on save
      'prettier/prettier': 'off'
    }
  },

  // astro setup with a11y
  astro.configs.recommended,
  astro.configs['jsx-a11y-recommended'],
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: './tsconfig.json'
      }
    },
    rules: {
      'no-undef': 'off', // Disable "not defined" errors for specific Astro types that are globally available (ImageMetadata)
      '@typescript-eslint/no-explicit-any': 'off' // you may want this as it can get annoying
    }
  },
  {
    files: ['**/*.md'],
    plugins: {
      markdown
    },
    language: 'markdown/gfm',
    processor: 'markdown/markdown',
    rules: {
      // Minimal rules for markdown to avoid conflicts
      'no-html': 'off'
    }
  },
  // {
  //   ...mdx.flat,
  //   rules: {
  //     '@typescript-eslint/no-unused-expression': 'off',
  //     '@typescript-eslint/no-unused-vars': 'off'
  //   }
  // },
  // Ignore patterns
  {
    ignores: ['dist/**', '**/*.d.ts', '.github/']
  }
])
