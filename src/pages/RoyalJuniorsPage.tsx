import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, Brain, MessageCircle, Calculator, Microscope, 
  Palette, Heart, MonitorSmartphone, ArrowRight, BookMarked, 
  GraduationCap, Users, Sparkles, Compass
} from 'lucide-react';
import { gradePricing } from '../data/pricingData';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const focusAreas = [
  { title: 'Manners & Ethics', icon: Heart, desc: 'Cultivating respect, patience, kindness, and considerate daily habits.' },
  { title: 'Confidence & Expression', icon: MessageCircle, desc: 'Helping young learners speak comfortably, listen attentively, and ask questions.' },
  { title: 'Curiosity & Discovery', icon: Sparkles, desc: 'Encouraging inquiry-driven observation of the natural and physical world.' },
  { title: 'Academic Foundations', icon: BookOpen, desc: 'Step-by-step reading fluency, phonics, and early structured writing.' },
  { title: 'Practical Mathematics', icon: Calculator, desc: 'Understanding numbers, patterns, measurement, and spatial relationships.' },
  { title: 'Observational Science', icon: Microscope, desc: 'Exploring plants, weather, senses, and the environment with wonder.' },
  { title: 'Responsible Technology', icon: MonitorSmartphone, desc: 'Safe, guided digital awareness and early creative computing.' },
  { title: 'Life Skills & Habits', icon: Compass, desc: 'Organizing routines, caring for personal spaces, and collaboration.' },
  { title: 'Creative Exploration', icon: Palette, desc: 'Visual storytelling, model construction, and imaginative expression.' },
  { title: 'Conceptual Thinking', icon: Brain, desc: 'Learning why things work rather than mechanically memorizing answers.' }
];

const gradeProgression = [
  { 
    grade: 'Kindergarten (KG)', 
    focus: 'Manners, ethics, confidence, spoken communication, daily habits, life skills, curiosity, brain and thinking activities, early digital awareness, and guided, age-appropriate AI awareness (such as ChatGPT, Claude, and creative tools). Not a rigid textbook drill.' 
  },
  { 
    grade: 'Grade 1', 
    focus: 'Conversational English fluency, foundational reading, number patterns, curiosity about the living world, and caring classroom routines.' 
  },
  { 
    grade: 'Grade 2', 
    focus: 'Expressive speech, basic arithmetic reasoning, observational science, guided digital literacy, and mutual respect.' 
  },
  { 
    grade: 'Grade 3', 
    focus: 'Reading comprehension, multiplication and division logic, environment exploration, early creative computing, and collaborative teamwork.' 
  },
  { 
    grade: 'Grade 4', 
    focus: 'Independent inquiry, multi-step problem solving, structured digital creation, age-appropriate prompting concepts, and civic values.' 
  }
];

