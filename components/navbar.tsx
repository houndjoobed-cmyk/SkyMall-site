'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage, type Lang } from '@/context/language-context'
import logo from '@/assets/logo.webp'

export function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: t.nav.howItWorks, href: '/#how' },
    { label: t.nav.forWhom, href: '/#for-whom' },
    { label: t.nav.markets, href: '/#markets' },
    { label: t.nav.join, href: '/#waitlist' },
  ]

  const solid = scrolled || open

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? 'border-b border-[#EBEBEB] bg-white/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-3 px-4 sm:px-5">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="shrink-0 flex items-center"
        >
          <Image 
            src={logo} 
            alt="SkyMall" 
            height={80} 
            priority
            className="h-20 w-auto object-contain" 
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative font-inter text-sm text-[#0A0A0A] transition-colors hover:text-gold-dark"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-dark transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex shrink-0 overflow-hidden rounded-full border border-[#DCDCDC]">
            {(['fr', 'en'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 font-inter text-xs font-semibold uppercase transition-colors sm:px-3 ${
                  lang === l
                    ? 'bg-primary text-white hover:text-gold'
                    : 'bg-white text-primary hover:text-gold'
                }`}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>

          <Link
            href="/#waitlist"
            className="hidden rounded-lg bg-primary px-4 py-2 font-playfair text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 hover:text-gold lg:inline-flex"
          >
            {t.nav.join}
          </Link>

          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-primary lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-[#EBEBEB] bg-white lg:hidden"
          >
            <ul className="flex flex-col px-4 py-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-inter text-[15px] text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="py-3">
                <Link
                  href="/#waitlist"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg bg-primary px-4 py-3 text-center font-playfair text-sm font-bold text-primary-foreground hover:text-gold"
                >
                  {t.nav.join}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
