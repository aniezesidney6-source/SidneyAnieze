import { useEffect, useState } from 'react'

const CAL = 'https://cal.com/sidney-anieze-52wseh'
const EMAIL = 'aniezesidney6@gmail.com'
const LINKS: [string, string][] = [
  ['Work', '#work'],
  ['About', '#about'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
]

function Logo({ size = 40 }: { size?: number }) {
  return (
    <a
      href="#home"
      aria-label="Sidney Anieze, home"
      className="block shrink-0 overflow-hidden rounded-full bg-meadow-ink"
      style={{ width: size, height: size }}
    >
      <img src="/avatar.jpg" alt="Sidney Anieze" className="h-full w-full object-cover" />
    </a>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)
  const [copied, setCopied] = useState(false)
  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const sideFade = scrolled ? 'pointer-events-none scale-95 opacity-0' : 'opacity-100'

  return (
    <>
      {/* Desktop: three pills. Center pill never changes size; the side pills fade on scroll. */}
      <div className="fixed left-1/2 top-4 z-50 hidden w-[min(94%,1160px)] -translate-x-1/2 grid-cols-[1fr_auto_1fr] items-center md:grid">
        <div className={`pill-3d justify-self-start inline-flex items-center gap-2.5 rounded-full px-[18px] py-[11px] text-sm font-medium text-meadow-ink transition-all duration-400 ${sideFade}`}>
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-meadow-deep opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-meadow-deep" />
          </span>
          available for projects
        </div>

        <nav aria-label="Primary" className="pill-3d justify-self-center flex items-center gap-1.5 rounded-full p-[7px] pr-3">
          <Logo />
          <ul className="flex list-none items-center gap-0.5 p-0">
            {LINKS.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="block rounded-full px-3.5 py-2 text-[15px] font-medium text-meadow-ink transition-colors hover:bg-meadow-accent/10 hover:text-meadow-deep">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href={CAL} target="_blank" rel="noopener" className="cta-btn">
            Book a call
          </a>
        </nav>

        <div className={`pill-3d justify-self-end inline-flex items-center rounded-full p-1.5 transition-all duration-400 ${sideFade}`}>
          <button
            type="button"
            onClick={copyEmail}
            aria-label="Copy email address"
            className="group inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium text-meadow-ink transition-colors hover:bg-meadow-accent/10"
          >
            <span className="relative inline-flex h-[15px] w-[15px] items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="absolute h-[15px] w-[15px] transition-all duration-300 group-hover:rotate-[200deg] group-hover:opacity-0">
                <rect x="3" y="5" width="18" height="14" rx="2.5" />
                <path d="M4 7l8 6 8-6" />
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" className="absolute h-[15px] w-[15px] -rotate-90 opacity-0 transition-all duration-300 group-hover:rotate-0 group-hover:opacity-100">
                <rect x="9" y="9" width="11" height="11" rx="2.5" />
                <path d="M5 15V5a2 2 0 0 1 2-2h10" />
              </svg>
            </span>
            {copied ? 'Copied!' : EMAIL}
          </button>
        </div>
      </div>

      {/* Mobile: compact pill + hamburger */}
      <div className="pill-3d fixed left-1/2 top-4 z-50 flex w-[min(94%,440px)] -translate-x-1/2 items-center justify-between rounded-full p-[7px] pl-3 md:hidden">
        <div className="flex items-center gap-2.5">
          <Logo size={36} />
          <span className="text-[15px] font-semibold text-meadow-ink">Sidney Anieze</span>
        </div>
        <div className="flex items-center gap-2">
          <a href={CAL} target="_blank" rel="noopener" className="cta-btn !px-4 !py-2 !text-[13px]">
            Book a call
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menu}
            onClick={() => setMenu((m) => !m)}
            className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-meadow-ink"
          >
            <span className={`absolute h-0.5 w-4 rounded bg-meadow-bg transition-transform duration-300 ${menu ? 'rotate-45' : '-translate-y-1'}`} />
            <span className={`absolute h-0.5 w-4 rounded bg-meadow-bg transition-transform duration-300 ${menu ? '-rotate-45' : 'translate-y-1'}`} />
          </button>
        </div>
      </div>

      {/* Mobile sidebar / dropdown */}
      <div
        className={`fixed right-4 top-[76px] z-[60] w-[min(300px,calc(100vw-32px))] origin-top-right rounded-[26px] border border-white/50 bg-white/60 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition-all duration-300 md:hidden ${
          menu ? 'pointer-events-auto scale-100 opacity-100' : 'pointer-events-none -translate-y-2 scale-95 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1">
          {[['Home', '#home'], ...LINKS].map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenu(false)}
              className="rounded-2xl px-4 py-3 text-center text-base font-semibold text-meadow-ink transition-colors hover:bg-meadow-accent/10 hover:text-meadow-deep"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-center gap-3 border-t border-black/10 pt-3 text-xs text-meadow-muted">
          <a href={`mailto:${EMAIL}`} className="hover:text-meadow-deep">Email</a>
          <a href="https://wa.me/2348137875279" target="_blank" rel="noopener" className="hover:text-meadow-deep">WhatsApp</a>
          <a href="https://www.behance.net/sidneyanieze" target="_blank" rel="noopener" className="hover:text-meadow-deep">Behance</a>
        </div>
      </div>
    </>
  )
}
