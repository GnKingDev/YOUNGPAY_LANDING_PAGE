import { Clock, ArrowUpRight, Mail } from 'lucide-react'
import PageShell from '../components/PageShell'

const CATEGORIES = ['Tous', 'Produit', 'Ingénierie', 'Guides', 'Écosystème']

const featured = {
  category: 'Produit',
  title: 'Comment nous avons connecté Orange Money et MTN derrière une seule API',
  excerpt: 'Retour sur l\'architecture qui permet à un marchand d\'accepter tous les mobile money guinéens sans jamais gérer un seul SDK opérateur.',
  author: 'Équipe YoungPay', date: '30 juillet 2026', read: '8 min',
  gradient: 'linear-gradient(135deg, #1E5BB8, #3B82F6)',
}

const posts = [
  { category: 'Guides', title: 'Créer votre premier lien de paiement en 3 minutes', excerpt: 'Un pas-à-pas pour encaisser sans écrire de code.', date: '24 juil. 2026', read: '4 min', c: '#3B82F6' },
  { category: 'Ingénierie', title: 'Webhooks fiables : comment nous garantissons la livraison', excerpt: 'Back-off exponentiel, idempotence et signatures HMAC.', date: '18 juil. 2026', read: '6 min', c: '#1E5BB8' },
  { category: 'Écosystème', title: 'L\'état du mobile money en Guinée en 2026', excerpt: 'Chiffres clés et tendances du paiement digital.', date: '9 juil. 2026', read: '7 min', c: '#6366F1' },
  { category: 'Produit', title: 'Reversements automatiques : votre argent en moins de 24 h', excerpt: 'Comment fonctionne notre moteur de reversement.', date: '2 juil. 2026', read: '5 min', c: '#16A34A' },
  { category: 'Guides', title: 'Sécuriser votre intégration : les 5 réflexes essentiels', excerpt: 'Clés API, environnements, vérification des webhooks.', date: '25 juin 2026', read: '6 min', c: '#B45309' },
  { category: 'Ingénierie', title: 'Passer de la sandbox à la production sans surprise', excerpt: 'Checklist complète avant votre premier vrai paiement.', date: '20 juin 2026', read: '5 min', c: '#3B82F6' },
]

export default function Blog() {
  return (
    <PageShell
      tag="Blog"
      title={<>Le journal de <span className="text-gradient">YoungPay</span></>}
      subtitle="Produit, ingénierie, guides pratiques et regards sur l'écosystème du paiement en Afrique de l'Ouest."
    >
      <section className="section-pad pt-4">
        <div className="container-max">
          {/* Catégories */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((c, i) => (
              <button key={c} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-primary text-white' : 'bg-navy-50 text-navy-600 hover:bg-navy-100'}`}>{c}</button>
            ))}
          </div>

          {/* Featured */}
          <article className="grid lg:grid-cols-2 gap-8 items-center mb-16 card border border-navy-100 overflow-hidden card-hover cursor-pointer">
            <div className="h-56 lg:h-full min-h-[240px] relative" style={{ background: featured.gradient }}>
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
              <span className="absolute top-5 left-5 bg-white/20 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full">À la une</span>
            </div>
            <div className="p-8">
              <span className="text-primary text-xs font-bold uppercase tracking-wide">{featured.category}</span>
              <h2 className="font-bold text-2xl text-navy mt-3 mb-3 leading-snug">{featured.title}</h2>
              <p className="text-navy-500 mb-5">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-navy-400 text-sm">
                <span>{featured.author}</span><span>·</span><span>{featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.read}</span>
              </div>
            </div>
          </article>

          {/* Grille */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.title} className="card border border-navy-100 overflow-hidden card-hover cursor-pointer group">
                <div className="h-36 relative" style={{ background: `linear-gradient(135deg, ${p.c}, ${p.c}cc)` }}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: p.c }}>{p.category}</span>
                  <h3 className="font-semibold text-navy mt-2 mb-2 leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-navy-500 text-sm mb-4">{p.excerpt}</p>
                  <div className="flex items-center justify-between text-navy-400 text-xs">
                    <span className="flex items-center gap-3">{p.date}<span className="flex items-center gap-1"><Clock className="w-3 h-3" />{p.read}</span></span>
                    <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-16 rounded-3xl p-10 md:p-12 border border-navy-100 bg-navy-50 text-center">
            <div className="icon-box mx-auto mb-4"><Mail className="w-6 h-6" /></div>
            <h2 className="font-bold text-2xl text-navy mb-2">Restez informé</h2>
            <p className="text-navy-500 mb-6 max-w-md mx-auto">Recevez nos nouveaux articles et annonces produit, une fois par mois. Pas de spam.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="votre@email.com" className="flex-1 px-4 py-3 rounded-xl border border-navy-200 bg-white focus:outline-none focus:border-primary text-sm" />
              <button className="btn-primary justify-center">S'abonner</button>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
