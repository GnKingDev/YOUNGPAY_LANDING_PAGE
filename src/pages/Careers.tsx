import { MapPin, Clock, Heart, GraduationCap, Rocket, Coffee, ArrowUpRight } from 'lucide-react'
import PageShell, { SectionHeading } from '../components/PageShell'

const openings = [
  { title: 'Ingénieur·e Backend (Node.js)', team: 'Ingénierie', type: 'Temps plein', place: 'Conakry / Remote' },
  { title: 'Développeur·se Mobile (Flutter)', team: 'Ingénierie', type: 'Temps plein', place: 'Conakry / Remote' },
  { title: 'Responsable Partenariats Opérateurs', team: 'Business', type: 'Temps plein', place: 'Conakry' },
  { title: 'Chargé·e de support marchands', team: 'Opérations', type: 'Temps plein', place: 'Conakry' },
  { title: 'Designer Produit (UI/UX)', team: 'Produit', type: 'Temps plein', place: 'Remote' },
  { title: 'Growth & Marketing', team: 'Marketing', type: 'Temps plein', place: 'Conakry / Remote' },
]

const perks = [
  { icon: <Rocket className="w-5 h-5" />, title: 'Impact réel', text: 'Votre travail touche des milliers de commerçants guinéens.' },
  { icon: <GraduationCap className="w-5 h-5" />, title: 'Montée en compétences', text: 'Budget formation, mentorat et projets ambitieux.' },
  { icon: <Coffee className="w-5 h-5" />, title: 'Flexibilité', text: 'Télétravail possible et horaires souples.' },
  { icon: <Heart className="w-5 h-5" />, title: 'Équipe soudée', text: 'Une petite équipe passionnée, bienveillante et exigeante.' },
]

export default function Careers() {
  return (
    <PageShell
      tag="Carrières"
      title={<>Construisez le futur du paiement <span className="text-gradient">en Afrique</span></>}
      subtitle="Nous cherchons des personnes talentueuses et motivées pour bâtir l'infrastructure de paiement de référence en Afrique de l'Ouest. Rejoignez-nous."
    >
      {/* Perks */}
      <section className="section-pad">
        <div className="container-max">
          <SectionHeading tag="Pourquoi nous rejoindre" title="Ce que nous offrons" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="card p-6 border border-navy-100 text-center">
                <div className="icon-box mx-auto mb-4">{p.icon}</div>
                <h3 className="font-semibold text-navy mb-2">{p.title}</h3>
                <p className="text-navy-500 text-sm">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Postes ouverts */}
      <section className="section-pad pt-0">
        <div className="container-max max-w-4xl">
          <SectionHeading tag="Postes ouverts" title="Rejoignez l'équipe" subtitle="6 postes actuellement ouverts. Vous ne trouvez pas le vôtre ? Écrivez-nous quand même." />
          <div className="space-y-3">
            {openings.map((o) => (
              <a key={o.title} href="/contact" className="card border border-navy-100 p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 card-hover group">
                <div className="flex-1">
                  <h3 className="font-semibold text-navy group-hover:text-primary transition-colors">{o.title}</h3>
                  <span className="inline-block mt-1 text-xs font-medium text-primary bg-primary/10 rounded-full px-2.5 py-0.5">{o.team}</span>
                </div>
                <div className="flex items-center gap-5 text-navy-500 text-sm">
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{o.type}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{o.place}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-navy-300 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <div className="mt-12 rounded-3xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #1E5BB8, #3B82F6)' }}>
            <h2 className="font-bold text-2xl text-white mb-2">Candidature spontanée</h2>
            <p className="text-white/80 mb-6 max-w-md mx-auto">Envoyez-nous votre CV et quelques mots sur ce qui vous motive.</p>
            <a href="mailto:jobs@young-pay.net" className="bg-white text-navy font-bold px-8 py-4 rounded-xl hover:-translate-y-0.5 transition-transform inline-flex">jobs@young-pay.net</a>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
