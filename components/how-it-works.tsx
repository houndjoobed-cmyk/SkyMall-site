'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/language-context'
import { cardVariants, containerVariants, sectionVariants } from '@/lib/motion'

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section id="how" className="scroll-mt-16 bg-white px-5 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="font-inter text-[11px] font-bold tracking-[3px] text-gold-dark">
          {t.how.label}
        </p>
        <h2 className="mt-3 font-syne text-3xl font-extrabold text-[#0A0A0A] text-balance sm:text-4xl">
          {t.how.title}
        </h2>
        <p className="mx-auto mt-4 max-w-[480px] font-inter text-base text-[#777777] text-pretty">
          {t.how.sub}
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={containerVariants}
        className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2"
      >
        {t.how.steps.map((step) => (
          <motion.div
            key={step.num}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="group rounded-xl border border-l-[3px] border-[#EBEBEB] border-l-[#EBEBEB] bg-white p-8 transition-colors duration-200 hover:border-l-gold hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]"
          >
            <span className="inline-block rounded-md bg-gold-dark/[0.08] px-2.5 py-1 font-syne text-[11px] tracking-[2px] text-gold-dark">
              {step.num}
            </span>
            <div
              className="mt-4 text-[32px] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
              aria-hidden="true"
            >
              {step.icon}
            </div>
            <h3 className="mt-3 font-syne text-[17px] font-bold text-[#0A0A0A]">
              {step.title}
            </h3>
            <p className="mt-2 font-inter text-sm leading-[1.65] text-[#666666]">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
