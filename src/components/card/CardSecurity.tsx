const ITEMS = [
  { title: '3-D Secure',                 text: 'Les paiements en ligne sont confirmés par une étape de vérification supplémentaire, selon le site.' },
  { title: 'Gel en un geste',            text: 'Un doute sur votre carte ? Gelez-la depuis l’app : plus rien ne passe jusqu’à ce que vous la dégeliez.' },
  { title: 'Numéro affiché sur demande', text: 'Le numéro complet et le CVV ne s’affichent que lorsque vous le demandez, pour une durée limitée.' },
  { title: 'Réglages par carte',         text: 'Activez ou coupez séparément les paiements en ligne et les paiements internationaux.' },
  { title: 'Annulation à tout moment',   text: 'Annulez une carte depuis l’app à tout moment, par exemple après une perte.' },
]

export default function CardSecurity() {
  return (
    <section id="securite" className="bg-[#F6F8FC] py-20 md:py-28 px-5 sm:px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[22rem_1fr] gap-10 lg:gap-16">
        <div>
          <h2 className="font-extrabold text-[#0F2347] tracking-[-0.02em] leading-[1.1] text-3xl sm:text-[2.4rem] lg:sticky lg:top-28">
            Votre carte, sous votre contrôle
          </h2>
        </div>

        <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-9">
          {ITEMS.map(it => (
            <div key={it.title} className="border-l-2 border-primary pl-5">
              <dt className="font-bold text-[#0F2347] text-lg">{it.title}</dt>
              <dd className="mt-2 text-navy-600 leading-relaxed text-[15px]">{it.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
