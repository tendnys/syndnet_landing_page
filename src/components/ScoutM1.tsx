import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ScreenshotPlaceholder } from './ProductImage';
import { Sparkles } from 'lucide-react';

export function ScoutM1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const queries = [
    'Show me self-storage properties owned 5+ years',
    'Find recent multifamily buyers in Dallas',
    'Which properties have absentee owners?',
    'List commercial land with highway access'
  ];

  const modes = ['M1', 'M2', 'M3', 'M4'];

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">SCOUT M1: THE DISCOVERY ENGINE</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            4 AI Search Modes,{' '}
            <span className="gradient-text">Unlimited Possibilities</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Searches nationwide, understands complex criteria, and delivers comprehensive property data instantly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="space-y-4 mb-8">
              {queries.map((query, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-4 bg-black/60 backdrop-blur-lg border border-white/10 rounded-xl hover:border-blue-500/50 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform" />
                    <p className="text-gray-300">{query}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex gap-2">
              {modes.map((mode, index) => (
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex-1 px-4 py-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg text-center font-semibold"
                >
                  {mode}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <ScreenshotPlaceholder title="Property Details" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
