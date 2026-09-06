import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ClipboardCheck, PlayCircle, ClipboardList, CreditCard, Play, Rocket, MessageSquare, Target, Settings, DollarSign, UserCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';

const HowItWorksPage: React.FC = () => {
  const [ref1, isVisible1] = useScrollReveal();
  const [ref2, isVisible2] = useScrollReveal();

  const standardSteps = [
    { title: 'Book Free Assessment', icon: <FileText /> },
    { title: 'Complete Assessment', icon: <ClipboardCheck /> },
    { title: 'Try Free Demo Class', icon: <PlayCircle /> },
    { title: 'Receive Programme Recommendation', icon: <ClipboardList /> },
    { title: 'Enrol & Pay Admission Fee', icon: <CreditCard /> },
    { title: 'Start Monthly Programme', icon: <Play /> },
    { title: 'Onboarding & Begin Learning', icon: <Rocket /> }
  ];

  const novaSteps = [
    { title: 'Submit Query / Custom Skill Request', icon: <MessageSquare /> },
    { title: 'Assessment & Goal Discussion', icon: <Target /> },
    { title: 'Custom Learning Plan', icon: <Settings /> },
    { title: 'Custom Quote', icon: <DollarSign /> },
    { title: 'Enrol & Begin', icon: <UserCheck /> }
  ];

  return (
    <div className="bg-sand-50 min-h-screen pt-24">
      <PageHero 
        title="How It Works" 
        subtitle="Your Journey With Royal Education System"
      />

      {/* Standard Process */}
      <section className="py-20 px-6 bg-white" ref={ref1}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Standard Enrolment (KG - Grade 8)" subtitle="A simple, straightforward process" />
          
          <div className="mt-16 space-y-8">
            {standardSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible1 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-6 bg-sand-50 p-6 rounded-2xl shadow-sm border border-cream-50"
              >
                <div className="w-14 h-14 bg-teal-600 text-white rounded-xl flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy-900">Step {idx + 1}: {step.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Royal Nova Process */}
      <section className="py-20 px-6 bg-navy-900 text-cream-50" ref={ref2}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="Royal Nova (Grade 9+)" subtitle="Customized pathways for young adults" light />
          
          <div className="mt-16 space-y-8">
            {novaSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isVisible2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-6 bg-navy-800 p-6 rounded-2xl shadow-sm"
              >
                <div className="w-14 h-14 bg-accent-gold text-navy-900 rounded-xl flex items-center justify-center shrink-0 font-bold">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Step {idx + 1}: {step.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Begin?"
        description="Start your child's journey with a comprehensive evaluation."
        primaryButtonText="Start with Free Assessment"
        primaryButtonLink="/free-assessment"
      />
    </div>
  );
};

export default HowItWorksPage;
