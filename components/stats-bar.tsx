'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/language-context'
import { useCountUp } from '@/hooks/use-count-up'

function CountStat({ value, active }: { value: string; active: boolean }) {
  // "3" -> counts 0->3 ; "2026" -> counts 1990->2026 ; others render as-is
  const isNumeric = /^\d+$/.test(value)
  const target = isNumeric ? parseInt(value, 10) : 0
  const from = value === '2026' ? 1990 : 0
  const duration = value === '2026' ? 1500 : 1200
  const count = useCountUp(target, duration, from, active && isNumeric)

  return <>{isNumeric ? count : value}</>
}

export function StatsBar() {
  const { t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#0A0A0A] py-12" ref={ref}>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 md:grid-cols-4">
        {t.stats.items.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            className={`flex flex-col items-center text-center md:border-r md:border-white/10 ${
              i === t.stats.items.length - 1 ? 'md:border-r-0' : ''
            }`}
          >
            <span className="font-syne text-3xl font-extrabold text-gold sm:text-4xl md:text-5xl">
              <CountStat value={stat.value} active={inView} />
            </span>
            <span className="mt-1 font-inter text-[13px] text-white/50">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
