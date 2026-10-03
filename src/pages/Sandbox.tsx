import { FlaskConical, Play, CreditCard, CheckCircle2, XCircle, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import PageShell, { SectionHeading, CodeBlock } from '../components/PageShell'

const testNumbers = [
  { phone: '620 00 00 01', result: 'Succès immédiat', icon: <CheckCircle2 className="w-4 h-4 text-green-600" /> },
  { phone: '620 00 00 02', result: 'Échec (fonds insuffisants)', icon: <XCircle className="w-4 h-4 text-red-500" /> },
  { phone: '620 00 00 03', result: 'En attente puis succès (10 s)', icon: <Clock className="w-4 h-4 text-amber-600" /> },
  { phone: '620 00 00 04', result: 'Refusé par le client', icon: <XCircle className="w-4 h-4 text-red-500" /> },
]

export default function Sandbox() {
  const navigate = useNavigate()
  return (
    <PageShell
      tag="Développeurs · Sandbox"
      title={<>Testez tout,<br /><span className="text-gradient">sans risque ni argent réel</span></>}
      subtitle="La sandbox reproduit fidèlement la production : mêmes API, mêmes webhooks, mêmes réponses. Aucune transaction réelle, aucun flux d'argent."
      heroAside={
        <div className="card p-6 border border-navy-100">
          <div className="flex items-center gap-2 mb-4 text-navy-500 text-sm font-semibold"><FlaskConical className="w-4 h-4 text-primary" /> Environnement sandbox</div>
          <div className="space-y-3">
            {[
              { icon: <CheckCircle2 className="w-4 h-4 text-green-600" />, t: 'Clés de test dédiées (ypk_sandbox_…)' },
              { icon: <CheckCircle2 className="w-4 h-4 text-green-600" />, t: 'Simulation automatique des paiements' },
              { icon: <CheckCircle2 className="w-4 h-4 text-green-600" />, t: 'Webhooks identiques à la production' },
              { icon: <CheckCircle2 className="w-4 h-4 text-green-600" />, t: 'Données réinitialisables à volonté' },
            ].map((r) => (
              <div key={r.t} className="flex items-center gap-3 text-navy-600 text-sm">{r.icon}{r.t}</div>
            ))}
          </div>
        </div>
      }
    >
      {/* Étapes */}
      <section className="section-pad">
        <div className="container-max">
          <SectionHeading tag="Prise en main" title="De zéro à un paiement de test" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '01', icon: <CreditCard className="w-5 h-5" />, t: 'Récupérez vos clés sandbox', d: 'Dès l\'inscription, une paire de clés de test est générée automatiquement. Aucune vérification KYB requise pour tester.' },
              { n: '02', icon: <Play className="w-5 h-5" />, t: 'Initiez un paiement', d: 'Utilisez un numéro de test ci-dessous. YoungPay simule le comportement de l\'opérateur mobile money.' },
              { n: '03', icon: <FlaskConical className="w-5 h-5" />, t: 'Observez le webhook', d: 'Votre endpoint reçoit l\'événement final (succès, échec, en attente) exactement comme en production.' },
            ].map((s) => (
              <div key={s.n} className="card p-6 border border-navy-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-navy-200 font-bold text-2xl">{s.n}</span>
                  <span className="icon-box !w-10 !h-10">{s.icon}</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">{s.t}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numéros de test */}
      <section className="section-pad pt-0">
        <div className="container-max grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="badge-orange mb-5">Numéros de test</span>
            <h2 className="font-bold text-3xl text-navy mb-4">Déclenchez chaque scénario</h2>
            <p className="text-navy-500 leading-relaxed mb-6">
              Chaque numéro de téléphone de test force un résultat précis, pour valider tous les chemins de votre
              intégration — y compris les échecs.
            </p>
            <div className="card border border-navy-100 overflow-hidden">
              {testNumbers.map((t, i) => (
                <div key={t.phone} className={`flex items-center gap-4 px-5 py-3.5 ${i !== 0 ? 'border-t border-navy-100' : ''}`}>
                  <code className="font-mono text-sm font-semibold text-navy w-32">{t.phone}</code>
                  <span className="flex items-center gap-2 text-navy-500 text-sm">{t.icon}{t.result}</span>
                </div>
              ))}
            </div>
          </div>
          <CodeBlock label="cURL — paiement sandbox">{`curl -X POST https://api.young-pay.net/v1/payment/direct \\
  -H "client_id: ypk_sandbox_xxx" \\
  -H "api_key: yps_sandbox_xxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 250000,
    "phone": "620000001",
    "method": "orange_money",
    "description": "Test commande",
    "merchant_ref": "TEST-001"
  }'

# → status: PENDING, puis webhook payment.success ~4s`}</CodeBlock>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad pt-0">
        <div className="container-max text-center max-w-xl mx-auto">
          <h2 className="font-bold text-2xl text-navy mb-3">Prêt à tester ?</h2>
          <p className="text-navy-500 mb-6">Créez un compte gratuit et récupérez vos clés sandbox immédiatement.</p>
          <button onClick={() => navigate('/inscription')} className="btn-primary inline-flex">Obtenir mes clés de test</button>
        </div>
      </section>
    </PageShell>
  )
}
