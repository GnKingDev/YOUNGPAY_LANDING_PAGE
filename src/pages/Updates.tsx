import { type ReactNode } from 'react'
import { Sparkles, Zap, Bug, ShieldCheck, Plus, ArrowUpRight } from 'lucide-react'
import PageShell from '../components/PageShell'

type Tag = 'nouveau' | 'amélioration' | 'correctif' | 'sécurité'

const TAG_STYLE: Record<Tag, { bg: string; color: string; icon: ReactNode; label: string }> = {
  'nouveau':      { bg: 'rgba(30,91,184,0.10)',  color: '#1E5BB8', icon: <Plus className="w-3 h-3" />,        label: 'Nouveau' },
  'amélioration': { bg: 'rgba(59,130,246,0.12)', color: '#3B82F6', icon: <Zap className="w-3 h-3" />,         label: 'Amélioration' },
  'correctif':    { bg: 'rgba(217,119,6,0.12)',  color: '#B45309', icon: <Bug className="w-3 h-3" />,         label: 'Correctif' },
  'sécurité':     { bg: 'rgba(22,163,74,0.12)',  color: '#16A34A', icon: <ShieldCheck className="w-3 h-3" />, label: 'Sécurité' },
}

const releases = [
  {
    version: 'v2.4', date: '28 juillet 2026', title: 'Reversements automatiques & export CSV',
    items: [
      { tag: 'nouveau' as Tag, text: 'Reversement automatique vers votre compte bancaire ou mobile money sous 24 h.' },
      { tag: 'nouveau' as Tag, text: 'Export CSV des transactions, filtrable par date, opérateur et statut.' },
      { tag: 'amélioration' as Tag, text: 'Tableau de bord marchand : nouveau graphique d\'évolution des revenus sur 12 mois.' },
    ],
  },
  {
    version: 'v2.3', date: '10 juillet 2026', title: 'Liens de paiement à usage unique',
    items: [
      { tag: 'nouveau' as Tag, text: 'Créez des liens de paiement expirant après un seul règlement.' },
      { tag: 'amélioration' as Tag, text: 'Partage de lien par SMS et e-mail directement depuis le dashboard.' },
      { tag: 'correctif' as Tag, text: 'Correction de l\'affichage du solde disponible après un reversement partiel.' },
    ],
  },
  {
    version: 'v2.2', date: '22 juin 2026', title: 'MTN Mobile Money en production',
    items: [
      { tag: 'nouveau' as Tag, text: 'Encaissement MTN Mobile Money Guinée disponible en production.' },
      { tag: 'sécurité' as Tag, text: 'OTP par SMS activable pour renforcer la connexion à votre espace marchand.' },
      { tag: 'amélioration' as Tag, text: 'Webhooks : nouvelle signature HMAC pour vérifier l\'authenticité des événements.' },
    ],
  },
  {
    version: 'v2.1', date: '18 mai 2026', title: 'Lancement de la console développeur',
    items: [
      { tag: 'nouveau' as Tag, text: 'Documentation API interactive avec exemples cURL, Node, Python et PHP.' },
      { tag: 'nouveau' as Tag, text: 'Environnement sandbox avec simulation de paiements.' },
    ],
  },
]

export default function Updates() {
  return (
    <PageShell
      tag="Mises à jour"
      title={<>Ce qui est <span className="text-gradient">nouveau</span> chez YoungPay</>}
      subtitle="Nouvelles fonctionnalités, améliorations et correctifs. Nous publions en continu pour rendre l'encaissement plus simple en Guinée."
    >
      <section className="section-pad pt-4">
        <div className="container-max max-w-3xl">
          <div className="relative">
            {/* ligne verticale timeline */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-navy-100 hidden sm:block" />

            <div className="space-y-12">
              {releases.map((r) => (
                <article key={r.version} className="relative sm:pl-10">
                  {/* point timeline */}
                  <span className="hidden sm:block absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-white" style={{ background: '#1E5BB8', boxShadow: '0 0 0 4px rgba(30,91,184,0.12)' }} />

                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="font-bold text-navy text-xl">{r.version}</span>
                    <span className="text-navy-400 text-sm">· {r.date}</span>
                  </div>
                  <h3 className="font-semibold text-navy text-lg mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" /> {r.title}
                  </h3>

                  <div className="card p-5 border border-navy-100 space-y-3">
                    {r.items.map((it, i) => {
                      const st = TAG_STYLE[it.tag]
                      return (
                        <div key={i} className="flex items-start gap-3">
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold rounded-full px-2.5 py-1 flex-shrink-0 mt-0.5" style={{ background: st.bg, color: st.color }}>
                            {st.icon} {st.label}
                          </span>
                          <p className="text-navy-600 text-sm leading-relaxed">{it.text}</p>
                        </div>
                      )
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14 text-center">
            <a href="/docs" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Voir la documentation complète <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
