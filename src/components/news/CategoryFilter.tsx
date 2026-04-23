import { cn } from '@/lib/utils'

type Category = 'All' | 'Company News' | 'Press Release' | 'Industry Insights' | 'Media Coverage'

interface CategoryFilterProps {
  selectedCategory: Category
  onFilterChange: (category: Category) => void
}

const categories: Category[] = [
  'All',
  'Company News',
  'Press Release',
  'Industry Insights',
  'Media Coverage',
]

export function CategoryFilter({ selectedCategory, onFilterChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => {
        const isSelected = selectedCategory === category

        return (
          <button
            key={category}
            onClick={() => onFilterChange(category)}
            className={cn(
              'rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200',
              'border-2 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2',
              isSelected
                ? 'border-[#C8102E] bg-[#C8102E] text-white shadow-md'
                : 'border-gray-300 bg-white text-gray-700 hover:border-[#C8102E]'
            )}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}
