import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Compass, Rocket } from 'lucide-react';

export function ProcessWorkflow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discover',
      description: 'Browse off-market deals or explore properties directly on the map. Filter by fundamentals and set alerts for what fits your strategy.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      icon: Compass,
      title: 'Evaluate',
      description: 'Toggle zoning, flood, utilities, and environmental context. Understand the site before the underwriting begins.',
      color: 'from-cyan-500 to-purple-500'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Act',
      description: 'Save deals to your pipeline, manage conversations, and position yourself for ScoutGPT intelligence when it arrives.',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            From discovery to close,{' '}
            <span className="gradient-text">without friction.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Three steps from opportunity to action
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.2 }}
              className="relative"
            >
              <div className="text-center">
                <div className={`inline-flex w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl items-center justify-center mb-6 transform hover:scale-110 transition-transform`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-6xl font-bold text-gray-800 mb-4">{step.number}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-700 to-transparent -ml-4" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
