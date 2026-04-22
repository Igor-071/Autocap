'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Workshop } from '@/content/workshops'

interface WorkshopCardProps {
  workshop: Workshop
  index?: number
}

export function WorkshopCard({ workshop, index = 0 }: WorkshopCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        href={`/portfolio/${workshop.slug}`}
        className="group block h-full rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="flex h-full flex-col">
          <h3 className="text-xl font-semibold text-[#1C1C1E] mb-2 group-hover:text-[#C8102E] transition-colors">
            {workshop.name}
          </h3>
          <p className="text-gray-600 mb-4">
            {workshop.city}, {workshop.region}
          </p>
          <div className="mt-auto">
            <span className="inline-flex items-center rounded-full bg-[#F5F0EB] px-3 py-1 text-sm font-medium text-[#1C1C1E]">
              Part of AutoCap Group since {workshop.yearAcquired}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
