import { Wallet, CreditCard, Gift, Ticket, Mail, Phone } from 'lucide-react'
import LegalLayout, { LegalSection, LegalNote, LegalList, type TocItem } from '../components/LegalLayout'

const sections: TocItem[] = [
  { id: 'acceptation', title: 'Acceptation' },
  { id: 'services', title: 'Services' },
  { id: 'inscription', title: 'Inscription et compte' },
  { id: 'carte-visa', title: 'Carte Visa' },
  { id: 'cadeaux', title: 'Cartes cadeaux digitales' },
  { id: 'billetterie', title: 'Billetterie' },
  { id: 'recharges', title: 'Recharges et paiements' },
  { id: 'responsabilites', title: 'Responsabilités' },
  { id: 'propriete', title: 'Propriété intellectuelle' },
  { id: 'resiliation', title: 'Résiliation' },
  { id: 'droit', title: 'Droit applicable' },
]

const services = [
  { icon: Wallet, title: 'Portefeuille électronique', text: 'Gestion d’un solde en Francs Guinéens (GNF), rechargeable via Orange Money.' },
  { icon: CreditCard, title: 'Carte Visa (virtuelle et physique)', text: 'Émission de cartes bancaires Visa acceptées dans le monde entier.' },
  { icon: Gift, title: 'Cartes cadeaux digitales', text: 'Achat de codes pour iTunes, Netflix, PlayStation, Steam, Google Play et autres plateformes.' },
  { icon: Ticket, title: 'Billetterie événementielle', text: 'Achat de billets pour concerts, matchs sportifs et festivals en Guinée, avec QR code intégré.' },
]

