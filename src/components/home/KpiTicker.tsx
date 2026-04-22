'use client'

import { useEffect } from 'react'
import { useCountUp } from '@/hooks/useCountUp'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface Kpi {
  value: number
  label: string
  prefix?: string
  suffix?: string
}

interface KpiTickerProps {
  kpis: Kpi[]
}

function KpiCard({ kpi }: { kpi: Kpi }) {
  const counter = useCountUp({
    end: kpi.value,
    duration: 2000,
    prefix: kpi.prefix,
    suffix: kpi.suffix,
  })

  const { ref, isInView } = useScrollAnimation({ threshold: 0.3 })

  useEffect(() => {
    if (isInView && !counter.hasAnimated) {
      counter.animate()
    }
  }, [isInView, counter])

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="text-5xl md:text-6xl font-bold text-white mb-3">
        {counter.value}
      </div>
      <div className="text-sm text-gray-400 leading-relaxed max-w-xs">
        {kpi.label}
      </div>
    </div>
  )
}

export function KpiTicker({ kpis }: KpiTickerProps) {
  return (
    <section className="bg-[#1C1C1E] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi, index) => (
            <KpiCard key={index} kpi={kpi} />
          ))}
        </div>
      </div>
    </section>
  )
}
