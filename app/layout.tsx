import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/language-context'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'SkyMall — Votre marché, partout en Afrique',
  description:
    'SkyMall connecte acheteurs et vendeurs au Bénin, Cameroun et en Côte d\'Ivoire — paiements mobile, livraison locale, confiance garantie. Lancement septembre 2026.',
  generator: 'v0.app',
  openGraph: {
    title: 'SkyMall — Votre marché, partout en Afrique',
    description:
      'La marketplace mobile qui connecte acheteurs et vendeurs en Afrique de l\'Ouest.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-inter antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
