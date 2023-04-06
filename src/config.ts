import type { CollectionEntry } from 'astro:content'

export type Frontmatter = CollectionEntry<'blog'>['data']

export interface TagType {
  tag: string
  count: number
  pages: CollectionEntry<'blog'>[]
}

export const SiteMetadata = {
  title: 'Hello Astro',
  description: 'An Astro starter for corporate/marketing/blog websites.',
  author: {
    name: 'Chris Tham',
    twitter: '@chris1tham',
    url: 'https://christham.net',
    email: 'chris@christham.net',
    summary: 'Outrageous actualiser.',
  },
  org: {
    name: 'Hello Tham',
    twitter: '@hellothamcom',
    url: 'https://hellotham.com',
    email: 'info@hellotham.com',
    summary:
      'Hello Tham is a boutique management consulting firm. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design.',
  },
  location: 'Rivendell, Middle Earth',
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: 'https://github.com/hellotham/hello-astro',
  social: [
    {
      name: 'Email',
      link: 'mailto:info@hellothamcom',
      icon: 'envelope',
    },
    {
      name: 'Phone',
      link: '555-5555',
      icon: 'telephone',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/hellothamcom',
      icon: 'linkedin',
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/hellothamcom',
      icon: 'facebook',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/hellothamcom',
      icon: 'instagram',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/hellothamcom',
      icon: 'twitter',
    },
    {
      name: 'Github',
      link: 'https://github.com/hellothamcom',
      icon: 'github',
    },
  ],
  buildTime: new Date(),
}

export {default as Logo} from './assets/astro/logomark-light.png'
export {default as LogoImage} from './assets/astro/full-logo-light.png'
export {default as FeaturedSVG} from './assets/svg/undraw/undraw_design_inspiration.svg'
export {default as DefaultSVG} from './assets/svg/undraw/undraw_my_feed.svg'
export {default as DefaultImage} from './assets/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
  { name: 'Blog', href: 'blog' },
  { name: 'Docs', href: 'doc/introduction' },
]

import InstructionsSVG from './assets/svg/undraw/undraw_instruction_manual.svg'
import InstructionsPNG from './assets/svg/undraw/undraw_instruction_manual.svg'
import InformationSVG from './assets/svg/undraw/undraw_instruction_manual.svg'
import InformationPNG from './assets/svg/undraw/undraw_instruction_manual.svg'
import InstantSVG from './assets/svg/undraw/undraw_instant_information.svg'
import InstantPNG from './assets/svg/undraw/undraw_instant_information.svg'

export const CategoryDetail = [
  {
    category: 'instructions',
    coverSVG: InstructionsSVG,
    socialImage: InstructionsPNG,
    description: 'Guidelines on using this starter.'
  },
  {
    category: 'information',
    coverSVG: InformationSVG,
    socialImage: InformationPNG,
    description: 'Information articles.'
  },
]

export function categoryDetail(category: string | undefined) {
  const details = CategoryDetail.filter(cat => cat.category == category)

  if (details.length == 1) {
    return details[0]
  }
  return {
    category: 'General',
    coverSVG: InstantSVG,
    socialImage: InstantPNG,
    description: 'Category ' + category,
  }
}

import AuthorImage from './assets/authors/Chris Tham.jpg'

export const AuthorDetail = [
  {
    name: 'Chris Tham',
    description: 'Hello World',
    contact: 'chris@christham.net',
    image: AuthorImage
  }
]

import DefaultAuthorImage from './assets/authors/default.png'

export const DefaultAuthor = {
  name: 'Hello Astro',
  image: DefaultAuthorImage,
  contact: 'info@hellotham.com',
  description: 'Astronaut'
}

export function authorDetail(author: string | undefined) {
  const details = AuthorDetail.filter(person => person.name == author)

  if (details.length == 1) {
    return details[0]
  }
  return DefaultAuthor
}

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/hellotham/hello-astro`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Section Header': [
    { text: 'Introduction', link: 'doc/introduction' },
    { text: 'Page 2', link: 'doc/page-2' },
    { text: 'Page 3', link: 'doc/page-3' },
  ],
  'Another Section': [{ text: 'Page 4', link: 'doc/page-4' }],
}
