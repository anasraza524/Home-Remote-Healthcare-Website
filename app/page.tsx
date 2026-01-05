import { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Professional Healthcare Services at Your Home in Pakistan | CareHome',
  description: 'Licensed nurses, experienced doctors, and remote medical care available 24/7 across Pakistan. PMDC-registered professionals providing home nursing, elderly care, and telemedicine.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Healthcare Services at Your Home in Pakistan
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Licensed nurses, experienced doctors, and remote medical care—available 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Book Home Care
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition">
              Call Now: +92-21-1234-5678
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Healthcare Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Home Nursing Care</h3>
              <p className="text-gray-600">Professional nursing services in the comfort of your home with PMDC-registered nurses.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👴</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Elderly & Senior Care</h3>
              <p className="text-gray-600">Compassionate care for elderly family members with trained caregivers and medical supervision.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Telemedicine Consultations</h3>
              <p className="text-gray-600">Online consultations with qualified doctors from the safety of your home.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Remote Patient Monitoring</h3>
              <p className="text-gray-600">Continuous health monitoring with regular check-ins and emergency response.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3">Request Service</h3>
              <p className="text-gray-600">Call us or book online to request the healthcare service you need.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3">Care Assessment</h3>
              <p className="text-gray-600">Our medical team assesses your needs and creates a personalized care plan.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3">Caregiver Assignment</h3>
              <p className="text-gray-600">We assign qualified, background-verified healthcare professionals to your case.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-3">Continuous Monitoring</h3>
              <p className="text-gray-600">Regular follow-ups and 24/7 support ensure the best possible care outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose CareHome Pakistan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🩺</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">PMDC-Registered Doctors</h3>
              <p className="text-gray-600">All our doctors are registered with Pakistan Medical and Dental Council.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Trained & Verified Nurses</h3>
              <p className="text-gray-600">Background-verified nurses with proper training and certifications.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏙️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Major Cities Coverage</h3>
              <p className="text-gray-600">Available in Karachi, Lahore, Islamabad, and other major cities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">Affordable and transparent pricing with no hidden charges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trust & Compliance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Patient Confidentiality</h3>
              <p className="text-gray-600">Strict adherence to medical confidentiality and privacy laws.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Data Privacy</h3>
              <p className="text-gray-600">Your medical data is protected with industry-standard security measures.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Medical Ethics</h3>
              <p className="text-gray-600">All services follow international medical ethics and Pakistani healthcare regulations.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Emergency Protocol</h3>
              <p className="text-gray-600">24/7 emergency escalation to nearest hospitals when needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Families Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"CareHome provided excellent nursing care for my mother after her surgery. The nurse was professional, caring, and helped with her recovery tremendously."</p>
              <div className="font-semibold">- Fatima Ahmed, Karachi</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"The telemedicine service was very convenient during COVID. Dr. Malik was thorough in his consultation and prescribed the right treatment for my father."</p>
              <div className="font-semibold">- Muhammad Hassan, Lahore</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"Our elderly grandmother receives wonderful care from the CareHome team. They treat her like family and we have complete peace of mind."</p>
              <div className="font-semibold">- Ayesha Khan, Islamabad</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Urgent Home Care? We're One Call Away.</h2>
          <p className="text-xl mb-8">24/7 emergency healthcare services available across Pakistan</p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
            Call Emergency Line: +92-21-EMERGENCY
          </button>
        </div>
      </section>
    </main>
  )
}