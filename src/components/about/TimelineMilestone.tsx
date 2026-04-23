'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

interface TimelineMilestoneProps {
  milestone: {
    year: string
    title: string
    description: string
  }
  index: number
}

export function TimelineMilestone({ milestone, index }: TimelineMilestoneProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative"
    >
      {/* Milestone Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8102E]/20 hover:shadow-lg md:p-8">
        {/* Year Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EDE4D8] px-4 py-2">
          <Calendar className="h-4 w-4 text-[#C8102E]" />
          <span className="text-sm font-semibold text-[#1C1C1E]">{milestone.year}</span>
        </div>

        {/* Title */}
        <h4 className="mb-3 text-xl font-bold text-[#1C1C1E] md:text-2xl">{milestone.title}</h4>

        {/* Description */}
        <p className="text-base leading-relaxed text-gray-700 md:text-lg">
          {milestone.description}
        </p>
      </div>
    </motion.div>
  )
}
