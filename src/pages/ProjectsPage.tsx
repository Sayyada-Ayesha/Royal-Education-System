import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Wrench, Lightbulb, Target, BookOpen, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { projects, projectCategories } from '../data/projectData';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { mediaConfig } from '../data/mediaConfig';

const ProjectsPage: React.FC = () => {
  useDocumentTitle('Projects | The Royal Education System');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-ivory-50 pb-24">
      <PageHero
        title="Student Projects"
        subtitle="Learn by Creating. Grow by Doing. Real-world applications built by our learners."
        breadcrumbs={[{ label: 'Projects' }]}
      />

      <div className="site-container py-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-ink-900 text-white shadow-lg'
                  : 'bg-white text-ink-600 hover:bg-ink-50 hover:text-ink-900 border border-ink-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Gallery */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-ink-100 hover:shadow-xl transition-all duration-500 group flex flex-col"
              >
                {/* Image Showcase */}
                <div className="h-64 sm:h-72 bg-ink-900 relative flex items-center justify-center overflow-hidden">
                  {/* Realistic project image using our verified slideshow assets */}
                  <img 
                    src={
                      project.programme === 'Royal Juniors' ? mediaConfig.heroImages[0].src :
                      project.programme === 'Royal Gems' ? mediaConfig.heroImages[1].src :
                      mediaConfig.heroImages[2].src
                    }
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mb-2 ${
                      project.programme === 'Royal Juniors' ? 'bg-champagne-400 text-ink-950' : 
                      project.programme === 'Royal Gems' ? 'bg-champagne-400 text-ink-950' : 
                      'bg-white text-ink-900'
                    }`}>
                      {project.programme === 'Royal Juniors' && <Star className="w-3.5 h-3.5" />}
                      {project.programme === 'Royal Gems' && <Sparkles className="w-3.5 h-3.5" />}
                      {project.programme}
                    </span>
                    <h3 className="text-2xl font-heading font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-ink-700 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Concise Flow Details */}
                  <div className="space-y-4 mb-6 mt-auto">
                    <div>
                      <h4 className="text-xs font-bold text-champagne-600 uppercase tracking-wider mb-1">The Problem</h4>
                      <p className="text-sm text-ink-900 font-medium">{project.problem}</p>
                    </div>
                    
                    <div className="pt-3 border-t border-ink-50">
                      <h4 className="text-xs font-bold text-champagne-600 uppercase tracking-wider mb-1">Outcome</h4>
                      <p className="text-sm text-ink-900 font-medium">{project.outcome}</p>
                    </div>
                  </div>

                  {/* Tools Used */}
                  {project.tools && project.tools.length > 0 && (
                    <div className="pt-4 mt-2 border-t border-ink-50">
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, idx) => (
                          <span key={idx} className="bg-ivory-100 text-ink-800 border border-ivory-200 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
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
        <div className="max-w-4xl mx-auto text-center bg-champagne-50 rounded-3xl p-12 border border-champagne-200">
          <h2 className="font-bold text-ink-900 mb-4" style={{ fontSize: 'var(--fs-h2)' }}>Ready to Start Building?</h2>
          <p className="text-ink-700 mb-8 max-w-2xl mx-auto">
            Join our project-based learning programme and start creating solutions to real-world problems.
          </p>
          <Link to="/query" className="inline-block px-8 py-4 bg-champagne-400 hover:bg-champagne-300 text-ink-950 font-bold rounded-xl transition-colors shadow-lg shadow-champagne-400/20">
            Start Your Learning Journey
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProjectsPage;
