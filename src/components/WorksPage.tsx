import { motion } from 'framer-motion'
import { projects, type Project } from '@/data/projects'

function Media({ p }: { p: Project }) {
  if (!p.cover) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#111] to-[#1c1c1e] text-white/90">
        <svg width="40" height="40" viewBox="0 0 56 56" fill="currentColor" aria-hidden>
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
        <button onClick={onBack} className="pill-3d mb-8 inline-flex h-10 items-center rounded-full px-5 text-sm font-semibold text-meadow-ink">
          Back
        </button>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-meadow-deep">Portfolio</p>
        <h1 className="mt-2 font-display text-[clamp(26px,4vw,44px)] font-bold tracking-[-0.03em] text-meadow-ink">All work.</h1>
        <p className="mt-2 max-w-lg text-[15px] text-meadow-muted">
          Case studies and live sites. Tap a product for the full case study, or visit a live site in a new tab.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-6">
          {projects.map((p) => {
            const Wrapper = p.kind === 'site' ? 'a' : 'button'
            const props =
              p.kind === 'site'
                ? { href: p.href, target: '_blank', rel: 'noopener' }
                : { type: 'button' as const, onClick: () => onOpenCase(p.id) }
            return (
              <Wrapper
                key={p.id}
                {...(props as any)}
                className="group block overflow-hidden rounded-3xl border border-black/5 bg-white text-left shadow-card transition-transform hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#e9efe9]">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                    <Media p={p} />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <div className="font-semibold text-meadow-ink">{p.name}</div>
                    <div className="text-xs text-meadow-muted">{p.tag}</div>
                  </div>
                  <span className="text-sm font-semibold text-meadow-deep">{p.kind === 'site' ? 'Visit' : 'View'}</span>
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
