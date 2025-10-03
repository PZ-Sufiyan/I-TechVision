import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <span className="text-2xl font-bold">ItechVision</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Engineering intelligent solutions that transform industries and drive innovation forward.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {['IoT Solutions', 'Embedded Systems', 'Product Development', 'Smart Manufacturing', 'Circuit Design'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Portfolio', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <span>123 Innovation Drive<br />Tech Hub, CA 94025</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-teal-400" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-teal-400" />
                <span>contact@yourcompany.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 ItechVision. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}