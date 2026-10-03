import { STORE_LINKS } from './content'

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
    <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.68 0-1.74-.78-2.86-.76-1.47.02-2.83.86-3.59 2.17-1.53 2.65-.39 6.58 1.1 8.73.73 1.05 1.6 2.23 2.73 2.19 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.46-.03-.01-2.3-.88-2.3-3.48zM14.2 6.13c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.68-.92 2.67.97.07 1.96-.49 2.56-1.22z" />
  </svg>
)

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <path fill="#34A853" d="M3.6 2.3 13.5 12l-9.9 9.7c-.35-.2-.6-.6-.6-1.1V3.4c0-.5.25-.9.6-1.1z" />
    <path fill="#FBBC04" d="m16.8 15.3-3.3-3.3 3.3-3.3 3.8 2.2c.9.5.9 1.7 0 2.2l-3.8 2.2z" />
    <path fill="#4285F4" d="M16.8 15.3 13.5 12l-9.9 9.7c.35.2.8.2 1.2 0l12-6.4z" />
    <path fill="#EA4335" d="M16.8 8.7 4.8 2.3c-.4-.2-.85-.2-1.2 0L13.5 12l3.3-3.3z" />
  </svg>
)

type Props = { tone?: 'dark' | 'light' }

export default function StoreButtons({ tone = 'dark' }: Props) {
  // Couleurs en dur (pas les tokens ink/frost) : le contraste ne dépend pas de la config Tailwind
  const base =
    'inline-flex items-center gap-3 rounded-xl pl-4 pr-5 py-2.5 transition-colors duration-150 ' +
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E3B04B]'
  const cls = tone === 'dark'
    ? `${base} bg-[#0F2347] text-white hover:bg-[#1E5BB8]`
    : `${base} bg-white text-[#0F2347] hover:bg-[#DCEBFF]`

  return (
    <div className="flex flex-wrap gap-3">
      <a href={STORE_LINKS.appStore} className={cls}>
        <AppleIcon />
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[11px] opacity-75">Télécharger sur</span>
          <span className="text-[15px] font-semibold">l’App Store</span>
        </span>
      </a>
      <a href={STORE_LINKS.googlePlay} className={cls}>
        <PlayIcon />
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[11px] opacity-75">Disponible sur</span>
          <span className="text-[15px] font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  )
}
