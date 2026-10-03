const STEPS = [
  { title: 'Créez votre compte',     text: 'Téléchargez l’app YoungPay et inscrivez-vous avec votre numéro de téléphone.' },
  { title: 'Vérifiez votre identité', text: 'Envoyez votre pièce d’identité depuis l’app. Cette vérification est obligatoire pour obtenir une carte.' },
  { title: 'Commandez votre carte',  text: 'Choisissez une carte virtuelle ou physique, et réglez les frais par mobile money.' },
  { title: 'Rechargez et payez',     text: 'Rechargez votre carte par Orange Money, KULU ou Soutra Money, puis payez en ligne.' },
]

export default function GetCard() {
  return (
    <section id="obtenir" className="bg-[#F6F8FC] py-20 md:py-28 px-5 sm:px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-extrabold text-[#0F2347] tracking-[-0.02em] leading-[1.1] text-3xl sm:text-[2.4rem] max-w-xl">
          Obtenir votre carte
        </h2>

        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative pt-6 border-t-2 border-[#0F2347]">
              <span className="block font-extrabold text-primary text-5xl leading-none tracking-tight" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-4 font-bold text-[#0F2347] text-lg">{s.title}</h3>
              <p className="mt-2 text-navy-600 leading-relaxed text-[15px]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
