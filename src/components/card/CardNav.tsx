import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/logo_full.png'

const LINKS = [
  { label: 'Obtenir la carte', href: '#obtenir' },
  { label: 'Tarifs',           href: '#tarifs' },
  { label: 'Sécurité',         href: '#securite' },
  { label: 'Questions',        href: '#faq' },
]

const focus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

export default function CardNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200
      ${scrolled || open ? 'bg-[#F6F8FC]/95 backdrop-blur-md border-b border-navy-200/70' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-[72px] flex items-center justify-between">
        <a href="/" className={`rounded-md ${focus}`}>
          <img src={logo} alt="YoungPay" className="h-12 w-auto" style={{ mixBlendMode: 'multiply' }} />
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Sections">
          {LINKS.map(l => (
            <a key={l.href} href={l.href}
              className={`px-3.5 py-2 rounded-lg text-[15px] font-medium text-navy-600 hover:text-[#0F2347] ${focus}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#telecharger"
          className={`hidden md:inline-flex items-center rounded-xl bg-primary text-white font-semibold text-[15px] px-5 py-2.5 hover:bg-[#0F2347] transition-colors ${focus}`}>
          Télécharger l’app
        </a>

        <button type="button" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls="menu-mobile"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-[#0F2347] ${focus}`}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" className="md:hidden border-t border-navy-200 px-5 pb-6 pt-3" aria-label="Sections">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`block py-3 text-[16px] font-medium text-[#0F2347] border-b border-navy-100 ${focus}`}>
              {l.label}
            </a>
          ))}
          <a href="#telecharger" onClick={() => setOpen(false)}
            className={`mt-5 flex justify-center rounded-xl bg-primary text-white font-semibold py-3 ${focus}`}>
            Télécharger l’app
          </a>
        </nav>
      )}
    </header>
  )
}
