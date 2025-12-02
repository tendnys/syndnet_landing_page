import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Brain, Workflow } from 'lucide-react';

export function BenefitsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const benefits = [
    {
      icon: Database,
      title: 'Unified Property Intelligence',
      description: '158+ million parcels with comprehensive data, zoning, utilities, and ownership information at your fingertips.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Location Analysis Built on AI',
      description: 'AI surfaces qualified opportunities based on your criteria, analyzing millions of properties in seconds.',
      gradient: 'from-cyan-500 to-purple-500'
    },
    {
      icon: Workflow,
      title: 'Integrated CRM',
      description: 'Deal flow synced in one workspace. Track relationships, opportunities, and close deals faster.',
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
            A Full-Stack{' '}
            <span className="gradient-text">Powerhouse</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Everything you need to discover, analyze, and close real estate deals in one platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="group p-8 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-gray-700 transition-all"
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
