'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

export type Lang = 'fr' | 'en'

export const translations = {
  fr: {
    nav: {
      howItWorks: 'Comment ça marche',
      forWhom: 'Pour qui',
      markets: 'Marchés',
      join: 'Rejoindre',
    },
    hero: {
      badge: '🚀 Lancement Septembre 2026',
      line1: 'Votre marché,',
      line2: 'partout en',
      line3: 'Afrique.',
      sub: "SkyMall connecte acheteurs et vendeurs au Bénin, Cameroun et en Côte d'Ivoire — paiements mobile, livraison locale, confiance garantie.",
      cta1: "Rejoindre la liste d'attente",
      cta2: 'Devenir vendeur',
      flagLabel: 'Disponible au',
    },
    stats: {
      items: [
        { value: '3', label: 'Pays couverts' },
        { value: 'Mobile', label: 'Paiement Money' },
        { value: 'FR / EN', label: 'Interface bilingue' },
        { value: '2026', label: 'Lancement officiel' },
      ],
    },
    how: {
      label: 'FONCTIONNEMENT',
      title: 'Simple. Rapide. Local.',
      sub: "Quatre étapes pour acheter et vendre en toute confiance, où que vous soyez.",
      steps: [
        {
          num: '01',
          icon: '📱',
          title: 'Connexion par téléphone',
          desc: 'Inscrivez-vous avec votre numéro local. Code OTP, pas de mot de passe.',
        },
        {
          num: '02',
          icon: '🛍️',
          title: 'Explorez et achetez',
          desc: 'Mode, électronique, beauté, maison — des milliers de produits de vendeurs vérifiés.',
        },
        {
          num: '03',
          icon: '💳',
          title: 'Payez en toute sécurité',
          desc: 'Mobile Money, carte bancaire — en XOF ou XAF selon votre pays.',
        },
        {
          num: '04',
          icon: '📦',
          title: 'Recevez et suivez',
          desc: 'Livraison plateforme ou vendeur, suivi en temps réel dans l\'app.',
        },
      ],
    },
    forWhom: {
      label: 'POUR QUI',
      title: "SkyMall, c'est pour vous.",
      sub: 'Une plateforme pensée pour chaque acteur du commerce en ligne.',
      tabs: ['Acheteurs', 'Vendeurs', 'Investisseurs'],
      panels: [
        {
          features: [
            'Accès à des milliers de produits vérifiés en un seul endroit',
            'Paiement Mobile Money intégré — MTN, Orange, Moov',
            "Chat direct avec les vendeurs avant d'acheter",
            'Suivi de commande en temps réel',
            'Interface 100% bilingue FR/EN',
          ],
          card: {
            label: 'EXPÉRIENCE ACHETEUR',
            main: 'SkyMall App',
            sub: 'iOS & Android — sept. 2026',
            tags: ['Mobile Money', 'OTP Auth', 'FR·EN', 'XOF·XAF'],
          },
        },
        {
          features: [
            'Boutique en ligne gratuite, créée en quelques minutes',
            'Dashboard : produits, commandes, revenus en temps réel',
            'Paiements automatiques — sans intermédiaire',
            'Accès simultané à 3 marchés',
            'Logistique plateforme en option',
          ],
          card: {
            label: 'PORTAIL VENDEUR',
            main: '+3 pays d\'accès',
            sub: 'Bénin · Cameroun · Côte d\'Ivoire',
            tags: ['Dashboard web', 'KYC', 'Paiements auto'],
          },
        },
        {
          features: [
            'E-commerce Afrique subsaharienne en forte croissance',
            'Modèle : commission + abonnement + livraison',
            'Infrastructure multi-pays scalable dès le lancement',
            'Équipe locale — tech, fintech, marché West Africa',
            'Lancement public sept. 2026 — roadmap claire',
          ],
          card: {
            label: 'MODÈLE ÉCONOMIQUE',
            main: '3 sources de revenus',
            sub: 'Commission · Abonnement · Livraison',
            tags: ['Scalable', 'Multi-pays', 'Tech-first'],
          },
        },
      ],
    },
    markets: {
      label: 'MARCHÉS',
      title: '3 pays. 1 plateforme.',
      sub: 'Un déploiement simultané sur trois marchés clés d\'Afrique de l\'Ouest et centrale.',
      cards: [
        {
          flag: '🇧🇯',
          name: 'Bénin',
          info: 'Cotonou & Abomey-Calavi — MTN & Moov — XOF',
          badge: 'Marché de lancement',
        },
        {
          flag: '🇨🇲',
          name: 'Cameroun',
          info: 'Douala & Yaoundé — MTN & Orange — XAF',
          badge: 'Marché de lancement',
        },
        {
          flag: '🇨🇮',
          name: "Côte d'Ivoire",
          info: 'Abidjan — Orange & MTN — XOF',
          badge: 'Marché de lancement',
        },
      ],
    },
    waitlist: {
      title: 'Soyez les premiers à essayer SkyMall.',
      sub: 'Rejoignez la liste d\'attente et obtenez un accès prioritaire dès le lancement.',
      placeholder: 'votre@email.com',
      submit: 'Je rejoins →',
      success: '✓ Inscrit !',
      error: 'Email invalide',
      trust: '🔒 Aucun spam. Accès prioritaire au lancement.',
    },
    footer: {
      copy: '© 2026 SkyMall',
      countries: 'Bénin · Cameroun · Côte d\'Ivoire',
      links: [
        { label: 'Confidentialité', href: '/privacy' },
        { label: 'Contact', href: '/contact' }
      ],
    },
    privacy: {
      title: 'Politique de Confidentialité',
      lastUpdated: 'Dernière mise à jour : 09 Juillet 2026',
      content: [
        {
          title: '1. Collecte des données',
          text: 'Nous collectons les informations que vous nous fournissez directement, notamment lors de la création d\'un compte, de l\'achat d\'un produit ou de la communication avec notre support.'
        },
        {
          title: '2. Utilisation des données',
          text: 'Vos données nous permettent de fournir, maintenir et améliorer nos services, de traiter vos transactions et de vous envoyer des notifications liées à votre compte.'
        },
        {
          title: '3. Partage des informations',
          text: 'Nous ne vendons pas vos données personnelles. Elles peuvent être partagées avec des vendeurs tiers uniquement dans le cadre de l\'exécution de vos commandes.'
        },
        {
          title: '4. Sécurité',
          text: 'Nous mettons en œuvre des mesures de sécurité pour protéger vos informations personnelles contre l\'accès non autorisé et la modification.'
        }
      ]
    },
    contact: {
      title: 'Contactez-nous',
      sub: 'Une question ? Notre équipe est là pour vous aider.',
      form: {
        name: 'Nom complet',
        email: 'Adresse email',
        message: 'Votre message',
        submit: 'Envoyer le message',
        success: 'Message envoyé avec succès !'
      },
      info: {
        title: 'Informations',
        email: 'sky.mall.0026@gmail.com',
        address: 'Cotonou, Bénin'
      }
    },
  },
  en: {
    nav: {
      howItWorks: 'How it works',
      forWhom: 'For whom',
      markets: 'Markets',
      join: 'Join',
    },
    hero: {
      badge: '🚀 September 2026 Launch',
      line1: 'Your market,',
      line2: 'everywhere in',
      line3: 'Africa.',
      sub: 'SkyMall connects buyers and sellers in Benin, Cameroon, and Ivory Coast — mobile payments, local delivery, guaranteed trust.',
      cta1: 'Join the waitlist',
      cta2: 'Become a seller',
      flagLabel: 'Available in',
    },
    stats: {
      items: [
        { value: '3', label: 'Countries covered' },
        { value: 'Mobile', label: 'Money payment' },
        { value: 'FR / EN', label: 'Bilingual interface' },
        { value: '2026', label: 'Official launch' },
      ],
    },
    how: {
      label: 'HOW IT WORKS',
      title: 'Simple. Fast. Local.',
      sub: 'Four steps to buy and sell with confidence, wherever you are.',
      steps: [
        {
          num: '01',
          icon: '📱',
          title: 'Phone sign-in',
          desc: 'Register with your local number. OTP code, no password.',
        },
        {
          num: '02',
          icon: '🛍️',
          title: 'Browse and buy',
          desc: 'Fashion, electronics, beauty, home — thousands of products from verified sellers.',
        },
        {
          num: '03',
          icon: '💳',
          title: 'Pay securely',
          desc: 'Mobile Money, bank card — in XOF or XAF depending on your country.',
        },
        {
          num: '04',
          icon: '📦',
          title: 'Receive and track',
          desc: 'Platform or seller delivery, real-time tracking in the app.',
        },
      ],
    },
    forWhom: {
      label: 'FOR WHOM',
      title: 'SkyMall is for you.',
      sub: 'A platform designed for every player in online commerce.',
      tabs: ['Buyers', 'Sellers', 'Investors'],
      panels: [
        {
          features: [
            'Access thousands of verified products in one place',
            'Integrated Mobile Money payment — MTN, Orange, Moov',
            'Chat directly with sellers before buying',
            'Real-time order tracking',
            '100% bilingual FR/EN interface',
          ],
          card: {
            label: 'BUYER EXPERIENCE',
            main: 'SkyMall App',
            sub: 'iOS & Android — Sept. 2026',
            tags: ['Mobile Money', 'OTP Auth', 'FR·EN', 'XOF·XAF'],
          },
        },
        {
          features: [
            'Free online store, created in minutes',
            'Dashboard: products, orders, revenue in real time',
            'Automatic payments — no middleman',
            'Simultaneous access to 3 markets',
            'Optional platform logistics',
          ],
          card: {
            label: 'SELLER PORTAL',
            main: '+3 country access',
            sub: 'Benin · Cameroon · Ivory Coast',
            tags: ['Web dashboard', 'KYC', 'Auto payments'],
          },
        },
        {
          features: [
            'Fast-growing sub-Saharan African e-commerce',
            'Model: commission + subscription + delivery',
            'Scalable multi-country infrastructure from launch',
            'Local team — tech, fintech, West Africa market',
            'Public launch Sept. 2026 — clear roadmap',
          ],
          card: {
            label: 'BUSINESS MODEL',
            main: '3 revenue streams',
            sub: 'Commission · Subscription · Delivery',
            tags: ['Scalable', 'Multi-country', 'Tech-first'],
          },
        },
      ],
    },
    markets: {
      label: 'MARKETS',
      title: '3 countries. 1 platform.',
      sub: 'A simultaneous rollout across three key West and Central African markets.',
      cards: [
        {
          flag: '🇧🇯',
          name: 'Benin',
          info: 'Cotonou & Abomey-Calavi — MTN & Moov — XOF',
          badge: 'Launch market',
        },
        {
          flag: '🇨🇲',
          name: 'Cameroon',
          info: 'Douala & Yaoundé — MTN & Orange — XAF',
          badge: 'Launch market',
        },
        {
          flag: '🇨🇮',
          name: 'Ivory Coast',
          info: 'Abidjan — Orange & MTN — XOF',
          badge: 'Launch market',
        },
      ],
    },
    waitlist: {
      title: 'Be the first to try SkyMall.',
      sub: 'Join the waitlist and get priority access at launch.',
      placeholder: 'your@email.com',
      submit: "I'm in →",
      success: '✓ Joined!',
      error: 'Invalid email',
      trust: '🔒 No spam. Priority access at launch.',
    },
    footer: {
      copy: '© 2026 SkyMall',
      countries: 'Benin · Cameroon · Ivory Coast',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Contact', href: '/contact' }
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: July 09, 2026',
      content: [
        {
          title: '1. Data Collection',
          text: 'We collect information you provide directly to us, such as when you create an account, make a purchase, or contact our support.'
        },
        {
          title: '2. Data Usage',
          text: 'Your data allows us to provide, maintain, and improve our services, process your transactions, and send you account-related notifications.'
        },
        {
          title: '3. Information Sharing',
          text: 'We do not sell your personal data. It may be shared with third-party sellers only for the purpose of fulfilling your orders.'
        },
        {
          title: '4. Security',
          text: 'We implement security measures to protect your personal information against unauthorized access and modification.'
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      sub: 'Have a question? Our team is here to help.',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Message sent successfully!'
      },
      info: {
        title: 'Information',
        email: 'sky.mall.0026@gmail.com',
        address: 'Cotonou, Benin'
      }
    },
  },
}

type Translation = (typeof translations)['fr']

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr')
  const t = translations[lang]
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
