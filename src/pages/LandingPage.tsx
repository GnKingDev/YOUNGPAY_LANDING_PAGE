import { lazy, Suspense } from 'react'

// Landing consacrée à la carte bancaire YoungPay.
// (Les composants « collect » — Hero, Pricing, DeveloperSection… — restent dans
//  src/components pour les autres pages, mais ne sont plus sur l'accueil.)

// Above the fold — chargés immédiatement
import CardNav  from '../components/card/CardNav'
import CardHero from '../components/card/CardHero'

// Below the fold — chunks séparés, mais montés tout de suite :
// les liens du menu (#tarifs, #faq…) doivent trouver leur section.
const Merchants    = lazy(() => import('../components/card/Merchants'))
const GetCard      = lazy(() => import('../components/card/GetCard'))
const CardPricing  = lazy(() => import('../components/card/CardPricing'))
const CardSecurity = lazy(() => import('../components/card/CardSecurity'))
const CardFaq      = lazy(() => import('../components/card/CardFaq'))
const CardFooter   = lazy(() => import('../components/card/CardFooter'))

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F6F8FC] font-body">
      <CardNav />
      <main>
        <CardHero />
        <Suspense fallback={<div className="h-screen" />}>
          <Merchants />
          <GetCard />
          <CardPricing />
          <CardSecurity />
          <CardFaq />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <CardFooter />
      </Suspense>
    </div>
  )
}
