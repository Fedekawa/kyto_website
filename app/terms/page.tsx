"use client"

import { motion } from "framer-motion"
import { Footer } from "@/components/layout/footer"

export default function TermsPage() {
  return (
    <>
      <main className="min-h-screen pt-24 bg-white">
        <div className="container mx-auto px-4 py-12">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h1 className="text-4xl font-bold text-primary mb-2">Kyto Terms and Conditions</h1>
              <p className="text-primary/70 mb-8">Effective Date: January 17, 2025</p>

              <div className="prose prose-primary max-w-none">
                <p className="text-primary/70">
                  Welcome to Kyto, Inc. ("Kyto," "we," "us," or "our")! These Terms and Conditions ("Terms") govern your
                  use of our website ("Website"), mobile applications ("Mobile Apps"), and services (collectively,
                  "Services"). By accessing or using any part of our Services, you agree to be bound by these Terms. If
                  you do not accept these Terms, you must not use our Services.
                </p>

                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">Table of Contents</h2>
                <ul className="list-decimal list-inside text-primary/70 space-y-2">
                  <li>Introduction</li>
                  <li>Acceptance of Terms</li>
                  <li>Changes to Terms</li>
                  <li>Service Description</li>
                  <li>WhatsApp Business Services</li>
                  <li>Eligibility</li>
                  <li>Account Registration and Management</li>
                  <li>User Responsibilities and Conduct</li>
                  <li>WhatsApp-Specific Requirements</li>
                  <li>Fees and Payments</li>
                  <li>Intellectual Property Rights</li>
                  <li>Privacy and Data Protection</li>
                  <li>Third-Party Services and Links</li>
                  <li>Service Modifications and Availability</li>
                  <li>Termination and Account Cancellation</li>
                  <li>Disclaimer of Warranties</li>
                  <li>Limitation of Liability</li>
                  <li>Indemnification</li>
                  <li>Dispute Resolution</li>
                  <li>Governing Law</li>
                  <li>Severability</li>
                  <li>Entire Agreement</li>
                  <li>Changes to This Agreement</li>
                  <li>Contacting Us</li>
                </ul>

                {/* Section 1 */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Introduction</h2>
                <p className="text-primary/70 mb-4">
                  Kyto provides advanced tools and services designed to enhance business communication and commerce
                  through WhatsApp and related technologies. These Terms constitute a legally binding agreement between
                  you and Kyto regarding your use of our Services.
                </p>

                {/* Section 2 */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Acceptance of Terms</h2>
                <p className="text-primary/70 mb-4">
                  By accessing or using our Services, you agree to these Terms and the WhatsApp Business Terms of
                  Service. If you are using the Services on behalf of a business or entity, you represent and warrant
                  that you have the authority to bind that entity to these Terms and WhatsApp's terms. In that case,
                  "you" and "your" will refer to that entity.
                </p>

                {/* Section 4 */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Service Description</h2>
                <p className="text-primary/70 mb-4">
                  Kyto provides WhatsApp Business Solution Provider services and tools to improve business communication
                  and commerce. Our Services include:
                </p>
                <ul className="list-disc list-inside text-primary/70 space-y-2 ml-4">
                  <li>WhatsApp business messaging integration</li>
                  <li>Automated customer service solutions</li>
                  <li>Order management through WhatsApp</li>
                  <li>Product catalog management</li>
                  <li>Payment processing integration</li>
                </ul>
                <p className="text-primary/70 mt-4">
                  The specific features may evolve over time, and we reserve the right to modify, add, or remove
                  features without prior notice.
                </p>

                {/* New Section 5 - WhatsApp Business Services */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. WhatsApp Business Services</h2>
                <p className="text-primary/70 mb-4">As a WhatsApp Business Solution Provider, we:</p>
                <ul className="list-disc list-inside text-primary/70 space-y-2 ml-4">
                  <li>Provide access to WhatsApp Business API</li>
                  <li>Enable business-to-customer communication</li>
                  <li>Manage message templates and automated responses</li>
                  <li>Process customer data according to WhatsApp's requirements</li>
                  <li>Maintain compliance with WhatsApp's policies</li>
                </ul>

                <p className="text-primary/70 mt-4">Your use of our WhatsApp-related services must comply with:</p>
                <ul className="list-disc list-inside text-primary/70 space-y-2 ml-4">
                  <li>WhatsApp Business Terms of Service</li>
                  <li>WhatsApp Business API Terms of Use</li>
                  <li>WhatsApp Commerce and Payment Policies</li>
                  <li>WhatsApp Business Policy</li>
                  <li>Meta Platform Terms</li>
                </ul>

                {/* Modified Section 6 - Eligibility */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Eligibility</h2>
                <p className="text-primary/70 mb-4">To use our Services, you must:</p>
                <ul className="list-disc list-inside text-primary/70 space-y-2 ml-4">
                  <li>Be at least 18 years old</li>
                  <li>Have the legal capacity to enter into a binding contract</li>
                  <li>Ensure your use of the Services complies with applicable laws and regulations</li>
                  <li>Be a legitimate business entity</li>
                  <li>Comply with WhatsApp's business verification requirements</li>
                  <li>Maintain good standing with WhatsApp and Meta platforms</li>
                  <li>Not be involved in prohibited business categories</li>
                </ul>

                {/* New Section - WhatsApp-Specific Requirements */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">9. WhatsApp-Specific Requirements</h2>
                <p className="text-primary/70 mb-4">You agree to:</p>
                <ul className="list-disc list-inside text-primary/70 space-y-2 ml-4">
                  <li>Only contact users who have explicitly opted in</li>
                  <li>Use approved message templates for business-initiated messages</li>
                  <li>Maintain high-quality customer service standards</li>
                  <li>Not use WhatsApp data for unauthorized purposes</li>
                  <li>Comply with all WhatsApp commerce policies</li>
                  <li>Maintain separate customer data for different businesses</li>
                  <li>Follow WhatsApp's pricing and payment terms</li>
                </ul>

                <h3 className="text-xl font-bold text-primary mt-6 mb-3">Data Processing</h3>
                <p className="text-primary/70 mb-4">You acknowledge that:</p>
                <ul className="list-disc list-inside text-primary/70 space-y-2 ml-4">
                  <li>Kyto acts as a data processor for WhatsApp data</li>
                  <li>You are the data controller for your customer data</li>
                  <li>WhatsApp's data processing terms apply to all data handling</li>
                </ul>

                <h3 className="text-xl font-bold text-primary mt-6 mb-3">Message Templates</h3>
                <p className="text-primary/70 mb-4">You agree to:</p>
                <ul className="list-disc list-inside text-primary/70 space-y-2 ml-4">
                  <li>Submit templates for approval before use</li>
                  <li>Use templates only for their approved purpose</li>
                  <li>Maintain compliance with content guidelines</li>
                  <li>Pay applicable template messaging fees</li>
                </ul>

                {/* Modified Section 10 - Fees and Payments */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">10. Fees and Payments</h2>
                <p className="text-primary/70 mb-4">
                  Access to certain features of the Services may require payment. All fees are non-refundable unless
                  otherwise stated. This includes WhatsApp messaging fees and template charges. You agree to:
                </p>
                <ul className="list-disc list-inside text-primary/70 space-y-2 ml-4">
                  <li>Provide accurate billing information</li>
                  <li>Promptly update payment details when necessary</li>
                  <li>Pay all applicable fees on time</li>
                  <li>Pay WhatsApp-specific charges as per their pricing structure</li>
                  <li>Maintain a valid payment method for recurring charges</li>
                </ul>

                {/* Section 9 */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">11. Intellectual Property Rights</h2>
                <p className="text-primary/70 mb-4">
                  Kyto owns all rights, title, and interest in the Services, including intellectual property. You may
                  not copy, modify, distribute, or reverse engineer any part of our Services without prior written
                  consent. Feedback you provide may be used by Kyto to improve the Services without compensation to you.
                </p>

                {/* Section 10 */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">12. Privacy and Data Protection</h2>
                <p className="text-primary/70 mb-4">
                  Your use of the Services is governed by our Privacy Policy. By using our Services, you consent to our
                  data collection, use, and sharing practices as described in the Privacy Policy.
                </p>

                {/* Section 11 */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">13. Third-Party Services and Links</h2>
                <p className="text-primary/70 mb-4">
                  Our Services may include links to third-party websites or integrate with third-party tools. We are not
                  responsible for the content, privacy practices, or functionality of third-party services. Your
                  interactions with third-party services are governed by their terms.
                </p>

                {/* Section 12 */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">
                  14. Service Modifications and Availability
                </h2>
                <p className="text-primary/70 mb-4">
                  We may modify, suspend, or discontinue the Services at any time without notice. We do not guarantee
                  uninterrupted access to the Services and are not liable for any downtime.
                </p>

                {/* Section 13 */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">15. Termination and Account Cancellation</h2>
                <p className="text-primary/70 mb-4">
                  We reserve the right to terminate your account or access to the Services for any reason, including
                  violations of these Terms. Upon termination, your right to use the Services will cease immediately.
                </p>

                {/* Section 14 */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">16. Disclaimer of Warranties</h2>
                <p className="text-primary/70 mb-4">
                  The Services are provided "as is" and "as available." We disclaim all warranties, express or implied,
                  including merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee
                  that the Services will be error-free or meet your specific requirements.
                </p>

                {/* Section 15 */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">17. Limitation of Liability</h2>
                <p className="text-primary/70 mb-4">
                  To the maximum extent permitted by law, Kyto is not liable for any indirect, incidental, or
                  consequential damages arising from your use of the Services. Our total liability is limited to the
                  fees paid by you in the 12 months preceding the event giving rise to the claim.
                </p>

                {/* Section 16 */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">18. Indemnification</h2>
                <p className="text-primary/70 mb-4">
                  You agree to indemnify and hold Kyto harmless from any claims, damages, or expenses arising from your
                  use of the Services, your breach of these Terms, or your violation of any laws or rights of third
                  parties.
                </p>

                {/* Section 17 */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">19. Dispute Resolution</h2>
                <p className="text-primary/70 mb-4">
                  In the event of a dispute, you agree to attempt resolution through good-faith negotiations. If
                  unresolved, disputes will be subject to binding arbitration under the rules of the American
                  Arbitration Association. You waive the right to participate in class-action lawsuits.
                </p>

                {/* Section 18 */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">20. Governing Law</h2>
                <p className="text-primary/70 mb-4">
                  These Terms are governed by the laws of Colombia, without regard to conflict of laws principles. Any
                  disputes not resolved through arbitration will be litigated exclusively in the courts of Bogota,
                  Colombia.
                </p>

                {/* Section 19 */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">21. Severability</h2>
                <p className="text-primary/70 mb-4">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in
                  full force and effect.
                </p>

                {/* Section 20 */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">22. Entire Agreement</h2>
                <p className="text-primary/70 mb-4">
                  These Terms constitute the entire agreement between you and Kyto regarding the use of the Services and
                  supersede any prior agreements.
                </p>

                {/* Section 21 */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">23. Changes to This Agreement</h2>
                <p className="text-primary/70 mb-4">
                  We may update these Terms periodically. Continued use of the Services after changes indicates your
                  acceptance of the updated Terms.
                </p>

                {/* Section 22 */}
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">24. Contacting Us</h2>
                <p className="text-primary/70">If you have any questions about these Terms, please contact us at:</p>
                <ul className="list-none text-primary/70 space-y-2 mt-2">
                  <li>
                    <strong>Email:</strong> info@kyto.io
                  </li>
                </ul>

                <p className="text-primary/70 mt-8 italic">
                  Thank you for trusting Kyto with your personal data. We are committed to protecting your privacy and
                  ensuring transparency in how we handle your information.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}

