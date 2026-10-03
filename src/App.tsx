import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

// Landing page — chargée immédiatement (page d'entrée)
import LandingPage from './pages/LandingPage'

// Tout le reste — chargé à la demande uniquement
const AuthFlow  = lazy(() => import('./pages/AuthFlow'))
const Register  = lazy(() => import('./pages/Register'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const DevPage   = lazy(() => import('./pages/DevPage'))
const PayPage    = lazy(() => import('./pages/PayPage'))
const ResultPage = lazy(() => import('./pages/ResultPage'))
const PaymentResult = lazy(() => import('./pages/PaymentResult'))
const Privacy    = lazy(() => import('./pages/Privacy'))
const Terms      = lazy(() => import('./pages/Terms'))
const Securite   = lazy(() => import('./pages/Securite'))
const Updates    = lazy(() => import('./pages/Updates'))
const Webhooks   = lazy(() => import('./pages/Webhooks'))
const Sdk        = lazy(() => import('./pages/Sdk'))
const Sandbox    = lazy(() => import('./pages/Sandbox'))
const About      = lazy(() => import('./pages/About'))
const Blog       = lazy(() => import('./pages/Blog'))
const Partners   = lazy(() => import('./pages/Partners'))
const Careers    = lazy(() => import('./pages/Careers'))
const Contact    = lazy(() => import('./pages/Contact'))
const CookiesPage = lazy(() => import('./pages/Cookies'))
const Compliance = lazy(() => import('./pages/Compliance'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem('yp_token')
  if (!token) return <Navigate to="/connexion" replace />
  return <>{children}</>
}

// Fallback minimal — ne bloque pas le rendu
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
  </div>
)

export default function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"            element={<LandingPage />} />
          <Route path="/connexion"   element={<AuthFlow />} />
          <Route path="/inscription" element={<Register />} />
          <Route path="/dashboard"   element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/docs"        element={<DevPage />} />
          <Route path="/developpeur" element={<ProtectedRoute><DevPage /></ProtectedRoute>} />
          <Route path="/pay/:linkId"              element={<PayPage />} />
          <Route path="/result"                  element={<PaymentResult />} />
          <Route path="/result/:transactionId"   element={<ResultPage />} />
          <Route path="/privacy"     element={<Privacy />} />
          <Route path="/terms"       element={<Terms />} />
          {/* Produit */}
          <Route path="/securite"     element={<Securite />} />
          <Route path="/mises-a-jour" element={<Updates />} />
          {/* Développeurs */}
          <Route path="/webhooks"     element={<Webhooks />} />
          <Route path="/sdk"          element={<Sdk />} />
          <Route path="/sandbox"      element={<Sandbox />} />
          {/* Entreprise */}
          <Route path="/a-propos"     element={<About />} />
          <Route path="/blog"         element={<Blog />} />
          <Route path="/partenaires"  element={<Partners />} />
          <Route path="/carrieres"    element={<Careers />} />
          <Route path="/contact"      element={<Contact />} />
          {/* Légal */}
          <Route path="/cookies"      element={<CookiesPage />} />
          <Route path="/conformite"   element={<Compliance />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  )
}
