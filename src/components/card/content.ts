// Contenu éditable de la landing « carte bancaire ».
// Tarifs et liens des stores : à remplir ici, la page se met à jour toute seule.

export const STORE_LINKS = {
  appStore:   '#',   // TODO : lien App Store de l'app YoungPay
  googlePlay: '#',   // TODO : lien Google Play de l'app YoungPay
}

// Une valeur `null` s'affiche « Tarif à venir ». Ex. : '25 000 GNF', 'Gratuit', '1 %'.
export type TarifRow = { label: string; virtuelle: string | null; physique: string | null }

export const TARIFS: TarifRow[] = [
  { label: 'Création de la carte',       virtuelle: null, physique: null },
  { label: 'Frais mensuels',             virtuelle: null, physique: null },
  { label: 'Recharge depuis le wallet',  virtuelle: null, physique: null },
  { label: 'Paiement en ligne',          virtuelle: null, physique: null },
]

// Fonctionnalités comparées (uniquement ce que le produit fait réellement)
export const COMPARE: { label: string; virtuelle: boolean; physique: boolean }[] = [
  { label: 'Paiements en ligne',                    virtuelle: true,  physique: true  },
  { label: 'Paiements en magasin',                  virtuelle: false, physique: true  },
  { label: 'Recharge depuis le wallet',             virtuelle: true,  physique: true  },
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
    a: 'Non. La carte se recharge depuis votre wallet YoungPay, que vous alimentez par Orange Money, KULU ou Soutra Money.',
  },
  {
    q: 'Pourquoi dois-je vérifier mon identité ?',
    a: 'La vérification d’identité est obligatoire pour obtenir une carte bancaire. Envoyez votre pièce d’identité depuis l’app : votre carte peut être créée dès que la vérification est validée.',
  },
  {
    q: 'Comment mettre de l’argent sur ma carte ?',
    a: 'Rechargez d’abord votre wallet (Orange Money, KULU ou Soutra Money), puis transférez le montant voulu du wallet vers la carte dans l’app.',
  },
  {
    q: 'Mon paiement sur un site étranger est refusé. Que faire ?',
    a: 'Vérifiez dans l’app que les paiements en ligne et les paiements internationaux sont activés pour cette carte. Les paiements internationaux sont désactivés par défaut.',
  },
  {
    q: 'J’ai perdu ma carte physique.',
    a: 'Gelez-la tout de suite dans l’app : plus aucun paiement ne passe. Vous pouvez ensuite l’annuler et en créer une nouvelle.',
  },
  {
    q: 'Puis-je récupérer l’argent qui reste sur la carte ?',
    a: 'Oui. Transférez le solde de la carte vers votre wallet YoungPay à tout moment.',
  },
]
