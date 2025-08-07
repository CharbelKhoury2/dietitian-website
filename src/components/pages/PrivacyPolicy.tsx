import React from 'react';
import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-ivory-200">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-sage-50 to-coral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-sage-500 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-charcoal-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-charcoal-600 leading-relaxed max-w-3xl mx-auto">
            Your privacy and the security of your personal health information is our top priority.
          </p>
          <p className="text-sm text-charcoal-500 mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm space-y-12">
            
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-sage-600" />
                Introduction
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Dr. Myriam ("we," "our," or "us") is committed to protecting your privacy and maintaining the confidentiality of your personal health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our nutrition services.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                As a registered dietitian, we are bound by HIPAA (Health Insurance Portability and Accountability Act) regulations and maintain the highest standards of confidentiality for all client information.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-sage-600" />
                Information We Collect
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-3">Personal Information</h3>
                  <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                    <li>Name, email address, phone number, and mailing address</li>
                    <li>Date of birth and demographic information</li>
                    <li>Emergency contact information</li>
                    <li>Insurance information (when applicable)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-3">Health Information</h3>
                  <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                    <li>Medical history and current health conditions</li>
                    <li>Medications and supplements</li>
                    <li>Dietary preferences, restrictions, and allergies</li>
                    <li>Laboratory results and health assessments</li>
                    <li>Progress notes and treatment plans</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-3">Website Usage Information</h3>
                  <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-sage-600" />
                How We Use Your Information
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-3">Treatment and Care</h3>
                  <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                    <li>Provide personalized nutrition counseling and meal planning</li>
                    <li>Monitor your progress and adjust treatment plans</li>
                    <li>Coordinate care with your healthcare providers</li>
                    <li>Maintain accurate health records</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-3">Communication</h3>
                  <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                    <li>Schedule appointments and send reminders</li>
                    <li>Respond to your questions and concerns</li>
                    <li>Send educational materials and newsletters (with consent)</li>
                    <li>Process payments and insurance claims</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-3">Legal and Administrative</h3>
                  <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Maintain business records and quality assurance</li>
                    <li>Protect against fraud and unauthorized access</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6">Information Sharing and Disclosure</h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
                <li><strong>Healthcare Providers:</strong> With your physicians or other healthcare providers involved in your care</li>
                <li><strong>Insurance Companies:</strong> For billing and claims processing (when applicable)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect health and safety</li>
                <li><strong>Business Associates:</strong> With HIPAA-compliant service providers who assist in our operations</li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6">Data Security</h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                We implement comprehensive security measures to protect your personal and health information:
              </p>
              <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                <li>Encrypted data transmission and storage</li>
                <li>Secure, password-protected systems</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to authorized personnel only</li>
                <li>HIPAA-compliant telehealth platforms</li>
                <li>Secure disposal of physical and electronic records</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6">Your Rights</h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Under HIPAA and applicable privacy laws, you have the right to:
              </p>
              <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                <li>Access and review your health information</li>
                <li>Request corrections to your health records</li>
                <li>Request restrictions on how your information is used</li>
                <li>Request confidential communications</li>
                <li>File a complaint about privacy practices</li>
                <li>Receive a copy of this Privacy Policy</li>
                <li>Revoke consent for certain uses (where applicable)</li>
              </ul>
            </div>

            {/* Cookies and Website */}
            <div>
              <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6">Website and Cookies</h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Our website uses cookies and similar technologies to improve your browsing experience. These may include:
              </p>
              <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand website usage</li>
                <li>Preference cookies to remember your settings</li>
              </ul>
              <p className="text-charcoal-600 leading-relaxed mt-4">
                You can control cookie settings through your browser preferences.
              </p>
            </div>

            {/* Updates */}
            <div>
              <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6">Policy Updates</h2>
              <p className="text-charcoal-600 leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-sage-50 rounded-xl p-6">
              <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6">Contact Us</h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-charcoal-600">
                  <Mail className="w-5 h-5 mr-3 text-sage-600" />
                  <span>myriam.nutritips@gmail.com</span>
                </div>
                <div className="flex items-center text-charcoal-600">
                  <Phone className="w-5 h-5 mr-3 text-sage-600" />
                  <span>+961 03 345 531</span>
                </div>
              </div>
              <p className="text-sm text-charcoal-500 mt-4">
                Privacy Officer: Dr. Myriam<br />
                Response time: We will respond to privacy requests within 30 days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
