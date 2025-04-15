
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  children,
  className
}) => {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
      {subtitle && (
        <div className="text-muted-foreground max-w-2xl mx-auto mb-6">{subtitle}</div>
      )}
      {children}
    </div>
  );
};

export default SectionHeader;
