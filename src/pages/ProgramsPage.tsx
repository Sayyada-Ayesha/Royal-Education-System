import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, ArrowRight, Brain, Terminal, 
  CheckCircle2 
} from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { novaSkills } from '../data/programmeData';
import { mediaConfig } from '../data/mediaConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const ProgramsPage: React.FC = () => {
  useDocumentTitle('Programs | The Royal Education System');
  const [activeTab, setActiveTab] = useState<'juniors' | 'gems' | 'nova'>('juniors');

  const tabs = [
    { id: 'juniors', label: 'Royal Juniors', badge: 'KG – Grade 4', sub: 'Foundation Learning' },
    { id: 'gems', label: 'Royal Gems', badge: 'Grades 5 – 8', sub: 'Applied Capability' },
    { id: 'nova', label: 'Royal Nova', badge: 'Grade 9+ & Beyond', sub: 'Flexible Skills' },
  ];

  return (
    <div className="min-h-screen bg-ivory-50">
      <PageHero
        title="Our Educational Pathways"
        subtitle="Three purposeful pathways designed to cultivate curiosity, technical capability, and lifelong mastery."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Programs' }]}
      />

      <div className="site-container py-16 -mt-8 relative z-20">
        {/* Interactive Pathway Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex flex-col items-center sm:items-start px-6 py-4 rounded-2xl transition-all border text-left shadow-sm ${
                  isActive
                    ? 'bg-ink-900 border-champagne-400 text-white ring-2 ring-champagne-400/20 shadow-lg -translate-y-1'
                    : 'bg-white border-slate-200 text-ink-800 hover:border-champagne-300 hover:bg-ivory-50'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-heading font-extrabold text-base sm:text-lg">{tab.label}</span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-champagne-400/20 text-champagne-300' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {tab.badge}
                  </span>
                </div>
                <span className={`text-xs ${isActive ? 'text-champagne-300 font-medium' : 'text-slate-500'}`}>
                  {tab.sub}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Programme Showcase */}
        <AnimatePresence mode="wait">
          {activeTab === 'juniors' && (
            <motion.div
              key="juniors"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl mb-16"
            >
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-champagne-50 text-champagne-600 text-xs font-bold rounded-full mb-4">
                    <Sparkles className="w-3.5 h-3.5" /> Early Childhood & Primary Pathway
                  </div>
                  <h2 className="font-extrabold font-heading text-ink-900 mb-3" style={{ fontSize: 'var(--fs-h2)' }}>
                    Royal Juniors (KG – Grade 4)
                  </h2>
                  <p className="text-base text-champagne-600 font-semibold mb-4">
                    "Build strong foundations before the world gets complicated."
                  </p>
                  <p className="text-sm text-ink-700 mb-6 leading-relaxed">
                    Designed specifically for early learners. Learning is kept joyful, visual, and activity-driven without sterile rote drilling or premature technical fatigue.
                  </p>

                  {/* Visual Capabilities Grid */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {[
                      { title: 'Academic Foundations', desc: 'Phonics, structured reading, number sense & mental math' },
                      { title: 'Curiosity Science', desc: 'Sensory observation, living systems, earth and environment' },
                      { title: 'Digital Awareness', desc: 'Safe computing, creative logic, and algorithmic games' },
                      { title: 'Character & Etiquette', desc: 'Manners, empathy, honesty, and respectful habits' },
                    ].map((item, idx) => (
                      <div key={idx} className="p-3.5 bg-ivory-50 rounded-xl border border-ivory-100 flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-champagne-600 mt-0.5 shrink-0" />
                        <div>
                          <h4 className="text-xs font-bold text-ink-900">{item.title}</h4>
                          <p className="text-[11px] text-slate-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      to="/royal-juniors"
                      className="px-6 py-3 bg-ink-900 text-white text-xs font-bold rounded-xl hover:bg-ink-800 transition-colors flex items-center gap-2"
                    >
                      Explore Royal Juniors Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to="/free-assessment"
                      className="px-6 py-3 border border-champagne-600 text-champagne-600 text-xs font-bold rounded-xl hover:bg-champagne-50 transition-colors"
                    >
                      Book Free KG–4 Assessment
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] relative">
                    <img
                      src={mediaConfig.programmeImages.juniors}
                      alt="Royal Juniors Children Learning"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent flex items-end p-6">
                      <span className="text-white text-xs font-medium bg-ink-900/80 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                        KG to Grade 4 • Annual Learning Programme
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'gems' && (
            <motion.div
              key="gems"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl mb-16"
            >
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-champagne-50 text-champagne-500 text-xs font-bold rounded-full mb-4">
                    <Brain className="w-3.5 h-3.5" /> Middle School Development Pathway
                  </div>
                  <h2 className="font-extrabold font-heading text-ink-900 mb-3" style={{ fontSize: 'var(--fs-h2)' }}>
                    Royal Gems (Grades 5 – 8)
                  </h2>
                  <p className="text-base text-champagne-500 font-semibold mb-4">
                    "Turn knowledge into capability."
                  </p>
                  <p className="text-sm text-ink-700 mb-6 leading-relaxed">
                    Prepares students for the complexity of higher education by transitioning from basic recall to analytical mastery, coding logic, and independent project creation.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {[
                      { title: 'Analytical Academics', desc: 'Pre-algebra, physics, chemistry, biology, and structured debate' },
                      { title: 'Coding & AI Literacy', desc: 'Block coding, visual circuits, Python introduction & responsible AI' },
                      { title: 'Practical Projects', desc: 'Learners build interactive models and solve cross-subject problems' },
                      { title: 'Life & Civic Skills', desc: 'Time management, digital citizenship, and independent thinking' },
                    ].map((item, idx) => (
                      <div key={idx} className="p-3.5 bg-ivory-50 rounded-xl border border-ivory-100 flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-champagne-600 mt-0.5 shrink-0" />
                        <div>
                          <h4 className="text-xs font-bold text-ink-900">{item.title}</h4>
                          <p className="text-[11px] text-slate-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      to="/royal-gems"
                      className="px-6 py-3 bg-ink-900 text-white text-xs font-bold rounded-xl hover:bg-ink-800 transition-colors flex items-center gap-2"
                    >
                      Explore Royal Gems Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to="/free-assessment"
                      className="px-6 py-3 border border-champagne-600 text-champagne-600 text-xs font-bold rounded-xl hover:bg-champagne-50 transition-colors"
                    >
                      Book Free Grade 5–8 Assessment
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] relative">
                    <img
                      src={mediaConfig.programmeImages.gems}
                      alt="Royal Gems Students in Lab and Tech"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent flex items-end p-6">
                      <span className="text-white text-xs font-medium bg-ink-900/80 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                        Grades 5 to 8 • Annual Applied Learning
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'nova' && (
            <motion.div
              key="nova"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-ink-900 rounded-3xl p-6 sm:p-10 border border-champagne-400/30 text-white shadow-2xl mb-16 relative overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-champagne-400/10 rounded-full blur-3xl pointer-events-none" />
              <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-champagne-400/20 text-champagne-300 text-xs font-bold rounded-full mb-4">
                    <Terminal className="w-3.5 h-3.5" /> Flexible Targeted Skills Pathway
                  </div>
                  <h2 className="font-extrabold font-heading text-white mb-3" style={{ fontSize: 'var(--fs-h2)' }}>
                    Royal Nova (Grade 9+ & Beyond)
                  </h2>
                  <p className="text-base text-champagne-400 font-semibold mb-4">
                    "Choose what you want to learn. Build the skills you need."
                  </p>
                  <p className="text-sm text-ivory-50/80 mb-6 leading-relaxed">
                    Designed for high school students, university learners, working professionals, and lifelong learners. Choose individual high-value competencies or construct a custom curriculum without enrolling in a full fixed school syllabus.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8">
                    {novaSkills.slice(0, 6).map((skill, idx) => (
                      <div key={idx} className="p-3 bg-ink-950/70 rounded-xl border border-champagne-400/20">
                        <span className="text-xs font-bold text-champagne-300 block">{skill.name}</span>
                        <span className="text-[10px] text-slate-400 block truncate">{skill.description}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      to="/royal-nova"
                      className="px-6 py-3 bg-champagne-400 text-ink-950 text-xs font-bold rounded-xl hover:bg-champagne-300 transition-colors flex items-center gap-2"
                    >
                      Explore Skill Catalog <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to="/royal-nova/query"
                      className="px-6 py-3 border border-white/30 text-white text-xs font-bold rounded-xl hover:bg-white/10 transition-colors"
                    >
                      Request Custom Plan
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-ink-800 aspect-[4/3] relative">
                    <img
                      src={mediaConfig.programmeImages.nova}
                      alt="Royal Nova Technology and Professional Skills"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent flex items-end p-6">
                      <span className="text-champagne-300 text-xs font-medium bg-ink-900/90 px-3 py-1.5 rounded-lg border border-champagne-400/30">
                        Grade 9+, Graduates & Adults • Custom Quote Pathway
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Visual Comparison Matrix */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-ink-900 mb-2">
              Pathway Architecture at a Glance
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear educational progression tailored to age, developmental stage, and long-term ambition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-ivory-50 border border-slate-200">
              <span className="text-xs font-bold uppercase text-champagne-600 bg-champagne-100/60 px-2.5 py-1 rounded-md mb-3 inline-block">Foundation</span>
              <h4 className="text-lg font-bold text-ink-900 mb-1">Royal Juniors</h4>
              <p className="text-xs text-slate-500 mb-4">KG to Grade 4</p>
              <ul className="space-y-2 text-xs text-ink-800">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-champagne-600 shrink-0" /> Playful, structured numeracy & literacy</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-champagne-600 shrink-0" /> Real-world science discovery</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-champagne-600 shrink-0" /> Block logic & creative digital awareness</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-champagne-600 shrink-0" /> Manners, ethics, and emotional confidence</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-champagne-50/50 border border-champagne-200">
              <span className="text-xs font-bold uppercase text-ink-900 bg-champagne-200/60 px-2.5 py-1 rounded-md mb-3 inline-block">Development</span>
              <h4 className="text-lg font-bold text-ink-900 mb-1">Royal Gems</h4>
              <p className="text-xs text-slate-500 mb-4">Grades 5 to 8</p>
              <ul className="space-y-2 text-xs text-ink-800">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-champagne-600 shrink-0" /> Conceptual algebra, physics & chemistry</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-champagne-600 shrink-0" /> Computational logic & Python basics</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-champagne-600 shrink-0" /> Cross-subject practical capstones</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-champagne-600 shrink-0" /> Critical thinking and debate skills</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-ink-900 text-white border border-ink-800">
              <span className="text-xs font-bold uppercase text-champagne-300 bg-ink-950 px-2.5 py-1 rounded-md mb-3 inline-block">Flexible Mastery</span>
              <h4 className="text-lg font-bold text-white mb-1">Royal Nova</h4>
              <p className="text-xs text-slate-400 mb-4">Grade 9+ & Adults</p>
              <ul className="space-y-2 text-xs text-ivory-50/90">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-champagne-400 shrink-0" /> Targeted AI, coding, and web modules</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-champagne-400 shrink-0" /> High-school exam & subject reinforcement</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-champagne-400 shrink-0" /> Professional communication & portfolio building</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-champagne-400 shrink-0" /> Custom learning plan & custom quote</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Supplementary Academic Support Statement */}
        <div className="p-6 bg-champagne-50/70 border border-champagne-200/70 rounded-2xl text-center max-w-3xl mx-auto mb-12">
          <h4 className="text-xs uppercase tracking-widest font-bold text-ink-900 mb-1">Independent System & School Support</h4>
          <p className="text-xs text-ink-800/90 leading-relaxed">
            The Royal Education System follows an independent, conceptual curriculum designed for deep understanding. For learners enrolled in traditional schooling, personalized academic support—including homework guidance and concept doubt clarification—is seamlessly aligned with their school board (CBSE, British, American, or National curricula).
          </p>
        </div>
      </div>

      <CTASection
        title="Find the Perfect Program for Your Learner"
        description="Schedule a complimentary learning assessment to discover where your child will thrive in the Royal Education System."
        primaryCTA={{ text: "Book Free Assessment", link: "/free-assessment" }}
        secondaryCTA={{ text: "View Fee Structure", link: "/fees" }}
        variant="navy"
      />
    </div>
  );
};

export default ProgramsPage;
