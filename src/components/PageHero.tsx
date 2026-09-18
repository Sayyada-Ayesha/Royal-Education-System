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
  variant?: 'A' | 'B' | 'C' | 'D';
  image?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, breadcrumbs, variant = 'B', image }) => {

  const variantClasses: Record<string, string> = {
    A: 'relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden',
    B: 'relative gradient-ink pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden',
    C: 'relative bg-ivory-100 pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden',
    D: 'relative bg-ivory-100 pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden',
  };

  const isDark = variant === 'A' || variant === 'B';
  const textColor = isDark ? 'text-white' : 'text-ink-950';
  const subtitleColor = isDark ? 'text-ivory-200/80' : 'text-ink-500';
  const crumbColor = isDark ? 'text-ivory-200/60' : 'text-ink-400';
  const crumbHover = isDark ? 'hover:text-champagne-300' : 'hover:text-champagne-500';
  const crumbActive = isDark ? 'text-white' : 'text-ink-900';

  return (
    <div className={variantClasses[variant] || variantClasses.B}>
      {/* Variant A: Full-width image background */}
      {variant === 'A' && image && (
        <>
          <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover brightness-105" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/50 to-ink-950/20"></div>
        </>
      )}

      {/* Variant B: Subtle decorative pattern */}
      {variant === 'B' && (
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#C7A66A 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      )}

      {/* Variant C: Image on right side (for pages that need a visual) */}
      {variant === 'C' && image && (
        <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block">
          <img src={image} alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-ivory-100 via-ivory-100/80 to-transparent"></div>
        </div>
      )}

      <div className="site-container relative z-10">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className={`flex items-center gap-2 text-sm ${crumbColor} mb-6`} aria-label="Breadcrumb">
              <Link to="/" className={`${crumbHover} transition-colors`}>Home</Link>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <ChevronRight className="w-4 h-4" />
                  {crumb.path ? (
                    <Link to={crumb.path} className={`${crumbHover} transition-colors`}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={`${crumbActive} font-medium`}>{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          <h1 className={`font-heading font-bold ${textColor} mb-4 leading-[1.1]`} style={{ fontSize: 'var(--fs-h1)' }}>
            {title}
          </h1>
          
          {subtitle && (
            <p className={`${subtitleColor} leading-relaxed max-w-2xl`} style={{ fontSize: 'var(--fs-body-lg)' }}>
              {subtitle}
            </p>
          )}

          {/* Champagne accent line under title */}
          {isDark && (
            <div className="mt-8 w-16 h-0.5 bg-champagne-400 rounded-full"></div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageHero;
