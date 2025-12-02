import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Brain, Workflow } from 'lucide-react';

export function BenefitsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const benefits = [
    {
      icon: Database,
      title: 'Intelligence',
      description: 'Property data, ownership details, and zoning overlays. Unified in a clean, map-first view.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Analysis',
      description: 'Geospatial layers reveal conditions and constraints that shape every opportunity.',
      gradient: 'from-cyan-500 to-purple-500'
    },
    {
      icon: Workflow,
      title: 'Pipeline',
      description: 'Save deals, track progress, and manage conversations in one connected workspace.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section ref={ref} id="features" className="section-padding bg-gradient-to-b from-purple-900/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Your map. Your market.{' '}
            <span className="gradient-text">Your deal flow.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Everything begins on the map. Search markets, explore opportunities, evaluate sites, and keep your pipeline organized. Syndnet brings the essentials together so you can work with confidence and see every deal in context.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="group p-8 bg-black/60 backdrop-blur-lg border border-white/10 rounded-2xl hover:border-white/20 hover:bg-black/70 transition-all"
            >
              <div className={`inline-flex p-4 bg-gradient-to-br ${benefit.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
