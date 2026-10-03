import { useState, type ReactNode } from 'react'
import { Mail, Phone, MapPin, MessageSquare, Headphones, Building2, CheckCircle2 } from 'lucide-react'
import PageShell from '../components/PageShell'

const channels = [
  { icon: <Headphones className="w-5 h-5" />, title: 'Support marchands', text: 'Une question sur votre compte, un paiement ou un reversement ?', value: 'support@young-pay.net', href: 'mailto:support@young-pay.net' },
  { icon: <Building2 className="w-5 h-5" />, title: 'Commercial & partenariats', text: 'Vous représentez une entreprise ou souhaitez devenir partenaire ?', value: 'business@young-pay.net', href: 'mailto:business@young-pay.net' },
  { icon: <MessageSquare className="w-5 h-5" />, title: 'Presse & médias', text: 'Pour toute demande liée à la communication.', value: 'presse@young-pay.net', href: 'mailto:presse@young-pay.net' },
]

const subjects = ['Support technique', 'Question commerciale', 'Partenariat', 'Presse', 'Autre']

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <PageShell
      tag="Contact"
      title={<>Parlons de votre <span className="text-gradient">projet</span></>}
      subtitle="Notre équipe est basée à Conakry et vous répond en français, sous 24 h ouvrées. Choisissez le canal qui vous convient ou écrivez-nous directement."
    >
      <section className="section-pad pt-4">
        <div className="container-max grid lg:grid-cols-[1fr_1.1fr] gap-10">
          {/* Colonne infos */}
          <div className="space-y-4">
            {channels.map((c) => (
              <a key={c.title} href={c.href} className="card border border-navy-100 p-6 flex gap-4 card-hover group">
                <span className="icon-box flex-shrink-0">{c.icon}</span>
                <div>
                  <h3 className="font-semibold text-navy mb-1">{c.title}</h3>
                  <p className="text-navy-500 text-sm mb-2">{c.text}</p>
                  <span className="text-primary font-medium text-sm group-hover:underline">{c.value}</span>
                </div>
              </a>
            ))}

            <div className="card border border-navy-100 p-6 space-y-3">
              <div className="flex items-center gap-3 text-navy-600 text-sm"><MapPin className="w-4 h-4 text-primary" /> Conakry, République de Guinée</div>
              <div className="flex items-center gap-3 text-navy-600 text-sm"><Phone className="w-4 h-4 text-primary" /> +224 620 848 511</div>
              <div className="flex items-center gap-3 text-navy-600 text-sm"><Mail className="w-4 h-4 text-primary" /> contact@young-pay.net</div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="card border border-navy-100 p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5"><CheckCircle2 className="w-8 h-8 text-green-600" /></div>
                <h3 className="font-bold text-xl text-navy mb-2">Message envoyé !</h3>
                <p className="text-navy-500 max-w-xs">Merci de nous avoir contactés. Notre équipe vous répondra sous 24 h ouvrées.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-5">
                <h3 className="font-bold text-xl text-navy">Écrivez-nous</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Nom complet"><input required className="yp-input" placeholder="Aissatou Diallo" /></Field>
                  <Field label="E-mail"><input required type="email" className="yp-input" placeholder="vous@email.com" /></Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Entreprise (optionnel)"><input className="yp-input" placeholder="Ma boutique" /></Field>
                  <Field label="Sujet">
                    <select className="yp-input" defaultValue="">
                      <option value="" disabled>Choisir…</option>
                      {subjects.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </Field>
                </div>
                <Field label="Message"><textarea required rows={5} className="yp-input resize-none" placeholder="Décrivez votre demande…" /></Field>
                <button className="btn-primary w-full justify-center py-4">Envoyer le message</button>
                <p className="text-center text-navy-400 text-xs">En envoyant ce formulaire, vous acceptez notre politique de confidentialité.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* styles input locaux */}
      <style>{`
        .yp-input { width:100%; padding:0.7rem 0.9rem; border:1px solid #E2E8F0; border-radius:0.75rem; font-size:0.875rem; background:#fff; color:#0F172A; transition:border-color .15s; }
        .yp-input:focus { outline:none; border-color:#1E5BB8; box-shadow:0 0 0 3px rgba(30,91,184,0.12); }
        .yp-input::placeholder { color:#94A3B8; }
      `}</style>
    </PageShell>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-navy-600 text-sm font-medium mb-1.5">{label}</span>
      {children}
    </label>
  )
}
