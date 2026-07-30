import { useState, useEffect, type ReactNode } from 'react'
import { Info } from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'

export interface TocItem { id: string; title: string }

interface LegalLayoutProps {
  tag?: string
  titleTop: string
  titleAccent: string
  accent?: 'blue' | 'teal'
  subtitle: string
  sections: TocItem[]
  children: ReactNode
}

/** Layout partagé des pages légales — Navbar + hero + sommaire sticky + contenu + Footer */
export default function LegalLayout({
  tag = 'Légal',
  titleTop,
  titleAccent,
  accent = 'blue',
  subtitle,
  sections,
  children,
}: LegalLayoutProps) {
  const [active, setActive] = useState(sections[0]?.id ?? '')

  useEffect(() => {
    const onScroll = () => {
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s.id)
        if (el && el.getBoundingClientRect().top < 160) {
          setActive(s.id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' })
  }

  const accentText = accent === 'teal' ? 'text-teal' : 'text-primary'

  return (
    <div className="bg-navy-50 min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 px-6 bg-white border-b border-navy-200/60">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: accent === 'teal' ? '#3B82F6' : '#1E5BB8' }}
        />
        <div
          className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: accent === 'teal' ? '#1E5BB8' : '#3B82F6' }}
        />
        <div className="container-max relative z-10">
          <span className={`inline-flex items-center gap-2 text-sm font-semibold rounded-full px-4 py-1.5 mb-6 ${
            accent === 'teal' ? 'bg-teal/10 text-teal' : 'bg-primary/10 text-primary'
          }`}>
            {tag}
          </span>
          <h1 className="font-bold text-4xl md:text-5xl text-navy leading-tight">
            {titleTop}<br />
            <span className={accentText}>{titleAccent}</span>
          </h1>
          <p className="text-navy-500 text-base mt-5 max-w-2xl">{subtitle}</p>
        </div>
      </section>

      {/* Layout : sommaire + contenu */}
      <div className="container-max px-6 py-14 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
        {/* Sommaire sticky */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <p className="text-xs font-bold uppercase tracking-wider text-navy-400 mb-4 px-4">Sommaire</p>
            <nav className="space-y-1">
              {sections.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`w-full flex items-center gap-3 text-left px-4 py-2.5 rounded-xl text-sm transition-all duration-150 ${
                    active === s.id
                      ? 'bg-white shadow-card text-navy font-semibold'
                      : 'text-navy-500 hover:text-navy hover:bg-white/60'
                  }`}
                >
                  <span className={`text-xs font-bold tabular-nums ${active === s.id ? accentText : 'text-navy-300'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{s.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Contenu */}
        <main className="max-w-3xl">{children}</main>
      </div>

      <Footer />
    </div>
  )
}

/** Section légale avec numéro + titre */
export function LegalSection({ id, num, title, children }: { id: string; num: number; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mb-14 scroll-mt-28">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-orange text-white text-sm font-bold">
          {String(num).padStart(2, '0')}
        </span>
        <h2 className="font-bold text-2xl text-navy">{title}</h2>
      </div>
      <div className="space-y-4 text-navy-600 leading-relaxed [&_strong]:text-navy [&_strong]:font-semibold [&_em]:text-navy-700 [&_em]:not-italic [&_em]:font-medium [&_h3]:text-navy [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:mt-6 [&_a]:text-primary [&_a]:font-medium hover:[&_a]:underline">
        {children}
      </div>
    </section>
  )
}

/** Encadré d'information */
export function LegalNote({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 items-start rounded-2xl border border-primary/20 bg-primary/5 p-4">
      <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
      <p className="text-sm text-navy-600 m-0">{children}</p>
    </div>
  )
}

/** Liste à puces stylée */
export function LegalList({ children }: { children: ReactNode }) {
  return (
    <ul className="space-y-2.5 pl-1 [&>li]:relative [&>li]:pl-6 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-2.5 [&>li]:before:w-2 [&>li]:before:h-2 [&>li]:before:rounded-full [&>li]:before:bg-teal">
      {children}
    </ul>
  )
}
