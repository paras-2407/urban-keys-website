import React from 'react';
import { Home, Phone, Mail, MapPin, Instagram, Linkedin} from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="public\image\UKI logo.png"
                alt="Urban Keys Infra Logo"
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold">
                Urban Keys Infra
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in real estate. We help you navigate the
              market with confidence and find the perfect property for your
              needs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/urbankeysinfra" // <-- ADD YOUR INSTAGRAM LINK
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/urban-keys-infra" // <-- ADD YOUR LINKEDIN LINK
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("properties")}
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Home Buying</li>
              <li>Home Selling</li>
              <li>Property Management</li>
              <li>Market Analysis</li>
              <li>Investment Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-1" />
                <div className="text-gray-300">
                  <p>D-268, Suncity Township</p>
                  <p>Sikar Road, Jaipur, Raj.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <span className="text-gray-300">+91 98281 59175</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <span className="text-gray-300">urbankeysinfra@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Visit Our Office
          </h3>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.745768447527!2d75.75257799573623!3d27.038198312920727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dad85ad44627f%3A0xec04fce976811b65!2sGoyal%20Lifetime%20Properties!5e0!3m2!1sen!2sin!4v1754414937613!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Office Location"
            ></iframe>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 UKI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;