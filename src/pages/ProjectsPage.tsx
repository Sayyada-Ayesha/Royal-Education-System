import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Wrench, Lightbulb, Target, BookOpen, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { projects, projectCategories } from '../data/projectData';

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-sand-50 pb-20">
      <PageHero
        title="Student Projects"
        subtitle="Learn by Creating. Grow by Doing. Real-world applications built by our learners."
        breadcrumbs={[{ label: 'Projects' }]}
      />

      <div className="container mx-auto px-4 py-16">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-navy-900 text-white shadow-lg'
                  : 'bg-white text-navy-600 hover:bg-navy-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                {/* Image Placeholder */}
                <div className="h-64 bg-navy-50 relative flex items-center justify-center overflow-hidden">
                  <ImageIcon className="w-16 h-16 text-navy-200" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur text-navy-900 text-xs font-bold px-3 py-1.5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full ${
                      project.programme === 'Royal Juniors' ? 'bg-teal-100 text-teal-800' : 
                      project.programme === 'Royal Gems' ? 'bg-navy-100 text-navy-800' : 
                      'bg-accent-gold/20 text-accent-gold'
                    }`}>
                      {project.programme === 'Royal Juniors' && <Star className="w-3 h-3" />}
                      {project.programme === 'Royal Gems' && <Sparkles className="w-3 h-3" />}
                      {project.programme}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-navy-600 mb-8 flex-1">
                    {project.description}
                  </p>

                  {/* Flow Details */}
                  <div className="space-y-4 mb-8 bg-cream-50 p-6 rounded-2xl border border-gray-100">
                    <div className="flex gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm h-fit">
                        <Lightbulb className="w-5 h-5 text-accent-gold" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-navy-500 uppercase tracking-wider mb-1">The Problem</h4>
                        <p className="text-sm text-navy-800 font-medium">{project.problem}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm h-fit">
                        <BookOpen className="w-5 h-5 text-teal-500" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-navy-500 uppercase tracking-wider mb-1">Learning</h4>
                        <p className="text-sm text-navy-800 font-medium">{project.learning}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm h-fit">
                        <Wrench className="w-5 h-5 text-navy-500" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-navy-500 uppercase tracking-wider mb-1">Creation</h4>
                        <p className="text-sm text-navy-800 font-medium">{project.creation}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm h-fit">
                        <Target className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-navy-500 uppercase tracking-wider mb-1">Outcome</h4>
                        <p className="text-sm text-navy-800 font-medium">{project.outcome}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tools Used */}
                  {project.tools && project.tools.length > 0 && (
                    <div className="flex items-center gap-2 mt-auto">
                      <span className="text-xs font-semibold text-navy-500 uppercase">Tools:</span>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, idx) => (
                          <span key={idx} className="bg-gray-100 text-navy-700 px-2.5 py-1 rounded-md text-xs font-medium">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center bg-teal-50 rounded-3xl p-12 border border-teal-100">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Ready to Start Building?</h2>
          <p className="text-navy-700 mb-8 max-w-2xl mx-auto">
            Join our project-based learning programme and start creating solutions to real-world problems.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-lg transition-colors shadow-lg shadow-teal-500/30">
            Start Your Learning Journey
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProjectsPage;
