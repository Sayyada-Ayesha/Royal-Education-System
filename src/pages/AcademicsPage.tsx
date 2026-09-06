import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, Calculator, FlaskConical, MessageSquare, Microscope, GraduationCap, Atom, Earth } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';

const AcademicsPage: React.FC = () => {
  const [ref, isVisible] = useScrollReveal();
  const [ref2, isVisible2] = useScrollReveal();

  const subjects = [
    {
      title: 'Mathematics',
      icon: <Calculator className="w-8 h-8 text-teal-600" />,
      description: 'Problem-solving, logical thinking, and real-world application.',
      features: ['Number Sense', 'Algebraic Thinking', 'Geometry & Measurement', 'Data Analysis']
    },
    {
      title: 'Science',
      icon: <FlaskConical className="w-8 h-8 text-teal-600" />,
      description: 'Curiosity-driven learning across fundamental scientific disciplines.',
      features: ['Biology', 'Physics', 'Chemistry', 'Environmental Science', 'Earth/Space Science']
    },
    {
      title: 'English',
      icon: <BookOpen className="w-8 h-8 text-teal-600" />,
      description: 'Reading, writing, comprehension, and expressive communication.',
      features: ['Reading Comprehension', 'Creative Writing', 'Grammar in Context', 'Vocabulary Building']
    },
    {
      title: 'Communication',
      icon: <MessageSquare className="w-8 h-8 text-teal-600" />,
      description: 'Public speaking, presentation, discussion, and debate.',
      features: ['Public Speaking', 'Active Listening', 'Constructive Debate', 'Presentation Skills']
    }
  ];

  return (
    <div className="bg-sand-50 min-h-screen pt-24">
      <PageHero 
        title="Academics" 
        subtitle="Building Understanding, Not Just Answers"
      />
      
      {/* Central Message */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl text-navy-900 font-bold mb-6">
              UNDERSTANDING &gt; MEMORIZATION
            </h2>
            <p className="text-lg text-navy-700 leading-relaxed">
              At Royal Education System, we believe true academic excellence comes from deep comprehension, not rote memorization. We guide students to understand the 'why' and 'how' behind every concept, empowering them to apply their knowledge in real-world scenarios.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Subjects */}
      <section className="py-20 px-6 bg-sand-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Our Core Subjects" subtitle="A comprehensive academic foundation" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12" ref={ref2}>
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-cream-50 hover:shadow-md transition-shadow"
              >
                <div className="bg-teal-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {subject.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">{subject.title}</h3>
                <p className="text-navy-700 mb-6">{subject.description}</p>
                <ul className="space-y-2">
                  {subject.features.map(feature => (
                    <li key={feature} className="flex items-center text-sm text-navy-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-gold mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="py-20 px-6 bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">How We Teach Differently</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {['Understand', 'Practice', 'Explain', 'Apply', 'Create'].map((step, idx) => (
              <div key={step} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center font-bold text-xl mb-4">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-lg text-cream-50">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Transform Your Child's Learning?"
        description="Book a free assessment today to discover how our academic approach can benefit your child."
        primaryButtonText="Book Free Assessment"
        primaryButtonLink="/free-assessment"
      />
    </div>
  );
};

export default AcademicsPage;
