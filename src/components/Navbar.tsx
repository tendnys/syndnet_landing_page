import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Quick fade: transparent after scrolling just 100px
      // 1 at top (0px), 0 after 100px
      const fadeDistance = 100;
      const opacity = Math.max(0, 1 - (scrollPosition / fadeDistance));
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* Navbar with scroll-based fade effect */}
      <nav
        className="backdrop-blur-lg border-b border-white/10 transition-all duration-300"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${0.6 * scrollOpacity})`
        }}
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
              Platform
            </a>
            <a
              href="#features"
              className="text-xs font-medium tracking-[0.18em] uppercase text-slate-100/80 hover:text-white transition-colors"
            >
              Marketplace
            </a>
            <a
              href="#features"
              className="text-xs font-medium tracking-[0.18em] uppercase text-slate-100/80 hover:text-white transition-colors"
            >
              GIS
            </a>
            <a
              href="#features"
              className="text-xs font-medium tracking-[0.18em] uppercase text-slate-100/80 hover:text-white transition-colors"
            >
              AI
            </a>
            <a
              href="#pricing"
              className="text-xs font-medium tracking-[0.18em] uppercase text-slate-100/80 hover:text-white transition-colors"
            >
              Pricing
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#contact"
              className="text-xs font-medium tracking-[0.18em] uppercase text-slate-100/80 hover:text-white transition-colors"
            >
              Login
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
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-4 space-y-3">
              <a
                href="#features"
                className="block text-xs font-medium tracking-[0.18em] uppercase text-slate-100/80 hover:text-white py-2"
              >
                Platform
              </a>
              <a
                href="#features"
                className="block text-xs font-medium tracking-[0.18em] uppercase text-slate-100/80 hover:text-white py-2"
              >
                Marketplace
              </a>
              <a
                href="#features"
                className="block text-xs font-medium tracking-[0.18em] uppercase text-slate-100/80 hover:text-white py-2"
              >
                GIS
              </a>
              <a
                href="#features"
                className="block text-xs font-medium tracking-[0.18em] uppercase text-slate-100/80 hover:text-white py-2"
              >
                AI
              </a>
              <a
                href="#pricing"
                className="block text-xs font-medium tracking-[0.18em] uppercase text-slate-100/80 hover:text-white py-2"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="block text-xs font-medium tracking-[0.18em] uppercase text-slate-100/80 hover:text-white py-2"
              >
                Login
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