export default function Terms() {
  return (
    <LegalLayout
      titleTop="Conditions"
      titleAccent="d'utilisation"
      accent="teal"
      subtitle="Dernière mise à jour : mai 2026 · En utilisant YoungPay, vous acceptez ces conditions"
      sections={sections}
    >
      <LegalSection id="acceptation" num={1} title="Acceptation des conditions">
        <p>Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de l'application YoungPay et de l'ensemble des services associés, opérés par YoungPay (ci-après « YoungPay », « nous »).</p>
        <p>En créant un compte ou en utilisant l'application, vous reconnaissez avoir lu, compris et accepté ces conditions dans leur intégralité. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser nos services.</p>
        <LegalNote>Ces conditions peuvent être mises à jour. Vous serez notifié 15 jours avant toute modification substantielle.</LegalNote>
      </LegalSection>

      <LegalSection id="services" num={2} title="Description des services">
        <p>YoungPay est une application de services financiers destinée aux résidents de Guinée, offrant les services suivants :</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-navy-200 bg-white p-5 shadow-card">
              <div className="w-11 h-11 rounded-xl bg-gradient-orange text-white flex items-center justify-center mb-3">
                <s.icon className="w-5 h-5" />
              </div>
              <strong className="block text-navy mb-1">{s.title}</strong>
              <p className="text-sm text-navy-500 m-0">{s.text}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="inscription" num={3} title="Inscription et compte">
        <h3>Conditions d'éligibilité</h3>
        <LegalList>
          <li>Avoir au moins <strong>18 ans</strong> au moment de l'inscription.</li>
          <li>Être titulaire d'un numéro de téléphone guinéen valide.</li>
          <li>Disposer d'une pièce d'identité guinéenne valide pour la vérification KYC.</li>
          <li>Ne pas avoir de compte YoungPay existant actif.</li>
        </LegalList>
        <h3>Sécurité du compte</h3>
        <p>Vous êtes responsable de la confidentialité de votre code PIN et de vos identifiants d'authentification. Toute activité effectuée depuis votre compte sous votre authentification est réputée effectuée par vous. En cas de compromission suspectée, suspendez immédiatement votre compte depuis <em>Sécurité → Suspendre le compte</em> et contactez notre support.</p>
        <h3>Limite d'appareils</h3>
        <p>Pour des raisons de sécurité, l'accès à votre compte est limité à <strong>2 appareils simultanés</strong>. Un troisième appareil déconnectera automatiquement l'appareil le plus ancien.</p>
      </LegalSection>

      <LegalSection id="carte-visa" num={4} title="Carte Visa">
        <LegalList>
          <li>L'émission d'une carte Visa est soumise à la vérification d'identité (KYC) complète.</li>
          <li>Les frais d'émission sont de <strong>50 000 GNF</strong> pour une carte virtuelle. Les frais de la carte physique sont communiqués lors de la commande.</li>
          <li>La carte virtuelle est disponible en moins de 5 minutes après validation.</li>
          <li>La carte physique est livrée sous 5 à 7 jours ouvrables à l'adresse fournie.</li>
          <li>En cas de perte ou vol de votre carte physique, bloquez-la immédiatement depuis l'application.</li>
          <li>YoungPay se réserve le droit de bloquer ou résilier une carte en cas d'activité suspecte ou de violation des présentes conditions.</li>
        </LegalList>
      </LegalSection>

      <LegalSection id="cadeaux" num={5} title="Cartes cadeaux digitales">
        <LegalList>
          <li>Les codes de cartes cadeaux sont délivrés instantanément après paiement.</li>
          <li>Les achats de cartes cadeaux sont <strong>définitifs et non remboursables</strong>.</li>
          <li>YoungPay n'est pas responsable de l'utilisation du code après sa délivrance.</li>
          <li>En cas de code invalide ou non fonctionnel, contactez notre support dans les <strong>48 heures</strong> suivant l'achat.</li>
          <li>La disponibilité des plateformes peut varier. YoungPay ne garantit pas la disponibilité permanente de l'ensemble des plateformes.</li>
        </LegalList>
      </LegalSection>

      <LegalSection id="billetterie" num={6} title="Billetterie événementielle">
        <LegalList>
          <li>Les billets achetés sont nominatifs et liés à votre compte YoungPay.</li>
          <li>Le QR code de billet est accessible depuis l'application et présenté à l'entrée de l'événement.</li>
          <li>En cas d'annulation d'événement par l'organisateur, YoungPay procède au remboursement intégral dans un délai de <strong>7 jours ouvrables</strong>.</li>
          <li>Les remboursements pour annulation personnelle sont soumis à la politique de l'organisateur de l'événement.</li>
          <li>La revente de billets achetés via YoungPay est interdite.</li>
        </LegalList>
      </LegalSection>

      <LegalSection id="recharges" num={7} title="Recharges et paiements">
        <LegalList>
          <li>Les recharges s'effectuent exclusivement via <strong>Orange Money Guinée</strong>.</li>
          <li>Les recharges sont créditées instantanément après confirmation de la transaction mobile money.</li>
          <li>YoungPay ne facture pas de frais d'ouverture de compte. Des frais de service peuvent s'appliquer à certaines transactions et sont affichés avant confirmation.</li>
          <li>Le solde du portefeuille n'est pas rémunéré et n'est pas couvert par un système de garantie des dépôts.</li>
          <li>En cas d'échec de recharge, le montant débité par Orange Money est recrédité selon les délais d'Orange Guinée.</li>
        </LegalList>
      </LegalSection>

      <LegalSection id="responsabilites" num={8} title="Responsabilités">
        <h3>Responsabilité de YoungPay</h3>
        <p>YoungPay s'engage à fournir ses services avec le plus grand soin. Cependant, YoungPay ne saurait être tenu responsable de :</p>
        <LegalList>
          <li>Interruptions de service dues à des maintenances, incidents techniques ou cas de force majeure.</li>
          <li>Pertes résultant d'un accès non autorisé à votre compte dû à votre négligence (partage de PIN, appareil perdu non signalé).</li>
          <li>Dysfonctionnements des plateformes tierces (Orange Money, Visa, plateformes de cartes cadeaux).</li>
        </LegalList>
        <h3>Responsabilité de l'utilisateur</h3>
        <p>En utilisant YoungPay, vous vous engagez à :</p>
        <LegalList>
          <li>Fournir des informations exactes et à jour lors de l'inscription et de la vérification KYC.</li>
          <li>Ne pas utiliser l'application à des fins illégales, frauduleuses ou en violation des réglementations guinéennes.</li>
          <li>Ne pas tenter de contourner les mesures de sécurité de l'application.</li>
          <li>Signaler immédiatement toute activité suspecte sur votre compte.</li>
        </LegalList>
      </LegalSection>

      <LegalSection id="propriete" num={9} title="Propriété intellectuelle">
        <p>L'ensemble des éléments de l'application YoungPay — code source, design, logos, marques, textes, fonctionnalités — est la propriété exclusive de YoungPay ou de ses partenaires et est protégé par les lois applicables sur la propriété intellectuelle.</p>
        <p>Toute reproduction, modification, distribution ou utilisation commerciale de ces éléments sans autorisation écrite préalable de YoungPay est strictement interdite.</p>
      </LegalSection>

      <LegalSection id="resiliation" num={10} title="Résiliation">
        <h3>Résiliation par l'utilisateur</h3>
        <p>Vous pouvez demander la clôture de votre compte à tout moment depuis <em>Profil → Confidentialité → Supprimer mon compte</em>. La suppression est effective après un délai de 30 jours. Tout solde restant doit être retiré avant la suppression définitive.</p>
        <h3>Résiliation par YoungPay</h3>
        <p>YoungPay se réserve le droit de suspendre ou clôturer votre compte en cas de :</p>
        <LegalList>
          <li>Violation des présentes CGU.</li>
          <li>Activité frauduleuse ou suspicion de blanchiment d'argent.</li>
          <li>Fausse déclaration lors de la vérification d'identité.</li>
          <li>Inactivité prolongée du compte (plus de 24 mois).</li>
        </LegalList>
      </LegalSection>

      <LegalSection id="droit" num={11} title="Droit applicable et litiges">
        <p>Les présentes CGU sont régies par le droit de la <strong>République de Guinée</strong>. En cas de litige, les parties s'engagent à rechercher une résolution amiable dans un délai de 30 jours.</p>
        <p>À défaut de résolution amiable, tout litige sera soumis à la compétence exclusive des tribunaux compétents de Conakry, Guinée.</p>
        <div className="rounded-2xl border border-navy-200 bg-white p-5 space-y-3 mt-4">
          <p className="text-sm font-semibold text-navy m-0">Pour toute question ou réclamation :</p>
          <a href="mailto:contact@young-pay.net" className="flex items-center gap-3 text-navy-700"><Mail className="w-4 h-4 text-teal" /> contact@young-pay.net</a>
          <a href="tel:+224620848511" className="flex items-center gap-3 text-navy-700"><Phone className="w-4 h-4 text-teal" /> +224 620 848 511</a>
        </div>
      </LegalSection>
    </LegalLayout>
  )
}
