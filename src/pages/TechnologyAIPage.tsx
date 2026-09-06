import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, CircuitBoard, BrainCircuit, Code2, Rocket } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TechnologyAIPage: React.FC = () => {
  const [ref, isVisible] = useScrollReveal();

  const techProgression = [
    {
      title: 'Computer Fundamentals',
      icon: <Cpu className="w-8 h-8 text-teal-600" />,
      outcome: 'Master digital literacy and basic computer operations.'
    },
    {
      title: 'Coding Foundations',
      icon: <Terminal className="w-8 h-8 text-teal-600" />,
      outcome: 'Build your first interactive game using Scratch and block-based coding.'
    },
    {
      title: 'Creative Computing',
      icon: <CircuitBoard className="w-8 h-8 text-teal-600" />,
      outcome: 'Design and test a virtual circuit using Tinkercad and Micro:bit.'
    },
    {
      title: 'AI Literacy',
      icon: <BrainCircuit className="w-8 h-8 text-teal-600" />,
      outcome: 'Understand AI, use it responsibly, and build useful projects.'
    },
    {
      title: 'Applied Development',
      icon: <Code2 className="w-8 h-8 text-teal-600" />,
      outcome: 'Create real-world applications using Python and Web Technologies.'
    },
    {
      title: 'Applied AI & Projects',
      icon: <Rocket className="w-8 h-8 text-teal-600" />,
      outcome: 'Build innovative AI-powered projects solving real problems.'
    }
  ];

  return (
    <div className="bg-sand-50 min-h-screen pt-24">
      <PageHero 
        title="Technology & AI" 
        subtitle="From Digital Foundations to Applied AI"
      />

      <section className="py-20 px-6 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Our Technology Pathway" subtitle="A structured journey from basics to advanced AI" />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-teal-100 -translate-y-1/2 z-0"></div>
            
            {techProgression.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-cream-50 relative z-10 flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 shrink-0">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
                <div className="mt-auto pt-4 border-t border-sand-50">
                  <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2">Outcome</p>
                  <p className="text-navy-700 font-medium">{step.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Prepare for the Future"
        description="Equip your child with essential tech and AI skills for tomorrow's world."
        primaryButtonText="Book Free Assessment"
        primaryButtonLink="/free-assessment"
      />
    </div>
  );
};

export default TechnologyAIPage;
