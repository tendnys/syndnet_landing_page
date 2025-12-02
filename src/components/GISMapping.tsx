import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Map, Layers, Globe, Zap } from 'lucide-react';

export function GISMapping() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Map,
      text: 'Parcel-level visibility'
    },
    {
      icon: Layers,
      text: 'Zoning and environmental overlays'
    },
    {
      icon: Globe,
      text: 'Infrastructure and utility context'
    },
    {
      icon: Zap,
      text: 'Clear insight before underwriting begins'
    }
  ];

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Essential context,{' '}
              <span className="gradient-text">unified in one view.</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Real estate data lives across county portals, PDFs, and scattered tools. Syndnet brings zoning, flood, utilities, and more into a single, streamlined map. Toggle the layers that matter and understand a site at a glance.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 p-2 bg-cyan-500/10 rounded-lg">
                    <feature.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <img
              src="/images/gis-zoning-layers.png"
              alt="GIS Zoning Layers - Interactive property mapping with color-coded zoning overlays"
              className="w-full h-auto rounded-xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
