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
      sub: 'SkyMall connecte acheteurs et vendeurs au Bénin et au Cameroun — paiements mobile, livraison locale, confiance garantie.',
      // Côte d\'Ivoire, kept in case it comes back:
      // sub: "SkyMall connecte acheteurs et vendeurs au Bénin, Cameroun et en Côte d'Ivoire — paiements mobile, livraison locale, confiance garantie.",
      cta1: "Rejoindre la liste d'attente",
      cta2: 'Devenir vendeur',
      flagLabel: 'Disponible au',
    },
    stats: {
      items: [
        { value: '2', label: 'Pays couverts' }, // was '3' with Côte d\'Ivoire
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
            'Accès simultané à 2 marchés', // was 3 with Côte d'Ivoire
            'Logistique plateforme en option',
          ],
          card: {
            label: 'PORTAIL VENDEUR',
            main: '+2 pays d\'accès', // was '+3 pays d\'accès' with Côte d\'Ivoire
            sub: 'Bénin · Cameroun', // was 'Bénin · Cameroun · Côte d\'Ivoire'
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
      title: '2 pays. 1 plateforme.', // was '3 pays. 1 plateforme.' with Côte d\'Ivoire
      sub: 'Un déploiement simultané sur deux marchés clés d\'Afrique de l\'Ouest et centrale.',
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
        // Côte d'Ivoire, kept in case it comes back:
        // {
        //   flag: '🇨🇮',
        //   name: "Côte d'Ivoire",
        //   info: 'Abidjan — Orange & MTN — XOF',
        //   badge: 'Marché de lancement',
        // },
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
      countries: 'Bénin · Cameroun', // was 'Bénin · Cameroun · Côte d\'Ivoire'
      links: [
        { label: 'Conditions d\'utilisation', href: '/terms' },
        { label: 'Confidentialité', href: '/privacy' },
        { label: 'Mentions légales', href: '/legal-notice' },
        { label: 'Suppression de compte', href: '/account-deletion' },
        { label: 'Contact', href: '/contact' }
      ],
    },
    privacy: {
      title: 'Politique de Confidentialité',
      lastUpdated: 'Dernière mise à jour : 17 Octobre 2026',
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
        },
        {
          title: '10. Responsable du traitement',
          text: 'Le responsable du traitement de vos données personnelles est SKY MALL, établissement exploité par Marthe Priscilla Chikaly Kanodi, immatriculé au Registre du Commerce et du Crédit Mobilier de Cotonou sous le n° RB/ABC/26 A 143676 (IFU 0202666213295), établi à Akassato, Abomey-Calavi, Bénin. Vous pouvez exercer vos droits en écrivant à sky.mall.0026@gmail.com.'
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
    terms: {
      title: 'Conditions Générales d\'Utilisation',
      lastUpdated: 'Dernière mise à jour : 17 Octobre 2026',
      intro: 'Bienvenue sur SkyMall. Veuillez lire attentivement ces conditions avant d\'utiliser notre application et notre site.',
      content: [
        {
          title: '1. Acceptation des conditions',
          text: 'En créant un compte, en accédant ou en utilisant l\'application SkyMall ou ce site (le « Service »), vous acceptez d\'être lié par les présentes Conditions Générales d\'Utilisation. Si vous n\'acceptez pas ces conditions, vous ne devez pas utiliser le Service.'
        },
        {
          title: '2. Rôle de la plateforme SkyMall',
          text: 'SkyMall est un marché en ligne (marketplace) qui permet à des vendeurs indépendants de présenter et de vendre leurs produits, et à des clients d\'acheter ces produits. SkyMall facilite la mise en relation et la transaction, mais n\'est pas le vendeur des produits, sauf indication contraire. Chaque vendeur est responsable de ses produits, de leur description et de leur livraison.'
        },
        {
          title: '3. Inscription et sécurité du compte',
          text: 'Pour effectuer des achats sur SkyMall, vous devez vous inscrire avec un numéro de téléphone valide. Vous êtes responsable de la confidentialité de votre compte et de vos identifiants. Toute activité effectuée depuis votre compte est sous votre entière responsabilité.'
        },
        {
          title: '4. Commandes, prix et paiements',
          text: 'Les prix sont fixés par les vendeurs et affichés en FCFA (XOF ou XAF selon votre région). SkyMall calcule et vérifie le montant de chaque commande (produits, frais de livraison, frais de service, réductions) côté serveur avant le paiement : le montant affiché à l\'écran n\'est qu\'un aperçu. Les paiements s\'effectuent par les moyens intégrés à l\'application (par exemple Mobile Money, carte bancaire, virement bancaire ou portefeuille SkyMall, selon le pays et la disponibilité), traités par nos prestataires de paiement.'
        },
        {
          title: '5. Livraison, litiges et remboursements',
          text: 'La livraison est assurée par le vendeur. Les frais et délais dépendent de la boutique, de l\'adresse de livraison et de l\'option choisie (standard ou express). En cas de commande non reçue ou défectueuse, contactez immédiatement notre assistance depuis l\'application ou par email : nous examinons la demande avec le vendeur.'
        },
        {
          title: '6. Comportements interdits',
          text: 'Il est interdit d\'utiliser le Service pour vendre ou acheter des produits illégaux, de tromper d\'autres utilisateurs, de tenter d\'accéder aux comptes ou aux données d\'autrui, ou de perturber le fonctionnement du Service. SkyMall peut suspendre ou supprimer un compte ou un contenu qui ne respecte pas ces conditions.'
        },
        {
          title: '7. Propriété intellectuelle',
          text: 'Les contenus propres à SkyMall (logos, design, textes, icônes) sont la propriété exclusive de SkyMall ou de ses partenaires et sont protégés par les lois sur la propriété intellectuelle. Toute reproduction non autorisée est interdite. Les vendeurs restent propriétaires de leurs contenus (photos, descriptions) et accordent à SkyMall le droit de les afficher sur le Service.'
        },
        {
          title: '8. Données personnelles et suppression du compte',
          text: 'Le traitement de vos données personnelles est décrit dans notre Politique de Confidentialité. Vous pouvez supprimer votre compte à tout moment depuis l\'application ou depuis notre page de suppression de compte.'
        },
        {
          title: '9. Modifications des conditions',
          text: 'Nous pouvons modifier ces conditions. Les modifications prennent effet après leur publication dans l\'application et sur ce site, avec une nouvelle date de mise à jour. En continuant à utiliser le Service après ces modifications, vous les acceptez.'
        },
        {
          title: '10. Contact',
          text: 'Pour toute question relative à ces conditions ou pour une réclamation, contactez-nous depuis l\'onglet assistance de l\'application, depuis notre page de contact ou par email à sky.mall.0026@gmail.com.'
        }
      ]
    },
    legal: {
      title: 'Mentions Légales',
      lastUpdated: 'Dernière mise à jour : 17 Octobre 2026',
      publisherTitle: 'Éditeur du site et de l\'application',
      labels: {
        brand: 'Nom commercial et enseigne',
        legalForm: 'Forme juridique',
        owner: 'Exploitante',
        activity: 'Activité',
        rccm: 'Registre du commerce',
        ifu: 'N° IFU',
        taxRegime: 'Régime fiscal',
        headOffice: 'Établissement principal',
        publicationDirector: 'Directrice de la publication',
        email: 'Email'
      },
      content: [
        {
          title: 'Hébergement',
          text: 'Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis (vercel.com). Les données de l\'application SkyMall sont hébergées par Supabase (supabase.com).'
        },
        {
          title: 'Propriété intellectuelle',
          text: 'La marque SkyMall, le logo, le design et les contenus du site et de l\'application sont protégés. Toute reproduction, représentation ou utilisation sans autorisation écrite préalable est interdite.'
        },
        {
          title: 'Responsabilité',
          text: 'SkyMall est une plateforme de mise en relation entre vendeurs indépendants et acheteurs. Les produits sont proposés et livrés par les vendeurs, qui en sont responsables. Nous nous efforçons de maintenir le site accessible et ses informations exactes, sans garantie d\'absence d\'erreur ou d\'interruption.'
        },
        {
          title: 'Données personnelles',
          text: 'Le traitement de vos données est décrit dans notre Politique de Confidentialité. Vous pouvez demander la suppression de votre compte et de vos données depuis notre page de suppression de compte.'
        },
        {
          title: 'Contact',
          text: 'Pour toute question concernant ces mentions légales, écrivez-nous à sky.mall.0026@gmail.com ou utilisez notre page de contact.'
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
        address: 'Akassato, Abomey-Calavi, Bénin' // was 'Cotonou, Bénin': the registered establishment is in Abomey-Calavi
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
      sub: 'SkyMall connects buyers and sellers in Benin and Cameroon — mobile payments, local delivery, guaranteed trust.',
      // Ivory Coast, kept in case it comes back:
      // sub: 'SkyMall connects buyers and sellers in Benin, Cameroon, and Ivory Coast — mobile payments, local delivery, guaranteed trust.',
      cta1: 'Join the waitlist',
      cta2: 'Become a seller',
      flagLabel: 'Available in',
    },
    stats: {
      items: [
        { value: '2', label: 'Countries covered' }, // was '3' with Ivory Coast
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
            'Simultaneous access to 2 markets', // was 3 with Ivory Coast
            'Optional platform logistics',
          ],
          card: {
            label: 'SELLER PORTAL',
            main: '+2 country access', // was '+3 country access' with Ivory Coast
            sub: 'Benin · Cameroon', // was 'Benin · Cameroon · Ivory Coast'
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
      title: '2 countries. 1 platform.', // was '3 countries. 1 platform.' with Ivory Coast
      sub: 'A simultaneous rollout across two key West and Central African markets.',
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
        // Ivory Coast, kept in case it comes back:
        // {
        //   flag: '🇨🇮',
        //   name: 'Ivory Coast',
        //   info: 'Abidjan — Orange & MTN — XOF',
        //   badge: 'Launch market',
        // },
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
      countries: 'Benin · Cameroon', // was 'Benin · Cameroon · Ivory Coast'
      links: [
        { label: 'Terms of Use', href: '/terms' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Legal Notice', href: '/legal-notice' },
        { label: 'Delete Account', href: '/account-deletion' },
        { label: 'Contact', href: '/contact' }
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: October 17, 2026',
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
        },
        {
          title: '10. Data controller',
          text: 'The controller of your personal data is SKY MALL, an establishment operated by Marthe Priscilla Chikaly Kanodi, registered in the Trade and Personal Property Credit Register of Cotonou under no. RB/ABC/26 A 143676 (IFU 0202666213295), established in Akassato, Abomey-Calavi, Benin. You can exercise your rights by writing to sky.mall.0026@gmail.com.'
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
    terms: {
      title: 'General Terms of Use',
      lastUpdated: 'Last updated: October 17, 2026',
      intro: 'Welcome to SkyMall. Please read these terms carefully before using our application and website.',
      content: [
        {
          title: '1. Acceptance of the terms',
          text: 'By creating an account, accessing or using the SkyMall application or this website (the "Service"), you agree to be bound by these General Terms of Use. If you do not agree to these terms, you must not use the Service.'
        },
        {
          title: '2. Role of the SkyMall platform',
          text: 'SkyMall is an online marketplace that allows independent sellers to present and sell their products, and customers to buy them. SkyMall facilitates the connection and the transaction, but is not the seller of the products unless stated otherwise. Each seller is responsible for their products, their description and their delivery.'
        },
        {
          title: '3. Registration and account security',
          text: 'To buy on SkyMall you must register with a valid phone number. You are responsible for keeping your account and credentials confidential. All activity carried out from your account is your sole responsibility.'
        },
        {
          title: '4. Orders, prices and payments',
          text: 'Prices are set by sellers and shown in FCFA (XOF or XAF depending on your region). SkyMall calculates and checks the amount of every order (products, delivery fees, service fees, discounts) on the server before payment: the amount shown on screen is only a preview. Payments are made through the methods built into the app (for example Mobile Money, bank card, bank transfer or the SkyMall wallet, depending on the country and availability), processed by our payment providers.'
        },
        {
          title: '5. Delivery, disputes and refunds',
          text: 'Delivery is carried out by the seller. Fees and delivery times depend on the shop, the delivery address and the option chosen (standard or express). If an order is not received or is defective, contact our support immediately from the app or by email: we review the request with the seller.'
        },
        {
          title: '6. Prohibited conduct',
          text: 'You must not use the Service to sell or buy illegal products, to deceive other users, to try to access other people\'s accounts or data, or to disrupt the Service. SkyMall may suspend or delete an account or content that does not comply with these terms.'
        },
        {
          title: '7. Intellectual property',
          text: 'Content specific to SkyMall (logos, design, texts, icons) is the exclusive property of SkyMall or its partners and is protected by intellectual property laws. Any unauthorized reproduction is prohibited. Sellers remain the owners of their content (photos, descriptions) and grant SkyMall the right to display it on the Service.'
        },
        {
          title: '8. Personal data and account deletion',
          text: 'How we process your personal data is described in our Privacy Policy. You can delete your account at any time from the app or from our account deletion page.'
        },
        {
          title: '9. Changes to the terms',
          text: 'We may change these terms. Changes take effect once published in the app and on this website, with a new update date. By continuing to use the Service after the changes, you accept them.'
        },
        {
          title: '10. Contact',
          text: 'For any question about these terms or to make a complaint, contact us from the support tab of the app, from our contact page or by email at sky.mall.0026@gmail.com.'
        }
      ]
    },
    legal: {
      title: 'Legal Notice',
      lastUpdated: 'Last updated: October 17, 2026',
      publisherTitle: 'Publisher of the website and the application',
      labels: {
        brand: 'Trade name and sign',
        legalForm: 'Legal form',
        owner: 'Owner-operator',
        activity: 'Activity',
        rccm: 'Trade register',
        ifu: 'IFU number',
        taxRegime: 'Tax regime',
        headOffice: 'Main establishment',
        publicationDirector: 'Publication director',
        email: 'Email'
      },
      content: [
        {
          title: 'Hosting',
          text: 'This website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA (vercel.com). The SkyMall application data is hosted by Supabase (supabase.com).'
        },
        {
          title: 'Intellectual property',
          text: 'The SkyMall brand, logo, design and the content of the website and the application are protected. Any reproduction, representation or use without prior written permission is prohibited.'
        },
        {
          title: 'Liability',
          text: 'SkyMall is a platform that connects independent sellers and buyers. Products are offered and delivered by the sellers, who are responsible for them. We do our best to keep the website available and its information accurate, without any guarantee that it is free of errors or interruptions.'
        },
        {
          title: 'Personal data',
          text: 'How we process your data is described in our Privacy Policy. You can request the deletion of your account and data from our account deletion page.'
        },
        {
          title: 'Contact',
          text: 'For any question about this legal notice, write to us at sky.mall.0026@gmail.com or use our contact page.'
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
        address: 'Akassato, Abomey-Calavi, Benin' // was 'Cotonou, Benin': the registered establishment is in Abomey-Calavi
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
