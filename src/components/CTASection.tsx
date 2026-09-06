import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  description: string;
  // Support both prop patterns for compatibility
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  primaryCTA?: { text: string; link: string };
  secondaryCTA?: { text: string; link: string };
  variant?: 'navy' | 'teal' | 'warm';
  className?: string;
}

const variantStyles = {
  navy: 'bg-navy-900 text-white',
  teal: 'bg-teal-700 text-white',
  warm: 'bg-gradient-to-br from-cream-50 to-sand-50 text-navy-900',
};

const buttonVariants = {
  navy: {
    primary: 'bg-teal-500 text-white hover:bg-teal-600',
    secondary: 'border-2 border-white text-white hover:bg-white/10',
    text: 'text-cream-50/90',
  },
  teal: {
    primary: 'bg-white text-teal-700 hover:bg-cream-50',
    secondary: 'border-2 border-white text-white hover:bg-white/10',
    text: 'text-white/90',
  },
  warm: {
    primary: 'bg-teal-600 text-white hover:bg-teal-700',
    secondary: 'border-2 border-navy-300 text-navy-800 hover:bg-navy-100',
    text: 'text-navy-700',
  },
};

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  primaryCTA,
  secondaryCTA,
  variant = 'navy',
  className = '',
}) => {
  const pText = primaryButtonText || primaryCTA?.text || 'Learn More';
  const pLink = primaryButtonLink || primaryCTA?.link || '/';
  const sText = secondaryButtonText || secondaryCTA?.text;
  const sLink = secondaryButtonLink || secondaryCTA?.link;
  const styles = buttonVariants[variant];

  return (
    <section className={`py-20 px-4 ${variantStyles[variant]} ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">{title}</h2>
        <p className={`text-lg md:text-xl mb-10 ${styles.text}`}>{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={pLink}
            className={`px-8 py-4 font-bold rounded-lg transition-all text-lg w-full sm:w-auto text-center ${styles.primary}`}
          >
            {pText}
          </Link>
          {sText && sLink && (
            <Link
              to={sLink}
              className={`px-8 py-4 font-bold rounded-lg transition-all text-lg w-full sm:w-auto text-center ${styles.secondary}`}
            >
              {sText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
