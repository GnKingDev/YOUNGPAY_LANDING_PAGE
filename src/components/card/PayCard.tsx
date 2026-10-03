import { Snowflake, Wifi } from 'lucide-react'

type Props = {
  frozen?: boolean
  revealed?: boolean
  physical?: boolean
  className?: string
}

// Motif guilloché (celui des billets et des cartes) — purement décoratif
function Guilloche() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 252" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <g fill="none" stroke="#FFFFFF" strokeOpacity="0.07" strokeWidth="1">
        {Array.from({ length: 22 }, (_, i) => (
          <ellipse key={i} cx="330" cy="70" rx="190" ry="62" transform={`rotate(${i * 8.2} 330 70)`} />
        ))}
      </g>
    </svg>
  )
}

export default function PayCard({ frozen = false, revealed = false, physical = false, className = '' }: Props) {
  const number = revealed ? ['4532', '0917', '3348', '4821'] : ['4532', '••••', '••••', '4821']

  return (
    <div className={`w-full ${className}`} style={{ containerType: 'inline-size' }}>
    <div
      className="relative w-full aspect-[1.586] rounded-[18px] overflow-hidden text-white select-none"
      style={{
        background: 'linear-gradient(140deg, #2A6BCB 0%, #1E5BB8 38%, #123C79 100%)',
        boxShadow: '0 30px 60px -20px rgba(15,35,71,0.55), inset 0 1px 0 rgba(255,255,255,0.18)',
      }}
      role="img"
      aria-label={`Carte Visa YoungPay${physical ? ' physique' : ' virtuelle'}${frozen ? ', gelée' : ''}`}
    >
      <Guilloche />

      <div className="relative h-full flex flex-col justify-between p-[7%]">
        {/* Haut : marque + type */}
        {/* Toutes les tailles sont en cqw : la carte reste identique à 190 px comme à 420 px */}
        <div className="flex items-start justify-between">
          <span className="font-bold text-[4.8cqw] leading-none tracking-tight">YoungPay</span>
          <span className="text-[2.8cqw] font-semibold text-white/70">{physical ? 'Physique' : 'Virtuelle'}</span>
        </div>

        {/* Puce */}
        <div className="flex items-center gap-[3cqw]">
          <div className="w-[13%] aspect-[1.3] rounded-[1.5cqw] relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #F2CD7A, #E3B04B 55%, #B98A2E)' }}>
            <div className="absolute inset-x-0 top-1/2 h-px bg-black/20" />
            <div className="absolute inset-y-0 left-1/3 w-px bg-black/20" />
            <div className="absolute inset-y-0 right-1/3 w-px bg-black/20" />
          </div>
          {physical && <Wifi className="w-[5.5cqw] h-[5.5cqw] rotate-90 text-white/70" aria-hidden="true" />}
        </div>

        {/* Numéro */}
        <div className="font-semibold whitespace-nowrap tracking-[0.1em] text-[5.6cqw] leading-none" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {number.map((g, i) => (
            <span key={i} className="inline-block mr-[0.55em] last:mr-0">{g}</span>
          ))}
        </div>

        {/* Bas : titulaire, expiration, CVV, réseau */}
        <div className="flex items-end justify-between gap-[3cqw]">
          <div className="flex gap-[4.5cqw] text-[2.7cqw] leading-tight whitespace-nowrap">
            <div>
              <div className="text-white/60">Titulaire</div>
              <div className="font-semibold text-[3.3cqw] mt-[0.5cqw]">Aminata Camara</div>
            </div>
            <div>
              <div className="text-white/60">Expire</div>
              <div className="font-semibold text-[3.3cqw] mt-[0.5cqw]" style={{ fontVariantNumeric: 'tabular-nums' }}>09/29</div>
            </div>
            <div>
              <div className="text-white/60">CVV</div>
              <div className="font-semibold text-[3.3cqw] mt-[0.5cqw]" style={{ fontVariantNumeric: 'tabular-nums' }}>{revealed ? '382' : '•••'}</div>
            </div>
          </div>
          <span className="font-extrabold italic text-[7.4cqw] leading-none tracking-tight">VISA</span>
        </div>
      </div>

      {/* Couche « gelée » */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-2 transition-opacity duration-500 motion-reduce:transition-none ${frozen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(220,235,255,0.72)', backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)' }}
        aria-hidden={!frozen}
      >
        <Snowflake className="w-9 h-9 text-primary" strokeWidth={1.6} />
        <span className="font-bold text-[#0F2347] text-sm">Carte gelée</span>
      </div>
    </div>
    </div>
  )
}
