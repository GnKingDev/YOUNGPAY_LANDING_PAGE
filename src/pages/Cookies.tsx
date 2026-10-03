import { Mail } from 'lucide-react'
import LegalLayout, { LegalSection, LegalNote, LegalList, type TocItem } from '../components/LegalLayout'

const sections: TocItem[] = [
  { id: 'intro', title: 'Qu\'est-ce qu\'un cookie ?' },
  { id: 'usage', title: 'Comment nous les utilisons' },
  { id: 'types', title: 'Types de cookies' },
  { id: 'tiers', title: 'Cookies tiers' },
  { id: 'gestion', title: 'Gérer vos préférences' },
  { id: 'contact', title: 'Contact' },
]

const table = [
  { cat: 'Essentiels', role: 'Authentification, sécurité de session, équilibrage de charge. Indispensables au fonctionnement.', duree: 'Session' },
  { cat: 'Préférences', role: 'Mémorisation de la langue et de l\'environnement (sandbox / production).', duree: '6 mois' },
  { cat: 'Mesure d\'audience', role: 'Statistiques d\'utilisation anonymisées pour améliorer le service.', duree: '13 mois' },
]

export default function Cookies() {
  return (
    <LegalLayout
      titleTop="Politique de"
      titleAccent="Cookies"
      accent="blue"
      subtitle="Dernière mise à jour : août 2026 · Comment YoungPay utilise les cookies et technologies similaires"
      sections={sections}
    >
      <LegalSection id="intro" num={1} title="Qu'est-ce qu'un cookie ?">
        <p>Un cookie est un petit fichier texte déposé sur votre appareil lorsque vous visitez un site web. Il permet au site de mémoriser vos actions et préférences (connexion, langue, environnement) pendant une durée déterminée.</p>
        <p>YoungPay utilise des cookies et des technologies similaires (stockage local) pour assurer le bon fonctionnement de son portail marchand et améliorer votre expérience.</p>
        <LegalNote>Nous n'utilisons aucun cookie publicitaire de ciblage et ne revendons jamais vos données de navigation.</LegalNote>
      </LegalSection>

      <LegalSection id="usage" num={2} title="Comment nous les utilisons">
        <p>Les cookies que nous déposons servent exclusivement à :</p>
        <LegalList>
          <li>Vous maintenir connecté à votre espace marchand en toute sécurité.</li>
          <li>Mémoriser vos préférences (langue, environnement sandbox ou production).</li>
          <li>Protéger votre compte contre les accès frauduleux.</li>
          <li>Mesurer l'audience de manière agrégée et anonyme pour améliorer le service.</li>
        </LegalList>
      </LegalSection>

      <LegalSection id="types" num={3} title="Types de cookies utilisés">
        <div className="rounded-2xl border border-navy-200 overflow-hidden">
          <div className="grid grid-cols-[1.1fr_2fr_0.8fr] bg-navy-50 text-navy-500 text-xs font-bold uppercase tracking-wide">
            <div className="px-4 py-3">Catégorie</div>
            <div className="px-4 py-3">Rôle</div>
            <div className="px-4 py-3">Durée</div>
          </div>
          {table.map((r, i) => (
            <div key={r.cat} className={`grid grid-cols-[1.1fr_2fr_0.8fr] text-sm ${i !== 0 ? 'border-t border-navy-100' : ''}`}>
              <div className="px-4 py-3 font-semibold text-navy">{r.cat}</div>
              <div className="px-4 py-3 text-navy-500">{r.role}</div>
              <div className="px-4 py-3 text-navy-500">{r.duree}</div>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection id="tiers" num={4} title="Cookies tiers">
        <p>Certains services tiers de confiance peuvent déposer des cookies dans le cadre de leur fonctionnement :</p>
        <LegalList>
          <li><strong>Google Fonts</strong> — chargement de la police Poppins.</li>
          <li><strong>Prestataires d'infrastructure</strong> — sécurité et disponibilité du service.</li>
        </LegalList>
        <p>Nous veillons à ne solliciter que des tiers respectant la confidentialité de vos données.</p>
      </LegalSection>

      <LegalSection id="gestion" num={5} title="Gérer vos préférences">
        <p>Vous pouvez à tout moment contrôler ou supprimer les cookies depuis les réglages de votre navigateur :</p>
        <LegalList>
          <li>Bloquer tous les cookies (le portail marchand pourrait ne plus fonctionner correctement).</li>
          <li>Supprimer les cookies existants.</li>
          <li>Être averti avant tout dépôt de cookie.</li>
        </LegalList>
        <p>Notez que la désactivation des cookies <em>essentiels</em> empêche la connexion à votre espace marchand.</p>
      </LegalSection>

      <LegalSection id="contact" num={6} title="Contact">
        <p>Pour toute question relative à cette politique de cookies :</p>
        <div className="rounded-2xl border border-navy-200 bg-white p-5">
          <a href="mailto:contact@young-pay.net" className="flex items-center gap-3 text-navy-700"><Mail className="w-4 h-4 text-primary" /> contact@young-pay.net</a>
        </div>
      </LegalSection>
    </LegalLayout>
  )
}
