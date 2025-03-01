
import { ReactNode } from 'react';

interface SectionTitleProps {
  subtitle?: string;
  children: ReactNode;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ subtitle, children, centered = false, light = false }: SectionTitleProps) => {
  // If the children is missing and we're in the home page context, use "Entdecke Villa Morgenthau"
  const titleText = children || "Entdecke Villa Morgenthau";
  
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p className={`section-subtitle ${light ? 'text-villa-muted' : 'text-villa-accent'}`}>
          {subtitle}
        </p>
      )}
      <h2 className={`section-title ${light ? 'text-white' : 'text-villa-dark'}`}>
        {titleText}
      </h2>
    </div>
  );
};

export default SectionTitle;
