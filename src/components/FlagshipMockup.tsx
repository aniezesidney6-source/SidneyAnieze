import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const SITE = 'https://luxuriousluchihairs.com/'
// full-page capture (entire page height) so it can scroll inside the frame
const SHOT = 'https://image.thum.io/get/fullpage/width/1200/noanimate/https://luxuriousluchihairs.com/'

const ICO = 'text-[#8a8a8a]'
const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export default function FlagshipMockup({ onSeeAll }: { onSeeAll: () => void }) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [travel, setTravel] = useState(0)

  // drive the inner scroll from page scroll: starts at the site's top, then pans
  // down at ~0.6x page speed (gentle parallax) as the visitor scrolls the portfolio
  const { scrollY } = useScroll()
  const yRaw = useTransform(scrollY, [0, Math.max(1, travel * 1.7)], [0, -travel])
  const y = useSpring(yRaw, { stiffness: 120, damping: 30, mass: 0.4 })

  // how far the capture can pan = its rendered height minus the frame's visible height
  const measure = () => {
    const vp = viewportRef.current
    const img = imgRef.current
    if (!vp || !img || !img.clientHeight) return
    // cap the pan so the site scrolls at a comfortable pace (~4 screens) instead of racing
    const full = img.clientHeight - vp.clientHeight
    const cap = vp.clientHeight * 4
    setTravel(Math.max(0, Math.min(full, cap)))
  }

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="flex flex-col items-center gap-12 px-5 pb-20" aria-label="Selected work">
      <motion.a
        href={SITE}
        target="_blank"
        rel="noopener"
        aria-label="Visit Luxurious Luchi Hairs"
        className="relative block w-full max-w-[1160px] overflow-hidden rounded-[10px] bg-white shadow-[0_0_1px_rgba(0,0,0,0.7),0_10px_50px_rgba(0,0,0,0.2)]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Safari (Big Sur) toolbar */}
        <div className="relative flex h-[52px] items-center gap-3 border-b border-black/10 bg-white px-5">
          {/* traffic lights */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full border border-[#CE5347] bg-[#EE6A5F]" />
            <span className="h-3 w-3 rounded-full border border-[#D6A243] bg-[#F5BD4F]" />
            <span className="h-3 w-3 rounded-full border border-[#58A942] bg-[#61C454]" />
          </div>

          {/* sidebar + back/forward */}
          <div className={`ml-2 hidden items-center gap-3 sm:flex ${ICO}`}>
            <svg width="18" height="18" viewBox="0 0 20 20" {...stroke}>
              <rect x="2.5" y="4" width="15" height="12" rx="2.5" />
              <line x1="8" y1="4" x2="8" y2="16" />
            </svg>
            <svg width="18" height="18" viewBox="0 0 20 20" {...stroke}>
              <path d="M12 5l-5 5 5 5" />
            </svg>
            <svg width="18" height="18" viewBox="0 0 20 20" {...stroke} className="text-[#c7c7c7]">
              <path d="M8 5l5 5-5 5" />
            </svg>
          </div>

          {/* centered address bar */}
          <div className="absolute left-1/2 top-1/2 flex h-7 w-[min(46%,440px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1.5 rounded-md bg-black/[0.05]">
            <svg width="11" height="13" viewBox="0 0 12 14" fill="#9e9e9e" aria-hidden>
              <path d="M3 6V4a3 3 0 1 1 6 0v2h.5A1.5 1.5 0 0 1 11 7.5v4A1.5 1.5 0 0 1 9.5 13h-7A1.5 1.5 0 0 1 1 11.5v-4A1.5 1.5 0 0 1 2.5 6H3zm1.5 0h3V4a1.5 1.5 0 0 0-3 0v2z" />
            </svg>
            <span className="text-[13px] leading-none text-[#4c4c4c]">luxuriousluchihairs.com</span>
          </div>

          {/* right toolbar group */}
          <div className={`ml-auto hidden items-center gap-3 sm:flex ${ICO}`}>
            <svg width="18" height="18" viewBox="0 0 20 20" {...stroke}>
              <path d="M10 13V4M10 4L7 7M10 4l3 3" />
              <path d="M5 11v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-4" />
            </svg>
            <svg width="18" height="18" viewBox="0 0 20 20" {...stroke}>
              <path d="M10 5v10M5 10h10" />
            </svg>
            <svg width="18" height="18" viewBox="0 0 20 20" {...stroke}>
              <rect x="3" y="5" width="10" height="10" rx="2" />
              <rect x="7" y="3" width="10" height="10" rx="2" />
            </svg>
          </div>
        </div>

        {/* website preview — full-page capture pans as the visitor scrolls */}
        <div ref={viewportRef} className="aspect-[1280/731] w-full overflow-hidden bg-[#e9efe9]">
          <motion.img
            ref={imgRef}
            src={SHOT}
            alt="Luxurious Luchi Hairs, a live e-commerce build"
            style={{ y }}
            onLoad={measure}
            className="block w-full will-change-transform"
            onError={(e) => (e.currentTarget.style.opacity = '0')}
          />
        </div>
      </motion.a>

      <button type="button" onClick={onSeeAll} className="wbtn h-11 px-7 text-[15px]">
        See all works
      </button>
    </section>
  )
}
