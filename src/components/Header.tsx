import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">
                A&K DreamTrade<span className="text-gray-700">LLC</span>
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Home
              </a>
              <a href="#platforms" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Platforms
              </a>
              <a href="#services" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Services
              </a>
              <a href="#about" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                About Us
              </a>
              <a href="#contact" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="#platforms" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Platforms
            </a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Services
            </a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              About Us
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </a>
          </div>
        </div>}
    </header>;
};
export default Header;