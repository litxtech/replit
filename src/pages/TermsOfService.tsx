import { Shield, CheckCircle, Globe, Phone, Mail } from 'lucide-react'

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="h-8 w-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
          </div>
          <p className="text-gray-300">Last Updated: August 8, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 space-y-8">
          
          {/* Section A */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-lg font-bold mr-4">A</span>
              Acceptance of Terms
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>By using LitxTech's platforms, websites, mobile applications, or APIs (collectively "the Service"), you agree to these Terms of Service and our Privacy Policy.</p>
              <p className="font-semibold text-red-600">If you do not agree, you may not use the Service.</p>
              <p>You confirm that you are of legal age in your jurisdiction and have authority to enter this agreement. Commercial or agency use requires a separate business agreement with LitxTech.</p>
            </div>
          </section>

          {/* Section B */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-lg font-bold mr-4">B</span>
              Account Usage and Security
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <ul className="list-disc list-inside space-y-2">
                <li>You are responsible for all activities occurring under your account.</li>
                <li>Keep your password and API keys confidential.</li>
                <li>LitxTech will not be liable for losses caused by unauthorized access resulting from your failure to secure your credentials.</li>
              </ul>
            </div>
          </section>

          {/* Section C */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-lg font-bold mr-4">C</span>
              Permitted Use
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>Our Service is intended for creating, deploying, and managing web and mobile applications, AI-powered tools, and integrations provided by LitxTech.</p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-red-800 mb-2">You may not:</h3>
                <ul className="list-disc list-inside space-y-1 text-red-700">
                  <li>Host or share illegal, defamatory, or infringing content.</li>
                  <li>Attempt to reverse-engineer, scrape, or replicate our systems.</li>
                  <li>Overload the Service through excessive or automated requests.</li>
                  <li>Circumvent payment, quota, or authentication systems.</li>
                  <li>Use LitxTech services to train unrelated AI models or perform cryptocurrency mining.</li>
                </ul>
              </div>
              <p className="font-semibold text-red-600">Violation may result in account suspension without refund.</p>
            </div>
          </section>

          {/* Section D */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-lg font-bold mr-4">D</span>
              Content Ownership
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>You retain ownership of content you create using LitxTech products.</p>
              <p>By submitting or deploying content, you grant LitxTech a limited license to host, display, and process that content to provide and improve the Service.</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="font-semibold text-blue-800">LitxTech retains all rights to its software, code, design, trademarks, and documentation.</p>
                <p className="text-blue-700">You may not copy or redistribute any part of the platform without written consent.</p>
              </div>
            </div>
          </section>

          {/* Section E */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-lg font-bold mr-4">E</span>
              Privacy and Data Handling
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-semibold text-green-700">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-semibold text-green-700">CCPA Compliant</span>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-semibold text-green-700">KVKK Compliant</span>
              </div>
              <p>LitxTech complies with GDPR, CCPA, and KVKK where applicable.</p>
              <p>We collect only data required to operate and secure the Service—authentication, billing, and usage analytics.</p>
              <p className="font-semibold text-green-600">We never sell user data.</p>
              <p>For details, see our <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a>.</p>
            </div>
          </section>

          {/* Section F */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-lg font-bold mr-4">F</span>
              Payments and Subscriptions
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>All purchases and subscriptions are processed securely through Stripe.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Subscription Renewal:</h3>
                  <p className="text-green-700">Plans renew automatically unless canceled before renewal.</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Pricing:</h3>
                  <p className="text-blue-700">Prices are shown in USD and may vary by region or plan tier.</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Refund Policy:</h3>
                <ul className="list-disc list-inside space-y-1 text-yellow-700">
                  <li>Full refunds apply only before project creation or product activation.</li>
                  <li>Once a digital service or software has been accessed, refunds are invalid.</li>
                  <li>All refunds are handled via Stripe within 5–10 business days.</li>
                  <li>For refund requests, contact <a href="mailto:support@litxtech.com" className="text-blue-600 hover:text-blue-800 underline">support@litxtech.com</a></li>
                </ul>
              </div>

              <p>Users are responsible for applicable local taxes or VAT unless explicitly included.</p>
            </div>
          </section>

          {/* Section G */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-lg font-bold mr-4">G</span>
              Service Availability
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>LitxTech aims for <span className="font-bold text-green-600">99.9% uptime</span> but provides the Service "as is" and "as available."</p>
              <p>Planned maintenance and external provider issues (Supabase, Vercel, Stripe, DeepSeek, etc.) may affect availability.</p>
            </div>
          </section>

          {/* Section H */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-lg font-bold mr-4">H</span>
              Termination
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>You may terminate your account anytime via your dashboard or by contacting support.</p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-red-800 mb-2">LitxTech may suspend or close accounts that:</h3>
                <ul className="list-disc list-inside space-y-1 text-red-700">
                  <li>Violate these Terms,</li>
                  <li>Remain unpaid, or</li>
                  <li>Threaten platform security or reputation.</li>
                </ul>
              </div>
              <p className="font-semibold text-red-600">No refunds are issued for accounts terminated due to violations.</p>
            </div>
          </section>

          {/* Section I */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-lg font-bold mr-4">I</span>
              Limitation of Liability
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>To the maximum extent permitted by law, LitxTech LLC shall not be liable for:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Data loss,</li>
                <li>Indirect or consequential damages, or</li>
                <li>Loss of revenue, opportunity, or goodwill.</li>
              </ul>
              <p className="font-semibold text-orange-600">Your use of the Service is entirely at your own risk.</p>
            </div>
          </section>

          {/* Section J */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-lg font-bold mr-4">J</span>
              Indemnification
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p>You agree to defend, indemnify, and hold harmless LitxTech LLC, its affiliates, and officers from any claims or damages arising from your use of the Service or violation of these Terms.</p>
            </div>
          </section>

          {/* Section K */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-lg font-bold mr-4">K</span>
              Jurisdiction
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p>These Terms are governed by the laws of the State of Wyoming, USA.</p>
              <p>Any dispute shall be resolved exclusively in the courts of Wyoming, United States.</p>
            </div>
          </section>

          {/* Section L */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-lg font-bold mr-4">L</span>
              Modifications
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p>LitxTech reserves the right to modify these Terms at any time.</p>
              <p>Updates will be posted at <a href="https://www.litxtech.com/terms" className="text-blue-600 hover:text-blue-800 underline">www.litxtech.com/terms</a>, and continued use constitutes acceptance of the new version.</p>
            </div>
          </section>

          {/* Section M */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-lg font-bold mr-4">M</span>
              Contact
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">For any questions or legal notices:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">LitxTech LLC</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <a href="tel:+13072715151" className="text-gray-700 hover:text-blue-600">+1 307 271 5151</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <a href="mailto:support@litxtech.com" className="text-gray-700 hover:text-blue-600">support@litxtech.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-indigo-600" />
                  <a href="https://www.litxtech.com" className="text-gray-700 hover:text-blue-600">www.litxtech.com</a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}