import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  primaryCTA?: { text: string; link: string };
  secondaryCTA?: { text: string; link: string };
  variant?: 'navy' | 'teal' | 'warm';
  className?: string;
}

const variantStyles: Record<string, string> = {
  navy: 'gradient-ink text-white',
  teal: 'gradient-ink text-white',
  warm: 'bg-ivory-100 text-ink-950',
};

const buttonVariants: Record<string, { primary: string; secondary: string; text: string }> = {
  navy: {
    primary: 'btn-primary',
    secondary: 'border-1.5 border-white/25 text-white hover:bg-white/10 hover:border-champagne-400/40',
    text: 'text-ivory-200/80',
  },
  teal: {
    primary: 'btn-primary',
    secondary: 'border-1.5 border-white/25 text-white hover:bg-white/10 hover:border-champagne-400/40',
    text: 'text-ivory-200/80',
  },
  warm: {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    text: 'text-ink-500',
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
  const styles = buttonVariants[variant] || buttonVariants.navy;

  return (
    <section className={`section-padding px-4 ${variantStyles[variant] || variantStyles.navy} ${className}`}>
      <div className="site-container-narrow text-center">
        <h2 className="font-heading font-bold mb-5" style={{ fontSize: 'var(--fs-h2)' }}>{title}</h2>
        <p className={`mb-10 leading-relaxed ${styles.text}`} style={{ fontSize: 'var(--fs-body-lg)' }}>{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={pLink}
            className={`${styles.primary} px-8 py-4 font-bold rounded-xl transition-all w-full sm:w-auto text-center`}
          >
            {pText}
          </Link>
          {sText && sLink && (
            <Link
              to={sLink}
              className={`px-8 py-4 font-bold rounded-xl transition-all w-full sm:w-auto text-center inline-flex items-center justify-center ${styles.secondary}`}
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
