import { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Privacy Policy - CareHome Pakistan Healthcare Services',
  description: 'CareHome Pakistan privacy policy covering patient data protection, medical confidentiality, and information security practices in compliance with Pakistani healthcare regulations.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl max-w-3xl mx-auto">Your privacy and the confidentiality of your medical information are fundamental to our healthcare services.</p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600"><strong>Last Updated:</strong> January 1, 2024</p>
          <p className="text-gray-600 mt-2">This Privacy Policy is effective immediately and applies to all users of CareHome Pakistan services.</p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                CareHome Pakistan ("we," "our," or "us") is committed to protecting the privacy and confidentiality of our patients' personal and medical information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our healthcare services, including home nursing care, telemedicine consultations, and related medical services.
              </p>
              <p className="text-gray-600 mb-4">
                We understand that your health information is highly sensitive and personal. As a healthcare provider operating in Pakistan, we adhere to the highest standards of medical confidentiality and data protection, following both international best practices and Pakistani healthcare regulations.
              </p>
              <p className="text-gray-600">
                By using our services, you consent to the collection and use of your information as described in this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">2.1 Personal Information</h3>
              <p className="text-gray-600 mb-4">We collect personal information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-1">
                <li>Full name, date of birth, and gender</li>
                <li>Contact information (address, phone number, email)</li>
                <li>Emergency contact details</li>
                <li>National identity card (CNIC) number for verification</li>
                <li>Insurance information and payment details</li>
                <li>Family medical history (when relevant to care)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">2.2 Medical Information</h3>
              <p className="text-gray-600 mb-4">We collect comprehensive medical information necessary for providing quality healthcare:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-1">
                <li>Current and past medical conditions</li>
                <li>Medications, allergies, and adverse reactions</li>
                <li>Vital signs and health measurements</li>
                <li>Treatment plans and care notes</li>
                <li>Laboratory results and diagnostic reports</li>
                <li>Progress notes and care outcomes</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">2.3 Technical Information</h3>
              <p className="text-gray-600 mb-4">When you use our digital services, we may collect:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-1">
                <li>Device information and IP address</li>
                <li>Browser type and operating system</li>
                <li>Usage patterns and service preferences</li>
                <li>Telemedicine session recordings (with consent)</li>
                <li>Communication logs and timestamps</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">3. How We Use Your Information</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">3.1 Primary Healthcare Purposes</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-1">
                <li>Providing direct patient care and treatment</li>
                <li>Coordinating care among healthcare providers</li>
                <li>Monitoring patient progress and outcomes</li>
                <li>Managing medications and treatment plans</li>
                <li>Facilitating telemedicine consultations</li>
                <li>Ensuring continuity of care across services</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">3.2 Administrative Purposes</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-1">
                <li>Scheduling appointments and managing care plans</li>
                <li>Processing payments and insurance claims</li>
                <li>Maintaining accurate medical records</li>
                <li>Quality assurance and improvement initiatives</li>
                <li>Compliance with healthcare regulations</li>
                <li>Training healthcare professionals</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">3.3 Communication Purposes</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-1">
                <li>Sending appointment reminders and health alerts</li>
                <li>Providing test results and care instructions</li>
                <li>Emergency notifications to patients and families</li>
                <li>Educational materials and health tips</li>
                <li>Service updates and policy changes</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">4. Information Sharing and Disclosure</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">4.1 Healthcare Team</h3>
              <p className="text-gray-600 mb-4">
                We share your medical information with members of your healthcare team who are directly involved in your care, including doctors, nurses, specialists, and other healthcare professionals. This sharing is essential for coordinated, comprehensive care.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">4.2 Family Members and Caregivers</h3>
              <p className="text-gray-600 mb-4">
                With your explicit consent, we may share relevant health information with family members or designated caregivers who are involved in your care. You have the right to specify who can receive this information and what information can be shared.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">4.3 Legal and Regulatory Requirements</h3>
              <p className="text-gray-600 mb-4">We may disclose your information when required by law, including:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-1">
                <li>Reporting communicable diseases to health authorities</li>
                <li>Complying with court orders or legal proceedings</li>
                <li>Cooperating with law enforcement investigations</li>
                <li>Preventing serious threats to public health or safety</li>
                <li>Reporting suspected abuse or neglect</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">4.4 Business Associates</h3>
              <p className="text-gray-600 mb-4">
                We may share information with trusted business partners who help us provide services, such as laboratory services, medical equipment suppliers, or technology providers. These partners are contractually required to protect your information and use it only for specified purposes.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">5. Data Security and Protection</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">5.1 Technical Safeguards</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-1">
                <li>End-to-end encryption for all digital communications</li>
                <li>Secure, password-protected electronic health records</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Multi-factor authentication for system access</li>
                <li>Secure backup and disaster recovery procedures</li>
                <li>Network firewalls and intrusion detection systems</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">5.2 Physical Safeguards</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-1">
                <li>Locked filing cabinets for physical records</li>
                <li>Restricted access to medical record storage areas</li>
                <li>Secure disposal of confidential documents</li>
                <li>Clean desk policies for healthcare professionals</li>
                <li>Visitor access controls in healthcare facilities</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">5.3 Administrative Safeguards</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-1">
                <li>Comprehensive privacy training for all staff</li>
                <li>Role-based access controls to patient information</li>
                <li>Regular privacy and security policy updates</li>
                <li>Incident response procedures for data breaches</li>
                <li>Background checks for all healthcare personnel</li>
              </ul>
            </div>

            {/* Patient Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">6. Your Privacy Rights</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">6.1 Access to Your Information</h3>
              <p className="text-gray-600 mb-4">
                You have the right to access your medical records and request copies of your health information. We will provide access within a reasonable timeframe and may charge a nominal fee for copying costs.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">6.2 Correction of Information</h3>
              <p className="text-gray-600 mb-4">
                If you believe that information in your medical record is incorrect or incomplete, you have the right to request corrections. We will review your request and make appropriate amendments when justified.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">6.3 Restriction of Use</h3>
              <p className="text-gray-600 mb-4">
                You may request restrictions on how we use or disclose your health information. While we will consider all requests, we may not be able to agree to all restrictions, especially if they would interfere with your care.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">6.4 Communication Preferences</h3>
              <p className="text-gray-600 mb-4">
                You have the right to request that we communicate with you about your health information in a specific way or at a specific location. For example, you may request that we contact you only at work or only by mail.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">7. Data Retention</h2>
              <p className="text-gray-600 mb-4">
                We retain your health information for as long as necessary to provide you with healthcare services and to comply with legal and regulatory requirements. In Pakistan, medical records are typically retained for a minimum of 7 years after the last treatment date, or longer if required by law.
              </p>
              <p className="text-gray-600 mb-4">
                After the retention period expires, we securely destroy or anonymize your information in accordance with our data destruction policies and applicable laws.
              </p>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">8. International Data Transfers</h2>
              <p className="text-gray-600 mb-4">
                Your health information is primarily stored and processed within Pakistan. In some cases, we may use cloud services or technology providers that store data internationally. When this occurs, we ensure that appropriate safeguards are in place to protect your information according to international data protection standards.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">9. Third-Party Services</h2>
              <p className="text-gray-600 mb-4">
                Our website and digital services may contain links to third-party websites or services. This Privacy Policy does not apply to those external sites. We encourage you to review the privacy policies of any third-party services you use.
              </p>
              <p className="text-gray-600 mb-4">
                We may integrate with third-party healthcare applications or devices with your consent. When you choose to connect these services, information may be shared according to your preferences and the privacy policies of those services.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">10. Children's Privacy</h2>
              <p className="text-gray-600 mb-4">
                We provide healthcare services to patients of all ages, including children. When treating minors (under 18 years of age), we obtain consent from parents or legal guardians as required by Pakistani law. We take special care to protect the privacy of pediatric patients while ensuring they receive appropriate medical care.
              </p>
              <p className="text-gray-600 mb-4">
                As children mature, we respect their growing autonomy and may discuss confidentiality rights with both the child and parent/guardian, in accordance with medical ethics and local laws.
              </p>
            </div>

            {/* Policy Changes */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make significant changes, we will notify you through our website, email, or other appropriate communication methods.
              </p>
              <p className="text-gray-600 mb-4">
                The updated policy will be effective immediately upon posting, unless otherwise specified. Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">12. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about this Privacy Policy, want to exercise your privacy rights, or have concerns about how we handle your information, please contact us:
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Privacy Officer</h3>
                <p className="text-gray-600 mb-2"><strong>Email:</strong> privacy@carehome.pk</p>
                <p className="text-gray-600 mb-2"><strong>Phone:</strong> +92-21-1234-5678</p>
                <p className="text-gray-600 mb-2"><strong>Address:</strong> CareHome Pakistan Privacy Office</p>
                <p className="text-gray-600 mb-2">Clifton Block 4, Karachi, Pakistan</p>
                <p className="text-gray-600"><strong>Office Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Complaints */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">13. Filing Complaints</h2>
              <p className="text-gray-600 mb-4">
                If you believe your privacy rights have been violated, you have the right to file a complaint with us or with relevant regulatory authorities. We will not retaliate against you for filing a complaint.
              </p>
              <p className="text-gray-600 mb-4">
                To file a complaint with CareHome Pakistan, contact our Privacy Officer using the information provided above. We will investigate all complaints promptly and take appropriate corrective action when necessary.
              </p>
            </div>

            {/* Acknowledgment */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">Acknowledgment</h2>
              <p className="text-gray-600 mb-4">
                By using CareHome Pakistan's services, you acknowledge that you have read, understood, and agree to this Privacy Policy. You also acknowledge that we have provided you with information about how we collect, use, and disclose your personal and health information.
              </p>
              <p className="text-gray-600">
                This Privacy Policy is an important part of our commitment to protecting your privacy and maintaining the trust you place in us as your healthcare provider.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}