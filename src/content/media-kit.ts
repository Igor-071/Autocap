/**
 * Media Kit Content
 * Source: docs/reference/website-copy-deck.docx v1.1 - Section 6.2
 *
 * NOTE: This is prototype mode - mock asset paths are placeholders.
 * Actual assets (logos, brand colors PDF, photos) pending from AutoCap.
 */

export interface MediaAsset {
  name: string
  description: string
  format: string
  size?: string
  mockPath: string
}

export interface AssetCategory {
  title: string
  description: string
  assets: MediaAsset[]
}

export interface MediaKitContent {
  metadata: {
    title: string
    description: string
  }
  hero: {
    headline: string
    description: string
  }
  categories: AssetCategory[]
  pressContact: {
    title: string
    description: string
    email: string
  }
}

export const mediaKitContent: MediaKitContent = {
  metadata: {
    title: 'Media Kit · AutoCap Group',
    description:
      'Press resources, brand assets, and media contacts for journalists covering AutoCap Group.',
  },

  hero: {
    headline: 'Media Kit',
    description:
      'Download logos, brand guidelines, and high-resolution photos. For press enquiries, contact us at kontakt@autocapgroup.se.',
  },

  categories: [
    {
      title: 'Logos',
      description: 'AutoCap Group logos in multiple formats for print and digital use.',
      assets: [
        {
          name: 'AutoCap Logo (SVG)',
          description: 'Vector logo for digital use - light background',
          format: 'SVG',
          mockPath: '/media-kit/logo-autocap-light.svg',
        },
        {
          name: 'AutoCap Logo (PNG)',
          description: 'Raster logo for digital use - light background',
          format: 'PNG',
          size: '2000×800px',
          mockPath: '/media-kit/logo-autocap-light.png',
        },
        {
          name: 'AutoCap Logo Dark (SVG)',
          description: 'Vector logo for digital use - dark background',
          format: 'SVG',
          mockPath: '/media-kit/logo-autocap-dark.svg',
        },
        {
          name: 'AutoCap Logo Dark (PNG)',
          description: 'Raster logo for digital use - dark background',
          format: 'PNG',
          size: '2000×800px',
          mockPath: '/media-kit/logo-autocap-dark.png',
        },
      ],
    },
    {
      title: 'Brand Colors',
      description: 'Official color palette and usage guidelines.',
      assets: [
        {
          name: 'Brand Colors Reference',
          description: 'Complete color palette with hex codes and usage guidelines',
          format: 'PDF',
          size: '1.2 MB',
          mockPath: '/media-kit/brand-colors.pdf',
        },
      ],
    },
    {
      title: 'Leadership Photos',
      description: 'High-resolution photos of AutoCap Group leadership team.',
      assets: [
        {
          name: 'Leadership Photos Archive',
          description: 'Professional headshots of David Knape, Nicklas Knape, and board members',
          format: 'ZIP',
          size: '45 MB',
          mockPath: '/media-kit/leadership-photos.zip',
        },
      ],
    },
  ],

  pressContact: {
    title: 'Press Enquiries',
    description:
      'For media requests, interview opportunities, or additional information, please contact:',
    email: 'kontakt@autocapgroup.se',
  },
} as const
