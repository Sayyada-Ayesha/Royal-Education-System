import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, ChevronRight 
} from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { projects } from '../data/projectData';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const CurriculumPage: React.FC = () => {
  useDocumentTitle('Curriculum | The Royal Education System');
  const [selectedTier, setSelectedTier] = useState<'kg' | 'primary' | 'middle' | 'nova'>('kg');

  const tiers = [
    { id: 'kg', label: 'KG', badge: 'Early Childhood', title: 'Kindergarten: Wonder & Foundations' },
    { id: 'primary', label: 'Grades 1–4', badge: 'Royal Juniors', title: 'Primary: Literacy, Numeracy & Discovery' },
    { id: 'middle', label: 'Grades 5–8', badge: 'Royal Gems', title: 'Middle Years: Conceptual Analysis & Applied Tech' },
    { id: 'nova', label: 'Grade 9+', badge: 'Royal Nova', title: 'Senior & Adults: Targeted Competencies & Custom Mastery' },
  ];

  const tierContent = {
    kg: {
      tagline: 'Playful exploration, sensory inquiry, and fundamental habits.',
      highlights: [
        { area: 'English', desc: 'Phonics sounds, rhyming patterns, picture narratives, and oral expression.' },
        { area: 'Mathematics', desc: 'Number recognition (1–20), physical counting, shapes, and sorting.' },
        { area: 'Science', desc: 'Living plants, animals, weather observation, and tactile discovery.' },
        { area: 'Communication', desc: 'Listening in circle time, asking why-questions, and expressing feelings.' },
        { area: 'Technology Foundations', desc: 'Screen hygiene, tangible puzzle logic, and spatial sequences.' },
        { area: 'Faith & Character', desc: 'Sharing, kindness, gratitude, honesty, and respectful manners.' },
        { area: 'Life Skills', desc: 'Tidying materials, active hygiene, self-confidence, and routine.' },
      ],
      pathwayLink: '/royal-juniors',
      pathwayName: 'Royal Juniors',
    },
    primary: {
      tagline: 'Deepening core literacy, mathematical reasoning, and creative computing.',
      highlights: [
        { area: 'English', desc: 'Reading fluency, creative short stories, functional grammar, and rich vocabulary.' },
        { area: 'Mathematics', desc: 'Multiplication, division, fractional models, measurement, and geometry.' },
        { area: 'Science', desc: 'States of matter, ecosystem chains, force & motion, and simple experiments.' },
        { area: 'Communication', desc: 'Show-and-tell oration, classroom presentations, and collaborative team talk.' },
        { area: 'Technology & AI', desc: 'Block coding (Scratch / Code.org), building simple games, and digital safety.' },
        { area: 'Faith & Character', desc: 'Islamic akhlaq or universal empathy, integrity, and social responsibility.' },
        { area: 'Life Skills', desc: 'Time organization, teamwork etiquette, resilience, and curiosity.' },
      ],
      pathwayLink: '/royal-juniors',
      pathwayName: 'Royal Juniors',
    },
    middle: {
      tagline: 'Bridging conceptual theory with rigorous science, Python, and applied projects.',
      highlights: [
        { area: 'English', desc: 'Critical literary analysis, persuasive essays, vocabulary etymology, and debate.' },
        { area: 'Mathematics', desc: 'Pre-algebra, proportional reasoning, coordinate geometry, and data interpretation.' },
        { area: 'Science', desc: 'Atomic structure, cellular biology, electrical circuits, physics, and ecology.' },
        { area: 'Communication', desc: 'Structured Oxford-style debate, slide design, and impromptu speech.' },
        { area: 'Technology & AI', desc: 'Python syntax, visual electronics (Tinkercad, Micro:bit), and AI prompt literacy.' },
        { area: 'Faith & Character', desc: 'Moral philosophy, prophetic character examples, digital etiquette, and ethics.' },
        { area: 'Life Skills', desc: 'Independent study planning, critical skepticism, and community civic sense.' },
      ],
      pathwayLink: '/royal-gems',
      pathwayName: 'Royal Gems',
    },
    nova: {
      tagline: 'Elective competency mastery, portfolio generation, and individualized goal pathways.',
      highlights: [
        { area: 'Advanced Conceptual Academics', desc: 'Deep subject mastery, analytical reasoning, and specialized academic problem solving.' },
        { area: 'Technology & AI Mastery', desc: 'Applied Python, full-stack web basics, prompt engineering, and generative AI.' },
        { area: 'Communication & Oratory', desc: 'Professional interviews, academic defense, executive writing, and pitch decks.' },
        { area: 'Practical Portfolios', desc: 'Student-built digital capstones, web applications, and research papers.' },
        { area: 'Digital Ethics', desc: 'Responsible AI usage, intellectual property, and algorithmic fairness.' },
        { area: 'Custom Curriculum', desc: 'Select individual skill modules without enrolling in a mandatory full school syllabus.' },
      ],
      pathwayLink: '/royal-nova',
      pathwayName: 'Royal Nova',
    },
  };

  const currentTier = tierContent[selectedTier];

  return (
    <div className="bg-ivory-50 min-h-screen">
      <PageHero 
        title="Curriculum Framework" 
        subtitle="A connected developmental progression from kindergarten through advanced skills."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Curriculum' }]}
      />

      <div className="site-container py-16 -mt-8 relative z-20">
        {/* Visual Progression Path: KG -> Grades 1-4 -> Grades 5-8 -> Grade 9+ */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 bg-champagne-50 px-3 py-1 rounded-full border border-champagne-200">
              Visual Progression
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-ink-900 mt-2">
              Select a Grade Tier to View Learning Scope
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {tiers.map((t, idx) => {
              const isSelected = selectedTier === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTier(t.id as any)}
                  className={`p-4 rounded-2xl border text-center transition-all relative ${
                    isSelected
                      ? 'bg-ink-900 text-white border-champagne-400 shadow-lg scale-105'
                      : 'bg-white text-ink-900 border-slate-200 hover:border-champagne-300 hover:bg-ivory-50'
                  }`}
                >
                  <span className={`text-[10px] uppercase tracking-wider font-bold block mb-1 ${
                    isSelected ? 'text-champagne-300' : 'text-slate-400'
                  }`}>
                    {t.badge}
                  </span>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl">
                    {t.label}
                  </h3>
                  {idx < tiers.length - 1 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-300 z-10">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Tier Scope & Broad Areas Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTier}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl mb-16"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-champagne-600">
                  Detailed Tier Overview
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-ink-900 mt-1">
                  {tiers.find(t => t.id === selectedTier)?.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {currentTier.tagline}
                </p>
              </div>

              <Link
                to={currentTier.pathwayLink}
                className="px-5 py-2.5 bg-ink-900 text-white text-xs font-bold rounded-xl hover:bg-ink-800 transition-colors shrink-0 flex items-center gap-1.5 self-start sm:self-auto"
              >
                Explore {currentTier.pathwayName} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Broad Learning Areas Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {currentTier.highlights.map((h, i) => (
                <div key={i} className="p-4 bg-ivory-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <span className="font-heading font-extrabold text-sm text-ink-900 block mb-1">
                      {h.area}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-champagne-50 border border-champagne-200 rounded-2xl flex items-center justify-between flex-wrap gap-3 text-xs text-champagne-800">
              <span>Looking for full syllabus specifics for your child's age group?</span>
              <Link to="/free-assessment" className="font-bold text-champagne-700 underline hover:text-champagne-900">
                Book a Free Learning Assessment to receive personalized syllabus mapping →
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Integrated Student Projects Section (PRD Section 30) */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 bg-champagne-50 px-3 py-1 rounded-full border border-champagne-200">
              Curriculum in Action
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-ink-900 mt-2 mb-2">
              Cross-Curricular Student Capstones
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              How students apply their knowledge across subjects to create tangible outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((proj) => (
              <div key={proj.id} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-champagne-600 uppercase tracking-wider bg-champagne-50 px-2 py-0.5 rounded inline-block mb-3">
                    {proj.category} • {proj.programme}
                  </span>
                  <h4 className="font-bold text-sm text-ink-900 mb-1">{proj.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{proj.description}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-champagne-700 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-champagne-600" />
                  <span>{proj.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Independent Conceptual System & Three Support Pathways Notice */}
        <div className="max-w-4xl mx-auto p-7 bg-white rounded-3xl border border-ink-100/15 text-center shadow-xs">
          <span className="text-[10px] uppercase font-bold tracking-widest text-champagne-700 block mb-1">
            Proprietary Framework &amp; Distinct Support Pathways
          </span>
          <h4 className="font-heading font-extrabold text-ink-950 text-base sm:text-lg mb-2">
            RES Curriculum vs. External School Support
          </h4>
          <p className="text-xs text-ink-600 leading-relaxed mb-4 max-w-2xl mx-auto">
            The Royal Education System operates its own proprietary curriculum and does NOT adopt CBSE, British, American, Federal, or Government school curricula. 
            For learners already enrolled in external schools worldwide, we provide <strong>Free International Academic Doubt Support</strong>. In Pakistan, we also provide <strong>Paid Personal Tuition</strong> tailored to day-school requirements with Urdu language support available.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link to="/#academic-services" className="font-bold text-champagne-700 hover:text-champagne-900 underline">
              Compare All Three Pathways &rarr;
            </Link>
            <Link to="/query" className="font-bold text-ink-900 hover:text-champagne-700 underline">
              Submit an Academic Question &rarr;
            </Link>
          </div>
        </div>
      </div>

      <CTASection
        title="Explore the Right Curriculum Stage"
        description="Whether laying early literacy foundations or mastering applied computer science, discover the right pathway for your learner."
        primaryCTA={{ text: "Book Free Assessment", link: "/free-assessment" }}
        secondaryCTA={{ text: "View All Programs", link: "/programs" }}
        variant="navy"
      />
    </div>
  );
};

export default CurriculumPage;
