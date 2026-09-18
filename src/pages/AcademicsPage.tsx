import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Brain, Calculator, FlaskConical, MessageSquare, 
  Sparkles, CheckCircle2, ArrowRight, Lightbulb, Compass, Zap 
} from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const AcademicsPage: React.FC = () => {
  useDocumentTitle('Academics | The Royal Education System');
  const [activeSubject, setActiveSubject] = useState<'math' | 'science' | 'english' | 'communication'>('math');

  const subjectData = {
    math: {
      title: 'Mathematics',
      tagline: 'Logical reasoning, geometric patterns, and real-world problem solving.',
      philosophy: 'No blind memorization of formulas. Learners visualize why numbers behave the way they do.',
      visuals: [
        { label: 'Spatial Visualization', desc: 'Interactive coordinate geometry and fractional models.' },
        { label: 'Algorithmic Logic', desc: 'Decomposing complex word problems into sequential steps.' },
        { label: 'Real-World Budgeting', desc: 'Calculating currency, measurement, and statistical probabilities.' },
      ],
      topics: ['Number Sense & Fluency', 'Algebraic Thinking', 'Applied Geometry', 'Data & Statistics', 'Real-world Logic'],
      example: {
        concept: 'The Pythagorean Theorem',
        traditional: 'Memorize a² + b² = c² and compute hypotenuses on worksheets.',
        royalMethod: 'Arrange physical and digital square tiles around right triangles to prove that areas literally sum, then apply to satellite distances.',
      },
    },
    science: {
      title: 'Science & Discovery',
      tagline: 'Empirical inquiry, active hypothesis, and understanding our living universe.',
      philosophy: 'Science is an active method of questioning, not a list of textbook facts to recall.',
      visuals: [
        { label: 'Living Systems & Biology', desc: 'Observing cell mechanics, ecosystems, and human physiology.' },
        { label: 'Forces & Physics', desc: 'Simulating gravity, friction, energy transformations and optics.' },
        { label: 'Matter & Chemistry', desc: 'Atomic structures, molecular bonding, and chemical interactions.' },
      ],
      topics: ['Physics & Mechanics', 'Living Systems & Biology', 'Chemical Reactions', 'Earth & Space Systems', 'Environmental Science'],
      example: {
        concept: 'Photosynthesis & Cellular Energy',
        traditional: 'Memorize: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ for the exam.',
        royalMethod: 'Manipulate virtual sunlight intensity and carbon levels in leaf simulation, observe oxygen bubble release, and explain the energy flow to the class.',
      },
    },
    english: {
      title: 'English Language Arts',
      tagline: 'Critical comprehension, voice articulation, and creative expression.',
      philosophy: 'Language is thinking made visible. We cultivate readers who evaluate and writers who inspire.',
      visuals: [
        { label: 'Critical Reading', desc: 'Dissecting author tone, structural intent, and context.' },
        { label: 'Expressive Composition', desc: 'Drafting essays, narratives, and investigative reports.' },
        { label: 'Grammar in Living Context', desc: 'Mastering syntax through spoken and written application.' },
      ],
      topics: ['Deep Text Comprehension', 'Creative & Narrative Writing', 'Grammar in Functional Context', 'Vocabulary Etymology', 'Comparative Analysis'],
      example: {
        concept: 'Persuasive Writing & Rhetoric',
        traditional: 'Fill in blank transition words and write a generic five-paragraph essay.',
        royalMethod: 'Analyze historic speeches for ethos, pathos, and logos, then compose and deliver an editorial on a modern technological ethics dilemma.',
      },
    },
    communication: {
      title: 'Communication & Debate',
      tagline: 'Public speaking, active listening, structured dialogue, and confidence.',
      philosophy: 'Brilliant ideas remain dormant without the clarity and poise to articulate them.',
      visuals: [
        { label: 'Public Presentation', desc: 'Structuring slides, maintaining eye contact, and pacing speech.' },
        { label: 'Parliamentary Debate', desc: 'Constructing logical rebuttals with verified evidence.' },
        { label: 'Active Empathy Listening', desc: 'Paraphrasing peer viewpoints before delivering responses.' },
      ],
      topics: ['Public Presentation & Oratory', 'Structured Debate Formats', 'Active Listening & Synthesis', 'Interview Skills', 'Digital Collaboration'],
      example: {
        concept: 'Constructive Disagreement',
        traditional: 'Rarely practiced in ordinary school classrooms due to rigid exam syllabi.',
        royalMethod: 'Learners engage in timed Oxford-style debates on ethical AI use, requiring each student to defend opposing viewpoints with reasoned evidence.',
      },
    },
  };

  const active = subjectData[activeSubject];

  return (
    <div className="bg-ivory-50 min-h-screen">
      <PageHero 
        title="Academics: Understand, Don't Memorize" 
        subtitle="Core subject mastery built upon conceptual comprehension, visual models, and applied problem solving."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Academics' }]}
      />
      
      {/* Central Philosophy Banner */}
      <section className="py-16 px-4 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-champagne-50 border border-champagne-200 text-champagne-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Lightbulb className="w-3.5 h-3.5 text-champagne-600" /> Educational Philosophy
          </div>
          <h2 className="font-heading text-ink-900 font-extrabold mb-4" style={{ fontSize: 'var(--fs-h2)' }}>
            UNDERSTANDING &gt; MEMORIZATION
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Standard tuition centers coach learners to copy solutions. Royal Education System constructs deep mental models so students can solve unfamiliar problems with confidence.
          </p>
        </div>
      </section>

      {/* Interactive 4-Subject Visual Selector */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {[
              { id: 'math', label: 'Mathematics', icon: <Calculator className="w-5 h-5" /> },
              { id: 'science', label: 'Science & Discovery', icon: <FlaskConical className="w-5 h-5" /> },
              { id: 'english', label: 'English Language', icon: <BookOpen className="w-5 h-5" /> },
              { id: 'communication', label: 'Communication & Debate', icon: <MessageSquare className="w-5 h-5" /> },
            ].map(tab => {
              const isActive = activeSubject === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubject(tab.id as any)}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                    isActive
                      ? 'bg-ink-900 text-white border-champagne-500 shadow-lg -translate-y-1'
                      : 'bg-white text-ink-900 border-slate-200 hover:border-champagne-300 hover:bg-ivory-50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-champagne-400 text-ink-950' : 'bg-ivory-50 text-champagne-600'
                  }`}>
                    {tab.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm">{tab.label}</h3>
                    <span className={`text-[10px] block ${isActive ? 'text-champagne-300' : 'text-slate-400'}`}>
                      Explore subject
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Subject Visual Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSubject}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl"
            >
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-7">
                  <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 bg-champagne-50 px-3 py-1 rounded-full mb-3 inline-block">
                    Core Academic Pillar
                  </span>
                  <h3 className="text-3xl font-extrabold font-heading text-ink-900 mb-2">
                    {active.title}
                  </h3>
                  <p className="text-sm font-semibold text-champagne-600 mb-4">
                    {active.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                    {active.philosophy}
                  </p>

                  <div className="grid sm:grid-cols-3 gap-3 mb-8">
                    {active.visuals.map((vis, i) => (
                      <div key={i} className="p-3.5 bg-ivory-50 rounded-xl border border-slate-100">
                        <span className="font-bold text-xs text-ink-900 block mb-1">{vis.label}</span>
                        <span className="text-[11px] text-slate-500 block leading-relaxed">{vis.desc}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                       Key Curriculum Units
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {active.topics.map((t, idx) => (
                        <span key={idx} className="px-3 py-1 bg-ivory-100 text-ink-800 text-xs font-medium rounded-lg">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* The Traditional vs Royal Education Comparison */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="bg-ink-900 text-white rounded-2xl p-6 border border-ink-800 shadow-lg">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-champagne-400 block mb-3">
                      Pedagogical Comparison: {active.example.concept}
                    </span>

                    <div className="space-y-4 text-xs">
                      <div className="p-3 bg-ink-950/80 rounded-xl border border-red-500/20">
                        <span className="text-red-400 font-bold block mb-1">Standard Tutoring Approach:</span>
                        <p className="text-slate-300 leading-relaxed">{active.example.traditional}</p>
                      </div>

                      <div className="p-3 bg-ink-950/80 rounded-xl border border-champagne-500/30">
                        <span className="text-champagne-300 font-bold block mb-1">Royal Education System Approach:</span>
                        <p className="text-ivory-50/90 leading-relaxed">{active.example.royalMethod}</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-ink-800 text-center">
                      <Link
                        to="/free-assessment"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-champagne-300 hover:text-white"
                      >
                        Book Diagnostic Subject Assessment <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* School Support & Three Educational Pathways Note */}
      <section className="py-12 px-4 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto p-7 bg-ivory-50 rounded-3xl border border-ink-100/15 text-center">
          <span className="text-[10px] uppercase font-bold tracking-widest text-champagne-700 block mb-1">
            Proprietary Framework &amp; Three Distinct Educational Pathways
          </span>
          <h4 className="font-heading font-extrabold text-ink-950 text-base sm:text-lg mb-2">
            RES Curriculum vs. External School Support
          </h4>
          <p className="text-xs text-ink-700 leading-relaxed mb-4 max-w-2xl mx-auto">
            The Royal Education System operates its own proprietary conceptual curriculum and developmental framework. RES does not adopt CBSE, British, American, Federal, or Government school curricula. For learners attending traditional or online schools worldwide, we offer <strong>Free International Academic Doubt Support</strong>. In Pakistan, we additionally provide <strong>Paid Personal Tuition</strong> tailored to day-school syllabus requirements with Urdu voice support available.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link to="/#academic-services" className="font-bold text-champagne-700 hover:text-champagne-900 underline">
              View All Three Pathways &rarr;
            </Link>
            <Link to="/query" className="font-bold text-ink-900 hover:text-champagne-700 underline">
              Submit an Academic Question &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience Concept-First Academics"
        description="Book a diagnostic learning assessment to identify subject gaps and build lifelong conceptual confidence."
        primaryCTA={{ text: "Book Free Assessment", link: "/free-assessment" }}
        secondaryCTA={{ text: "Explore Learning Method", link: "/learning-method" }}
        variant="navy"
      />
    </div>
  );
};

export default AcademicsPage;
