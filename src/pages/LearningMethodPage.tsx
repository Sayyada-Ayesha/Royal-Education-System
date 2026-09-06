import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, PenTool, MessageCircle, Lightbulb, Sparkles, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { learningMethod } from '../data/programmeData';

const LearningMethodPage: React.FC = () => {
  const [ref, isVisible] = useScrollReveal();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: 'Understand', icon: <Eye />, desc: 'Deep comprehension of fundamental concepts.' },
    { title: 'Practice', icon: <PenTool />, desc: 'Guided practice to reinforce learning.' },
    { title: 'Explain', icon: <MessageCircle />, desc: 'Articulating concepts to solidify knowledge.' },
    { title: 'Apply', icon: <Lightbulb />, desc: 'Using knowledge in real-world contexts.' },
    { title: 'Create', icon: <Sparkles />, desc: 'Innovating and building upon what was learned.' }
  ];

  return (
    <div className="bg-sand-50 min-h-screen pt-24">
      <PageHero 
        title="How We Teach" 
        subtitle="Understanding > Memorization"
      />

      <section className="py-20 px-6 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6"
          >
            We teach children to understand concepts, <br className="hidden md:block" />
            <span className="text-teal-600">not simply memorize definitions.</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            {steps.map((step, idx) => (
              <React.Fragment key={step.title}>
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`flex flex-col items-center p-4 rounded-xl transition-all flex-1 w-full md:w-auto ${
                    activeStep === idx ? 'bg-teal-50 shadow-md transform scale-105' : 'hover:bg-sand-50 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                    activeStep === idx ? 'bg-teal-600 text-white' : 'bg-navy-100 text-navy-600'
                  }`}>
                    {step.icon}
                  </div>
                  <span className={`font-bold ${activeStep === idx ? 'text-teal-700' : 'text-navy-700'}`}>
                    {step.title}
                  </span>
                </button>
                {idx < steps.length - 1 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-cream-50" />
                )}
              </React.Fragment>
            ))}
          </div>

          <motion.div 
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-navy-900 rounded-3xl p-8 text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-4">{steps[activeStep].title}</h3>
            <p className="text-lg text-navy-100">{steps[activeStep].desc}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-sand-50">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Example in Action: Photosynthesis" subtitle="How our learners actually learn a concept" />
          
          <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm">
            <p className="text-lg text-navy-800 font-medium mb-8 text-center italic">
              "Photosynthesis should not simply be memorized as a definition."
            </p>
            
            <div className="space-y-6">
              {learningMethod.photosynthesisExample.steps.map((step, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-6 items-start p-6 bg-sand-50 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-navy-700 text-lg">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Experience Our Method"
        description="Book a free assessment today and see how our structured approach can benefit your child."
        primaryButtonText="Book Free Assessment"
        primaryButtonLink="/free-assessment"
        secondaryButtonText="See It In Action"
        secondaryButtonLink="/free-demo"
      />
    </div>
  );
};

export default LearningMethodPage;
