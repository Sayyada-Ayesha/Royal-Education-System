import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Hammer, TrendingUp, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface JourneyEndingGraphicProps {
  className?: string;
  headline?: string;
  subheadline?: string;
}

export const JourneyEndingGraphic: React.FC<JourneyEndingGraphicProps> = ({
  className = '',
  headline = 'READY TO START THE JOURNEY?',
  subheadline = 'Education without boundaries. Skills for the real world.',
}) => {
  const pathwaySteps = [
    { id: 'learn', title: 'LEARN', subtitle: 'Knowledge & Curiosity', desc: 'Active inquiry across core academics and technology foundations.', icon: <BookOpen className="w-6 h-6" />, badge: 'Step 1' },
    { id: 'understand', title: 'UNDERSTAND', subtitle: 'Deep Concepts', desc: 'Moving past memorization to grasp why and how systems interact.', icon: <Brain className="w-6 h-6" />, badge: 'Step 2' },
    { id: 'build', title: 'BUILD', subtitle: 'Hands-on Projects', desc: 'Creating games, circuits, algorithms, and collaborative solutions.', icon: <Hammer className="w-6 h-6" />, badge: 'Step 3' },
    { id: 'grow', title: 'GROW', subtitle: 'Character & Values', desc: 'Cultivating communication, empathy, ethics, and independent thinking.', icon: <TrendingUp className="w-6 h-6" />, badge: 'Step 4' },
    { id: 'create', title: 'CREATE', subtitle: 'Real-World Impact', desc: 'Applying future-ready capabilities to lead with purpose and confidence.', icon: <Sparkles className="w-6 h-6" />, badge: 'Step 5' },
  ];

  return (
    <section className={`section-padding px-4 gradient-ink text-white relative overflow-hidden ${className}`}>
      {/* Subtle ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-[2/1] bg-champagne-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-champagne-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow-pill text-champagne-300 bg-champagne-400/10 border-champagne-400/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> The Royal Educational Journey
          </span>
          <h2 className="font-heading font-extrabold tracking-tight text-white mt-4 mb-4" style={{ fontSize: 'var(--fs-h2)' }}>
            {headline}
          </h2>
          <p className="text-ivory-200/70 font-normal" style={{ fontSize: 'var(--fs-body-lg)' }}>
            {subheadline}
          </p>
        </div>

        {/* The Visual Path */}
        <div className="relative mb-16">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-px bg-gradient-to-r from-champagne-400/40 via-champagne-400/20 to-champagne-400/40 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative z-10">
            {pathwaySteps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/4 backdrop-blur-sm rounded-xl p-6 border border-champagne-400/10 hover:border-champagne-400/30 shadow-lg transition-all flex flex-col items-center text-center group hover:-translate-y-1"
              >
                <span className="text-[11px] uppercase tracking-widest font-bold text-champagne-400 mb-3 bg-champagne-400/10 px-2.5 py-0.5 rounded-full">
                  {step.badge}
                </span>

                <div className="w-14 h-14 rounded-xl bg-champagne-400/10 border border-champagne-400/15 flex items-center justify-center text-champagne-300 mb-4 group-hover:bg-champagne-400/20 transition-colors">
                  {step.icon}
                </div>

                <h3 className="font-heading font-extrabold text-lg text-white mb-1 tracking-wide">{step.title}</h3>
                <h4 className="text-xs font-semibold text-champagne-400 mb-2">{step.subtitle}</h4>
                <p className="text-xs text-ivory-200/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-midnight-900 via-ink-950 to-midnight-900 border border-champagne-400/15 rounded-2xl p-8 md:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
        >
          <div className="max-w-xl">
            <h3 className="font-heading font-bold text-white mb-3" style={{ fontSize: 'var(--fs-h3)' }}>
              Give your child an education that grows with them.
            </h3>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-ivory-200/60">
              {['Free comprehensive assessment', 'No commitment required', 'Year-round personalized guidance'].map(item => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-champagne-400" /> {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <Link to="/free-assessment" className="btn-primary w-full sm:w-auto text-center flex items-center justify-center gap-2">
              BOOK FREE ASSESSMENT <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/programmes"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-champagne-400/30 text-champagne-300 font-bold rounded-xl hover:bg-champagne-400/10 transition-all text-center"
            >
              EXPLORE PROGRAMS
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneyEndingGraphic;
