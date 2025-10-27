import { Shield, Eye, Globe, Phone, Mail, CheckCircle, Database, Users } from 'lucide-react'

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="h-8 w-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
          </div>
          <p className="text-gray-300">Last Updated: August 8, 2025</p>
          <p className="text-gray-400 text-sm mt-2">LitxTech LLC ("LitxTech," "we," "our," or "us") values your privacy and is committed to protecting personal information.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 space-y-8">
          
          {/* Introduction */}
          <section className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-blue-900 mb-3">Introduction</h2>
              <p className="text-blue-800">This Privacy Policy explains how we collect, use, store, and share information about you. By using our Services, you agree to this Privacy Policy and our Terms of Service.</p>
              <p className="text-blue-700 mt-2">If you are located in the European Economic Area ("EEA"), the United Kingdom, or Switzerland, this Policy also serves as your notice under the GDPR.</p>
            </div>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-lg font-bold mr-4">1</span>
              Information We Collect
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>We may collect information from or about you in three main ways:</p>
              
              {/* A */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  A. Information You Provide Directly
                </h3>
                <ul className="list-disc list-inside space-y-2 text-green-700">
                  <li><strong>Account Information:</strong> When you register or sign in, we collect your name, email address, and optionally your phone number.</li>
                  <li><strong>Payment Information:</strong> Payments are processed through Stripe, a PCI DSS Level 1 certified provider. We do not store full credit card details on our servers.</li>
                  <li><strong>Communications:</strong> When you contact support or send feedback, we receive your email, message content, and any attachments.</li>
                  <li><strong>AI Inputs:</strong> If you use LitxTech AI tools or chat-based assistants, we may store prompts and responses for system improvement.</li>
                </ul>
              </div>

              {/* B */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  B. Information We Collect Automatically
                </h3>
                <p className="text-blue-700 mb-2">We and our analytics partners (e.g., Supabase Analytics, Google Analytics) collect:</p>
                <ul className="list-disc list-inside space-y-2 text-blue-700">
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, device model, and session IDs.</li>
                  <li><strong>Usage Information:</strong> Pages visited, features used, time spent, and app interactions.</li>
                  <li><strong>Cookies & Similar Technologies:</strong> Used to keep you logged in, remember preferences, and analyze traffic. You can control cookies via your browser settings.</li>
                </ul>
              </div>

              {/* C */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-purple-800 mb-3 flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  C. Information from Third Parties
                </h3>
                <ul className="list-disc list-inside space-y-2 text-purple-700">
                  <li><strong>Third-Party Integrations:</strong> If you connect your account to Google, Apple, or other services, we receive certain profile data depending on your permissions.</li>
                  <li><strong>Marketing or Analytics Partners:</strong> We may receive general demographic data to improve service targeting.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-lg font-bold mr-4">2</span>
              How We Use Your Information
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>We use collected information to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Operate, maintain, and improve our Services.</li>
                <li>Provide personalized AI responses, recommendations, and features.</li>
                <li>Process payments and manage subscriptions.</li>
                <li>Detect and prevent fraud, abuse, and unauthorized access.</li>
                <li>Comply with legal obligations.</li>
                <li>Communicate with you about updates, security, and promotions (if opted in).</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-yellow-800">We may also anonymize data for research and system optimization purposes. Once anonymized, such data is no longer personal and can be used for product improvement or analytics.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-lg font-bold mr-4">3</span>
              Legal Bases for Processing (GDPR & Global Compliance)
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>We process your information under the following legal bases:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Consent</h3>
                  <p className="text-green-700">You've given consent (e.g., for marketing or AI usage logging).</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Contractual Necessity</h3>
                  <p className="text-blue-700">Required to provide the Services you requested.</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-2">Legitimate Interest</h3>
                  <p className="text-purple-700">To improve functionality, prevent abuse, and analyze performance.</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-800 mb-2">Legal Obligation</h3>
                  <p className="text-orange-700">To comply with tax, security, or data retention laws.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-lg font-bold mr-4">4</span>
              How We Share Information
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>We only share your information when necessary:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Service Providers:</strong> Stripe (payments), Supabase (database), DeepSeek AI (machine learning), Vercel (hosting), and other technical providers.</li>
                <li><strong>Affiliates:</strong> LitxTech LTD (UK) and authorized partners operating under this same policy.</li>
                <li><strong>Legal Requirements:</strong> When required by law or lawful authority.</li>
                <li><strong>Business Transfers:</strong> In case of a merger, acquisition, or reorganization.</li>
              </ul>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="font-semibold text-red-800">We do not sell personal information to third parties.</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-lg font-bold mr-4">5</span>
              Data Retention
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>We retain personal information only as long as necessary to provide our Services and meet legal obligations.</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-blue-800">When you delete your account, your data is permanently deleted or anonymized within <strong>30 days</strong>, except where retention is legally required.</p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-lg font-bold mr-4">6</span>
              Security
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>We use industry-standard encryption (TLS/SSL) and security controls to protect your data.</p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-yellow-800">However, no online system is entirely risk-free; users should maintain secure passwords and avoid sharing credentials.</p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-lg font-bold mr-4">7</span>
              Your Rights
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>Depending on your region, you have the right to:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Access, correct, or delete your personal data</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Withdraw consent for data processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Object to or restrict certain processing activities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Request data portability</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>File a complaint with your local data protection authority</span>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-blue-800">To exercise these rights, contact <a href="mailto:support@litxtech.com" className="text-blue-600 hover:text-blue-800 underline">support@litxtech.com</a>.</p>
                <p className="text-blue-700 mt-2">We may verify your identity before fulfilling requests.</p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-lg font-bold mr-4">8</span>
              Children's Privacy
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                <p className="text-orange-800">Our Services are not directed toward children under <strong>13 years old</strong> (or the applicable minimum age in your region).</p>
                <p className="text-orange-700 mt-2">If we learn we have collected data from a child without parental consent, we will delete it immediately.</p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-lg font-bold mr-4">9</span>
              International Data Transfers
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>Your information may be stored and processed in the United States, United Kingdom, or other jurisdictions where LitxTech or its partners operate.</p>
              <p>By using the Services, you consent to such transfers under applicable safeguards (e.g., GDPR Standard Contractual Clauses).</p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-lg font-bold mr-4">10</span>
              Cookies and Tracking
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>We use cookies to:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Authenticate sessions,</li>
                <li>Store preferences,</li>
                <li>Analyze usage.</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-yellow-800">You can disable cookies in your browser, but some features may not function correctly.</p>
              </div>
            </div>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-lg font-bold mr-4">11</span>
              Policy Updates
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <p>We may revise this Privacy Policy occasionally.</p>
              <p>The latest version will always be available at <a href="https://www.litxtech.com/privacy" className="text-blue-600 hover:text-blue-800 underline">www.litxtech.com/privacy</a>.</p>
              <p>Substantial changes will be announced via email or dashboard notification.</p>
            </div>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-lg font-bold mr-4">12</span>
              Contact Us
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">For privacy inquiries, access requests, or concerns:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-gray-900">LitxTech LLC</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">📍 Wyoming, United States</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <a href="tel:+13072715151" className="text-gray-700 hover:text-blue-600">+1 307 271 5151</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-indigo-600" />
                  <a href="mailto:support@litxtech.com" className="text-gray-700 hover:text-blue-600">support@litxtech.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Eye className="h-5 w-5 text-cyan-600" />
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