import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, UserPlus, Heart, MessageSquare, Cpu, Laptop, Wrench, Shield, ArrowDown, Network, Globe, Star, Code, GraduationCap } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const problemNeeds = [
  { icon: BookOpen, label: 'Academic Learning' },
  { icon: UserPlus, label: 'Extra Tutoring' },
  { icon: Heart, label: 'Faith/Quranic' },
  { icon: MessageSquare, label: 'Communication' },
  { icon: Cpu, label: 'Tech & AI' },
  { icon: Laptop, label: 'Digital Skills' },
  { icon: Wrench, label: 'Practical Projects' },
  { icon: Shield, label: 'Personal Growth' }
];

const features = [
  {
    title: 'Unified Learning System',
    description: 'We are not a tutoring center. We are a complete, structured educational system.',
    icon: Network,
  },
  {
    title: 'Understanding over Memorization',
    description: 'Focusing on deep conceptual grasp rather than rote learning for exams.',
    icon: BookOpen,
  },
  {
    title: 'Technology & AI Integration',
    description: 'Future-proofing learners with modern tech skills embedded in the curriculum.',
    icon: Cpu,
  },
  {
    title: 'Real Projects & Portfolio',
    description: 'Hands-on application through projects that build a tangible portfolio.',
    icon: Wrench,
  },
  {
    title: 'Faith & Character',
    description: 'Optional Quranic track and core focus on ethical, moral development.',
    icon: Star,
  },
  {
    title: 'Global & Flexible',
    description: 'Learn from anywhere, in any timezone. A truly borderless education.',
    icon: Globe,
  }
];

const founders = [
  {
    name: 'Sayyada Ayesha',
    role: 'Co-Founder',
    bg: 'Information Technology Graduate',
    icon: Code
  },
  {
    name: 'Malik Ayan Ahmed',
    role: 'Co-Founder',
    bg: 'Information Technology Graduate',
    icon: Cpu
  }
];

const WhyRESPage = () => {
  useDocumentTitle('Why RES | The Royal Education System');
  return (
    <div className="min-h-screen bg-ivory">
      <PageHero
        title="Why Royal Education System?"
        subtitle="Education should prepare a learner for life—not only for an examination."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Why RES', path: '/why-res' }
        ]}
      />

      {/* The Problem Section */}
      <section className="section-padding site-container">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-ink mb-6" style={{ fontSize: 'var(--fs-h2)' }}>The Fragmented Education Problem</h2>
          <p className="text-ink-700 max-w-3xl mx-auto" style={{ fontSize: 'var(--fs-body-lg)' }}>
            Today, a learner often has to look in multiple places to get a complete education. 
            This fragmented approach is exhausting, expensive, and disconnected.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {problemNeeds.map((need, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-pearl p-6 rounded-xl shadow-sm border border-ink-100 flex flex-col items-center text-center gap-4 opacity-70"
            >
              <div className="w-16 h-16 rounded-full bg-ink-50 flex items-center justify-center text-ink-500">
                <need.icon size={28} />
              </div>
              <span className="font-semibold text-ink-800">{need.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The RES Solution */}
      <section className="section-padding px-6 gradient-ink text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-champagne-400 via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="flex justify-center mb-12">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown size={48} className="text-champagne-400" />
            </motion.div>
          </div>
          
          <h2 className="font-heading font-bold mb-8" style={{ fontSize: 'var(--fs-h2)' }}>
            <span className="text-champagne-400">ONE SYSTEM.</span><br />
            NOT EIGHT DIFFERENT ONES.
          </h2>
          
          <p className="text-ivory-200 max-w-3xl mx-auto leading-relaxed" style={{ fontSize: 'var(--fs-body-lg)' }}>
            RES brings everything together in one structured, unified learning environment. 
            We integrate academics, tech skills, personal development, and faith into a single cohesive journey.
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding px-6 bg-champagne-50">
        <div className="max-w-4xl mx-auto text-center">
          <GraduationCap size={64} className="mx-auto text-champagne-600 mb-8" />
          <blockquote className="font-heading font-bold text-ink leading-tight" style={{ fontSize: 'var(--fs-h2)' }}>
            "Education should prepare a learner for life—not only for an examination."
          </blockquote>
        </div>
      </section>

      {/* What Makes RES Different */}
      <section className="section-padding site-container">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-ink mb-6" style={{ fontSize: 'var(--fs-h2)' }}>What Makes RES Different?</h2>
          <p className="text-ink-700" style={{ fontSize: 'var(--fs-body-lg)' }}>A fundamentally better approach to learning.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-pearl p-8 rounded-2xl shadow-sm border-t-4 border-champagne-400 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-ivory-200 flex items-center justify-center text-champagne-500 mb-6">
                <feature.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">{feature.title}</h3>
              <p className="text-ink-700 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-padding px-6 bg-ink-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-ink mb-6" style={{ fontSize: 'var(--fs-h2)' }}>Our Founders</h2>
            <p className="text-ink-700 max-w-2xl mx-auto" style={{ fontSize: 'var(--fs-body-lg)' }}>
              Driven by a shared vision, RES was founded by tech professionals who saw the gap between traditional education and future needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-pearl p-8 rounded-2xl shadow-sm border border-ink-100 flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-champagne-100 flex flex-shrink-0 items-center justify-center text-champagne-600">
                  <UserPlus size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-ink">{founder.name}</h3>
                  <div className="text-champagne-500 font-semibold mb-2">{founder.role}</div>
                  <div className="flex items-center gap-2 text-ink-600 text-sm">
                    <founder.icon size={16} />
                    <span>{founder.bg}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Find the Right Path for Your Child"
        description="Start with a complimentary learning assessment. We map current capabilities, identify gaps, and propose a structured development journey."
        primaryCTA={{ text: "Book Free Assessment", link: "/free-assessment" }}
        secondaryCTA={{ text: "Explore Programs", link: "/curriculum" }}
        variant="navy"
      />
    </div>
  );
};

export default WhyRESPage;
