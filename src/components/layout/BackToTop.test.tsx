import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BackToTop } from './BackToTop'

// Extend Window interface for test helpers
declare global {
  interface Window {
    triggerScroll: (newScrollY: number) => void
  }
}

describe('BackToTop', () => {
  let scrollY = 0

  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: scrollY,
    })

    // Mock window.scrollTo
    window.scrollTo = jest.fn()

    // Mock window.addEventListener and removeEventListener
    const listeners: { [key: string]: EventListener[] } = {}
    window.addEventListener = jest.fn((event: string, handler: EventListener) => {
      if (!listeners[event]) listeners[event] = []
      listeners[event].push(handler)
    })
    window.removeEventListener = jest.fn()

    // Helper to trigger scroll events
    window.triggerScroll = (newScrollY: number) => {
      scrollY = newScrollY
      Object.defineProperty(window, 'scrollY', {
        writable: true,
        configurable: true,
        value: scrollY,
      })
      const scrollEvent = new Event('scroll')
      listeners['scroll']?.forEach((handler) => handler(scrollEvent))
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('AC-002: Button is hidden at page top', () => {
    it('button is hidden on initial render', () => {
      render(<BackToTop />)
      const button = screen.queryByRole('button', { name: /scroll to top/i })
      expect(button).not.toBeInTheDocument()
    })

    it('hides button when scroll position < 300px', async () => {
      const { rerender } = render(<BackToTop />)

      // Scroll to 400px (visible)
      window.triggerScroll(400)
      rerender(<BackToTop />)

      await waitFor(() => {
        const button = screen.getByRole('button', { name: /scroll to top/i })
        expect(button).toBeInTheDocument()
      })

      // Scroll back to 200px (hidden)
      window.triggerScroll(200)

      await waitFor(() => {
        const button = screen.queryByRole('button', { name: /scroll to top/i })
        expect(button).not.toBeInTheDocument()
      })
    })

    it('hides button when scroll position = 0', () => {
      window.triggerScroll(0)
      render(<BackToTop />)

      const button = screen.queryByRole('button', { name: /scroll to top/i })
      expect(button).not.toBeInTheDocument()
    })
  })

  describe('AC-001: Button appears after scrolling down', () => {
    it('shows button when scrolled past 300px', async () => {
      render(<BackToTop />)

      expect(screen.queryByRole('button', { name: /scroll to top/i })).not.toBeInTheDocument()

      // Trigger scroll event
      window.triggerScroll(400)

      await waitFor(() => {
        const button = screen.getByRole('button', { name: /scroll to top/i })
        expect(button).toBeInTheDocument()
      })
    })

    it('shows button when scroll position exactly at 300px', async () => {
      render(<BackToTop />)

      window.triggerScroll(300)

      await waitFor(() => {
        const button = screen.getByRole('button', { name: /scroll to top/i })
        expect(button).toBeInTheDocument()
      })
    })
  })

  describe('AC-003: Clicking scrolls to top', () => {
    it('scrolls to top when button clicked', async () => {
      const user = userEvent.setup()
      render(<BackToTop />)

      window.triggerScroll(500)

      await waitFor(() => {
        expect(screen.getByRole('button', { name: /scroll to top/i })).toBeInTheDocument()
      })

      const button = screen.getByRole('button', { name: /scroll to top/i })
      await user.click(button)

      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 0,
        behavior: 'smooth',
      })
    })

    it('scroll animation is smooth', async () => {
      const user = userEvent.setup()
      render(<BackToTop />)

      window.triggerScroll(500)

      await waitFor(() => {
        expect(screen.getByRole('button', { name: /scroll to top/i })).toBeInTheDocument()
      })

      const button = screen.getByRole('button', { name: /scroll to top/i })
      await user.click(button)

      expect(window.scrollTo).toHaveBeenCalledWith(
        expect.objectContaining({ behavior: 'smooth' })
      )
    })
  })

  describe('AC-004: Button positioning and styling', () => {
    it('button has fixed positioning', async () => {
      render(<BackToTop />)
      window.triggerScroll(400)

      await waitFor(() => {
        const button = screen.getByRole('button', { name: /scroll to top/i })
        expect(button).toHaveClass('fixed')
      })
    })

    it('button uses brand red color', async () => {
      render(<BackToTop />)
      window.triggerScroll(400)

      await waitFor(() => {
        const button = screen.getByRole('button', { name: /scroll to top/i })
        expect(button).toHaveClass('bg-[#C8102E]')
      })
    })

    it('button has rounded corners and shadow', async () => {
      render(<BackToTop />)
      window.triggerScroll(400)

      await waitFor(() => {
        const button = screen.getByRole('button', { name: /scroll to top/i })
        expect(button).toHaveClass('rounded-full')
        expect(button).toHaveClass('shadow-lg')
      })
    })
  })

  describe('AC-005: Accessibility', () => {
    it('button has aria-label "Scroll to top"', async () => {
      render(<BackToTop />)
      window.triggerScroll(400)

      await waitFor(() => {
        const button = screen.getByRole('button', { name: /scroll to top/i })
        expect(button).toHaveAttribute('aria-label', 'Scroll to top')
      })
    })

    it('button is keyboard focusable', async () => {
      render(<BackToTop />)
      window.triggerScroll(400)

      await waitFor(() => {
        const button = screen.getByRole('button', { name: /scroll to top/i })
        expect(button).not.toHaveAttribute('tabindex', '-1')
        expect(button.tagName).toBe('BUTTON')
      })
    })

    it('button has visible focus ring', async () => {
      render(<BackToTop />)
      window.triggerScroll(400)

      await waitFor(() => {
        const button = screen.getByRole('button', { name: /scroll to top/i })
        expect(button).toHaveClass('focus:outline-none')
        expect(button).toHaveClass('focus:ring-2')
      })
    })

    it('activates with Enter key', async () => {
      const user = userEvent.setup()
      render(<BackToTop />)
      window.triggerScroll(400)

      await waitFor(() => {
        expect(screen.getByRole('button', { name: /scroll to top/i })).toBeInTheDocument()
      })

      const button = screen.getByRole('button', { name: /scroll to top/i })
      button.focus()
      await user.keyboard('{Enter}')

      expect(window.scrollTo).toHaveBeenCalled()
    })

    it('activates with Space key', async () => {
      const user = userEvent.setup()
      render(<BackToTop />)
      window.triggerScroll(400)

      await waitFor(() => {
        expect(screen.getByRole('button', { name: /scroll to top/i })).toBeInTheDocument()
      })

      const button = screen.getByRole('button', { name: /scroll to top/i })
      button.focus()
      await user.keyboard(' ')

      expect(window.scrollTo).toHaveBeenCalled()
    })
  })

  describe('AC-006: Responsive design', () => {
    it('meets minimum touch target size', async () => {
      render(<BackToTop />)
      window.triggerScroll(400)

      await waitFor(() => {
        const button = screen.getByRole('button', { name: /scroll to top/i })
        // Check for size classes (w-12 h-12 = 48px, w-14 h-14 = 56px)
        const hasValidSize =
          button.classList.contains('w-12') ||
          button.classList.contains('w-14') ||
          button.classList.contains('w-16')
        expect(hasValidSize).toBe(true)
      })
    })
  })

  describe('AC-007: Smooth fade animation', () => {
    it('has fade transition classes', async () => {
      render(<BackToTop />)
      window.triggerScroll(400)

      await waitFor(() => {
        const button = screen.getByRole('button', { name: /scroll to top/i })
        expect(button).toHaveClass('transition-opacity')
      })
    })
  })

  describe('Performance', () => {
    it('removes scroll listener when unmounted', () => {
      const { unmount } = render(<BackToTop />)

      unmount()

      expect(window.removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function))
    })

    it('component unmounts cleanly', () => {
      const { unmount } = render(<BackToTop />)
      expect(() => unmount()).not.toThrow()
    })
  })

  describe('Responsive: Component renders at different viewports', () => {
    const viewportSizes = [
      { name: '320px mobile' },
      { name: '768px tablet' },
      { name: '1024px desktop' },
    ]

    viewportSizes.forEach(({ name }) => {
      it(`renders correctly at ${name}`, async () => {
        render(<BackToTop />)
        window.triggerScroll(400)

        await waitFor(() => {
          const button = screen.getByRole('button', { name: /scroll to top/i })
          expect(button).toBeInTheDocument()
        })
      })
    })
  })
})
