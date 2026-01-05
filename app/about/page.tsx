import { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'About CareHome Pakistan - Leading Home Healthcare Provider',
  description: 'Learn about CareHome Pakistan, our mission to provide quality healthcare at home, our PMDC-registered medical team, and our commitment to ethical healthcare across Pakistan.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CareHome Pakistan</h1>
          <p className="text-xl max-w-3xl mx-auto">Bringing quality healthcare to your doorstep with compassion, expertise, and unwavering commitment to patient care.</p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">Founded in 2020, CareHome Pakistan emerged from a simple yet powerful vision: to make quality healthcare accessible to every family in Pakistan, regardless of their location or circumstances. We recognized that many patients, especially the elderly and those with chronic conditions, face significant challenges in accessing traditional healthcare services.</p>
              <p className="text-gray-600 mb-6">What started as a small team of dedicated healthcare professionals has grown into Pakistan's leading home healthcare provider, serving thousands of families across major cities. Our journey has been guided by the belief that healthcare should be patient-centered, compassionate, and delivered with the highest standards of medical excellence.</p>
              <p className="text-gray-600">Today, we are proud to be the trusted healthcare partner for families throughout Pakistan, providing comprehensive medical services in the comfort and safety of their homes.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
                  <div className="text-gray-600">Families Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-gray-600">Healthcare Professionals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                  <div className="text-gray-600">Cities Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600">Emergency Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">To provide accessible, high-quality healthcare services in the comfort of patients' homes, ensuring dignity, compassion, and clinical excellence in every interaction.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Deliver patient-centered care with empathy and respect</li>
                <li>• Maintain the highest standards of medical practice</li>
                <li>• Make healthcare accessible to all segments of society</li>
                <li>• Support families in caring for their loved ones</li>
                <li>• Promote health education and preventive care</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">👁️</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 mb-4">To be Pakistan's most trusted home healthcare provider, transforming the way healthcare is delivered and experienced by families across the nation.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Revolutionize healthcare delivery in Pakistan</li>
                <li>• Expand services to rural and underserved areas</li>
                <li>• Integrate technology for better patient outcomes</li>
                <li>• Set new standards for home healthcare quality</li>
                <li>• Build a sustainable healthcare ecosystem</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Advisory Board */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Medical Advisory Board</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our medical advisory board consists of distinguished healthcare professionals who guide our clinical practices and ensure the highest standards of care.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨⚕️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dr. Ahmed Hassan</h3>
              <p className="text-blue-600 font-medium mb-3">Chief Medical Officer</p>
              <p className="text-gray-600 text-sm mb-3">MBBS, FCPS (Internal Medicine)</p>
              <p className="text-gray-600">25+ years of experience in internal medicine and healthcare administration. Former head of medicine at Aga Khan University Hospital.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👩⚕️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dr. Fatima Khan</h3>
              <p className="text-pink-600 font-medium mb-3">Senior Consultant Pediatrician</p>
              <p className="text-gray-600 text-sm mb-3">MBBS, FCPS (Pediatrics)</p>
              <p className="text-gray-600">Renowned pediatrician with 20+ years of experience. Specialist in child development and family-centered care approaches.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👨⚕️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dr. Muhammad Ali</h3>
              <p className="text-green-600 font-medium mb-3">Director of Nursing Services</p>
              <p className="text-gray-600 text-sm mb-3">RN, MSN, PhD (Nursing)</p>
              <p className="text-gray-600">Leading nursing educator and administrator with expertise in home healthcare delivery and nursing quality standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Team Standards */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Care Team Standards</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Every member of our healthcare team meets rigorous standards to ensure you receive the best possible care.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Professional Qualifications</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• PMDC registration for doctors</li>
                <li>• PNC registration for nurses</li>
                <li>• Relevant medical degrees</li>
                <li>• Continuing education requirements</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Background Verification</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Criminal background checks</li>
                <li>• Employment history verification</li>
                <li>• Reference checks</li>
                <li>• Identity verification</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Training & Certification</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Home healthcare protocols</li>
                <li>• Patient safety training</li>
                <li>• Emergency response certification</li>
                <li>• Cultural sensitivity training</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Quality Assurance</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Regular performance evaluations</li>
                <li>• Patient feedback monitoring</li>
                <li>• Peer review processes</li>
                <li>• Continuous improvement programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Service Coverage Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We proudly serve families across Pakistan's major cities and are continuously expanding our reach to serve more communities.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Primary Service Areas</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Karachi (All Districts)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Lahore (All Areas)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Islamabad & Rawalpindi</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Faisalabad</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Multan</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Expanding Coverage</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-orange-600 mr-2">◐</span>
                  <span>Peshawar</span>
                </li>
                <li className="flex items-center">
                  <span className="text-orange-600 mr-2">◐</span>
                  <span>Quetta</span>
                </li>
                <li className="flex items-center">
                  <span className="text-orange-600 mr-2">◐</span>
                  <span>Sialkot</span>
                </li>
                <li className="flex items-center">
                  <span className="text-orange-600 mr-2">◐</span>
                  <span>Gujranwala</span>
                </li>
                <li className="flex items-center">
                  <span className="text-orange-600 mr-2">◐</span>
                  <span>Hyderabad</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Future Plans</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">○</span>
                  <span>Rural Area Coverage</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">○</span>
                  <span>Mobile Health Units</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">○</span>
                  <span>Telemedicine Expansion</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">○</span>
                  <span>Specialized Centers</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">○</span>
                  <span>Community Partnerships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Ethical Healthcare */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Commitment to Ethical Healthcare</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We are committed to upholding the highest ethical standards in healthcare delivery, ensuring patient rights, dignity, and quality care for all.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Patient Rights</h3>
              <p className="text-gray-600 text-sm">Respecting patient autonomy, informed consent, and the right to quality healthcare regardless of background.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Confidentiality</h3>
              <p className="text-gray-600 text-sm">Strict adherence to medical confidentiality and patient privacy protection in all our services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Fair Practices</h3>
              <p className="text-gray-600 text-sm">Transparent pricing, non-discriminatory care, and equitable access to healthcare services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600 text-sm">Continuous improvement in care quality, professional development, and patient satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the CareHome Family</h2>
          <p className="text-xl mb-8">Experience the difference of compassionate, professional healthcare delivered to your home</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition">
              Contact Us: +92-21-1234-5678
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}