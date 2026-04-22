'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface FooterCtaProps {
  headline: string
  subtext: string
  ctaText: string
  ctaLink: string
}

export function FooterCta({ headline, subtext, ctaText, ctaLink }: FooterCtaProps) {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1E] mb-4">
            {headline}
          </h2>
          <p className="text-lg text-[#1C1C1E]/70 mb-8 max-w-2xl mx-auto">
            {subtext}
          </p>
          <Link
            href={ctaLink}
            className="inline-block rounded-md bg-[#C8102E] px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-[#A00D24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8102E] transition-all duration-200 hover:scale-105"
          >
            {ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
