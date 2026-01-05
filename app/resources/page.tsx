import { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Patient Resources - Healthcare Guides & FAQs | CareHome Pakistan',
  description: 'Comprehensive patient resources including healthcare FAQs, home care guidelines, elderly safety tips, telemedicine usage guide, and patient rights in Pakistan.',
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Patient Resources</h1>
          <p className="text-xl max-w-3xl mx-auto">Educational resources, guides, and frequently asked questions to help you make informed healthcare decisions.</p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our home healthcare services in Pakistan.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">How do I book home healthcare services?</h3>
                <p className="text-gray-600">You can book our services by calling our helpline at +92-21-1234-5678, using our online booking system, or sending us a WhatsApp message. Our care coordinators will assess your needs and arrange appropriate care within 24 hours.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Are your healthcare professionals qualified?</h3>
                <p className="text-gray-600">Yes, all our doctors are PMDC-registered and our nurses are PNC-registered. Every healthcare professional undergoes thorough background verification, skills assessment, and continuous training to maintain the highest standards of care.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">What areas do you serve in Pakistan?</h3>
                <p className="text-gray-600">We currently provide services in Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, and Multan. We are expanding to other major cities including Peshawar, Quetta, and Hyderabad. Contact us to check availability in your area.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">How much do your services cost?</h3>
                <p className="text-gray-600">Our pricing varies based on the type and duration of care needed. Basic daily care starts from Rs. 3,500 per day, while comprehensive care packages begin at Rs. 5,500 per day. We offer significant discounts for weekly and monthly packages.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Do you provide emergency services?</h3>
                <p className="text-gray-600">Yes, we have 24/7 emergency response services. In case of medical emergencies, we can arrange immediate nursing care and coordinate with local hospitals for urgent medical attention. Call our emergency line for immediate assistance.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Is telemedicine consultation effective?</h3>
                <p className="text-gray-600">Telemedicine is highly effective for routine consultations, follow-ups, and non-emergency medical issues. Our doctors can diagnose many conditions, prescribe medications, and provide medical advice through secure video consultations from your home.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">How do you ensure patient privacy?</h3>
                <p className="text-gray-600">We strictly follow medical confidentiality protocols. All patient information is encrypted and stored securely. Our healthcare professionals sign confidentiality agreements, and we never share patient data without explicit consent.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Can family members be involved in care?</h3>
                <p className="text-gray-600">Absolutely! We encourage family involvement in the care process. Our healthcare professionals provide education and training to family members, and we maintain regular communication about the patient's progress and care plan.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept multiple payment methods including cash, bank transfers, JazzCash, EasyPaisa, and major credit/debit cards. We also offer flexible payment plans for long-term care packages.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">How do you handle medication management?</h3>
                <p className="text-gray-600">Our nurses are trained in safe medication administration. We maintain detailed medication records, ensure proper timing and dosages, monitor for side effects, and coordinate with doctors for any necessary adjustments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Care Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Home Care Guidelines</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Essential guidelines to ensure safe and effective home healthcare for you and your loved ones.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Preparing Your Home</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ensure clear pathways for mobility</li>
                <li>• Remove tripping hazards and loose rugs</li>
                <li>• Install adequate lighting in all areas</li>
                <li>• Keep emergency contact numbers visible</li>
                <li>• Prepare a clean, quiet space for care</li>
                <li>• Ensure bathroom safety with grab bars</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💊</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Medication Safety</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Keep all medications in original containers</li>
                <li>• Store medications in a cool, dry place</li>
                <li>• Maintain an updated medication list</li>
                <li>• Never share medications with others</li>
                <li>• Check expiration dates regularly</li>
                <li>• Report any side effects immediately</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Communication Tips</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Keep a daily care log or diary</li>
                <li>• Ask questions about your care plan</li>
                <li>• Report changes in condition promptly</li>
                <li>• Maintain open communication with caregivers</li>
                <li>• Keep important documents organized</li>
                <li>• Participate actively in care decisions</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Infection Prevention</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Wash hands frequently with soap</li>
                <li>• Use hand sanitizer when soap unavailable</li>
                <li>• Keep living areas clean and disinfected</li>
                <li>• Avoid contact with sick individuals</li>
                <li>• Follow proper wound care procedures</li>
                <li>• Maintain good personal hygiene</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Emergency Preparedness</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Keep emergency numbers easily accessible</li>
                <li>• Know the location of nearest hospital</li>
                <li>• Maintain emergency medication supply</li>
                <li>• Have a backup power source if needed</li>
                <li>• Keep important medical documents ready</li>
                <li>• Inform neighbors about medical conditions</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Wellness & Recovery</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Follow prescribed exercise routines</li>
                <li>• Maintain a balanced, nutritious diet</li>
                <li>• Get adequate rest and sleep</li>
                <li>• Stay hydrated throughout the day</li>
                <li>• Engage in mental stimulation activities</li>
                <li>• Maintain social connections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Elderly Safety Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Elderly Safety Tips</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Important safety considerations to keep elderly family members safe and comfortable at home.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Fall Prevention</h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Home Modifications</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Install grab bars in bathrooms</li>
                    <li>• Use non-slip mats in shower/bathtub</li>
                    <li>• Ensure adequate lighting in all areas</li>
                    <li>• Remove or secure loose rugs</li>
                    <li>• Keep walkways clear of clutter</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Personal Safety</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Wear proper, non-slip footwear</li>
                    <li>• Use walking aids when recommended</li>
                    <li>• Move slowly when changing positions</li>
                    <li>• Keep frequently used items within reach</li>
                    <li>• Consider wearing a medical alert device</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Health Monitoring</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Daily Health Checks</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Monitor blood pressure regularly</li>
                    <li>• Check blood sugar if diabetic</li>
                    <li>• Observe for changes in appetite</li>
                    <li>• Note any changes in mood or behavior</li>
                    <li>• Track sleep patterns and quality</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Warning Signs to Watch</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Sudden confusion or disorientation</li>
                    <li>• Difficulty breathing or chest pain</li>
                    <li>• Severe headaches or dizziness</li>
                    <li>• Unusual fatigue or weakness</li>
                    <li>• Changes in vision or hearing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telemedicine Usage Guide */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Telemedicine Usage Guide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Step-by-step guide to make the most of your online medical consultations.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Before Your Consultation</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Test Your Technology</h4>
                    <p className="text-gray-600">Check your internet connection, camera, and microphone. Use our test call feature if available.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Prepare Your Information</h4>
                    <p className="text-gray-600">Gather your medical history, current medications, and list of symptoms or concerns.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Choose a Quiet Space</h4>
                    <p className="text-gray-600">Find a private, well-lit area with minimal background noise for your consultation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold mb-1">Have Support Available</h4>
                    <p className="text-gray-600">If needed, have a family member present to help with communication or technical issues.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">During Your Consultation</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Be Clear and Specific</h4>
                  <p className="text-gray-600">Describe your symptoms clearly, including when they started, severity, and any triggers.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Ask Questions</h4>
                  <p className="text-gray-600">Don't hesitate to ask for clarification about diagnosis, treatment, or follow-up care.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Take Notes</h4>
                  <p className="text-gray-600">Write down important information, instructions, and any prescribed medications.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Follow Instructions</h4>
                  <p className="text-gray-600">Listen carefully to the doctor's recommendations and ask about next steps.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Rights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Patient Rights in Pakistan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Understanding your rights as a patient ensures you receive respectful, quality healthcare services.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Right to Quality Care</h3>
              <p className="text-gray-600">You have the right to receive safe, effective, and appropriate healthcare services from qualified professionals.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Right to Privacy</h3>
              <p className="text-gray-600">Your medical information and personal details must be kept confidential and used only for your care.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Right to Information</h3>
              <p className="text-gray-600">You have the right to understand your condition, treatment options, and potential risks in simple terms.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">✋</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Right to Consent</h3>
              <p className="text-gray-600">You have the right to make informed decisions about your care and to refuse treatment if desired.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🗣️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Right to Complain</h3>
              <p className="text-gray-600">You have the right to voice concerns about your care and expect them to be addressed promptly and fairly.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Right to Respect</h3>
              <p className="text-gray-600">You have the right to be treated with dignity, respect, and cultural sensitivity regardless of your background.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
          <p className="text-xl mb-8">Our patient care team is here to answer your questions and provide additional resources</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Contact Patient Care
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition">
              Download Resource Guide
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}