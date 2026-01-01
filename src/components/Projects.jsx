import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Task Management application",
    description: "A Task Scheduler application that enables users to add, update, modify, and delete tasks, with built-in notifications to help manage deadlines effectively.",
    tech: ["React", "Tailwind CSS", "Local Storage"],
    github: "https://github.com/Vishal710-max/Task-Scheduler-application",
    live: "my-to-do-list-bacb6b3vt-vishal-s-projects-3b720920.vercel.app",
  },
  {
    title: "Portfolio",
    description: "A developer portfolio built to present my work, technical skills, and achievements through a modern, user-friendly interface.",
    tech: ["React", "Gsap", "Tailwind CSS",'Framer Motion'], 
    github: "https://github.com/Vishal710-max/Portfolio",
    live: "#",
  },
  {
    title: "Password Manager",
    description: "Developed a Password Manager application that securely handles credential storage with a focus on data protection and access control.",
    tech: ["Python", "MongoDB", "streamlit",'Data Science'],
    github: "https://github.com/Vishal710-max/Password-manager",
    live: "https://www.linkedin.com/posts/vishal-bhingarde-bb23a2376_python-streamlit-mongodb-activity-7375179330664140800-kSph?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFz2QjYBjR8DKHAsIaERuPk2gqpJwVX2k-s",
  },
  {
    title: "Contact Manager App",
    description: "A Contact Manager application that allows users to efficiently store, organize, and manage their contacts with features like search, edit, and delete.",
    tech: ["Streamlit", "Python", "MySQL"],
    github: "https://github.com/Vishal710-max/Contact-Manager-App",
    live: "https://www.linkedin.com/posts/vishal-bhingarde-bb23a2376_python-streamlit-mysql-activity-7369326240106758146-rMmS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFz2QjYBjR8DKHAsIaERuPk2gqpJwVX2k-s",
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsGridRef = useRef(null);
  const cardsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Wait for DOM to be ready
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.config({
        limitCallbacks: true,
        ignoreMobileResize: true
      });

      // Section animation
      gsap.fromTo(sectionRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          }
        }
      );

      // Title animation with bounce effect
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          }
        }
      );

      // Projects grid animation
      gsap.fromTo(projectsGridRef.current,
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsGridRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          }
        }
      );

      // Individual project cards animation with stagger
      const cards = cardsRef.current.filter(Boolean);
      
      if (cards.length > 0) {
        // Create a timeline for staggered card animations
        const cardsTL = gsap.timeline({
          scrollTrigger: {
            trigger: projectsGridRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
          }
        });

        cards.forEach((card, index) => {
          const row = Math.floor(index / 2);
          const col = index % 2;
          
          // Stagger based on position for more dynamic effect
          const delay = isMobile ? index * 0.1 : (row * 0.2) + (col * 0.1);
          
          cardsTL.fromTo(card,
            {
              opacity: 0,
              y: 60,
              scale: 0.95,
              rotationY: isMobile ? 0 : col === 0 ? -15 : 15,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationY: 0,
              duration: 0.8,
              delay: delay,
              ease: "back.out(1.7)",
            },
            delay * 0.5
          );
        });

        // Add hover animations to cards
        cards.forEach((card) => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -10,
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
              duration: 0.3,
              ease: "power2.out"
            });
          });
          
          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              boxShadow: "",
              duration: 0.3,
              ease: "power2.out"
            });
          });
        });
      }

      // Tech stack badges animation
      const techBadges = gsap.utils.toArray(".tech-badge");
      
      const techTL = gsap.timeline({
        scrollTrigger: {
          trigger: projectsGridRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        }
      });

      techBadges.forEach((badge, index) => {
        techTL.fromTo(badge,
          {
            opacity: 0,
            scale: 0,
            y: 20
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "back.out(1.7)",
            delay: index * 0.05
          },
          index * 0.05
        );
      });

      // Button animation
      const buttons = gsap.utils.toArray(".project-button");
      
      buttons.forEach((button, index) => {
        gsap.fromTo(button,
          {
            opacity: 0,
            x: index % 2 === 0 ? -20 : 20
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: button.closest('.card'),
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play reverse play reverse",
            }
          }
        );
      });

    }, containerRef);

    // Refresh ScrollTrigger after a short delay
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ctx.revert();
      // Clean up hover event listeners
      const cards = cardsRef.current.filter(Boolean);
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, [isMobile]);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="min-h-screen py-20 bg-gradient-dark relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-100 pointer-events-none">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="projectsGridGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.05" />
            </linearGradient>
            <pattern id="projectsGridPattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="url(#projectsGridGradient)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#projectsGridPattern)" />
        </svg>
        
        {/* Floating code-like elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute font-mono text-xs md:text-sm opacity-10 dark:opacity-5 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${8 + Math.random() * 8}s`,
                color: i % 3 === 0 ? 'var(--primary)' : 
                       i % 3 === 1 ? 'var(--secondary)' : 'var(--accent)'
              }}
            >
              {i % 4 === 0 ? "<Project />" : 
               i % 4 === 1 ? "const code = true;" : 
               i % 4 === 2 ? "function dev() {}" : 
               "export default Projects;"}
            </div>
          ))}
        </div>
      </div>

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground opacity-0"
        >
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div ref={projectsGridRef} className="opacity-0">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="p-6 bg-card/90 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 opacity-0 relative overflow-hidden group"
              >
                {/* Project card background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Project number indicator */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg opacity-90">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-semibold mb-3 text-foreground relative z-10">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 relative z-10">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="tech-badge px-3 py-1 bg-secondary/80 text-foreground text-sm rounded-full border border-border/50 opacity-0"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 relative z-10">
                  <Button
                    variant="outline"
                    size="sm"
                    className="project-button border-primary text-primary hover:bg-primary hover:text-primary-foreground opacity-0"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="project-button bg-primary hover:bg-primary/90 opacity-0"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>

              </Card>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg); 
          }
          33% { 
            transform: translateY(-15px) translateX(10px) rotate(5deg); 
          }
          66% { 
            transform: translateY(10px) translateX(-10px) rotate(-5deg); 
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .bg-gradient-dark {
          background: linear-gradient(135deg, 
            hsl(var(--background)) 0%,
            hsl(var(--card)) 50%,
            hsl(var(--background)) 100%
          );
        }
        
        .hover\\:shadow-glow:hover {
          box-shadow: 0 0 30px rgba(var(--primary-rgb), 0.3);
        }
      `}</style>
    </section>
  );
};

export default Projects;