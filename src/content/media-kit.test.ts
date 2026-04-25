import { mediaKitContent } from './media-kit'

describe('Media Kit Content', () => {
  describe('Content Structure', () => {
    it('has metadata with title and description', () => {
      expect(mediaKitContent.metadata).toBeDefined()
      expect(mediaKitContent.metadata.title).toBe('Media Kit · AutoCap Group')
      expect(mediaKitContent.metadata.description).toContain('Press resources')
    })

    it('has hero section with headline and description', () => {
      expect(mediaKitContent.hero).toBeDefined()
      expect(mediaKitContent.hero.headline).toBe('Media Kit')
      expect(mediaKitContent.hero.description).toContain('Download logos')
    })

    it('has categories array', () => {
      expect(mediaKitContent.categories).toBeDefined()
      expect(Array.isArray(mediaKitContent.categories)).toBe(true)
    })

    it('has press contact section', () => {
      expect(mediaKitContent.pressContact).toBeDefined()
      expect(mediaKitContent.pressContact.title).toBeTruthy()
      expect(mediaKitContent.pressContact.email).toBeTruthy()
    })
  })

  describe('Asset Categories', () => {
    it('has exactly 3 categories', () => {
      expect(mediaKitContent.categories).toHaveLength(3)
    })

    it('has Logos category', () => {
      const logos = mediaKitContent.categories.find((cat) => cat.title === 'Logos')
      expect(logos).toBeDefined()
      expect(logos?.description).toContain('AutoCap Group logos')
    })

    it('has Brand Colors category', () => {
      const brandColors = mediaKitContent.categories.find((cat) => cat.title === 'Brand Colors')
      expect(brandColors).toBeDefined()
      expect(brandColors?.description).toContain('color palette')
    })

    it('has Leadership Photos category', () => {
      const photos = mediaKitContent.categories.find((cat) => cat.title === 'Leadership Photos')
      expect(photos).toBeDefined()
      expect(photos?.description).toContain('leadership team')
    })

    it('all categories have required fields', () => {
      mediaKitContent.categories.forEach((category) => {
        expect(category.title).toBeTruthy()
        expect(category.description).toBeTruthy()
        expect(Array.isArray(category.assets)).toBe(true)
        expect(category.assets.length).toBeGreaterThan(0)
      })
    })
  })

  describe('Logo Assets', () => {
    const logosCategory = mediaKitContent.categories.find((cat) => cat.title === 'Logos')

    it('has 4 logo variants', () => {
      expect(logosCategory?.assets).toHaveLength(4)
    })

    it('includes SVG light variant', () => {
      const svgLight = logosCategory?.assets.find((asset) => asset.name.includes('SVG'))
      expect(svgLight).toBeDefined()
      expect(svgLight?.format).toBe('SVG')
      expect(svgLight?.mockPath).toContain('.svg')
    })

    it('includes PNG light variant', () => {
      const pngLight = logosCategory?.assets.find(
        (asset) => asset.name.includes('PNG') && !asset.name.includes('Dark')
      )
      expect(pngLight).toBeDefined()
      expect(pngLight?.format).toBe('PNG')
      expect(pngLight?.mockPath).toContain('.png')
    })

    it('includes dark variants', () => {
      const darkLogos = logosCategory?.assets.filter((asset) => asset.name.includes('Dark'))
      expect(darkLogos).toHaveLength(2)
    })

    it('all logos have mock paths', () => {
      logosCategory?.assets.forEach((asset) => {
        expect(asset.mockPath).toMatch(/^\/media-kit\//)
      })
    })
  })

  describe('Brand Colors Assets', () => {
    const brandColorsCategory = mediaKitContent.categories.find(
      (cat) => cat.title === 'Brand Colors'
    )

    it('has 1 brand colors asset', () => {
      expect(brandColorsCategory?.assets).toHaveLength(1)
    })

    it('brand colors asset is PDF format', () => {
      const pdf = brandColorsCategory?.assets[0]
      expect(pdf?.format).toBe('PDF')
      expect(pdf?.mockPath).toContain('.pdf')
    })

    it('includes file size information', () => {
      const pdf = brandColorsCategory?.assets[0]
      expect(pdf?.size).toBeTruthy()
    })
  })

  describe('Leadership Photos Assets', () => {
    const photosCategory = mediaKitContent.categories.find(
      (cat) => cat.title === 'Leadership Photos'
    )

    it('has 1 photos archive', () => {
      expect(photosCategory?.assets).toHaveLength(1)
    })

    it('photos archive is ZIP format', () => {
      const zip = photosCategory?.assets[0]
      expect(zip?.format).toBe('ZIP')
      expect(zip?.mockPath).toContain('.zip')
    })

    it('includes file size information', () => {
      const zip = photosCategory?.assets[0]
      expect(zip?.size).toBeTruthy()
    })

    it('description mentions key leadership', () => {
      const zip = photosCategory?.assets[0]
      expect(zip?.description).toContain('David Knape')
      expect(zip?.description).toContain('Nicklas Knape')
    })
  })

  describe('Press Contact', () => {
    it('has title', () => {
      expect(mediaKitContent.pressContact.title).toBe('Press Enquiries')
    })

    it('has description', () => {
      expect(mediaKitContent.pressContact.description).toContain('media requests')
    })

    it('email is kontakt@autocapgroup.se', () => {
      expect(mediaKitContent.pressContact.email).toBe('kontakt@autocapgroup.se')
    })
  })

  describe('Mock Asset Paths', () => {
    it('all assets have mock paths', () => {
      mediaKitContent.categories.forEach((category) => {
        category.assets.forEach((asset) => {
          expect(asset.mockPath).toBeTruthy()
          expect(asset.mockPath).toMatch(/^\/media-kit\//)
        })
      })
    })

    it('all mock paths have correct file extensions', () => {
      mediaKitContent.categories.forEach((category) => {
        category.assets.forEach((asset) => {
          const extension = asset.mockPath.split('.').pop()?.toLowerCase()
          const format = asset.format.toLowerCase()
          expect(extension).toBe(format)
        })
      })
    })

    it('total of 6 assets across all categories', () => {
      const totalAssets = mediaKitContent.categories.reduce(
        (sum, cat) => sum + cat.assets.length,
        0
      )
      expect(totalAssets).toBe(6)
    })
  })

  describe('Asset Information', () => {
    it('all assets have name', () => {
      mediaKitContent.categories.forEach((category) => {
        category.assets.forEach((asset) => {
          expect(asset.name).toBeTruthy()
        })
      })
    })

    it('all assets have description', () => {
      mediaKitContent.categories.forEach((category) => {
        category.assets.forEach((asset) => {
          expect(asset.description).toBeTruthy()
        })
      })
    })

    it('all assets have format', () => {
      mediaKitContent.categories.forEach((category) => {
        category.assets.forEach((asset) => {
          expect(asset.format).toBeTruthy()
          expect(['SVG', 'PNG', 'PDF', 'ZIP']).toContain(asset.format)
        })
      })
    })
  })
})
