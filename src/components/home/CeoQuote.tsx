'use client'

import { motion } from 'framer-motion'

interface CeoQuoteProps {
  text: string
  attribution: string
  photoUrl?: string
}

export function CeoQuote({ text, attribution }: CeoQuoteProps) {
  return (
    <section className="bg-[#F5F0EB] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <blockquote>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-[#1C1C1E] mb-8">
              &ldquo;{text}&rdquo;
            </p>
            <footer className="text-lg text-[#1C1C1E]/70">
              — {attribution}
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
