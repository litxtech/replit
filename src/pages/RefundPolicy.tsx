import { Link } from 'react-router-dom'
import { ArrowLeft, RefreshCw, CreditCard, Mail, Phone, MapPin } from 'lucide-react'

export function RefundPolicy() {
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
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
              <RefreshCw className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">Refund & Cancellation Policy</h1>
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
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">1. Digital Service Policy</h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Our products are digital in nature. Once development begins or software is delivered, refunds are not available except in cases of non-performance or verified technical failure.
            </p>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
              <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                <strong>Important:</strong> All refund requests must be submitted within the specified timeframes below.
              </p>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">2. Pre-Made Packages</h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              For standard packages (e.g., Lite, Pro, Ultra):
            </p>
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <p className="text-zinc-700 dark:text-zinc-300">
                <strong>Refunds may be requested within 7 days of purchase</strong> if no customization work has started.
              </p>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">3. Custom Development</h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              For custom-built projects or SaaS integrations:
            </p>
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-zinc-700 dark:text-zinc-300">
                <strong>No refunds once project design, development, or resource allocation has begun.</strong>
              </p>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">4. Subscriptions</h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              Subscriptions can be canceled anytime via your account dashboard. The cancellation will take effect at the end of the current billing period.
            </p>
            <div className="flex items-center space-x-3 p-4 bg-blue-500/10 rounded-lg">
              <CreditCard className="w-6 h-6 text-blue-500" />
              <span className="text-zinc-700 dark:text-zinc-300">Cancel anytime from your dashboard</span>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">5. Payment Disputes</h2>
            <p className="text-zinc-700 dark:text-zinc-300 mb-4">
              All payment disputes should be directed to support@litxtech.com before initiating chargebacks with your financial institution.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                <strong>Contact us first:</strong> We're committed to resolving all issues quickly and fairly.
              </p>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">6. Processing Time</h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              Approved refunds will be processed within 5-10 business days and will appear on your original payment method.
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
