import { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Telemedicine & Online Consultations in Pakistan | CareHome',
  description: 'Secure online medical consultations with PMDC-registered doctors. General physician, pediatrics, gynecology, and dermatology services available via telemedicine in Pakistan.',
}

export default function TelemedicinePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Telemedicine Services</h1>
          <p className="text-xl max-w-3xl mx-auto">Consult with qualified doctors from the comfort of your home. Safe, secure, and convenient healthcare at your fingertips.</p>
        </div>
      </section>

      {/* What is Telemedicine */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What is Telemedicine?</h2>
              <p className="text-gray-600 mb-6">Telemedicine is the practice of providing medical care remotely using technology. Through secure video calls, phone consultations, and digital health platforms, patients can receive quality healthcare without leaving their homes.</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span>Convenient access to healthcare professionals</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span>Reduced travel time and costs</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span>Safe alternative during health emergencies</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3 text-xl">✓</span>
                  <span>Access to specialists regardless of location</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benefits for Pakistani Families</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Especially beneficial for elderly patients who have difficulty traveling</li>
                <li>• Reduces exposure to infections in hospital settings</li>
                <li>• Provides access to healthcare in remote areas of Pakistan</li>
                <li>• Allows family members to participate in consultations</li>
                <li>• Cost-effective alternative to in-person visits</li>
                <li>• Maintains continuity of care during lockdowns or emergencies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Online Consultation Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Online Consultation Works in Pakistan</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">1. Book Appointment</h3>
              <p className="text-gray-600">Schedule your consultation online or call our helpline. Choose your preferred doctor and time slot.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">2. Make Payment</h3>
              <p className="text-gray-600">Secure payment through JazzCash, EasyPaisa, bank transfer, or credit card. Transparent pricing with no hidden fees.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🩺</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">3. Video Consultation</h3>
              <p className="text-gray-600">Connect with your doctor via secure video call. Discuss symptoms, medical history, and receive professional advice.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">4. Receive Prescription</h3>
              <p className="text-gray-600">Get digital prescription and treatment plan. Follow-up appointments can be scheduled if needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Available */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Medical Specialties Available</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">General Physician</h3>
              <p className="text-gray-600 mb-4">Comprehensive primary care for common health issues, routine check-ups, and preventive care.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fever and flu symptoms</li>
                <li>• Headaches and body aches</li>
                <li>• Digestive issues</li>
                <li>• Blood pressure monitoring</li>
                <li>• Diabetes management</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👶</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Pediatrics</h3>
              <p className="text-gray-600 mb-4">Specialized care for infants, children, and adolescents with experienced pediatricians.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Childhood illnesses</li>
                <li>• Growth and development</li>
                <li>• Vaccination guidance</li>
                <li>• Feeding problems</li>
                <li>• Behavioral concerns</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-600">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Gynecology</h3>
              <p className="text-gray-600 mb-4">Women's health consultations with female gynecologists for privacy and comfort.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Menstrual disorders</li>
                <li>• Pregnancy consultations</li>
                <li>• Reproductive health</li>
                <li>• Contraception advice</li>
                <li>• Menopause management</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Dermatology</h3>
              <p className="text-gray-600 mb-4">Skin, hair, and nail consultations with qualified dermatologists.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Acne and skin conditions</li>
                <li>• Hair loss problems</li>
                <li>• Allergic reactions</li>
                <li>• Skin infections</li>
                <li>• Cosmetic concerns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Confidentiality */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Privacy & Confidentiality</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Your privacy and medical confidentiality are our top priorities. We use secure, encrypted platforms to protect your health information.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Platform</h3>
              <p className="text-gray-600">End-to-end encrypted video calls and secure data storage following international healthcare privacy standards.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">PMDC Compliance</h3>
              <p className="text-gray-600">All consultations follow Pakistan Medical and Dental Council guidelines for telemedicine practices.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Protection</h3>
              <p className="text-gray-600">Your medical records and personal information are stored securely and never shared without consent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Technology Requirements</h2>
              <p className="text-gray-600 mb-6">Our telemedicine platform is designed to work on most devices available in Pakistan. Here's what you need for a smooth consultation:</p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Device Options</h3>
                  <p className="text-gray-600">Smartphone, tablet, laptop, or desktop computer with camera and microphone</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Internet Connection</h3>
                  <p className="text-gray-600">Stable internet connection (3G/4G/WiFi) - works with most Pakistani internet providers</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Browser Support</h3>
                  <p className="text-gray-600">Chrome, Firefox, Safari, or Edge - no special software installation required</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Technical Support</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📞</span>
                  <span>Free technical support before your appointment</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">💬</span>
                  <span>WhatsApp assistance for setup guidance</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">🎥</span>
                  <span>Test call option to check your connection</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">🔧</span>
                  <span>Backup phone consultation if video fails</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600"><strong>Need Help?</strong> Call our technical support team at +92-21-TECH-HELP (8324-4357) for assistance with setup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Consultation Fees</h2>
            <p className="text-gray-600">Transparent pricing with no hidden charges. Pay securely through multiple payment options.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-2">General Physician</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">Rs. 1,500</div>
              <p className="text-gray-600">15-20 minute consultation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-2">Pediatrician</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">Rs. 2,000</div>
              <p className="text-gray-600">20-25 minute consultation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-2">Gynecologist</h3>
              <div className="text-3xl font-bold text-pink-600 mb-2">Rs. 2,500</div>
              <p className="text-gray-600">20-25 minute consultation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-2">Dermatologist</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">Rs. 2,200</div>
              <p className="text-gray-600">20-25 minute consultation</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Payment Methods: JazzCash, EasyPaisa, Bank Transfer, Credit/Debit Cards</p>
            <p className="text-sm text-gray-500">Follow-up consultations within 7 days: 50% discount</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Online Consultation Today</h2>
          <p className="text-xl mb-8">Connect with qualified doctors from the comfort of your home</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Book Appointment Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition">
              Call: +92-21-TELE-MED
            </button>
          </div>
          <p className="mt-6 text-sm opacity-90">Available 7 days a week, 8 AM to 10 PM</p>
        </div>
      </section>
    </main>
  )
}