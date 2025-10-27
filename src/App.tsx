import { Routes, Route } from 'react-router-dom'
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

function App() {
  return (
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
      </Routes>
    </div>
  )
}

export default App
