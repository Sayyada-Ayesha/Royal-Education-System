import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, BookOpen, Cpu, MessageCircle, Heart, 
  CheckCircle2, Shield, Target, Users, ChevronDown, ChevronUp, 
  Sparkles, Compass, Layers, Calendar, Award, Wrench, HelpCircle,
  TrendingUp, Calculator, Lightbulb, ArrowDown, ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import { HeroMediaSequence } from '../components/HeroMediaSequence';
import EcosystemDiagram from '../components/EcosystemDiagram';
import JourneyEndingGraphic from '../components/JourneyEndingGraphic';
import FoundersSection from '../components/FoundersSection';
import DigitalCharactersSection from '../components/DigitalCharactersSection';
import AcademicSupportSection from '../components/AcademicSupportSection';
import ScholarshipAndDonationSection from '../components/ScholarshipAndDonationSection';
import LearnBeyondSection from '../components/LearnBeyondSection';

// Data
import { gradePricing, countryRegions, paymentSchedules } from '../data/pricingData';
import { faqData } from '../data/faqData';
import { partners } from '../data/partnerData';
import { mediaConfig } from '../data/mediaConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const HomePage: React.FC = () => {
  useDocumentTitle('The Royal Education System — A Global, Structured & Unified Learning System');
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [selectedCountryId, setSelectedCountryId] = useState<string>('uae');
  const [selectedMethodStep, setSelectedMethodStep] = useState<number>(0);

  const toggleFaq = (id: string) => setOpenFaq(openFaq === id ? null : id);
  const activeCountry = countryRegions.find(c => c.id === selectedCountryId) || countryRegions[0];

  return (
    <main className="flex flex-col">
      
      {/* ============================================================
          01 — EDITORIAL HERO (Visible Cinematic Media on Right)
          ============================================================ */}
      <section className="relative min-h-[560px] lg:min-h-[86vh] flex items-center pt-24 pb-16 px-4 overflow-hidden">
        <HeroMediaSequence />
        
        <div className="relative z-20 site-container w-full">
          <div className="max-w-2xl lg:max-w-xl">
            
            {/* Small Elegant Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-400/15 border border-champagne-400/30 text-champagne-300 text-xs font-bold uppercase tracking-widest mb-5 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-champagne-400" /> The Royal Education System
            </motion.div>

            {/* Balanced Fluid Master Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white mb-5 font-heading font-extrabold tracking-tight leading-[1.12]"
              style={{ fontSize: 'var(--fs-display)' }}
            >
              A Global, Structured &amp; Unified<br />
              <span className="text-gradient">Learning System</span>
            </motion.h1>

            {/* Concise Supporting Copy */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-ivory-100 text-sm sm:text-base mb-8 font-normal leading-relaxed max-w-lg"
            >
              <p className="text-ivory-100/90 text-xs sm:text-sm">
                Bring learning together through conceptual understanding, practical skills, technology, communication and personal growth.
              </p>
            </motion.div>

            {/* Proportional Primary & Secondary Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <Link to="/free-assessment" className="btn-primary text-xs sm:text-sm px-6 py-3.5 flex items-center justify-center gap-2 shadow-md">
                BOOK FREE ASSESSMENT <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/programmes" 
                className="btn-secondary text-xs sm:text-sm px-6 py-3.5 border-white/25 text-white hover:text-champagne-300 hover:border-champagne-400/50 text-center backdrop-blur-xs"
              >
                EXPLORE PROGRAMS
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Subtle Divider */}
      <div className="divider-champagne"></div>

      {/* ============================================================
          02 — WARM IVORY: WHY RES / THE FRAGMENTED PROBLEM
          ============================================================ */}
      <section className="section-padding px-4 bg-ivory-100 border-b border-ink-100/8">
        <div className="site-container">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="eyebrow-pill mb-3">
              The Educational Dilemma
            </span>
            <h2 className="font-heading font-extrabold text-ink-950 mt-3 mb-4" style={{ fontSize: 'var(--fs-h2)' }}>
              One System. Not Eight Different Ones.
            </h2>
            <p className="text-ink-600 leading-relaxed max-w-2xl mx-auto" style={{ fontSize: 'var(--fs-body)' }}>
              Today, a learner may need separate places for academics, extra tutoring, faith, communication, and digital technology. RES brings these dimensions together into one accessible environment.
            </p>
          </div>

          {/* Fragmented vs Unified Editorial Comparison */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
            
            {/* The Fragmented Reality */}
            <div className="bg-white/80 p-8 rounded-3xl border border-ink-100/15 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-ink-400 block mb-2">The Traditional Challenge</span>
                <h3 className="text-xl font-bold font-heading text-ink-900 mb-4">Fragmented Learning Journey</h3>
                <p className="text-xs sm:text-sm text-ink-600 mb-6 leading-relaxed">
                  Scattered schedules, competing homework demands, conflicting tutors, and disjointed values create mental exhaustion without developing real-world confidence.
                </p>
                <div className="grid grid-cols-2 gap-2.5 text-xs text-ink-700">
                  {['Isolated tutoring center', 'Separate Quran class', 'Disconnected coding app', 'Exams without understanding', 'Passive screen consumption', 'Lack of practical life skills'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-ivory-50 border border-ink-100/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-wine-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-ink-100/10 text-xs text-ink-400 italic">
                Result: Fragmented progress, stress, and shallow retention.
              </div>
            </div>

            {/* The RES Unified Solution */}
            <div className="bg-pearl-100 p-8 rounded-3xl border-2 border-champagne-400/40 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-champagne-400/10 rounded-bl-full pointer-events-none" />
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-champagne-700 block mb-2">The RES Advantage</span>
                <h3 className="text-xl font-bold font-heading text-ink-950 mb-4">Unified Learning Continuum</h3>
                <p className="text-xs sm:text-sm text-ink-700 mb-6 leading-relaxed">
                  A coherent educational environment aligning academic mastery, practical computing, articulation, moral clarity, and tangible projects around the student.
                </p>
                <div className="grid grid-cols-2 gap-2.5 text-xs text-ink-900 font-semibold">
                  {['First-principles academics', 'Live doubt support channel', 'Integrated tech & Python', 'Spoken debate & poise', 'Quran & universal ethics', 'Tangible student capstones'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-champagne-200 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-champagne-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-champagne-300/30 flex items-center justify-between text-xs text-champagne-800 font-bold">
                <span>Result: Coherent growth, confidence, and life capability.</span>
                <Link to="/about" className="hover:underline flex items-center gap-1 shrink-0">
                  Read Vision <ArrowRight size={13} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          03 — PEARL: UNIFIED LEARNING SYSTEM (Ecosystem Diagram)
          ============================================================ */}
      <EcosystemDiagram />

      {/* ============================================================
          04 — WHITE: PROGRAMMES PROGRESSION (Juniors → Gems → Nova)
          ============================================================ */}
      <section className="section-padding px-4 bg-white border-b border-ink-100/8">
        <div className="site-container">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow-pill mb-3">
              One Continuum · Three Chapters
            </span>
            <h2 className="font-heading font-extrabold text-ink-950 mt-3 mb-4" style={{ fontSize: 'var(--fs-h2)' }}>
              Designed for Every Stage of Growth
            </h2>
            <p className="text-ink-600 leading-relaxed" style={{ fontSize: 'var(--fs-body)' }}>
              From foundational early curiosity to practical capability and specialized career pathways.
            </p>
          </div>

          <div className="flex flex-col gap-12 lg:gap-16">
            
            {/* Chapter 1: Royal Juniors (KG–4) — Warm Ivory & Gentle Accent */}
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-14 bg-ivory-100 rounded-3xl p-6 lg:p-10 border border-ink-100/10 shadow-xs">
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden relative bg-pearl-100 group shadow-sm">
                <img
                  src={mediaConfig.programmeImages.juniors}
                  alt="Royal Juniors Foundation Stage"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-champagne-300 block mb-0.5">Foundation Phase</span>
                  <span className="font-heading font-bold text-lg">KG to Grade 4</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="eyebrow text-xs mb-2">Foundation Chapter</span>
                <h3 className="font-heading font-extrabold text-ink-950 mb-3" style={{ fontSize: 'var(--fs-h3)' }}>
                  Royal Juniors
                </h3>
                <p className="text-champagne-700 font-bold mb-4" style={{ fontSize: 'var(--fs-body-lg)' }}>
                  Build Strong Foundations Before The World Gets Complicated.
                </p>
                <p className="text-ink-600 mb-6 leading-relaxed" style={{ fontSize: 'var(--fs-body)' }}>
                  KG is not a rigid textbook drill. Royal Juniors focuses on manners, ethics, daily habits, life skills, communication confidence, curiosity, basic social understanding, and age-appropriate guided AI awareness (ChatGPT, Claude, and creative tools).
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Manners & Ethics', 'Spoken Communication', 'Daily Habits & Life Skills', 'Curiosity & Thinking Activities', 'Early Digital & Guided AI', 'Creativity'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white text-ink-800 text-xs font-bold rounded-full border border-ink-100/15 shadow-2xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to="/royal-juniors" className="btn-secondary w-fit">
                  Explore Royal Juniors <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Chapter 2: Royal Gems (5–8) — Pearl & Deep Ink Applied Skills */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 lg:gap-14 bg-pearl-100 rounded-3xl p-6 lg:p-10 border border-ink-100/10 shadow-xs">
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden relative bg-ink-950 group shadow-sm">
                <img
                  src={mediaConfig.programmeImages.gems}
                  alt="Royal Gems Development Stage"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-champagne-400 block mb-0.5">Development Phase</span>
                  <span className="font-heading font-bold text-lg">Grade 5 to Grade 8</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="eyebrow text-xs mb-2">Development Chapter</span>
                <h3 className="font-heading font-extrabold text-ink-950 mb-3" style={{ fontSize: 'var(--fs-h3)' }}>
                  Royal Gems
                </h3>
                <p className="text-champagne-700 font-bold mb-4" style={{ fontSize: 'var(--fs-body-lg)' }}>
                  From Knowledge to Capability.
                </p>
                <p className="text-ink-600 mb-6 leading-relaxed" style={{ fontSize: 'var(--fs-body)' }}>
                  A skills-heavier development pathway connecting academic concepts with real-world capability: practical math, budgeting, finance, accounting concepts, coding, graphic design, video editing, web development, AI solutions, automation, and digital portfolios.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Practical Math & Finance', 'Budgeting & Accounting', 'Coding & Web Development', 'Graphic Design & Video Editing', 'AI Solutions & Automation', 'Digital Portfolio'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white text-ink-800 text-xs font-bold rounded-full border border-ink-100/15 shadow-2xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to="/royal-gems" className="btn-secondary w-fit">
                  Explore Royal Gems <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Chapter 3: Royal Nova (9+) — Deep Ink & Champagne Specialization */}
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-14 gradient-ink text-white rounded-3xl p-6 lg:p-10 border border-champagne-400/20 shadow-md">
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden relative bg-midnight-950 group shadow-sm">
                <img
                  src={mediaConfig.programmeImages.nova}
                  alt="Royal Nova Specialization"
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-champagne-400 block mb-0.5">Specialization Phase</span>
                  <span className="font-heading font-bold text-lg text-white">Grade 9+ & Beyond</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="eyebrow text-xs text-champagne-400 mb-2">Specialization Chapter</span>
                <h3 className="font-heading font-extrabold text-white mb-3" style={{ fontSize: 'var(--fs-h3)' }}>
                  Royal Nova
                </h3>
                <p className="text-champagne-300 font-bold mb-4" style={{ fontSize: 'var(--fs-body-lg)' }}>
                  Choose What You Want To Learn. Build The Skills You Need.
                </p>
                <p className="text-ivory-200/80 mb-6 leading-relaxed" style={{ fontSize: 'var(--fs-body)' }}>
                  Tailored duration based on your goals. Tailored for high-schoolers, graduates, professionals, and lifelong learners looking to build deployable portfolios in Applied AI, Web Engineering, Digital Business, Client Communication, and Professional Presence.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Applied AI & AI Agents', 'Full-Stack Web Dev', 'Digital Business & Marketing', 'Client Communication', 'Professional Portfolio', 'Custom Duration'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 text-ivory-100 text-xs font-bold rounded-full border border-white/15">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to="/royal-nova" className="btn-primary w-fit">
                  Explore Royal Nova <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          05 — TWO DISTINCT SUPPORT MODELS (INTERNAL WORK SESSIONS & FREE DOUBT SUPPORT)
          ============================================================ */}
      <AcademicSupportSection />

      {/* ============================================================
          05A — LEARN BEYOND THE CORE PROGRAMME (MASTERCLASSES, WORKSHOPS, TRAININGS, OPPORTUNITIES)
          ============================================================ */}
      <LearnBeyondSection />

      {/* ============================================================
          05B — PRACTICAL MATHEMATICS REAL-WORLD CAPABILITY
          ============================================================ */}
      <section className="section-padding px-4 bg-pearl-50 border-b border-ink-100/8">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill mb-3">Applied Competence</span>
            <h3 className="font-heading font-extrabold text-ink-950 mt-2 mb-3" style={{ fontSize: 'var(--fs-h2)' }}>
              Practical Mathematics: Real-World Capability
            </h3>
            <p className="text-ink-600 text-sm">
              We teach mathematics not as abstract formula memorization, but as an active decision-making instrument for life and future careers.
            </p>
          </div>

          {/* Practical Mathematics Visual Diagram */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            
            <div className="card p-7">
              <span className="eyebrow text-xs mb-2 block">Everyday Math</span>
              <h4 className="font-heading font-bold text-base text-ink-950 mb-3">Math into Practical Living</h4>
              <div className="flex items-center gap-2 text-xs font-bold text-ink-800 flex-wrap">
                <span className="px-3 py-1.5 bg-ivory-200 rounded-lg">MATH</span>
                <span>→</span>
                <span className="px-3 py-1.5 bg-ivory-200 rounded-lg">MONEY</span>
                <span>→</span>
                <span className="px-3 py-1.5 bg-champagne-100 text-champagne-800 rounded-lg">FINANCE</span>
                <span>→</span>
                <span className="px-3 py-1.5 bg-ivory-200 rounded-lg">DAILY DECISIONS</span>
              </div>
              <p className="text-xs text-ink-500 mt-4 leading-relaxed">
                Students practice budgeting simulations, understanding interest, tracking personal savings, and calculating practical everyday values.
              </p>
            </div>

            <div className="card p-7">
              <span className="eyebrow text-xs mb-2 block">Scientific Math</span>
              <h4 className="font-heading font-bold text-base text-ink-950 mb-3">Math into Scientific Thinking</h4>
              <div className="flex items-center gap-2 text-xs font-bold text-ink-800 flex-wrap">
                <span className="px-3 py-1.5 bg-ivory-200 rounded-lg">MATH</span>
                <span>→</span>
                <span className="px-3 py-1.5 bg-ivory-200 rounded-lg">SCIENCE</span>
                <span>→</span>
                <span className="px-3 py-1.5 bg-champagne-100 text-champagne-800 rounded-lg">MEASUREMENT</span>
                <span>→</span>
                <span className="px-3 py-1.5 bg-ivory-200 rounded-lg">APPLICATION</span>
              </div>
              <p className="text-xs text-ink-500 mt-4 leading-relaxed">
                Physics mechanics, geometry in architectural models, unit conversions in plant growth, and mathematical logic in computer code.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          06 — PEARL: LEARNING METHOD (5-Step Active Process)
          ============================================================ */}
      <section className="section-padding px-4 bg-pearl-50 border-b border-ink-100/8">
        <div className="site-container text-center">
          <span className="eyebrow-pill mb-3">Pedagogical Framework</span>
          <h2 className="font-heading font-extrabold text-ink-950 mt-3 mb-3" style={{ fontSize: 'var(--fs-h2)' }}>
            Learn It. Understand It. Use It. Create With It.
          </h2>
          <p className="text-ink-600 max-w-xl mx-auto mb-14" style={{ fontSize: 'var(--fs-body)' }}>
            Every concept travels through an active 5-step progression before advancing.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 mb-10 max-w-5xl mx-auto">
            {[
              { num: '1', title: 'UNDERSTAND', desc: 'Visual models, physical simulations, and first principles.' },
              { num: '2', title: 'PRACTICE', desc: 'Guided mastery exercises and step-by-step problem solving.' },
              { num: '3', title: 'EXPLAIN', desc: 'Learners verbalize concepts in their own spoken words.' },
              { num: '4', title: 'APPLY', desc: 'Real-world scenarios, budgets, and cross-subject challenges.' },
              { num: '5', title: 'CREATE', desc: 'Working software, simulations, or original capstone projects.' },
            ].map((st, i) => (
              <button
                key={st.num}
                onClick={() => setSelectedMethodStep(i)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all text-center flex flex-col justify-between ${
                  selectedMethodStep === i
                    ? 'bg-ink-950 text-white border-champagne-400 shadow-md ring-2 ring-champagne-400/20'
                    : 'bg-white text-ink-900 border-ink-100/15 hover:border-champagne-300'
                }`}
              >
                <div>
                  <span className={`text-xs font-extrabold block mb-1 ${
                    selectedMethodStep === i ? 'text-champagne-400' : 'text-ink-400'
                  }`}>
                    0{st.num}
                  </span>
                  <span className="text-xs sm:text-sm font-bold block mb-2">{st.title}</span>
                </div>
                <p className={`text-[11px] leading-relaxed hidden sm:block ${
                  selectedMethodStep === i ? 'text-ivory-200/80' : 'text-ink-500'
                }`}>
                  {st.desc}
                </p>
              </button>
            ))}
          </div>

          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-ink-100/15 text-left max-w-2xl mx-auto shadow-xs">
            <span className="eyebrow mb-2 block">Pedagogy in Action: Photosynthesis</span>
            <p className="text-ink-600 leading-relaxed mb-4 text-xs sm:text-sm">
              Instead of merely memorizing chemical equations by rote, learners observe real leaves, simulate sunlight variables, explain the oxygen exchange to peers, and build an environmental plant journal.
            </p>
            <Link to="/learning-method" className="inline-flex items-center text-xs font-bold text-champagne-700 hover:underline">
              Explore the complete 5-step methodology <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          07 — DARK INK: SIGNATURE FEATURE (Technology & AI)
          ============================================================ */}
      <section className="section-padding px-4 gradient-ink text-white relative overflow-hidden">
        <div className="site-container">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <span className="eyebrow-pill text-champagne-300 bg-champagne-400/10 border-champagne-400/25 mb-3">
              Future Capability
            </span>
            <h2 className="font-heading font-extrabold text-white mt-3 mb-4" style={{ fontSize: 'var(--fs-h2)' }}>
              From Digital Foundations to Applied AI
            </h2>
            <p className="text-ivory-200/80 leading-relaxed max-w-2xl mx-auto" style={{ fontSize: 'var(--fs-body)' }}>
              Technology is taught as a creative human medium for problem-solving, never passive screen consumption.
            </p>
          </div>

          {/* 4-Stage Technology Pathway */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {[
              { num: '01', title: 'Digital Foundations', desc: 'Hardware fundamentals, file safety, typing, and healthy screen habits.' },
              { num: '02', title: 'Creation & Coding', desc: 'Block programming (Scratch), sensor logic, and interactive animation.' },
              { num: '03', title: 'AI Awareness', desc: 'Demystifying neural models, responsible prompting, and ethical safety.' },
              { num: '04', title: 'Applied Capstones', desc: 'Python programming, web development, video editing, and live portfolios.' },
            ].map((st) => (
              <div key={st.num} className="bg-white/4 border border-white/10 rounded-2xl p-6 backdrop-blur-xs flex flex-col justify-between">
                <div>
                  <span className="text-xs font-extrabold text-champagne-400 mb-2 block">{st.num}</span>
                  <h3 className="font-heading font-bold text-base text-white mb-2">{st.title}</h3>
                  <p className="text-xs text-ivory-200/70 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/technology-ai" className="btn-primary text-xs px-6 py-3">
              Explore Technology & AI Curriculum <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          08 — WHITE: REAL STUDENT PROJECTS SHOWCASE
          ============================================================ */}
      <section className="section-padding px-4 bg-white border-b border-ink-100/8">
        <div className="site-container">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="eyebrow-pill mb-3">Tangible Student Work</span>
              <h2 className="font-heading font-extrabold text-ink-950 mt-3 mb-2" style={{ fontSize: 'var(--fs-h2)' }}>
                Real Projects. Real Progress.
              </h2>
              <p className="text-ink-600 text-sm">
                Achievable, age-appropriate work created by our students. No fake corporate portfolios.
              </p>
            </div>
            <Link to="/projects" className="btn-secondary text-xs shrink-0">
              View All Student Projects <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>

          {/* Editorial Asymmetric Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Featured Project (8 cols) */}
            <div className="md:col-span-8 group relative rounded-3xl overflow-hidden bg-ink-950 aspect-[16/10] md:aspect-auto md:min-h-[420px] shadow-sm">
              <img 
                src="/images/Slideshow/2.jpeg" 
                alt="Featured Project: Planetary Simulation" 
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 opacity-85" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 lg:p-10 text-white w-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-0.5 bg-champagne-400 text-ink-950 text-xs font-bold rounded-full">Royal Gems</span>
                  <span className="px-3 py-0.5 bg-white/20 text-white text-xs font-bold rounded-full">Grade 6</span>
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                  Interactive Solar System Simulation
                </h3>
                <p className="text-ivory-200/80 text-xs sm:text-sm max-w-xl leading-relaxed">
                  Learners used beginner coding blocks to model orbital mechanics, connecting abstract math formulas directly to an interactive visual simulation.
                </p>
              </div>
            </div>

            {/* Side Projects (4 cols) */}
            <div className="md:col-span-4 flex flex-col gap-6">
              
              <div className="flex-1 group relative rounded-3xl overflow-hidden bg-ink-950 aspect-video md:aspect-auto min-h-[190px] shadow-xs">
                <img 
                  src="/images/Slideshow/1.jpeg" 
                  alt="Juniors Project" 
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 opacity-75" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 text-white w-full">
                  <span className="px-2.5 py-0.5 bg-champagne-500/30 text-champagne-300 text-[10px] font-bold rounded-full mb-2 inline-block">Royal Juniors</span>
                  <h4 className="font-heading font-bold text-base text-white mb-1">My Daily Routine Poster</h4>
                  <p className="text-ivory-200/70 text-xs">Graphic design project exploring healthy habits.</p>
                </div>
              </div>

              <div className="flex-1 group relative rounded-3xl overflow-hidden bg-ink-950 aspect-video md:aspect-auto min-h-[190px] shadow-xs">
                <img 
                  src="/images/Slideshow/3.jpeg" 
                  alt="Nova Project" 
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 opacity-75" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 text-white w-full">
                  <span className="px-2.5 py-0.5 bg-champagne-400 text-ink-950 text-[10px] font-bold rounded-full mb-2 inline-block">Royal Nova</span>
                  <h4 className="font-heading font-bold text-base text-white mb-1">First Web Portfolio</h4>
                  <p className="text-ivory-200/70 text-xs">Responsive HTML/CSS personal showcase page.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          09 — IVORY: WHOLE-PERSON DEVELOPMENT & 9-YEAR JOURNEY
          ============================================================ */}
      <section className="section-padding px-4 bg-ivory-100 border-b border-ink-100/8">
        <div className="site-container">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow-pill mb-3">Holistic Mentorship</span>
            <h2 className="font-heading font-extrabold text-ink-950 mt-3 mb-3" style={{ fontSize: 'var(--fs-h2)' }}>
              Supporting the Learner as a Whole
            </h2>
            <p className="text-ink-600 leading-relaxed" style={{ fontSize: 'var(--fs-body)' }}>
              Academic strength must be matched by emotional resilience, ethical clarity, and daily habits.
            </p>
          </div>

          {/* 3 Holistic Pillars */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            
            <div className="card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-champagne-100 text-champagne-800 flex items-center justify-center mb-5">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-ink-950 mb-2">
                  Regular Monthly Development Sessions
                </h3>
                <p className="text-xs text-ink-600 leading-relaxed">
                  Monthly interactive workshops rotating through motivation, wellbeing, digital citizenship, career awareness, and ethical decision-making.
                </p>
              </div>
              <span className="text-[11px] font-bold text-champagne-700 mt-5 pt-3 border-t border-ink-100/10 block">
                Held Monthly Across All Stages
              </span>
            </div>

            <div className="card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-champagne-100 text-champagne-800 flex items-center justify-center mb-5">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-ink-950 mb-2">
                  Personalized Academic Support
                </h3>
                <p className="text-xs text-ink-600 leading-relaxed">
                  Students attending local or international schools can submit questions through our support channel for targeted conceptual clarification.
                </p>
              </div>
              <span className="text-[11px] font-bold text-champagne-700 mt-5 pt-3 border-t border-ink-100/10 block">
                Continuous Mentorship
              </span>
            </div>

            <div className="card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-champagne-100 text-champagne-800 flex items-center justify-center mb-5">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-ink-950 mb-2">
                  Faith & Character Grounding
                </h3>
                <p className="text-xs text-ink-600 leading-relaxed">
                  Dedicated Quranic comprehension for Muslim learners; universal character, integrity, empathy, and mutual respect for all students.
                </p>
              </div>
              <span className="text-[11px] font-bold text-champagne-700 mt-5 pt-3 border-t border-ink-100/10 block">
                Respectful & Inclusive
              </span>
            </div>

          </div>

          {/* Potential 9-Year Journey Visual */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-ink-100/15 max-w-5xl mx-auto shadow-xs">
            <div className="text-center mb-8">
              <span className="eyebrow text-xs mb-1 block">Long-Term Educational Horizon</span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-ink-950">
                A Potential 9-Year Learning Journey
              </h3>
              <p className="text-xs text-ink-500 mt-1">
                Each grade represents one structured learning year. Step by step from foundational curiosity to high capability.
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-9 gap-2 sm:gap-2.5 text-center">
              {[
                { grade: 'KG', phase: 'Juniors', label: 'Curiosity' },
                { grade: 'G1', phase: 'Juniors', label: 'Habits' },
                { grade: 'G2', phase: 'Juniors', label: 'Fluency' },
                { grade: 'G3', phase: 'Juniors', label: 'Inquiry' },
                { grade: 'G4', phase: 'Juniors', label: 'Reasoning' },
                { grade: 'G5', phase: 'Gems', label: 'Concepts' },
                { grade: 'G6', phase: 'Gems', label: 'Coding' },
                { grade: 'G7', phase: 'Gems', label: 'Analysis' },
                { grade: 'G8', phase: 'Gems', label: 'Capstone' },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-3 rounded-2xl border flex flex-col justify-between ${
                    item.phase === 'Juniors' 
                      ? 'bg-ivory-50 border-ink-100/10' 
                      : 'bg-pearl-100 border-champagne-200'
                  }`}
                >
                  <span className="text-xs font-extrabold text-ink-950 block mb-1 font-heading">{item.grade}</span>
                  <span className="text-[10px] text-champagne-700 font-bold block">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center text-xs text-ink-400 italic">
              *Not a 9-year lock-in subscription. Families enrol year-by-year with flexible payment options.
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          10 — PEARL: ONE LEARNING YEAR. STRUCTURED PAYMENT OPTIONS.
          ============================================================ */}
      <section className="section-padding px-4 bg-pearl-50 border-b border-ink-100/8">
        <div className="site-container-narrow">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow-pill mb-3">Transparent Investment</span>
            <h2 className="font-heading font-extrabold text-ink-950 mt-3 mb-3" style={{ fontSize: 'var(--fs-h2)' }}>
              One Learning Year. Structured Payment Options.
            </h2>
            <p className="text-ink-600 leading-relaxed" style={{ fontSize: 'var(--fs-body)' }}>
              Each grade is designed as a complete one-year educational journey. All fees are paid in advance, with discounts for advance multi-month commitments. These are payment arrangements, not programme durations.
            </p>

            {/* Region Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {countryRegions.map(region => (
                <button
                  key={region.id}
                  onClick={() => setSelectedCountryId(region.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    selectedCountryId === region.id
                      ? 'bg-ink-950 text-white shadow-xs'
                      : 'bg-white text-ink-800 border border-ink-100/15 hover:border-champagne-300'
                  }`}
                >
                  <span>{region.flag}</span>
                  <span>{region.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Card */}
          <div className="bg-white rounded-3xl p-8 border border-ink-100/15 shadow-xs">
            {selectedCountryId === 'pakistan' ? (
              /* Dedicated Pakistani Options: Tuition vs Full Academic Programme */
              <div className="grid sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-ink-100/10">
                <div className="pt-4 sm:pt-0">
                  <span className="eyebrow block mb-2 text-wine-700">Paid Personal Tuition</span>
                  <div className="font-heading font-extrabold text-ink-950" style={{ fontSize: 'var(--fs-h3)' }}>
                    <span className="text-sm font-normal text-ink-500">From </span>PKR 1,000
                    <span className="text-xs text-ink-400 font-normal"> /mo</span>
                  </div>
                  <span className="text-[11px] text-ink-500 mt-1 block">Admission: From PKR 1,000 (Paid in advance)</span>
                  <p className="text-[10px] text-ink-400 mt-1">Coaching for day-school subjects &middot; Urdu voice support available</p>
                </div>

                <div className="pt-4 sm:pt-0">
                  <span className="eyebrow block mb-2 text-champagne-700">RES Academic Programme</span>
                  <div className="font-heading font-extrabold text-ink-950" style={{ fontSize: 'var(--fs-h3)' }}>
                    <span className="text-sm font-normal text-ink-500">From </span>PKR 5,000
                    <span className="text-xs text-ink-400 font-normal"> /mo</span>
                  </div>
                  <span className="text-[11px] text-ink-500 mt-1 block">Admission: From PKR 5,000 (Paid in advance)</span>
                  <p className="text-[10px] text-ink-400 mt-1">RES proprietary curriculum + internal Study &amp; Practice sessions included</p>
                </div>

                <div className="pt-4 sm:pt-0">
                  <span className="eyebrow block mb-2 text-champagne-700">Grade 9+ (Royal Nova)</span>
                  <div className="font-heading font-extrabold text-champagne-600" style={{ fontSize: 'var(--fs-h3)' }}>
                    Custom Quote
                  </div>
                  <span className="text-[11px] text-ink-500 mt-1 block">Specialized Skill Tracks</span>
                  <p className="text-[10px] text-ink-400 mt-1">Duration and track tailored to your career goals</p>
                </div>
              </div>
            ) : (
              /* International Grade Pricing */
              <div className="grid sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-ink-100/10">
                <div className="pt-4 sm:pt-0">
                  <span className="eyebrow block mb-2">KG to Grade 4 (Juniors)</span>
                  <div className="font-heading font-extrabold text-ink-950" style={{ fontSize: 'var(--fs-h3)' }}>
                    {activeCountry.currencySymbol} {selectedCountryId === 'uk' ? '44' : selectedCountryId === 'usa' ? '55' : '199'}
                    <span className="text-xs text-ink-400 font-normal"> /mo</span>
                  </div>
                  <span className="text-xs text-ink-500 mt-1 block">Full 1-Year Academic Pathway</span>
                </div>

                <div className="pt-4 sm:pt-0">
                  <span className="eyebrow block mb-2">Grades 5 to 8 (Gems)</span>
                  <div className="font-heading font-extrabold text-ink-950" style={{ fontSize: 'var(--fs-h3)' }}>
                    {activeCountry.currencySymbol} {selectedCountryId === 'uk' ? '58' : selectedCountryId === 'usa' ? '73' : '269'}
                    <span className="text-xs text-ink-400 font-normal"> /mo</span>
                  </div>
                  <span className="text-xs text-ink-500 mt-1 block">Applied Skills, Tech &amp; Science</span>
                </div>

                <div className="pt-4 sm:pt-0">
                  <span className="eyebrow block mb-2">Grade 9+ (Nova)</span>
                  <div className="font-heading font-extrabold text-champagne-600" style={{ fontSize: 'var(--fs-h3)' }}>
                    Custom Quote
                  </div>
                  <span className="text-xs text-ink-500 mt-1 block">Duration &amp; Modules Chosen by You</span>
                </div>
              </div>
            )}

            {/* Advance Payment Options & Discount Schedules */}
            <div className="mt-8 pt-6 border-t border-ink-100/10">
              <div className="text-center mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-ink-400">
                  Advance Payment Arrangements &amp; Savings (Grade-Based Pathways)
                </span>
              </div>
              <div className="grid sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-ivory-50 rounded-xl border border-ink-100/10">
                  <span className="font-bold text-xs text-ink-900 block">Monthly in Advance</span>
                  <span className="text-[11px] text-ink-500">Standard Schedule</span>
                </div>
                <div className="p-3 bg-champagne-50/70 rounded-xl border border-champagne-200">
                  <span className="font-bold text-xs text-champagne-800 block">3 Months in Advance</span>
                  <span className="text-[11px] text-champagne-700 font-semibold">Save 3% Discount</span>
                </div>
                <div className="p-3 bg-champagne-50/70 rounded-xl border border-champagne-200">
                  <span className="font-bold text-xs text-champagne-800 block">6 Months in Advance</span>
                  <span className="text-[11px] text-champagne-700 font-semibold">Save 5% Discount</span>
                </div>
                <div className="p-3 bg-champagne-100/80 rounded-xl border border-champagne-300">
                  <span className="font-bold text-xs text-champagne-900 block">Full Year in Advance</span>
                  <span className="text-[11px] text-champagne-800 font-bold">Save 10% Discount</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-ink-100/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-ink-500">
                <Shield className="w-4 h-4 text-champagne-600 shrink-0" />
                <span>All fees are paid in advance. Transparent pricing without hidden exam or administrative costs.</span>
              </div>
              <Link to="/fees" className="text-xs font-bold text-ink-950 hover:text-champagne-600 flex items-center gap-1 shrink-0">
                Full Fee &amp; Payment Breakdown <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          10B — NEED-BASED SCHOLARSHIPS & COMMUNITY SUPPORT
          ============================================================ */}
      <ScholarshipAndDonationSection />

      {/* ============================================================
          11 — WHITE: PARTNERS ("OUR LEARNING ECOSYSTEM")
          ============================================================ */}
      <section className="section-padding px-4 bg-white border-b border-ink-100/8">
        <div className="site-container-narrow text-center">
          
          <span className="eyebrow-pill mb-3">Connected Industry Ecosystem</span>
          <h2 className="font-heading font-extrabold text-ink-950 mt-3 mb-3" style={{ fontSize: 'var(--fs-h2)' }}>
            Our Learning Ecosystem
          </h2>
          <p className="text-ink-600 max-w-2xl mx-auto mb-14" style={{ fontSize: 'var(--fs-body)' }}>
            Strategic relationships providing technological advisory, digital business masterclasses, and career awareness.
          </p>

          {/* 3 Refined Partner Blocks with Exact Names */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {partners.map(partner => (
              <div key={partner.id} className="card p-7 flex flex-col justify-between">
                <div>
                  <span className="eyebrow text-xs mb-3 block text-champagne-700">{partner.pillar}</span>
                  <h3 className="font-heading font-bold text-ink-950 text-base mb-1">{partner.name}</h3>
                  <p className="text-champagne-600 font-semibold text-xs mb-3">{partner.tagline}</p>
                  <p className="text-ink-600 leading-relaxed mb-4 text-xs">{partner.description}</p>
                </div>
                {partner.internshipNote && (
                  <span className="text-[10px] text-ink-400 italic border-t border-ink-100/10 pt-3 block">
                    *{partner.internshipNote}
                  </span>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          12 — WARM IVORY: THE PEOPLE BEHIND THE VISION (FOUNDERS)
          ============================================================ */}
      <FoundersSection />

      {/* ============================================================
          13 — WHITE: OFFICIAL DIGITAL GUIDES (MR. ROOK & MRS. ROOK)
          ============================================================ */}
      <DigitalCharactersSection />

      {/* ============================================================
          14 — IVORY: FREQUENTLY ASKED QUESTIONS
          ============================================================ */}
      <section className="section-padding px-4 bg-ivory-100 border-b border-ink-100/8">
        <div className="site-container-narrow">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow-pill mb-3">Clear Answers</span>
            <h2 className="font-heading font-extrabold text-ink-950 mt-3 mb-2" style={{ fontSize: 'var(--fs-h2)' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-ink-600 text-sm">
              Answers visible on initial load. Everything you need to know about RES.
            </p>
          </div>

          <div className="space-y-3">
            {faqData.slice(0, 5).map((faq) => (
              <div key={faq.id} className="bg-white rounded-2xl border border-ink-100/15 overflow-hidden transition-colors shadow-2xs">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-ink-900 hover:text-champagne-700 transition-colors"
                  style={{ fontSize: 'var(--fs-body)' }}
                >
                  <span>{faq.question}</span>
                  {openFaq === faq.id ? (
                    <ChevronUp className="w-4 h-4 text-champagne-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-ink-400 shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-ink-600 leading-relaxed border-t border-ink-100/8 pt-3 text-xs sm:text-sm">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/faq" className="text-xs font-bold text-champagne-700 hover:underline">
              View All Frequently Asked Questions →
            </Link>
          </div>

        </div>
      </section>

      {/* ============================================================
          13 — DARK INK: HOME-ONLY FINAL JOURNEY CTA
          ============================================================ */}
      <JourneyEndingGraphic />

    </main>
  );
};

export default HomePage;
