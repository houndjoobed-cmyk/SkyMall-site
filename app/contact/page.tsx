'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/context/language-context'

export default function ContactPage() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
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
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-extrabold text-[#0A0A0A] mb-4">
              {t.contact.title}
            </h1>
            <p className="font-inter text-[#0A0A0A]/60 text-lg">
              {t.contact.sub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-surface p-8 rounded-2xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-inter text-sm font-semibold text-[#0A0A0A] mb-2">
                    {t.contact.form.name}
                  </label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white border border-[#DCDCDC] rounded-lg px-4 py-3 font-inter text-[15px] text-[#0A0A0A] focus:outline-none focus:border-primary transition-colors"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div>
                  <label className="block font-inter text-sm font-semibold text-[#0A0A0A] mb-2">
                    {t.contact.form.email}
                  </label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white border border-[#DCDCDC] rounded-lg px-4 py-3 font-inter text-[15px] text-[#0A0A0A] focus:outline-none focus:border-primary transition-colors"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div>
                  <label className="block font-inter text-sm font-semibold text-[#0A0A0A] mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white border border-[#DCDCDC] rounded-lg px-4 py-3 font-inter text-[15px] text-[#0A0A0A] focus:outline-none focus:border-primary transition-colors resize-none"
                    required
                    disabled={status === 'loading'}
                  ></textarea>
                </div>
                
                {status === 'success' && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-lg font-inter text-sm">
                    {t.contact.form.success}
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-lg font-inter text-sm">
                    Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.
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
                      Envoi...
                    </>
                  ) : (
                    t.contact.form.submit
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-primary mb-2">
                    {t.contact.info.title}
                  </h3>
                  <div className="w-12 h-1 bg-gold rounded-full"></div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center shrink-0 group cursor-pointer transition-colors hover:bg-gold/10">
                    <svg className="w-5 h-5 text-primary transition-colors group-hover:text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-inter text-sm font-semibold text-[#0A0A0A] mb-1">Email</p>
                    <a href={`mailto:${t.contact.info.email}`} className="font-inter text-[15px] text-[#0A0A0A]/70 hover:text-primary transition-colors">
                      {t.contact.info.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center shrink-0 group cursor-pointer transition-colors hover:bg-gold/10">
                    <svg className="w-5 h-5 text-primary transition-colors group-hover:text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-inter text-sm font-semibold text-[#0A0A0A] mb-1">Siège social</p>
                    <p className="font-inter text-[15px] text-[#0A0A0A]/70">
                      {t.contact.info.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
