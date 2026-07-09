'use client'

import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '@/context/language-context'
import { sectionVariants } from '@/lib/motion'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Waitlist() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setStatus('error')
      return
    }
    
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() })
      })

      if (res.ok) {
        setStatus('success')
        setEmail('') // Clear the input after success
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="waitlist" className="relative scroll-mt-16 overflow-hidden bg-white px-[5%] py-28">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-syne text-[clamp(60px,12vw,140px)] font-extrabold leading-none text-transparent"
        style={{ WebkitTextStroke: '1px #EBEBEB' }}
      >
        JOIN US
      </span>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <h2 className="mx-auto max-w-[600px] font-syne text-[clamp(28px,4vw,48px)] font-extrabold text-[#0A0A0A] text-balance">
          {t.waitlist.title}
        </h2>
        <p className="mx-auto mt-4 max-w-[480px] font-inter text-base text-[#777777] text-pretty">
          {t.waitlist.sub}
        </p>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-10 flex max-w-[500px] flex-col gap-2.5 sm:flex-row"
          noValidate
        >
          <motion.input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status !== 'idle') setStatus('idle')
            }}
            placeholder={t.waitlist.placeholder}
            aria-label={t.waitlist.placeholder}
            aria-invalid={status === 'error'}
            animate={
              status === 'error'
                ? { x: [0, -8, 8, -6, 6, 0] }
                : { x: 0 }
            }
            transition={{ duration: 0.4 }}
            disabled={status === 'loading' || status === 'success'}
            className={`h-[52px] flex-1 rounded-[10px] border-[1.5px] bg-white px-[18px] font-inter text-[15px] text-[#0A0A0A] outline-none transition-colors placeholder:text-[#AAAAAA] focus:border-[#0A0A0A] disabled:opacity-50 ${
              status === 'error' ? 'border-red-500' : 'border-[#DCDCDC]'
            }`}
          />
          <AnimatePresence mode="wait" initial={false}>
            {status === 'success' ? (
              <motion.span
                key="success"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex h-[52px] items-center justify-center whitespace-nowrap rounded-[10px] bg-green-600 px-7 font-syne text-[15px] font-bold text-white"
              >
                {t.waitlist.success}
              </motion.span>
            ) : (
              <motion.button
                key="submit"
                type="submit"
                initial={false}
                className="h-[52px] whitespace-nowrap rounded-[10px] bg-[#0A0A0A] px-7 font-syne text-[15px] font-bold text-white transition-colors duration-200 hover:bg-gold hover:text-[#0A0A0A] disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Patientez...
                  </>
                ) : (
                  t.waitlist.submit
                )}
              </motion.button>
            )}
          </AnimatePresence>
        </form>

        <p className="mt-4 font-inter text-[13px] text-[#AAAAAA]">
          {t.waitlist.trust}
        </p>
      </motion.div>
    </section>
  )
}
