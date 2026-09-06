import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, Code, Terminal, Globe, MessageSquare, 
  Monitor, Rocket, Cpu, Palette, Calculator, 
  FlaskConical, ArrowRight
} from 'lucide-react';
import { novaSkills } from '../data/programmeData';
import { skillCoursePricing } from '../data/pricingData';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Map icon names to actual Lucide components
const iconMap: Record<string, any> = {
  Brain, Code, Terminal, Globe, MessageSquare, 
  Monitor, Rocket, Cpu, Palette, Calculator, FlaskConical
};

export default function RoyalNovaPage() {
  const [revealRef, isVisible] = useScrollReveal();

  const processSteps = [
    { title: 'Free Assessment', desc: 'Identify your current standing.' },
    { title: 'Goal Discussion', desc: 'Where do you want to go?' },
    { title: 'Custom Curriculum', desc: 'Tailored specifically for you.' },
    { title: 'Personalized Quote', desc: 'Pay only for what you learn.' },
    { title: 'Enrolment', desc: 'Begin your specialized journey.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Royal Nova" 
        subtitle="Your Skills. Your Path. Your Future."
      />
      
      {/* Tagline Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center" ref={revealRef}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-jakarta font-bold leading-tight"
          >
            Choose what you want to learn. Build the skills you need.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto"
          >
            You don't need to learn everything. Choose the skills you actually need. Whether you're in Grade 9, a university student, or a professional, we create a path for you.
          </motion.p>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 text-center">
            {['Grade 9+', 'School Graduates', 'University Students', 'Young Adults', 'Professionals', 'Lifelong Learners'].map((aud, i) => (
              <span key={i} className="bg-white/20 text-white px-6 py-2 rounded-full font-medium backdrop-blur-sm">
                {aud}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Available Skill Modules" 
            description="Select the specific competencies you want to master to build your custom curriculum."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
            {novaSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || Brain;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-navy-800 to-teal-600 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3 font-jakarta">{skill.name}</h3>
                  <p className="text-sm text-slate-600 mb-4">{skill.description}</p>
                  <Link to="/royal-nova/query" className="text-teal-600 font-semibold text-sm flex items-center gap-1 hover:text-teal-700 transition-colors">
                    Add to Plan <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="How It Works" align="center" />
          
          <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>
            
            {processSteps.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5 mb-8 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-lg ring-4 ring-white">
                  {i + 1}
                </div>
                <h4 className="font-bold text-navy-900 mb-2 font-jakarta">{step.title}</h4>
                <p className="text-sm text-slate-500 px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-jakarta font-bold mb-4">Flexible Pricing</h2>
            <p className="text-slate-300">Because your curriculum is custom-built, your fees are too. You only pay for the modules you select.</p>
          </div>
          
          <div className="bg-navy-800 rounded-2xl p-8 border border-navy-700">
            <div className="space-y-4">
              {Object.values(skillCoursePricing).map((item, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-navy-700 last:border-0">
                  <span className="font-bold text-white text-lg">{item.label}</span>
                  <span className="text-teal-400 font-semibold text-lg">{(item as any).aedRange || (item as any).description}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-navy-700 text-center">
              <p className="text-sm text-slate-400 mb-6">
                *Final fees depend on the combination of skills chosen, duration, and baseline assessment results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/royal-nova/query" className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Request Custom Quote
                </Link>
                <Link to="/royal-nova/query" className="bg-transparent border border-teal-500 text-teal-400 hover:bg-teal-500/10 px-8 py-3 rounded-lg font-medium transition-colors">
                  Request Learning Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection 
        title="Take Control of Your Future" 
        description="Stop learning what you don't need. Start building the skills that matter." 
        primaryButtonText="Start Now"
        primaryButtonLink="/royal-nova/query"
      />
    </div>
  );
}
