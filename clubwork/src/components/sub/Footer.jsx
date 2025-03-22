import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold ">Avensis</h3>
            <p>Regional Convention 2025</p>
            <p className="text-gray-400 mb-4">
              Join us for an unforgettable experience of innovation, learning, and networking at Anurag University, Hyderabad.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.instagram.com/csichapter_au?igsh=c2l5N3Qzc3MwdDJi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-purple-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/company/computer-society-of-india-hyderabad-chapter/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Anurag University</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gray-400 flex-shrink-0" />
                <a href="tel:+916302259493" className="text-gray-400 hover:text-white transition-colors">
                  +91 6302259493
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gray-400 flex-shrink-0" />
                <a href="mailto:info@studentconvention.com" className="text-gray-400 hover:text-white transition-colors">
                  info@studentconvention.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-neutral-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} Avensis Regional Convention. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;