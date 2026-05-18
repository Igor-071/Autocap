'use client'

import { motion } from 'framer-motion'
import { COMPANY_INFO, COLORS } from '@/lib/constants'
import Image from 'next/image'

export const comingSoonMetadata = {
  title: 'AutoCap Group · Coming Soon',
  description:
    'AutoCap Group is launching soon. We acquire and operate independent tire service centres across the Nordics.',
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' as const },
  }),
}

export function ComingSoon() {
  return (
    <main
      className="min-h-screen bg-[#1C1C1E] text-white flex flex-col items-center justify-center px-6"
    >
      <div className="flex flex-col items-center text-center max-w-xl">
        {/* Logo */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <Image
            src="/logos/autocap-white.png"
            alt="AutoCap Group logo"
            width={260}
            height={80}
            className="w-[180px] md:w-[220px] lg:w-[260px] h-auto mb-10"
            priority
          />
        </motion.div>

        {/* Decorative line */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className={`h-1 w-16 bg-[${COLORS.autocapRed}] mb-8`}
          style={{ backgroundColor: COLORS.autocapRed }}
        />

        {/* Heading */}
        <motion.h1
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
        >
          Coming Soon
        </motion.h1>

        {/* Tagline */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg sm:text-xl text-white/70 mb-10"
        >
          {COMPANY_INFO.tagline}
        </motion.p>

        {/* Contact email */}
        <motion.a
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          href={`mailto:${COMPANY_INFO.email}`}
          className="text-sm sm:text-base text-white/50 hover:text-white transition-colors"
        >
          {COMPANY_INFO.email}
        </motion.a>
      </div>
    </main>
  )
}
