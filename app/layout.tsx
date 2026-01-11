"use client";
// import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script';

declare global {
  interface Window {
    CustomerAgentWidget?: {
      init: (config: { websiteId: number; apiUrl: string }) => void;
    };
  }
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {/* Header Navigation */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-blue-600">CareHome</div>
                <div className="text-sm text-gray-600 ml-2">Pakistan</div>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-gray-700 hover:text-blue-600 transition">Home</a>
                <a href="/services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
                <a href="/telemedicine" className="text-gray-700 hover:text-blue-600 transition">Telemedicine</a>
                <a href="/about" className="text-gray-700 hover:text-blue-600 transition">About</a>
                <a href="/pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
                <a href="/resources" className="text-gray-700 hover:text-blue-600 transition">Resources</a>
                <a href="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
              </div>
              
              <div className="flex items-center space-x-4">
                <a href="tel:+92211234567" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Call Now
                </a>
                <button className="md:hidden">
                  <span className="sr-only">Open menu</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Mobile Menu */}
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2 pt-4">
                <a href="/" className="text-gray-700 hover:text-blue-600 transition py-2">Home</a>
                <a href="/services" className="text-gray-700 hover:text-blue-600 transition py-2">Services</a>
                <a href="/telemedicine" className="text-gray-700 hover:text-blue-600 transition py-2">Telemedicine</a>
                <a href="/about" className="text-gray-700 hover:text-blue-600 transition py-2">About</a>
                <a href="/pricing" className="text-gray-700 hover:text-blue-600 transition py-2">Pricing</a>
                <a href="/resources" className="text-gray-700 hover:text-blue-600 transition py-2">Resources</a>
                <a href="/contact" className="text-gray-700 hover:text-blue-600 transition py-2">Contact</a>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <div className="text-2xl font-bold text-blue-400">CareHome</div>
                  <div className="text-sm text-gray-400 ml-2">Pakistan</div>
                </div>
                <p className="text-gray-400 mb-4">Professional healthcare services delivered to your home with compassion and expertise.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
                  <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
                  <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="/services" className="text-gray-400 hover:text-white transition">Home Nursing Care</a></li>
                  <li><a href="/services" className="text-gray-400 hover:text-white transition">Elderly Care</a></li>
                  <li><a href="/telemedicine" className="text-gray-400 hover:text-white transition">Telemedicine</a></li>
                  <li><a href="/services" className="text-gray-400 hover:text-white transition">Post-Surgery Care</a></li>
                  <li><a href="/services" className="text-gray-400 hover:text-white transition">Chronic Disease Management</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                  <li><a href="/pricing" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                  <li><a href="/resources" className="text-gray-400 hover:text-white transition">Patient Resources</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
                  <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <div className="space-y-2 text-gray-400">
                  <p>📞 +92-21-1234-5678</p>
                  <p>🚨 +92-21-EMERGENCY</p>
                  <p>✉️ info@carehome.pk</p>
                  <p>📍 Clifton, Karachi, Pakistan</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">Available 24/7</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-400">© 2024 CareHome Pakistan. All rights reserved.</p>
              <p className="text-sm text-gray-500 mt-2">Licensed healthcare provider • PMDC registered doctors • Serving Pakistan with quality care</p>
            </div>
          </div>
        </footer>
                <Script
  src="https://synovially-screwed-phebe.ngrok-free.dev/static/widget.js"
  strategy="afterInteractive"
  onLoad={() => {
    if (window.CustomerAgentWidget) {
      window.CustomerAgentWidget.init({
        websiteId: 21,
        apiUrl: "https://synovially-screwed-phebe.ngrok-free.dev"
      });
    }
  }}
/>
      </body>
    </html>
  )
}