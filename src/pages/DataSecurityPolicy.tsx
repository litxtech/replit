import { Shield, Lock, Database, Eye, AlertTriangle, CheckCircle, Globe, Server } from 'lucide-react'

export function DataSecurityPolicy() {
  return (
    <div className="min-h-screen relative">
      <div className="animated-bg"></div>
      <div className="bg-overlay"></div>
      <div className="particles"></div>

      <div className="max-w-4xl mx-auto px-4 py-20 relative z-10">
        <div className="glass-card p-8 mb-8">
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Data Security Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Effective Date: October 27, 2025 | Last Updated: October 27, 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-200">
            <div className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-400">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Database className="w-6 h-6 mr-2 text-blue-400" />
                Company Information
              </h2>
              <p><strong>LitxTech LLC</strong> is a Wyoming Limited Liability Company registered in the State of Wyoming, United States.</p>
              <p><strong>Business Address:</strong> 15442 Ventura Blvd., STE 201-1834, Sherman Oaks, California 91403, USA</p>
              <p><strong>D-U-N-S® Number:</strong> 144849529</p>
              <p><strong>Contact:</strong> security@litxtech.com | +1 (307) 271-5151</p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-green-400" />
                1. Security Framework Overview
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1.1 Security Philosophy</h3>
              <p>LitxTech LLC is committed to maintaining the highest standards of data security and privacy protection. Our security framework is built on the principles of:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Defense in Depth:</strong> Multiple layers of security controls</li>
                <li><strong>Zero Trust Architecture:</strong> Never trust, always verify</li>
                <li><strong>Least Privilege Access:</strong> Minimal necessary permissions</li>
                <li><strong>Continuous Monitoring:</strong> Real-time threat detection</li>
                <li><strong>Incident Response:</strong> Rapid response to security events</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1.2 Compliance Standards</h3>
              <p>Our security practices align with industry standards and regulations:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>SOC 2 Type II:</strong> Security, availability, and confidentiality controls</li>
                <li><strong>ISO 27001:</strong> Information security management systems</li>
                <li><strong>PCI DSS:</strong> Payment card industry data security standards</li>
                <li><strong>GDPR:</strong> General Data Protection Regulation compliance</li>
                <li><strong>CCPA:</strong> California Consumer Privacy Act compliance</li>
                <li><strong>HIPAA:</strong> Health Insurance Portability and Accountability Act</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Server className="w-6 h-6 mr-2 text-purple-400" />
                2. Infrastructure Security
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.1 Cloud Infrastructure</h3>
              <p>We utilize enterprise-grade cloud infrastructure with the following security features:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>AWS/Supabase:</strong> Industry-leading cloud security controls</li>
                <li><strong>Vercel:</strong> Secure hosting with global CDN</li>
                <li><strong>Multi-Region Deployment:</strong> Geographic redundancy and failover</li>
                <li><strong>Automated Scaling:</strong> Dynamic resource allocation</li>
                <li><strong>DDoS Protection:</strong> Advanced threat mitigation</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.2 Network Security</h3>
              <p>Our network security measures include:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Firewalls:</strong> Next-generation firewall protection</li>
                <li><strong>Intrusion Detection:</strong> Real-time threat monitoring</li>
                <li><strong>VPN Access:</strong> Secure remote access for employees</li>
                <li><strong>Network Segmentation:</strong> Isolated network zones</li>
                <li><strong>Traffic Analysis:</strong> Behavioral anomaly detection</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.3 Data Centers</h3>
              <p>Our data centers maintain the highest security standards:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Physical Security:</strong> 24/7 monitoring and access controls</li>
                <li><strong>Environmental Controls:</strong> Climate and power redundancy</li>
                <li><strong>Biometric Access:</strong> Multi-factor physical authentication</li>
                <li><strong>Video Surveillance:</strong> Comprehensive monitoring systems</li>
                <li><strong>Security Personnel:</strong> Trained security staff</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-2 text-red-400" />
                3. Data Protection Measures
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.1 Encryption Standards</h3>
              <p>All data is protected using industry-standard encryption:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>In Transit:</strong> TLS 1.3 encryption for all communications</li>
                <li><strong>At Rest:</strong> AES-256 encryption for stored data</li>
                <li><strong>Database:</strong> Encrypted database connections and storage</li>
                <li><strong>Backups:</strong> Encrypted backup storage and transmission</li>
                <li><strong>Key Management:</strong> Hardware security module (HSM) key storage</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.2 Access Controls</h3>
              <p>We implement comprehensive access control measures:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Multi-Factor Authentication:</strong> Required for all system access</li>
                <li><strong>Role-Based Access:</strong> Granular permission management</li>
                <li><strong>Privileged Access Management:</strong> Elevated access controls</li>
                <li><strong>Session Management:</strong> Automatic session timeout and monitoring</li>
                <li><strong>Access Reviews:</strong> Regular access permission audits</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3.3 Data Classification</h3>
              <p>Data is classified and protected according to sensitivity levels:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Public:</strong> Marketing materials, public documentation</li>
                <li><strong>Internal:</strong> Business processes, internal communications</li>
                <li><strong>Confidential:</strong> Client data, business strategies</li>
                <li><strong>Restricted:</strong> Personal information, financial data</li>
                <li><strong>Top Secret:</strong> Encryption keys, security credentials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2 text-green-400" />
                4. Security Monitoring and Incident Response
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.1 Continuous Monitoring</h3>
              <p>We maintain 24/7 security monitoring through:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Security Information and Event Management (SIEM):</strong> Centralized log analysis</li>
                <li><strong>Endpoint Detection and Response (EDR):</strong> Device-level monitoring</li>
                <li><strong>Network Traffic Analysis:</strong> Real-time network monitoring</li>
                <li><strong>Vulnerability Scanning:</strong> Regular security assessments</li>
                <li><strong>Threat Intelligence:</strong> External threat feed integration</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.2 Incident Response Plan</h3>
              <p>Our incident response process includes:</p>
              <ol className="list-decimal pl-6 mb-4">
                <li><strong>Detection:</strong> Automated and manual threat detection</li>
                <li><strong>Analysis:</strong> Rapid threat assessment and classification</li>
                <li><strong>Containment:</strong> Immediate threat isolation and mitigation</li>
                <li><strong>Eradication:</strong> Complete threat removal and system cleanup</li>
                <li><strong>Recovery:</strong> System restoration and service resumption</li>
                <li><strong>Lessons Learned:</strong> Post-incident analysis and improvement</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4.3 Breach Notification</h3>
              <p>In the event of a data breach, we will:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Immediate Response:</strong> Contain the breach within 1 hour</li>
                <li><strong>Assessment:</strong> Determine scope and impact within 24 hours</li>
                <li><strong>Notification:</strong> Notify affected users within 72 hours</li>
                <li><strong>Regulatory Reporting:</strong> Comply with applicable reporting requirements</li>
                <li><strong>Remediation:</strong> Implement corrective measures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-yellow-400" />
                5. Employee Security and Training
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.1 Background Checks</h3>
              <p>All employees undergo comprehensive background verification:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Criminal History:</strong> Federal and state background checks</li>
                <li><strong>Employment Verification:</strong> Previous employment verification</li>
                <li><strong>Education Verification:</strong> Academic credential verification</li>
                <li><strong>Reference Checks:</strong> Professional reference verification</li>
                <li><strong>Security Clearance:</strong> Additional clearance for sensitive roles</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.2 Security Training</h3>
              <p>Regular security training programs include:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Onboarding Training:</strong> Initial security awareness training</li>
                <li><strong>Annual Refresher:</strong> Yearly security training updates</li>
                <li><strong>Phishing Simulations:</strong> Regular phishing awareness tests</li>
                <li><strong>Incident Response Training:</strong> Response procedure training</li>
                <li><strong>Role-Specific Training:</strong> Specialized training for technical roles</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.3 Code of Conduct</h3>
              <p>All employees must adhere to our security code of conduct:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Confidentiality:</strong> Strict confidentiality obligations</li>
                <li><strong>Data Handling:</strong> Proper data handling procedures</li>
                <li><strong>Reporting:</strong> Mandatory security incident reporting</li>
                <li><strong>Compliance:</strong> Adherence to security policies</li>
                <li><strong>Consequences:</strong> Disciplinary action for policy violations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2 text-indigo-400" />
                6. Third-Party Security
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.1 Vendor Security Assessment</h3>
              <p>All third-party vendors undergo rigorous security evaluation:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Security Questionnaires:</strong> Comprehensive security assessments</li>
                <li><strong>Compliance Verification:</strong> Certification and compliance validation</li>
                <li><strong>Penetration Testing:</strong> Third-party security testing</li>
                <li><strong>Contract Requirements:</strong> Security obligations in contracts</li>
                <li><strong>Ongoing Monitoring:</strong> Continuous vendor security monitoring</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6.2 Key Service Providers</h3>
              <p>Our primary service providers maintain high security standards:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Supabase:</strong> SOC 2 Type II certified, GDPR compliant</li>
                <li><strong>Stripe:</strong> PCI DSS Level 1 certified</li>
                <li><strong>Vercel:</strong> SOC 2 Type II certified</li>
                <li><strong>Google Cloud:</strong> ISO 27001, SOC 2, PCI DSS certified</li>
                <li><strong>AWS:</strong> Multiple compliance certifications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                7. Security Audits and Compliance
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.1 Regular Audits</h3>
              <p>We conduct regular security audits and assessments:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Internal Audits:</strong> Quarterly internal security reviews</li>
                <li><strong>External Audits:</strong> Annual third-party security audits</li>
                <li><strong>Penetration Testing:</strong> Bi-annual penetration testing</li>
                <li><strong>Vulnerability Assessments:</strong> Monthly vulnerability scans</li>
                <li><strong>Compliance Reviews:</strong> Annual compliance assessments</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7.2 Certifications</h3>
              <p>We maintain the following security certifications:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>SOC 2 Type II:</strong> Security, availability, and confidentiality</li>
                <li><strong>ISO 27001:</strong> Information security management</li>
                <li><strong>PCI DSS:</strong> Payment card industry compliance</li>
                <li><strong>GDPR Compliance:</strong> European data protection compliance</li>
                <li><strong>CCPA Compliance:</strong> California privacy law compliance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                8. Contact Information
              </h2>
              
              <p>For security-related inquiries or to report security concerns:</p>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <p><strong>Security Team:</strong> security@litxtech.com</p>
                <p><strong>Emergency Hotline:</strong> +1 (307) 271-5151</p>
                <p><strong>Business Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM PST</p>
                <p><strong>Emergency Response:</strong> 24/7 for critical security incidents</p>
                <p><strong>Address:</strong> LitxTech LLC, 15442 Ventura Blvd., STE 201-1834, Sherman Oaks, CA 91403</p>
                <p><strong>D-U-N-S®:</strong> 144849529</p>
              </div>
            </section>

            <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-400">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                <strong>Legal Notice:</strong> This Data Security Policy complies with Wyoming state law, 
                federal cybersecurity regulations, and international security standards. 
                For specific legal advice regarding data security, please consult with a qualified attorney.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
