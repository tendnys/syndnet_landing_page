import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, MapPin, Database, TrendingUp, UserSearch, Bell } from 'lucide-react';

export function FeaturesList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: MessageCircle,
      title: 'Natural Language Search',
      description: 'Ask questions in plain English and get instant, accurate property results.'
    },
    {
      icon: MapPin,
      title: 'Geospatial Interface',
      description: 'Interactive maps with parcel-level data, zoning, and environmental overlays.'
    },
    {
      icon: Database,
      title: 'Multi-Source Data Synthesis',
      description: 'Unified data from 158+ million parcels across all 50 states.'
    },
    {
      icon: TrendingUp,
      title: 'Automated Market Research',
      description: 'AI-powered insights on market trends, valuations, and opportunities.'
    },
    {
      icon: UserSearch,
      title: 'One-Click Skip Tracing',
      description: 'Find contact information for property owners instantly.'
    },
    {
      icon: Bell,
      title: 'Buy-Box Alerts',
      description: 'Get notified when properties matching your criteria become available.'
    }
  ];

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-transparent to-blue-900/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            All Features{' '}
            <span className="gradient-text">In One Place</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Powerful tools designed for modern real estate professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gray-900/30 border border-gray-800 rounded-xl hover:bg-gray-900/50 hover:border-gray-700 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
