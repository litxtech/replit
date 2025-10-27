import { Scale, FileText, Shield, AlertTriangle, Users, CreditCard, Gavel, Globe } from 'lucide-react'

export function TermsOfService() {
  return (
    <div className="min-h-screen relative">
      <div className="animated-bg"></div>
      <div className="bg-overlay"></div>
      <div className="particles"></div>

      <div className="max-w-4xl mx-auto px-4 py-20 relative z-10">
        <div className="glass-card p-8 mb-8">
          <div className="text-center mb-8">
            <Scale className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Effective Date: October 27, 2025 | Last Updated: October 27, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-200">
            <div className="mb-8 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-400">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-purple-400" />
                Company Information
              </h2>
              <p><strong>LitxTech LLC</strong> is a Wyoming Limited Liability Company registered in the State of Wyoming, United States.</p>
              <p><strong>Business Address:</strong> 15442 Ventura Blvd., STE 201-1834, Sherman Oaks, California 91403, USA</p>
              <p><strong>D-U-N-S® Number:</strong> 144849529</p>
              <p><strong>Contact:</strong> support@litxtech.com | +1 (307) 271-5151</p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-blue-400" />
                1. Agreement Overview
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1.1 Acceptance of Terms</h3>
              <p>These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "Customer," or "you") and LitxTech LLC ("Company," "we," "us," or "our"). By accessing or using our website, services, or software, you acknowledge that you have read, understood, and agree to be bound by these Terms.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1.2 Services Covered</h3>
              <p>These Terms apply to all services provided by LitxTech LLC, including but not limited to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Software development and web application services</li>
                <li>AI Builder platform and no-code/low-code development tools</li>
                <li>SaaS platform hosting and management</li>
                <li>Consulting and technical support services</li>
                <li>Custom software packages (LITE, PRO, ULTRA)</li>
                <li>Third-party integrations and API services</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1.3 Modifications</h3>
              <p>We reserve the right to modify these Terms at any time. Material changes will be communicated through:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Email notification to registered users</li>
                <li>Prominent notice on our website</li>
                <li>In-app notifications for active users</li>
              </ul>
              <p>Continued use of our services after changes constitutes acceptance of the modified Terms.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-green-400" />
                2. User Eligibility and Account Responsibilities
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.1 Eligibility Requirements</h3>
              <p>To use our services, you must:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Be at least 18 years of age or the age of majority in your jurisdiction</li>
                <li>Have the legal capacity to enter into binding agreements</li>
                <li>Provide accurate and complete registration information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not be prohibited from receiving our services under applicable law</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.2 Account Registration</h3>
              <p>When creating an account, you agree to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information to keep it accurate</li>
                <li>Use only one account per person or entity</li>
                <li>Not share your account credentials with others</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.3 Account Security</h3>
              <p>You are responsible for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Maintaining the confidentiality of your login credentials</li>
                <li>All activities that occur under your account</li>
                <li>Implementing appropriate security measures for your data</li>
                <li>Regularly updating passwords and security settings</li>
                <li>Reporting security incidents promptly</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <CreditCard className="w-6 h-6 mr-2 text-yellow-400" />
                3. Payment Terms and Billing
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.1 Payment Processing</h3>
              <p>All payments are processed securely through Stripe, our PCI-compliant payment processor. By making a payment, you authorize us to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Charge your payment method for the agreed-upon amount</li>
                <li>Process recurring payments for subscription services</li>
                <li>Apply applicable taxes and fees</li>
                <li>Handle refunds according to our Refund Policy</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.2 Pricing and Fees</h3>
              <p>Our pricing structure includes:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>LITE Package:</strong> $1,199 per project (one-time payment)</li>
                <li><strong>PRO Package:</strong> $2,359 per project (one-time payment)</li>
                <li><strong>ULTRA Package:</strong> $4,980 per project (one-time payment)</li>
                <li><strong>AI Builder Subscriptions:</strong> Monthly/annual recurring billing</li>
                <li><strong>Custom Development:</strong> Hourly rates or project-based pricing</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.3 Payment Terms</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Payment is due upon project initiation or subscription activation</li>
                <li>Late payments may result in service suspension</li>
                <li>All prices are in USD unless otherwise specified</li>
                <li>Taxes are calculated based on your location and applicable laws</li>
                <li>Payment disputes must be reported within 30 days</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.4 Refunds and Cancellations</h3>
              <p>Refund policies are detailed in our separate Refund & Cancellation Policy. Generally:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Digital services are non-refundable once development begins</li>
                <li>Subscription cancellations take effect at the end of the billing period</li>
                <li>Refunds may be issued for technical failures or non-performance</li>
                <li>All refund requests must be submitted through our support system</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Gavel className="w-6 h-6 mr-2 text-red-400" />
                4. Intellectual Property Rights
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.1 Company Intellectual Property</h3>
              <p>All content, software, and materials provided by LitxTech LLC are protected by intellectual property laws. This includes:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Website design, layout, and user interface</li>
                <li>AI Builder platform and associated tools</li>
                <li>Proprietary algorithms and code libraries</li>
                <li>Documentation, tutorials, and educational content</li>
                <li>Trademarks, logos, and branding materials</li>
                <li>Trade secrets and confidential information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.2 User-Generated Content</h3>
              <p>When you use our services, you retain ownership of your content but grant us necessary licenses to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Process and store your content on our platforms</li>
                <li>Provide technical support and maintenance</li>
                <li>Generate derivative works for your projects</li>
                <li>Backup and restore your data</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.3 Custom Development Projects</h3>
              <p>For custom development projects, intellectual property ownership depends on the agreement:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Work-for-Hire:</strong> Client owns the final deliverable</li>
                <li><strong>Licensed Components:</strong> We retain rights to reusable components</li>
                <li><strong>Third-Party Libraries:</strong> Subject to respective open-source licenses</li>
                <li><strong>Proprietary Tools:</strong> We retain rights to development tools and frameworks</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.4 Prohibited Uses</h3>
              <p>You may not:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Reverse engineer, decompile, or disassemble our software</li>
                <li>Copy, modify, or distribute our proprietary code</li>
                <li>Use our services to create competing products</li>
                <li>Remove or alter copyright notices or proprietary markings</li>
                <li>Infringe on third-party intellectual property rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-orange-400" />
                5. Acceptable Use Policy
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.1 Permitted Uses</h3>
              <p>Our services may be used for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Legitimate business and commercial purposes</li>
                <li>Educational and research activities</li>
                <li>Personal projects and portfolio development</li>
                <li>Non-profit and charitable organizations</li>
                <li>Government and public sector applications</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.2 Prohibited Activities</h3>
              <p>You may not use our services to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Distribute malware, viruses, or harmful code</li>
                <li>Engage in fraudulent or deceptive practices</li>
                <li>Harass, threaten, or harm others</li>
                <li>Spam or send unsolicited communications</li>
                <li>Access systems without authorization</li>
                <li>Circumvent security measures or access controls</li>
                <li>Create content that promotes violence, hate, or discrimination</li>
                <li>Violate privacy rights or collect personal data unlawfully</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.3 Content Standards</h3>
              <p>All content created using our services must:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Comply with applicable laws and regulations</li>
                <li>Respect intellectual property rights</li>
                <li>Not contain illegal, harmful, or offensive material</li>
                <li>Be appropriate for the intended audience</li>
                <li>Not violate platform-specific terms of service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                6. Service Availability and Modifications
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.1 Service Level Commitment</h3>
              <p>We strive to maintain high service availability but cannot guarantee uninterrupted access. Service availability may be affected by:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Scheduled maintenance windows</li>
                <li>Emergency repairs and updates</li>
                <li>Third-party service outages</li>
                <li>Network connectivity issues</li>
                <li>Force majeure events</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.2 Service Modifications</h3>
              <p>We reserve the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Modify, update, or discontinue features</li>
                <li>Change service specifications and capabilities</li>
                <li>Implement new security measures</li>
                <li>Update software and infrastructure</li>
                <li>Adjust pricing and billing terms</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.3 Data Backup and Recovery</h3>
              <p>While we implement regular backup procedures, you are responsible for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Maintaining your own data backups</li>
                <li>Ensuring data integrity and security</li>
                <li>Testing backup and recovery procedures</li>
                <li>Implementing appropriate disaster recovery plans</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                7. Limitation of Liability and Disclaimers
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.1 Service Disclaimers</h3>
              <p>Our services are provided "as is" and "as available" without warranties of any kind. We disclaim all warranties, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Merchantability and fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
                <li>Uninterrupted or error-free operation</li>
                <li>Security against unauthorized access</li>
                <li>Compatibility with all systems and software</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.2 Limitation of Liability</h3>
              <p>To the maximum extent permitted by law, LitxTech LLC shall not be liable for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Data loss or corruption</li>
                <li>Third-party actions or content</li>
                <li>System downtime or service interruptions</li>
                <li>Damages exceeding the amount paid for services in the 12 months preceding the claim</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.3 Indemnification</h3>
              <p>You agree to indemnify and hold harmless LitxTech LLC from claims arising from:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of applicable laws</li>
                <li>Your infringement of third-party rights</li>
                <li>Content you create or distribute</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                8. Termination and Suspension
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">8.1 Termination by User</h3>
              <p>You may terminate your account at any time by:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Contacting our support team</li>
                <li>Using account deletion features in your dashboard</li>
                <li>Providing written notice of termination</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">8.2 Termination by Company</h3>
              <p>We may terminate or suspend your account for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Violation of these Terms</li>
                <li>Non-payment of fees</li>
                <li>Fraudulent or illegal activity</li>
                <li>Abuse of our services or systems</li>
                <li>Threats to other users or our staff</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">8.3 Effect of Termination</h3>
              <p>Upon termination:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your access to services will be revoked</li>
                <li>Outstanding payments remain due</li>
                <li>Data retention policies apply</li>
                <li>Provisions that survive termination remain in effect</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2 text-indigo-400" />
                9. Governing Law and Dispute Resolution
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">9.1 Governing Law</h3>
              <p>These Terms are governed by the laws of the State of Wyoming, United States, without regard to conflict of law principles.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">9.2 Jurisdiction</h3>
              <p>Any legal disputes shall be resolved exclusively in the state or federal courts located in Wyoming, and you consent to the personal jurisdiction of such courts.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">9.3 Dispute Resolution Process</h3>
              <p>Before initiating legal proceedings, parties agree to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Attempt good faith negotiations for 30 days</li>
                <li>Consider mediation through a mutually agreed mediator</li>
                <li>Document all communications and attempts at resolution</li>
                <li>Preserve relevant evidence and documentation</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">9.4 Class Action Waiver</h3>
              <p>You agree that any disputes will be resolved individually and waive the right to participate in class action lawsuits or class-wide arbitration.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                10. Miscellaneous Provisions
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">10.1 Entire Agreement</h3>
              <p>These Terms, together with our Privacy Policy and Refund Policy, constitute the entire agreement between you and LitxTech LLC.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">10.2 Severability</h3>
              <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">10.3 Force Majeure</h3>
              <p>We shall not be liable for delays or failures due to circumstances beyond our reasonable control, including natural disasters, war, terrorism, or government actions.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">10.4 Assignment</h3>
              <p>You may not assign these Terms without our written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">10.5 Contact Information</h3>
              <p>For questions about these Terms, contact us:</p>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <p><strong>LitxTech LLC</strong></p>
                <p>15442 Ventura Blvd., STE 201-1834</p>
                <p>Sherman Oaks, California 91403, USA</p>
                <p><strong>Email:</strong> legal@litxtech.com</p>
                <p><strong>Phone:</strong> +1 (307) 271-5151</p>
                <p><strong>D-U-N-S®:</strong> 144849529</p>
              </div>
            </section>

            <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-400">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Legal Notice:</strong> These Terms of Service comply with Wyoming state law, 
                the Uniform Commercial Code (UCC), and applicable federal regulations. 
                For specific legal advice regarding these terms, please consult with a qualified attorney.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}