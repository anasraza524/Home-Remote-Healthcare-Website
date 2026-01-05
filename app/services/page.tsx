import { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Healthcare Services - Home Nursing, Elderly Care & More | CareHome Pakistan',
  description: 'Comprehensive healthcare services including home nursing, elderly care, post-surgery care, chronic disease management, and physiotherapy at home across Pakistan.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Healthcare Services</h1>
          <p className="text-xl max-w-3xl mx-auto">Professional medical care delivered to your home with compassion, expertise, and the highest standards of safety.</p>
        </div>
      </section>

      {/* Home Nursing Care */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Home Nursing Care</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Overview</h3>
                  <p className="text-gray-600">Professional nursing services provided by PMDC-registered nurses in the comfort and safety of your home. Our nurses are trained in modern medical practices and equipped to handle various medical conditions.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Who It's For</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Patients recovering from surgery or illness</li>
                    <li>• Individuals with chronic medical conditions</li>
                    <li>• Elderly patients requiring medical supervision</li>
                    <li>• Patients with mobility limitations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">What's Included</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Medication administration and monitoring</li>
                    <li>• Wound care and dressing changes</li>
                    <li>• Vital signs monitoring</li>
                    <li>• IV therapy and injections</li>
                    <li>• Patient education and family guidance</li>
                    <li>• Regular health assessments</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Availability & Quality</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>24/7 availability for emergency cases</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>All nurses are PMDC-registered</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Background verification completed</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Regular training and skill updates</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Medical equipment provided</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elderly & Senior Care */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Specialized Elderly Care</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Dementia and Alzheimer's care</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Fall prevention and safety measures</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Companionship and emotional support</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Assistance with daily activities</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>Family communication and updates</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Elderly & Senior Care</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Overview</h3>
                  <p className="text-gray-600">Compassionate care for elderly family members with trained caregivers who understand the unique needs of senior citizens. Our approach combines medical expertise with emotional support.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Who It's For</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Senior citizens requiring daily assistance</li>
                    <li>• Elderly with chronic health conditions</li>
                    <li>• Seniors recovering from hospitalization</li>
                    <li>• Families needing respite care</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">What's Included</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Personal hygiene and grooming assistance</li>
                    <li>• Medication reminders and administration</li>
                    <li>• Meal preparation and feeding assistance</li>
                    <li>• Mobility support and exercise guidance</li>
                    <li>• Social interaction and companionship</li>
                    <li>• Regular health monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Surgery Care */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Post-Surgery Care</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Specialized care for patients recovering from surgical procedures, ensuring proper healing and preventing complications.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Wound Management</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Sterile dressing changes</li>
                <li>• Infection prevention</li>
                <li>• Healing progress monitoring</li>
                <li>• Pain management support</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Recovery Support</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Mobility assistance</li>
                <li>• Physical therapy coordination</li>
                <li>• Activity restrictions guidance</li>
                <li>• Recovery milestone tracking</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Medical Monitoring</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Vital signs monitoring</li>
                <li>• Medication administration</li>
                <li>• Complication detection</li>
                <li>• Doctor communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chronic Disease Management */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Chronic Disease Management</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive care for patients with long-term health conditions, focusing on symptom management and quality of life improvement.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Conditions We Manage</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Diabetes</h4>
                  <p className="text-sm text-gray-600">Blood sugar monitoring, insulin administration, diet guidance</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Hypertension</h4>
                  <p className="text-sm text-gray-600">Blood pressure monitoring, medication management</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Heart Disease</h4>
                  <p className="text-sm text-gray-600">Cardiac monitoring, lifestyle modification support</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">COPD</h4>
                  <p className="text-sm text-gray-600">Respiratory therapy, oxygen monitoring</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Our Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Personalized Care Plans</h4>
                    <p className="text-gray-600">Tailored treatment plans based on individual health needs and lifestyle.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Regular Monitoring</h4>
                    <p className="text-gray-600">Continuous health tracking and early intervention when needed.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Family Education</h4>
                    <p className="text-gray-600">Teaching family members how to support and assist with care.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mother & Baby Care */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mother & Baby Care</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Specialized postnatal care for new mothers and their babies, ensuring healthy recovery and proper newborn care.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-pink-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Maternal Care</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-pink-600 mr-3">♥</span>
                  <span>Postpartum recovery monitoring</span>
                </li>
                <li className="flex items-center">
                  <span className="text-pink-600 mr-3">♥</span>
                  <span>Breastfeeding support and guidance</span>
                </li>
                <li className="flex items-center">
                  <span className="text-pink-600 mr-3">♥</span>
                  <span>Wound care for C-section patients</span>
                </li>
                <li className="flex items-center">
                  <span className="text-pink-600 mr-3">♥</span>
                  <span>Emotional support and counseling</span>
                </li>
                <li className="flex items-center">
                  <span className="text-pink-600 mr-3">♥</span>
                  <span>Nutrition and diet planning</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Newborn Care</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3">👶</span>
                  <span>Feeding assistance and schedules</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3">👶</span>
                  <span>Diaper changing and hygiene</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3">👶</span>
                  <span>Sleep pattern establishment</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3">👶</span>
                  <span>Health monitoring and assessments</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-3">👶</span>
                  <span>Vaccination schedule guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Physiotherapy at Home */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Physiotherapy at Home</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Professional physiotherapy services delivered at home by licensed physiotherapists to help restore mobility and function.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏃</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobility Restoration</h3>
              <p className="text-gray-600">Exercises and treatments to improve movement, strength, and flexibility after injury or surgery.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Pain Management</h3>
              <p className="text-gray-600">Therapeutic techniques to reduce pain and improve quality of life for chronic conditions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Specialized Programs</h3>
              <p className="text-gray-600">Customized rehabilitation programs for stroke recovery, orthopedic conditions, and neurological disorders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today to discuss your healthcare needs and create a personalized care plan.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition">
              Call: +92-21-1234-5678
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}