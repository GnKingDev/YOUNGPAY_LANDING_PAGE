import { Check, Minus } from 'lucide-react'
import PayCard from './PayCard'
import { TARIFS, COMPARE } from './content'

function Price({ value }: { value: string | null }) {
  return value
    ? <span className="font-semibold text-[#0F2347]">{value}</span>
    : <span className="text-navy-400">Tarif à venir</span>
}

function Has({ ok }: { ok: boolean }) {
  return ok
    ? <><Check className="w-5 h-5 text-primary inline" strokeWidth={2.5} aria-hidden="true" /><span className="sr-only">Oui</span></>
    : <><Minus className="w-5 h-5 text-navy-300 inline" aria-hidden="true" /><span className="sr-only">Non</span></>
}

export default function CardPricing() {
  return (
    <section id="tarifs" className="bg-white py-20 md:py-28 px-5 sm:px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-extrabold text-[#0F2347] tracking-[-0.02em] leading-[1.1] text-3xl sm:text-[2.4rem]">
          Virtuelle ou physique
        </h2>
        <p className="mt-4 text-navy-600 leading-relaxed max-w-2xl">
          La carte virtuelle suffit pour payer en ligne. La carte physique sert aussi en magasin.
          Vous pouvez avoir les deux.
        </p>

        <div className="mt-12 overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[520px] border-collapse text-[15px]">
            <caption className="sr-only">Tarifs et fonctionnalités des cartes virtuelle et physique</caption>
            <thead>
              <tr>
                <th scope="col" className="w-[40%]" />
                <th scope="col" className="pb-6 px-3 text-left align-bottom">
                  <div className="max-w-[190px] mb-4"><PayCard /></div>
                  <span className="font-bold text-[#0F2347] text-lg">Carte virtuelle</span>
                </th>
                <th scope="col" className="pb-6 px-3 text-left align-bottom">
                  <div className="max-w-[190px] mb-4"><PayCard physical /></div>
                  <span className="font-bold text-[#0F2347] text-lg">Carte physique</span>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr><th colSpan={3} scope="colgroup" className="pt-2 pb-3 text-left font-bold text-[#0F2347] border-b-2 border-[#0F2347]">Tarifs</th></tr>
              {TARIFS.map(r => (
                <tr key={r.label} className="border-b border-navy-100">
                  <th scope="row" className="py-4 pr-3 text-left font-normal text-navy-600">{r.label}</th>
                  <td className="py-4 px-3"><Price value={r.virtuelle} /></td>
                  <td className="py-4 px-3"><Price value={r.physique} /></td>
                </tr>
              ))}

              <tr><th colSpan={3} scope="colgroup" className="pt-10 pb-3 text-left font-bold text-[#0F2347] border-b-2 border-[#0F2347]">Ce que la carte permet</th></tr>
              {COMPARE.map(r => (
                <tr key={r.label} className="border-b border-navy-100">
                  <th scope="row" className="py-4 pr-3 text-left font-normal text-navy-600">{r.label}</th>
                  <td className="py-4 px-3"><Has ok={r.virtuelle} /></td>
                  <td className="py-4 px-3"><Has ok={r.physique} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
