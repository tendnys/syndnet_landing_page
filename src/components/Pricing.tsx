import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Core - $50/month',
      price: 50,
      description: 'Perfect for getting started.',
      features: [
        'Off-market marketplace',
        'Interactive property map',
        'Unified GIS context',
        'Buy Box alerts',
        'Deal pipeline',
        'Messaging'
      ],
      cta: 'Start Now',
      popular: false
    },
    {
      name: 'Elite - Coming soon',
      price: null,
      description: 'For teams and power users.',
      features: [
        'Everything in Core',
        'ScoutGPT intelligence',
        'Automated analysis',
        'Skip tracing',
        'Priority access'
      ],
      cta: 'Join Waitlist',
      popular: true
    },
    {
      name: 'Listing Ad - $399',
      price: 399,
      priceLabel: '',
      description: 'Promote your property.',
      features: [
        '1 Featured Listing (90 days)',
        'Top placement across search',
        'Direct messaging',
        'Listing analytics'
      ],
      cta: 'List Property',
      popular: false
    }
  ];

  return (
    <section ref={ref} id="pricing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Flexible Plans for{' '}
            <span className="gradient-text">Everyone</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Choose the perfect plan for your needs
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-gray-900/50 border border-gray-800 rounded-full">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                !isAnnual
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                isAnnual
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly <span className="text-xs text-green-400">Save 20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`relative p-8 rounded-2xl backdrop-blur-lg ${
                plan.popular
                  ? 'bg-gradient-to-b from-blue-600/30 to-purple-600/30 border-2 border-blue-500'
                  : 'bg-black/60 border border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    POPULAR
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  {plan.price !== null ? (
                    <>
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.priceLabel || (isAnnual ? 'year' : 'month')}</span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-gray-400">Pricing TBA</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`block w-full py-3 text-center font-medium rounded-lg transition-all ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          We donate 2% of your membership to pediatric wellbeing
        </motion.p>
      </div>
    </section>
  );
}
