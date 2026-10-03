import { Plus } from 'lucide-react'
import { FAQ } from './content'

export default function CardFaq() {
  return (
    <section id="faq" className="bg-white py-20 md:py-28 px-5 sm:px-6 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-extrabold text-[#0F2347] tracking-[-0.02em] leading-[1.1] text-3xl sm:text-[2.4rem]">
          Questions fréquentes
        </h2>

        <div className="mt-10 border-t border-navy-200">
          {FAQ.map(item => (
            <details key={item.q} className="group border-b border-navy-200">
              <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none
                text-[#0F2347] font-semibold text-[17px] rounded-md
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
                [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus className="w-5 h-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                  aria-hidden="true" />
              </summary>
              <p className="pb-6 -mt-1 text-navy-600 leading-relaxed max-w-[62ch]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
