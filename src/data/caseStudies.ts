export type CaseStudy = {
  id: string
  name: string
  eyebrow: string
  year: string
  duration: string
  platform: string
  tools: string
  cover: string
  screens: string[]
  hookStat: string
  role: string[]
  problem: { heading: string; body: string[] }
  process: { n: string; title: string; body: string }[]
  decisions: { title: string; body: string }[]
  outcomes: { n: string; l: string }[]
  reflection: string
  next: string
}

export const caseStudies: Record<string, CaseStudy> = {
  zentra: {
    id: 'zentra',
    name: 'Zentra',
    eyebrow: 'AI Banking, Mobile App',
    year: '2024',
    duration: '6 weeks',
    platform: 'iOS & Android',
    tools: 'Figma, Rive',
    cover: '/covers/zentra.jpg',
    screens: ['/screens/zentra-1.png', '/screens/zentra-2.png', '/screens/zentra-3.png', '/screens/zentra-4.png', '/screens/zentra-5.png', '/screens/zentra-6.png', '/screens/zentra-7.png', '/screens/zentra-8.png'],
    hookStat: '8 screens, one complete end-to-end flow',
    role: ['UI/UX Design', 'Design System', 'Prototyping', 'Motion Design'],
    problem: {
      heading: 'Banking apps felt transactional, not personal.',
      body: [
        'Most fintech apps overwhelm users with data they cannot act on. The dashboards are dense, the navigation is buried, and the visual language screams compliance over confidence. Users open the app to check a balance and leave more anxious than informed.',
        'The brief: design a mobile banking product that makes financial management feel effortless, intelligent, and human, without stripping away the depth power users need.',
      ],
    },
    process: [
      { n: '01', title: 'Research & discovery', body: 'Audited 8 fintech competitors and ran 5 interviews to map the mental models around money anxiety, trust signals, and the features people actually use daily.' },
      { n: '02', title: 'Information architecture', body: 'Reorganised navigation around 3 goals, Check, Send, Save, cutting primary nav from 7 items to 3. Mapped 14 flows and iterated twice with users.' },
      { n: '03', title: 'Visual language', body: 'Built a dark design system with a single electric accent, with a type hierarchy tested for dashboard readability in low light.' },
      { n: '04', title: 'Prototype & validation', body: 'Built a 27-screen interactive prototype, ran 2 usability rounds, and cut the send flow from 6 steps to 3.' },
    ],
    decisions: [
      { title: 'Dark UI over light', body: 'Chosen for cognition, not aesthetics. Financial data reads cleaner on dark: numbers pop, charts are more legible, and the premium feel builds trust.' },
      { title: 'A single accent colour', body: 'Restricting accents to one colour, applied only to actionable elements, trains users to instantly know what they can tap.' },
      { title: 'Progressive disclosure', body: 'Secondary stats hide behind a tap, cutting dashboard load by ~40% in tests while keeping depth for power users.' },
    ],
    outcomes: [
      { n: '92%', l: 'User satisfaction in testing' },
      { n: '40%', l: 'Faster task completion' },
      { n: '3x', l: 'Engagement vs original concept' },
    ],
    reflection:
      'I would invest more time in the empty and error states. They were designed last and it shows, functional but missing the warmth the rest of the product carries. Great empty states are a trust signal.',
    next: 'nexus',
  },
  nexus: {
    id: 'nexus',
    name: 'Nexus',
    eyebrow: 'Web3, Crypto Wallet',
    year: '2024',
    duration: '4 weeks',
    platform: 'iOS & Android',
    tools: 'Figma',
    cover: '/covers/nexus.jpg',
    screens: ['/screens/nexus-1.png', '/screens/nexus-2.png', '/screens/nexus-3.png'],
    hookStat: 'Onboarding reduced to under 60 seconds',
    role: ['UI/UX Design', 'User Research', 'Onboarding Design', 'Design System'],
    problem: {
      heading: 'Crypto wallets punish new users.',
      body: [
        'Web3 products are notoriously hostile to non-technical users. Seed phrases, gas fees, and 12-step onboarding have kept crypto limited to those willing to learn the hard way.',
        'The challenge: remove the intimidation without removing the security, so every user feels confident from the very first screen.',
      ],
    },
    process: [
      { n: '01', title: 'Onboarding audit', body: 'Mapped MetaMask, Rainbow and Trust Wallet, counting clicks to first transaction. Average: 14 steps, with 6 recurring friction points.' },
      { n: '02', title: 'Simplification framework', body: 'Split onboarding into Identity, Security, First Action, deferring everything non-essential to get users to value faster.' },
      { n: '03', title: 'Trust language', body: 'Rewrote crypto jargon into plain language. Private key became Recovery phrase, gas fee became Network fee, tested for comprehension.' },
      { n: '04', title: 'Visual system', body: 'Built around deep greens for their associations with security, growth and calm, avoiding the typical orange crypto palette.' },
    ],
    decisions: [
      { title: 'Plain language everywhere', body: 'Every piece of jargon was translated to plain English. Not dumbing down, designing for confidence.' },
      { title: 'Biometric-first security', body: 'Face ID was offered before the seed phrase, giving a sense of security before the intimidating step and reducing abandonment.' },
      { title: 'Deferred complexity', body: 'Swap, stake and dApp connect stay hidden until after the first transaction, so new users succeed before discovering depth.' },
    ],
    outcomes: [
      { n: '60s', l: 'Average onboarding time' },
      { n: '88%', l: 'Task success rate' },
      { n: '4.8', l: 'Prototype satisfaction' },
    ],
    reflection:
      'I would revisit the seed-phrase screen. I made it feel safer, but did not fundamentally solve the UX, users still dread it. I would explore a 4-word-at-a-time reveal to reduce the cognitive weight.',
    next: 'jobbr',
  },
  jobbr: {
    id: 'jobbr',
    name: 'Jobbr',
    eyebrow: 'Job Search, Mobile App',
    year: '2024',
    duration: '5 weeks',
    platform: 'iOS',
    tools: 'Figma',
    cover: '/covers/jobbr.png',
    screens: ['/screens/jobbr-1.png', '/screens/jobbr-2.png', '/screens/jobbr-3.png', '/screens/jobbr-4.png', '/screens/jobbr-5.png', '/screens/jobbr-6.png', '/screens/jobbr-7.png', '/screens/jobbr-8.png', '/screens/jobbr-9.png'],
    hookStat: 'End-to-end job application in 3 steps',
    role: ['UI/UX Design', 'iOS Design', 'User Research', 'Prototyping'],
    problem: {
      heading: 'Job searching is a full-time job. It should not be.',
      body: [
        'Every major job platform was designed for the employer, not the candidate. The job seeker is buried in filters, endless scrolling, and forms that ask for the same information five different ways.',
        'Jobbr was designed from the candidate side first: fast to find, fast to apply, clear on status. Every screen earns its place.',
      ],
    },
    process: [
      { n: '01', title: 'Candidate research', body: 'Interviewed 6 active job seekers. The average candidate spends 4+ hours per application on repetitive data entry, the biggest pain point.' },
      { n: '02', title: 'Apply-flow redesign', body: 'Reduced the typical 8-step apply to 3: upload resume, write cover letter, review and submit. One screen per step.' },
      { n: '03', title: 'Discovery system', body: 'Built discovery around role, level and location, the 3 things candidates actually know, dropping keyword search as the entry point.' },
      { n: '04', title: 'Status transparency', body: 'A tracker shows exactly where each application stands, Applied, In Review, Offer. Clarity reduces anxiety.' },
    ],
    decisions: [
      { title: '3-step apply, no exceptions', body: 'Every review wanted more fields. Holding at 3 forced every question to justify its existence.' },
      { title: 'Resume as the entry point', body: 'Auto-filling from the resume cut average form completion time by an estimated 70%.' },
      { title: 'Dark UI for focus', body: 'Job searching is often done late at night. Dark UI reduces strain and creates the calm a high-stakes task deserves.' },
    ],
    outcomes: [
      { n: '3', l: 'Steps from search to sent' },
      { n: '70%', l: 'Form time saved (est.)' },
      { n: '5', l: 'Screens tell the whole story' },
    ],
    reflection:
      'The empty and notification states were the most thoughtful part. An empty applications list is a vulnerable moment, and getting that copy encouraging rather than clinical took the most iteration.',
    next: 'ios',
  },
  ios: {
    id: 'ios',
    name: 'iOS Series',
    eyebrow: 'Forge, Soma, Haven, Skye',
    year: '2024',
    duration: '8 weeks total',
    platform: 'iOS',
    tools: 'Figma',
    cover: '',
    screens: ['/screens/ios-1.png', '/screens/ios-2.png', '/screens/ios-3.png', '/screens/ios-4.png', '/screens/ios-5.png', '/screens/ios-6.png'],
    hookStat: '4 apps, 1 design philosophy',
    role: ['UI/UX Design', 'iOS Design', 'Design Systems', 'Visual Design'],
    problem: {
      heading: 'Every daily app was overbuilt.',
      body: [
        'Habit trackers, health monitors and smart-home apps share the same sin: they try to do everything. Cluttered screens, buried navigation, onboarding longer than the task itself.',
        'This series was a challenge: take four utility categories and strip each to its absolute minimum, just the one thing the user opened the app to do, served immediately.',
      ],
    },
    process: [
      { n: '01', title: 'Define the single action', body: 'For each app I asked: what is the one thing the user needs in under 10 seconds? Everything else was secondary.' },
      { n: '02', title: 'Cut until it breaks', body: 'Designed each at full complexity, then removed features one by one until it stopped working. The final design sits one step above broken.' },
      { n: '03', title: 'Separate visual languages', body: 'Each app has a distinct identity despite sharing the simplicity principle, three moods, one philosophy.' },
      { n: '04', title: 'Motion as feedback', body: 'In simple apps motion carries more weight, micro-interactions replaced the feature complexity that was removed.' },
    ],
    decisions: [
      { title: 'Dark for Forge and Soma', body: 'Both deal with personal performance data, and dark backgrounds give numbers and progress the gravitas they deserve.' },
      { title: 'Light for Haven', body: 'A smart-home app lives in a calm, comfortable context. Light UI feels spatial, mirroring the space being controlled.' },
      { title: 'One accent per app', body: 'Forge orange, Soma red and purple, Haven blue, each chosen to be emotionally coherent with the product purpose.' },
    ],
    outcomes: [
      { n: '4', l: 'Apps in 8 weeks' },
      { n: '<3', l: 'Screens to core task' },
      { n: '100%', l: 'Designed dark-first' },
    ],
    reflection:
      'The hardest part was resisting the urge to add. Saying no to a genuinely useful feature is a different skill from saying no to a bad idea, and this project trained that muscle more than any other.',
    next: 'zentra',
  },
}
