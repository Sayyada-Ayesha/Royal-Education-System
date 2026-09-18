import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, Target, BookOpen, 
  Lightbulb, Shield, Code, MessageCircle 
} from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import FoundersSection from '../components/FoundersSection';
import DigitalCharactersSection from '../components/DigitalCharactersSection';
import { mediaConfig } from '../data/mediaConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function AboutPage() {
  useDocumentTitle('About | The Royal Education System');
  const learnerNeeds = [
    { title: 'Knowledge & Understanding', icon: BookOpen, desc: 'Deep comprehension over superficial memorization.' },
    { title: 'Practical Capability', icon: Target, desc: 'Ability to apply concepts to real-world scenarios.' },
    { title: 'Technology Proficiency', icon: Code, desc: 'Fluency in the computational and AI tools shaping the future.' },
    { title: 'Clear Communication', icon: MessageCircle, desc: 'Expressing ideas clearly, persuasively, and with confidence.' },
    { title: 'Authentic Confidence', icon: Lightbulb, desc: 'Self-assurance stemming from genuine, tested competence.' },
    { title: 'Character & Values', icon: Shield, desc: 'Integrity, resilience, empathy, and strong moral grounding.' },
  ];

  return (
    <div className="min-h-screen bg-ivory-50">
      <PageHero 
        title="About Royal Education System" 
        subtitle="A Global, Structured & Unified Learning System. Education should prepare a learner for life—not only for an examination."
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About' }]}
      />
      
      {/* 1. Origin & Story (Concise, Card-Driven) */}
      <section className="py-20 px-4 bg-white border-b border-ink-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-champagne-50 text-champagne-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-champagne-200">
                <GraduationCap className="w-3.5 h-3.5 text-champagne-600" /> Our Founders
              </div>
              <h2 className="font-extrabold font-heading text-ink-900 mb-4 leading-tight" style={{ fontSize: 'var(--fs-h2)' }}>
                Founded by Sayyada Ayesha & Malik Ayan Ahmed
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                <p>
                  Royal Education System was founded by <strong className="text-ink-900">Sayyada Ayesha</strong> and <strong className="text-ink-900">Malik Ayan Ahmed</strong>, two Information Technology graduates who recognized a critical gap in conventional education: students graduating with high exam marks, but struggling to code, solve real-world problems, or speak with confidence.
                </p>
                <p>
                  They realized education should not feel fragmented. A learner should not need eight different places for academics, tutoring, technology, communication, faith, projects and personal development. RES was designed to bring it all together.
                </p>
              </div>

              <div className="p-4 bg-champagne-50/70 rounded-2xl border border-champagne-200/80 mb-6">
                <span className="text-xs font-bold text-champagne-800 block mb-1">Our Vision:</span>
                <p className="text-xs text-champagne-700 italic">
                  "Education should prepare a learner for life—not only for an examination."
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/enrol"
                  className="px-6 py-3 bg-champagne-400 text-ink-950 font-bold rounded-xl text-xs hover:bg-champagne-300 transition-all shadow-md"
                >
                  Enrol Now
                </Link>
                <Link
                  to="/programmes"
                  className="px-6 py-3 bg-ivory-50 text-ink-900 font-bold rounded-xl text-xs hover:bg-ivory-100 transition-all"
                >
                  Explore Programmes
                </Link>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-ivory-50 aspect-[4/3] relative">
                <img 
                  src={mediaConfig.heroImages[0]?.src || '/placeholder.jpg'} 
                  alt="Students engaged in future-ready learning" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent flex items-end p-6">
                  <span className="text-white text-xs font-bold">
                    Education Without Boundaries • Learning Without Limits
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What Modern Learners Need */}
      <section className="py-20 px-4 bg-ivory-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-champagne-600 bg-champagne-50 px-3 py-1 rounded-full border border-champagne-200">
              The 6 Core Needs
            </span>
            <h2 className="font-extrabold font-heading text-ink-900 mt-2 mb-2" style={{ fontSize: 'var(--fs-h2)' }}>
              What 21st Century Learners Actually Need
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Moving beyond narrow textbook memorization toward holistic intellectual maturity.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learnerNeeds.map((need, index) => {
              const Icon = need.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-champagne-50 text-champagne-600 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-ink-900 mb-1">{need.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{need.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. The People Behind the Vision (Our Founders) */}
      <FoundersSection />

      {/* 4. Official Digital Brand Characters (Mr. Rook & Mrs. Rook) */}
      <DigitalCharactersSection />

      {/* 4. Supplementary Positioning Statement */}
      <section className="py-12 px-4 bg-ivory-50">
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl border border-slate-200 text-center shadow-sm">
          <h4 className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-1">
            Independent Learning System
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            This is an independent online learning system. It supports learners and families through academic, conceptual, practical, personal, technological and other learning opportunities. It does not claim government accreditation, school licensing or formal affiliation unless specifically stated for a verified program or partnership.
          </p>
        </div>
      </section>

      <CTASection
        title="Ready to Experience the Difference?"
        description="Schedule a complimentary diagnostic learning assessment to discover your learner's unique strengths and conceptual readiness."
        primaryCTA={{ text: "Book Free Assessment", link: "/free-assessment" }}
        secondaryCTA={{ text: "Explore Programs", link: "/curriculum" }}
        variant="navy"
      />
    </div>
  );
}
