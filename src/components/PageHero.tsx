import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  path?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, breadcrumbs }) => {
  return (
    <div className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-2 text-sm text-navy-200 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-teal-400 transition-colors">Home</Link>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <ChevronRight className="w-4 h-4" />
                  {crumb.path ? (
                    <Link to={crumb.path} className="hover:text-teal-400 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white font-medium">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-navy-100 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageHero;
