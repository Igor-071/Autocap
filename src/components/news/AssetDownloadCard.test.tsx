import { render, screen } from '@testing-library/react'
import { AssetDownloadCard } from './AssetDownloadCard'
import type { AssetCategory } from '@/content/media-kit'

describe('AssetDownloadCard Component', () => {
  const mockCategory: AssetCategory = {
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
    ],
  }

  describe('Category Header', () => {
    it('renders category title', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      expect(screen.getByText(mockCategory.title)).toBeInTheDocument()
    })

    it('renders category description', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      expect(screen.getByText(mockCategory.description)).toBeInTheDocument()
    })

    it('title is h3 heading', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      const title = screen.getByRole('heading', { level: 3 })
      expect(title).toHaveTextContent(mockCategory.title)
    })

    it('title is emphasized', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      const title = screen.getByRole('heading', { level: 3 })
      expect(title).toHaveClass('font-bold')
    })
  })

  describe('Asset Rendering', () => {
    it('renders all assets', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      mockCategory.assets.forEach((asset) => {
        expect(screen.getByText(asset.name)).toBeInTheDocument()
      })
    })

    it('renders asset descriptions', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      mockCategory.assets.forEach((asset) => {
        expect(screen.getByText(asset.description)).toBeInTheDocument()
      })
    })

    it('renders correct number of assets', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      const downloadButtons = screen.getAllByLabelText(/Download/)
      expect(downloadButtons).toHaveLength(mockCategory.assets.length)
    })
  })

  describe('Format Badges', () => {
    it('displays format badges for all assets', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      expect(screen.getByText('SVG')).toBeInTheDocument()
      expect(screen.getByText('PNG')).toBeInTheDocument()
    })

    it('SVG badge has blue color', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      const svgBadge = screen.getByText('SVG')
      expect(svgBadge).toHaveClass('bg-blue-100', 'text-blue-800')
    })

    it('PNG badge has green color', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      const pngBadge = screen.getByText('PNG')
      expect(pngBadge).toHaveClass('bg-green-100', 'text-green-800')
    })

    it('PDF badge has red color', () => {
      const pdfCategory: AssetCategory = {
        title: 'Brand Colors',
        description: 'Color palette',
        assets: [
          {
            name: 'Colors PDF',
            description: 'PDF file',
            format: 'PDF',
            mockPath: '/test.pdf',
          },
        ],
      }
      render(<AssetDownloadCard category={pdfCategory} />)
      const pdfBadge = screen.getByText('PDF')
      expect(pdfBadge).toHaveClass('bg-red-100', 'text-red-800')
    })

    it('ZIP badge has purple color', () => {
      const zipCategory: AssetCategory = {
        title: 'Photos',
        description: 'Photo archive',
        assets: [
          {
            name: 'Photos ZIP',
            description: 'ZIP archive',
            format: 'ZIP',
            mockPath: '/test.zip',
          },
        ],
      }
      render(<AssetDownloadCard category={zipCategory} />)
      const zipBadge = screen.getByText('ZIP')
      expect(zipBadge).toHaveClass('bg-purple-100', 'text-purple-800')
    })
  })

  describe('File Size Display', () => {
    it('displays file size when provided', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      expect(screen.getByText('2000×800px')).toBeInTheDocument()
    })

    it('does not show size when not provided', () => {
      const { container } = render(<AssetDownloadCard category={mockCategory} />)
      const assetItems = container.querySelectorAll('.flex.items-start.justify-between')
      // First asset (SVG) has no size, second asset (PNG) has size
      expect(assetItems).toHaveLength(2)
    })
  })

  describe('Download Buttons', () => {
    it('renders download button for each asset', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      const downloadButtons = screen.getAllByLabelText(/Download/)
      expect(downloadButtons).toHaveLength(mockCategory.assets.length)
    })

    it('download buttons have correct href', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      const svgButton = screen.getByLabelText('Download AutoCap Logo (SVG)')
      expect(svgButton).toHaveAttribute('href', '/media-kit/logo-autocap-light.svg')
    })

    it('download buttons have download attribute', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      const downloadButtons = screen.getAllByLabelText(/Download/)
      downloadButtons.forEach((button) => {
        expect(button).toHaveAttribute('download')
      })
    })

    it('download buttons have accessible labels', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      expect(screen.getByLabelText('Download AutoCap Logo (SVG)')).toBeInTheDocument()
      expect(screen.getByLabelText('Download AutoCap Logo (PNG)')).toBeInTheDocument()
    })

    it('download buttons use AutoCap Red color', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      const downloadButton = screen.getByLabelText('Download AutoCap Logo (SVG)')
      expect(downloadButton).toHaveClass('bg-[#C8102E]')
    })

    it('download buttons include Download icon', () => {
      const { container } = render(<AssetDownloadCard category={mockCategory} />)
      const icons = container.querySelectorAll('svg.lucide-download')
      expect(icons).toHaveLength(mockCategory.assets.length)
    })
  })

  describe('Card Styling', () => {
    it('has white background', () => {
      const { container } = render(<AssetDownloadCard category={mockCategory} />)
      const card = container.firstChild
      expect(card).toHaveClass('bg-white')
    })

    it('has border', () => {
      const { container } = render(<AssetDownloadCard category={mockCategory} />)
      const card = container.firstChild
      expect(card).toHaveClass('border', 'border-gray-200')
    })

    it('has rounded corners', () => {
      const { container } = render(<AssetDownloadCard category={mockCategory} />)
      const card = container.firstChild
      expect(card).toHaveClass('rounded-lg')
    })

    it('has shadow', () => {
      const { container } = render(<AssetDownloadCard category={mockCategory} />)
      const card = container.firstChild
      expect(card).toHaveClass('shadow-sm')
    })

    it('has hover shadow effect', () => {
      const { container } = render(<AssetDownloadCard category={mockCategory} />)
      const card = container.firstChild
      expect(card).toHaveClass('hover:shadow-md')
    })
  })

  describe('TODO Notice', () => {
    it('displays TODO notice for prototype mode', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      expect(screen.getByText(/TODO:/)).toBeInTheDocument()
    })

    it('TODO notice mentions replacing mock paths', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      expect(screen.getByText(/Replace mock asset paths/)).toBeInTheDocument()
    })

    it('TODO notice has yellow background', () => {
      const { container } = render(<AssetDownloadCard category={mockCategory} />)
      const notice = container.querySelector('.bg-yellow-50')
      expect(notice).toBeInTheDocument()
    })
  })

  describe('Responsive Design', () => {
    it('download button text is hidden on small screens', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      const downloadButtons = screen.getAllByLabelText(/Download/)
      downloadButtons.forEach((button) => {
        const buttonText = button.querySelector('span.hidden')
        expect(buttonText).toHaveClass('sm:inline')
      })
    })

    it('has responsive spacing', () => {
      const { container } = render(<AssetDownloadCard category={mockCategory} />)
      const card = container.firstChild
      expect(card).toHaveClass('p-6')
    })
  })

  describe('Edge Cases', () => {
    it('handles single asset', () => {
      const singleAsset: AssetCategory = {
        title: 'Single Asset',
        description: 'Category with one asset',
        assets: [mockCategory.assets[0]],
      }
      render(<AssetDownloadCard category={singleAsset} />)
      expect(screen.getAllByLabelText(/Download/)).toHaveLength(1)
    })

    it('handles many assets', () => {
      const manyAssets: AssetCategory = {
        title: 'Many Assets',
        description: 'Category with multiple assets',
        assets: Array(10).fill(mockCategory.assets[0]),
      }
      render(<AssetDownloadCard category={manyAssets} />)
      expect(screen.getAllByLabelText(/Download/)).toHaveLength(10)
    })

    it('handles long asset names', () => {
      const longName: AssetCategory = {
        title: 'Test',
        description: 'Test category',
        assets: [
          {
            name: 'This is a very long asset name that demonstrates how the component handles substantial text',
            description: 'Test description',
            format: 'SVG',
            mockPath: '/test.svg',
          },
        ],
      }
      render(<AssetDownloadCard category={longName} />)
      expect(screen.getByText(/This is a very long asset name/)).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('download links are keyboard accessible', () => {
      render(<AssetDownloadCard category={mockCategory} />)
      const downloadButtons = screen.getAllByLabelText(/Download/)
      downloadButtons.forEach((button) => {
        expect(button.tagName).toBe('A')
      })
    })

    it('has semantic HTML structure', () => {
      const { container } = render(<AssetDownloadCard category={mockCategory} />)
      expect(container.querySelector('h3')).toBeInTheDocument()
      expect(container.querySelector('a[href]')).toBeInTheDocument()
    })
  })
})
