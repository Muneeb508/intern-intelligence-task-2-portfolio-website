
import { useEffect } from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import SkillBar from "@/components/SkillBar";
import ContactForm from "@/components/ContactForm";
import { ArrowDown, Code, Globe, Database, Palette, Server } from "lucide-react";

import "../App.css";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Force scroll to top on load
  }, []);
  // Initialize animations for sections
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("section-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    

    document.querySelectorAll(".animate-on-scroll").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Theme",
      description: "Custom WordPress theme with WooCommerce integration and optimized checkout flow.",
      technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript"],
      imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450&q=80",
      projectUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio site with animations and modern design principles.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      imageUrl: "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450&q=80",
      projectUrl: "#",
    },
    {
      title: "News Magazine",
      description: "Custom WordPress theme for a news magazine with category filtering and social sharing.",
      technologies: ["WordPress", "SCSS", "JavaScript", "REST API"],
      imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450&q=80",
      projectUrl: "#",
    },
    {
      title: "Business Directory",
      description: "Location-based business directory with advanced search and user reviews.",
      technologies: ["WordPress", "ACF Pro", "Google Maps API", "PHP"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450&q=80",
      projectUrl: "#",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden"
      >
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium px-3 py-1 mb-4 rounded-full bg-secondary text-secondary-foreground animate-fade-in opacity-0" style={{ animationDelay: "200ms" }}>
              WordPress & Front-End Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: "400ms" }}>
              Crafting Digital Experiences with Precision
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 animate-fade-in opacity-0" style={{ animationDelay: "600ms" }}>
              I build fast, responsive, and user-friendly websites
              that leave a lasting impression.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: "800ms" }}>
              <a
                href="#portfolio"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-md hover:bg-secondary/80 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" aria-label="Scroll down">
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-secondary/50 animate-on-scroll opacity-0"
      >
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="About Me" 
            subtitle="With over 5 years of experience in WordPress development and front-end technologies, I create websites that combine aesthetic appeal with technical excellence."
          />
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <img
                src="pic3.jpg"
                alt="Muneeb"
                className="rounded-lg shadow-md w-full object-cover aspect-[3/4]"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                I'm Muneeb, specializing in WordPress and front-end development 
              </h3>
              <p className="text-muted-foreground mb-6">
                My journey into web development began when I realized the power of 
                creating digital experiences that connect businesses with their audiences. 
                Since then, I've been dedicated to mastering WordPress development and 
                front-end technologies to build websites that are not only visually
                stunning but also functionally robust.
              </p>
              <p className="text-muted-foreground mb-6">
                I approach each project with a keen eye for detail, a commitment to clean 
                code, and a focus on creating intuitive user experiences. My goal is to 
                deliver websites that exceed expectations in terms of design, functionality, 
                and performance.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 border border-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <a href="My CV.pdf" target="_blank"><span>Download Resume</span></a>
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 animate-on-scroll opacity-0"
      >
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="My Services" 
            subtitle="I offer comprehensive web development solutions tailored to meet your specific needs and goals."
          />
          <div className="grid text-black sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-border shadow-sm hover-scale transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WordPress Development</h3>
              <p className="text-muted-foreground">
                Custom WordPress themes and plugins tailored to your specific requirements,
                with a focus on clean code and optimal performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border shadow-sm hover-scale transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Front-End Development</h3>
              <p className="text-muted-foreground">
                Responsive and interactive user interfaces built with modern
                frameworks and libraries, ensuring a smooth user experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border shadow-sm hover-scale transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Intuitive and aesthetically pleasing designs that enhance
                user engagement and convey your brand's unique identity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border shadow-sm hover-scale transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Website Maintenance</h3>
              <p className="text-muted-foreground">
                Ongoing support, updates, and optimization to ensure your
                website remains secure, fast, and up-to-date.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border shadow-sm hover-scale transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">E-Commerce Solutions</h3>
              <p className="text-muted-foreground">
                WooCommerce and custom e-commerce solutions that provide
                a seamless shopping experience for your customers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border shadow-sm hover-scale transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Plugin Integration</h3>
              <p className="text-muted-foreground">
                Seamless integration of third-party plugins and services to
                extend your website's functionality and capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 bg-secondary/50 animate-on-scroll opacity-0"
      >
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="My Skills" 
            subtitle="Over the years, I've honed my technical skills to deliver high-quality websites and web applications."
          />
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6">WordPress Development</h3>
              <SkillBar name="WordPress Theme Development" percentage={95} delay={100} />
              <SkillBar name="Plugin Development" percentage={85} delay={200} />
              <SkillBar name="WooCommerce" percentage={90} delay={300} />
              <SkillBar name="Gutenberg" percentage={80} delay={400} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Front-End Technologies</h3>
              <SkillBar name="HTML5 & CSS3" percentage={95} delay={100} />
              <SkillBar name="JavaScript" percentage={90} delay={200} />
              <SkillBar name="React.js" percentage={85} delay={300} />
              <SkillBar name="Tailwind CSS" percentage={88} delay={400} />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-24 animate-on-scroll opacity-0"
      >
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="My Work" 
            subtitle="Here are some of my recent projects. Each one presented unique challenges and opportunities for creative solutions."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                index={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 bg-secondary/50 animate-on-scroll opacity-0"
      >
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Testimonials" 
            subtitle="What my clients say about working with me."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-border shadow-sm">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 inline-block text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Muneeb developed a custom WordPress theme for our e-commerce store that exceeded our expectations. His attention to detail and technical expertise made our website stand out from competitors."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">
                    SM
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Sarah Mitchell</h4>
                  <p className="text-sm text-muted-foreground">CEO, Fashion Boutique</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border shadow-sm">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 inline-block text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Working with Muneeb was a pleasure. He quickly understood our business needs and delivered a clean, responsive website that has significantly improved our online presence and lead generation."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold">
                    DT
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">David Thompson</h4>
                  <p className="text-sm text-muted-foreground">Marketing Director, Tech Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 animate-on-scroll opacity-0"
      >
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Get In Touch" 
            subtitle="Let's discuss your project! Fill out the form below and I'll get back to you as soon as possible."
          />
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out if you have any questions or want to discuss a potential project. I'm always open to new opportunities and collaborations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-3 text-primary h-5 w-5 mt-0.5"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                  </svg>
                  <div>
                    <h4 className="font-medium text-white">Phone</h4>
                    <p className="text-muted-foreground">+92 3295015524</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-3 text-primary h-5 w-5 mt-0.5"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <p className="text-muted-foreground">muneebktktech@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-3 text-primary h-5 w-5 mt-0.5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <h4 className="font-medium text-white">Location</h4>
                    <p className="text-muted-foreground">Islamabad</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
