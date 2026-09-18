import React from 'react';
import { 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  Globe,
  Languages,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AcademicSupportSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Submit Academic Doubt',
      desc: 'Learner submits a challenging question or concept from their existing day-school studies to our support channel.',
      badge: 'Step 1'
    },
    {
      num: '02',
      title: 'Academic Diagnostic',
      desc: 'RES academic mentors review the question to identify the foundational gap and prepare structured guidance.',
      badge: 'Step 2'
    },
    {
      num: '03',
      title: 'Conceptual Guidance',
      desc: 'The learner receives step-by-step conceptual explanation and practice clues to solve the problem with confidence.',
      badge: 'Step 3'
    },
    {
      num: '04',
      title: 'Free Doubt Session',
      desc: 'If deeper discussion is needed, the learner joins a focused live doubt session where peers can also learn together.',
      badge: 'Free Where Offered'
    }
  ];

  return (
    <section className="section-padding px-4 bg-ivory-100 border-b border-ink-100/10 relative overflow-hidden" id="academic-services">
      <div className="site-container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-400/15 border border-champagne-400/30 text-champagne-800 text-xs font-bold uppercase tracking-widest mb-3.5">
            <Layers className="w-3.5 h-3.5 text-champagne-600" /> Three Distinct Educational Pathways
          </div>
          <h2 
            className="font-heading font-extrabold text-ink-950 mb-3 tracking-tight"
            style={{ fontSize: 'var(--fs-h2)' }}
          >
            Academic Services &amp; Support Architecture
          </h2>
          <p 
            className="text-ink-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base"
          >
            The Royal Education System operates its own proprietary curriculum. At the same time, we support 
            learners in external schools globally and offer targeted personal coaching in Pakistan. 
            These three pathways remain distinct and independent.
          </p>
        </div>

        {/* 3-Way Architectural Comparison Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-14 items-stretch">
          
          {/* Card 1: International Free Academic Doubt Support */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-ink-100/15 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-ivory-200 text-ink-800 text-[10px] font-bold uppercase tracking-wider">
                  Pathway 1 · International
                </span>
                <span className="text-[11px] font-bold text-champagne-700 flex items-center gap-1">
                  <Globe className="w-3 h-3" /> Global
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-lg sm:text-xl text-ink-950 mb-2">
                Free Academic Doubt Support
              </h3>
              <div className="text-[11px] font-semibold text-champagne-700 uppercase tracking-wider mb-3">
                Question-Based · External Schools
              </div>
              <p className="text-xs text-ink-600 leading-relaxed mb-5">
                For learners already studying in schools across <strong>Pakistan, UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, UK, USA</strong>, and globally. 
                RES does not adopt your school curriculum; this is dedicated question clarification.
              </p>
              
              <div className="p-3 bg-ivory-50 rounded-xl border border-ink-100/10 mb-5">
                <span className="text-[11px] font-bold text-ink-900 block mb-1">How It Works:</span>
                <span className="text-[11px] text-ink-600 block">Question &rarr; Support Channel &rarr; Guidance &rarr; Free Doubt Session where deeper discussion is needed.</span>
              </div>

              <ul className="space-y-2 text-xs text-ink-700">
                {[
                  'Open to learners attending physical/online schools globally',
                  'Difficult homework questions & concept clarification',
                  'RES does NOT adopt external school curricula',
                  'Free where offered; peer-accessible doubt sessions'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-champagne-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-ink-100/10">
              <div className="mb-3 text-center">
                <span className="text-xs font-bold text-champagne-700 uppercase tracking-wide">
                  100% Free Where Offered
                </span>
              </div>
              <Link 
                to="/query" 
                className="w-full py-2.5 px-4 bg-ink-900 hover:bg-ink-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                ASK A QUESTION <Send className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Paid Personal Tuition / Coaching (Pakistan) */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-champagne-300/60 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-champagne-100 text-champagne-900 text-[10px] font-bold uppercase tracking-wider border border-champagne-300/40">
                  Pathway 2 · Pakistan Only
                </span>
                <span className="text-[11px] font-bold text-wine-700">Paid Service</span>
              </div>
              <h3 className="font-heading font-extrabold text-lg sm:text-xl text-ink-950 mb-2">
                Paid Personal Tuition / Coaching
              </h3>
              <div className="text-[11px] font-semibold text-wine-700 uppercase tracking-wider mb-3">
                Day-School Syllabus Support
              </div>
              <p className="text-xs text-ink-600 leading-relaxed mb-5">
                Specifically for Pakistani learners seeking personalized coaching tailored to their existing school requirements 
                (<strong>Federal, Government, or Private schools</strong>). RES supports their syllabus without adopting it as our curriculum.
              </p>

              <div className="p-3 bg-champagne-50/50 rounded-xl border border-champagne-200/50 mb-5 flex items-start gap-2">
                <Languages className="w-4 h-4 text-champagne-700 shrink-0 mt-0.5" />
                <span className="text-[11px] text-ink-700">
                  <strong>Urdu Voice Support:</strong> Available for learners needing language assistance, while English is progressively developed.
                </span>
              </div>

              <ul className="space-y-2 text-xs text-ink-700">
                {[
                  'Personalized coaching aligned to student’s school subjects',
                  'Homework clarification & exam preparation',
                  'Urdu voice/support available where helpful',
                  'School Curriculum + RES Coaching (Not RES Curriculum)'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-wine-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-ink-100/10">
              <div className="mb-3 text-center">
                <span className="text-xs font-bold text-ink-950 block">
                  Admission: From PKR 1,000 · Monthly: From PKR 1,000
                </span>
                <span className="text-[10px] text-ink-400 italic">
                  *Paid in advance. Actual fee depends on grade &amp; support scope.
                </span>
              </div>
              <Link 
                to="/enrol" 
                className="w-full py-2.5 px-4 bg-champagne-500 hover:bg-champagne-400 text-ink-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                ENROL FOR PAKISTAN TUITION <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: RES Academic Programme (Our Own Curriculum) */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-champagne-400 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-champagne-500 text-ink-950 text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              Full RES System
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-ink-900 text-champagne-300 text-[10px] font-bold uppercase tracking-wider">
                  Pathway 3 · Complete System
                </span>
                <span className="text-[11px] font-bold text-champagne-700">Global Enrolment</span>
              </div>
              <h3 className="font-heading font-extrabold text-lg sm:text-xl text-ink-950 mb-2">
                RES Academic Programme
              </h3>
              <div className="text-[11px] font-semibold text-champagne-700 uppercase tracking-wider mb-3">
                RES Proprietary Curriculum (KG–8 &amp; 9+)
              </div>
              <p className="text-xs text-ink-600 leading-relaxed mb-5">
                Our complete, unified global learning experience. We teach our own proprietary curriculum combining 
                conceptual academics, practical mathematics, coding, AI solutions, communication, ethics, and portfolio projects.
              </p>

              <div className="p-3 bg-ivory-50 rounded-xl border border-champagne-300/40 mb-5">
                <span className="text-[11px] font-bold text-ink-950 block mb-1">Support Included Directly:</span>
                <span className="text-[11px] text-ink-600 block">
                  Designated live <strong>Study, Practice &amp; Support sessions</strong> and programme tuition are built directly into this learning year.
                </span>
              </div>

              <ul className="space-y-2 text-xs text-ink-700">
                {[
                  'Proprietary RES curriculum (does not adopt foreign curricula)',
                  'Academics + Practical Math + Coding + AI + Ethics',
                  'Internal Study, Practice & Support sessions included',
                  'Live interactive classes, digital portfolio capstones'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-champagne-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-ink-100/10">
              <div className="mb-3 text-center">
                <span className="text-xs font-bold text-ink-950 block">
                  In Pakistan: From PKR 5,000 / mo · Gulf: AED 199–329 / mo
                </span>
                <span className="text-[10px] text-ink-400 italic">
                  *Billed as "RES Academic Programme Fee" (never a school fee). Paid in advance.
                </span>
              </div>
              <Link 
                to="/free-assessment" 
                className="w-full py-2.5 px-4 gradient-ink hover:opacity-90 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
              >
                BOOK FREE ASSESSMENT <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Clear Content Distinction Rule Banner */}
        <div className="max-w-5xl mx-auto p-5 rounded-2xl bg-white border border-ink-100/20 shadow-xs mb-12 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono font-bold text-ink-800">
            <span className="text-champagne-700">RES CURRICULUM &ne; SCHOOL CURRICULUM</span>
            <span className="text-ink-300 hidden sm:inline">&bull;</span>
            <span className="text-wine-700">SCHOOL SUPPORT &ne; CURRICULUM ADOPTION</span>
            <span className="text-ink-300 hidden sm:inline">&bull;</span>
            <span className="text-champagne-700">FREE DOUBT SUPPORT &ne; PAID TUITION</span>
            <span className="text-ink-300 hidden sm:inline">&bull;</span>
            <span className="text-ink-950">PAID TUITION &ne; RES ACADEMIC PROGRAMME</span>
          </div>
        </div>

        {/* 4-Step Visual Doubt Resolution Process (For International Doubt Support) */}
        <div className="max-w-5xl mx-auto bg-white/90 rounded-3xl p-6 sm:p-8 border border-ink-100/15 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-champagne-700 block mb-1">
              For External School Students Worldwide
            </span>
            <h4 className="font-heading font-bold text-ink-950 text-lg sm:text-xl">
              How Free International Doubt Clarification Works
            </h4>
            <p className="text-xs text-ink-500 mt-1">
              Send your academic doubts from UAE, Pakistan, Saudi Arabia, UK, USA, or anywhere globally.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step) => (
              <div 
                key={step.num}
                className="p-5 rounded-2xl bg-ivory-50/80 border border-ink-100/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-heading font-black text-xl text-champagne-600">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-ink-700 border border-ink-100/20">
                      {step.badge}
                    </span>
                  </div>
                  <h5 className="font-heading font-bold text-sm text-ink-950 mb-1.5">
                    {step.title}
                  </h5>
                  <p className="text-xs text-ink-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-ink-100/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-ink-500 text-left">
              *The Doubt Session is a support service and is completely <strong>free where offered</strong>. RES does not replace your school.
            </p>
            <Link to="/query" className="btn-secondary text-xs px-4 py-2 shrink-0">
              Submit Question Now &rarr;
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AcademicSupportSection;
