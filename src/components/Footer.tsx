import { useState } from 'react'
import { motion } from 'framer-motion'

const CAL = 'https://cal.com/sidney-anieze-52wseh'
const EMAIL = 'aniezesidney6@gmail.com'

// A few things I love, as green outline icons (draggable, snap back to place)
const ICONS: { name: string; paths: string[] }[] = [
  { name: 'Games', paths: ['M0 13L3 14L6 11H10L13 14L16 13L15.248 4.7284C15.1076 3.18316 13.812 2 12.2604 2H3.73964C2.18803 2 0.89244 3.18316 0.751964 4.72839L0 13ZM12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6ZM12 8C12 8.55228 11.5523 9 11 9C10.4477 9 10 8.55228 10 8C10 7.44772 10.4477 7 11 7C11.5523 7 12 7.44772 12 8ZM5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z'] },
  { name: 'Dogs', paths: ['M16 4V7C16 9.20914 14.2091 11 12 11H10V15H0V13L0.931622 10.8706C1.25226 10.9549 1.59036 11 1.94124 11C3.74931 11 5.32536 9.76947 5.76388 8.01538L3.82359 7.53031C3.60766 8.39406 2.83158 9.00001 1.94124 9.00001C1.87789 9.00001 1.81539 8.99702 1.75385 8.99119C1.02587 8.92223 0.432187 8.45551 0.160283 7.83121C0.0791432 7.64491 0.0266588 7.44457 0.00781272 7.23658C-0.0112323 7.02639 0.00407892 6.80838 0.0588889 6.58914L0.698705 4.02986C1.14387 2.24919 2.7438 1 4.57928 1H10L12 4H16ZM9 6C9.55229 6 10 5.55228 10 5C10 4.44772 9.55229 4 9 4C8.44771 4 8 4.44772 8 5C8 5.55228 8.44771 6 9 6Z'] },
  { name: 'Cards', paths: ['M12 4C12 4.25656 11.9758 4.50748 11.9297 4.75061C11.9531 4.75021 11.9765 4.75 12 4.75C14.2091 4.75 16 6.54086 16 8.75C16 10.9591 14.2091 12.75 12 12.75C10.7347 12.75 9.60658 12.1625 8.87361 11.2454L10 15V16H6V15L7.12639 11.2454C6.39342 12.1625 5.26532 12.75 4 12.75C1.79086 12.75 0 10.9591 0 8.75C0 6.54086 1.79086 4.75 4 4.75C4.02349 4.75 4.04692 4.7502 4.07031 4.75061C4.02415 4.50748 4 4.25656 4 4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4Z'] },
  { name: 'Cats', paths: ['M1 7L4.80061 1.43926C5.56059 0.527292 6.68638 0 7.8735 0H8V4L12 5L15 10L14.1875 11.2188C13.4456 12.3316 12.1967 13 10.8593 13H9L7 16H5L1 7ZM10 9C10.5523 9 11 8.55229 11 8C11 7.44772 10.5523 7 10 7C9.44771 7 9 7.44772 9 8C9 8.55229 9.44771 9 10 9Z', 'M10 0.465878V2.43845L12 2.93845V0H11.8735C11.2125 0 10.5704 0.163501 10 0.465878Z'] },
  { name: 'Chess', paths: ['M8.75926 7.65079L12.1268 3.72195L13.2712 5.72466C13.7488 6.5604 14 7.50631 14 8.46887C14 9.99625 13.3809 11.379 12.38 12.38L14 14V16H2V14L3.62003 12.38C2.61909 11.379 2 9.99625 2 8.46887C2 7.50631 2.2512 6.5604 2.72876 5.72466L6 0H10L11.0732 1.87805L7.24074 6.34921L8.75926 7.65079Z'] },
]
const socials: { name: string; href: string; path: string }[] = [
  { name: 'X', href: 'https://x.com/aniezesidney?s=21', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sidney-anieze-5762bb314', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { name: 'Behance', href: 'https://www.behance.net/sidneyanieze', path: 'M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z' },
  { name: 'WhatsApp', href: 'https://wa.me/2348137875279', path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488' },
]

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }
  return (
    <footer id="contact" className="relative z-10 px-5 pb-14 pt-20">
      <div className="relative mx-auto max-w-[1160px] rounded-[38px] bg-white px-8 py-16 text-center shadow-card sm:px-11">
        <span className="pointer-events-none absolute inset-4 rounded-[28px] border-[1.6px] border-dashed border-meadow-ink/15" />
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-meadow-deep">Let&rsquo;s talk</p>
        <h2 className="mt-3 font-display text-[clamp(28px,4.5vw,46px)] font-bold leading-[1.04] tracking-[-0.035em] text-meadow-ink">
          Got a project in mind? Let&rsquo;s build it.
        </h2>
        <p className="mx-auto mt-4 max-w-[46ch] text-meadow-muted">
          Available for select product, AI and web design work. Let&rsquo;s make something worth remembering.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={CAL} target="_blank" rel="noopener" className="cta-btn">
            Book a call
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-meadow-ink/15 bg-meadow-bg/60 px-5 py-[11px] text-sm font-semibold text-meadow-ink transition-transform hover:-translate-y-px"
          >
            {copied ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="11" height="11" rx="2.5" />
                <path d="M5 15V5a2 2 0 0 1 2-2h10" />
              </svg>
            )}
            {copied ? 'Copied!' : 'Copy email'}
          </button>
        </div>

        <div className="mt-9 flex justify-center gap-4">
          {ICONS.map((ic) => (
            <motion.svg
              key={ic.name}
              viewBox="0 0 16 16"
              role="img"
              aria-label={ic.name}
              className="h-9 w-9 cursor-grab text-meadow-deep active:cursor-grabbing"
              fill="currentColor"
              stroke="#ffffff"
              strokeWidth={0.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              drag
              dragSnapToOrigin
              dragElastic={0.5}
              whileDrag={{ scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 520, damping: 26 }}
            >
              {ic.paths.map((d, i) => (
                <path key={i} d={d} />
              ))}
            </motion.svg>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-11 flex max-w-[1100px] flex-wrap items-center justify-between gap-4">
        <nav className="flex flex-wrap gap-5 text-sm font-medium text-meadow-ink">
          <a className="hover:text-meadow-deep" href="#work">Work</a>
          <a className="hover:text-meadow-deep" href="#about">About</a>
          <a className="hover:text-meadow-deep" href="#faq">FAQ</a>
          <a className="hover:text-meadow-deep" href="/Sidney-Anieze-CV.pdf" download>CV</a>
        </nav>
        <div className="flex gap-2">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener"
              aria-label={s.name}
              className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white text-meadow-ink transition-transform hover:-translate-y-0.5 hover:text-meadow-deep"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>
        <p className="text-xs text-meadow-muted">© 2026 Sidney Anieze · Lagos, Nigeria</p>
      </div>
    </footer>
  )
}
