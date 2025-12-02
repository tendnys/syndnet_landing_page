import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Database, TrendingUp, Bell, Map, Layers, Workflow, MessageSquare, BarChart, FileText, Brain, Users, MessageCircle, Briefcase, Network } from 'lucide-react';

export function FeaturesList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: MapPin,
      title: 'Off-market marketplace',
      description: 'Available Now',
      badge: null
    },
    {
      icon: Map,
      title: 'Interactive geospatial interface',
      description: 'Available Now',
      badge: null
    },
    {
      icon: Database,
      title: 'Unified property context',
      description: 'Available Now',
      badge: null
    },
    {
      icon: Workflow,
      title: 'Pipeline CRM',
      description: 'Available Now',
      badge: null
    },
    {
      icon: Bell,
      title: 'Buy Box alerts',
      description: 'Available Now',
      badge: null
    },
    {
      icon: Layers,
      title: 'Parcel-level visibility',
      description: 'Available Now',
      badge: null
    },
    {
      icon: MessageSquare,
      title: 'Natural-language property search',
      description: 'Coming Soon',
      badge: 'AI'
    },
    {
      icon: BarChart,
      title: 'Motivation scoring',
      description: 'Coming Soon',
      badge: 'AI'
    },
    {
      icon: FileText,
      title: 'Automated zoning interpretation',
      description: 'Coming Soon',
      badge: 'AI'
    },
    {
      icon: TrendingUp,
      title: 'Comparable sales analysis',
      description: 'Coming Soon',
      badge: 'AI'
    },
    {
      icon: Brain,
      title: 'AI-driven feasibility',
      description: 'Coming Soon',
      badge: 'AI'
    },
    {
      icon: Users,
      title: 'Groups',
      description: 'Future',
      badge: null
    },
    {
      icon: MessageCircle,
      title: 'Forums',
      description: 'Future',
      badge: null
    },
    {
      icon: Briefcase,
      title: 'Deal rooms',
      description: 'Future',
      badge: null
    },
    {
      icon: Network,
      title: 'Community-driven insights',
      description: 'Future',
      badge: null
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
            The off-market marketplace{' '}
            <span className="gradient-text">built on geospatial data.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            CRE professionals nationwide share and discover opportunities on a platform where every listing lives exactly where it should. On the map. Filter by what matters, explore the surrounding context, and move the right deals into your pipeline with ease.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-black/60 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-black/70 hover:border-white/20 transition-all group"
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
