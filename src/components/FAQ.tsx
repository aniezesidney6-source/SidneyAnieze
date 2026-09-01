import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  ['How do we get started?', 'Book an intro call or send an email. We scope it together and I share a clear plan, timeline and quote before anything begins.'],
  ['What do you design?', 'Product and app UI/UX, AI product interfaces, design systems, and marketing sites, from first concept to shipped product.'],
  ['Do you also build the site?', 'Yes. I design and build production sites like the ones in my work, and hand off clean, buildable specs for app engineering teams.'],
  ['How long does a project take?', 'A focused site is usually one to three weeks. Product work depends on scope, we agree milestones up front so there are no surprises.'],
  ['What tools do you use?', 'Figma for design, Framer and Next.js for build, Rive for motion, and modern web tooling throughout.'],
  ['Do you work on AI products?', 'Absolutely, it is a focus. I design intelligent flows and interfaces that stay clear and human as the product gets smarter.'],
  ['What is your pricing?', 'Project-based and quoted after our intro call, once the scope is clear. You always know the number before we start.'],
  ['Where are you based?', 'Lagos, Nigeria, working with founders and teams worldwide across time zones.'],
]

export default function FAQ() {
  const [open, setOpen] = useState(-1)
  return (
    <section id="faq" className="relative z-10 py-20">
      <div className="mx-auto w-full max-w-[760px] px-6">
        <div className="mb-11 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-meadow-deep">FAQ</p>
          <h2 className="mt-3 font-display text-[clamp(26px,3.6vw,40px)] font-bold leading-tight tracking-[-0.03em] text-meadow-ink">
            Got questions? I&rsquo;ve got answers.
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i
            return (
              <div
                key={q}
                className="overflow-hidden rounded-[30px] bg-white shadow-[inset_0_2px_3px_rgba(255,255,255,0.9),inset_0_-4px_10px_rgba(21,40,28,0.07),0_6px_18px_rgba(21,40,28,0.06)]"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-base font-semibold text-meadow-ink"
                >
                  <span>{q}</span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-meadow-ink text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_2px_5px_rgba(21,40,28,0.3)] transition-transform duration-300 ${
                      isOpen ? 'rotate-[135deg]' : ''
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], opacity: { duration: 0.35 } }}
                    >
                      <p className="px-5 pb-5 text-[15px] leading-relaxed text-meadow-muted">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
