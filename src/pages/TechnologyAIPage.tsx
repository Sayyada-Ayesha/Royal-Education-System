import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cpu, Terminal, CircuitBoard, BrainCircuit, Code2, 
  Rocket, ArrowRight, Video, Palette, Globe, Layers, Share2
} from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import SectionHeader from '../components/SectionHeader';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/projectData';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const TechnologyAIPage: React.FC = () => {
  useDocumentTitle('Technology & AI | The Royal Education System');
  const [ref, isVisible] = useScrollReveal();

  const progressionPhases = [
    {
      phase: 'Phase 1',
      title: 'Digital Foundations',
      subtitle: 'KG to Grade 4',
      icon: Cpu,
      desc: 'Hardware understanding, file systems, typing fluency, screen balance, and safe digital hygiene habits.',
      tags: ['Computer Basics', 'Safe Navigation', 'Algorithmic Thinking']
    },
    {
      phase: 'Phase 2',
      title: 'Creative Computing',
      subtitle: 'Grades 3 to 6',
      icon: Terminal,
      desc: 'Visual block coding (Scratch), sensor logic (Micro:bit), interactive animations, and creative digital storytelling.',
      tags: ['Game Logic', 'Virtual Electronics', 'Creative Design']
    },
    {
      phase: 'Phase 3',
      title: 'AI Awareness & Tools',
      subtitle: 'Grades 5 to 8',
      icon: BrainCircuit,
      desc: 'Demystifying machine learning, understanding prompt mechanics, analyzing bias, and utilizing AI as a thinking tool.',
      tags: ['Prompt Engineering', 'AI Ethics', 'Data Interpretation']
    },
    {
      phase: 'Phase 4',
      title: 'Applied Creation & Portfolios',
      subtitle: 'Grade 7 to Grade 9+',
      icon: Code2,
      desc: 'Python programming, HTML/CSS web authoring, video editing, graphic design, and building live digital portfolios.',
      tags: ['Python', 'Web Development', 'Content Creation', 'Portfolio Launch']
    }
  ];

  const skillDisciplines = [
    { title: 'Computer Foundations', icon: Cpu, desc: 'Architecture, operating systems, and data structures.' },
    { title: 'Programming & Logic', icon: Code2, desc: 'Algorithmic problem-solving from blocks to Python.' },
    { title: 'Web Development', icon: Globe, desc: 'Responsive site construction with HTML, CSS, and modern web tools.' },
    { title: 'Artificial Intelligence', icon: BrainCircuit, desc: 'Neural networks, generative models, and ethical integration.' },
    { title: 'Graphic & UI Design', icon: Palette, desc: 'Visual hierarchy, digital composition, typography, and branding.' },
    { title: 'Video Production', icon: Video, desc: 'Scripting, audio capture, and video editing for digital communication.' },
    { title: 'Digital Presence', icon: Share2, desc: 'Professional online etiquette, personal branding, and portfolio curation.' },
    { title: 'Applied Capstones', icon: Rocket, desc: 'Constructing deployable projects solving community and practical challenges.' }
  ];

  const techProjects = projects.filter(p => p.category === 'Technology' || p.category === 'Coding');

  return (
    <div className="bg-ivory-50 min-h-screen">
      <PageHero 
        title="Technology & AI" 
        subtitle="From Digital Foundations to Applied AI — Creative, Human-Centered, and Future-Ready."
        variant="A"
        image="/images/Slideshow/8.jpeg"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Technology & AI' }]}
      />

      {/* Editorial Lead */}
      <section className="section-padding bg-pearl-100 border-b border-ink-100/8">
        <div className="site-container-narrow text-center">
          <span className="eyebrow-pill mb-4">Human-Centered Future</span>
          <h2 className="font-heading font-bold text-ink-950 mt-4 mb-6" style={{ fontSize: 'var(--fs-h2)' }}>
            Technology as a creative medium, not passive screen time.
          </h2>
          <p className="text-ink-600 leading-relaxed max-w-2xl mx-auto" style={{ fontSize: 'var(--fs-body-lg)' }}>
            We do not teach isolated software tricks that will be obsolete in two years. We nurture computational intuition, algorithmic discipline, and ethical judgment so learners can command emerging tools with confidence.
          </p>
        </div>
      </section>

      {/* 4-Stage Progression */}
      <section className="section-padding bg-ivory-50 border-b border-ink-100/8" ref={ref}>
        <div className="site-container">
          <SectionHeader 
            title="The 4-Stage Technology Pathway" 
            description="A progressive development continuum moving from basic fluency to sophisticated creator capability."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {progressionPhases.map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="card flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="eyebrow text-xs">{phase.phase}</span>
                      <span className="text-[11px] font-bold text-ink-400 bg-ivory-200 px-2.5 py-0.5 rounded-full">{phase.subtitle}</span>
                    </div>
                    <div className="w-12 h-12 bg-champagne-100/80 text-champagne-700 rounded-xl flex items-center justify-center mb-5 border border-champagne-200/50">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-ink-950 mb-2 font-heading">{phase.title}</h3>
                    <p className="text-xs text-ink-600 leading-relaxed mb-6">{phase.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-ink-100/8">
                    {phase.tags.map(t => (
                      <span key={t} className="text-[10px] font-bold bg-ivory-100 text-ink-800 px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applied Disciplines Grid */}
      <section className="section-padding bg-pearl-100 border-b border-ink-100/8">
        <div className="site-container">
          <SectionHeader 
            title="Core Competencies Covered" 
            description="A comprehensive toolkit empowering students to create across modern digital mediums."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {skillDisciplines.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div key={idx} className="card p-6 flex items-start gap-4">
                  <div className="w-10 h-10 bg-champagne-100/80 text-champagne-700 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm text-ink-950 mb-1">{skill.title}</h4>
                    <p className="text-xs text-ink-600 leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="section-padding bg-ivory-50">
        <div className="site-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="eyebrow-pill mb-3">Tangible Evidence</span>
              <h2 className="font-heading font-bold text-ink-950 mt-3" style={{ fontSize: 'var(--fs-h2)' }}>
                Real Student Technology Work
              </h2>
              <p className="text-ink-500 text-sm mt-2">Functional student applications, websites, and algorithmic models.</p>
            </div>
            <Link to="/projects" className="btn-secondary text-xs">
              Explore All Projects <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {techProjects.slice(0, 3).map((proj) => (
              <div key={proj.id} className="card p-0 overflow-hidden flex flex-col justify-between">
                <div className="aspect-video bg-ink-950 relative overflow-hidden">
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-ink-950/80 backdrop-blur-sm text-champagne-300 text-xs px-2.5 py-1 rounded-full font-bold">
                    {proj.programme}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-base text-ink-950 mb-2">{proj.title}</h4>
                    <p className="text-xs text-ink-600 leading-relaxed mb-4">{proj.description}</p>
                  </div>
                  <div className="pt-3 border-t border-ink-100/10 text-xs font-bold text-champagne-600">
                    ✓ Outcome: {proj.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contextual CTA */}
      <CTASection
        title="Equip Your Learner with Future-Ready Skills"
        description="From creative block logic to applied AI literacy, empower your child with digital capability."
        primaryCTA={{ text: "Book Free Assessment", link: "/free-assessment" }}
        secondaryCTA={{ text: "Explore Royal Nova", link: "/royal-nova" }}
        variant="navy"
      />
    </div>
  );
};

export default TechnologyAIPage;
