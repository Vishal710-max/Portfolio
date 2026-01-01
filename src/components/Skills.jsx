import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "./ui/card";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
    icon: "💻",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL"],
    icon: "⚙️",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Firebase", "GSAP"],
    icon: "🛠️",
    color: "from-purple-500/20 to-pink-500/20"
  },
];

const Skills = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
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
    // Function to create floating particles - DECLARED FIRST
    const createFloatingParticles = () => {
      const particlesContainer = document.querySelector('.particles-container');
      if (!particlesContainer) return;

      // Clear existing particles
      particlesContainer.innerHTML = '';

      // Create particles based on skill categories
      skillCategories.forEach((category, catIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          const particle = document.createElement('div');
          particle.className = 'particle absolute rounded-full opacity-10';
          
          // Assign colors based on category
          if (catIndex === 0) {
            particle.style.backgroundColor = 'hsl(var(--primary))';
          } else if (catIndex === 1) {
            particle.style.backgroundColor = 'hsl(var(--secondary))';
          } else {
            particle.style.backgroundColor = 'hsl(var(--accent))';
          }
          
          // Random position and size
          const size = 2 + Math.random() * 6;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.left = `${10 + (catIndex * 30) + (Math.random() * 20)}%`;
          particle.style.top = `${20 + (skillIndex * 15) + (Math.random() * 10)}%`;
          
          particlesContainer.appendChild(particle);
          
          // Animate particle
          gsap.to(particle, {
            y: -100,
            x: `+=${(Math.random() - 0.5) * 100}`,
            rotation: 360,
            duration: 10 + Math.random() * 10,
            repeat: -1,
            ease: "none",
            delay: Math.random() * 5
          });
        });
      });
    };

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

      // Grid animation
      gsap.fromTo(gridRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.98
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          }
        }
      );

      // Individual skill cards animation with rotation and stagger
      const cards = cardsRef.current.filter(Boolean);
      
      if (cards.length > 0) {
        // Create a timeline for staggered card animations
        const cardsTL = gsap.timeline({
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
          }
        });

        cards.forEach((card, index) => {
          // Different entrance directions for each card
          const direction = index === 0 ? -60 : 
                          index === 1 ? 0 : 
                          60; // Left, center, right
          
          // Stagger delay
          const delay = index * 0.2;
          
          cardsTL.fromTo(card,
            {
              opacity: 0,
              x: isMobile ? 0 : direction,
              y: 40,
              scale: 0.8,
              rotationY: isMobile ? 0 : index === 0 ? -20 : index === 2 ? 20 : 0,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotationY: 0,
              duration: 0.9,
              delay: delay,
              ease: "back.out(1.7)",
            },
            delay * 0.7
          );

          // Add hover animations to cards
          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -15,
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
              duration: 0.4,
              ease: "power2.out",
              overwrite: "auto"
            });
            
            // Animate skills list on hover
            const skillItems = card.querySelectorAll('.skill-item');
            skillItems.forEach((item, i) => {
              gsap.to(item, {
                x: 10,
                duration: 0.3,
                delay: i * 0.05,
                ease: "power2.out",
                overwrite: "auto"
              });
            });
          };
          
          const handleMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              boxShadow: "",
              duration: 0.4,
              ease: "power2.out",
              overwrite: "auto"
            });
            
            // Reset skills list position
            const skillItems = card.querySelectorAll('.skill-item');
            skillItems.forEach((item, i) => {
              gsap.to(item, {
                x: 0,
                duration: 0.3,
                delay: i * 0.05,
                ease: "power2.out",
                overwrite: "auto"
              });
            });
          };
          
          card.addEventListener('mouseenter', handleMouseEnter);
          card.addEventListener('mouseleave', handleMouseLeave);
          
          // Store cleanup functions
          card._cleanupHandlers = () => {
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
          };
        });
      }

      // Individual skill items animation with stagger
      const skillItems = gsap.utils.toArray(".skill-item");
      
      if (skillItems.length > 0) {
        const skillsTL = gsap.timeline({
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          }
        });

        skillItems.forEach((item, index) => {
          skillsTL.fromTo(item,
            {
              opacity: 0,
              x: -30,
              scale: 0.5,
              rotation: -10
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              rotation: 0,
              duration: 0.5,
              ease: "back.out(1.7)",
              delay: index * 0.08
            },
            index * 0.08
          );
        });
      }

      // Category icon animation
      const icons = gsap.utils.toArray(".category-icon");
      
      if (icons.length > 0) {
        icons.forEach((icon, index) => {
          if (cardsRef.current[index]) {
            gsap.fromTo(icon,
              {
                opacity: 0,
                scale: 0,
                rotation: 180
              },
              {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.5)",
                scrollTrigger: {
                  trigger: cardsRef.current[index],
                  start: "top 85%",
                  end: "bottom 15%",
                  toggleActions: "play reverse play reverse",
                }
              }
            );
          }
        });
      }

      // Add floating particles animation in background
      createFloatingParticles();

    }, containerRef);

    // Refresh ScrollTrigger after a short delay
    setTimeout(() => {
      ScrollTrigger.refresh();
      createFloatingParticles();
    }, 100);

    // Recreate particles on window resize
    const handleResize = () => {
      createFloatingParticles();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up GSAP context
      ctx.revert();
      
      // Clean up resize listener
      window.removeEventListener('resize', handleResize);
      
      // Clean up hover event listeners
      const cards = cardsRef.current.filter(Boolean);
      cards.forEach((card) => {
        if (card._cleanupHandlers) {
          card._cleanupHandlers();
        }
      });
    };
  }, [isMobile]);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="min-h-screen py-20 bg-background relative overflow-hidden"
    >
      {/* Animated background with particles */}
      <div className="absolute inset-0 overflow-hidden opacity-100 pointer-events-none">
        <div className="particles-container absolute inset-0" />
        
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl" />
        </div>
      </div>

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground opacity-0"
        >
          Skills & <span className="text-primary">Technologies</span>
        </h2>

        <div ref={gridRef} className="opacity-0">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 relative overflow-hidden group opacity-0 ${category.color}`}
              >
                {/* Animated background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Pulsing ring effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
                
                <div className="relative z-10">
                  {/* Category icon */}
                  <div className="flex justify-center mb-4">
                    <span className="category-icon text-4xl opacity-0">
                      {category.icon}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 text-primary text-center">
                    {category.category}
                  </h3>
                  
                  <ul className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="skill-item text-muted-foreground flex items-center justify-center group-hover:text-foreground transition-colors duration-300 opacity-0"
                      >
                        <span className="text-primary mr-3 group-hover:scale-125 transition-transform duration-300">●</span>
                        <span className="font-medium">{skill}</span>
                        
                        {/* Skill level indicator */}
                        <div className="ml-auto w-16 h-1 bg-secondary/30 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full skill-level-bar"
                            style={{
                              width: `${80 + (Math.random() * 20)}%`
                            }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Skills count badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.skills.length} skills
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills summary section */}
        <div className="mt-16 text-center" ref={el => {
          if (el) {
            gsap.fromTo(el,
              {
                opacity: 0,
                y: 30
              },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                  trigger: el,
                  start: "top 85%",
                  end: "bottom 15%",
                  toggleActions: "play reverse play reverse",
                }
              }
            );
          }
        }}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuously expanding my toolkit with modern technologies and best practices.
            Currently exploring <span className="text-primary font-semibold">React Native</span>, 
            <span className="text-primary font-semibold"> GraphQL</span>, and 
            <span className="text-primary font-semibold"> Three.js</span>.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0) translateX(0); 
            opacity: 0.1;
          }
          50% { 
            opacity: 0.2;
          }
        }
        
        .particle {
          animation: float-particle 3s ease-in-out infinite;
        }
        
        /* Skill level bar animation */
        .skill-item:hover .skill-level-bar {
          animation: fillBar 0.6s ease-out forwards;
          transform-origin: left;
        }
        
        @keyframes fillBar {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;