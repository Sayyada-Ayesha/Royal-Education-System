import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Book, Star, Users2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { quranProgramme } from '../data/pricingData';

const FaithValuesPage: React.FC = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div className="bg-cream-50 min-h-screen pt-24">
      <PageHero 
        title="Faith, Values & Character" 
        subtitle="Building Character That Lasts"
      />

      <section className="py-20 px-6 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Our Pathways" subtitle="Respectful, inclusive, and values-driven education for all" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            {/* Pathway 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-sand-50 rounded-3xl p-8 md:p-12 border border-cream-50 shadow-sm"
            >
              <div className="w-16 h-16 bg-teal-100 text-teal-700 rounded-2xl flex items-center justify-center mb-6">
                <Book className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-navy-900 mb-6">For Muslim Learners</h3>
              <p className="text-navy-700 text-lg mb-8">
                A comprehensive approach integrating faith and values into daily life.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {['Quran Reading', 'Quran Understanding', 'Quranic Concepts', 'Prophetic Stories', 'Islamic Values', 'Akhlaq', 'Honesty', 'Discipline', 'Responsibility'].map(item => (
                  <li key={item} className="flex items-center text-navy-800 font-medium">
                    <Star className="w-4 h-4 text-accent-gold mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-white p-6 rounded-xl border border-teal-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-navy-900">Quran Programme (Optional)</h4>
                  <p className="text-sm text-navy-600">Specialized Hifz & Tajweed</p>
                </div>
                <div className="text-right">
                  <span className="block font-bold text-teal-600">From AED {quranProgramme.fromAed}</span>
                  <span className="text-xs text-navy-500">/ month</span>
                </div>
              </div>
            </motion.div>

            {/* Pathway 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-navy-900 rounded-3xl p-8 md:p-12 shadow-sm text-cream-50"
            >
              <div className="w-16 h-16 bg-navy-800 text-accent-gold rounded-2xl flex items-center justify-center mb-6">
                <Users2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-white mb-6">For All Learners</h3>
              <p className="text-navy-100 text-lg mb-8">
                Building a strong moral compass, empathy, and solid character traits for global citizens.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Faith Awareness', 'Ethics', 'Morality', 'Empathy', 'Respect', 'Responsibility', 'Character Development', 'Digital Citizenship'].map(item => (
                  <li key={item} className="flex items-center text-navy-50 font-medium">
                    <HeartHandshake className="w-4 h-4 text-teal-400 mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Develop Strong Character"
        description="Join an educational system that values character as much as academics."
        primaryButtonText="Learn More"
        primaryButtonLink="/query"
        secondaryButtonText="Book Assessment"
        secondaryButtonLink="/book-assessment"
      />
    </div>
  );
};

export default FaithValuesPage;
