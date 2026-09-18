import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calculator, FlaskConical, Book, MessageSquare, 
  Code, Bot, Wrench, Lightbulb, 
  Compass, ArrowRight, CheckCircle, Video, TrendingUp, Layout
} from 'lucide-react';
import { gradePricing } from '../data/pricingData';
import { projects } from '../data/projectData';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const focusAreas = [
  { title: 'Practical Mathematics', icon: Calculator, desc: 'Budgeting, financial awareness, everyday calculations, science modeling, and measurement.' },
  { title: 'Applied Science & Inquiry', icon: FlaskConical, desc: 'Hypothesis testing, physical simulations, and experimental observation.' },
  { title: 'Expressive English & Debate', icon: Book, desc: 'Persuasive writing, literary analysis, structured speech, and active debate poise.' },
  { title: 'Financial Literacy & Accounting', icon: TrendingUp, desc: 'Money management, unit costs, basic accounting principles, and economic reasoning.' },
  { title: 'Coding & Web Development', icon: Code, desc: 'Algorithmic logic, Python syntax, and structuring functional web pages with HTML/CSS.' },
  { title: 'AI Solutions & Automation', icon: Bot, desc: 'Practical AI tools, agent workflows, prompt problem-solving, and responsible tech ethics.' },
  { title: 'Graphic & Digital Design', icon: Layout, desc: 'Visual hierarchy, digital composition, typography, and professional presentation assets.' },
  { title: 'Video Editing & Media', icon: Video, desc: 'Scripting, recording, video sequencing, and audio design to document student projects.' },
  { title: 'Public Presentation & Poise', icon: MessageSquare, desc: 'Expressing complex ideas clearly with structured slide decks and verbal confidence.' },
  { title: 'Tangible Student Capstones', icon: Wrench, desc: 'Hands-on construction: digital portfolios, functional web pages, and scientific artifacts.' }
];

