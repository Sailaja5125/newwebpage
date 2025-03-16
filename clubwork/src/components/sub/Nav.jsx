"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-neutral-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-7">
            <img src="/img/AU.png" alt="logo" className="w-30 h-10" />
            <img src="/img/csikalogo.png" className="w-30 h-20" alt="Csi logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Domains</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Sponsors</a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                Register
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button 
              className="text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-neutral-800 transition-all duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700 transition-colors"
            >
              Home
            </a>
            <a 
              href="#" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700 transition-colors"
            >
              Domains
            </a>
            <a 
              href="#" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700 transition-colors"
            >
              Sponsors
            </a>
            <a 
              href="#" 
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors w-full text-left">
                Register
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
