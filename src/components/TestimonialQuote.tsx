import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

export function TestimonialQuote() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative p-12 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl"
        >
          <Quote className="absolute top-8 left-8 w-12 h-12 text-blue-500/20" />
          <blockquote className="relative z-10 text-center">
            <p className="text-2xl md:text-3xl font-medium text-gray-100 mb-8 leading-relaxed">
              "We're automating parcel analysis, zoning interpretation, GIS overlays, and ownership - while flagging debt maturities, distress, and highest-and-best-use potential..."
            </p>
            <footer className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                F
              </div>
              <div>
                <div className="font-semibold text-white">Founder</div>
                <div className="text-sm text-gray-400">CRE Investor</div>
              </div>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