export default function RoyalJuniorsPage() {
  useDocumentTitle('Royal Juniors (KG–Grade 4) | The Royal Education System');
  const [revealRef, isVisible] = useScrollReveal();
  const [pricingRef] = useScrollReveal();
  
  const juniorsPricing = gradePricing.filter(p => p.programme === 'Royal Juniors');

  return (
    <div className="min-h-screen bg-ivory-50">
      <PageHero 
        title="Royal Juniors" 
        subtitle="Foundation Learning Phase — KG to Grade 4"
        variant="A"
        image="/images/Slideshow/1.jpeg"
        breadcrumbs={[
          { label: 'Programmes', path: '/programmes' },
          { label: 'Royal Juniors' }
        ]}
      />
      
      {/* Editorial Lead Section */}
      <section className="section-padding bg-pearl-100 border-b border-ink-100/8">
        <div className="site-container-narrow text-center" ref={revealRef}>
          <span className="eyebrow-pill mb-4">Foundation Phase</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-ink-950 font-bold leading-tight mt-4 mb-6"
            style={{ fontSize: 'var(--fs-h2)' }}
          >
            Build strong foundations before the world gets complicated.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ink-600 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: 'var(--fs-body-lg)' }}
          >
            Royal Juniors is not a traditional rigid schoolroom. It is designed to inspire genuine curiosity, communicative confidence, moral grounding, and healthy learning habits in early childhood.
          </motion.p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-ivory-50">
        <div className="site-container">
          <SectionHeader 
            title="What We Focus On" 
            description="A holistic foundation balancing character, expressive communication, practical curiosity, and core academic concepts."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-14">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="card flex flex-col justify-between">
                  <div>
                    <div className="w-11 h-11 bg-champagne-100/80 text-champagne-700 rounded-xl flex items-center justify-center mb-4 border border-champagne-200/50">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-base font-bold text-ink-950 mb-2 font-heading">{area.title}</h3>
                    <p className="text-xs text-ink-600 leading-relaxed">{area.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Special Spotlight: The KG Learning Philosophy */}
          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-champagne-300/40 shadow-sm max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="eyebrow text-xs text-champagne-700 block mb-2">Early Child Development</span>
              <h3 className="font-heading font-extrabold text-2xl text-ink-950 mb-3">
                Kindergarten (KG) at RES: Not a Textbook Drill
              </h3>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                We believe early education should inspire life habits and social confidence. Rather than pushing heavy math workbooks or grammar drills on small children, our KG focus is holistic, relational, and active.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-ivory-50 border border-ink-100/10">
                <span className="font-heading font-bold text-sm text-ink-950 block mb-1">Manners &amp; Social Respect</span>
                <p className="text-xs text-ink-600 leading-relaxed">
                  How to sit properly, speak politely, introduce oneself, listen attentively, and share with peers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-ivory-50 border border-ink-100/10">
                <span className="font-heading font-bold text-sm text-ink-950 block mb-1">Observation &amp; Inquiry</span>
                <p className="text-xs text-ink-600 leading-relaxed">
                  Understanding simple everyday objects: &ldquo;What is this? What is that? How do we describe our world?&rdquo;
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-ivory-50 border border-ink-100/10">
                <span className="font-heading font-bold text-sm text-ink-950 block mb-1">Thinking Activities</span>
                <p className="text-xs text-ink-600 leading-relaxed">
                  Brain games, pattern matching, puzzles, and sensory exploration that ignite cognitive curiosity.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-ivory-50 border border-ink-100/10">
                <span className="font-heading font-bold text-sm text-ink-950 block mb-1">Guided AI &amp; Tech Literacy</span>
                <p className="text-xs text-ink-600 leading-relaxed">
                  Safe, age-appropriate awareness of modern tools (ChatGPT, Claude, image generation) as guided creative aids.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progression Section */}
      <section className="section-padding gradient-ink text-white relative overflow-hidden">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="eyebrow-pill text-champagne-300 bg-champagne-400/10 border-champagne-400/20 mb-4">
                Structured 5-Year Pathway
              </span>
              <h2 className="font-heading font-bold mb-6 text-white mt-4" style={{ fontSize: 'var(--fs-h2)' }}>
                Progressive Mastery from KG to Grade 4
              </h2>
              <p className="text-ivory-200/75 text-base mb-8 leading-relaxed">
                Concepts build naturally year after year. Learners first explore through observation and spoken expression, then advance to structured problem-solving and independent reading.
              </p>
              <div className="space-y-4">
                {gradeProgression.map((prog, idx) => (
                  <div key={idx} className="flex gap-4 p-3.5 rounded-xl bg-white/4 border border-white/8">
                    <div className="flex-shrink-0 w-16 text-champagne-400 font-bold font-heading">{prog.grade}</div>
                    <div className="text-ivory-200/80 text-sm leading-relaxed">{prog.focus}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/Slideshow/1.jpeg" 
                alt="Young learners in interactive session" 
                className="rounded-2xl shadow-2xl border border-champagne-400/20 object-cover aspect-[4/3] w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-champagne-500 text-ink-950 p-6 rounded-xl shadow-xl max-w-xs border border-champagne-300">
                <BookMarked className="text-ink-950 mb-2" size={28} />
                <p className="font-bold text-sm font-heading">Conceptual Mastery Before Progression</p>
                <p className="text-xs text-ink-900/80 mt-1">Learners advance with genuine confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Partnership */}
      <section className="section-padding bg-pearl-100 border-b border-ink-100/8">
        <div className="site-container text-center">
          <SectionHeader 
            title="Partnering with Parents" 
            description="Education is a collaborative partnership between our mentors and the family."
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="card text-center">
              <Users className="w-9 h-9 text-champagne-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-ink-950 mb-2 font-heading">Regular Insights</h3>
              <p className="text-xs text-ink-600 leading-relaxed">Weekly visibility into themes explored and suggested conversation topics for home reinforcement.</p>
            </div>
            <div className="card text-center">
              <MessageCircle className="w-9 h-9 text-champagne-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-ink-950 mb-2 font-heading">Open Mentorship</h3>
              <p className="text-xs text-ink-600 leading-relaxed">Direct communication channels with educators to address questions and celebrate breakthroughs.</p>
            </div>
            <div className="card text-center">
              <GraduationCap className="w-9 h-9 text-champagne-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-ink-950 mb-2 font-heading">Holistic Evaluation</h3>
              <p className="text-xs text-ink-600 leading-relaxed">Qualitative feedback highlighting confidence, inquiry, and capability rather than stressful exam rankings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition Transparency */}
      <section className="section-padding bg-ivory-50" ref={pricingRef}>
        <div className="site-container-narrow">
          <SectionHeader 
            title="Tuition Fees — Royal Juniors" 
            subtitle="Each grade represents one full academic learning year. All fees are paid in advance."
            align="center" 
          />
          
          <div className="card-elevated mt-10">
            <div className="space-y-4 divide-y divide-ink-100/10">
              {juniorsPricing.map((item, i) => (
                <div key={i} className="flex justify-between items-center pt-4 first:pt-0">
                  <div>
                    <span className="font-bold text-ink-950 text-base font-heading block">{item.label}</span>
                    <span className="text-xs text-ink-400">Proprietary RES curriculum + internal Study &amp; Practice sessions included</span>
                  </div>
                  <div className="text-right">
                    <span className="text-champagne-600 font-bold text-lg font-heading">AED {item.aed}</span>
                    <span className="text-ink-400 text-xs block">~ ${item.usd} /mo (in advance)</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-pearl-100/80 border border-ink-100/8 text-xs text-ink-700 space-y-1.5">
              <div className="font-bold text-ink-950 flex items-center justify-between">
                <span>Advance Payment Discount Schedules:</span>
                <span className="text-champagne-700 font-medium">Monthly / 3-Mo / 6-Mo / Annual</span>
              </div>
              <p className="text-ink-500">
                • <strong>Monthly</strong>: Standard fee paid in advance • <strong>3 Months</strong>: 3% savings • <strong>6 Months</strong>: 5% savings • <strong>Full Year</strong>: 10% savings
              </p>
              <p className="text-[11px] text-ink-400 italic">
                *Payment intervals are billing options, not programme durations (KG–Grade 4 represents 5 full learning years).
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-ink-100/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-500">
              <span>*Need-based scholarship support may be available, subject to assessment and available funding.</span>
              <Link to="/fees" className="text-champagne-600 font-bold hover:underline flex items-center gap-1">
                View global fees &amp; Pakistan tuition <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual CTA */}
      <CTASection 
        title="Ready to Begin with Royal Juniors?" 
        description="Book a free comprehensive learning assessment to identify your child's strengths and early curiosity profile." 
        primaryButtonText="Book Free Assessment"
        primaryButtonLink="/free-assessment"
        secondaryButtonText="Book Free Demo"
        secondaryButtonLink="/free-demo"
        variant="navy"
      />
    </div>
  );
}
