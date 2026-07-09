'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '@/context/language-context'
import { sectionVariants } from '@/lib/motion'

export function ForWhom() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const panel = t.forWhom.panels[active]

  return (
    <section id="for-whom" className="scroll-mt-16 bg-[#F7F7F7] px-[5%] py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="font-inter text-[11px] font-bold tracking-[3px] text-gold-dark">
          {t.forWhom.label}
        </p>
        <h2 className="mt-3 font-syne text-3xl font-extrabold text-[#0A0A0A] text-balance sm:text-4xl">
          {t.forWhom.title}
        </h2>
        <p className="mx-auto mt-4 max-w-[480px] font-inter text-base text-[#777777] text-pretty">
          {t.forWhom.sub}
        </p>
      </motion.div>

      <div className="mx-auto mt-10 flex max-w-md flex-wrap justify-center gap-2">
        {t.forWhom.tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`relative rounded-full px-5 py-2 font-inter text-sm font-semibold transition-colors ${
              active === i
                ? 'text-gold'
                : 'border border-[#DCDCDC] bg-white text-[#0A0A0A] hover:border-[#0A0A0A]'
            }`}
            aria-pressed={active === i}
          >
            {active === i && (
              <motion.span
                layoutId="forWhomTab"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                className="absolute inset-0 -z-10 rounded-full bg-[#0A0A0A]"
              />
            )}
            {tab}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
          >
            <ul className="flex flex-col gap-5">
              {panel.features.map((feature, fi) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + fi * 0.08, duration: 0.4, ease: 'easeOut' }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-gold/[0.15] font-inter text-xs font-bold text-gold-dark">
                    ✓
                  </span>
                  <span className="font-inter text-[15px] leading-[1.6] text-[#0A0A0A]">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="flex min-h-[280px] flex-col justify-between rounded-2xl bg-[#0A0A0A] p-6 sm:p-9">
              <div>
                <p className="font-inter text-[11px] tracking-[2px] text-white/40">
                  {panel.card.label}
                </p>
                <p className="mt-4 font-syne text-4xl font-extrabold text-gold text-balance">
                  {panel.card.main}
                </p>
                <p className="mt-2 font-inter text-[13px] text-white/50">
                  {panel.card.sub}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {panel.card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1 font-inter text-xs text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
