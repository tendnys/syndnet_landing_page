import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-25">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

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

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
          >
            The Future of Real Estate is{' '}
            <span className="gradient-text">Conversational</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto text-balance"
          >
            ScoutGPT combines nationwide property data, advanced GIS mapping, and AI-powered analytics—so you can find, evaluate and act faster than ever before.
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
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#demo"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-all border border-white/10"
            >
              Request Demo
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
