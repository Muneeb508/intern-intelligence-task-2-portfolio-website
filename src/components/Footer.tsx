
import React from 'react';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Muneeb shah</h2>
            <p className="text-muted-foreground max-w-md">
              WordPress & Front-End Developer creating beautiful, functional websites 
              with clean code and pixel-perfect design.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="nav-link text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="#about" className="nav-link text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#skills" className="nav-link text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</a>
              <a href="#portfolio" className="nav-link text-sm text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
              <a href="#contact" className="nav-link text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Muneeb. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/Muneeb508" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/muneeb-shah-63981a29a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://www.instagram.com/muneeb_special/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram className="h-5 w-5" />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
