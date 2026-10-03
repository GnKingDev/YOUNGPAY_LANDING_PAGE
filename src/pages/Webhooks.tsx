import { Webhook as WebhookIcon, RefreshCw, ShieldCheck, Zap } from 'lucide-react'
import PageShell, { SectionHeading, CodeBlock } from '../components/PageShell'

const events = [
  { name: 'payment.success', desc: 'Un paiement a été confirmé et le solde marchand crédité.' },
  { name: 'payment.failed',  desc: 'Le paiement a échoué ou a été refusé par l\'opérateur.' },
  { name: 'payment.pending', desc: 'Le paiement est en attente de validation par le client.' },
  { name: 'payout.done',     desc: 'Un reversement vers votre compte a été traité.' },
  { name: 'payout.failed',   desc: 'Un reversement n\'a pas pu être effectué.' },
]

export default function Webhooks() {
  return (
    <PageShell
      tag="Développeurs · Webhooks"
      title={<>Soyez notifié <span className="text-gradient">en temps réel</span></>}
      subtitle="Recevez un événement HTTP dès qu'un paiement change d'état. Fini le polling : votre serveur est prévenu instantanément."
      heroAside={
        <CodeBlock label="exemple d'événement">{`POST https://votre-serveur.com/webhook

{
  "event": "payment.success",
  "transaction_id": "TXN-8FA23KD1",
  "merchant_ref": "CMD-1042",
  "status": "SUCCESS",
  "amount": 250000,
  "fee": 3000,
  "net": 247000,
  "operator": "orange_money",
  "env": "production",
  "timestamp": "2026-08-03T10:24:11Z"
}`}</CodeBlock>
      }
    >
      {/* Comment ça marche */}
      <section className="section-pad">
        <div className="container-max">
          <SectionHeading tag="Fonctionnement" title="Trois étapes pour recevoir vos événements" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '01', icon: <WebhookIcon className="w-5 h-5" />, t: 'Enregistrez une URL', d: 'Déclarez votre endpoint HTTPS depuis le dashboard ou via l\'API. Une URL par environnement (sandbox / production).' },
              { n: '02', icon: <Zap className="w-5 h-5" />, t: 'Recevez les événements', d: 'À chaque changement d\'état, YoungPay envoie une requête POST JSON à votre URL, en quelques millisecondes.' },
              { n: '03', icon: <ShieldCheck className="w-5 h-5" />, t: 'Vérifiez la signature', d: 'Chaque requête est signée (HMAC-SHA256). Validez l\'en-tête pour garantir qu\'elle vient bien de YoungPay.' },
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

      {/* Événements disponibles */}
      <section className="section-pad pt-0">
        <div className="container-max max-w-4xl">
          <SectionHeading tag="Référence" title="Événements disponibles" />
          <div className="card border border-navy-100 overflow-hidden">
            {events.map((e, i) => (
              <div key={e.name} className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 px-6 py-4 ${i !== 0 ? 'border-t border-navy-100' : ''}`}>
                <code className="text-sm font-mono font-semibold text-primary whitespace-nowrap sm:w-56">{e.name}</code>
                <span className="text-navy-500 text-sm">{e.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vérification signature */}
      <section className="section-pad pt-0">
        <div className="container-max grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge-orange mb-5">Sécurité</span>
            <h2 className="font-bold text-3xl text-navy mb-4">Vérifiez chaque requête</h2>
            <p className="text-navy-500 leading-relaxed mb-4">
              Chaque webhook inclut un en-tête <code className="text-primary font-mono text-sm">X-YoungPay-Signature</code>.
              Recalculez le HMAC-SHA256 du corps brut avec votre clé secrète et comparez : si les valeurs diffèrent,
              rejetez la requête.
            </p>
            <div className="flex items-center gap-3 text-navy-600 text-sm">
              <RefreshCw className="w-4 h-4 text-primary" />
              Nouvelle tentative automatique jusqu'à 5 fois en cas d'échec (back-off exponentiel).
            </div>
          </div>
          <CodeBlock label="node.js">{`const crypto = require('crypto')

function verify(req, secret) {
  const signature = req.headers['x-youngpay-signature']
  const expected = crypto
    .createHmac('sha256', secret)
    .update(req.rawBody)
    .digest('hex')
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected),
  )
}`}</CodeBlock>
        </div>
      </section>
    </PageShell>
  )
}
