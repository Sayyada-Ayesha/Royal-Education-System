import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  UserCheck, 
  ClipboardCheck, 
  Settings, 
  Target, 
  Sparkles, 
  Clock, 
  Map, 
  BookOpen, 
  ArrowRight, 
  BrainCircuit 
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const features = [
  {
    icon: <ClipboardCheck className="w-8 h-8 text-champagne-500" />,
    title: 'Free Diagnostic Assessment',
    description: 'Understand current levels to place learners accurately, not just by age.'
  },
  {
    icon: <Map className="w-8 h-8 text-champagne-500" />,
    title: 'School Board Support',
    description: 'Personalized homework guidance and doubt clarification for CBSE, British, American, or National boards.'
  },
  {
    icon: <Clock className="w-8 h-8 text-champagne-500" />,
    title: 'Flexible Scheduling',
    description: 'Learn from anywhere in any timezone. Education fits into your life.'
  },
  {
    icon: <UserCheck className="w-8 h-8 text-champagne-500" />,
    title: 'Individual Pace',
    description: 'Tailored attention ensuring no one is left behind or held back.'
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-champagne-500" />,
    title: 'Adaptive Paths',
    description: 'Continuous monitoring and syllabus adjustments as the learner grows.'
  }
];

const flowSteps = [
  { 
    step: '01', 
    title: 'Book Assessment', 
    desc: 'Schedule a free online evaluation.', 
    icon: <Settings className="w-6 h-6" /> 
  },
  { 
    step: '02', 
    title: 'Complete Diagnostic', 
    desc: 'A stress-free review of current skills.', 
    icon: <Target className="w-6 h-6" /> 
  },
  { 
    step: '03', 
    title: 'Get Recommendations', 
    desc: 'Detailed report & custom plan.', 
    icon: <Sparkles className="w-6 h-6" /> 
  },
  { 
    step: '04', 
    title: 'Begin Journey', 
    desc: 'Start learning on your true path.', 
    icon: <BookOpen className="w-6 h-6" /> 
  }
];

const programmeFit = [
  {
    name: 'Royal Juniors',
    range: 'KG – Grade 4',
    desc: 'Focuses on foundational curiosity and discovering personal learning styles.',
    color: 'bg-ink-50'
  },
  {
    name: 'Royal Gems',
    range: 'Grade 5 – 8',
    desc: 'Identifies core strengths with flexible pacing for different subject areas.',
    color: 'bg-ivory-100'
  },
  {
    name: 'Royal Nova',
    range: 'Grade 9+',
    desc: 'Targeted preparation for future goals and board-specific alignment.',
    color: 'bg-pearl'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function PersonalizedLearningPage$3() {
  useDocumentTitle('Personalized Learning | The Royal Education System');
  return (
    <div className="min-h-screen bg-ivory">
      <PageHero
        title="Personalized Learning"
        subtitle="Every learner is unique. Every learning journey should be too."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Personalized Learning' }
        ]}
      />

      {/* How We Personalize Section */}
      <section className="section-padding bg-white">
        <div className="site-container">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-ink mb-4" style={{ fontSize: 'var(--fs-h2)' }}>
              How We Personalize
            </h2>
            <p className="text-lg text-ink-600 max-w-2xl mx-auto">
              We design the education around the student, rather than forcing the student to fit the education.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="bg-pearl rounded-2xl p-8 hover:shadow-lg transition-shadow border border-ivory-200"
              >
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-ink-900 mb-3">{feature.title}</h3>
                <p className="text-ink-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Assessment to Placement Flow */}
      <section className="section-padding gradient-ink text-white">
        <div className="site-container">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold mb-4" style={{ fontSize: 'var(--fs-h2)' }}>
              Assessment to Placement
            </h2>
            <p className="text-ivory-200/80 max-w-2xl mx-auto text-lg">
              A seamless 4-step journey to find your perfect starting point.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-ink-800 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {flowSteps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative bg-ink-800/60 backdrop-blur-sm rounded-2xl p-6 border border-ink-700/60 z-10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-heading font-bold text-ink-600">{step.step}</span>
                    <div className="w-12 h-12 bg-champagne-400/20 rounded-full flex items-center justify-center text-champagne-400">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-ivory-200/80 text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programme Fit */}
      <section className="section-padding bg-white">
        <div className="site-container">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-ink mb-4" style={{ fontSize: 'var(--fs-h2)' }}>
              Adapted for Every Stage
            </h2>
            <p className="text-lg text-ink-600 max-w-2xl mx-auto">
              Our personalization strategies evolve as the learner transitions through different programmes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programmeFit.map((prog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${prog.color} rounded-2xl p-8 border border-ivory-300`}
              >
                <div className="inline-block px-4 py-1 bg-white rounded-full text-sm font-semibold text-ink-700 mb-6 shadow-sm">
                  {prog.range}
                </div>
                <h3 className="text-2xl font-bold text-ink-900 mb-4">{prog.name}</h3>
                <p className="text-ink-700 leading-relaxed">
                  {prog.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-ivory-100 border-t border-ivory-200">
        <div className="site-container-narrow text-center">
          <h2 className="font-heading font-bold text-ink mb-6" style={{ fontSize: 'var(--fs-h2)' }}>
            Ready to find your path?
          </h2>
          <p className="text-xl text-ink-600 mb-8">
            Take the first step towards a truly personalized education journey.
          </p>
          <Link 
            to="/free-assessment"
            className="inline-flex items-center gap-2 px-8 py-4 bg-champagne-400 text-ink-950 font-bold rounded-lg hover:bg-champagne-300 transition-colors shadow-lg shadow-champagne-400/20"
          >
            Start with a Free Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
