import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Monitor, Heart, Users, ChevronRight, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { programmes, learningAreas } from '../data/programmeData';

const CurriculumPage: React.FC = () => {
  const [ref, isVisible] = useScrollReveal();
  const [activeTab, setActiveTab] = useState(programmes[0].id);

  return (
    <div className="bg-sand-50 min-h-screen pt-24">
      <PageHero 
        title="Curriculum" 
        subtitle="A Complete Learning Ecosystem"
      />

      <section className="py-20 px-6 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Our Learning Areas" subtitle="A holistic approach to education" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { title: 'Academics', icon: <BookOpen />, data: learningAreas.academics.subjects },
              { title: 'Technology & AI', icon: <Monitor />, data: learningAreas.technology.progression.map(p => p.stage) },
              { title: 'Faith, Values & Character', icon: <Heart />, data: learningAreas.faithValues.universal.areas.slice(0, 5) },
              { title: 'Life & Civic Skills', icon: <Users />, data: learningAreas.lifeSkills.skills.slice(0, 5) }
            ].map((area, idx) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-sand-50 p-6 rounded-2xl border border-cream-50"
              >
                <div className="text-teal-600 mb-4">{area.icon}</div>
                <h3 className="text-lg font-bold text-navy-900 mb-4">{area.title}</h3>
                <ul className="space-y-2">
                  {area.data.map((item: string) => (
                    <li key={item} className="flex items-start text-sm text-navy-700">
                      <ChevronRight className="w-4 h-4 text-accent-gold mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Programme Comparison" subtitle="Find the right path for your child" light />
          
          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center mb-8">
            {programmes.map(prog => (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                className={`px-6 py-3 rounded-full font-bold transition-all ${
                  activeTab === prog.id 
                    ? 'bg-teal-500 text-white' 
                    : 'bg-navy-800 text-cream-50 hover:bg-navy-700'
                }`}
              >
                {prog.name} ({prog.grades})
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
            {programmes.filter(p => p.id === activeTab).map(prog => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-3xl font-heading font-bold text-navy-900 mb-4">{prog.name}</h3>
                <p className="text-xl text-teal-600 mb-6 font-semibold">{prog.grades}</p>
                <p className="text-navy-700 mb-8 text-lg">{prog.description}</p>
                
                <h4 className="font-bold text-navy-900 mb-4 text-xl">Key Focus Areas</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {prog.focus.map(focus => (
                    <div key={focus} className="flex items-center text-navy-800">
                      <CheckCircle2 className="w-5 h-5 text-teal-500 mr-3" />
                      {focus}
                    </div>
                  ))}
                </div>
                <Link 
                  to={prog.id === 'nova' ? '/nova' : `/${prog.id}`}
                  className="inline-block bg-navy-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-colors"
                >
                  Explore Programme
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Start Learning?"
        description="Explore our programmes or book an assessment to get started."
        primaryButtonText="Book Assessment"
        primaryButtonLink="/free-assessment"
        secondaryButtonText="Explore Programmes"
        secondaryButtonLink="/programmes"
      />
    </div>
  );
};

export default CurriculumPage;
