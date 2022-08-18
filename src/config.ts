export type SiteMetadataType = {
  title: string
  description: string
  author: {
    name: string
    twitter?: string
    url: string
    summary?: string
  }
  org: {
    name: string
    twitter?: string
    url: string
    summary?: string
  }
  location?: string
  repository: string
  social: {
    email: string
    phone: string
    facebook: string
    instagram: string
    twitter: string
    linkedin: string
    github: string
  }
  buildTime: string
}

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

export const SiteMetadata: SiteMetadataType = {
  title: 'Hello Astro',
  description: 'An Astro starter for corporate/marketing/blog websites.',
  author: {
    name: 'Chris Tham',
    twitter: 'chris1tham',
    url: 'https://christham.net',
    summary:
      'Outrageous actualiser.',
  },
  org: {
    name: 'Hello Tham',
    twitter: 'hellothamcom',
    url: 'https://hellotham.com',
    summary:
      'Hello Tham is a boutique management consulting firm. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design.',
  },
  location: 'Rivendell, Middle Earth',
  repository: 'https://github.com/ChristineTham/hello-astro',
  social: {
    email: 'mailto:info@contact.me',
    phone: 'tel:+61234567890',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    github: 'https://github.com',
  },
  buildTime: new Date().toString(),
}

export const NavigationLinks = [
  { name: 'Home', href: '', current: false },
  { name: 'About', href: 'about', current: false },
  { name: 'Contact', href: 'contact', current: false },
  { name: 'Privacy', href: 'privacy', current: false },
  { name: 'Blog', href: 'blog', current: false },
]
