import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

// Mock CookieSettingsButton
jest.mock('@/components/cookie/CookieSettingsButton', () => ({
  CookieSettingsButton: () => (
    <button type="button">Cookie Settings</button>
  ),
}))

describe('Footer', () => {
  describe('Structure', () => {
    it('renders footer element', () => {
      render(<Footer />)
      expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    })

    it('renders the AutoCap logo', () => {
      render(<Footer />)
      expect(screen.getByAltText('AutoCap Group')).toBeInTheDocument()
    })

    it('renders company tagline', () => {
      render(<Footer />)
      expect(screen.getByText('The Nordic Tire Services Platform')).toBeInTheDocument()
    })
  })

  describe('Section headings', () => {
    it('renders Company heading', () => {
      render(<Footer />)
      expect(screen.getByText('Company')).toBeInTheDocument()
    })

    it('renders For You heading', () => {
      render(<Footer />)
      expect(screen.getByText('For You')).toBeInTheDocument()
    })

    it('renders Resources heading', () => {
      render(<Footer />)
      expect(screen.getByText('Resources')).toBeInTheDocument()
    })
  })

  describe('Navigation links', () => {
    it('renders Company section links', () => {
      render(<Footer />)
      expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/')
      expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '/about')
      expect(screen.getByRole('link', { name: /our portfolio/i })).toHaveAttribute('href', '/portfolio')
    })

    it('renders For You section links', () => {
      render(<Footer />)
      expect(screen.getByRole('link', { name: /entrepreneurs/i })).toHaveAttribute('href', '/entrepreneurs')
      expect(screen.getByRole('link', { name: /investors/i })).toHaveAttribute('href', '/investors')
    })

    it('renders Resources section links', () => {
      render(<Footer />)
      expect(screen.getByRole('link', { name: /news & media/i })).toHaveAttribute('href', '/news')
      expect(screen.getByRole('link', { name: /sustainability/i })).toHaveAttribute('href', '/sustainability')
      expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '/contact')
    })

    it('renders Privacy Policy link', () => {
      render(<Footer />)
      expect(screen.getByRole('link', { name: /privacy policy/i })).toHaveAttribute('href', '/privacy-policy')
    })

    it('renders Cookie Settings button', () => {
      render(<Footer />)
      expect(screen.getByRole('button', { name: /cookie settings/i })).toBeInTheDocument()
    })
  })

  describe('Bottom bar', () => {
    it('renders company name in copyright', () => {
      render(<Footer />)
      expect(screen.getByText(/AutoCap Group Sweden AB/)).toBeInTheDocument()
    })
  })
})
