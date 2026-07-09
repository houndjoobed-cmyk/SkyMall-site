'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/context/language-context'

export function Hero() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()

  const lines = [
    { text: t.hero.line1, gold: false },
    { text: t.hero.line2, gold: false },
    { text: t.hero.line3, gold: true },
  ]

  let wordIndex = 0

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-5 pt-20"
    >
      <motion.span
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="mb-8 inline-flex items-center rounded-full border border-[#0A0A0A] px-4 py-1.5 font-inter text-xs font-semibold text-[#0A0A0A]"
      >
        {t.hero.badge}
      </motion.span>

      <h1 className="text-balance text-center font-syne text-[clamp(30px,8.5vw,80px)] font-extrabold leading-[1.05] tracking-tight text-[#0A0A0A]">
        {lines.map((line, li) => (
          <span key={li} className="block">
            {line.text.split(' ').map((word) => {
              const delay = wordIndex * 0.08
              wordIndex += 1
              return (
                <motion.span
                  key={`${word}-${wordIndex}`}
                  initial={reduce ? false : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay }}
                  className={`mr-[0.22em] inline-block ${line.gold ? 'text-gold' : ''}`}
                >
                  {word}
                </motion.span>
              )
            })}
          </span>
        ))}
      </h1>

      <div className="mx-auto my-6 h-px w-[120px] bg-[#E5E5E5]" />

      <motion.p
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-[560px] text-center font-inter text-lg leading-[1.7] text-[#555555] text-pretty"
      >
        {t.hero.sub}
      </motion.p>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
      >
        <motion.a
          href="#waitlist"
          whileHover={reduce ? undefined : { y: -3 }}
          whileTap={reduce ? undefined : { scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="rounded-lg bg-[#0A0A0A] px-8 py-3.5 font-syne text-[15px] font-bold text-gold transition-colors duration-200 hover:bg-gold hover:text-[#0A0A0A]"
        >
          {t.hero.cta1}
        </motion.a>
        <motion.a
          href="#for-whom"
          whileHover={reduce ? undefined : { y: -3 }}
          whileTap={reduce ? undefined : { scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="rounded-lg border-[1.5px] border-[#0A0A0A] bg-transparent px-8 py-3.5 font-syne text-[15px] text-[#0A0A0A] transition-colors duration-200 hover:bg-[#0A0A0A] hover:text-white"
        >
          {t.hero.cta2}
        </motion.a>
      </motion.div>

      <div className="relative z-10 mt-10 flex flex-col items-center gap-3">
        <span className="font-inter text-xs text-[#999999]">{t.hero.flagLabel}</span>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { flag: '🇧🇯', name: 'Bénin' },
            { flag: '🇨🇲', name: 'Cameroun' },
            { flag: '🇨🇮', name: "Côte d'Ivoire" },
          ].map((c, i) => (
            <motion.span
              key={c.name}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
              className="relative z-10 flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-3.5 py-1.5 font-inter text-[13px] text-[#0A0A0A]"
            >
              <span aria-hidden="true">{c.flag}</span>
              {c.name}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.span
        aria-hidden="true"
        animate={reduce ? undefined : { y: [0, -14, 0] }}
        transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
        className="pointer-events-none absolute -bottom-6 left-1/2 z-0 -translate-x-1/2 select-none whitespace-nowrap font-syne text-[clamp(80px,15vw,180px)] font-extrabold leading-none tracking-[-4px] text-transparent"
        style={{ WebkitTextStroke: '1px #EBEBEB' }}
      >
        SKYMALL
      </motion.span>

      <motion.a
        href="#how"
        aria-label={t.hero.flagLabel}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, ease: 'easeInOut', repeat: Infinity }}
          className="flex h-9 w-6 items-start justify-center rounded-full border-[1.5px] border-[#CFCFCF] p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-[#9A9A9A]" />
        </motion.span>
      </motion.a>
    </section>
  )
}
