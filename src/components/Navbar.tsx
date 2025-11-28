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
    <header className="w-full">
      {/* Transparent navbar with optional backdrop blur on scroll */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-sm bg-slate-900/40'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 lg:px-12">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/images/White Txt Logo.png"
                alt="Syndnet"
                className="h-7 object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-xs font-medium tracking-[0.18em] uppercase text-slate-100/80 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-xs font-medium tracking-[0.18em] uppercase text-slate-100/80 hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-xs font-medium tracking-[0.18em] uppercase text-slate-100/80 hover:text-white transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#contact"
              className="text-xs font-medium tracking-[0.18em] uppercase text-slate-100/80 hover:text-white transition-colors"
            >
              Log in
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-slate-900 shadow-sm hover:bg-slate-100 transition-colors"
            >
              Sign Up
              <span className="text-[10px]">▶</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800">
            <div className="px-6 py-4 space-y-3">
              <a
                href="#features"
                className="block text-xs font-medium tracking-[0.18em] uppercase text-slate-100/80 hover:text-white py-2"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block text-xs font-medium tracking-[0.18em] uppercase text-slate-100/80 hover:text-white py-2"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="block text-xs font-medium tracking-[0.18em] uppercase text-slate-100/80 hover:text-white py-2"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="block text-xs font-medium tracking-[0.18em] uppercase text-slate-100/80 hover:text-white py-2"
              >
                Log in
              </a>
              <a
                href="#cta"
                className="block w-full mt-4 px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase text-slate-900 bg-white hover:bg-slate-100 rounded-md text-center transition-colors"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
