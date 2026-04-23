import Link from 'next/link'

export default function WorkshopNotFound() {
  return (
    <div className="bg-white min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#1C1C1E] mb-4">
          Workshop not found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This workshop page doesn&apos;t exist. View our complete portfolio.
        </p>
        <Link
          href="/portfolio"
          className="inline-block rounded-md bg-[#C8102E] px-8 py-3 text-base font-semibold text-white hover:bg-[#A00D24] transition-colors"
        >
          View Portfolio
        </Link>
      </div>
    </div>
  )
}
