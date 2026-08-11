import { GlassCard } from './ui/glass-card'

const items = [
  { ico: '🧭', t: 'Product thinking', d: 'Flows and systems mapped before a single pixel, so the work solves the real problem, not just the surface.' },
  { ico: '✨', t: 'AI-native design', d: 'Designing with and for AI: intelligent products and interfaces that still feel calm and human.' },
  { ico: '🧩', t: 'Design systems', d: 'Scalable, consistent components and tokens your team can actually build on.' },
  { ico: '⚡', t: 'Fast delivery', d: 'Momentum without the mess. Clear milestones and quick, dependable turnarounds.' },
  { ico: '🎯', t: 'Pixel-perfect', d: 'Obsessive final polish, shipped exactly as designed, down to the last state.' },
  { ico: '🤝', t: 'Ongoing support', d: 'I stick around after launch to iterate, measure, and keep improving the work.' },
]

export default function Benefits() {
  return (
    <section id="benefits" className="relative z-10 py-20">
      <div className="mx-auto w-full max-w-[1160px] px-6">
        <div className="mb-11 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-meadow-deep">What you get</p>
          <h2 className="mt-3 font-display text-[clamp(26px,3.6vw,40px)] font-bold leading-tight tracking-[-0.03em] text-meadow-ink">
            The partner you deserve.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <GlassCard key={it.t} className="gap-3 !border-white/50 p-6 !text-meadow-ink">
              <div className="text-3xl">{it.ico}</div>
              <h3 className="text-lg font-semibold">{it.t}</h3>
              <p className="text-sm leading-relaxed text-meadow-ink/75">{it.d}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
