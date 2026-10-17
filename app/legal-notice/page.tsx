'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/context/language-context'
import { legalInfo } from '@/lib/legal-info'

export default function LegalNoticePage() {
  const { t, lang } = useLanguage()
  const labels = t.legal.labels

  // A row is shown only when its value is filled in (see lib/legal-info.ts).
  const rows: { label: string; value: string }[] = [
    { label: labels.brand, value: legalInfo.brand },
    { label: labels.companyName, value: legalInfo.companyName },
    { label: labels.legalForm, value: legalInfo.legalForm },
    { label: labels.registrationNumber, value: legalInfo.registrationNumber },
    { label: labels.headOffice, value: legalInfo.headOffice[lang] },
    { label: labels.publicationDirector, value: legalInfo.publicationDirector },
    { label: labels.email, value: legalInfo.email },
  ].filter((row) => row.value.trim() !== '')

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 pt-32 pb-20 px-[5%]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-extrabold text-[#0A0A0A] mb-4">
              {t.legal.title}
            </h1>
            <p className="font-inter text-[#0A0A0A]/60">{t.legal.lastUpdated}</p>
          </div>

          <div className="space-y-8">
            <div className="bg-surface p-8 rounded-2xl" data-testid="legal-publisher">
              <h2 className="font-playfair text-xl font-bold text-brand-primary mb-4">
                {t.legal.publisherTitle}
              </h2>
              <dl className="space-y-3">
                {rows.map((row) => (
                  <div key={row.label} className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-inter text-[15px] font-semibold text-[#0A0A0A] sm:w-56 shrink-0">
                      {row.label}
                    </dt>
                    <dd className="font-inter text-[15px] text-[#0A0A0A]/80 break-words">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {t.legal.content.map((section, index) => (
              <div key={index} className="bg-surface p-8 rounded-2xl">
                <h2 className="font-playfair text-xl font-bold text-brand-primary mb-3">
                  {section.title}
                </h2>
                <p className="font-inter text-[15px] leading-relaxed text-[#0A0A0A]/80">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
