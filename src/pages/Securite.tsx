import { ShieldCheck, Lock, KeyRound, Fingerprint, ServerCog, EyeOff, AlertTriangle, FileCheck2, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import PageShell, { SectionHeading, FeatureCard } from '../components/PageShell'

const pillars = [
  { icon: <Lock className="w-6 h-6" />, title: 'Chiffrement de bout en bout', text: 'Toutes les communications transitent en TLS 1.3. Les données sensibles (clés API, identifiants) sont chiffrées au repos via AWS KMS.' },
  { icon: <KeyRound className="w-6 h-6" />, title: 'Clés API chiffrées', text: 'Vos clés secrètes ne sont jamais stockées en clair. Révocation et rotation instantanées depuis le tableau de bord.' },
  { icon: <ServerCog className="w-6 h-6" />, title: 'Sandbox isolée', text: 'Un environnement de test totalement séparé de la production. Aucune donnée réelle, aucun flux d\'argent, mêmes API.' },
  { icon: <Fingerprint className="w-6 h-6" />, title: 'Double authentification', text: 'Connexion protégée par un code OTP à usage unique (e-mail ou SMS), avec expiration courte et à usage unique.' },
  { icon: <AlertTriangle className="w-6 h-6" />, title: 'Détection de fraude', text: 'Surveillance des schémas de transaction anormaux, limitation du débit par IP et blocage automatique des comptes suspects.' },
  { icon: <EyeOff className="w-6 h-6" />, title: 'Moindre privilège', text: 'Chaque marchand n\'accède qu\'à ses propres données. Cloisonnement strict par identifiant marchand au niveau base de données.' },
]

const stats = [
  { value: 'TLS 1.3', label: 'Chiffrement en transit' },
  { value: 'AWS KMS', label: 'Chiffrement au repos' },
  { value: '99,9 %', label: 'Disponibilité cible (SLA)' },
  { value: '24/7', label: 'Supervision infrastructure' },
]

export default function Securite() {
  const navigate = useNavigate()
  return (
    <PageShell
      tag="Sécurité"
      title={<>Vos paiements protégés,<br /><span className="text-gradient">à chaque transaction</span></>}
      subtitle="La sécurité n'est pas une option chez YoungPay. Chaque couche — du réseau à la base de données — est conçue pour protéger vos fonds et les données de vos clients."
    >
      {/* Bandeau stats */}
      <section className="px-6 -mt-4">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-navy-100 bg-white p-6 md:p-8" style={{ boxShadow: '0 20px 60px rgba(15,23,41,0.06)' }}>
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-bold text-2xl md:text-3xl text-navy">{s.value}</p>
                <p className="text-navy-400 text-xs md:text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Piliers */}
      <section className="section-pad">
        <div className="container-max">
          <SectionHeading tag="Nos garanties" title="Six piliers de sécurité" subtitle="Une défense en profondeur, pensée pour un agrégateur de paiement." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => <FeatureCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* Conformité */}
      <section className="section-pad pt-0">
        <div className="container-max">
          <div className="rounded-3xl overflow-hidden grid lg:grid-cols-2" style={{ background: '#0F172A' }}>
            <div className="p-10 md:p-14">
              <span className="inline-flex items-center gap-2 text-teal text-sm font-semibold mb-5">
                <FileCheck2 className="w-4 h-4" /> Conformité réglementaire
              </span>
              <h2 className="font-bold text-3xl text-white mb-4">Conforme à la réglementation guinéenne</h2>
              <p className="text-navy-300 leading-relaxed mb-6">
                YoungPay applique les procédures KYB (vérification des entreprises) et KYC (vérification d'identité)
                exigées pour opérer des flux financiers en République de Guinée, en partenariat avec des prestataires
                de vérification reconnus.
              </p>
              <button onClick={() => navigate('/conformite')} className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all">
                En savoir plus sur notre conformité <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center gap-4 border-t lg:border-t-0 lg:border-l border-white/5">
              {[
                { icon: <ShieldCheck className="w-5 h-5" />, t: 'KYB — Vérification des marchands' },
                { icon: <Fingerprint className="w-5 h-5" />, t: 'KYC — Vérification d\'identité' },
                { icon: <Lock className="w-5 h-5" />, t: 'Chiffrement des données personnelles' },
                { icon: <FileCheck2 className="w-5 h-5" />, t: 'Traçabilité complète des opérations' },
              ].map((r) => (
                <div key={r.t} className="flex items-center gap-3 text-white/90">
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(59,130,246,0.15)', color: '#60A5FA' }}>{r.icon}</span>
                  <span className="text-sm font-medium">{r.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA reporting */}
      <section className="section-pad pt-0">
        <div className="container-max text-center max-w-2xl mx-auto">
          <div className="icon-box mx-auto mb-5"><ShieldCheck className="w-6 h-6" /></div>
          <h2 className="font-bold text-2xl text-navy mb-3">Vous avez repéré une faille ?</h2>
          <p className="text-navy-500 mb-6">
            Nous prenons chaque signalement au sérieux. Contactez notre équipe sécurité, nous répondons sous 24 h.
          </p>
          <a href="mailto:security@young-pay.net" className="btn-primary inline-flex">
            security@young-pay.net
          </a>
        </div>
      </section>
    </PageShell>
  )
}
