import { Target, Heart, Users, Rocket, MapPin, TrendingUp, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import PageShell, { SectionHeading, FeatureCard } from '../components/PageShell'

const stats = [
  { value: '500+', label: 'Marchands en Guinée' },
  { value: '50M+', label: 'GNF traités / mois' },
  { value: '8', label: 'Régions couvertes' },
  { value: '2026', label: 'Année de lancement' },
]

const values = [
  { icon: <Target className="w-6 h-6" />, title: 'Simplicité radicale', text: 'Encaisser un paiement doit être aussi simple qu\'envoyer un message. Nous supprimons chaque friction inutile.' },
  { icon: <Heart className="w-6 h-6" />, title: 'Ancrage local', text: 'Conçu en Guinée, pour la Guinée. Nous connaissons Orange Money, MTN et les réalités du commerce local.' },
  { icon: <Users className="w-6 h-6" />, title: 'Confiance avant tout', text: 'Transparence sur les frais, sécurité des fonds, reversements fiables. La confiance est notre vraie monnaie.' },
]

export default function About() {
  const navigate = useNavigate()
  return (
    <PageShell
      tag="À propos"
      title={<>Nous simplifions le paiement<br /><span className="text-gradient">pour l'Afrique de l'Ouest</span></>}
      subtitle="YoungPay est né d'un constat simple : accepter des paiements mobile money et carte en Guinée était trop compliqué pour les commerçants. Nous avons construit l'agrégateur qui manquait."
    >
      {/* Stats */}
      <section className="px-6">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-navy-100 bg-white p-6 md:p-8" style={{ boxShadow: '0 20px 60px rgba(15,23,41,0.06)' }}>
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-bold text-2xl md:text-3xl text-gradient">{s.value}</p>
                <p className="text-navy-400 text-xs md:text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad">
        <div className="container-max grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge-orange mb-5">Notre mission</span>
            <h2 className="font-bold text-3xl text-navy mb-5">Donner à chaque commerçant guinéen les outils des grandes plateformes</h2>
            <p className="text-navy-500 leading-relaxed mb-4">
              Un vendeur de Conakry, une boutique en ligne de Kankan ou un développeur freelance de Labé devraient
              tous pouvoir encaisser Orange Money, MTN, KULU ou une carte bancaire en quelques minutes — sans banque,
              sans paperasse interminable, sans frais cachés.
            </p>
            <p className="text-navy-500 leading-relaxed">
              YoungPay unifie tous ces moyens de paiement derrière une seule API et un seul tableau de bord. Vous
              encaissez, nous nous occupons du reste.
            </p>
          </div>
          <div className="relative">
            <div className="card p-8 border border-navy-100">
              <div className="flex items-start gap-4 mb-6">
                <span className="icon-box"><Rocket className="w-6 h-6" /></span>
                <div>
                  <p className="font-semibold text-navy">Notre vision</p>
                  <p className="text-navy-500 text-sm">Devenir l'infrastructure de paiement de référence en Afrique de l'Ouest francophone.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="icon-box"><TrendingUp className="w-6 h-6" /></span>
                <div>
                  <p className="font-semibold text-navy">Notre trajectoire</p>
                  <p className="text-navy-500 text-sm">De la Guinée vers le Mali, le Sénégal et la Côte d'Ivoire dans les prochaines années.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-5 py-3 border border-navy-100 shadow-card flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-navy">Conakry, Guinée 🇬🇳</span>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-pad pt-0">
        <div className="container-max">
          <SectionHeading tag="Nos valeurs" title="Ce qui nous guide" />
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => <FeatureCard key={v.title} {...v} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad pt-0">
        <div className="container-max">
          <div className="rounded-3xl p-10 md:p-14 text-center" style={{ background: 'linear-gradient(135deg, #1E5BB8, #3B82F6)' }}>
            <h2 className="font-bold text-3xl text-white mb-3">Rejoignez l'aventure</h2>
            <p className="text-white/80 max-w-lg mx-auto mb-8">Que vous soyez commerçant, développeur ou futur talent, il y a une place pour vous chez YoungPay.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={() => navigate('/inscription')} className="bg-white text-navy font-bold px-8 py-4 rounded-xl hover:-translate-y-0.5 transition-transform inline-flex items-center justify-center gap-2">Créer un compte <ArrowRight className="w-4 h-4" /></button>
              <button onClick={() => navigate('/carrieres')} className="bg-white/15 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/25 transition-colors">Voir nos offres d'emploi</button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
