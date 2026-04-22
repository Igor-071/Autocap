import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { workshops, getWorkshopBySlug } from '@/content/workshops'

interface WorkshopDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return workshops.map((workshop) => ({
    slug: workshop.slug,
  }))
}

export async function generateMetadata({ params }: WorkshopDetailPageProps) {
  const { slug } = await params
  const workshop = getWorkshopBySlug(slug)

  if (!workshop) {
    return {
      title: 'Workshop Not Found',
    }
  }

  return {
    title: `${workshop.name} · AutoCap Group`,
    description: workshop.description,
  }
}

export default async function WorkshopDetailPage({ params }: WorkshopDetailPageProps) {
  const { slug } = await params
  const workshop = getWorkshopBySlug(slug)

  if (!workshop) {
    notFound()
  }

  return (
    <article className="bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-6 py-4 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/portfolio" className="text-gray-500 hover:text-gray-700">
                Portfolio
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">{workshop.name}</li>
          </ol>
        </div>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-20">
        {/* Back link */}
        <Link
          href="/portfolio"
          className="inline-flex items-center text-[#C8102E] hover:text-[#A00D24] mb-8 font-medium transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>

        {/* Workshop Info */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1C1C1E] mb-4">
            {workshop.name}
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            {workshop.city}, {workshop.region}
          </p>
          <span className="inline-flex items-center rounded-full bg-[#F5F0EB] px-4 py-2 text-sm font-medium text-[#1C1C1E]">
            Part of AutoCap Group since {workshop.yearAcquired}
          </span>
        </div>

        {/* Description */}
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed">
            {workshop.description}
          </p>
        </div>

        {/* Standard text from copy deck */}
        <div className="bg-[#F5F0EB] rounded-lg p-8 mb-8">
          <p className="text-gray-700 leading-relaxed">
            {workshop.name} operates independently under its own brand, serving its local community as it always has. As part of AutoCap Group, the team benefits from shared procurement, centralised support services, and access to a growing network of workshops across Sweden.
          </p>
        </div>

        {/* Website Link */}
        {workshop.localWebsite && (
          <div className="mb-12">
            <a
              href={workshop.localWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#C8102E] hover:text-[#A00D24] font-medium transition-colors"
            >
              Visit workshop website
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        )}

        {/* CTA */}
        <div className="border-t border-gray-200 pt-12">
          <div className="bg-[#D8E4DC] rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-[#1C1C1E] mb-4">
              Own a tire service workshop?
            </h2>
            <p className="text-gray-700 mb-6">
              Learn what joining AutoCap Group could mean for you.
            </p>
            <Link
              href="/entrepreneurs"
              className="inline-block rounded-md bg-[#C8102E] px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#A00D24] transition-colors"
            >
              For Entrepreneurs →
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
