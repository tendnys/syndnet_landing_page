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
      title: 'Discover & Analyze',
      description: 'Start with a question or search criteria. Our AI instantly analyzes millions of properties to find perfect matches.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      icon: Compass,
      title: 'Explore & Refine',
      description: 'Review results on an interactive map. Access deep property intelligence, ownership data, and market insights.',
      color: 'from-cyan-500 to-purple-500'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Act & Close',
      description: 'Save leads, reach out to owners with skip tracing, and track opportunities through your entire pipeline.',
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
            Uncovers Opportunities{' '}
            <span className="gradient-text">Behind Every Parcel</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            From discovery to deal close in three simple steps
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
