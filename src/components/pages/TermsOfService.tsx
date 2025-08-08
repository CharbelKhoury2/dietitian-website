import React from 'react';
import { Scale, FileText, AlertTriangle, Clock, CreditCard, Shield } from 'lucide-react';

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-ivory-200">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-sage-50 to-coral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-sage-500 rounded-full flex items-center justify-center">
              <Scale className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-charcoal-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-charcoal-600 leading-relaxed max-w-3xl mx-auto">
            Please read these terms carefully before using our nutrition services.
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
                Agreement to Terms
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of nutrition services provided by Dr. Myriam ("we," "our," or "us"). By scheduling an appointment or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                If you do not agree to these Terms, please do not use our services. We reserve the right to modify these Terms at any time, and your continued use of our services constitutes acceptance of any changes.
              </p>
            </div>

            {/* Services Description */}
            <div>
              <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6">Services Provided</h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Dr. Myriam provides registered dietitian services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-charcoal-600 space-y-2 mb-4">
                <li>Nutritional assessments and consultations</li>
                <li>Personalized meal planning and dietary guidance</li>
                <li>Medical nutrition therapy</li>
                <li>Weight management counseling</li>
                <li>Sports nutrition guidance</li>
                <li>Pediatric nutrition counseling</li>
                <li>Educational resources and materials</li>
              </ul>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-2">Important Notice</h3>
                    <p className="text-amber-700 text-sm">
                      Our services are for educational and informational purposes. They do not replace medical advice, diagnosis, or treatment. Always consult with your physician before making significant dietary changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Relationship */}
            <div>
              <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6">Professional Relationship</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-3">Scope of Practice</h3>
                  <p className="text-charcoal-600 leading-relaxed">
                    As a registered dietitian, Dr. Myriam operates within the scope of practice defined by the Commission on Dietetic Registration and applicable state regulations. Services provided are evidence-based and follow established nutrition science principles.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-3">Client Responsibilities</h3>
                  <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                    <li>Provide accurate and complete health information</li>
                    <li>Follow agreed-upon treatment plans and recommendations</li>
                    <li>Communicate any changes in health status or medications</li>
                    <li>Attend scheduled appointments or provide adequate notice of cancellation</li>
                    <li>Ask questions when clarification is needed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Appointment Policies */}
            <div>
              <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-sage-600" />
                Appointment Policies
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-3">Scheduling</h3>
                  <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                    <li>Appointments can be scheduled online, by phone, or email</li>
                    <li>We will confirm all appointments 24-48 hours in advance</li>
                    <li>Virtual and in-person appointments are available</li>
                    <li>Same-day appointments may be available based on schedule</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-3">Cancellation Policy</h3>
                  <div className="bg-coral-50 border border-coral-200 rounded-lg p-4">
                    <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                      <li><strong>24-Hour Notice Required:</strong> Cancellations must be made at least 24 hours before your scheduled appointment</li>
                      <li><strong>Late Cancellation Fee:</strong> Cancellations with less than 24 hours notice may incur a $50 fee</li>
                      <li><strong>No-Show Policy:</strong> Failure to attend without notice will result in the full session fee</li>
                      <li><strong>Emergency Exceptions:</strong> Medical emergencies and urgent situations are handled case-by-case</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-3">Rescheduling</h3>
                  <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                    <li>Appointments can be rescheduled with adequate notice</li>
                    <li>We will make every effort to accommodate your preferred times</li>
                    <li>Frequent rescheduling may affect service availability</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6 flex items-center">
                <CreditCard className="w-6 h-6 mr-3 text-sage-600" />
                Payment Terms
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-3">Fees and Payment</h3>
                  <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                    <li>Payment is due at the time of service unless other arrangements are made</li>
                    <li>We accept cash, credit cards, and electronic payments</li>
                    <li>Package deals and payment plans may be available</li>
                    <li>Prices are subject to change with 30 days notice</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-3">Insurance</h3>
                  <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                    <li>We accept most major insurance plans for Medical Nutrition Therapy</li>
                    <li>Insurance coverage requires a physician referral</li>
                    <li>Clients are responsible for verifying coverage and benefits</li>
                    <li>Superbills can be provided for reimbursement purposes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-3">Refund Policy</h3>
                  <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                    <li>Refunds are considered on a case-by-case basis</li>
                    <li>Package refunds are prorated based on services used</li>
                    <li>Digital materials and completed sessions are non-refundable</li>
                    <li>Refund requests must be made within 30 days</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Confidentiality */}
            <div>
              <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-sage-600" />
                Confidentiality and Privacy
              </h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                We are committed to maintaining the confidentiality of your personal health information in accordance with HIPAA regulations and professional ethics standards.
              </p>
              <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                <li>All client information is kept strictly confidential</li>
                <li>Information is only shared with your explicit consent or as required by law</li>
                <li>Secure systems are used for all communications and record keeping</li>
                <li>Staff members are trained in privacy protection protocols</li>
              </ul>
            </div>

            {/* Limitations and Disclaimers */}
            <div>
              <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6">Limitations and Disclaimers</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-3">Service Limitations</h3>
                  <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                    <li>Results may vary based on individual circumstances and adherence</li>
                    <li>We cannot guarantee specific health outcomes or weight loss results</li>
                    <li>Services are not intended to diagnose, treat, or cure medical conditions</li>
                    <li>Emergency nutrition needs should be addressed through appropriate medical channels</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-3">Liability</h3>
                  <p className="text-charcoal-600 leading-relaxed">
                    Our liability is limited to the fees paid for services. We are not responsible for indirect, incidental, or consequential damages. Clients assume responsibility for implementing recommendations and monitoring their health status.
                  </p>
                </div>
              </div>
            </div>

            {/* Technology and Communications */}
            <div>
              <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6">Technology and Communications</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-3">Telehealth Services</h3>
                  <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                    <li>Virtual consultations are conducted through secure, HIPAA-compliant platforms</li>
                    <li>Clients are responsible for ensuring stable internet connection</li>
                    <li>Technical difficulties may require rescheduling without penalty</li>
                    <li>Recording of sessions is prohibited without explicit consent</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-800 mb-3">Electronic Communications</h3>
                  <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                    <li>Email and text communications are for non-urgent matters only</li>
                    <li>Response time for non-urgent communications is 24-48 hours</li>
                    <li>Urgent health concerns should be directed to appropriate medical providers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6">Termination of Services</h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                Either party may terminate the professional relationship with appropriate notice:
              </p>
              <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                <li>Clients may discontinue services at any time</li>
                <li>We may terminate services for non-payment, non-compliance, or inappropriate behavior</li>
                <li>Reasonable notice will be provided when possible</li>
                <li>Referrals to other qualified professionals will be offered when appropriate</li>
                <li>Client records will be maintained according to legal requirements</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6">Governing Law</h2>
              <p className="text-charcoal-600 leading-relaxed">
                These Terms are governed by the laws of Lebanon and applicable international regulations. Any disputes will be resolved through appropriate legal channels. If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-sage-50 rounded-xl p-6">
              <h2 className="text-2xl font-poppins font-bold text-charcoal-900 mb-6">Questions About These Terms</h2>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-charcoal-600">
                  <span className="font-medium">Email:</span>
                  <span className="ml-2">myriam.nutritips@gmail.com</span>
                </div>
                <div className="flex items-center text-charcoal-600">
                  <span className="font-medium">Phone:</span>
                  <span className="ml-2">+961 03 345 531</span>
                </div>
              </div>
              <p className="text-sm text-charcoal-500 mt-4">
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}