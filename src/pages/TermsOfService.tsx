import { Link } from 'react-router-dom'
import { ArrowLeft, FileText, Scale, CreditCard, Mail, Phone, MapPin } from 'lucide-react'

export function TermsOfService() {
  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <div className="animated-bg"></div>
      <div className="bg-overlay"></div>
      <div className="particles"></div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="glass-card p-8 mb-8">
          <Link to="/" className="inline-flex items-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">Terms of Service</h1>
              <p className="text-zinc-600 dark:text-zinc-400">Effective Date: October 27, 2025</p>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="glass-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Company Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-blue-500 mt-1" />
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">LitxTech LLC</p>
                <p className="text-zinc-700 dark:text-zinc-300">15442 Ventura Blvd, Suite 201-1834</p>
                <p className="text-zinc-700 dark:text-zinc-300">Sherman Oaks, CA 91403, USA</p>
                <p className="text-zinc-700 dark:text-zinc-300">D-U-N-S®: 144849529</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-500" />
                <span className="text-zinc-700 dark:text-zinc-300">support@litxtech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-500" />
                <span className="text-zinc-700 dark:text-zinc-300">+1 (307) 271-5151</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">1. Overview</h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              These Terms govern your use of the LitxTech website and services, including Lumi and other SaaS platforms we operate. By using our services, you agree to these Terms.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">2. Eligibility</h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              You must be at least 18 years old to create an account or purchase services.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">3. Account Responsibilities</h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              You are responsible for maintaining the confidentiality of your login credentials and all activity under your account.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">4. Payments and Billing</h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Payments are processed securely via Stripe. By subscribing or purchasing, you authorize recurring billing when applicable.
            </p>
            <div className="flex items-center space-x-3 p-4 bg-green-500/10 rounded-lg">
              <CreditCard className="w-6 h-6 text-green-500" />
              <span className="text-zinc-700 dark:text-zinc-300">All payments processed securely through Stripe</span>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">5. Refunds</h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              Refunds are governed by our Refund & Cancellation Policy (see below).
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">6. Intellectual Property</h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              All site content, logos, software, and documentation are the property of LitxTech LLC. You may not copy, modify, distribute, or resell any part of our products without written consent.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">7. Termination</h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              We may suspend or terminate your account for violation of these Terms or applicable laws.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">8. Limitation of Liability</h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              LitxTech LLC is not liable for indirect, incidental, or consequential damages arising from use of our services.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">9. Governing Law</h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              These Terms are governed by the laws of the State of Wyoming, United States. Any disputes shall be resolved exclusively in the courts of Wyoming.
            </p>
            <div className="flex items-center space-x-3 p-4 bg-blue-500/10 rounded-lg mt-4">
              <Scale className="w-6 h-6 text-blue-500" />
              <span className="text-zinc-700 dark:text-zinc-300">Governed by Wyoming State Law</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="glass-card p-6 mt-8">
          <div className="text-center">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              <strong className="text-zinc-900 dark:text-white">LitxTech LLC</strong> - 
              Registered in Wyoming, United States | D-U-N-S®: 144849529
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">
              15442 Ventura Blvd, Suite 201-1834, Sherman Oaks, CA 91403, USA
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              support@litxtech.com | +1 (307) 271-5151
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
