
import { ReactNode } from 'react';

interface SectionTitleProps {
  subtitle?: string;
  children: ReactNode;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ subtitle, children, centered = false, light = false }: SectionTitleProps) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p className={`section-subtitle ${light ? 'text-villa-muted' : 'text-villa-accent'}`}>
          {subtitle}
        </p>
      )}
      <h2 className={`section-title ${light ? 'text-white' : 'text-villa-dark'}`}>
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;
