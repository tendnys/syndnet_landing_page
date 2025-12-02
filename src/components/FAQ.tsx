import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What types of properties can I search?',
      answer: 'You can search across all property types including commercial, residential, multifamily, land, industrial, retail, and special purpose properties. Our database covers 158+ million parcels across all 50 states.'
    },
    {
      question: 'Do I need any technical or GIS experience?',
      answer: 'No technical experience required. ScoutGPT uses natural language processing, so you can simply ask questions in plain English. Our intuitive interface makes complex GIS analysis accessible to everyone.'
    },
    {
      question: 'Which markets do you cover?',
      answer: 'We provide nationwide coverage across all 50 states with over 158 million parcels. Coverage depth varies by market, with enhanced data available in major metropolitan areas.'
    },
    {
      question: 'How current is your data?',
      answer: 'Our data is updated regularly from multiple authoritative sources. Property records, ownership information, and GIS layers are refreshed on a rolling basis to ensure you always have access to the most current information available.'
    },
    {
      question: 'Is my data and search history secure?',
      answer: 'Yes, we take security seriously. All data is encrypted in transit and at rest. Your searches, saved properties, and CRM data are private and never shared with third parties. We comply with industry-standard security practices and regulations.'
    }
  ];

  return (
    <section ref={ref} id="faq" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Everything you need to know.</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="bg-black/60 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-black/70 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
