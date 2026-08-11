type PropStyle = React.CSSProperties & { ['--rot']?: string }

export default function SkyProps() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <img
        src="/props/sun.png"
        alt=""
        className="prop absolute"
        style={{ top: '6%', right: '9%', width: 'clamp(84px,11vw,150px)', filter: 'drop-shadow(0 8px 20px rgba(243,180,74,.35))', animation: 'spin 90s linear infinite' }}
      />
      <img src="/props/cloud.png" alt="" className="prop absolute" style={{ top: '15%', left: '3%', width: 'clamp(150px,20vw,260px)', animation: 'drift 34s linear infinite' }} />
      <img src="/props/cloud.png" alt="" className="prop absolute" style={{ top: '30%', right: '6%', width: 'clamp(110px,15vw,190px)', opacity: 0.9, animation: 'drift 46s linear infinite reverse' }} />
      <img src="/props/cloud.png" alt="" className="prop absolute" style={{ top: '64%', left: '8%', width: 'clamp(150px,22vw,280px)', opacity: 0.82, animation: 'drift 40s linear infinite' }} />
      <img src="/props/cloud.png" alt="" className="prop absolute" style={{ top: '82%', right: '10%', width: 'clamp(120px,16vw,200px)', opacity: 0.78, animation: 'drift 52s linear infinite reverse' }} />
      <img
        src="/props/leaf.png"
        alt=""
        className="prop absolute"
        style={{ top: '38%', left: '5%', width: 'clamp(58px,7vw,88px)', ['--rot']: '-12deg', transform: 'rotate(-12deg)', animation: 'floaty 7s ease-in-out infinite' } as PropStyle}
      />
      <img
        src="/props/leaf.png"
        alt=""
        className="prop absolute"
        style={{ top: '86%', right: '7%', width: 'clamp(48px,6vw,72px)', ['--rot']: '18deg', transform: 'rotate(18deg)', animation: 'floaty 8s ease-in-out infinite' } as PropStyle}
      />
    </div>
  )
}
