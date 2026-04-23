import { render, screen } from '@testing-library/react'
import { PhotoPlaceholder } from './PhotoPlaceholder'

describe('PhotoPlaceholder', () => {
  describe('AC-010: Photo Placeholder Handling', () => {
    it('renders branded placeholder with AutoCap Red background', () => {
      const { container } = render(<PhotoPlaceholder name="John Doe" />)

      const placeholder = container.firstChild as HTMLElement
      expect(placeholder).toBeInTheDocument()
      expect(placeholder.className).toContain('bg-[#C8102E]')
    })

    it('displays white initials for two-word name', () => {
      render(<PhotoPlaceholder name="John Doe" />)

      const initials = screen.getByText('JD')
      expect(initials).toBeInTheDocument()
      expect(initials.className).toContain('text-white')
    })

    it('handles single-word name by using first two letters', () => {
      render(<PhotoPlaceholder name="Madonna" />)

      const initials = screen.getByText('MA')
      expect(initials).toBeInTheDocument()
    })

    it('handles three-word name by using first and last initials', () => {
      render(<PhotoPlaceholder name="John Paul Jones" />)

      const initials = screen.getByText('JJ')
      expect(initials).toBeInTheDocument()
    })

    it('renders as a circle', () => {
      const { container } = render(<PhotoPlaceholder name="Test User" />)

      const placeholder = container.firstChild as HTMLElement
      expect(placeholder.className).toContain('rounded-full')
    })

    it('maintains same dimensions as profile photos', () => {
      const { container } = render(<PhotoPlaceholder name="Test User" />)

      const placeholder = container.firstChild as HTMLElement
      // Should have fixed width and height
      expect(placeholder.className).toMatch(/w-\d+/)
      expect(placeholder.className).toMatch(/h-\d+/)
    })

    it('never renders a generic avatar icon', () => {
      const { container } = render(<PhotoPlaceholder name="Test User" />)

      // Should not contain any svg/icon elements
      const svg = container.querySelector('svg')
      expect(svg).toBeNull()
    })
  })
})
