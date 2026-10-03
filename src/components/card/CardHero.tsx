import PayCard from './PayCard'
import StoreButtons from './StoreButtons'

export default function CardHero() {
  return (
    <section className="bg-[#F6F8FC] pt-[104px] pb-20 md:pb-28 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-16 items-center">

        {/* Texte */}
        <div className="max-w-xl">
          <h1 className="font-extrabold text-[#0F2347] tracking-[-0.025em] leading-[1.04] text-[2.5rem] sm:text-[3.2rem] lg:text-[3.6rem]">
            Payez en ligne partout dans le monde, depuis la Guinée.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-navy-600 max-w-[34rem]">
            Une carte Visa que vous rechargez par mobile money.
            Netflix, AliExpress, Google Play, Canva : vos paiements passent.
          </p>
          <div className="mt-9">
            <StoreButtons />
          </div>
          <p className="mt-5 text-sm text-navy-500">
            Carte virtuelle créée dès que votre identité est vérifiée. Carte physique disponible.
          </p>
        </div>

        {/* Carte */}
        <div className="w-full max-w-[460px] mx-auto lg:mx-0 lg:justify-self-end">
          <PayCard />
        </div>
      </div>
    </section>
  )
}
