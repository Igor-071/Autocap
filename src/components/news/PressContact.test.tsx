import { render, screen } from '@testing-library/react'
import { PressContact } from './PressContact'

describe('PressContact Component', () => {
  const mockProps = {
    title: 'Press Enquiries',
    description:
      'For media requests, interview opportunities, or additional information, please contact:',
    email: 'kontakt@autocapgroup.se',
  }

  describe('Content Rendering', () => {
    it('renders title', () => {
      render(<PressContact {...mockProps} />)
      expect(screen.getByText(mockProps.title)).toBeInTheDocument()
    })

    it('renders description', () => {
      render(<PressContact {...mockProps} />)
      expect(screen.getByText(mockProps.description)).toBeInTheDocument()
    })

    it('renders email', () => {
      render(<PressContact {...mockProps} />)
      expect(screen.getByText(mockProps.email)).toBeInTheDocument()
    })

    it('title is h2 heading', () => {
      render(<PressContact {...mockProps} />)
      const title = screen.getByRole('heading', { level: 2 })
      expect(title).toHaveTextContent(mockProps.title)
    })
  })

  describe('Email Link', () => {
    it('email is a clickable link', () => {
      render(<PressContact {...mockProps} />)
      const emailLink = screen.getByText(mockProps.email)
      expect(emailLink.tagName).toBe('A')
    })

    it('email link has correct mailto href', () => {
      render(<PressContact {...mockProps} />)
      const emailLink = screen.getByText(mockProps.email)
      expect(emailLink).toHaveAttribute('href', `mailto:${mockProps.email}`)
    })

    it('email link has AutoCap Red color', () => {
      render(<PressContact {...mockProps} />)
      const emailLink = screen.getByText(mockProps.email)
      expect(emailLink).toHaveClass('text-[#C8102E]')
    })

    it('email link has hover effect', () => {
      render(<PressContact {...mockProps} />)
      const emailLink = screen.getByText(mockProps.email)
      expect(emailLink).toHaveClass('hover:text-[#A00D25]')
    })

    it('email link is emphasized', () => {
      render(<PressContact {...mockProps} />)
      const emailLink = screen.getByText(mockProps.email)
      expect(emailLink).toHaveClass('font-semibold')
    })
  })

  describe('Icon', () => {
    it('displays Mail icon', () => {
      const { container } = render(<PressContact {...mockProps} />)
      const icon = container.querySelector('svg.lucide-mail')
      expect(icon).toBeInTheDocument()
    })

    it('icon has Ember background circle', () => {
      const { container } = render(<PressContact {...mockProps} />)
      const iconContainer = container.querySelector('.bg-\\[\\#F0DADA\\]')
      expect(iconContainer).toBeInTheDocument()
    })

    it('icon container is rounded', () => {
      const { container } = render(<PressContact {...mockProps} />)
      const iconContainer = container.querySelector('.rounded-full')
      expect(iconContainer).toBeInTheDocument()
    })

    it('icon is AutoCap Red', () => {
      const { container } = render(<PressContact {...mockProps} />)
      const icon = container.querySelector('.text-\\[\\#C8102E\\]')
      expect(icon).toBeInTheDocument()
    })
  })

  describe('Styling', () => {
    it('has white background', () => {
      const { container } = render(<PressContact {...mockProps} />)
      const card = container.firstChild
      expect(card).toHaveClass('bg-white')
    })

    it('has border', () => {
      const { container } = render(<PressContact {...mockProps} />)
      const card = container.firstChild
      expect(card).toHaveClass('border', 'border-gray-200')
    })

    it('has rounded corners', () => {
      const { container } = render(<PressContact {...mockProps} />)
      const card = container.firstChild
      expect(card).toHaveClass('rounded-lg')
    })

    it('has shadow', () => {
      const { container } = render(<PressContact {...mockProps} />)
      const card = container.firstChild
      expect(card).toHaveClass('shadow-sm')
    })

    it('has padding', () => {
      const { container } = render(<PressContact {...mockProps} />)
      const card = container.firstChild
      expect(card).toHaveClass('p-8')
    })

    it('title is emphasized', () => {
      render(<PressContact {...mockProps} />)
      const title = screen.getByRole('heading', { level: 2 })
      expect(title).toHaveClass('font-bold')
    })

    it('title has large text', () => {
      render(<PressContact {...mockProps} />)
      const title = screen.getByRole('heading', { level: 2 })
      expect(title).toHaveClass('text-2xl')
    })

    it('description has gray text', () => {
      render(<PressContact {...mockProps} />)
      const description = screen.getByText(mockProps.description)
      expect(description).toHaveClass('text-gray-600')
    })
  })

  describe('Layout', () => {
    it('uses flexbox layout', () => {
      const { container } = render(<PressContact {...mockProps} />)
      const layout = container.querySelector('.flex.items-start.gap-4')
      expect(layout).toBeInTheDocument()
    })

    it('icon is not shrinkable', () => {
      const { container } = render(<PressContact {...mockProps} />)
      const iconWrapper = container.querySelector('.flex-shrink-0')
      expect(iconWrapper).toBeInTheDocument()
    })

    it('content area is flexible', () => {
      const { container } = render(<PressContact {...mockProps} />)
      const contentArea = container.querySelector('.flex-1')
      expect(contentArea).toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    it('handles short title', () => {
      const shortTitle = { ...mockProps, title: 'Press' }
      render(<PressContact {...shortTitle} />)
      expect(screen.getByText('Press')).toBeInTheDocument()
    })

    it('handles long title', () => {
      const longTitle = {
        ...mockProps,
        title: 'Press Enquiries and Media Relations Contact Information',
      }
      render(<PressContact {...longTitle} />)
      expect(screen.getByText(longTitle.title)).toBeInTheDocument()
    })

    it('handles long description', () => {
      const longDesc = {
        ...mockProps,
        description:
          'For media requests, interview opportunities, partnership enquiries, press releases, additional information, or any other media-related questions, please feel free to contact us at the email address below.',
      }
      render(<PressContact {...longDesc} />)
      expect(screen.getByText(longDesc.description)).toBeInTheDocument()
    })

    it('handles different email format', () => {
      const differentEmail = { ...mockProps, email: 'press@example.com' }
      render(<PressContact {...differentEmail} />)
      const emailLink = screen.getByText('press@example.com')
      expect(emailLink).toHaveAttribute('href', 'mailto:press@example.com')
    })
  })

  describe('Accessibility', () => {
    it('email link is keyboard accessible', () => {
      render(<PressContact {...mockProps} />)
      const emailLink = screen.getByText(mockProps.email)
      expect(emailLink.tagName).toBe('A')
    })

    it('has semantic HTML structure', () => {
      const { container } = render(<PressContact {...mockProps} />)
      expect(container.querySelector('h2')).toBeInTheDocument()
      expect(container.querySelector('a[href^="mailto:"]')).toBeInTheDocument()
    })

    it('heading has accessible text', () => {
      render(<PressContact {...mockProps} />)
      const heading = screen.getByRole('heading', { name: mockProps.title })
      expect(heading).toBeInTheDocument()
    })
  })
})
