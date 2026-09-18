import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Brain, MessageSquare, ShieldCheck, 
  Heart, Sparkles, Cpu, Hammer, Rocket, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const EcosystemDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number>(0);

  const pillars = [
    { id: 'academics', title: 'Academics', subtitle: 'Rigorous Foundations', desc: 'Mathematics, Science, and English mastered through conceptual understanding rather than repetitive rote drill.', icon: BookOpen, path: '/academics' },
    { id: 'conceptual', title: 'Conceptual Learning', subtitle: 'First-Principles Inquiry', desc: 'Grasping why principles work. Developing inquisitive mental models that transfer across academic challenges.', icon: Brain, path: '/curriculum' },
    { id: 'technology', title: 'Technology + AI', subtitle: 'Future Computational Literacy', desc: 'From digital basics and block logic to Python, machine learning mechanisms, and ethical AI utilization.', icon: Cpu, path: '/technology-ai' },
    { id: 'communication', title: 'Communication', subtitle: 'Poise & Articulation', desc: 'Public speaking, persuasive essays, reasoned debate, and active listening to articulate complex ideas.', icon: MessageSquare, path: '/academics' },
    { id: 'confidence', title: 'Confidence', subtitle: 'Resilience & Growth Mindset', desc: 'Cultivating inner self-worth, courage to attempt unfamiliar challenges, and learning through iterations.', icon: Sparkles, path: '/about' },
    { id: 'values', title: 'Values & Ethics', subtitle: 'Akhlaq & Moral Clarity', desc: 'Islamic akhlaq for Muslim learners; universal character, empathy, honesty, and mutual respect for all.', icon: Heart, path: '/faith-values' },
    { id: 'civic', title: 'Civic Awareness', subtitle: 'Community & Responsibility', desc: 'Understanding social rights, global citizenship, cultural dignity, and responsible digital engagement.', icon: ShieldCheck, path: '/curriculum' },
    { id: 'practical', title: 'Practical Skills', subtitle: 'Real-World Everyday Logic', desc: 'Personal finance awareness, budgeting simulations, data reading, and independent organizational habits.', icon: Hammer, path: '/curriculum' },
    { id: 'projects', title: 'Projects & Creation', subtitle: 'Tangible Student Capstones', desc: 'Applying knowledge into physical observation journals, code prototypes, simulations, and live web pages.', icon: Rocket, path: '/projects' },
  ];

  return (
    <section className="section-padding px-4 bg-pearl-50 border-b border-ink-100/8 relative overflow-hidden">
      {/* Subtle warm champagne radial aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-champagne-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="eyebrow-pill mb-4">
            Unified Learning System
          </span>
          <h2 className="font-heading font-extrabold text-ink-950 mt-4 mb-4 tracking-tight" style={{ fontSize: 'var(--fs-h2)' }}>
            One System. Many Dimensions of Learning.
          </h2>
          <p className="text-ink-600 leading-relaxed max-w-2xl mx-auto" style={{ fontSize: 'var(--fs-body)' }}>
            Education should not feel fragmented. We seamlessly connect foundational academics, technology, communication, and moral grounding into one harmonious learner journey.
          </p>
        </div>

        {/* Editorial Ecosystem Layout */}
        <div className="max-w-5xl mx-auto">
          
          {/* Central System Emblem + Connecting Nodes */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-ink-100/15 shadow-sm relative">
            
            {/* Center Brand Node */}
            <div className="text-center mb-10 pb-8 border-b border-ink-100/10">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-champagne-100/70 border border-champagne-300 text-champagne-800 text-xs font-bold uppercase tracking-wider mb-3">
                Central Core
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink-950 tracking-tight">
                THE ROYAL EDUCATION SYSTEM
              </h3>
              <p className="text-xs text-ink-500 mt-1.5 uppercase tracking-widest font-semibold">
                Harmonized Developmental Continuum
              </p>
            </div>

            {/* 9 Refined Connected Nodes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isActive = activeNode === idx;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveNode(idx)}
                    onMouseEnter={() => setActiveNode(idx)}
                    className={`p-4 rounded-xl text-left transition-all relative border flex flex-col justify-between group ${
                      isActive
                        ? 'bg-ivory-100 border-champagne-500 shadow-md ring-2 ring-champagne-400/20'
                        : 'bg-pearl-50/80 border-ink-100/10 hover:border-champagne-300 hover:bg-white'
                    }`}
                  >
                    {/* Active champagne indicator pill */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isActive ? 'bg-champagne-500 text-ink-950 shadow-xs' : 'bg-white text-champagne-700 border border-ink-100/10'
                      }`}>
                        <Icon size={18} />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${
                        isActive ? 'text-champagne-600' : 'text-ink-400'
                      }`}>
                        0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h4 className={`font-heading font-bold text-sm leading-snug transition-colors ${
                        isActive ? 'text-ink-950' : 'text-ink-900 group-hover:text-champagne-700'
                      }`}>
                        {pillar.title}
                      </h4>
                      <span className="text-[11px] text-ink-500 block mt-0.5 font-medium line-clamp-1">
                        {pillar.subtitle}
                      </span>
                    </div>

                    {/* Subtle connecting accent bar */}
                    <div className={`h-0.5 w-full mt-3 rounded-full transition-all ${
                      isActive ? 'bg-champagne-500' : 'bg-transparent group-hover:bg-champagne-200'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Narrative Callout */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-7 rounded-2xl bg-ivory-100/70 border border-champagne-300/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold text-champagne-700 uppercase tracking-widest">
                      Focus Area 0{activeNode + 1} • {pillars[activeNode].subtitle}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-lg text-ink-950 mb-1.5">
                    {pillars[activeNode].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                    {pillars[activeNode].desc}
                  </p>
                </div>

                <Link
                  to={pillars[activeNode].path}
                  className="shrink-0 btn-secondary text-xs px-4 py-2 border-champagne-400 text-ink-950 hover:bg-champagne-100"
                >
                  Explore in Curriculum <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
};

export default EcosystemDiagram;
