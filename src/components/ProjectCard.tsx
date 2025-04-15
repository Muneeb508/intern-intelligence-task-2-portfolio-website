
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  projectUrl,
  index,
}) => {
  return (
    <div 
      className="group hover-scale bg-white border border-border rounded-lg overflow-hidden shadow-sm"
      style={{ animationDelay: `${(index + 1) * 150}ms` }}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300"></div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg text-black font-semibold">{title}</h3>
          <a 
            href={projectUrl} 
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`View ${title} project`}
          >
            <ArrowUpRight className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </a>
        </div>
        <p className=" text-black mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, idx) => (
            <span 
              key={idx} 
              className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
