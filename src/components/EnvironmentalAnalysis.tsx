import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ScreenshotPlaceholder } from './ProductImage';
import { Droplets, AlertTriangle, CheckCircle, FileText } from 'lucide-react';

export function EnvironmentalAnalysis() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Droplets,
      text: 'Flood zone mapping'
    },
    {
      icon: AlertTriangle,
      text: 'Environmental overlays'
    },
    {
      icon: CheckCircle,
      text: 'Utility access analysis'
    },
    {
      icon: FileText,
      text: 'Automated feasibility reports'
    }
  ];

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Automated{' '}
            <span className="gradient-text">Site Analysis</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            AI evaluates buildability, constraints, utilities, and zoning automatically. Identify flood zones, environmental risks, and development opportunities with one click.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <ScreenshotPlaceholder title="Flood Zone Analysis" className="max-w-5xl mx-auto transform hover:scale-[1.02] transition-transform duration-500" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-black/60 backdrop-blur-lg border border-white/10 rounded-xl text-center hover:bg-black/70 hover:border-white/20 transition-all"
            >
              <div className="inline-flex p-3 bg-purple-500/10 rounded-lg mb-4">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-gray-300 text-sm">{feature.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
