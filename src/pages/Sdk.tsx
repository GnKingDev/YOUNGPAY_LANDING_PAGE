import { useState } from 'react'
import { Terminal, Package, BookOpen, Github, ArrowUpRight } from 'lucide-react'
import PageShell, { SectionHeading, CodeBlock } from '../components/PageShell'

const sdks = [
  { key: 'node', label: 'Node.js', install: 'npm install @youngpay/node', status: 'Stable' },
  { key: 'python', label: 'Python', install: 'pip install youngpay', status: 'Stable' },
  { key: 'php', label: 'PHP', install: 'composer require youngpay/youngpay-php', status: 'Stable' },
  { key: 'dart', label: 'Dart / Flutter', install: 'flutter pub add youngpay', status: 'Bêta' },
]

const snippets: Record<string, { label: string; code: string }> = {
  node: { label: 'index.js', code: `import { YoungPay } from '@youngpay/node'

const yp = new YoungPay({
  clientId: process.env.YP_CLIENT_ID,
  apiKey:   process.env.YP_API_KEY,
  env:      'production',
})

const payment = await yp.payments.direct({
  amount:       250000,
  phone:        '620000000',
  method:       'orange_money',
  description:  'Commande #1042',
  merchantRef:  'CMD-1042',
})

console.log(payment.transaction_id)` },
  python: { label: 'main.py', code: `from youngpay import YoungPay

yp = YoungPay(
    client_id=os.environ["YP_CLIENT_ID"],
    api_key=os.environ["YP_API_KEY"],
    env="production",
)

payment = yp.payments.direct(
    amount=250000,
    phone="620000000",
    method="orange_money",
    description="Commande #1042",
    merchant_ref="CMD-1042",
)

print(payment["transaction_id"])` },
  php: { label: 'index.php', code: `<?php
require 'vendor/autoload.php';

use YoungPay\\Client;

$yp = new Client([
  'client_id' => getenv('YP_CLIENT_ID'),
  'api_key'   => getenv('YP_API_KEY'),
  'env'       => 'production',
]);

$payment = $yp->payments->direct([
  'amount'       => 250000,
  'phone'        => '620000000',
  'method'       => 'orange_money',
  'description'  => 'Commande #1042',
  'merchant_ref' => 'CMD-1042',
]);

echo $payment['transaction_id'];` },
  dart: { label: 'main.dart', code: `import 'package:youngpay/youngpay.dart';

final yp = YoungPay(
  clientId: const String.fromEnvironment('YP_CLIENT_ID'),
  apiKey:   const String.fromEnvironment('YP_API_KEY'),
  env:      Env.production,
);

final payment = await yp.payments.direct(
  amount:      250000,
  phone:       '620000000',
  method:      'orange_money',
  description: 'Commande #1042',
  merchantRef: 'CMD-1042',
);

print(payment.transactionId);` },
}

export default function Sdk() {
  const [active, setActive] = useState('node')
  return (
    <PageShell
      tag="Développeurs · SDK"
      title={<>Intégrez YoungPay <span className="text-gradient">en quelques lignes</span></>}
      subtitle="Des librairies officielles dans vos langages préférés. Authentification, paiements, webhooks et reversements — tout est couvert."
    >
      {/* Grille SDK */}
      <section className="section-pad">
        <div className="container-max">
          <SectionHeading tag="Librairies officielles" title="Choisissez votre langage" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sdks.map((s) => (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={`text-left card p-6 border transition-all ${active === s.key ? 'border-primary ring-2 ring-primary/20' : 'border-navy-100 hover:border-navy-200'}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="icon-box !w-10 !h-10"><Package className="w-5 h-5" /></span>
                  <span className={`text-[10px] font-bold rounded-full px-2 py-0.5 ${s.status === 'Stable' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-700'}`}>{s.status}</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">{s.label}</h3>
                <code className="block text-[11px] font-mono text-navy-500 bg-navy-50 rounded-lg px-2.5 py-1.5 truncate">{s.install}</code>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Exemple d'utilisation */}
      <section className="section-pad pt-0">
        <div className="container-max grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge-orange mb-5">Démarrage rapide</span>
            <h2 className="font-bold text-3xl text-navy mb-4">Un premier paiement en 5 minutes</h2>
            <p className="text-navy-500 leading-relaxed mb-6">
              Installez le SDK, renseignez vos clés (récupérées dans le dashboard), et lancez votre premier
              encaissement Orange Money ou MTN. Le même code fonctionne en sandbox et en production — il suffit de
              changer <code className="text-primary font-mono text-sm">env</code>.
            </p>
            <div className="space-y-3">
              <a href="/docs" className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"><BookOpen className="w-4 h-4" /> Lire la documentation</a>
              <a href="#" className="flex items-center gap-2 text-navy-600 font-medium hover:text-navy transition-colors"><Github className="w-4 h-4" /> Explorer sur GitHub <ArrowUpRight className="w-3.5 h-3.5" /></a>
            </div>
          </div>
          <CodeBlock label={snippets[active].label}>{snippets[active].code}</CodeBlock>
        </div>
      </section>

      {/* CLI */}
      <section className="section-pad pt-0">
        <div className="container-max">
          <div className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-8 justify-between" style={{ background: 'linear-gradient(135deg, #1E5BB8, #3B82F6)' }}>
            <div className="text-white">
              <div className="inline-flex items-center gap-2 text-white/80 text-sm font-semibold mb-3"><Terminal className="w-4 h-4" /> Ligne de commande</div>
              <h2 className="font-bold text-2xl md:text-3xl mb-2">Testez sans écrire une ligne de code</h2>
              <p className="text-white/80 max-w-lg">Notre CLI permet de simuler des paiements et d'inspecter vos webhooks directement depuis le terminal.</p>
            </div>
            <code className="bg-black/25 text-white font-mono text-sm rounded-xl px-5 py-4 whitespace-nowrap">$ npx youngpay pay --amount 250000</code>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
