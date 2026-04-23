import { cn } from '@/lib/utils'

type NewsCategory = 'Company News' | 'Press Release' | 'Industry Insights' | 'Media Coverage'

interface NewsCategoryBadgeProps {
  category: NewsCategory
}

const categoryStyles: Record<NewsCategory, string> = {
  'Company News': 'bg-[#C8102E] text-white',
  'Press Release': 'bg-[#1C1C1E] text-white',
  'Industry Insights': 'bg-[#D8E4DC] text-[#1C1C1E]',
  'Media Coverage': 'bg-[#F0DADA] text-[#1C1C1E]',
}

export function NewsCategoryBadge({ category }: NewsCategoryBadgeProps) {
  return (
    <span
      className={cn(
        'px-3 py-1 rounded-full text-xs font-semibold',
        categoryStyles[category]
      )}
    >
      {category}
    </span>
  )
}
