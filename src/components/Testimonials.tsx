const reviews = [
  ['AO', 'Adebayo Okafor', 'CEO · Oma Empire', 'Sidney delivered a design that completely exceeded our expectations. The attention to detail, the way he thought through every user interaction, it was clear he was solving real problems.'],
  ['FN', 'Funmi Nwosu', 'Product Manager · TechBridge', 'Working with Sidney was seamless. He takes briefs seriously, asks the right questions, and turns around work that is polished and purposeful.'],
  ['CC', 'Chioma C.', 'Founder · Luxurious Luchi Hairs', 'Sidney designed and built both of my brands online. The store looks premium and actually converts, and he handled everything.'],
  ['KE', 'Kelechi Eze', 'Founder · BuildLagos', 'Sidney does not just design screens, he thinks about the whole experience. The final product was far better for it.'],
  ['TA', 'Tunde A.', 'Startup Founder', 'He thinks in flows, not screens. Sidney mapped our whole product and the result felt obvious in the best way.'],
  ['AK', 'Amara Okoro', 'Product Lead', 'Rare to find a designer this strong on both craft and product thinking. Every handoff was clean and every decision reasoned.'],
]

function Star() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function Card({ r }: { r: (typeof reviews)[number] }) {
  const [av, name, role, body] = r
  return (
    <div className="flex w-[clamp(280px,32vw,380px)] shrink-0 flex-col gap-4 rounded-3xl border border-black/10 bg-white p-7">
      <div className="flex gap-1 text-meadow-deep">{Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}</div>
      <p className="text-[15px] leading-relaxed text-meadow-ink">{body}</p>
      <div className="mt-auto flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-meadow-accent/15 text-sm font-semibold text-meadow-deep">{av}</div>
        <div>
          <p className="text-sm font-semibold text-meadow-ink">{name}</p>
          <p className="text-xs text-meadow-muted">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto mb-11 w-full max-w-[1160px] px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-meadow-deep">Kind words</p>
        <h2 className="mt-3 font-display text-[clamp(26px,3.6vw,40px)] font-bold leading-tight tracking-[-0.03em] text-meadow-ink">
          What clients are saying.
        </h2>
      </div>
      <div className="marquee-mask relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="marquee-track flex w-max gap-5 px-2.5">
          {[...reviews, ...reviews].map((r, i) => (
            <Card key={i} r={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
