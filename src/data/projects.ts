export type Project = {
  id: string
  name: string
  tag: string
  kind: 'app' | 'site'
  href?: string
  cover: string
  badge?: string
  blurb?: string
}

// Landscape desktop-frame crop (1440 x 1024, Figma desktop frame ratio)
const thumb = (url: string) =>
  `https://image.thum.io/get/width/1440/crop/1024/noanimate/${url}`

/** Order is the fan order, left to right. Apps open a case-study modal, sites open external. */
export const projects: Project[] = [
  {
    id: 'luchi',
    name: 'Luxurious Luchi Hairs',
    tag: 'E-commerce',
    kind: 'site',
    href: 'https://luxuriousluchihairs.com/',
    cover: thumb('https://luxuriousluchihairs.com/'),
    badge: 'Live',
  },
  {
    id: 'zentra',
    name: 'Zentra',
    tag: 'AI Banking',
    kind: 'app',
    cover: '/covers/zentra.jpg',
    blurb:
      'A mobile banking app that makes managing money feel calm and intelligent. Eight screens, one end-to-end flow, and a single accent that teaches you where to tap.',
  },
  {
    id: 'prive',
    name: 'Privé by Luchi',
    tag: 'Booking',
    kind: 'site',
    href: 'https://privebyluchi.com/',
    cover: thumb('https://privebyluchi.com/'),
  },
  {
    id: 'jobbr',
    name: 'Jobbr',
    tag: 'Job Search',
    kind: 'app',
    cover: '/covers/jobbr.png',
    blurb:
      'Job search rebuilt from the candidate side. From search to application sent in three deliberate steps, with a status you never have to chase.',
  },
  {
    id: 'vanny',
    name: 'Vanny Spa',
    tag: 'Spa & Wellness',
    kind: 'site',
    href: 'https://vanny-spa.vercel.app/',
    cover: thumb('https://vanny-spa.vercel.app/'),
    badge: 'New',
  },
  {
    id: 'nexus',
    name: 'Nexus',
    tag: 'Web3 Wallet',
    kind: 'app',
    cover: '/covers/nexus.jpg',
    blurb:
      'A crypto wallet that strips out the intimidation without losing the security. Plain language everywhere, biometrics first, onboarding under sixty seconds.',
  },
  {
    id: 'peau',
    name: 'Peau Saine',
    tag: 'Medical Spa',
    kind: 'site',
    href: 'https://peau-saine.vercel.app/',
    cover: thumb('https://peau-saine.vercel.app/'),
  },
  {
    id: 'ios',
    name: 'iOS Series',
    tag: 'Forge, Soma, Haven, Skye',
    kind: 'app',
    cover: '',
    blurb:
      'Four daily-use iOS apps, one philosophy: strip each down to the single thing you opened it to do, then make that one moment feel great.',
  },
  {
    id: 'rich',
    name: 'Rich Angel Salon',
    tag: 'Beauty Studio',
    kind: 'site',
    href: 'https://rich-angel.vercel.app/',
    cover: thumb('https://rich-angel.vercel.app/'),
  },
  {
    id: 'eclat',
    name: 'Eclat Luxury',
    tag: 'Luxury Skincare',
    kind: 'site',
    href: 'https://eclatluxury.framer.website/',
    cover: thumb('https://eclatluxury.framer.website/'),
  },
]
