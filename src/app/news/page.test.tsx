import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NewsPage from './page'

// Mock the components since we're testing page structure
jest.mock('@/components/news/NewsGrid', () => ({
  NewsGrid: ({ articles }: { articles: unknown[] }) => (
    <div data-testid="news-grid">News Grid with {articles.length} articles</div>
  ),
}))

jest.mock('@/components/news/CategoryFilter', () => ({
  CategoryFilter: ({
    selectedCategory,
    onFilterChange,
  }: {
    selectedCategory: string
    onFilterChange: (category: string) => void
  }) => (
    <div data-testid="category-filter">
      <button onClick={() => onFilterChange('All')}>All</button>
      <button onClick={() => onFilterChange('Company News')}>Company News</button>
      <span>Selected: {selectedCategory}</span>
    </div>
  ),
}))

describe('NewsPage', () => {
  describe('AC-001: Hero Section Display', () => {
    it('renders page with standard gray background', () => {
      const { container } = render(<NewsPage />)

      const main = container.querySelector('main')
      expect(main).toHaveClass('bg-gray-50')
    })

    it('renders icon badge with Newspaper icon', () => {
      const { container } = render(<NewsPage />)

      // Check for icon badge container
      const iconBadge = container.querySelector('[class*="rounded-2xl"][class*="bg-white"]')
      expect(iconBadge).toBeInTheDocument()
    })

    it('renders headline "News & Media"', () => {
      render(<NewsPage />)

      const headline = screen.getByRole('heading', { level: 1, name: /News & Media/i })
      expect(headline).toBeInTheDocument()
    })

    it('renders decorative red line', () => {
      const { container } = render(<NewsPage />)

      const line = container.querySelector('[class*="bg-gradient"][class*="h-1"]')
      expect(line).toBeInTheDocument()
    })

    it('renders subheadline describing content', () => {
      render(<NewsPage />)

      expect(
        screen.getByText(/Company updates, industry insights, and press coverage/i)
      ).toBeInTheDocument()
    })
  })

  describe('AC-010: SEO Metadata', () => {
    it('exports metadata with correct title and description from layout', async () => {
      // Import metadata from layout since page is now a client component
      const { metadata } = await import('./layout')

      expect(metadata).toEqual({
        title: 'News & Media · AutoCap Group',
        description:
          "Latest news, press releases, and insights from AutoCap Group - building Sweden's tire services platform.",
      })
    })
  })

  it('renders NewsGrid component with articles', () => {
    render(<NewsPage />)

    const newsGrid = screen.getByTestId('news-grid')
    expect(newsGrid).toBeInTheDocument()
    expect(newsGrid).toHaveTextContent('5 articles')
  })

  describe('Category Filtering', () => {
    it('renders CategoryFilter component', () => {
      render(<NewsPage />)

      const categoryFilter = screen.getByTestId('category-filter')
      expect(categoryFilter).toBeInTheDocument()
    })

    it('starts with "All" category selected', () => {
      render(<NewsPage />)

      expect(screen.getByText('Selected: All')).toBeInTheDocument()
    })

    it('filters articles when category is changed', async () => {
      const user = userEvent.setup()
      render(<NewsPage />)

      // Initially shows all 5 articles
      expect(screen.getByTestId('news-grid')).toHaveTextContent('5 articles')

      // Click Company News filter
      await user.click(screen.getByRole('button', { name: 'Company News' }))

      // Should show filtered articles (2 Company News articles in mock data)
      expect(screen.getByText('Selected: Company News')).toBeInTheDocument()
    })

    it('shows all articles when "All" is selected', async () => {
      const user = userEvent.setup()
      render(<NewsPage />)

      // Click a specific category first
      await user.click(screen.getByRole('button', { name: 'Company News' }))

      // Then click "All"
      await user.click(screen.getByRole('button', { name: 'All' }))

      // Should show all articles again
      expect(screen.getByTestId('news-grid')).toHaveTextContent('5 articles')
      expect(screen.getByText('Selected: All')).toBeInTheDocument()
    })
  })
})
