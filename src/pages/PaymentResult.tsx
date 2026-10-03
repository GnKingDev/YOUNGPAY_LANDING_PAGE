import { useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { CheckCircle2, XCircle, Clock, ArrowRight, RotateCcw } from 'lucide-react'
import logo from '../assets/logo_full.png'

/**
 * Page de résultat de paiement — cible de la "return URL" Soutra.
 * Reçoit ?status=SUCCESS&unique_txn_id=...&txn_number=...
 */
export default function PaymentResult() {
  const [params] = useSearchParams()
  const navigate = useNavigate()

  const status = (params.get('status') || 'UNKNOWN').toUpperCase()
  const uniqueTxnId = params.get('unique_txn_id') || ''
  const txnNumber = params.get('txn_number') || ''

  const view = useMemo(() => {
    if (['SUCCESS', 'APPROVED'].includes(status)) return {
      icon: <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={2.2} />,
      ring: 'linear-gradient(135deg, #16A34A, #22C55E)',
      glow: 'rgba(34,197,94,0.25)',
      title: 'Paiement réussi',
      msg: 'Ton paiement a été confirmé avec succès. Merci !',
    }
    if (['FAILED', 'REJECTED'].includes(status)) return {
      icon: <XCircle className="w-12 h-12 text-white" strokeWidth={2.2} />,
      ring: 'linear-gradient(135deg, #DC2626, #EF4444)',
      glow: 'rgba(239,68,68,0.25)',
      title: 'Paiement échoué',
      msg: 'Le paiement n\'a pas abouti. Tu peux réessayer.',
    }
    if (['PENDING', 'REFUNDED'].includes(status)) return {
      icon: <Clock className="w-12 h-12 text-white" strokeWidth={2.2} />,
      ring: 'linear-gradient(135deg, #B45309, #F59E0B)',
      glow: 'rgba(245,158,11,0.25)',
      title: status === 'REFUNDED' ? 'Paiement remboursé' : 'Paiement en attente',
      msg: status === 'REFUNDED'
        ? 'Ce paiement a été remboursé.'
        : 'Ton paiement est en cours de validation. Tu recevras une confirmation.',
    }
    return {
      icon: <Clock className="w-12 h-12 text-white" strokeWidth={2.2} />,
      ring: 'linear-gradient(135deg, #64748B, #94A3B8)',
      glow: 'rgba(100,116,139,0.2)',
      title: 'Statut inconnu',
      msg: 'Nous n\'avons pas pu déterminer le statut de ce paiement.',
    }
  }, [status])

  const isFailed = ['FAILED', 'REJECTED'].includes(status)

  return (
    <div className="min-h-screen bg-white font-body flex items-center justify-center px-6"
      style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #F4F8FF 60%, #EAF1FD 100%)' }}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="YoungPay" className="h-10 w-auto" />
        </div>

        <div className="bg-white rounded-3xl border border-navy-100 px-8 py-10 text-center"
          style={{ boxShadow: '0 24px 60px rgba(15,23,41,0.10)' }}>
          {/* Icône statut */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{ background: view.ring, boxShadow: `0 0 0 10px ${view.glow}` }}>
              {view.icon}
            </div>
          </div>

          <h1 className="font-bold text-2xl text-navy mb-2">{view.title}</h1>
          <p className="text-navy-500 text-sm leading-relaxed mb-6">{view.msg}</p>

          {/* Détails transaction */}
          {(uniqueTxnId || txnNumber) && (
            <div className="rounded-2xl bg-navy-50 border border-navy-100 p-4 text-left space-y-2 mb-7">
              {txnNumber && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-navy-400">N° de transaction</span>
                  <span className="font-semibold text-navy font-mono">{txnNumber}</span>
                </div>
              )}
              {uniqueTxnId && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-navy-400">Référence</span>
                  <span className="font-semibold text-navy font-mono truncate max-w-[180px]">{uniqueTxnId}</span>
                </div>
              )}
              <div className="flex items-center justify-between text-sm">
                <span className="text-navy-400">Statut</span>
                <span className="font-semibold text-navy">{status}</span>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col gap-3">
            {isFailed && (
              <button onClick={() => navigate(-1)} className="btn-primary justify-center py-3.5">
                <RotateCcw className="w-4 h-4" /> Réessayer
              </button>
            )}
            <button onClick={() => navigate('/')}
              className={isFailed ? 'btn-secondary justify-center py-3.5' : 'btn-primary justify-center py-3.5'}>
              Retour à l'accueil <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="text-center text-navy-400 text-xs mt-6">
          Paiement sécurisé par <span className="font-semibold text-navy">YoungPay</span>
        </p>
      </div>
    </div>
  )
}
