
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Process', href: '#process' },
    { label: 'Services', href: '#services' },
    { label: 'Who We Help', href: '#who' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-blue-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl md:text-3xl font-bold text-blue-800 tracking-tight">
              TechConnect <span className="text-orange-600">OT</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-bold text-gray-800 hover:text-blue-700 hover:underline decoration-4 transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-700 text-white px-6 py-2 rounded-full text-lg font-bold hover:bg-blue-800 shadow-lg"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-3xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b-2 border-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-4 text-xl font-bold text-gray-800 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
