import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/80 backdrop-blur-xl border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-xl font-bold">
              <span className="gradient-text">ScoutGPT</span>
            </a>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-sm text-gray-300 hover:text-white transition-colors">
                FAQ
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="#cta"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Get Started
            </a>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800">
          <div className="px-6 py-4 space-y-3">
            <a href="#features" className="block text-sm text-gray-300 hover:text-white">
              Features
            </a>
            <a href="#pricing" className="block text-sm text-gray-300 hover:text-white">
              Pricing
            </a>
            <a href="#faq" className="block text-sm text-gray-300 hover:text-white">
              FAQ
            </a>
            <a href="#contact" className="block text-sm text-gray-300 hover:text-white">
              Contact
            </a>
            <a
              href="#cta"
              className="block w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
