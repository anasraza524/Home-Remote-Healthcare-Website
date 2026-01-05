import { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Healthcare Pricing & Packages - Transparent Rates | CareHome Pakistan',
  description: 'Transparent pricing for home healthcare services in Pakistan. Home nursing, elderly care, telemedicine consultations, and custom care packages with no hidden fees.',
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing & Packages</h1>
          <p className="text-xl max-w-3xl mx-auto">Transparent, affordable healthcare pricing with no hidden fees. Quality care that fits your budget and needs.</p>
        </div>
      </section>

      {/* Home Care Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Home Care Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose from our flexible home care packages designed to meet different healthcare needs and budgets.</p>
          </div>
          
          {/* Daily Packages */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Daily Care Packages</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-semibold mb-2">Basic Daily Care</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-2">Rs. 3,500</div>
                  <p className="text-gray-600">per day (8 hours)</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Registered nurse visit</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Medication administration</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Vital signs monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Basic wound care</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Health status reporting</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Choose Basic Care
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-green-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-6">
                  <h4 className="text-xl font-semibold mb-2">Comprehensive Daily Care</h4>
                  <div className="text-3xl font-bold text-green-600 mb-2">Rs. 5,500</div>
                  <p className="text-gray-600">per day (12 hours)</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>All Basic Care services</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Personal hygiene assistance</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Mobility support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Meal preparation assistance</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Companionship</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Family consultation</span>
                  </li>
                </ul>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                  Choose Comprehensive
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-semibold mb-2">24-Hour Care</h4>
                  <div className="text-3xl font-bold text-purple-600 mb-2">Rs. 8,500</div>
                  <p className="text-gray-600">per day (24 hours)</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>All Comprehensive services</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Round-the-clock monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Night-time care</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Emergency response</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span>Shift nurse rotation</span>
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                  Choose 24-Hour Care
                </button>
              </div>
            </div>
          </div>

          {/* Weekly Packages */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Weekly Care Packages</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Weekly Basic Package</h4>
                <div className="text-2xl font-bold text-blue-600 mb-4">Rs. 22,000 <span className="text-lg font-normal text-gray-600">/ week</span></div>
                <p className="text-gray-600 mb-4">Save Rs. 2,500 compared to daily booking</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 7 days of basic daily care</li>
                  <li>• Flexible scheduling</li>
                  <li>• Weekly health assessment</li>
                  <li>• Family progress reports</li>
                </ul>
              </div>
              <div className="bg-green-50 p-8 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Weekly Comprehensive Package</h4>
                <div className="text-2xl font-bold text-green-600 mb-4">Rs. 35,000 <span className="text-lg font-normal text-gray-600">/ week</span></div>
                <p className="text-gray-600 mb-4">Save Rs. 3,500 compared to daily booking</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 7 days of comprehensive care</li>
                  <li>• Priority scheduling</li>
                  <li>• Detailed care planning</li>
                  <li>• Doctor consultation included</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Monthly Packages */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8">Monthly Care Packages</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4">Monthly Basic</h4>
                <div className="text-2xl font-bold text-blue-600 mb-4">Rs. 85,000</div>
                <p className="text-gray-600 mb-4">Save Rs. 20,000 per month</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 30 days basic care</li>
                  <li>• Monthly health review</li>
                  <li>• Care plan adjustments</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-green-500">
                <h4 className="text-xl font-semibold mb-4">Monthly Comprehensive</h4>
                <div className="text-2xl font-bold text-green-600 mb-4">Rs. 140,000</div>
                <p className="text-gray-600 mb-4">Save Rs. 25,000 per month</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 30 days comprehensive care</li>
                  <li>• Weekly doctor visits</li>
                  <li>• Physiotherapy sessions</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4">Monthly Premium</h4>
                <div className="text-2xl font-bold text-purple-600 mb-4">Rs. 220,000</div>
                <p className="text-gray-600 mb-4">Save Rs. 35,000 per month</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 24/7 care coverage</li>
                  <li>• Specialist consultations</li>
                  <li>• Advanced monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telemedicine Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Telemedicine Consultation Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Affordable online consultations with qualified doctors from the comfort of your home.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨⚕️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">General Physician</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">Rs. 1,500</div>
              <p className="text-gray-600 text-sm mb-4">15-20 minutes</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• General health consultation</li>
                <li>• Prescription if needed</li>
                <li>• Follow-up guidance</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👶</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Pediatrician</h3>
              <div className="text-2xl font-bold text-green-600 mb-2">Rs. 2,000</div>
              <p className="text-gray-600 text-sm mb-4">20-25 minutes</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Child health assessment</li>
                <li>• Growth monitoring</li>
                <li>• Vaccination guidance</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👩⚕️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Gynecologist</h3>
              <div className="text-2xl font-bold text-pink-600 mb-2">Rs. 2,500</div>
              <p className="text-gray-600 text-sm mb-4">20-25 minutes</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Women's health consultation</li>
                <li>• Pregnancy guidance</li>
                <li>• Reproductive health</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Dermatologist</h3>
              <div className="text-2xl font-bold text-purple-600 mb-2">Rs. 2,200</div>
              <p className="text-gray-600 text-sm mb-4">20-25 minutes</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Skin condition assessment</li>
                <li>• Treatment recommendations</li>
                <li>• Skincare guidance</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-2">Follow-up consultations within 7 days: <span className="font-semibold text-green-600">50% discount</span></p>
            <p className="text-sm text-gray-500">Payment methods: JazzCash, EasyPaisa, Bank Transfer, Credit/Debit Cards</p>
          </div>
        </div>
      </section>

      {/* Elderly Care Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Specialized Elderly Care Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Tailored care packages designed specifically for the unique needs of elderly patients and their families.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Senior Companion Care</h3>
              <div className="text-2xl font-bold mb-4">Rs. 4,000 <span className="text-lg font-normal text-gray-600">/ day</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Companionship and social interaction</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Medication reminders</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Light housekeeping</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Meal preparation</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Transportation assistance</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Choose Companion Care
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-green-500">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Senior Medical Care</h3>
              <div className="text-2xl font-bold mb-4">Rs. 6,500 <span className="text-lg font-normal text-gray-600">/ day</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>All Companion Care services</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Registered nurse supervision</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Health monitoring</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Chronic disease management</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Doctor consultations</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                Choose Medical Care
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Dementia & Memory Care</h3>
              <div className="text-2xl font-bold mb-4">Rs. 8,000 <span className="text-lg font-normal text-gray-600">/ day</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Specialized dementia training</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Cognitive stimulation activities</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Behavioral management</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Safety supervision</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Family support and education</span>
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                Choose Memory Care
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Important Pricing Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-orange-600">Price Variations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Final pricing may vary based on individual assessment</li>
                  <li>• Complex medical conditions may require specialized care</li>
                  <li>• Geographic location may affect service availability</li>
                  <li>• Additional equipment or supplies charged separately</li>
                  <li>• Emergency services may have different rates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-600">What's Included</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Professional healthcare provider fees</li>
                  <li>• Basic medical supplies and equipment</li>
                  <li>• Travel expenses within city limits</li>
                  <li>• Care documentation and reporting</li>
                  <li>• 24/7 emergency support hotline</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-center text-gray-700">
                <strong>Note:</strong> All prices are subject to change and final costs will be confirmed after initial assessment. 
                We believe in transparent pricing and will always discuss any additional costs before proceeding with care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Care CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Care Plan?</h2>
          <p className="text-xl mb-8">Every patient is unique. Let us create a personalized care package that fits your specific needs and budget.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Request Custom Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition">
              Speak with Care Coordinator
            </button>
          </div>
          <p className="mt-6 text-sm opacity-90">Free consultation to discuss your healthcare needs • No obligation</p>
        </div>
      </section>
    </main>
  )
}