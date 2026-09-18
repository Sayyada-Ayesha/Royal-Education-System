import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, Code, Terminal, Globe, MessageSquare, 
  Monitor, Rocket, Cpu, Palette, Calculator, 
  FlaskConical, ArrowRight, CheckCircle, Sparkles
} from 'lucide-react';
import { novaSkills } from '../data/programmeData';
import { skillCoursePricing } from '../data/pricingData';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const iconMap: Record<string, any> = {
  Brain, Code, Terminal, Globe, MessageSquare, 
  Monitor, Rocket, Cpu, Palette, Calculator, FlaskConical
};

export default function RoyalNovaPage() {
  useDocumentTitle('Royal Nova (Grade 9+ & Beyond) | The Royal Education System');
  const [revealRef, isVisible] = useScrollReveal();

  const processSteps = [
    { title: 'Free Diagnostic', desc: 'Assess current aptitude & technical foundations.' },
    { title: 'Goal Consultation', desc: 'Define your desired industry or academic trajectory.' },
    { title: 'Modular Curriculum', desc: 'Select the precise competencies you want to master.' },
    { title: 'Transparent Plan', desc: 'Custom duration (3 to 6 months) and investment.' },
    { title: 'Portfolio Launch', desc: 'Graduate with tangible, verifiable live capstones.' }
  ];

  return (
    <div className="min-h-screen bg-ivory-50">
      <PageHero 
        title="Royal Nova" 
        subtitle="Specialization & Future Capability — Grade 9+ & Beyond"
        variant="A"
        image="/images/Slideshow/7.jpeg"
        breadcrumbs={[
          { label: 'Programmes', path: '/programmes' },
          { label: 'Royal Nova' }
        ]}
      />
      
      {/* Editorial Lead Section */}
      <section className="section-padding gradient-ink text-white relative overflow-hidden">
        <div className="site-container-narrow text-center" ref={revealRef}>
          <span className="eyebrow-pill text-champagne-300 bg-champagne-400/10 border-champagne-400/20 mb-4">
            Specialization Phase
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-white font-bold leading-tight mt-4 mb-6"
            style={{ fontSize: 'var(--fs-h2)' }}
          >
            Choose what you want to learn. Build the skills you need.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ivory-200/80 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: 'var(--fs-body-lg)' }}
          >
            You don't need a rigid one-size-fits-all curriculum. Royal Nova offers focused, 3-to-6 month skill intensives in Applied AI, Python, Web Engineering, and Professional Communication.
          </motion.p>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-10 bg-pearl-100 border-b border-ink-100/8">
        <div className="site-container">
          <div className="flex flex-wrap justify-center items-center gap-3 text-center">
            <span className="text-xs font-bold text-ink-400 uppercase tracking-wider mr-2">Designed For:</span>
            {['Grade 9 to 12 Learners', 'High School Graduates', 'University Students', 'Young Professionals', 'Self-Directed Learners'].map((aud, i) => (
              <span key={i} className="bg-white border border-ink-100/10 text-ink-800 text-xs px-4 py-2 rounded-full font-semibold shadow-2xs">
                {aud}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section-padding bg-ivory-50">
        <div className="site-container">
          <SectionHeader 
            title="Specialized Skill Modules" 
            description="Hand-pick the disciplines relevant to your career or academic ambition. Build an undeniable digital portfolio."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-14">
            {novaSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || Brain;
              return (
                <div key={index} className="card flex flex-col justify-between group hover:-translate-y-1 transition-all">
                  <div>
                    <div className="w-12 h-12 bg-champagne-100/80 text-champagne-700 rounded-xl flex items-center justify-center mb-5 border border-champagne-200/50 group-hover:bg-champagne-400 group-hover:text-ink-950 transition-colors">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-ink-950 mb-2 font-heading">{skill.name}</h3>
                    <p className="text-xs text-ink-600 leading-relaxed mb-6">{skill.description}</p>
                  </div>
                  <Link 
                    to="/royal-nova/query" 
                    className="text-champagne-600 font-bold text-xs flex items-center gap-1.5 hover:text-champagne-700 transition-colors pt-3 border-t border-ink-100/8"
                  >
                    Select Module for Plan <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section-padding bg-pearl-100 border-y border-ink-100/8">
        <div className="site-container">
          <SectionHeader 
            title="How Royal Nova Works" 
            description="A flexible, five-stage methodology engineered around your individual learning goals."
            align="center" 
          />
          
          <div className="mt-14 grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {processSteps.map((step, i) => (
              <div key={i} className="card text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full gradient-ink text-champagne-400 flex items-center justify-center font-bold text-sm mb-4 border border-champagne-400/30">
                  0{i + 1}
                </div>
                <h4 className="font-bold text-ink-950 text-base mb-2 font-heading">{step.title}</h4>
                <p className="text-xs text-ink-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Custom Plan Structure */}
      <section className="section-padding bg-ivory-50">
        <div className="site-container-narrow">
          <SectionHeader 
            title="Custom Duration & Investment" 
            subtitle="Pay only for the specific modules and mentorship hours you require. All fees are paid in advance."
            align="center" 
          />
          
          <div className="card-elevated mt-10">
            <div className="space-y-4 divide-y divide-ink-100/10">
              {Object.values(skillCoursePricing).map((item, i) => (
                <div key={i} className="flex justify-between items-center pt-4 first:pt-0">
                  <div>
                    <span className="font-bold text-ink-950 text-base font-heading block">{item.label}</span>
                    <span className="text-xs text-ink-400">Intensive cohort & 1-on-1 guided capstone</span>
                  </div>
                  <div className="text-right">
                    <span className="text-champagne-600 font-bold text-base font-heading">
                      {(item as any).aedRange || (item as any).description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Learning & Delivery Policy */}
            <div className="mt-8 p-5 rounded-xl bg-pearl-100/80 border border-ink-100/8 text-xs text-ink-700 space-y-2">
              <div className="font-bold text-ink-950 flex items-center justify-between">
                <span>Live Interactive Learning & Privacy Architecture:</span>
                <span className="text-champagne-700 font-semibold">Live Mentorship</span>
              </div>
              <ul className="space-y-1.5 text-ink-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne-500 flex-shrink-0" />
                  <span><strong>Live participation</strong>: Active mentorship, real-time code walkthroughs, design critiques, and software demonstrations.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne-500 flex-shrink-0" />
                  <span><strong>Learner privacy first</strong>: Student cameras are <em>never mandatory</em>. Learning happens via voice, screen sharing, and interactive environments.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne-500 flex-shrink-0" />
                  <span><strong>Live-first model</strong>: Class recordings are not provided as standard. Learners attend live sessions for active engagement and immediate mentor feedback.</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 pt-6 border-t border-ink-100/10 text-center">
              <p className="text-xs text-ink-500 mb-6">
                *Unlike Royal Juniors and Royal Gems (which follow a full 1-year academic grade), Royal Nova durations are custom-calibrated (typically 3 to 6 months per module). Fees are agreed upon proposal and paid in advance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/royal-nova/query" className="btn-primary text-xs">
                  Request Custom Quote
                </Link>
                <Link to="/royal-nova/query" className="btn-secondary text-xs">
                  Request Learning Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contextual CTA */}
      <CTASection 
        title="Take Control of Your Learning Trajectory" 
        description="Build verifiable skills and a tangible portfolio that will distinguish you in higher education and professional fields." 
        primaryButtonText="Request Custom Learning Plan" 
        primaryButtonLink="/royal-nova/query"
        secondaryButtonText="Book Free Assessment"
        secondaryButtonLink="/free-assessment"
        variant="navy"
      />
    </div>
  );
}
