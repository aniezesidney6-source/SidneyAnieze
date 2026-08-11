import { motion } from 'framer-motion'
import FlagshipMockup from './FlagshipMockup'

const CAL = 'https://cal.com/sidney-anieze-52wseh'
const RISE = [0.16, 1, 0.3, 1] as const

export default function Hero({ onSeeAll }: { onSeeAll: () => void }) {
  return (
    <section id="home" className="relative z-10 overflow-hidden pt-36">
      <div className="mx-auto flex max-w-[820px] flex-col items-center px-6 text-center">
        <motion.h1
          className="font-display text-[clamp(30px,4.6vw,58px)] font-bold leading-[1.06] tracking-[-0.035em] text-meadow-ink"
          initial={{ y: 22, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.8, ease: RISE }}
        >
          <span className="block">Product &amp; AI designer</span>
          <span className="block">designing what&rsquo;s next.</span>
        </motion.h1>

        <motion.p
          className="mt-5 max-w-[52ch] text-balance text-[16px] font-medium leading-relaxed text-meadow-muted"
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: RISE }}
        >
          I help founders and teams turn complex, AI-driven ideas into clear, human products, designed and shipped end to end.
        </motion.p>

        <motion.div
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.7, ease: RISE }}
        >
          <a href={CAL} target="_blank" rel="noopener" className="cta-btn h-11">
            Book a call
          </a>
          <a href="/Sidney-Anieze-CV.pdf" download className="wbtn h-11 px-6">
            Download CV
          </a>
        </motion.div>
      </div>

      <div id="work" className="mt-16">
        <FlagshipMockup onSeeAll={onSeeAll} />
      </div>
    </section>
  )
}
