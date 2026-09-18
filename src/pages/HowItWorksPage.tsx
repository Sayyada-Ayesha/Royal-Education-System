import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ClipboardCheck, PlayCircle, ClipboardList, CreditCard, Play, Rocket, MessageSquare, Target, Settings, DollarSign, UserCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const HowItWorksPage: React.FC = () => {
  useDocumentTitle('How It Works | The Royal Education System');
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
    <div className="bg-ivory min-h-screen">
      <PageHero 
        title="How It Works" 
        subtitle="Your Journey With Royal Education System"
      />

      {/* Standard Process */}
      <section className="section-padding px-6 bg-white" ref={ref1}>
        <div className="site-container-narrow">
          <SectionHeader title="Standard Enrolment (KG - Grade 8)" subtitle="A simple, straightforward process" />
          
          <div className="mt-16 space-y-8">
            {standardSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible1 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-6 bg-pearl p-6 rounded-2xl shadow-sm border border-ivory-200"
              >
                <div className="w-14 h-14 bg-champagne-500 text-ink-950 rounded-xl flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ink-900">Step {idx + 1}: {step.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Royal Nova Process */}
      <section className="section-padding px-6 gradient-ink text-ivory-100" ref={ref2}>
        <div className="site-container-narrow">
          <SectionHeader title="Royal Nova (Grade 9+)" subtitle="Customized pathways for young adults" light />
          
          <div className="mt-16 space-y-8">
            {novaSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isVisible2 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-6 bg-ink-800/80 border border-ink-700/50 p-6 rounded-2xl shadow-sm"
              >
                <div className="w-14 h-14 bg-champagne-400 text-ink-900 rounded-xl flex items-center justify-center shrink-0 font-bold">
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

      {/* Three Service Pathways */}
      <section className="section-padding px-6 bg-ivory-50 border-t border-ink-100/10">
        <div className="site-container-narrow">
          <SectionHeader 
            title="Three Distinct Ways to Engage with RES" 
            subtitle="Understand our service architecture: Enrolment, International Doubt Support, and Pakistan Tuition"
            align="center"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="card p-6 bg-white flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-champagne-700 bg-champagne-50 px-2.5 py-1 rounded-full inline-block mb-3">
                  Pathway 1 · International
                </span>
                <h4 className="font-heading font-bold text-ink-950 text-base mb-2">
                  Free Academic Doubt Support
                </h4>
                <p className="text-xs text-ink-600 leading-relaxed mb-4">
                  For students already attending external schools worldwide (UAE, Pakistan, Saudi Arabia, UK, USA, etc.). Ask homework questions and join free peer-accessible live doubt sessions.
                </p>
                <span className="text-[11px] font-bold text-champagne-700 block">
                  Free where offered · Question-based
                </span>
              </div>
              <div className="mt-4 pt-3 border-t border-ink-100/10">
                <a href="/query" className="text-xs font-bold text-ink-900 hover:text-champagne-600 flex items-center gap-1">
                  Submit Question &rarr;
                </a>
              </div>
            </div>

            <div className="card p-6 bg-white flex flex-col justify-between border border-champagne-200">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-wine-700 bg-wine-50 px-2.5 py-1 rounded-full inline-block mb-3">
                  Pathway 2 · Pakistan Only
                </span>
                <h4 className="font-heading font-bold text-ink-950 text-base mb-2">
                  Paid Personal Tuition / Coaching
                </h4>
                <p className="text-xs text-ink-600 leading-relaxed mb-4">
                  Tailored coaching based on the student's existing school syllabus (Federal, Government, Private). Urdu voice support is available where needed, with progressive English development.
                </p>
                <span className="text-[11px] font-bold text-ink-950 block">
                  From PKR 1,000 / mo · Paid service
                </span>
              </div>
              <div className="mt-4 pt-3 border-t border-ink-100/10">
                <a href="/enrol" className="text-xs font-bold text-champagne-700 hover:text-champagne-900 flex items-center gap-1">
                  Enrol for Tuition &rarr;
                </a>
              </div>
            </div>

            <div className="card p-6 bg-white flex flex-col justify-between border-2 border-champagne-400 shadow-sm">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-ink-950 px-2.5 py-1 rounded-full inline-block mb-3">
                  Pathway 3 · Global Enrolment
                </span>
                <h4 className="font-heading font-bold text-ink-950 text-base mb-2">
                  RES Academic Programme
                </h4>
                <p className="text-xs text-ink-600 leading-relaxed mb-4">
                  Full 1-year academic learning pathway following our own proprietary curriculum (KG–8). Conceptual academics, practical math, coding, AI, ethics, and included internal Study &amp; Practice sessions.
                </p>
                <span className="text-[11px] font-bold text-champagne-700 block">
                  Proprietary Curriculum · From PKR 5,000 / mo
                </span>
              </div>
              <div className="mt-4 pt-3 border-t border-ink-100/10">
                <a href="/free-assessment" className="text-xs font-bold text-ink-950 hover:text-champagne-600 flex items-center gap-1">
                  Book Free Assessment &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Begin?"
        description="Start your child's journey with a comprehensive evaluation."
        primaryButtonText="Start with Free Assessment"
        primaryButtonLink="/free-assessment"
        variant="navy"
      />
    </div>
  );
};

export default HowItWorksPage;
