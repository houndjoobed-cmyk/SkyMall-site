/**
 * Facts shown on the Legal Notice page (/legal-notice).
 *
 * Only what is true and already public on the site is filled in. The fields
 * below left empty are the company's own details (legal form, registration
 * number, who is responsible for the publication): they are not guessable and
 * must come from SkyMall's registration documents. A row with an empty value is
 * simply not shown, so nothing invented is ever published. Fill them in here
 * and the page updates by itself.
 */
export const legalInfo = {
  /** Trade name of the service. */
  brand: 'SkyMall',
  /** Registered company name, e.g. "SkyMall SARL". */
  companyName: '',
  /** Legal form and share capital, e.g. "SARL au capital de 1 000 000 FCFA". */
  legalForm: '',
  /** Trade-register / tax identification numbers (RCCM, IFU...). */
  registrationNumber: '',
  /** Head office. Same address the contact page shows. */
  headOffice: { fr: 'Cotonou, Bénin', en: 'Cotonou, Benin' },
  /** Full name of the person responsible for the publication. */
  publicationDirector: '',
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
