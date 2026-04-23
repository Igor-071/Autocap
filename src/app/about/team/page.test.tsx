import { render, screen } from '@testing-library/react'
import TeamPage from './page'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    width,
    height,
    className,
  }: {
    src: string
    alt: string
    width: number
    height: number
    className?: string
  }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} width={width} height={height} className={className} />
  },
}))

describe('Team Page', () => {
  describe('AC-001: Page Layout and Hero Section', () => {
    it('renders hero section with correct title and description', () => {
      render(<TeamPage />)

      expect(screen.getByText('Leadership & Board')).toBeInTheDocument()
      expect(
        screen.getByText(/AutoCap Group is led by a team with deep experience/),
      ).toBeInTheDocument()
    })

    it('applies Dusk background color to hero section', () => {
      const { container } = render(<TeamPage />)

      // Check for Dusk color (#EDE4D8) in class names
      const heroSection = container.querySelector('section')
      expect(heroSection?.className).toContain('bg-[#EDE4D8]')
    })
  })

  describe('AC-002: Profile Grid Display', () => {
    it('renders profile cards in a grid layout', () => {
      const { container } = render(<TeamPage />)

      // Should have grid container(s)
      const grids = container.querySelectorAll('.grid')
      expect(grids.length).toBeGreaterThan(0)
    })

    it('applies 2-column grid on tablet/desktop', () => {
      const { container } = render(<TeamPage />)

      // Check for md:grid-cols-2 class
      const grid = container.querySelector('.grid')
      expect(grid?.className).toContain('md:grid-cols-2')
    })
  })

  describe('AC-012: Section Organization', () => {
    it('organizes profiles into Management and Board sections', () => {
      render(<TeamPage />)

      // Should have section headers
      expect(screen.getByText('Management Team')).toBeInTheDocument()
      expect(screen.getByText('Board of Directors')).toBeInTheDocument()
    })

    it('displays 3 management team members', () => {
      render(<TeamPage />)

      // Check for management team names
      expect(screen.getByText('David Knape')).toBeInTheDocument()
      expect(screen.getByText('Niklas Norén')).toBeInTheDocument()
      expect(screen.getByText('Nicklas Knape')).toBeInTheDocument()
    })

    it('displays 3 board members', () => {
      render(<TeamPage />)

      // Check for board member names
      expect(screen.getByText('Gustav Berggren')).toBeInTheDocument()
      expect(screen.getByText('Thomas Petrén')).toBeInTheDocument()
      expect(screen.getByText('Mats Johansson')).toBeInTheDocument()
    })
  })

  describe('AC-013: Responsive Design - Mobile', () => {
    it('renders mobile-friendly layout', () => {
      const { container } = render(<TeamPage />)

      // Grid should not have explicit 1-column class (default behavior)
      const grid = container.querySelector('.grid')
      expect(grid).toBeInTheDocument()
    })
  })

  describe('AC-014: Responsive Design - Tablet/Desktop', () => {
    it('renders 2-column grid with appropriate spacing', () => {
      const { container } = render(<TeamPage />)

      const grid = container.querySelector('.grid')
      // Should have gap class for spacing
      expect(grid?.className).toMatch(/gap-/)
    })
  })
})
