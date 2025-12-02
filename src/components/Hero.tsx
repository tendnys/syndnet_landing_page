import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

function TypewriterHeadline() {
  const [displayedText, setDisplayedText] = useState('');
  const baseText = 'Off-market discovery built on ';
  const highlightedWord = 'geospatial data.';
  const fullText = baseText + highlightedWord;

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Skip animation, show full text immediately
      setDisplayedText(fullText);
      return;
    }

    // Show cursor alone for 0.75 seconds before starting to type
    const initialDelay = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50); // Type speed: 50ms per character

      return () => clearInterval(typingInterval);
    }, 750); // 0.75 second delay before typing starts

    return () => clearTimeout(initialDelay);
  }, []);

  // Split the displayed text to apply gradient to "Conversational"
  const shouldShowGradient = displayedText.length > baseText.length;
  const basePartDisplayed = displayedText.slice(0, baseText.length);
  const highlightPartDisplayed = displayedText.slice(baseText.length);

  return (
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
      {basePartDisplayed}
      {shouldShowGradient && (
        <span className="gradient-text-blue">{highlightPartDisplayed}</span>
      )}
      <span className="cursor-blink ml-1">|</span>
    </h1>
  );
}

export function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65)), url('/images/hero-bg-topo.jpg')"
      }}
    >
      {/* Gradient fade at bottom for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black/90 pointer-events-none z-10" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full"
          >
            <span className="text-sm text-blue-400 font-medium">AUTOMATE SITE ANALYSIS FOR REAL ESTATE</span>
          </motion.div>

          <TypewriterHeadline />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto text-balance"
          >
            Syndnet unifies deal flow, property insight, and pipeline management in one clean interface. A map-first workspace for CRE professionals who want clarity. ScoutGPT, the intelligence engine inside Syndnet, arrives soon.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#cta"
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Start Finding Deals
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#demo"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-all border border-white/10"
            >
              See the Platform
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-600 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
