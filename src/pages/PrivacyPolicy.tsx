import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Lock, Eye, Database, Users, Mail, Phone, MapPin } from 'lucide-react'

export function PrivacyPolicy() {
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
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">Privacy Policy</h1>
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
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">1. Information We Collect</h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              We collect personal and business information you provide when creating an account, subscribing to services, or contacting us. This may include:
            </p>
            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                <span>Name, email, phone number</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                <span>Company details and billing information</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                <span>Login credentials, device and browser data</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                <span>Payment details (processed securely by Stripe)</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">2. How We Use Your Data</h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">We use your information to:</p>
            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                <span>Provide and improve our software and SaaS services</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                <span>Process payments and send invoices</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                <span>Authenticate users via Supabase Auth</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                <span>Send notifications, updates, or support messages</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2"></span>
                <span>Comply with legal obligations</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">3. Data Storage and Security</h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Your data is stored on secure servers hosted by Supabase, Vercel, and Stripe. We implement industry-standard encryption, limited employee access, and periodic security audits.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-500/10 rounded-lg">
                <Lock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-semibold text-zinc-900 dark:text-white">Encryption</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">TLS 1.2+ encryption</p>
              </div>
              <div className="text-center p-4 bg-green-500/10 rounded-lg">
                <Database className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-semibold text-zinc-900 dark:text-white">Secure Storage</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Supabase & Vercel</p>
              </div>
              <div className="text-center p-4 bg-purple-500/10 rounded-lg">
                <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h3 className="font-semibold text-zinc-900 dark:text-white">Access Control</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Limited & monitored</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">4. Third-Party Services</h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">We may integrate third-party platforms such as:</p>
            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                <span>Stripe (payment processing)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                <span>Supabase (authentication and database)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2"></span>
                <span>Google Analytics (traffic analysis)</span>
              </li>
            </ul>
            <p className="text-zinc-700 dark:text-zinc-300 mt-4">
              Each provider complies with GDPR and CCPA standards.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">5. Your Rights</h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal data. Contact us at privacy@litxtech.com to exercise these rights.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">6. Updates</h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              We may update this Privacy Policy periodically. Continued use of our services implies consent to the updated version.
            </p>
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
