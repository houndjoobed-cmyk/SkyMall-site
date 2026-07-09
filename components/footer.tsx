'use client'

import { useLanguage } from '@/context/language-context'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#0A0A0A] px-[5%] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-syne text-xl font-extrabold">
            <span className="text-white">Sky</span>
            <span className="text-gold">Mall</span>
          </p>
          <p className="mt-1 font-inter text-xs text-white/25">{t.footer.copy}</p>
        </div>

        <p className="font-inter text-[13px] text-white/30">
          {t.footer.countries}
        </p>

        <div className="flex items-center gap-5">
          {t.footer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-inter text-[13px] text-white/30 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
