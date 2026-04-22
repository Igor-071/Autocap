'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface HeroProps {
  headline: string
  subheadline: string
  backgroundImage: string
  cta1Text: string
  cta1Link: string
  cta2Text: string
  cta2Link: string
}

export function Hero({
  headline,
  subheadline,
  backgroundImage,
  cta1Text,
  cta1Link,
  cta2Text,
  cta2Link,
}: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Workshop background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
            {headline}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-3xl mx-auto sm:text-xl">
            {subheadline}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap gap-y-4">
            <Link
              href={cta1Link}
              className="rounded-md bg-[#C8102E] px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#A00D24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8102E] transition-all duration-200 hover:scale-105"
            >
              {cta1Text}
            </Link>
            <Link
              href={cta2Link}
              className="rounded-md border-2 border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              {cta2Text}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
