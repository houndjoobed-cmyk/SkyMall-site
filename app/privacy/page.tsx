'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/context/language-context'

export default function PrivacyPage() {
  const { t } = useLanguage()

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-20 px-[5%]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-extrabold text-[#0A0A0A] mb-4">
              {t.privacy.title}
            </h1>
            <p className="font-inter text-[#0A0A0A]/60">
              {t.privacy.lastUpdated}
            </p>
          </div>

          <div className="space-y-8">
            {t.privacy.content.map((section, index) => (
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
