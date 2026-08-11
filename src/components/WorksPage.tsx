import { motion } from 'framer-motion'
import { projects, type Project } from '@/data/projects'
import { caseStudies } from '@/data/caseStudies'

function Media({ p }: { p: Project }) {
  if (!p.cover) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#111] to-[#1c1c1e] text-white/90">
        <svg width="48" height="48" viewBox="0 0 56 56" fill="currentColor" aria-hidden>
          <path d="M31.18 7.2c1.56-1.87 2.62-4.46 2.33-7.06-2.26.09-4.99 1.5-6.61 3.38-1.45 1.67-2.72 4.35-2.38 6.91 2.52.19 5.09-1.27 6.66-3.23zM33.46 10.98c-3.69-.21-6.83 2.09-8.59 2.09-1.77 0-4.47-1.98-7.39-1.93-3.8.05-7.33 2.21-9.27 5.63-3.97 6.87-1.04 17.05 2.82 22.65 1.88 2.76 4.13 5.8 7.1 5.69 2.82-.11 3.9-1.83 7.31-1.83 3.41 0 4.38 1.83 7.39 1.77 3.07-.06 5.01-2.76 6.88-5.52 2.16-3.15 3.05-6.2 3.1-6.36-.07-.03-5.95-2.29-6.01-9.09-.05-5.68 4.64-8.41 4.85-8.56-2.65-3.92-6.77-4.35-8.19-4.54z" />
        </svg>
      </div>
    )
  }
  return <img src={p.cover} alt={p.name} loading="lazy" className="h-full w-full object-cover object-top" />
}

export default function WorksPage({ onBack, onOpenCase }: { onBack: () => void; onOpenCase: (id: string) => void }) {
  return (
    <motion.div
      className="min-h-screen bg-meadow-bg"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto w-full max-w-[1160px] px-5 py-8 sm:px-6 sm:py-10">
        <button onClick={onBack} className="wbtn mb-8 h-11 pl-2 pr-5">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-meadow-ink text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
          </span>
          Go back
        </button>

        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-meadow-deep">Portfolio</p>
        <h1 className="mt-2 font-display text-[clamp(26px,4vw,44px)] font-bold tracking-[-0.03em] text-meadow-ink">All work.</h1>
        <p className="mt-2 max-w-lg text-[15px] text-meadow-muted">
          Case studies and live sites. Tap a product for the full case study, or a live site to visit it.
        </p>

        <div className="mx-auto mt-10 grid max-w-[920px] grid-cols-1 gap-8">
          {projects.map((p) => {
            const hasCase = !!caseStudies[p.id]
            const Wrapper = hasCase ? 'button' : p.kind === 'site' ? 'a' : 'button'
            const props = hasCase
              ? { type: 'button' as const, onClick: () => onOpenCase(p.id) }
              : p.kind === 'site'
                ? { href: p.href, target: '_blank', rel: 'noopener' }
                : { type: 'button' as const, onClick: () => onOpenCase(p.id) }
            return (
              <Wrapper
                key={p.id}
                {...(props as any)}
                className="group block w-full overflow-hidden rounded-[20px] border border-black/10 bg-white text-left shadow-[0_24px_60px_-26px_rgba(21,40,28,0.42)]"
              >
                {/* browser chrome */}
                <div className="flex items-center gap-2 border-b border-black/5 bg-[#f3f5f3] px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 h-5 flex-1 rounded-md bg-black/[0.04]" />
                </div>

                {/* preview + button-on-hover (no zoom) */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#e9efe9]">
                  <Media p={p} />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-meadow-ink/0 opacity-0 transition-all duration-300 group-hover:bg-meadow-ink/35 group-hover:opacity-100">
                    <span className="wbtn">{hasCase ? 'View case study' : 'Visit site'}</span>
                  </div>
                </div>

                {/* caption */}
                <div className="flex items-center justify-between gap-3 px-5 py-4">
                  <div>
                    <div className="font-semibold text-meadow-ink">{p.name}</div>
                    <div className="text-xs text-meadow-muted">{p.tag}</div>
                  </div>
                  <span className="text-sm font-semibold text-meadow-deep">{hasCase ? 'View' : 'Visit'}</span>
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
