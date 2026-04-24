'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

interface BackToTopProps {
  showAfterScroll?: number
  scrollDuration?: number
}

export function BackToTop({ showAfterScroll = 300 }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsVisible(scrollPosition >= showAfterScroll)
    }

    // Check initial scroll position
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [showAfterScroll])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#C8102E] text-white shadow-lg transition-opacity duration-300 hover:bg-[#A00D25] focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2 md:h-14 md:w-14"
    >
      <ChevronUp className="h-6 w-6" aria-hidden="true" />
    </button>
  )
}
