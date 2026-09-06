import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, BookOpen, Cpu, MessageCircle, Heart, Star, 
  CheckCircle, Shield, Target, Users, LayoutDashboard, Globe, 
  Activity, FileText, ChevronDown, ChevronUp, PlayCircle 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import { HeroMediaSequence } from '../components/HeroMediaSequence';
import { TrustStrip } from '../components/TrustStrip';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';

// Data imports
import { siteConfig } from '../data/siteConfig';
import { programmes, learningMethod, novaSkills } from '../data/programmeData';
import { gradePricing } from '../data/pricingData';
import { faqData } from '../data/faqData';
import { projects } from '../data/projectData';
import { partners } from '../data/partnerData';
import { mediaConfig } from '../data/mediaConfig';

// Hooks
import { useScrollReveal } from '../hooks/useScrollReveal';

// Reusable Reveal component
const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>} 
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const HomePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <main className="flex flex-col min-h-screen bg-sand-50">
      
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
        <HeroMediaSequence />
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-heading"
          >
            Royal Education System
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-cream-50 font-semibold mb-6"
          >
            Learn for Life. Grow for the Future.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-cream-50/90 mb-10 max-w-3xl mx-auto"
          >
            A structured learning ecosystem combining academic excellence, technology, and character building to prepare students for the real world.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/free-assessment" className="px-8 py-4 bg-accent-gold text-navy-900 font-bold rounded-lg hover:bg-opacity-90 transition-all text-lg w-full sm:w-auto text-center shadow-lg hover:-translate-y-1">
              Book Free Learning Assessment
            </Link>
            <Link to="/curriculum" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-lg w-full sm:w-auto text-center shadow-lg hover:-translate-y-1">
              Explore Programmes
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. TrustStrip */}
      <TrustStrip />

      {/* 3. Problem Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <Reveal>
            <SectionHeader 
              title="Education Should Be More Than Memorization" 
              subtitle="The traditional system focuses on rote memorization and fragmented learning. We focus on real understanding, practical skills, and holistic growth." 
            />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Fragmented Learning', desc: 'Siloed subjects that don\'t connect to real life.', icon: <LayoutDashboard /> },
              { title: 'Rote Memorization', desc: 'Forgetting everything after the exam ends.', icon: <FileText /> },
              { title: 'Lack of Practical Skills', desc: 'Graduating without the tools to succeed in the modern world.', icon: <Activity /> }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} className="bg-sand-50 p-8 rounded-2xl border border-cream-50">
                <div className="text-teal-600 mb-4 flex justify-center w-12 h-12 mx-auto bg-white rounded-full items-center shadow-sm">{item.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-navy-700">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About Royal Education System */}
      <section className="py-20 px-4 bg-cream-50">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionHeader title="Our 5 Pillars of Learning" subtitle="A cohesive ecosystem bringing together everything your child needs to thrive." />
          </Reveal>
          <div className="grid md:grid-cols-5 gap-6 mt-12">
            {[
              { title: 'Academic Understanding', icon: <BookOpen />, link: '/academics' },
              { title: 'Technology & AI', icon: <Cpu />, link: '/technology-ai' },
              { title: 'Communication', icon: <MessageCircle />, link: '/life-skills' },
              { title: 'Life Skills', icon: <Target />, link: '/life-skills' },
              { title: 'Character & Values', icon: <Heart />, link: '/faith-values' }
            ].map((pillar, i) => (
              <Reveal key={i} delay={i * 100}>
                <Link to={pillar.link} className="block bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center h-full border border-sand-50 group hover:-translate-y-1">
                  <div className="text-teal-500 mb-4 flex justify-center w-14 h-14 mx-auto bg-cream-50 rounded-full items-center group-hover:scale-110 transition-transform">{pillar.icon}</div>
                  <h3 className="font-bold text-navy-900 text-sm">{pillar.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-12">
            <Link to="/about" className="inline-flex items-center text-teal-600 font-bold hover:text-teal-700 transition-colors">
              Read Our Full Story <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Programmes Previews */}
      <section className="py-24 px-4 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal>
            <SectionHeader title="Our Programmes" subtitle="A structured pathway from early foundations to future-ready skills." light />
          </Reveal>

          <div className="space-y-16 mt-16">
            {/* 5. Royal Juniors */}
            <Reveal className="flex flex-col md:flex-row items-center gap-10 bg-navy-800 p-8 md:p-12 rounded-3xl border border-navy-700">
              <div className="flex-1">
                <div className="inline-block px-4 py-1.5 bg-teal-500/20 text-teal-300 rounded-full text-sm font-bold mb-4">KG to Grade 4</div>
                <h3 className="text-3xl font-bold font-heading mb-4">Royal Juniors</h3>
                <p className="text-xl text-teal-400 mb-6 font-medium">Build strong foundations before the world gets complicated.</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {['Phonics', 'Numeracy', 'Social Skills', 'Basic Logic'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-navy-900 rounded-md text-sm text-cream-50/80">{tag}</span>
                  ))}
                </div>
                <Link to="/royal-juniors" className="inline-flex items-center px-6 py-3 bg-white text-navy-900 font-bold rounded-lg hover:bg-cream-50 transition-colors">
                  Explore Royal Juniors <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img src={mediaConfig.programmeImages.juniors || '/placeholder.jpg'} alt="Royal Juniors" className="w-full h-full object-cover" />
                </div>
              </div>
            </Reveal>

            {/* 6. Royal Gems */}
            <Reveal className="flex flex-col md:flex-row-reverse items-center gap-10 bg-navy-800 p-8 md:p-12 rounded-3xl border border-navy-700">
              <div className="flex-1">
                <div className="inline-block px-4 py-1.5 bg-accent-gold/20 text-accent-gold rounded-full text-sm font-bold mb-4">Grades 5 to 8</div>
                <h3 className="text-3xl font-bold font-heading mb-4">Royal Gems</h3>
                <p className="text-xl text-accent-gold mb-6 font-medium">Turn knowledge into capability.</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {['Applied Science', 'Pre-Algebra', 'Coding Basics', 'Critical Thinking'].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-navy-900 rounded-md text-sm text-cream-50/80">{tag}</span>
                  ))}
                </div>
                <Link to="/royal-gems" className="inline-flex items-center px-6 py-3 bg-white text-navy-900 font-bold rounded-lg hover:bg-cream-50 transition-colors">
                  Explore Royal Gems <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img src={mediaConfig.programmeImages.gems || '/placeholder.jpg'} alt="Royal Gems" className="w-full h-full object-cover" />
                </div>
              </div>
            </Reveal>

            {/* 7. Royal Nova */}
            <Reveal className="flex flex-col md:flex-row items-center gap-10 bg-gradient-to-br from-navy-800 to-navy-900 p-8 md:p-12 rounded-3xl border border-teal-500/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl"></div>
              <div className="flex-1 relative z-10">
                <div className="inline-block px-4 py-1.5 bg-teal-500 text-navy-900 rounded-full text-sm font-bold mb-4">Grade 9+ & Beyond</div>
                <h3 className="text-3xl font-bold font-heading mb-4">Royal Nova</h3>
                <p className="text-xl text-teal-400 mb-6 font-medium">Choose what you want to learn. Build the skills you need.</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {['AI & Machine Learning', 'Python Coding', 'Web Development', 'Advanced Communication'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-navy-900/80 border border-teal-500/30 rounded-md text-sm text-white flex items-center">
                      <Star className="w-3 h-3 text-teal-400 mr-2" /> {tag}
                    </span>
                  ))}
                </div>
                <Link to="/royal-nova" className="inline-flex items-center px-6 py-3 bg-teal-500 text-navy-900 font-bold rounded-lg hover:bg-teal-400 transition-colors">
                  Explore Royal Nova <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="flex-1 w-full relative z-10">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-teal-500/20">
                  <img src={mediaConfig.programmeImages.nova || '/placeholder.jpg'} alt="Royal Nova" className="w-full h-full object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. Learning Method Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionHeader title="The 5-Step Learning Method" subtitle="How we ensure deep understanding rather than superficial memorization." />
          </Reveal>
          <div className="flex flex-col md:flex-row justify-between items-center mt-16 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-sand-50 -translate-y-1/2 z-0"></div>
            {[
              { step: '1', title: 'Understand', icon: <BookOpen /> },
              { step: '2', title: 'Practice', icon: <Activity /> },
              { step: '3', title: 'Explain', icon: <MessageCircle /> },
              { step: '4', title: 'Apply', icon: <Target /> },
              { step: '5', title: 'Create', icon: <Cpu /> }
            ].map((method, i) => (
              <Reveal key={i} delay={i * 100} className="relative z-10 flex flex-col items-center bg-white p-4 rounded-xl w-full md:w-auto mb-8 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-teal-50 border-4 border-white shadow-md flex items-center justify-center text-teal-600 mb-4 font-bold text-xl relative">
                  {method.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-gold text-navy-900 rounded-full text-xs flex items-center justify-center font-bold">
                    {method.step}
                  </div>
                </div>
                <h4 className="font-bold text-navy-900">{method.title}</h4>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-12">
            <Link to="/learning-method" className="inline-flex items-center px-8 py-3 bg-navy-900 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors">
              Learn How We Teach <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 9-12. Subject Previews Grid */}
      <section className="py-20 px-4 bg-sand-50 border-y border-cream-50">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionHeader title="A Holistic Education" subtitle="Developing all aspects of a student's mind and character." />
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Academics */}
            <Reveal delay={0} className="bg-white rounded-2xl p-6 shadow-sm border border-cream-50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Core Academics</h3>
              <p className="text-navy-700 text-sm mb-4">Mathematics, Science, and English taught for deep comprehension.</p>
              <Link to="/academics" className="text-blue-600 font-semibold text-sm hover:underline flex items-center">
                Explore Academics <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
              </Link>
            </Reveal>

            {/* Tech */}
            <Reveal delay={100} className="bg-white rounded-2xl p-6 shadow-sm border border-cream-50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Technology & AI</h3>
              <p className="text-navy-700 text-sm mb-4">From basic digital literacy to applied artificial intelligence.</p>
              <Link to="/technology-ai" className="text-teal-600 font-semibold text-sm hover:underline flex items-center">
                Explore Technology <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
              </Link>
            </Reveal>

            {/* Faith & Values */}
            <Reveal delay={200} className="bg-white rounded-2xl p-6 shadow-sm border border-cream-50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Faith & Values</h3>
              <p className="text-navy-700 text-sm mb-4">Building strong moral character and ethical foundations.</p>
              <Link to="/faith-values" className="text-purple-600 font-semibold text-sm hover:underline flex items-center">
                Explore Values <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
              </Link>
            </Reveal>

            {/* Life Skills */}
            <Reveal delay={300} className="bg-white rounded-2xl p-6 shadow-sm border border-cream-50 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Life & Civic Skills</h3>
              <p className="text-navy-700 text-sm mb-4">Communication, teamwork, and responsible digital citizenship.</p>
              <Link to="/life-skills" className="text-orange-600 font-semibold text-sm hover:underline flex items-center">
                Explore Skills <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 13. Projects Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-navy-900">Student Projects</h2>
                <p className="text-lg text-navy-700">See what our students are building and creating as they apply their knowledge.</p>
              </div>
              <Link to="/projects" className="mt-6 md:mt-0 px-6 py-2 border-2 border-navy-900 text-navy-900 font-bold rounded-lg hover:bg-navy-50 transition-colors">
                View All Projects
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, i) => (
              <Reveal key={project.id} delay={i * 100} className="bg-sand-50 rounded-2xl overflow-hidden shadow-sm group hover:shadow-md transition-all">
                <div className="aspect-[4/3] bg-navy-100 relative overflow-hidden">
                  <img src={project.image || '/placeholder.jpg'} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy-900">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-navy-900 mb-2">{project.title}</h3>
                  <p className="text-navy-700 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-1 rounded">{project.programme}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Parent Progress */}
      <section className="py-20 px-4 bg-navy-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <Reveal className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Partnering with Parents</h2>
            <p className="text-lg text-cream-50/80 mb-8">
              We believe education is a partnership. Our parent portal and regular updates ensure you are always informed about your child's progress, strengths, and areas for growth.
            </p>
            <ul className="space-y-4">
              {[
                'Weekly performance summaries',
                'Direct communication with teachers',
                'Transparent grading and feedback',
                'Milestone tracking and goal setting'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-cream-50">
                  <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="flex-1 w-full" delay={200}>
            <div className="bg-navy-800 p-8 rounded-2xl border border-navy-700 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-500 rounded-full blur-2xl opacity-20"></div>
              <div className="flex items-center mb-6 pb-6 border-b border-navy-700">
                <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400 mr-4">
                  <LayoutDashboard />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Parent Dashboard</h4>
                  <p className="text-sm text-cream-50/60">Live Progress Tracking</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-2 bg-navy-700 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-400 w-3/4"></div>
                </div>
                <div className="h-2 bg-navy-700 rounded-full overflow-hidden">
                  <div className="h-full bg-accent-gold w-1/2"></div>
                </div>
                <div className="h-2 bg-navy-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 w-5/6"></div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 15. Why Families Choose Us */}
      <section className="py-20 px-4 bg-cream-50">
        <div className="max-w-6xl mx-auto text-center">
          <Reveal>
            <SectionHeader title="Why Families Choose Us" subtitle="We're more than a school; we're a community dedicated to excellence." />
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Structured Ecosystem', icon: <Globe className="w-8 h-8 text-teal-600" /> },
              { title: 'Expert Teachers', icon: <Users className="w-8 h-8 text-teal-600" /> },
              { title: 'Technology-Integrated', icon: <Cpu className="w-8 h-8 text-teal-600" /> },
              { title: 'Character & Values', icon: <Heart className="w-8 h-8 text-teal-600" /> },
              { title: 'Transparent Pricing', icon: <CheckCircle className="w-8 h-8 text-teal-600" /> },
              { title: 'Free Demo & Assessment', icon: <PlayCircle className="w-8 h-8 text-teal-600" /> }
            ].map((reason, i) => (
              <Reveal key={i} delay={i * 50} className="bg-white p-6 rounded-xl shadow-sm border border-sand-50 flex flex-col items-center">
                <div className="mb-4 bg-teal-50 p-4 rounded-full">{reason.icon}</div>
                <h4 className="font-bold text-navy-900">{reason.title}</h4>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Pricing Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-navy-900">Premium Education, Accessible Pricing</h2>
            <p className="text-xl text-navy-700 mb-8">Starting from <span className="font-bold text-teal-600">AED 199/month</span></p>
            
            <div className="bg-sand-50 rounded-2xl p-8 border border-cream-50 mb-8 flex flex-col sm:flex-row justify-around items-center gap-6">
              <div className="text-center">
                <h4 className="font-bold text-navy-900 mb-1">KG to Grade 4</h4>
                <p className="text-teal-600 font-semibold">AED 199/mo</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-navy-200"></div>
              <div className="text-center">
                <h4 className="font-bold text-navy-900 mb-1">Grades 5 to 8</h4>
                <p className="text-teal-600 font-semibold">AED 249/mo</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-navy-200"></div>
              <div className="text-center">
                <h4 className="font-bold text-navy-900 mb-1">Grade 9 & Above</h4>
                <p className="text-teal-600 font-semibold">AED 299/mo</p>
              </div>
            </div>

            <p className="text-sm text-navy-600 mb-8 flex items-center justify-center">
              <Shield className="w-4 h-4 mr-2" /> No hidden charges. Cancel anytime.
            </p>
            
            <Link to="/pricing" className="inline-flex items-center px-8 py-3 bg-navy-900 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors">
              View Full Pricing Details
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 17 & 18. Free Assessment & Demo CTA */}
      <CTASection 
        title="Ready to Begin Your Learning Journey?"
        description="Experience the Royal Education System difference firsthand. Start with a free assessment to understand your child's current level, or book a free demo class."
        primaryButtonText="Book Free Assessment"
        primaryButtonLink="/free-assessment"
        secondaryButtonText="Book Free Demo"
        secondaryButtonLink="/free-demo"
        className="bg-navy-900"
      />

      {/* 19. Partners Section */}
      {partners && partners.length > 0 && (
        <section className="py-16 px-4 bg-white border-b border-sand-50">
          <div className="max-w-6xl mx-auto text-center">
            <Reveal>
              <h3 className="text-sm font-bold text-navy-400 uppercase tracking-wider mb-8">Trusted by & Partnered with</h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {partners.map((partner, i) => (
                  <div key={partner.id || i} className="flex items-center justify-center">
                    {partner.logo ? (
                      <img src={partner.logo} alt={partner.name} className="h-10 md:h-12 object-contain" />
                    ) : (
                      <span className="font-bold text-xl font-heading">{partner.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* 20. FAQ Preview */}
      <section className="py-20 px-4 bg-cream-50">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <SectionHeader title="Frequently Asked Questions" />
          </Reveal>
          
          <div className="mt-10 space-y-4">
            {faqData.slice(0, 5).map((faq, i) => (
              <Reveal key={faq.id || i} delay={i * 50}>
                <div className="bg-white border border-sand-50 rounded-xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left font-semibold text-navy-900 hover:bg-sand-50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {openFaq === faq.id ? <ChevronUp className="w-5 h-5 text-teal-600" /> : <ChevronDown className="w-5 h-5 text-navy-400" />}
                  </button>
                  <AnimatePresence>
                    {openFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-navy-700 text-sm leading-relaxed border-t border-sand-50">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal className="text-center mt-10">
            <Link to="/faq" className="text-teal-600 font-bold hover:underline">
              View All FAQs
            </Link>
          </Reveal>
        </div>
      </section>

    </main>
  );
};







export default HomePage;
