'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/context/language-context'

export default function AccountDeletionPage() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', contact: '', reason: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/account-deletion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', contact: '', reason: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 pt-32 pb-20 px-[5%]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-extrabold text-[#0A0A0A] mb-4">
              {t.accountDeletion.title}
            </h1>
            <p className="font-inter text-[#0A0A0A]/60 text-lg">
              {t.accountDeletion.sub}
            </p>
          </div>

          {/* Fastest path: in-app self-service deletion */}
          <div className="bg-surface p-8 rounded-2xl mb-6">
            <h2 className="font-playfair text-xl font-bold text-brand-primary mb-3">
              {t.accountDeletion.fastestTitle}
            </h2>
            <p className="font-inter text-[15px] leading-relaxed text-[#0A0A0A]/80">
              {t.accountDeletion.fastestText}
            </p>
          </div>

          {/* Web request form, for anyone without the app installed */}
          <div className="bg-surface p-8 rounded-2xl mb-6">
            <h2 className="font-playfair text-xl font-bold text-brand-primary mb-1">
              {t.accountDeletion.formTitle}
            </h2>
            <p className="font-inter text-[14px] text-[#0A0A0A]/60 mb-6">
              {t.accountDeletion.formSub}
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block font-inter text-sm font-semibold text-[#0A0A0A] mb-2">
                  {t.accountDeletion.form.name}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-[#DCDCDC] rounded-lg px-4 py-3 font-inter text-[15px] text-[#0A0A0A] focus:outline-none focus:border-primary transition-colors"
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div>
                <label className="block font-inter text-sm font-semibold text-[#0A0A0A] mb-2">
                  {t.accountDeletion.form.contact}
                </label>
                <input
                  type="text"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full bg-white border border-[#DCDCDC] rounded-lg px-4 py-3 font-inter text-[15px] text-[#0A0A0A] focus:outline-none focus:border-primary transition-colors"
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div>
                <label className="block font-inter text-sm font-semibold text-[#0A0A0A] mb-2">
                  {t.accountDeletion.form.reason}
                </label>
                <textarea
                  rows={3}
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full bg-white border border-[#DCDCDC] rounded-lg px-4 py-3 font-inter text-[15px] text-[#0A0A0A] focus:outline-none focus:border-primary transition-colors resize-none"
                  disabled={status === 'loading'}
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg font-inter text-sm">
                  {t.accountDeletion.form.success}
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg font-inter text-sm">
                  Une erreur est survenue lors de l'envoi de la demande. Veuillez réessayer.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-primary text-primary-foreground font-playfair font-bold text-[15px] py-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></span>
                    ...
                  </>
                ) : (
                  t.accountDeletion.form.submit
                )}
              </button>
            </form>
          </div>

          {/* What gets deleted vs retained */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface p-8 rounded-2xl">
              <h2 className="font-playfair text-xl font-bold text-brand-primary mb-3">
                {t.accountDeletion.whatTitle}
              </h2>
              <ul className="space-y-2">
                {t.accountDeletion.what.map((line, index) => (
                  <li key={index} className="font-inter text-[15px] leading-relaxed text-[#0A0A0A]/80 flex gap-2">
                    <span className="text-gold shrink-0">•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface p-8 rounded-2xl">
              <h2 className="font-playfair text-xl font-bold text-brand-primary mb-3">
                {t.accountDeletion.retainTitle}
              </h2>
              <p className="font-inter text-[15px] leading-relaxed text-[#0A0A0A]/80">
                {t.accountDeletion.retainText}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
