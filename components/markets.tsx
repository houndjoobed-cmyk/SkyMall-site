'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/language-context'
import { cardVariants, containerVariants, sectionVariants } from '@/lib/motion'

export function Markets() {
  const { t } = useLanguage()

  return (
    <section id="markets" className="scroll-mt-16 bg-[#0A0A0A] px-[5%] py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="font-inter text-[11px] font-bold tracking-[3px] text-gold/50">
          {t.markets.label}
        </p>
        <h2 className="mt-3 font-syne text-3xl font-extrabold text-white text-balance sm:text-4xl">
          {t.markets.title}
        </h2>
        <p className="mx-auto mt-4 max-w-[480px] font-inter text-base text-white/45 text-pretty">
          {t.markets.sub}
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={containerVariants}
        className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3"
      >
        {t.markets.cards.map((card) => (
          <motion.div
            key={card.name}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="group rounded-xl border border-white/[0.08] bg-white/[0.03] p-8 transition-colors duration-200 hover:border-gold/35 hover:bg-gold/[0.03]"
          >
            <div
              className="text-[40px] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
              aria-hidden="true"
            >
              {card.flag}
            </div>
            <h3 className="mt-4 font-syne text-xl font-bold text-white">
              {card.name}
            </h3>
            <p className="mt-2 font-inter text-[13px] leading-[1.7] text-white/45">
              {card.info}
            </p>
            <span className="mt-[18px] inline-block rounded-full border border-gold/20 bg-gold/10 px-3.5 py-1 font-inter text-[11px] font-bold tracking-[0.5px] text-gold">
              {card.badge}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
