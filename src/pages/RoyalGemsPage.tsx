import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calculator, FlaskConical, Book, MessageSquare, 
  Monitor, Code, Bot, Wrench, Lightbulb, Puzzle, 
  Users, Shield, Compass, ArrowRight, CheckCircle
} from 'lucide-react';
import { gradePricing } from '../data/pricingData';
import { projects } from '../data/projectData';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';

const focusAreas = [
  { title: 'Mathematics', icon: Calculator, desc: 'Advanced problem solving and analytical reasoning.' },
  { title: 'Science', icon: FlaskConical, desc: 'Applied scientific methods and real-world exploration.' },
  { title: 'English', icon: Book, desc: 'Critical reading, essay writing, and advanced grammar.' },
  { title: 'Communication', icon: MessageSquare, desc: 'Debate, presentation skills, and active listening.' },
  { title: 'Computer Science', icon: Monitor, desc: 'Hardware, software, and systems understanding.' },
  { title: 'Coding', icon: Code, desc: 'Programming logic, algorithms, and syntax.' },
  { title: 'AI Literacy', icon: Bot, desc: 'Understanding and using artificial intelligence responsibly.' },
  { title: 'Practical Projects', icon: Wrench, desc: 'Hands-on creation and application of learned concepts.' },
  { title: 'Critical Thinking', icon: Lightbulb, desc: 'Evaluating information and forming reasoned judgements.' },
  { title: 'Problem Solving', icon: Puzzle, desc: 'Tackling complex, multi-step challenges.' },
  { title: 'Life Skills', icon: Users, desc: 'Time management, organization, and teamwork.' },
  { title: 'Digital Citizenship', icon: Shield, desc: 'Online safety, etiquette, and footprint awareness.' },
  { title: 'Character & Values', icon: Compass, desc: 'Integrity, resilience, and global awareness.' }
];

export default function RoyalGemsPage() {
  const [revealRef, isVisible] = useScrollReveal();
  
  const gemsPricing = gradePricing.filter(p => ['Grade 5', 'Grade 6', 'Grade 7', 'Grade 8'].includes(p.grade));
  const gemsProjects = projects.filter(p => p.category === 'Science' || p.category === 'Technology').slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Royal Gems" 
        subtitle="Development Pathway — Grades 5 to 8"
      />
      
      {/* Tagline Section */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-4xl mx-auto px-6 text-center" ref={revealRef}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-jakarta text-navy-900 font-bold leading-tight"
          >
            Turn knowledge into capability.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Middle school is where foundational skills become powerful tools. Royal Gems challenges students to apply what they know, build their technical skills, and develop independent thought.
          </motion.p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Comprehensive Curriculum" 
            description="Preparing students for the complexity of high school and beyond with a robust, modern skill set."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-16">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-navy-200 transition-all">
                  <div className="w-12 h-12 bg-navy-50 text-navy-700 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2 font-jakarta">{area.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{area.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech & Coding Section */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Students collaborating on laptops" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent-gold p-6 rounded-xl shadow-xl max-w-xs">
                <Code className="text-navy-900 mb-3" size={32} />
                <p className="text-navy-900 font-bold">Future-Ready Tech Skills</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-jakarta font-bold mb-6 text-white">Technology & Coding Progression</h2>
              <p className="text-slate-300 text-lg mb-8">
                In the modern world, digital literacy is as important as reading and writing. We integrate serious tech education into the middle school years.
              </p>
              <ul className="space-y-4">
                {[
                  'Introduction to Logic & Algorithms',
                  'Block-based to Text-based Coding (Python/JS)',
                  'Web Development Basics (HTML/CSS)',
                  'Understanding AI and Machine Learning concepts',
                  'Digital Ethics and Online Safety'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Learning by Doing" 
            description="Students apply their knowledge through practical, cross-curricular projects."
            align="center"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {gemsProjects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all">
                <div className="h-48 bg-slate-200 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2 font-jakarta">{project.title}</h3>
                  <p className="text-slate-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader title="Tuition Fees" align="center" />
          
          <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100 mt-12">
            <div className="space-y-4">
              {gemsPricing.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-navy-200 last:border-0">
                  <span className="font-bold text-navy-900 text-lg">{item.grade}</span>
                  <span className="text-navy-700 font-semibold text-lg">{item.aed} / {item.usd}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center text-sm text-slate-500">
              *Admission fee and material costs may apply. Prices subject to change.
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <div className="bg-white pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          <div className="bg-navy-800 rounded-2xl p-10 text-white text-center">
            <h3 className="text-2xl font-bold font-jakarta mb-4">Book a Free Assessment</h3>
            <p className="text-slate-300 mb-8">Evaluate academic standing and readiness for advanced learning.</p>
            <Link to="/book-assessment" className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Book Assessment <ArrowRight size={18} />
            </Link>
          </div>
          <div className="bg-sand-50 border border-slate-200 rounded-2xl p-10 text-navy-900 text-center">
            <h3 className="text-2xl font-bold font-jakarta mb-4">Book a Free Demo</h3>
            <p className="text-slate-600 mb-8">See how we integrate technology and practical projects in class.</p>
            <Link to="/book-demo" className="inline-flex items-center gap-2 bg-navy-900 text-white hover:bg-navy-800 px-6 py-3 rounded-lg font-medium transition-colors">
              Book Demo <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
      
      <CTASection 
        title="Prepare for the Future" 
        description="Empower your child with the skills they need to thrive in a changing world." 
        primaryButtonText="Contact Us"
        primaryButtonLink="/query"
      />
    </div>
  );
}
