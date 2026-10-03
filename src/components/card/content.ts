// Contenu éditable de la landing « carte bancaire ».
// Tarifs et liens des stores : à remplir ici, la page se met à jour toute seule.

export const STORE_LINKS = {
  appStore:   '#',   // TODO : lien App Store de l'app YoungPay
  googlePlay: '#',   // TODO : lien Google Play de l'app YoungPay
}

// Une valeur `null` s'affiche « Tarif à venir ». Ex. : '25 000 GNF', 'Gratuit', '1 %'.
export type TarifRow = { label: string; virtuelle: string | null; physique: string | null }

export const TARIFS: TarifRow[] = [
  // Prix repris de l'app (Mobile_APP/lib/screens/onboarding/first_card_screen.dart)
  { label: 'Création de la carte',       virtuelle: '50 000 GNF', physique: '100 000 GNF' },
  { label: 'Frais mensuels',             virtuelle: null, physique: null },
  { label: 'Recharge par mobile money',  virtuelle: null, physique: null },
  { label: 'Paiement en ligne',          virtuelle: null, physique: null },
]

// Fonctionnalités comparées (uniquement ce que le produit fait réellement)
export const COMPARE: { label: string; virtuelle: boolean; physique: boolean }[] = [
  { label: 'Paiements en ligne',                    virtuelle: true,  physique: true  },
  { label: 'Paiements en magasin',                  virtuelle: false, physique: true  },
  { label: 'Recharge par mobile money',             virtuelle: true,  physique: true  },
  { label: 'Gel et dégel depuis l’app',             virtuelle: true,  physique: true  },
  { label: 'Paiements internationaux activables',   virtuelle: true,  physique: true  },
]

// Sites où les clients se heurtent le plus souvent à un refus de paiement
export const MERCHANTS = [
  'Netflix', 'AliExpress', 'Google Play', 'Canva', 'Spotify', 'Amazon',
  'Udemy', 'Coursera', 'YouTube Premium', 'Apple', 'Shein', 'Booking.com',
]

export const FAQ: { q: string; a: string }[] = [
  {
    q: 'Ai-je besoin d’un compte bancaire ?',
    a: 'Non. Vous rechargez votre carte directement par mobile money : Orange Money, KULU ou Soutra Money.',
  },
  {
    q: 'Pourquoi dois-je vérifier mon identité ?',
    a: 'La vérification d’identité est obligatoire pour obtenir une carte bancaire. Envoyez votre pièce d’identité depuis l’app : votre carte peut être créée dès que la vérification est validée.',
  },
  {
    q: 'Comment mettre de l’argent sur ma carte ?',
    a: 'Depuis l’app, rechargez votre carte par mobile money : Orange Money, KULU ou Soutra Money. Le solde de la carte s’affiche dans l’app.',
  },
  {
    q: 'Mon paiement sur un site étranger est refusé. Que faire ?',
    a: 'Vérifiez dans l’app que les paiements en ligne et les paiements internationaux sont bien activés pour cette carte, et que son solde couvre le montant.',
  },
  {
    q: 'J’ai perdu ma carte physique.',
    a: 'Gelez-la tout de suite dans l’app : plus aucun paiement ne passe. Vous pouvez ensuite l’annuler et en créer une nouvelle.',
  },
]
