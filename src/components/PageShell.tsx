import { type ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface PageShellProps {
  tag: string
  title: ReactNode
  subtitle?: string
  children: ReactNode
  /** Contenu optionnel aligné à droite du hero (ex: carte, illustration) */
  heroAside?: ReactNode
}

/**
 * Coquille commune des pages secondaires : Navbar + hero atmosphérique + contenu + Footer.
 * Garde toutes les pages cohérentes avec l'identité YoungPay (bleu #1E5BB8, navy, Poppins).
 */
export default function PageShell({ tag, title, subtitle, children, heroAside }: PageShellProps) {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pb-20 px-6">
        {/* fond dégradé doux */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #F4F8FF 55%, #EAF1FD 100%)' }} />
        {/* blobs bleus */}
        <div className="absolute -top-24 right-0 w-[460px] h-[460px] rounded-full blur-3xl opacity-[0.10] pointer-events-none translate-x-1/4"
          style={{ background: 'radial-gradient(circle, #1E5BB8, #3B82F6)' }} />
        <div className="absolute -bottom-32 -left-24 w-[380px] h-[380px] rounded-full blur-3xl opacity-[0.07] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #3B82F6, #1E5BB8)' }} />
        {/* grille de points */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #0F172A 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className="container-max relative z-10">
          <div className={heroAside ? 'grid lg:grid-cols-2 gap-12 items-center' : 'max-w-3xl'}>
            <div className="animate-fade-up">
              <span className="badge-orange mb-5">{tag}</span>
              <h1 className="font-bold text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.08] text-navy">
                {title}
              </h1>
              {subtitle && (
                <p className="text-navy-500 text-lg leading-relaxed mt-6 max-w-xl">{subtitle}</p>
              )}
            </div>
            {heroAside && <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>{heroAside}</div>}
          </div>
        </div>
      </section>

      {children}

      <Footer />
    </div>
  )
}

/* ── Primitives réutilisables ─────────────────────────────────────────── */

/** En-tête de section centré */
export function SectionHeading({ tag, title, subtitle }: { tag?: string; title: ReactNode; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      {tag && <span className="badge-orange mb-5">{tag}</span>}
      <h2 className="font-bold text-3xl md:text-4xl text-navy mb-4">{title}</h2>
      {subtitle && <p className="text-navy-500 text-lg">{subtitle}</p>}
    </div>
  )
}

/** Carte avec icône + titre + texte */
export function FeatureCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="card card-hover p-6 border border-navy-100">
      <div className="icon-box mb-4">{icon}</div>
      <h3 className="font-semibold text-navy text-lg mb-2">{title}</h3>
      <p className="text-navy-500 text-sm leading-relaxed">{text}</p>
    </div>
  )
}

/** Bloc de code stylé (dev) */
export function CodeBlock({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-navy-800/40" style={{ background: '#0F172A' }}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        {label && <span className="ml-2 text-navy-400 text-xs font-mono">{label}</span>}
      </div>
      <pre className="p-5 overflow-x-auto text-[13px] leading-relaxed font-mono text-navy-200">{children}</pre>
    </div>
  )
}
