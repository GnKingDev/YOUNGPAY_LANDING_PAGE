import { MERCHANTS } from './content'

export default function Merchants() {
  return (
    <section className="bg-white py-20 md:py-28 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[22rem_1fr] gap-10 lg:gap-16">
        <div>
          <h2 className="font-extrabold text-[#0F2347] tracking-[-0.02em] leading-[1.1] text-3xl sm:text-[2.4rem]">
            Là où votre carte fonctionne
          </h2>
          <p className="mt-5 text-navy-600 leading-relaxed">
            Partout où Visa est accepté en ligne. Pour un site étranger, activez
            les paiements internationaux dans l’app avant de payer.
          </p>
        </div>

        <ul className="flex flex-wrap items-baseline gap-x-7 gap-y-3" aria-label="Exemples de sites">
          {MERCHANTS.map((m, i) => (
            <li key={m}
              className={`font-bold tracking-[-0.02em] leading-none text-[clamp(1.6rem,3.6vw,2.75rem)]
                ${i % 3 === 1 ? 'text-primary' : 'text-[#0F2347]'}`}>
              {m}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
