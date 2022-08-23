import type { MarkdownInstance } from 'astro'

export interface Frontmatter {
  draft?: boolean
  title: string
  description?: string
  author?: string
  publishDate: string
  coverSVG?: string
  coverImage?: string
  socialImage?: string
  tags?: string[]
  file?: string
  url?: string
}

export interface TagType {
  tag: string
  count: number
  pages: MarkdownInstance<Frontmatter>[]
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
  buildTime: new Date().toString(),
}

export const Logo = '../svg/astro/logomark-light.svg'
export const LogoImage = '/images/astro/full-logo-light.png'
export const PrimaryLogo = '../svg/astro/full-logo-light.svg'
export const FeaturedSVG = '../svg/undraw/undraw_design_inspiration.svg'
export const DefaultSVG = '../svg/undraw/undraw_my_feed.svg'
export const DefaultImage = '/images/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
  { name: 'Privacy', href: 'privacy' },
  { name: 'Blog', href: 'blog' },
  { name: 'Tags', href: 'tags' },
]
