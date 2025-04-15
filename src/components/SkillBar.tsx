
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, delay = 0 }) => {
  const [width, setWidth] = useState(0);
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById(`skill-${name.replace(/\s+/g, '-').toLowerCase()}`);
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, [name]);
  
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, percentage, delay]);

  return (
    <div id={`skill-${name.replace(/\s+/g, '-').toLowerCase()}`} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2.5">
        <div 
          className={cn(
            "h-2.5 rounded-full bg-primary transition-all duration-1000 ease-out",
          )}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
