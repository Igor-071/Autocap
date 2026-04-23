import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CategoryFilter } from './CategoryFilter'

describe('CategoryFilter', () => {
  const mockOnFilterChange = jest.fn()
  const categories = ['All', 'Company News', 'Press Release', 'Industry Insights', 'Media Coverage']

  beforeEach(() => {
    mockOnFilterChange.mockClear()
  })

  it('renders all category filter buttons', () => {
    render(<CategoryFilter selectedCategory="All" onFilterChange={mockOnFilterChange} />)

    categories.forEach((category) => {
      expect(screen.getByRole('button', { name: category })).toBeInTheDocument()
    })
  })

  it('highlights the selected category', () => {
    render(<CategoryFilter selectedCategory="Company News" onFilterChange={mockOnFilterChange} />)

    const selectedButton = screen.getByRole('button', { name: 'Company News' })
    const unselectedButton = screen.getByRole('button', { name: 'Press Release' })

    expect(selectedButton).toHaveClass('bg-[#C8102E]')
    expect(selectedButton).toHaveClass('text-white')
    expect(unselectedButton).toHaveClass('bg-white')
    expect(unselectedButton).toHaveClass('text-gray-700')
  })

  it('calls onFilterChange when a category button is clicked', async () => {
    const user = userEvent.setup()
    render(<CategoryFilter selectedCategory="All" onFilterChange={mockOnFilterChange} />)

    const pressReleaseButton = screen.getByRole('button', { name: 'Press Release' })
    await user.click(pressReleaseButton)

    expect(mockOnFilterChange).toHaveBeenCalledWith('Press Release')
    expect(mockOnFilterChange).toHaveBeenCalledTimes(1)
  })

  it('allows switching between categories', async () => {
    const user = userEvent.setup()
    render(<CategoryFilter selectedCategory="All" onFilterChange={mockOnFilterChange} />)

    await user.click(screen.getByRole('button', { name: 'Company News' }))
    expect(mockOnFilterChange).toHaveBeenCalledWith('Company News')

    await user.click(screen.getByRole('button', { name: 'Industry Insights' }))
    expect(mockOnFilterChange).toHaveBeenCalledWith('Industry Insights')

    expect(mockOnFilterChange).toHaveBeenCalledTimes(2)
  })

  it('clicking "All" calls onFilterChange with "All"', async () => {
    const user = userEvent.setup()
    render(<CategoryFilter selectedCategory="Company News" onFilterChange={mockOnFilterChange} />)

    const allButton = screen.getByRole('button', { name: 'All' })
    await user.click(allButton)

    expect(mockOnFilterChange).toHaveBeenCalledWith('All')
  })

  it('is keyboard accessible', async () => {
    const user = userEvent.setup()
    render(<CategoryFilter selectedCategory="All" onFilterChange={mockOnFilterChange} />)

    const firstButton = screen.getByRole('button', { name: 'All' })
    firstButton.focus()

    // Tab to next button
    await user.tab()
    expect(screen.getByRole('button', { name: 'Company News' })).toHaveFocus()

    // Press Enter on focused button
    await user.keyboard('{Enter}')
    expect(mockOnFilterChange).toHaveBeenCalledWith('Company News')
  })

  it('renders responsively with proper spacing', () => {
    const { container } = render(
      <CategoryFilter selectedCategory="All" onFilterChange={mockOnFilterChange} />
    )

    const filterContainer = container.firstChild
    expect(filterContainer).toHaveClass('flex')
    expect(filterContainer).toHaveClass('flex-wrap')
    expect(filterContainer).toHaveClass('gap-3')
  })
})
