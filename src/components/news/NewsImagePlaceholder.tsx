import { Newspaper } from 'lucide-react'

export function NewsImagePlaceholder() {
  return (
    <div
      className="flex h-full w-full items-center justify-center bg-[#F0DADA]"
      data-testid="photo-placeholder"
      aria-label="News article placeholder image"
    >
      <Newspaper className="h-16 w-16 text-[#1C1C1E] opacity-40" />
    </div>
  )
}
