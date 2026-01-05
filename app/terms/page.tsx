import { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Terms & Conditions - CareHome Pakistan Healthcare Services',
  description: 'Terms and conditions for CareHome Pakistan healthcare services including service usage terms, medical disclaimers, emergency responsibilities, and governing law in Pakistan.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-xl max-w-3xl mx-auto">Legal terms governing the use of CareHome Pakistan healthcare services and your rights and responsibilities as a patient.</p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600"><strong>Last Updated:</strong> January 1, 2024</p>
          <p className="text-gray-600 mt-2">These Terms & Conditions are effective immediately and apply to all users of CareHome Pakistan services.</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">1. Introduction and Acceptance</h2>
              <p className="text-gray-600 mb-4">
                Welcome to CareHome Pakistan. These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("Patient," "Client," or "you") and CareHome Pakistan ("Company," "we," "us," or "our") regarding your use of our healthcare services.
              </p>
              <p className="text-gray-600 mb-4">
                By accessing our services, scheduling appointments, receiving care, or using our digital platforms, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>
              <p className="text-gray-600">
                These Terms apply to all healthcare services provided by CareHome Pakistan, including but not limited to home nursing care, telemedicine consultations, elderly care, post-surgery care, and related medical services.
              </p>
            </div>

            {/* Service Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">2. Service Description</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">2.1 Healthcare Services</h3>
              <p className="text-gray-600 mb-4">CareHome Pakistan provides the following healthcare services:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-1">
                <li>Home nursing care and medical supervision</li>
                <li>Elderly and senior care services</li>
                <li>Telemedicine and online consultations</li>
                <li>Post-surgery and recovery care</li>
                <li>Chronic disease management</li>
                <li>Mother and baby care</li>
                <li>Physiotherapy and rehabilitation services</li>
                <li>Remote patient monitoring</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">2.2 Service Availability</h3>
              <p className="text-gray-600 mb-4">
                Our services are currently available in major cities across Pakistan, including Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, and Multan. Service availability may vary by location and is subject to healthcare professional availability and local regulations.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">2.3 Service Limitations</h3>
              <p className="text-gray-600 mb-4">
                Our services are designed to complement, not replace, traditional healthcare. We do not provide emergency medical services, surgical procedures, or treatments requiring specialized hospital equipment. In emergency situations, patients should immediately contact emergency services (1122) or visit the nearest hospital.
              </p>
            </div>

            {/* Patient Responsibilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">3. Patient Responsibilities</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">3.1 Accurate Information</h3>
              <p className="text-gray-600 mb-4">You agree to provide accurate, complete, and current information about your:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-1">
                <li>Medical history and current health conditions</li>
                <li>Current medications and allergies</li>
                <li>Contact information and emergency contacts</li>
                <li>Insurance information and payment details</li>
                <li>Any changes to the above information</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">3.2 Cooperation with Care</h3>
              <p className="text-gray-600 mb-4">You agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-1">
                <li>Follow prescribed treatment plans and medication schedules</li>
                <li>Attend scheduled appointments and consultations</li>
                <li>Provide a safe and appropriate environment for home care</li>
                <li>Communicate openly with healthcare providers</li>
                <li>Report any changes in your condition promptly</li>
                <li>Respect healthcare professionals and their time</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">3.3 Payment Obligations</h3>
              <p className="text-gray-600 mb-4">
                You are responsible for paying all charges for services rendered according to our published rates or as agreed upon in your care plan. Payment is due at the time of service unless other arrangements have been made. You are also responsible for any costs not covered by insurance.
              </p>
            </div>

            {/* Medical Disclaimers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">4. Medical Disclaimers</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">4.1 No Guarantee of Outcomes</h3>
              <p className="text-gray-600 mb-4">
                While we strive to provide the highest quality healthcare services, we cannot guarantee specific medical outcomes or results. Healthcare involves inherent risks and uncertainties, and individual responses to treatment may vary. All medical decisions should be made in consultation with qualified healthcare professionals.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">4.2 Professional Judgment</h3>
              <p className="text-gray-600 mb-4">
                Our healthcare professionals exercise their clinical judgment in providing care. Treatment recommendations are based on available information and current medical standards. Patients have the right to seek second opinions and make informed decisions about their care.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">4.3 Telemedicine Limitations</h3>
              <p className="text-gray-600 mb-4">
                Telemedicine consultations have inherent limitations compared to in-person examinations. Some conditions may require physical examination, diagnostic tests, or immediate medical attention that cannot be provided through remote consultations. Our healthcare providers will advise when in-person care is necessary.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">4.4 Technology Risks</h3>
              <p className="text-gray-600 mb-4">
                Digital health services depend on technology that may occasionally fail or experience interruptions. While we maintain robust systems, we cannot guarantee uninterrupted service. Technical issues do not constitute medical emergencies, and patients should seek immediate medical attention when needed.
              </p>
            </div>

            {/* Emergency Responsibilities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">5. Emergency Responsibilities</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">5.1 Emergency Situations</h3>
              <p className="text-gray-600 mb-4">
                In case of medical emergencies, including but not limited to chest pain, difficulty breathing, severe bleeding, loss of consciousness, or other life-threatening conditions, you must immediately:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-1">
                <li>Call emergency services (1122) or go to the nearest hospital</li>
                <li>Contact your primary physician if possible</li>
                <li>Notify CareHome Pakistan after addressing the immediate emergency</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">5.2 Our Emergency Support</h3>
              <p className="text-gray-600 mb-4">
                While we provide 24/7 support for our patients, our emergency services are limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-1">
                <li>Coordinating with emergency services when appropriate</li>
                <li>Providing immediate nursing care within our scope of practice</li>
                <li>Facilitating communication with hospitals and physicians</li>
                <li>Arranging urgent home visits when medically appropriate</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">5.3 Limitation of Emergency Services</h3>
              <p className="text-gray-600 mb-4">
                CareHome Pakistan is not an emergency medical service provider. We do not operate ambulances, emergency rooms, or provide emergency surgical services. Our role in emergencies is supportive and coordinating, not primary emergency response.
              </p>
            </div>

            {/* Privacy and Confidentiality */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">6. Privacy and Confidentiality</h2>
              <p className="text-gray-600 mb-4">
                Your privacy and the confidentiality of your medical information are protected under our Privacy Policy, which is incorporated into these Terms by reference. We adhere to strict medical confidentiality standards and Pakistani healthcare privacy regulations.
              </p>
              <p className="text-gray-600 mb-4">
                By using our services, you consent to the collection, use, and disclosure of your health information as described in our Privacy Policy and as necessary for providing healthcare services.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">7. Payment Terms and Billing</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">7.1 Service Fees</h3>
              <p className="text-gray-600 mb-4">
                Service fees are based on our published rate schedule and may vary depending on the type of care, duration of service, and specific patient needs. All fees will be clearly communicated before services begin.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">7.2 Payment Methods</h3>
              <p className="text-gray-600 mb-4">We accept the following payment methods:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-1">
                <li>Cash payments</li>
                <li>Bank transfers</li>
                <li>JazzCash and EasyPaisa</li>
                <li>Credit and debit cards</li>
                <li>Insurance (where applicable)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">7.3 Late Payments</h3>
              <p className="text-gray-600 mb-4">
                Overdue accounts may be subject to late fees and collection activities. Continued non-payment may result in suspension of services, except in emergency situations where immediate care is required.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">7.4 Insurance and Third-Party Payments</h3>
              <p className="text-gray-600 mb-4">
                While we may assist with insurance claims, patients remain ultimately responsible for all charges. We do not guarantee insurance coverage or reimbursement. Any disputes with insurance providers are between the patient and the insurance company.
              </p>
            </div>

            {/* Cancellation and Refunds */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">8. Cancellation and Refund Policy</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">8.1 Appointment Cancellations</h3>
              <p className="text-gray-600 mb-4">
                Appointments may be cancelled or rescheduled with at least 24 hours notice. Cancellations with less than 24 hours notice may be subject to cancellation fees. Emergency situations will be considered on a case-by-case basis.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">8.2 Service Termination</h3>
              <p className="text-gray-600 mb-4">
                Either party may terminate ongoing care services with reasonable notice, except in situations where immediate termination would endanger patient health. We will assist in transitioning care to other providers when appropriate.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">8.3 Refund Policy</h3>
              <p className="text-gray-600 mb-4">
                Refunds for services already rendered are generally not provided. Refunds for prepaid services may be considered on a case-by-case basis, minus any applicable cancellation fees and administrative costs.
              </p>
            </div>

            {/* Liability and Insurance */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">9. Liability and Insurance</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">9.1 Professional Liability</h3>
              <p className="text-gray-600 mb-4">
                CareHome Pakistan maintains professional liability insurance for our healthcare providers. Our liability is limited to the scope of services provided and applicable insurance coverage. We are not liable for outcomes beyond our control or resulting from patient non-compliance with treatment plans.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">9.2 Property and Personal Injury</h3>
              <p className="text-gray-600 mb-4">
                While we take precautions to prevent property damage or personal injury during home visits, patients are responsible for maintaining a safe environment. We are not liable for pre-existing property conditions or injuries resulting from patient actions or environmental hazards.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">9.3 Technology and Data</h3>
              <p className="text-gray-600 mb-4">
                We maintain cybersecurity measures and data protection protocols, but cannot guarantee absolute security against all cyber threats. Patients use digital services at their own risk, and we are not liable for damages resulting from technology failures or security breaches beyond our reasonable control.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">10. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content on our website, mobile applications, and educational materials, including text, graphics, logos, images, and software, is the property of CareHome Pakistan or our licensors and is protected by Pakistani and international copyright laws.
              </p>
              <p className="text-gray-600 mb-4">
                You may use our materials for personal, non-commercial purposes related to your healthcare. You may not reproduce, distribute, modify, or create derivative works without our written permission.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">11. Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">11.1 Internal Resolution</h3>
              <p className="text-gray-600 mb-4">
                We encourage patients to first attempt to resolve any disputes through our internal complaint process. Contact our patient relations department to discuss concerns and seek resolution.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">11.2 Mediation</h3>
              <p className="text-gray-600 mb-4">
                If internal resolution is unsuccessful, disputes may be submitted to mediation through a mutually agreed-upon mediator in Pakistan. Mediation costs will be shared equally between parties.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">11.3 Legal Proceedings</h3>
              <p className="text-gray-600 mb-4">
                Any legal proceedings must be filed in the appropriate courts of Pakistan. Both parties agree to submit to the jurisdiction of Pakistani courts for resolution of disputes arising from these Terms or our services.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">12. Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These Terms and Conditions are governed by and construed in accordance with the laws of Pakistan, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-1">
                <li>Pakistan Medical and Dental Council regulations</li>
                <li>Pakistan Nursing Council guidelines</li>
                <li>Federal and provincial healthcare legislation</li>
                <li>Consumer protection laws</li>
                <li>Data protection and privacy regulations</li>
              </ul>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">13. Modifications to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms at any time to reflect changes in our services, legal requirements, or business practices. Significant changes will be communicated to patients through our website, email notifications, or other appropriate means.
              </p>
              <p className="text-gray-600 mb-4">
                Continued use of our services after modifications constitutes acceptance of the updated Terms. If you do not agree to modified Terms, you should discontinue use of our services.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">14. Severability</h2>
              <p className="text-gray-600 mb-4">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions will continue in full force and effect. Invalid provisions will be replaced with valid provisions that most closely reflect the original intent.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">15. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these Terms and Conditions or to report violations, please contact us:
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Legal Department</h3>
                <p className="text-gray-600 mb-2"><strong>Email:</strong> legal@carehome.pk</p>
                <p className="text-gray-600 mb-2"><strong>Phone:</strong> +92-21-1234-5678</p>
                <p className="text-gray-600 mb-2"><strong>Address:</strong> CareHome Pakistan Legal Department</p>
                <p className="text-gray-600 mb-2">Clifton Block 4, Karachi, Pakistan</p>
                <p className="text-gray-600"><strong>Office Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">Acknowledgment and Agreement</h2>
              <p className="text-gray-600 mb-4">
                By using CareHome Pakistan's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. You also acknowledge that these Terms constitute the entire agreement between you and CareHome Pakistan regarding the use of our services.
              </p>
              <p className="text-gray-600 mb-4">
                You confirm that you have the legal capacity to enter into this agreement and that you are either the patient receiving care or are legally authorized to make healthcare decisions on behalf of the patient.
              </p>
              <p className="text-gray-600">
                These Terms and Conditions, together with our Privacy Policy, represent the complete agreement between the parties and supersede all prior negotiations, representations, or agreements relating to the subject matter herein.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}