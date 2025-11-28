import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ScreenshotPlaceholder } from './ProductImage';
import { MessageSquare, TrendingUp, Search, Database } from 'lucide-react';

export function AISearchShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: MessageSquare,
      text: 'AI understands complex real estate queries'
    },
    {
      icon: TrendingUp,
      text: 'Instant property analysis and market insights'
    },
    {
      icon: Database,
      text: 'Automated loan maturity tracking'
    },
    {
      icon: Search,
      text: 'Highest-and-best-use recommendations'
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
          >
            <ScreenshotPlaceholder title="AI Chat Interface" className="transform hover:scale-[1.02] transition-transform duration-500" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Natural Language{' '}
              <span className="gradient-text">Property Search</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Ask questions like you're talking to an expert. Find Multi-Family properties with maturing debt, identify distressed assets, or discover infill development opportunities—all through conversational AI.
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
                  <div className="mt-1 p-2 bg-blue-500/10 rounded-lg">
                    <feature.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-gray-300">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
