import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { BlogPage } from './pages/BlogPage'
import { AuthPage } from './pages/AuthPage'
import { AdminPage } from './pages/AdminPage'
import { AIBuilder } from './pages/AIBuilder'
import { Investment } from './pages/Investment'
import { Packages } from './pages/Packages'
import { LoginPage } from './pages/LoginPage'
import { AuthCallback } from './pages/AuthCallback'
import { LegalDocumentPage } from './pages/LegalDocumentPage'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from './pages/TermsOfService'
import { RefundPolicy } from './pages/RefundPolicy'
import { DataSecurityPolicy } from './pages/DataSecurityPolicy'
import { CommercialAgreement } from './pages/CommercialAgreement'
import { Subprocessors } from './pages/Subprocessors'
import { BlogManagement } from './pages/BlogManagement'
import { AdminLogin } from './pages/AdminLogin'
import { SuccessPage } from './pages/SuccessPage'
import { CancelPage } from './pages/CancelPage'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/ai-builder" element={<AIBuilder />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/legal" element={<LegalDocumentPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/data-security-policy" element={<DataSecurityPolicy />} />
          <Route path="/commercial-agreement" element={<CommercialAgreement />} />
          <Route path="/subprocessors" element={<Subprocessors />} />
          <Route path="/admin/blog" element={<BlogManagement />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/cancel" element={<CancelPage />} />
        </Routes>
      </div>
    </LanguageProvider>
  )
}

export default App
