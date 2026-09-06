import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
  align?: 'left' | 'center' | 'right';
  className?: string;
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  alignment,
  align,
  className = '',
  light = false,
}) => {
  const effectiveAlignment = alignment || align || 'center';
  return (
    <div className={`mb-12 ${effectiveAlignment === 'center' ? 'text-center' : effectiveAlignment === 'right' ? 'text-right' : 'text-left'} ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 font-heading ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {(subtitle || description) && (
        <p className={`text-lg max-w-3xl ${effectiveAlignment === 'center' ? 'mx-auto' : ''} ${light ? 'text-cream-50/80' : 'text-navy-700'}`}>
          {subtitle || description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