export default function RoyalGemsPage() {
  useDocumentTitle('Royal Gems (Grades 5–8) | The Royal Education System');
  const [revealRef, isVisible] = useScrollReveal();
  
  const gemsPricing = gradePricing.filter(p => p.programme === 'Royal Gems');
  const gemsProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-ivory-50">
      <PageHero 
        title="Royal Gems" 
        subtitle="Development & Capability Phase — Grades 5 to 8"
        variant="B"
        breadcrumbs={[
          { label: 'Programmes', path: '/programmes' },
          { label: 'Royal Gems' }
        ]}
      />
      
      {/* Editorial Lead Section */}
      <section className="section-padding bg-pearl-100 border-b border-ink-100/8">
        <div className="site-container-narrow text-center" ref={revealRef}>
          <span className="eyebrow-pill mb-4">Development Phase</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-heading text-ink-950 font-bold leading-tight mt-4 mb-6"
            style={{ fontSize: 'var(--fs-h2)' }}
          >
            Turn knowledge into capability.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ink-600 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: 'var(--fs-body-lg)' }}
          >
            Grades 5 to 8 are the crucial bridge where abstract knowledge transforms into practical capability. Learners do not merely memorize textbook definitions—they code, calculate real budgets, formulate arguments, and build.
          </motion.p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-ivory-50">
        <div className="site-container">
          <SectionHeader 
            title="Integrated Capability Curriculum" 
            description="Connecting academic rigor with technology, practical mathematics, and real communication skills."
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
        </div>
      </section>

      {/* Tech & Coding Section */}
      <section className="section-padding gradient-ink text-white relative overflow-hidden">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <img 
                src="/images/Slideshow/4.jpeg" 
                alt="Students collaborating on projects" 
                className="rounded-2xl shadow-2xl border border-champagne-400/20 object-cover aspect-[4/3] w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-champagne-500 text-ink-950 p-6 rounded-xl shadow-xl max-w-xs border border-champagne-300">
                <Code className="text-ink-950 mb-2" size={28} />
                <p className="font-bold text-sm font-heading">Future-Ready Capability</p>
                <p className="text-xs text-ink-900/80 mt-1">From algorithmic logic to functional student software.</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="eyebrow-pill text-champagne-300 bg-champagne-400/10 border-champagne-400/20 mb-4">
                Technology & Digital Presence
              </span>
              <h2 className="font-heading font-bold mb-6 text-white mt-4" style={{ fontSize: 'var(--fs-h2)' }}>
                Applied Technology, Not Passive Screen Time
              </h2>
              <p className="text-ivory-200/75 text-base mb-8 leading-relaxed">
                In the middle years (Grades 5–8), education shifts from passive textbook intake to active creation and capability. Learners build functional websites, program algorithmic code, deploy AI workflows, edit project videos, and master practical mathematics.
              </p>
              <ul className="space-y-3.5">
                {[
                  'Practical Mathematics: budgeting, everyday decisions, personal finance & scientific measurement',
                  'Coding & computational logic: from algorithmic blocks to Python syntax',
                  'Web development foundations: HTML/CSS responsive project sites',
                  'Applied AI: understanding LLMs, prompt engineering, agentic workflows, and ethical boundaries',
                  'Digital media creation: graphic design, typography, video editing, and public portfolio presentation',
                  'Tangible student capstones: documented artifacts demonstrating real capability'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/4 border border-white/8">
                    <CheckCircle className="text-champagne-400 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-ivory-200/85 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="section-padding bg-pearl-100 border-b border-ink-100/8">
        <div className="site-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="eyebrow-pill mb-3">Tangible Outcomes</span>
              <h2 className="font-heading font-bold text-ink-950 mt-3" style={{ fontSize: 'var(--fs-h2)' }}>
                Sample Royal Gems Projects
              </h2>
              <p className="text-ink-500 text-sm mt-2">Real, age-appropriate work created by middle school learners.</p>
            </div>
            <Link to="/projects" className="btn-secondary text-xs">
              View All Student Work <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {gemsProjects.map((project, idx) => (
              <div key={idx} className="card p-0 overflow-hidden flex flex-col justify-between">
                <div className="h-48 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-ink-950/80 backdrop-blur-sm text-champagne-300 text-xs px-2.5 py-1 rounded-full font-bold">
                    {project.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-ink-950 mb-2 font-heading">{project.title}</h3>
                    <p className="text-ink-600 text-xs leading-relaxed">{project.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-ink-100/10 text-[11px] text-ink-400">
                    {project.ageGroup} • {project.programme}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition Transparency */}
      <section className="section-padding bg-ivory-50">
        <div className="site-container-narrow">
          <SectionHeader 
            title="Tuition Fees — Royal Gems" 
            subtitle="Grades 5 to 8. Each grade represents one full academic year. All fees are paid in advance."
            align="center" 
          />
          
          <div className="card-elevated mt-10">
            <div className="space-y-4 divide-y divide-ink-100/10">
              {gemsPricing.map((item, i) => (
                <div key={i} className="flex justify-between items-center pt-4 first:pt-0">
                  <div>
                    <span className="font-bold text-ink-950 text-base font-heading block">{item.label}</span>
                    <span className="text-xs text-ink-400">Core academics, practical math, coding, AI & student portfolio capstones</span>
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
                <span className="text-champagne-700 font-medium">Monthly / Quarterly / Bi-annual / Annual</span>
              </div>
              <p className="text-ink-500">
                • <strong>Monthly</strong>: Standard fee paid in advance • <strong>3 Months</strong>: 3% savings • <strong>6 Months</strong>: 5% savings • <strong>Full Year</strong>: 10% savings
              </p>
              <p className="text-[11px] text-ink-400 italic">
                *Payment intervals are billing options, not programme durations. Grades 5–8 represent 4 full academic learning years.
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
        title="Elevate Your Child's Learning with Royal Gems" 
        description="Book a free comprehensive learning assessment to assess academic foundations and technical readiness." 
        primaryButtonText="Book Free Assessment"
        primaryButtonLink="/free-assessment"
        secondaryButtonText="Explore Projects"
        secondaryButtonLink="/projects"
        variant="navy"
      />
    </div>
  );
}
