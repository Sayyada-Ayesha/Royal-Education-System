import React from 'react';
import { Network, Cpu, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const TrustStrip: React.FC = () => {
  const items = [
    {
      icon: <Network className="w-5 h-5 text-champagne-600" />,
      text: 'A Unified Learning System',
    },
    {
      icon: <Cpu className="w-5 h-5 text-champagne-600" />,
      text: 'From Knowledge to Real-World Capability',
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-champagne-600" />,
      text: 'KG to Grade 8 & Beyond',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-champagne-600" />,
      text: 'Build the Skills. Build Your Future.',
    },
  ];

  return (
    <section className="bg-pearl-100 border-b border-ink-100/8 py-5 px-4 z-20 relative shadow-sm">
      <div className="site-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-center justify-center sm:justify-start space-x-3 text-center sm:text-left p-2"
            >
              <div className="flex-shrink-0 bg-white p-2 rounded-xl shadow-sm border border-ink-100/8">
                {item.icon}
              </div>
              <span className="font-semibold text-ink-950 text-xs md:text-sm leading-snug">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
