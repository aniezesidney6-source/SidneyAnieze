import { motion } from 'framer-motion'
import { projects } from '@/data/projects'

const CW = 'clamp(210px, 26vw, 360px)'

export default function WorkDeck({ onSeeAll }: { onSeeAll: () => void }) {
  const cards = projects.filter((p) => p.kind === 'site')
  const mid = (cards.length - 1) / 2

  return (
    <section className="flex flex-col items-center gap-10 overflow-x-clip px-5 pb-20" aria-label="Selected work">
      <div className="relative w-full" style={{ height: 'clamp(230px, 30vw, 360px)' }}>
        {cards.map((p, i) => (
          <motion.a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noopener"
            aria-label={`Visit ${p.name}`}
            className="group absolute top-[6%] block overflow-hidden rounded-2xl border border-black/5 bg-[#e9efe9] shadow-[0_20px_44px_rgba(21,40,28,0.22)]"
            style={{ width: CW, aspectRatio: '1440 / 1024', left: `calc(50% - (${CW}) / 2)`, top: '50%', marginTop: `calc((${CW}) / 1.406 / -2)`, transformOrigin: 'center center', zIndex: i }}
            initial={{ x: `${(i - mid) * 54}%`, y: Math.abs(i - mid) * 5, rotate: (i - mid) * 4 }}
            whileHover={{ y: -18, rotate: 0, scale: 1.05, zIndex: 60, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
          >
            <img src={p.cover} alt={p.name} loading="lazy" className="h-full w-full object-cover object-top" onError={(e) => (e.currentTarget.style.opacity = '0')} />
            {p.badge && (
              <span className="absolute left-2 top-2 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-meadow-ink shadow-[0_4px_12px_rgba(21,40,28,0.14)]">
                {p.badge}
              </span>
            )}
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-2.5 pb-2.5 pt-7 text-left text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="block text-[12px] font-semibold leading-tight">{p.name}</span>
              <span className="block text-[10px] opacity-80">{p.tag}</span>
            </span>
          </motion.a>
        ))}
      </div>

      <button
        type="button"
        onClick={onSeeAll}
        className="pill-3d rounded-full px-7 py-3.5 text-[15px] font-semibold text-meadow-ink transition-transform hover:-translate-y-0.5"
      >
        See all works
      </button>
    </section>
  )
}
