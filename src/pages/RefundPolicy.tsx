import { RefreshCw, CreditCard, AlertTriangle, Clock, Shield, FileText, CheckCircle, XCircle } from 'lucide-react'

export function RefundPolicy() {
  return (
    <div className="min-h-screen relative">
      <div className="animated-bg"></div>
      <div className="bg-overlay"></div>
      <div className="particles"></div>

      <div className="max-w-4xl mx-auto px-4 py-20 relative z-10">
        <div className="glass-card p-8 mb-8">
          <div className="text-center mb-8">
            <RefreshCw className="w-16 h-16 mx-auto mb-4 text-green-400" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Refund & Cancellation Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Effective Date: October 27, 2025 | Last Updated: October 27, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-200">
            <div className="mb-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-400">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-green-400" />
                Company Information
              </h2>
              <p><strong>LitxTech LLC</strong> is a Wyoming Limited Liability Company registered in the State of Wyoming, United States.</p>
              <p><strong>Business Address:</strong> 15442 Ventura Blvd., STE 201-1834, Sherman Oaks, California 91403, USA</p>
              <p><strong>D-U-N-S® Number:</strong> 144849529</p>
              <p><strong>Contact:</strong> support@litxtech.com | +1 (307) 271-5151</p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <CreditCard className="w-6 h-6 mr-2 text-blue-400" />
                1. General Refund Policy
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1.1 Digital Services Nature</h3>
              <p>LitxTech LLC provides digital services including software development, web applications, and SaaS platforms. Due to the nature of these services:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Services are delivered electronically and cannot be "returned"</li>
                <li>Development work begins immediately upon project initiation</li>
                <li>Resources are allocated and costs incurred from project start</li>
                <li>Intellectual property and custom code are created specifically for each client</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1.2 Refund Eligibility</h3>
              <p>Refunds may be considered in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Technical Failure:</strong> Service cannot be delivered due to technical issues</li>
                <li><strong>Non-Performance:</strong> We fail to meet agreed-upon deliverables</li>
                <li><strong>Material Breach:</strong> We violate the terms of our service agreement</li>
                <li><strong>Duplicate Payment:</strong> Accidental duplicate charges</li>
                <li><strong>Fraudulent Transaction:</strong> Unauthorized use of payment method</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1.3 Non-Refundable Situations</h3>
              <p>Refunds will not be provided for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Change of mind or business requirements</li>
                <li>Dissatisfaction with design choices or aesthetic preferences</li>
                <li>Delays caused by client-provided content or feedback</li>
                <li>Third-party service limitations or restrictions</li>
                <li>Client's inability to use the delivered service</li>
                <li>Market conditions or business circumstances</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-purple-400" />
                2. Package-Specific Refund Policies
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.1 LITE Package ($1,199)</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                <p><strong>Refund Window:</strong> 7 days from payment date</p>
                <p><strong>Conditions:</strong></p>
                <ul className="list-disc pl-6 mb-2">
                  <li>No development work has commenced</li>
                  <li>No custom design or development has been initiated</li>
                  <li>Client has not provided project requirements or content</li>
                  <li>No third-party integrations have been started</li>
                </ul>
                <p><strong>Processing Time:</strong> 5-10 business days after approval</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.2 PRO Package ($2,359)</h3>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-4">
                <p><strong>Refund Window:</strong> 5 days from payment date</p>
                <p><strong>Conditions:</strong></p>
                <ul className="list-disc pl-6 mb-2">
                  <li>No custom dashboard development has begun</li>
                  <li>No API integrations have been implemented</li>
                  <li>No database setup or configuration has occurred</li>
                  <li>Client has not provided technical specifications</li>
                </ul>
                <p><strong>Processing Time:</strong> 7-14 business days after approval</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.3 ULTRA Package ($4,980)</h3>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-4">
                <p><strong>Refund Window:</strong> 3 days from payment date</p>
                <p><strong>Conditions:</strong></p>
                <ul className="list-disc pl-6 mb-2">
                  <li>No admin panel development has started</li>
                  <li>No payment integration work has commenced</li>
                  <li>No advanced features have been implemented</li>
                  <li>No dedicated resources have been allocated</li>
                </ul>
                <p><strong>Processing Time:</strong> 10-21 business days after approval</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-red-400" />
                3. Custom Development Projects
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.1 Project Initiation</h3>
              <p>Custom development projects are considered initiated when:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Project kickoff meeting has been conducted</li>
                <li>Technical specifications have been reviewed and approved</li>
                <li>Development team has been assigned</li>
                <li>Project timeline and milestones have been established</li>
                <li>Any preliminary design or architecture work has begun</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.2 Refund Policy for Custom Projects</h3>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
                <p><strong>No Refunds After Project Initiation</strong></p>
                <p>Once a custom development project has been initiated, no refunds will be provided regardless of:</p>
                <ul className="list-disc pl-6 mb-2">
                  <li>Project completion status</li>
                  <li>Client satisfaction with deliverables</li>
                  <li>Timeline delays or extensions</li>
                  <li>Scope changes or modifications</li>
                  <li>Technical challenges encountered</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.3 Partial Refunds</h3>
              <p>In exceptional circumstances, partial refunds may be considered for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Unused project hours (if hourly billing was agreed)</li>
                <li>Unused third-party service credits</li>
                <li>Unused hosting or infrastructure costs</li>
                <li>Unused design or development assets</li>
              </ul>
              <p><strong>Note:</strong> Partial refunds are subject to a 15% administrative fee and require detailed documentation.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <RefreshCw className="w-6 h-6 mr-2 text-indigo-400" />
                4. Subscription Services
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.1 AI Builder Subscriptions</h3>
              <p>For recurring subscription services (AI Builder, SaaS platforms):</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Cancellation:</strong> Can be cancelled at any time through your account dashboard</li>
                <li><strong>Effective Date:</strong> Cancellation takes effect at the end of the current billing period</li>
                <li><strong>Access:</strong> Service access continues until the end of the paid period</li>
                <li><strong>Data:</strong> Data export options available for 30 days after cancellation</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.2 Subscription Refunds</h3>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg mb-4">
                <p><strong>Refund Eligibility:</strong></p>
                <ul className="list-disc pl-6 mb-2">
                  <li>Refunds only for unused portions of the current billing period</li>
                  <li>Must be requested within 7 days of the billing date</li>
                  <li>No refunds for previous billing periods</li>
                  <li>Refunds processed within 5-10 business days</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.3 Annual Subscriptions</h3>
              <p>For annual subscriptions:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Early Cancellation:</strong> Pro-rated refund based on unused months</li>
                <li><strong>Administrative Fee:</strong> 5% fee for early cancellation</li>
                <li><strong>Minimum Refund:</strong> No refunds for subscriptions with less than 3 months remaining</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-orange-400" />
                5. Payment Disputes and Chargebacks
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.1 Dispute Resolution Process</h3>
              <p>If you have concerns about a charge or service, please follow this process:</p>
              <ol className="list-decimal pl-6 mb-4">
                <li><strong>Contact Support:</strong> Email support@litxtech.com within 30 days</li>
                <li><strong>Provide Details:</strong> Include transaction ID, service details, and reason for dispute</li>
                <li><strong>Investigation:</strong> We will investigate and respond within 5 business days</li>
                <li><strong>Resolution:</strong> We will work with you to resolve the issue amicably</li>
                <li><strong>Escalation:</strong> If unresolved, we may involve payment processor mediation</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.2 Chargeback Policy</h3>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg mb-4">
                <p><strong>Important:</strong> Initiating a chargeback without first contacting us may result in:</p>
                <ul className="list-disc pl-6 mb-2">
                  <li>Immediate service suspension</li>
                  <li>Account termination</li>
                  <li>Collection of additional fees</li>
                  <li>Legal action for fraudulent chargebacks</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.3 Fraud Prevention</h3>
              <p>We reserve the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Investigate suspicious payment activities</li>
                <li>Request additional verification for large transactions</li>
                <li>Suspend accounts pending investigation</li>
                <li>Report fraudulent activities to relevant authorities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2 text-green-400" />
                6. Refund Processing
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.1 Refund Request Process</h3>
              <p>To request a refund:</p>
              <ol className="list-decimal pl-6 mb-4">
                <li><strong>Submit Request:</strong> Email refunds@litxtech.com with detailed information</li>
                <li><strong>Required Information:</strong>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Transaction ID or invoice number</li>
                    <li>Service package or subscription details</li>
                    <li>Reason for refund request</li>
                    <li>Supporting documentation (if applicable)</li>
                  </ul>
                </li>
                <li><strong>Review Period:</strong> 5-10 business days for evaluation</li>
                <li><strong>Decision Notification:</strong> Email notification of approval or denial</li>
                <li><strong>Processing:</strong> Approved refunds processed within specified timeframe</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.2 Refund Methods</h3>
              <p>Refunds will be processed using the original payment method:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Credit/Debit Cards:</strong> Refunded to original card (5-10 business days)</li>
                <li><strong>Bank Transfers:</strong> Refunded to original account (7-14 business days)</li>
                <li><strong>PayPal:</strong> Refunded to PayPal account (3-5 business days)</li>
                <li><strong>Cryptocurrency:</strong> Refunded to original wallet (1-3 business days)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.3 Refund Fees</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
                <p><strong>Administrative Fees:</strong></p>
                <ul className="list-disc pl-6 mb-2">
                  <li>Processing fee: $25 per refund request</li>
                  <li>International transfer fee: $15 (if applicable)</li>
                  <li>Currency conversion fee: 2% (if applicable)</li>
                  <li>Chargeback fee: $50 (if chargeback is initiated)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <XCircle className="w-6 h-6 mr-2 text-red-400" />
                7. Exceptions and Special Circumstances
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.1 Force Majeure Events</h3>
              <p>In cases of force majeure events (natural disasters, war, government actions), refund policies may be modified to address extraordinary circumstances.</p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.2 Technical Failures</h3>
              <p>If services cannot be delivered due to technical failures on our part:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Full refunds will be provided</li>
                <li>Alternative solutions will be offered</li>
                <li>Service credits may be provided for future use</li>
                <li>Compensation for documented losses may be considered</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.3 Regulatory Compliance</h3>
              <p>Refund policies may be modified to comply with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Wyoming state consumer protection laws</li>
                <li>Federal Trade Commission regulations</li>
                <li>Payment card industry standards</li>
                <li>International consumer protection laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                8. Contact Information and Support
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">8.1 Refund Inquiries</h3>
              <p>For refund-related questions or requests:</p>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-4">
                <p><strong>Email:</strong> refunds@litxtech.com</p>
                <p><strong>Phone:</strong> +1 (307) 271-5151</p>
                <p><strong>Business Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM PST</p>
                <p><strong>Response Time:</strong> Within 24 hours during business days</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">8.2 General Support</h3>
              <p>For general service questions:</p>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-4">
                <p><strong>Email:</strong> support@litxtech.com</p>
                <p><strong>Live Chat:</strong> Available on our website</p>
                <p><strong>Documentation:</strong> Comprehensive guides and FAQs</p>
                <p><strong>Community:</strong> User forums and knowledge base</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">8.3 Legal Inquiries</h3>
              <p>For legal matters related to refunds:</p>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-4">
                <p><strong>Email:</strong> legal@litxtech.com</p>
                <p><strong>Address:</strong> LitxTech LLC, 15442 Ventura Blvd., STE 201-1834, Sherman Oaks, CA 91403</p>
                <p><strong>D-U-N-S®:</strong> 144849529</p>
              </div>
            </section>

            <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-400">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Legal Notice:</strong> This Refund & Cancellation Policy complies with Wyoming state law, 
                the Uniform Commercial Code (UCC), and applicable federal consumer protection regulations. 
                For specific legal advice regarding refunds, please consult with a qualified attorney.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}