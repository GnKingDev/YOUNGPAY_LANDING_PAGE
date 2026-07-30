import { User, MessageSquare, CreditCard, Smartphone, ShieldCheck, Lock, Fingerprint, MonitorSmartphone, Mail, Phone } from 'lucide-react'
import LegalLayout, { LegalSection, LegalNote, LegalList, type TocItem } from '../components/LegalLayout'

const sections: TocItem[] = [
  { id: 'intro', title: 'Introduction' },
  { id: 'collecte', title: 'Données collectées' },
  { id: 'utilisation', title: 'Utilisation des données' },
  { id: 'partage', title: 'Partage avec des tiers' },
  { id: 'conservation', title: 'Conservation' },
  { id: 'securite', title: 'Sécurité' },
  { id: 'droits', title: 'Vos droits' },
  { id: 'modifications', title: 'Modifications' },
  { id: 'contact', title: 'Contact' },
]

const dataCards = [
  { icon: User, title: "Données d'identité", text: "Nom, prénom, date de naissance, numéro de pièce d'identité, selfie de vérification (KYC), adresse." },
  { icon: MessageSquare, title: 'Données de contact', text: 'Numéro de téléphone (identifiant principal), adresse email (optionnelle).' },
  { icon: CreditCard, title: 'Données financières', text: 'Historique des transactions, solde du portefeuille, informations de carte (numéro masqué). Les données de carte complètes sont chiffrées via AWS KMS.' },
  { icon: Smartphone, title: "Données d'appareil et de connexion", text: "Identifiant d'appareil, adresse IP, système d'exploitation, version de l'application, horodatage des connexions." },
]

const partners = [
  { name: 'SumSub', text: "Vérification d'identité (KYC/KYB) — données d'identité et biométriques pour la vérification réglementaire" },
  { name: 'PasseInfo', text: 'Vérification de documents guinéens — validation des pièces d’identité nationales' },
  { name: 'Amazon Web Services (AWS)', text: 'Infrastructure cloud (région eu-west-3, Paris) — hébergement sécurisé, chiffrement KMS' },
  { name: 'Autorités réglementaires', text: 'En cas d’obligation légale, nous pouvons partager des informations avec les autorités compétentes guinéennes' },
]

const security = [
  { icon: ShieldCheck, title: 'Chiffrement KMS', text: 'Les numéros de carte (PAN) sont chiffrés via AWS Key Management Service.' },
  { icon: Lock, title: 'HTTPS / TLS', text: 'Toutes les communications entre l’application et nos serveurs sont chiffrées.' },
  { icon: MonitorSmartphone, title: 'Limite d’appareils', text: 'Maximum 2 appareils connectés simultanément par compte.' },
  { icon: Fingerprint, title: 'Authentification biométrique', text: 'Empreinte digitale ou Face ID disponibles pour sécuriser les actions sensibles.' },
]

const rights = [
  { badge: 'Accès', text: "Consultez toutes vos données depuis votre profil et l'historique de transactions." },
  { badge: 'Exportation', text: 'Téléchargez une copie complète de vos données (profil, transactions, cartes) depuis Profil → Confidentialité → Télécharger mes données.' },
  { badge: 'Rectification', text: 'Mettez à jour vos informations personnelles depuis Profil → Modifier le profil.' },
  { badge: 'Suppression', text: 'Demandez la suppression de votre compte depuis Profil → Confidentialité → Supprimer le compte. Un délai de 30 jours est accordé pour annuler.' },
]

