import { GlassCard } from './ui/glass-card'

const steps = [
  { n: '01', t: 'Intro call', d: 'We talk goals, scope and timeline. No pressure, just clarity on what we are building and why.' },
  { n: '02', t: 'Strategy & wireframes', d: 'I map the flows and structure first, so every screen earns its place before visuals begin.' },
  { n: '03', t: 'Design & build', d: 'High-fidelity design, prototyped and built to spec, with you in the loop at each milestone.' },
  { n: '04', t: 'Launch & support', d: 'We ship it, then refine together based on how real people actually use it.' },
]

export default function Process() {
  return (
    <section id="process" className="relative z-10 py-20">
      <div className="mx-auto w-full max-w-[1160px] px-6">
        <div className="mb-11 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-meadow-deep">Process</p>
          <h2 className="mt-3 font-display text-[clamp(26px,3.6vw,40px)] font-bold leading-tight tracking-[-0.03em] text-meadow-ink">
            How I work.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-meadow-muted">
            A simple four-step ride from first hello to a site you are proud of.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <GlassCard key={s.n} className="gap-3 !border-white/50 p-6 !text-meadow-ink">
              <span className="font-display text-2xl font-bold text-meadow-deep">{s.n}</span>
              <h3 className="text-lg font-semibold">{s.t}</h3>
              <p className="text-sm leading-relaxed text-meadow-ink/75">{s.d}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
