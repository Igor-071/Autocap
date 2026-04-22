import { WorkshopCard } from './WorkshopCard'
import type { Workshop } from '@/content/workshops'

interface WorkshopGridProps {
  workshops: Workshop[]
}

export function WorkshopGrid({ workshops }: WorkshopGridProps) {
  return (
    <section className="bg-[#E4E2DE] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop, index) => (
            <WorkshopCard key={workshop.id} workshop={workshop} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
