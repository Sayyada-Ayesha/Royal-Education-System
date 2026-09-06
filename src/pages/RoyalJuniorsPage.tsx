import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, Brain, MessageCircle, Calculator, Microscope, 
  Laptop, Palette, Puzzle, Heart, MonitorSmartphone, 
  CheckCircle, ArrowRight, BookMarked, GraduationCap, Users
} from 'lucide-react';
import { gradePricing } from '../data/pricingData';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';

const focusAreas = [
  { title: 'Academic Foundations', icon: BookOpen, desc: 'Building strong core literacy and study habits.' },
  { title: 'Conceptual Understanding', icon: Brain, desc: 'Moving beyond rote learning to true comprehension.' },
  { title: 'English & Communication', icon: MessageCircle, desc: 'Developing articulate, confident communicators.' },
  { title: 'Mathematics', icon: Calculator, desc: 'Mastering numbers with logical problem solving.' },
  { title: 'Science', icon: Microscope, desc: 'Cultivating curiosity about how the world works.' },
  { title: 'Technology Foundations', icon: Laptop, desc: 'Early exposure to essential digital tools.' },
  { title: 'Creativity', icon: Palette, desc: 'Encouraging imaginative thinking and expression.' },
  { title: 'Problem Solving', icon: Puzzle, desc: 'Tackling challenges with analytical approaches.' },
  { title: 'Values & Character', icon: Heart, desc: 'Fostering empathy, respect, and responsibility.' },
  { title: 'Digital Awareness', icon: MonitorSmartphone, desc: 'Safe and constructive use of technology.' }
];

const gradeProgression = [
  { grade: 'KG', focus: 'Introduction to learning, basic phonics, numbers, and socialization.' },
  { grade: 'Grade 1', focus: 'Foundational reading, writing, and arithmetic concepts.' },
  { grade: 'Grade 2', focus: 'Developing fluency in reading, basic math operations, and exploring nature.' },
  { grade: 'Grade 3', focus: 'Reading for comprehension, multiplication, division, and basic science.' },
  { grade: 'Grade 4', focus: 'Independent reading, complex math problem solving, and structured technology use.' }
];

export default function RoyalJuniorsPage() {
  const [revealRef, isVisible] = useScrollReveal();
  const [pricingRef, pricingVisible] = useScrollReveal();
  
  const juniorsPricing = gradePricing.filter(p => ['KG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'].includes(p.grade));

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Royal Juniors" 
        subtitle="Foundation Learning — KG to Grade 4"
      />
      
      {/* Tagline Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-6 text-center" ref={revealRef}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-jakarta text-navy-900 font-bold leading-tight"
          >
            Build strong foundations before the world gets complicated.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Royal Juniors is designed to instill a love for learning while establishing the critical academic and personal habits necessary for future success.
          </motion.p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="What We Focus On" 
            description="A holistic approach to early education that balances academics, character, and practical skills."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="bg-sand-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center mb-4">
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

      {/* Progression Section */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-jakarta font-bold mb-6">Learning Progression</h2>
              <p className="text-slate-300 text-lg mb-8">
                Our curriculum carefully builds upon itself year after year, ensuring concepts are mastered before advancing.
              </p>
              <div className="space-y-6">
                {gradeProgression.map((prog, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-teal-400 font-bold font-jakarta">{prog.grade}</div>
                    <div className="text-slate-300">{prog.focus}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" 
                alt="Students learning" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-teal-600 p-6 rounded-xl shadow-xl max-w-xs">
                <BookMarked className="text-white mb-3" size={32} />
                <p className="text-white font-medium">Concept Mastery before Progression</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Communication */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeader 
            title="Partnering with Parents" 
            description="We believe education is a partnership between the school and the family."
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Users className="w-10 h-10 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Regular Updates</h3>
              <p className="text-slate-600">Weekly insights into what your child is learning and how you can support them at home.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <MessageCircle className="w-10 h-10 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Open Communication</h3>
              <p className="text-slate-600">Direct access to teachers to discuss progress, challenges, and milestones.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <GraduationCap className="w-10 h-10 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy-900 mb-3">Progress Tracking</h3>
              <p className="text-slate-600">Detailed assessments focusing on conceptual understanding rather than just grades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 bg-white" ref={pricingRef}>
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader title="Tuition Fees" align="center" />
          
          <div className="bg-sand-50 rounded-2xl p-8 border border-slate-100 mt-12">
            <div className="space-y-4">
              {juniorsPricing.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-4 border-b border-slate-200 last:border-0">
                  <span className="font-bold text-navy-900 text-lg">{item.grade}</span>
                  <span className="text-teal-700 font-semibold text-lg">{item.aed} / {item.usd}</span>
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
      <div className="bg-cream-50 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          <div className="bg-navy-900 rounded-2xl p-10 text-white text-center">
            <h3 className="text-2xl font-bold font-jakarta mb-4">Book a Free Assessment</h3>
            <p className="text-slate-300 mb-8">Understand your child's current learning level and how we can help.</p>
            <Link to="/book-assessment" className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Book Assessment <ArrowRight size={18} />
            </Link>
          </div>
          <div className="bg-teal-700 rounded-2xl p-10 text-white text-center">
            <h3 className="text-2xl font-bold font-jakarta mb-4">Book a Free Demo</h3>
            <p className="text-teal-100 mb-8">Experience our teaching methodology firsthand before committing.</p>
            <Link to="/book-demo" className="inline-flex items-center gap-2 bg-white text-teal-700 hover:bg-cream-50 px-6 py-3 rounded-lg font-medium transition-colors">
              Book Demo <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
      
      <CTASection 
        title="Ready to join Royal Juniors?" 
        description="Give your child the foundation they deserve." 
        primaryButtonText="Contact Us"
        primaryButtonLink="/query"
      />
    </div>
  );
}
