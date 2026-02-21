import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-1 text-2xl font-bold mb-4">
              <span className="text-white">Nova</span>
              <span className="text-red-600">Gadgets</span>
            </div>
            <p className="text-sm text-red-600 italic mb-2">Elegance In Every Device</p>
            <p className="text-gray-400 mb-4">
              Your trusted partner for all mobile phone needs. Quality products and services since day one.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-red-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-red-600 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-red-600 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-red-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">New Phones</li>
              <li className="text-gray-400">Used Phones</li>
              <li className="text-gray-400">Accessories</li>
              <li className="text-gray-400">Phone Repair</li>
              <li className="text-gray-400">Phone Swaps</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-red-600 mt-0.5" />
                <span className="text-gray-400">+256 753 719042</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-red-600 mt-0.5" />
                <span className="text-gray-400">terbryan1@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                <span className="text-gray-400">Kampala, Luweero, Gayaza</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Nova Gadgets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}