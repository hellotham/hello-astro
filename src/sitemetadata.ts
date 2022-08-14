export type SiteMetadataType = {
  title: string
  description: string
  author: {
    name: string
    url: string
    summary: string
  }
  location: string
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

const SiteMetadata: SiteMetadataType = {
  title: 'Hello Astro',
  description: 'An Astro starter for corporate/marketing/blog websites.',
  author: {
    name: 'Hello Tham',
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

export default SiteMetadata
