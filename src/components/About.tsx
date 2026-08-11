const stats = [
  ['10+', 'Projects shipped'],
  ['3yrs', 'Pro experience'],
  ['∞', 'Curiosity'],
]

export default function About() {
  return (
    <section id="about" className="relative z-10 py-20">
      <div className="mx-auto grid w-full max-w-[1160px] items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-meadow-deep">About Me</p>
          <h2 className="mt-3 font-display text-[clamp(26px,3.6vw,40px)] font-bold leading-tight tracking-[-0.03em] text-meadow-ink">
            Crafting with clarity &amp; intention.
          </h2>
          <div className="mt-5 flex flex-col gap-4 text-[15px] leading-relaxed text-meadow-muted">
            <p>
              I am <strong className="font-normal">Sidney Anieze</strong>, a product and AI designer based in{' '}
              <strong className="font-normal">Lagos, Nigeria</strong>. I design intelligent digital products that feel
              intuitive, polished, and human, from first concept to pixel-perfect, shipped product.
            </p>
            <p>
              With a background in product design and <strong className="font-normal">mobile development</strong> (React
              Native, Kotlin), I bridge the gap between beautiful interfaces and what teams can actually build.
            </p>
            <p>
              Currently <strong className="font-normal">open for select product and AI design work</strong> and
              collaborative projects. Let&rsquo;s build something worth remembering.
            </p>
          </div>
          <div className="mt-8 flex gap-8">
            {stats.map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl font-bold text-meadow-ink">{n}</div>
                <div className="mt-1 text-xs text-meadow-muted">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[32px] bg-meadow-ink/5 shadow-card">
          <img src="/portrait.jpg" alt="Sidney Anieze" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-white/85 p-3 backdrop-blur-md">
            <img src="/avatar.jpg" alt="Sidney Anieze" className="h-11 w-11 rounded-full object-cover" />
            <div>
              <div className="text-sm font-semibold text-meadow-ink">Sidney Anieze</div>
              <div className="text-xs text-meadow-muted">Product &amp; AI Designer · Lagos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
