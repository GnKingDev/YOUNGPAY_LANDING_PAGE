import { Building2, UserCheck, FileText, Landmark, Mail } from 'lucide-react'
import LegalLayout, { LegalSection, LegalNote, LegalList, type TocItem } from '../components/LegalLayout'

const sections: TocItem[] = [
  { id: 'intro', title: 'Introduction' },
  { id: 'kyb', title: 'KYB — Vérification entreprise' },
  { id: 'kyc', title: 'KYC — Vérification d\'identité' },
  { id: 'documents', title: 'Documents demandés' },
  { id: 'lutte', title: 'Lutte anti-blanchiment' },
  { id: 'partenaires', title: 'Partenaires de vérification' },
  { id: 'droits', title: 'Vos données' },
  { id: 'contact', title: 'Contact' },
]

const steps = [
  { icon: Building2, title: 'Soumission du dossier', text: 'Le marchand renseigne ses informations et téléverse ses documents depuis le tableau de bord.' },
  { icon: UserCheck, title: 'Vérification', text: 'Nos partenaires contrôlent l\'authenticité des documents et l\'identité du représentant légal.' },
  { icon: FileText, title: 'Décision', text: 'Une fois validé, l\'accès à la production et aux reversements est activé automatiquement.' },
]

export default function Compliance() {
  return (
    <LegalLayout
      titleTop="Conformité"
      titleAccent="KYB / KYC"
      accent="teal"
      subtitle="Dernière mise à jour : août 2026 · Nos obligations de vérification et de lutte contre la fraude financière"
      sections={sections}
    >
      <LegalSection id="intro" num={1} title="Introduction">
        <p>En tant qu'agrégateur de paiement opérant des flux financiers en République de Guinée, YoungPay est tenu d'appliquer des procédures strictes de vérification de ses marchands. Ces procédures, dites <strong>KYB</strong> (Know Your Business) et <strong>KYC</strong> (Know Your Customer), protègent l'ensemble de l'écosystème contre la fraude et le blanchiment.</p>
        <LegalNote>Ces contrôles sont une obligation réglementaire : ils conditionnent l'activation des paiements en production et des reversements.</LegalNote>
      </LegalSection>

      <LegalSection id="kyb" num={2} title="KYB — Vérification de l'entreprise">
        <p>Avant d'activer un compte marchand en production, nous vérifions l'existence et la légitimité de l'activité :</p>
        <LegalList>
          <li>Existence légale de l'entreprise ou de l'activité commerciale.</li>
          <li>Cohérence entre l'activité déclarée et les flux de paiement attendus.</li>
          <li>Identification du ou des représentants légaux.</li>
          <li>Coordonnées de reversement (compte bancaire ou mobile money).</li>
        </LegalList>
      </LegalSection>

      <LegalSection id="kyc" num={3} title="KYC — Vérification d'identité">
        <p>Le représentant légal du compte fait l'objet d'une vérification d'identité :</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-navy-200 bg-white p-5 shadow-card">
              <div className="w-11 h-11 rounded-xl bg-gradient-orange text-white flex items-center justify-center mb-3"><s.icon className="w-5 h-5" /></div>
              <strong className="block text-navy mb-1">{s.title}</strong>
              <p className="text-sm text-navy-500 m-0">{s.text}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="documents" num={4} title="Documents demandés">
        <LegalList>
          <li><strong>Pièce d'identité</strong> — carte nationale ou passeport du représentant légal.</li>
          <li><strong>Justificatif d'activité</strong> — registre de commerce (RCCM) ou équivalent, le cas échéant.</li>
          <li><strong>Logo / éléments de marque</strong> — pour personnaliser vos pages de paiement.</li>
        </LegalList>
        <p>Les documents sont chiffrés et stockés de manière sécurisée. Ils ne sont accessibles qu'aux personnes habilitées à la vérification.</p>
      </LegalSection>

      <LegalSection id="lutte" num={5} title="Lutte contre le blanchiment (LCB-FT)">
        <p>Conformément à nos obligations, nous surveillons en continu les transactions afin de détecter et signaler toute opération suspecte. Nous pouvons être amenés à :</p>
        <LegalList>
          <li>Demander des justificatifs complémentaires sur l'origine des fonds.</li>
          <li>Suspendre temporairement un compte en cas de doute sérieux.</li>
          <li>Coopérer avec les autorités compétentes en cas d'obligation légale.</li>
        </LegalList>
      </LegalSection>

      <LegalSection id="partenaires" num={6} title="Partenaires de vérification">
        <p>Nous nous appuyons sur des prestataires spécialisés pour la vérification documentaire et d'identité, sélectionnés pour leur fiabilité et leur respect de la confidentialité. Les données transmises se limitent au strict nécessaire à la vérification.</p>
        <div className="flex items-center gap-3 rounded-xl border border-navy-200 bg-white p-4 text-navy-600 text-sm">
          <Landmark className="w-5 h-5 text-teal flex-shrink-0" />
          Les reversements ne sont activés qu'après validation complète du dossier KYB/KYC.
        </div>
      </LegalSection>

      <LegalSection id="droits" num={7} title="Vos données">
        <p>Les données collectées dans le cadre de la conformité sont traitées conformément à notre <a href="/privacy">Politique de Confidentialité</a>. Vous disposez d'un droit d'accès, de rectification et, sous conditions, de suppression.</p>
      </LegalSection>

      <LegalSection id="contact" num={8} title="Contact">
        <p>Pour toute question relative à la conformité ou à la vérification de votre compte :</p>
        <div className="rounded-2xl border border-navy-200 bg-white p-5">
          <a href="mailto:compliance@young-pay.net" className="flex items-center gap-3 text-navy-700"><Mail className="w-4 h-4 text-teal" /> compliance@young-pay.net</a>
        </div>
      </LegalSection>
    </LegalLayout>
  )
}
