import React from 'react';
import { Network, Cpu, GraduationCap, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const TrustStrip: React.FC = () => {
  const items = [
    {
      icon: <Network className="w-6 h-6 text-teal-600" />,
      text: 'Structured Learning Ecosystem',
    },
    {
      icon: <Cpu className="w-6 h-6 text-teal-600" />,
      text: 'Academics + Technology + Communication',
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-teal-600" />,
      text: 'KG to Grade 8 & Beyond',
    },
    {
      icon: <Users className="w-6 h-6 text-teal-600" />,
      text: 'Gulf Families Trust Us',
    },
  ];

  return (
    <section className="bg-cream-50 border-b border-sand-50/50 py-6 px-4 z-20 relative shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center space-x-3 text-center md:text-left"
            >
              <div className="flex-shrink-0 bg-white p-2 rounded-full shadow-sm border border-sand-50">
                {item.icon}
              </div>
              <span className="font-semibold text-navy-800 text-sm md:text-base leading-tight">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
