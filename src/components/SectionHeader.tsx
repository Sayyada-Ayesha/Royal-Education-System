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
      <h2 className={`font-bold mb-4 font-heading ${light ? 'text-white' : 'text-ink-950'}`} style={{ fontSize: 'var(--fs-h2)' }}>
        {title}
      </h2>
      {(subtitle || description) && (
        <p className={`max-w-3xl leading-relaxed ${effectiveAlignment === 'center' ? 'mx-auto' : ''} ${light ? 'text-ivory-200/70' : 'text-ink-500'}`} style={{ fontSize: 'var(--fs-body-lg)' }}>
          {subtitle || description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