export default function Privacy() {
  return (
    <LegalLayout
      titleTop="Politique de"
      titleAccent="Confidentialité"
      accent="blue"
      subtitle="Dernière mise à jour : mai 2026 · Applicable à tous les utilisateurs de YoungPay"
      sections={sections}
    >
      <LegalSection id="intro" num={1} title="Introduction">
        <p>YoungPay (ci-après « nous », « notre service ») s'engage à protéger la vie privée de ses utilisateurs. La présente Politique de Confidentialité décrit comment nous collectons, utilisons et protégeons vos données personnelles lorsque vous utilisez notre application et nos services associés.</p>
        <p>En créant un compte YoungPay, vous acceptez les pratiques décrites dans ce document. Si vous n'êtes pas d'accord avec ces pratiques, veuillez ne pas utiliser nos services.</p>
        <LegalNote>YoungPay est opéré par une entité guinéenne et est soumis à la réglementation en vigueur en République de Guinée.</LegalNote>
      </LegalSection>

      <LegalSection id="collecte" num={2} title="Données collectées">
        <p>Dans le cadre de la fourniture de nos services, nous collectons les catégories de données suivantes :</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {dataCards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-navy-200 bg-white p-5 shadow-card">
              <div className="w-11 h-11 rounded-xl bg-gradient-orange text-white flex items-center justify-center mb-3">
                <c.icon className="w-5 h-5" />
              </div>
              <strong className="block text-navy mb-1">{c.title}</strong>
              <p className="text-sm text-navy-500 m-0">{c.text}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="utilisation" num={3} title="Utilisation des données">
        <p>Vos données personnelles sont utilisées exclusivement aux fins suivantes :</p>
        <LegalList>
          <li><strong>Création et gestion de compte</strong> — identifier votre profil, assurer la sécurité des connexions, envoyer des notifications de transaction.</li>
          <li><strong>Vérification d'identité (KYC)</strong> — conformité réglementaire obligatoire pour l'accès aux services financiers.</li>
          <li><strong>Exécution des transactions</strong> — traitement des paiements et encaissements via les moyens de paiement supportés.</li>
          <li><strong>Service client</strong> — répondre à vos demandes, résoudre les litiges, traiter les demandes de suppression de compte.</li>
          <li><strong>Sécurité et prévention de la fraude</strong> — détecter les accès non autorisés, limiter le nombre d'appareils connectés.</li>
          <li><strong>Amélioration du service</strong> — analyser les comportements d'utilisation de manière agrégée et anonymisée.</li>
        </LegalList>
      </LegalSection>

      <LegalSection id="partage" num={4} title="Partage avec des tiers">
        <p>Nous ne vendons jamais vos données personnelles. Nous pouvons partager certaines données avec les partenaires suivants, uniquement dans le cadre de la fourniture du service :</p>
        <div className="space-y-3">
          {partners.map((p) => (
            <div key={p.name} className="rounded-xl border border-navy-200 bg-white p-4">
              <strong className="block text-navy">{p.name}</strong>
              <span className="text-sm text-navy-500">{p.text}</span>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="conservation" num={5} title="Conservation des données">
        <p>Vos données sont conservées aussi longtemps que votre compte est actif. En cas de demande de suppression :</p>
        <LegalList>
          <li>Un délai de <strong>30 jours</strong> est accordé pour annuler la demande via le support.</li>
          <li>Après ce délai, les données personnelles identifiantes sont supprimées ou anonymisées.</li>
          <li>Les données financières et de transaction peuvent être conservées jusqu'à <strong>5 ans</strong> pour des raisons de conformité réglementaire et fiscale.</li>
          <li>Les logs de connexion et d'accès sont conservés <strong>12 mois</strong>.</li>
        </LegalList>
      </LegalSection>

      <LegalSection id="securite" num={6} title="Sécurité">
        <p>La sécurité de vos données est une priorité absolue. Les mesures techniques en place incluent :</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {security.map((s) => (
            <div key={s.title} className="rounded-2xl border border-navy-200 bg-white p-5 shadow-card">
              <div className="w-11 h-11 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-3">
                <s.icon className="w-5 h-5" />
              </div>
              <strong className="block text-navy mb-1">{s.title}</strong>
              <p className="text-sm text-navy-500 m-0">{s.text}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="droits" num={7} title="Vos droits">
        <p>Vous disposez des droits suivants concernant vos données personnelles :</p>
        <div className="space-y-3">
          {rights.map((r) => (
            <div key={r.badge} className="flex gap-4 items-start rounded-xl border border-navy-200 bg-white p-4">
              <span className="inline-flex items-center text-xs font-bold rounded-full px-3 py-1 bg-primary/10 text-primary flex-shrink-0 mt-0.5">{r.badge}</span>
              <p className="text-sm text-navy-600 m-0">{r.text}</p>
            </div>
          ))}
        </div>
        <LegalNote>Pour exercer vos droits ou pour toute question relative à vos données, contactez notre support à <strong>contact@young-pay.net</strong>.</LegalNote>
      </LegalSection>

      <LegalSection id="modifications" num={8} title="Modifications de la politique">
        <p>Nous pouvons modifier cette Politique de Confidentialité à tout moment. En cas de modification substantielle, vous serez notifié au moins <strong>15 jours avant</strong> l'entrée en vigueur des changements.</p>
        <p>La poursuite de l'utilisation du service après la date d'entrée en vigueur constitue votre acceptation de la politique révisée.</p>
      </LegalSection>

      <LegalSection id="contact" num={9} title="Contact">
        <p>Pour toute question relative à cette politique ou à vos données personnelles :</p>
        <div className="rounded-2xl border border-navy-200 bg-white p-5 space-y-3">
          <a href="mailto:contact@young-pay.net" className="flex items-center gap-3 text-navy-700"><Mail className="w-4 h-4 text-primary" /> contact@young-pay.net</a>
          <a href="tel:+224620848511" className="flex items-center gap-3 text-navy-700"><Phone className="w-4 h-4 text-primary" /> +224 620 848 511</a>
        </div>
      </LegalSection>
    </LegalLayout>
  )
}
