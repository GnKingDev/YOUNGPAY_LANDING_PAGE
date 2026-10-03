import { Smartphone, Landmark, Code2, Store, Handshake, CheckCircle2, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import PageShell, { SectionHeading } from '../components/PageShell'

const operators = [
  { name: 'Orange Money', letter: 'OM', c: '#FF6200' },
  { name: 'MTN MoMo', letter: 'MTN', c: '#FFCD00' },
  { name: 'KULU', letter: 'KU', c: '#8B5CF6' },
  { name: 'Soutra Money', letter: 'SM', c: '#10B981' },
  { name: 'Visa', letter: 'V', c: '#1A56DB' },
  { name: 'Mastercard', letter: 'MC', c: '#EB6C1E' },
]

const types = [
  { icon: <Smartphone className="w-6 h-6" />, title: 'Opérateurs mobile money', text: 'Nous intégrons directement les principaux services de mobile money guinéens pour offrir la meilleure couverture.' },
  { icon: <Landmark className="w-6 h-6" />, title: 'Banques & institutions', text: 'Partenariats bancaires pour les reversements et l\'acquisition de cartes internationales.' },
  { icon: <Code2 className="w-6 h-6" />, title: 'Intégrateurs & agences', text: 'Vous construisez des sites et apps pour des marchands ? Intégrez YoungPay et gagnez une commission de parrainage.' },
  { icon: <Store className="w-6 h-6" />, title: 'Plateformes & marketplaces', text: 'Proposez YoungPay comme moyen de paiement natif à tous vos vendeurs, via une intégration unique.' },
]

const perks = [
  'Commission récurrente sur les marchands apportés',
  'Support technique prioritaire et accès anticipé aux nouveautés',
  'Co-marketing et mise en avant sur nos canaux',
  'Environnement sandbox partagé pour vos démonstrations',
]

export default function Partners() {
  const navigate = useNavigate()
  return (
    <PageShell
      tag="Partenaires"
      title={<>Construisons l'écosystème du paiement <span className="text-gradient">ensemble</span></>}
      subtitle="Opérateurs, banques, intégrateurs et plateformes : YoungPay s'appuie sur un réseau de partenaires pour connecter toute la Guinée au paiement digital."
    >
      {/* Opérateurs connectés */}
      <section className="section-pad">
        <div className="container-max">
          <SectionHeading tag="Déjà connectés" title="Les moyens de paiement de nos partenaires" subtitle="Une seule intégration, tous les opérateurs guinéens et les cartes internationales." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {operators.map((o) => (
              <div key={o.name} className="card border border-navy-100 p-5 flex flex-col items-center gap-3 card-hover">
                <span className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-sm" style={{ background: o.c }}>{o.letter}</span>
                <span className="text-navy-600 text-xs font-medium text-center">{o.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de partenariat */}
      <section className="section-pad pt-0">
        <div className="container-max">
          <SectionHeading tag="Programmes" title="Quatre façons de collaborer" />
          <div className="grid md:grid-cols-2 gap-6">
            {types.map((t) => (
              <div key={t.title} className="card card-hover p-7 border border-navy-100 flex gap-5">
                <span className="icon-box flex-shrink-0">{t.icon}</span>
                <div>
                  <h3 className="font-semibold text-navy text-lg mb-2">{t.title}</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devenir partenaire */}
      <section className="section-pad pt-0">
        <div className="container-max">
          <div className="rounded-3xl overflow-hidden grid lg:grid-cols-2" style={{ background: '#0F172A' }}>
            <div className="p-10 md:p-14">
              <span className="inline-flex items-center gap-2 text-teal text-sm font-semibold mb-5"><Handshake className="w-4 h-4" /> Programme partenaire</span>
              <h2 className="font-bold text-3xl text-white mb-4">Devenez partenaire YoungPay</h2>
              <p className="text-navy-300 leading-relaxed mb-6">Rejoignez notre réseau et développez votre activité tout en aidant les commerçants guinéens à encaisser plus facilement.</p>
              <button onClick={() => navigate('/contact')} className="btn-primary inline-flex">Candidater <ArrowRight className="w-4 h-4" /></button>
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center gap-4 border-t lg:border-t-0 lg:border-l border-white/5">
              {perks.map((p) => (
                <div key={p} className="flex items-start gap-3 text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
