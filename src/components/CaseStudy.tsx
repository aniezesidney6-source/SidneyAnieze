import { motion } from 'framer-motion'
import { caseStudies } from '@/data/caseStudies'

const CAL = 'https://cal.com/sidney-anieze-52wseh'

function Cover({ cover, name }: { cover: string; name: string }) {
  if (!cover) {
    return (
      <div className="flex aspect-[16/9] w-full items-center justify-center rounded-3xl bg-gradient-to-br from-[#111] to-[#1c1c1e] text-white/90 shadow-card">
        <svg width="72" height="72" viewBox="0 0 56 56" fill="currentColor" aria-hidden>
          <path d="M31.18 7.2c1.56-1.87 2.62-4.46 2.33-7.06-2.26.09-4.99 1.5-6.61 3.38-1.45 1.67-2.72 4.35-2.38 6.91 2.52.19 5.09-1.27 6.66-3.23zM33.46 10.98c-3.69-.21-6.83 2.09-8.59 2.09-1.77 0-4.47-1.98-7.39-1.93-3.8.05-7.33 2.21-9.27 5.63-3.97 6.87-1.04 17.05 2.82 22.65 1.88 2.76 4.13 5.8 7.1 5.69 2.82-.11 3.9-1.83 7.31-1.83 3.41 0 4.38 1.83 7.39 1.77 3.07-.06 5.01-2.76 6.88-5.52 2.16-3.15 3.05-6.2 3.1-6.36-.07-.03-5.95-2.29-6.01-9.09-.05-5.68 4.64-8.41 4.85-8.56-2.65-3.92-6.77-4.35-8.19-4.54z" />
        </svg>
      </div>
    )
  }
  return (
    <div className="aspect-[16/9] w-full overflow-hidden rounded-3xl bg-[#e9efe9] shadow-card">
      <img src={cover} alt={name} className="h-full w-full object-cover object-top" />
    </div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.14em] text-meadow-deep">{children}</p>
}

export default function CaseStudy({
  id,
  onBack,
  onOpenCase,
}: {
  id: string
  onBack: () => void
  onOpenCase: (id: string) => void
}) {
  const c = caseStudies[id]
  if (!c) return null
  const nextC = caseStudies[c.next]

  return (
    <motion.div
      className="min-h-screen bg-meadow-bg"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* top bar */}
      <div className="sticky top-0 z-30 border-b border-black/5 bg-meadow-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1160px] items-center justify-between px-6 py-4">
          <button onClick={onBack} className="wbtn h-11 gap-2.5 pl-2 pr-6">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-meadow-ink text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
            </span>
            Go back
          </button>
          <span className="text-sm font-semibold text-meadow-ink">{c.name}</span>
          <span className="hidden rounded-full bg-meadow-accent/12 px-3 py-1.5 text-xs font-medium text-meadow-deep sm:inline-block">{c.eyebrow}</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1160px] px-6">
        {/* hero */}
        <div className="pt-14">
          <Label>{c.eyebrow}</Label>
          <h1 className="mt-3 font-display text-[clamp(36px,6vw,72px)] font-bold leading-[1.02] tracking-[-0.04em] text-meadow-ink">{c.name}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-2.5 text-sm text-meadow-muted">
            <span className="rounded-full border border-black/10 px-3 py-1">{c.year}</span>
            <span className="rounded-full border border-black/10 px-3 py-1">{c.duration}</span>
            <span className="rounded-full border border-black/10 px-3 py-1">{c.platform}</span>
            <span className="text-meadow-deep">{c.hookStat}</span>
          </div>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-meadow-muted">{c.overview}</p>
          {c.liveUrl && (
            <a href={c.liveUrl} target="_blank" rel="noopener" className="cta-btn mt-6 h-11">
              Visit live site
            </a>
          )}
        </div>

        {/* cover */}
        <div className="mt-10">
          <Cover cover={c.cover} name={c.name} />
        </div>

        {/* info strip */}
        <div className="mt-12 grid gap-6 border-y border-black/10 py-7 sm:grid-cols-3">
          {[
            ['Role', c.role.join(', ')],
            ['Tools', c.tools],
            ['Platform', c.platform],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="text-xs uppercase tracking-widest text-meadow-muted">{k}</p>
              <p className="mt-1 font-medium text-meadow-ink">{v}</p>
            </div>
          ))}
        </div>

        {/* problem */}
        <section className="grid gap-8 py-16 md:grid-cols-2">
          <div>
            <Label>The problem</Label>
            <h2 className="mt-3 font-display text-[clamp(24px,3.4vw,38px)] font-bold leading-tight tracking-[-0.03em] text-meadow-ink">{c.problem.heading}</h2>
          </div>
          <div className="flex flex-col gap-4 text-[15px] leading-relaxed text-meadow-muted">
            {c.problem.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* process */}
        <section className="py-8">
          <Label>The process</Label>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.process.map((s) => (
              <div key={s.n} className="rounded-2xl border border-white/60 bg-white/40 p-6 backdrop-blur-md">
                <span className="font-display text-2xl font-bold text-meadow-deep">{s.n}</span>
                <h3 className="mt-2 font-semibold text-meadow-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-meadow-ink/75">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* the design — phone mockups */}
        {c.screens.length > 0 && (
          <section className="py-8">
            <Label>The design</Label>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {c.screens.map((s, i) => (
                <img key={i} src={s} alt={`${c.name} screen ${i + 1}`} loading="lazy" className="w-full drop-shadow-2xl" />
              ))}
            </div>
          </section>
        )}

        {/* decisions */}
        <section className="py-16">
          <Label>Key decisions</Label>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {c.decisions.map((d, i) => (
              <div key={i} className="rounded-2xl border border-black/5 bg-white p-6 shadow-card">
                <span className="font-display text-lg font-bold text-meadow-deep">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-semibold text-meadow-ink">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-meadow-muted">{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* outcomes */}
        <section className="rounded-3xl bg-meadow-ink px-8 py-12 text-white">
          <Label>Impact &amp; outcomes</Label>
          <div className="mt-6 grid gap-8 sm:grid-cols-3">
            {c.outcomes.map((o, i) => (
              <div key={i}>
                <div className="font-display text-[clamp(36px,5vw,56px)] font-bold leading-none text-white">{o.n}</div>
                <div className="mt-2 text-sm text-white/70">{o.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* reflection */}
        <section className="grid gap-6 py-16 md:grid-cols-[240px_1fr]">
          <div>
            <Label>What I&rsquo;d do differently</Label>
          </div>
          <p className="font-display text-[clamp(20px,2.6vw,28px)] font-medium leading-snug text-meadow-ink">{c.reflection}</p>
        </section>

        {/* next + cta */}
        <section className="flex flex-col items-center gap-6 border-t border-black/10 py-16 text-center">
          {nextC && (
            <button onClick={() => onOpenCase(nextC.id)} className="group">
              <p className="text-xs uppercase tracking-widest text-meadow-muted">Next project</p>
              <p className="mt-2 font-display text-3xl font-bold text-meadow-ink transition-colors group-hover:text-meadow-deep">{nextC.name}</p>
            </button>
          )}
          <a href={CAL} target="_blank" rel="noopener" className="cta-btn h-11">
            Book a call
          </a>
        </section>
      </div>
    </motion.div>
  )
}
