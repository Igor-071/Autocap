import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: UseScrollAnimationOptions = {}) {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          setHasTriggered(true)

          if (triggerOnce) {
            observer.disconnect()
          }
        } else if (!triggerOnce && hasTriggered) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered])

  return { ref, isInView }
}
