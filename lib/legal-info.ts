/**
 * Facts shown on the Legal Notice page (/legal-notice) and in the privacy
 * policy's "data controller" section.
 *
 * Source: SkyMall's registration papers (RCCM extract, IFU certificate,
 * labour-office declaration, CNSS certificate), all dated July 2026.
 *
 * SKY MALL is NOT a company: it is an "établissement" (sole proprietorship,
 * natural person) exploited directly by its owner, who is personally the
 * publisher. So there is no company name, legal form of a company or share
 * capital to show. If SkyMall is later incorporated, update this file (and
 * the privacy policy) with the new company's details.
 *
 * Not published on purpose: the owner's date of birth and personal contact
 * details, and the house-level part of the registered address (it is also the
 * owner's home). The address below stops at the commune. To show the full
 * registered address, copy it from the RCCM extract.
 *
 * A row whose value is empty is not shown on the page.
 */
export type Localized = { fr: string; en: string }

export const legalInfo = {
  /** Trade name and sign, as registered. */
  brand: 'SKY MALL',
  /** Legal form, as on the RCCM / IFU / labour declaration. */
  legalForm: {
    fr: 'Établissement (personne physique), exploitation directe',
    en: 'Sole proprietorship (natural person), directly operated',
  } as Localized,
  /** Owner-operator, who is also the publication director. */
  owner: 'Marthe Priscilla Chikaly Kanodi',
  publicationDirector: 'Marthe Priscilla Chikaly Kanodi',
  /** Registered activity. */
  activity: {
    fr: 'Fourniture de services et solutions intégrées, en informatique et autres technologies de l\'information et de la communication',
    en: 'Provision of integrated services and solutions in IT and other information and communication technologies',
  } as Localized,
  /** Trade and personal property credit register. */
  rccm: {
    fr: 'RCCM n° RB/ABC/26 A 143676 du 16 juillet 2026 (Greffe du tribunal de commerce de Cotonou)',
    en: 'RCCM no. RB/ABC/26 A 143676 of 16 July 2026 (Cotonou Commercial Court registry)',
  } as Localized,
  /** Single tax identification number (Bénin). */
  ifu: '0202666213295',
  taxRegime: {
    fr: 'Micro et petites entreprises (centre des impôts : CIPE 1 AB-CAL)',
    en: 'Micro and small businesses (tax office: CIPE 1 AB-CAL)',
  } as Localized,
  /** Where the business is established. Commune level only, see above. */
  headOffice: {
    fr: 'Akassato, Abomey-Calavi (département de l\'Atlantique), Bénin',
    en: 'Akassato, Abomey-Calavi (Atlantique department), Benin',
  } as Localized,
  /** Contact address, the one used by the contact form. */
  email: 'sky.mall.0026@gmail.com',
  /** Hosting of the website. */
  siteHost: {
    name: 'Vercel Inc.',
    address: '440 N Barranca Ave #4133, Covina, CA 91723, USA',
    url: 'https://vercel.com',
  },
  /** Hosting of the application data. */
  dataHost: {
    name: 'Supabase',
    url: 'https://supabase.com',
  },
} as const
