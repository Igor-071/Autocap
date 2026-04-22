import { WorkshopMap } from '@/components/portfolio/WorkshopMap'
import { WorkshopGrid } from '@/components/portfolio/WorkshopGrid'
import { workshops } from '@/content/workshops'

export const metadata = {
  title: 'Our Portfolio · AutoCap Group',
  description: '12 tire service workshops across Sweden. Explore AutoCap Group\'s growing portfolio.',
}

export default function PortfolioPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            AutoCap Group&apos;s portfolio spans 12 tire service centres across Sweden — from Stockholm&apos;s northern suburbs to Gothenburg&apos;s industrial zones. Every workshop keeps its local name, its team, and its customer relationships. What changes is what happens behind the scenes: shared procurement, centralised administration, and a network that makes each workshop stronger.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <WorkshopMap workshops={workshops} />
        </div>
      </section>

      {/* Workshop Grid */}
      <WorkshopGrid workshops={workshops} />
    </>
  )
}
