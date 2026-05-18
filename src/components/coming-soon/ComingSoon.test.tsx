import { render, screen } from '@testing-library/react'
import { ComingSoon } from './ComingSoon'
import { COMPANY_INFO } from '@/lib/constants'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <div {...props}>{children}</div>
    ),
    h1: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <h1 {...props}>{children}</h1>
    ),
    p: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <p {...props}>{children}</p>
    ),
    a: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <a {...props}>{children}</a>
    ),
  },
}))

describe('ComingSoon', () => {
  describe('AC-001: Full-screen standalone page', () => {
    it('renders as a full-screen page with min-h-screen', () => {
      const { container } = render(<ComingSoon />)
      const main = container.querySelector('main')
      expect(main).toBeInTheDocument()
      expect(main).toHaveClass('min-h-screen')
    })

    it('does not render Header, Footer, BackToTop, or CookieConsent', () => {
      render(<ComingSoon />)
      expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
      expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument()
      expect(screen.queryByRole('button', { name: /scroll to top/i })).not.toBeInTheDocument()
      expect(screen.queryByText(/cookie/i)).not.toBeInTheDocument()
    })
  })

  describe('AC-002: Brand identity elements', () => {
    it('displays AutoCap logo with descriptive alt text', () => {
      render(<ComingSoon />)
      const logo = screen.getByAltText(/autocap group/i)
      expect(logo).toBeInTheDocument()
      expect(logo.tagName).toBe('IMG')
    })

    it('displays Coming Soon heading as h1', () => {
      render(<ComingSoon />)
      const heading = screen.getByRole('heading', { level: 1, name: /coming soon/i })
      expect(heading).toBeInTheDocument()
    })

    it('displays a subtitle or tagline', () => {
      render(<ComingSoon />)
      expect(screen.getByText(COMPANY_INFO.tagline)).toBeInTheDocument()
    })

    it('displays contact email as a mailto link', () => {
      render(<ComingSoon />)
      const emailLink = screen.getByRole('link', { name: new RegExp(COMPANY_INFO.email) })
      expect(emailLink).toBeInTheDocument()
      expect(emailLink).toHaveAttribute('href', `mailto:${COMPANY_INFO.email}`)
    })
  })

  describe('AC-005: Brand colors and typography', () => {
    it('has dark background using Nordic Black', () => {
      const { container } = render(<ComingSoon />)
      const main = container.querySelector('main')
      expect(main).toHaveClass('bg-[#1C1C1E]')
    })

    it('displays decorative red accent line', () => {
      const { container } = render(<ComingSoon />)
      const redLine = container.querySelector('.bg-\\[\\#C8102E\\]')
      expect(redLine).toBeInTheDocument()
    })

    it('uses white text for readability on dark background', () => {
      const { container } = render(<ComingSoon />)
      const main = container.querySelector('main')
      expect(main).toHaveClass('text-white')
    })
  })

  describe('AC-006: Page metadata', () => {
    it('exports metadata with correct title', async () => {
      const { comingSoonMetadata } = await import('./ComingSoon')
      expect(comingSoonMetadata.title).toBe('AutoCap Group · Coming Soon')
    })

    it('exports metadata with a description', async () => {
      const { comingSoonMetadata } = await import('./ComingSoon')
      expect(comingSoonMetadata.description).toBeTruthy()
    })
  })

  describe('Accessibility', () => {
    it('uses semantic main element', () => {
      const { container } = render(<ComingSoon />)
      expect(container.querySelector('main')).toBeInTheDocument()
    })

    it('email link is keyboard focusable', () => {
      render(<ComingSoon />)
      const emailLink = screen.getByRole('link', { name: new RegExp(COMPANY_INFO.email) })
      expect(emailLink.tagName).toBe('A')
      expect(emailLink).not.toHaveAttribute('tabindex', '-1')
    })
  })
})
