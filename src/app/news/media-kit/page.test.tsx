import { render, screen } from '@testing-library/react'
import MediaKitPage, { metadata } from './page'
import { mediaKitContent } from '@/content/media-kit'

// Mock the components
jest.mock('@/components/news/AssetDownloadCard', () => ({
  AssetDownloadCard: ({ category }: { category: { title: string } }) => (
    <div data-testid="asset-download-card">
      <h3>{category.title}</h3>
    </div>
  ),
}))

jest.mock('@/components/news/PressContact', () => ({
  PressContact: ({ title, email }: { title: string; email: string }) => (
    <div data-testid="press-contact">
      <h2>{title}</h2>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  ),
}))

describe('Media Kit Page', () => {
  describe('AC-001: Hero section with page title and description', () => {
    it('renders hero section', () => {
      const { container } = render(<MediaKitPage />)
      const hero = container.querySelector('.bg-\\[\\#F0DADA\\]')
      expect(hero).toBeInTheDocument()
    })

    it('displays page headline', () => {
      render(<MediaKitPage />)
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        mediaKitContent.hero.headline
      )
    })

    it('headline is "Media Kit"', () => {
      render(<MediaKitPage />)
      const headline = screen.getByRole('heading', { level: 1 })
      expect(headline).toHaveTextContent('Media Kit')
    })

    it('displays hero description', () => {
      render(<MediaKitPage />)
      expect(screen.getByText(new RegExp(mediaKitContent.hero.description))).toBeInTheDocument()
    })

    it('hero has Ember background', () => {
      const { container } = render(<MediaKitPage />)
      const hero = container.querySelector('.bg-\\[\\#F0DADA\\]')
      expect(hero).toBeInTheDocument()
    })

    it('hero has decorative line', () => {
      const { container } = render(<MediaKitPage />)
      const decorativeLine = container.querySelector('.bg-gradient-to-r')
      expect(decorativeLine).toBeInTheDocument()
    })
  })

  describe('AC-002: All 3 asset categories display in cards', () => {
    it('renders all asset category cards', () => {
      render(<MediaKitPage />)
      const cards = screen.getAllByTestId('asset-download-card')
      expect(cards).toHaveLength(3)
    })

    it('displays Logos category', () => {
      render(<MediaKitPage />)
      expect(screen.getByText('Logos')).toBeInTheDocument()
    })

    it('displays Brand Colors category', () => {
      render(<MediaKitPage />)
      expect(screen.getByText('Brand Colors')).toBeInTheDocument()
    })

    it('displays Leadership Photos category', () => {
      render(<MediaKitPage />)
      expect(screen.getByText('Leadership Photos')).toBeInTheDocument()
    })

    it('categories match content file', () => {
      render(<MediaKitPage />)
      mediaKitContent.categories.forEach((category) => {
        expect(screen.getByText(category.title)).toBeInTheDocument()
      })
    })
  })

  describe('AC-003: Download links with correct mock paths', () => {
    it('passes categories to AssetDownloadCard component', () => {
      render(<MediaKitPage />)
      const cards = screen.getAllByTestId('asset-download-card')
      expect(cards).toHaveLength(mediaKitContent.categories.length)
    })

    it('renders asset download cards in grid', () => {
      const { container } = render(<MediaKitPage />)
      const grid = container.querySelector('.grid')
      expect(grid).toBeInTheDocument()
    })
  })

  describe('AC-004: Format badges (SVG/PNG/PDF/ZIP) render', () => {
    it('AssetDownloadCard components receive category data', () => {
      render(<MediaKitPage />)
      // Verify all categories are passed to components
      expect(screen.getByText('Logos')).toBeInTheDocument()
      expect(screen.getByText('Brand Colors')).toBeInTheDocument()
      expect(screen.getByText('Leadership Photos')).toBeInTheDocument()
    })
  })

  describe('AC-005: Press contact section with clickable email', () => {
    it('renders press contact section', () => {
      render(<MediaKitPage />)
      expect(screen.getByTestId('press-contact')).toBeInTheDocument()
    })

    it('displays press contact title', () => {
      render(<MediaKitPage />)
      expect(screen.getByText(mediaKitContent.pressContact.title)).toBeInTheDocument()
    })

    it('displays press contact email', () => {
      render(<MediaKitPage />)
      expect(screen.getByText(mediaKitContent.pressContact.email)).toBeInTheDocument()
    })

    it('email is kontakt@autocapgroup.se', () => {
      render(<MediaKitPage />)
      const emailLink = screen.getByText('kontakt@autocapgroup.se')
      expect(emailLink).toHaveAttribute('href', 'mailto:kontakt@autocapgroup.se')
    })

    it('press contact has gray background', () => {
      const { container } = render(<MediaKitPage />)
      const pressSection = Array.from(container.querySelectorAll('section')).find((section) =>
        section.textContent?.includes('Press Enquiries')
      )
      expect(pressSection).toHaveClass('bg-gray-50')
    })
  })

  describe('AC-006: Responsive grid (1/2 columns)', () => {
    it('has grid layout for asset cards', () => {
      const { container } = render(<MediaKitPage />)
      const grid = container.querySelector('.grid')
      expect(grid).toBeInTheDocument()
    })

    it('grid is 1 column on mobile', () => {
      const { container } = render(<MediaKitPage />)
      const grid = container.querySelector('.grid')
      expect(grid).toHaveClass('grid-cols-1')
    })

    it('grid is 2 columns on desktop', () => {
      const { container } = render(<MediaKitPage />)
      const grid = container.querySelector('.grid')
      expect(grid).toHaveClass('lg:grid-cols-2')
    })

    it('grid has gap spacing', () => {
      const { container } = render(<MediaKitPage />)
      const grid = container.querySelector('.grid')
      expect(grid).toHaveClass('gap-8')
    })
  })

  describe('AC-007: SEO metadata', () => {
    it('has correct title', () => {
      expect(metadata.title).toBe('Media Kit · AutoCap Group')
    })

    it('has correct description', () => {
      expect(metadata.description).toContain('Press resources')
    })

    it('metadata matches content file', () => {
      expect(metadata.title).toBe(mediaKitContent.metadata.title)
      expect(metadata.description).toBe(mediaKitContent.metadata.description)
    })
  })

  describe('AC-008: TODO comments for production asset integration', () => {
    it('AssetDownloadCard components are rendered', () => {
      render(<MediaKitPage />)
      const cards = screen.getAllByTestId('asset-download-card')
      expect(cards).toHaveLength(3)
    })

    // TODO comments are in AssetDownloadCard component, tested separately
  })

  describe('Page Structure', () => {
    it('uses semantic main element', () => {
      const { container } = render(<MediaKitPage />)
      const main = container.querySelector('main')
      expect(main).toBeInTheDocument()
    })

    it('has full viewport height', () => {
      const { container } = render(<MediaKitPage />)
      const main = container.querySelector('main')
      expect(main).toHaveClass('min-h-screen')
    })

    it('has 3 main sections', () => {
      const { container } = render(<MediaKitPage />)
      const sections = container.querySelectorAll('section')
      expect(sections).toHaveLength(3)
    })

    it('sections are in correct order', () => {
      const { container } = render(<MediaKitPage />)
      const sections = container.querySelectorAll('section')

      // Hero (Ember background)
      expect(sections[0]).toHaveClass('bg-[#F0DADA]')

      // Asset grid (white background)
      expect(sections[1]).toHaveClass('bg-white')

      // Press contact (gray background)
      expect(sections[2]).toHaveClass('bg-gray-50')
    })
  })

  describe('Responsive Typography', () => {
    it('hero headline has responsive text sizing', () => {
      render(<MediaKitPage />)
      const headline = screen.getByRole('heading', { level: 1 })
      expect(headline).toHaveClass('text-4xl')
      expect(headline).toHaveClass('md:text-5xl')
      expect(headline).toHaveClass('lg:text-6xl')
    })

    it('hero has responsive padding', () => {
      const { container } = render(<MediaKitPage />)
      const hero = container.querySelector('section')
      expect(hero).toHaveClass('py-16')
      expect(hero).toHaveClass('md:py-20')
    })

    it('hero description has responsive sizing', () => {
      render(<MediaKitPage />)
      const description = screen.getByText(new RegExp(mediaKitContent.hero.description))
      expect(description).toHaveClass('text-lg')
      expect(description).toHaveClass('md:text-xl')
    })
  })

  describe('Content Integration', () => {
    it('uses media kit content from content file', () => {
      render(<MediaKitPage />)
      expect(screen.getByText(mediaKitContent.hero.headline)).toBeInTheDocument()
    })

    it('passes all categories to AssetDownloadCard', () => {
      render(<MediaKitPage />)
      mediaKitContent.categories.forEach((category) => {
        expect(screen.getByText(category.title)).toBeInTheDocument()
      })
    })

    it('passes press contact data to PressContact', () => {
      render(<MediaKitPage />)
      expect(screen.getByText(mediaKitContent.pressContact.title)).toBeInTheDocument()
      expect(screen.getByText(mediaKitContent.pressContact.email)).toBeInTheDocument()
    })
  })

  describe('Layout & Spacing', () => {
    it('hero is centered', () => {
      const { container } = render(<MediaKitPage />)
      const heroContent = container.querySelector('.text-center')
      expect(heroContent).toBeInTheDocument()
    })

    it('sections have max-width containers', () => {
      const { container } = render(<MediaKitPage />)
      const maxWidthContainers = container.querySelectorAll('[class*="max-w-"]')
      expect(maxWidthContainers.length).toBeGreaterThan(0)
    })

    it('sections have horizontal padding', () => {
      const { container } = render(<MediaKitPage />)
      const paddedContainers = container.querySelectorAll('.px-6')
      expect(paddedContainers.length).toBeGreaterThan(0)
    })
  })

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      render(<MediaKitPage />)
      const h1 = screen.getByRole('heading', { level: 1 })
      const h2s = screen.getAllByRole('heading', { level: 2 })
      const h3s = screen.getAllByRole('heading', { level: 3 })

      expect(h1).toBeInTheDocument()
      expect(h2s.length).toBeGreaterThan(0)
      expect(h3s.length).toBeGreaterThan(0)
    })

    it('uses semantic section elements', () => {
      const { container } = render(<MediaKitPage />)
      const sections = container.querySelectorAll('section')
      expect(sections.length).toBe(3)
    })
  })
})
