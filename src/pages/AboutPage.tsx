import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Target, Users, BookOpen, 
  Lightbulb, Shield, Code, MessageCircle
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutPage() {
  const [revealRef, isVisible] = useScrollReveal();

  const learnerNeeds = [
    { title: 'Knowledge & Understanding', icon: BookOpen, desc: 'Deep comprehension over superficial memorization.' },
    { title: 'Practical Skills', icon: Target, desc: 'Ability to apply concepts to real-world scenarios.' },
    { title: 'Technology Proficiency', icon: Code, desc: 'Fluency in the digital tools that run the modern world.' },
    { title: 'Communication', icon: MessageCircle, desc: 'Expressing ideas clearly, confidently, and persuasively.' },
    { title: 'Confidence', icon: Lightbulb, desc: 'Self-assurance stemming from genuine capability.' },
    { title: 'Character', icon: Shield, desc: 'Integrity, resilience, and strong ethical foundations.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="About Royal Education System" 
        subtitle="Redefining education for the modern era."
      />
      
      {/* Our Story */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div ref={revealRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-bold mb-6">
                  <GraduationCap size={18} /> Our Origin
                </div>
                <h2 className="text-3xl md:text-5xl font-jakarta font-bold text-navy-900 mb-6 leading-tight">
                  Founded by IT Graduates who saw a broken system.
                </h2>
                <div className="space-y-4 text-lg text-slate-600">
                  <p>
                    Royal Education System was founded by two Information Technology graduates who noticed a glaring gap in traditional education. They saw students graduating with excellent grades but lacking the practical skills, technological literacy, and confidence needed in the real world.
                  </p>
                  <p>
                    They realized that education shouldn't just be about passing exams; it should be about building capability. They set out to create a system that goes beyond rote memorization.
                  </p>
                  <p className="font-semibold text-navy-900">
                    Our mission is simple: to make learning practical, structured, and future-ready.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-teal-600 rounded-2xl transform translate-x-4 translate-y-4 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
                alt="Founders discussing" 
                className="rounded-2xl shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Learners Need */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="What Modern Learners Actually Need" 
            description="The 21st century requires more than just academic knowledge. We focus on developing the complete individual."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {learnerNeeds.map((need, index) => {
              const Icon = need.icon;
              return (
                <div key={index} className="bg-sand-50 p-8 rounded-2xl border border-slate-100">
                  <div className="w-14 h-14 bg-navy-900 text-white rounded-xl flex items-center justify-center mb-6">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3 font-jakarta">{need.title}</h3>
                  <p className="text-slate-600">{need.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Ecosystem (Value Prop) */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-jakarta font-bold mb-8">A Structured Learning Ecosystem</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-16">
            Many places offer math tuition. Others offer coding camps or debate clubs. We integrate all of these into a single, cohesive progression.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="w-48 h-48 rounded-full border-4 border-teal-500 flex items-center justify-center p-6 text-center bg-navy-800/50 backdrop-blur-sm z-10 md:-mr-12">
              <span className="font-bold text-lg">Academic<br/>Excellence</span>
            </div>
            <div className="w-48 h-48 rounded-full border-4 border-accent-gold flex items-center justify-center p-6 text-center bg-navy-800/50 backdrop-blur-sm z-20">
              <span className="font-bold text-lg">Technology<br/>Mastery</span>
            </div>
            <div className="w-48 h-48 rounded-full border-4 border-cream-50 flex items-center justify-center p-6 text-center bg-navy-800/50 backdrop-blur-sm z-10 md:-ml-12">
              <span className="font-bold text-lg">Character &<br/>Life Skills</span>
            </div>
          </div>
          
          <p className="mt-16 text-lg text-slate-300 max-w-2xl mx-auto">
            By bringing these critical elements under one structured pathway—from Juniors through Gems and into Nova—we ensure your child develops holistically without gaps in their capability.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Target className="w-16 h-16 text-teal-600 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-jakarta font-bold text-navy-900 mb-6">Our Vision</h2>
          <p className="text-2xl text-slate-600 italic leading-relaxed">
            "To be the premier educational ecosystem that bridges the gap between traditional schooling and real-world capability, producing confident, competent, and character-driven individuals ready to lead the future."
          </p>
        </div>
      </section>
      
      <CTASection 
        title="Experience the Difference" 
        description="Book a free assessment today and see how our structured approach can benefit your child." 
        primaryCTA={{ text: "Book Free Assessment", link: "/free-assessment" }}
      />
    </div>
  );
}
