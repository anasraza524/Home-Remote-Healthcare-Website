import { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Contact CareHome Pakistan - 24/7 Healthcare Support',
  description: 'Contact CareHome Pakistan for home healthcare services. 24/7 support available across Karachi, Lahore, Islamabad. Emergency and non-emergency healthcare assistance.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">We're here to help 24/7. Reach out to us for healthcare services, emergency support, or any questions about our care.</p>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-8 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">🚨 Medical Emergency?</h2>
            <p className="text-lg mb-4">For life-threatening emergencies, call 1122 (Rescue Services) or go to the nearest hospital immediately.</p>
            <p className="text-lg">For urgent home healthcare needs: <a href="tel:+92211234567" className="font-bold underline">+92-21-EMERGENCY (1234-567)</a></p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Phone Numbers */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Phone Numbers</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-600">Main Helpline</h4>
                  <p className="text-gray-600">+92-21-1234-5678</p>
                  <p className="text-sm text-gray-500">Available 24/7</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600">Emergency Line</h4>
                  <p className="text-gray-600">+92-21-EMERGENCY</p>
                  <p className="text-sm text-gray-500">Urgent care only</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600">Telemedicine</h4>
                  <p className="text-gray-600">+92-21-TELE-MED</p>
                  <p className="text-sm text-gray-500">8 AM - 10 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600">WhatsApp</h4>
                  <p className="text-gray-600">+92-300-1234567</p>
                  <p className="text-sm text-gray-500">Text messages only</p>
                </div>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Email Addresses</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-600">General Inquiries</h4>
                  <p className="text-gray-600">info@carehome.pk</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600">Book Services</h4>
                  <p className="text-gray-600">booking@carehome.pk</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600">Patient Support</h4>
                  <p className="text-gray-600">support@carehome.pk</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600">Billing & Payments</h4>
                  <p className="text-gray-600">billing@carehome.pk</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600">Complaints</h4>
                  <p className="text-gray-600">complaints@carehome.pk</p>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🕒</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Operating Hours</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-600">Home Care Services</h4>
                  <p className="text-gray-600">24 hours, 7 days a week</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600">Customer Support</h4>
                  <p className="text-gray-600">24 hours, 7 days a week</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600">Telemedicine</h4>
                  <p className="text-gray-600">8:00 AM - 10:00 PM</p>
                  <p className="text-sm text-gray-500">7 days a week</p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600">Administrative Office</h4>
                  <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-500">Monday to Saturday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Served */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cities We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">CareHome Pakistan provides healthcare services across major cities in Pakistan with plans to expand further.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Karachi</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Coverage:</strong> All districts and areas</p>
                <p><strong>Local Office:</strong> Clifton, Block 4</p>
                <p><strong>Phone:</strong> +92-21-3456-7890</p>
                <p><strong>Services:</strong> All services available</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Lahore</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Coverage:</strong> All areas including suburbs</p>
                <p><strong>Local Office:</strong> Gulberg III</p>
                <p><strong>Phone:</strong> +92-42-3456-7890</p>
                <p><strong>Services:</strong> All services available</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Islamabad & Rawalpindi</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Coverage:</strong> Twin cities coverage</p>
                <p><strong>Local Office:</strong> F-7 Markaz, Islamabad</p>
                <p><strong>Phone:</strong> +92-51-3456-7890</p>
                <p><strong>Services:</strong> All services available</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Faisalabad</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Coverage:</strong> City and surrounding areas</p>
                <p><strong>Local Office:</strong> People's Colony</p>
                <p><strong>Phone:</strong> +92-41-3456-7890</p>
                <p><strong>Services:</strong> Home care & telemedicine</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Multan</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Coverage:</strong> City center and outskirts</p>
                <p><strong>Local Office:</strong> Cantt Area</p>
                <p><strong>Phone:</strong> +92-61-3456-7890</p>
                <p><strong>Services:</strong> Home care & telemedicine</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-dashed border-gray-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-600">Expanding Soon</h3>
              <div className="space-y-2 text-gray-600">
                <p>• Peshawar</p>
                <p>• Quetta</p>
                <p>• Sialkot</p>
                <p>• Gujranwala</p>
                <p>• Hyderabad</p>
                <p className="text-sm italic">Contact us to check availability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Fill out the form below and we'll get back to you within 24 hours. For urgent matters, please call our helpline.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+92-XXX-XXXXXXX" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select your city</option>
                      <option value="karachi">Karachi</option>
                      <option value="lahore">Lahore</option>
                      <option value="islamabad">Islamabad</option>
                      <option value="rawalpindi">Rawalpindi</option>
                      <option value="faisalabad">Faisalabad</option>
                      <option value="multan">Multan</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed *</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select service type</option>
                      <option value="home-nursing">Home Nursing Care</option>
                      <option value="elderly-care">Elderly Care</option>
                      <option value="telemedicine">Telemedicine Consultation</option>
                      <option value="post-surgery">Post-Surgery Care</option>
                      <option value="chronic-disease">Chronic Disease Management</option>
                      <option value="mother-baby">Mother & Baby Care</option>
                      <option value="physiotherapy">Physiotherapy</option>
                      <option value="general-inquiry">General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Please describe your healthcare needs or questions..."></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Contact Time</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Any time</option>
                      <option value="morning">Morning (8 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 9 PM)</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <label className="ml-2 text-sm text-gray-700">I agree to the <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a></label>
                  </div>
                  
                  <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition">
                    Send Message
                  </button>
                </form>
              </div>
              
              <div className="space-y-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-blue-600">Quick Response Times</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Emergency requests: Immediate response</li>
                    <li>• Urgent care needs: Within 2 hours</li>
                    <li>• General inquiries: Within 24 hours</li>
                    <li>• Service bookings: Same day confirmation</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-green-600">What Happens Next?</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                      <p className="text-gray-600">We'll review your message and contact you within our response time</p>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                      <p className="text-gray-600">Our care coordinator will discuss your needs and recommend services</p>
                    </div>
                    <div className="flex items-start">
                      <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                      <p className="text-gray-600">We'll schedule an assessment and begin your personalized care plan</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3 text-yellow-600">Alternative Contact Methods</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• WhatsApp: +92-300-1234567</li>
                    <li>• Facebook: @CareHomePakistan</li>
                    <li>• Live Chat: Available on our website</li>
                    <li>• Walk-in: Visit our local offices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Our Offices</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Visit our local offices for in-person consultations and support across Pakistan.</p>
          </div>
          
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl mb-4 block">🗺️</span>
              <p className="text-gray-600">Interactive map showing our office locations</p>
              <p className="text-sm text-gray-500 mt-2">Map integration would be implemented here</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}