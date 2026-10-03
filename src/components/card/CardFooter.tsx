import { Mail, MapPin, Phone } from 'lucide-react'
import logo from '../../assets/logo_full.png'
import PayCard from './PayCard'
import StoreButtons from './StoreButtons'

const LINKS: { group: string; items: { label: string; href: string }[] }[] = [
  { group: 'La carte', items: [
    { label: 'Obtenir votre carte', href: '/#obtenir' },
    { label: 'Tarifs',              href: '/#tarifs' },
    { label: 'Sécurité',            href: '/#securite' },
    { label: 'Questions fréquentes', href: '/#faq' },
  ]},
  { group: 'YoungPay', items: [
    { label: 'À propos', href: '/a-propos' },
    { label: 'Contact',  href: '/contact' },
  ]},
  { group: 'Légal', items: [
    { label: 'Conditions d’utilisation',     href: '/terms' },
    { label: 'Politique de confidentialité', href: '/privacy' },
    { label: 'Cookies',                      href: '/cookies' },
    { label: 'Vérification d’identité (KYC)', href: '/conformite' },
  ]},
]

export default function CardFooter() {
  return (
    <footer className="bg-[#0F2347] text-white">
      {/* Appel final */}
      <section id="telecharger" className="px-5 sm:px-6 pt-20 md:pt-28 pb-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <h2 className="font-extrabold tracking-[-0.02em] leading-[1.08] text-[2.2rem] sm:text-5xl max-w-lg">
              Votre carte Visa vous attend dans l’app.
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed max-w-md">
              Téléchargez YoungPay, vérifiez votre identité, et créez votre carte.
            </p>
            <div className="mt-8"><StoreButtons tone="light" /></div>
          </div>
          <div className="relative max-w-[340px] w-full mx-auto md:mx-0 md:justify-self-end">
            <div className="rotate-[-7deg]"><PayCard physical /></div>
          </div>
        </div>
      </section>

      {/* Pied de page */}
      <div className="px-5 sm:px-6">
        <div className="max-w-6xl mx-auto border-t border-white/10 pt-12 pb-10 grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="inline-block bg-white rounded-xl px-3 py-2">
              <img src={logo} alt="YoungPay" className="h-8 w-auto" />
            </div>
            <ul className="mt-6 space-y-2.5 text-sm text-white/60">
              <li className="flex items-center gap-2.5"><MapPin className="w-4 h-4" aria-hidden="true" />Conakry, Guinée</li>
              <li className="flex items-center gap-2.5"><Mail className="w-4 h-4" aria-hidden="true" />
                <a href="mailto:contact@young-pay.net" className="hover:text-white">contact@young-pay.net</a></li>
              <li className="flex items-center gap-2.5"><Phone className="w-4 h-4" aria-hidden="true" />+224 620 000 000</li>
            </ul>
          </div>

          {LINKS.map(col => (
            <nav key={col.group} aria-label={col.group}>
              <h3 className="font-semibold text-sm text-white">{col.group}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.items.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-white/60 hover:text-white transition-colors duration-150">{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="max-w-6xl mx-auto border-t border-white/10 py-6 text-xs text-white/50 flex flex-col sm:flex-row gap-2 justify-between">
          <p>© {new Date().getFullYear()} YoungPay. Tous droits réservés.</p>
          <p>Visa est une marque déposée de Visa International Service Association.</p>
        </div>
      </div>
    </footer>
  )
}
