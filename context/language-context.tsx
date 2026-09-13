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
        { label: 'Suppression de compte', href: '/account-deletion' },
        { label: 'Contact', href: '/contact' }
      ],
    },
    privacy: {
      title: 'Politique de Confidentialité',
      lastUpdated: 'Dernière mise à jour : 13 Septembre 2026',
      content: [
        {
          title: '1. Données que nous collectons',
          text: 'Compte : votre numéro de téléphone, votre nom, et facultativement un email et une photo de profil. Adresses de livraison que vous enregistrez pour vos commandes. Commandes et paiement : historique et statut de paiement — nous ne stockons jamais votre numéro Mobile Money complet, qui est traité directement par nos prestataires de paiement. Photos : uniquement lorsque vous choisissez d\'envoyer une image dans une discussion ou de configurer votre boutique.'
        },
        {
          title: '2. Utilisation des données',
          text: 'Traiter vos commandes et paiements, vous envoyer des notifications liées à votre compte, personnaliser les produits recommandés, assurer la sécurité du compte et prévenir la fraude, et vous fournir un support client.'
        },
        {
          title: '3. Localisation',
          text: 'Nous ne suivons jamais votre position GPS. SkyMall utilise uniquement la ville et le pays que vous renseignez vous-même dans votre profil ou votre adresse de livraison.'
        },
        {
          title: '4. Partage des informations',
          text: 'Le vendeur d\'une commande reçoit votre nom, téléphone et adresse de livraison, strictement nécessaires pour vous livrer. Nos prestataires de paiement Mobile Money (PawaPay, KKiaPay) traitent vos transactions directement. Notre infrastructure (Supabase) héberge nos données ; des rapports de plantage anonymisés (Sentry) nous aident à corriger les bugs. Nous ne vendons jamais vos données à des tiers à des fins publicitaires.'
        },
        {
          title: '5. Conservation des données',
          text: 'Vos données sont conservées tant que votre compte est actif. Les enregistrements de commandes et de paiement peuvent être conservés au-delà de la suppression de votre compte lorsque la loi comptable ou fiscale l\'exige.'
        },
        {
          title: '6. Vos droits',
          text: 'Vous pouvez consulter et corriger vos informations depuis l\'application. Vous pouvez supprimer votre compte instantanément depuis l\'application (Profil > Paramètres > Supprimer mon compte), ou, si vous n\'avez plus l\'application, en faire la demande depuis notre page de suppression de compte.'
        },
        {
          title: '7. Sécurité',
          text: 'Vos données transitent de manière chiffrée entre l\'application et nos serveurs, et l\'accès à vos données est restreint pour qu\'un autre utilisateur ne puisse jamais accéder à vos commandes ou messages.'
        },
        {
          title: '8. Enfants',
          text: 'SkyMall n\'est pas destiné aux personnes de moins de 16 ans et nous ne collectons pas sciemment de données les concernant.'
        },
        {
          title: '9. Contact',
          text: 'Pour toute question concernant cette politique ou vos données personnelles, contactez-nous depuis notre page de contact ou par email à sky.mall.0026@gmail.com.'
        }
      ]
    },
    accountDeletion: {
      title: 'Suppression de compte',
      sub: 'Vous pouvez demander la suppression de votre compte et de vos données SkyMall, que vous ayez ou non l\'application installée.',
      fastestTitle: 'Le plus rapide : depuis l\'application',
      fastestText: 'Ouvrez SkyMall, puis Profil > Paramètres > Supprimer définitivement mon compte. La suppression est immédiate et ne nécessite aucune attente.',
      formTitle: 'Depuis ce site, si vous n\'avez plus l\'application',
      formSub: 'Remplissez ce formulaire et notre équipe traitera votre demande dans les meilleurs délais.',
      form: {
        name: 'Nom complet',
        contact: 'Téléphone ou email associé à votre compte',
        reason: 'Motif (optionnel)',
        submit: 'Envoyer la demande de suppression',
        success: 'Votre demande a été envoyée. Notre équipe vous contactera pour confirmer la suppression.'
      },
      whatTitle: 'Ce qui est supprimé',
      what: [
        'Votre profil, nom, email et photo',
        'Vos adresses de livraison enregistrées',
        'Votre historique de discussions et votre liste de souhaits',
        'Vos préférences et données de personnalisation'
      ],
      retainTitle: 'Ce qui peut être conservé',
      retainText: 'Les enregistrements de commandes et de transactions peuvent être conservés au-delà de la suppression de votre compte lorsque la loi comptable ou fiscale l\'exige. Ces données ne sont plus liées à un compte actif et ne sont utilisées à aucune autre fin.'
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
        { label: 'Delete Account', href: '/account-deletion' },
        { label: 'Contact', href: '/contact' }
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: September 13, 2026',
      content: [
        {
          title: '1. Data we collect',
          text: 'Account: your phone number, your name, and optionally an email and a profile photo. Delivery addresses you save for your orders. Orders and payment: order history and payment status — we never store your full Mobile Money number, which is handled directly by our payment providers. Photos: only when you choose to send an image in a chat or set up your shop.'
        },
        {
          title: '2. How we use this data',
          text: 'To process your orders and payments, send you account-related notifications, personalize recommended products, keep your account secure and prevent fraud, and provide customer support.'
        },
        {
          title: '3. Location',
          text: 'We never track your GPS location. SkyMall only uses the city and country you provide yourself in your profile or delivery address.'
        },
        {
          title: '4. Information sharing',
          text: 'The seller for an order receives your name, phone number, and delivery address, strictly what\'s needed to deliver it. Our Mobile Money payment providers (PawaPay, KKiaPay) process your transactions directly. Our infrastructure (Supabase) hosts our data; anonymized crash reports (Sentry) help us fix bugs. We never sell your data to third parties for advertising.'
        },
        {
          title: '5. Data retention',
          text: 'Your data is kept for as long as your account is active. Order and payment records may be retained beyond account deletion where accounting or tax law requires it.'
        },
        {
          title: '6. Your rights',
          text: 'You can view and correct your information from the app. You can delete your account instantly from the app (Profile > Settings > Delete my account), or, if you no longer have the app, request it from our account deletion page.'
        },
        {
          title: '7. Security',
          text: 'Your data travels encrypted between the app and our servers, and access to your data is restricted so another user can never access your orders or messages.'
        },
        {
          title: '8. Children',
          text: 'SkyMall is not directed at people under 16, and we do not knowingly collect data about them.'
        },
        {
          title: '9. Contact',
          text: 'For any question about this policy or your personal data, contact us from our contact page or by email at sky.mall.0026@gmail.com.'
        }
      ]
    },
    accountDeletion: {
      title: 'Delete Your Account',
      sub: 'You can request the deletion of your SkyMall account and data, whether or not you still have the app installed.',
      fastestTitle: 'Fastest: from the app',
      fastestText: 'Open SkyMall, then Profile > Settings > Permanently delete my account. Deletion is immediate and needs no waiting.',
      formTitle: "From this site, if you no longer have the app",
      formSub: 'Fill out this form and our team will process your request as soon as possible.',
      form: {
        name: 'Full Name',
        contact: 'Phone number or email on your account',
        reason: 'Reason (optional)',
        submit: 'Send deletion request',
        success: 'Your request has been sent. Our team will contact you to confirm the deletion.'
      },
      whatTitle: "What's deleted",
      what: [
        'Your profile, name, email, and photo',
        'Your saved delivery addresses',
        'Your chat history and wishlist',
        'Your preferences and personalization data'
      ],
      retainTitle: 'What may be retained',
      retainText: 'Order and transaction records may be retained beyond account deletion where accounting or tax law requires it. This data is no longer linked to an active account and is not used for any other purpose.'
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
