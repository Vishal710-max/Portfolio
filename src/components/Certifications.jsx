import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "./ui/card";
import { Award, Code2, BookOpen, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const extraCertificates = [
  {
    id: 1,
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "24-Sep-2025",
    image: "/Certificates/c1.png",
  },
  {
    id: 2,
    title: "TCS iON Career Edge - Young Professional",
    issuer: "Tata Consultancy Services",
    date: "19-Nov-2025",
    image: "/Certificates/c2.png",
  },
  {
    id: 3,
    title: "AI Tools Skill Up",
    issuer: "GeeksforGeeks",
    date: "Completed",
    image: "/Certificates/c3.png",
  },
  {
    id: 4,
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Forage",
    date: "04-Aug-2025",
    image: "/Certificates/c4.png",
  },
];

const leetCodeProfile = {
  username: "Vishal-710",
  solved: 85,
  rank: "1,437,760",
  pic: "/Certificates/LeetCode.png", 
};

const gfgProfile = {
  username: "Vishal Bhingarde",
  instituteRank: 175,
  codingScore: 120,
  pic: "/Certificates/gfg.png",
};

const CodingProfiles = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const certificatesTitleRef = useRef(null);
  const activitiesTitleRef = useRef(null);
  const certificatesRef = useRef(null);
  const activitiesRef = useRef(null);
  const cardsRef = useRef([]);
  const leetCodeCardRef = useRef(null);
  const gfgCardRef = useRef(null);
  const [openImage, setOpenImage] = useState(null);
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
    // Function to create floating icons in background - DECLARED FIRST
    const createFloatingIcons = () => {
      const iconsContainer = document.querySelector('.floating-icons');
      if (!iconsContainer) return;

      // Clear existing icons
      iconsContainer.innerHTML = '';

      // Create floating icons
      const icons = ['🎓', '🏆', '⭐', '💻', '📜', '🏅', '🚀', '✨'];
      
      icons.forEach((icon, index) => {
        const iconElement = document.createElement('div');
        iconElement.className = 'floating-icon absolute text-3xl opacity-10 dark:opacity-5';
        iconElement.textContent = icon;
        
        // Random position
        const left = 5 + Math.random() * 90;
        const top = 10 + Math.random() * 80;
        
        iconElement.style.left = `${left}%`;
        iconElement.style.top = `${top}%`;
        
        iconsContainer.appendChild(iconElement);
        
        // Animate icon
        gsap.to(iconElement, {
          y: -50,
          x: `+=${(Math.random() - 0.5) * 50}`,
          rotation: 360,
          duration: 15 + Math.random() * 15,
          repeat: -1,
          ease: "none",
          delay: Math.random() * 5
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

      // Main title animation
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

      // Certificates title animation
      gsap.fromTo(certificatesTitleRef.current,
        {
          opacity: 0,
          x: -50,
          y: 20
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: certificatesTitleRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play reverse play reverse",
          }
        }
      );

      // Certificates grid animation
      gsap.fromTo(certificatesRef.current,
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
            trigger: certificatesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          }
        }
      );

      // Individual certificate cards animation with stagger
      const certificateCards = cardsRef.current.slice(0, 4).filter(Boolean);
      
      if (certificateCards.length > 0) {
        // Create a timeline for staggered card animations
        const certCardsTL = gsap.timeline({
          scrollTrigger: {
            trigger: certificatesRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
          }
        });

        certificateCards.forEach((card, index) => {
          const row = Math.floor(index / 2);
          const col = index % 2;
          
          // Stagger based on position for more dynamic effect
          const delay = isMobile ? index * 0.1 : (row * 0.2) + (col * 0.1);
          
          certCardsTL.fromTo(card,
            {
              opacity: 0,
              y: 60,
              scale: 0.9,
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

          // Add hover animations to cards
          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -10,
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
              duration: 0.3,
              ease: "power2.out",
              overwrite: "auto"
            });
            
            // Animate the award icon
            const icon = card.querySelector('.cert-icon');
            if (icon) {
              gsap.to(icon, {
                rotation: 360,
                duration: 0.6,
                ease: "power2.out"
              });
            }
          };
          
          const handleMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              boxShadow: "",
              duration: 0.3,
              ease: "power2.out",
              overwrite: "auto"
            });
            
            // Reset icon rotation
            const icon = card.querySelector('.cert-icon');
            if (icon) {
              gsap.to(icon, {
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
              });
            }
          };
          
          card.addEventListener('mouseenter', handleMouseEnter);
          card.addEventListener('mouseleave', handleMouseLeave);
          
          // Store cleanup functions
          card._cleanupHandlers = () => {
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
          };

          // Add click animation
          const handleClick = () => {
            const cert = extraCertificates[index];
            if (cert) {
              setOpenImage(cert.image);
            }
          };
          card.addEventListener('click', handleClick);
          card._clickHandler = handleClick;
        });
      }

      // Activities title animation
      gsap.fromTo(activitiesTitleRef.current,
        {
          opacity: 0,
          x: 50,
          y: 20
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: activitiesTitleRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play reverse play reverse",
          }
        }
      );

      // Activities grid animation
      gsap.fromTo(activitiesRef.current,
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
            trigger: activitiesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          }
        }
      );

      // Profile cards animation
      const profileCards = [leetCodeCardRef.current, gfgCardRef.current].filter(Boolean);
      
      if (profileCards.length > 0) {
        const profileTL = gsap.timeline({
          scrollTrigger: {
            trigger: activitiesRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
          }
        });

        profileCards.forEach((card, index) => {
          profileTL.fromTo(card,
            {
              opacity: 0,
              x: index === 0 ? -60 : 60,
              y: 40,
              scale: 0.9
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.2,
              ease: "back.out(1.7)",
            },
            index * 0.2
          );

          // Add hover animations to profile cards
          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -15,
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
              duration: 0.4,
              ease: "power2.out",
              overwrite: "auto"
            });
            
            // Animate stats on hover
            const stats = card.querySelectorAll('.profile-stat');
            stats.forEach((stat, i) => {
              gsap.fromTo(stat,
                {
                  scale: 1
                },
                {
                  scale: 1.1,
                  duration: 0.3,
                  delay: i * 0.1,
                  ease: "power2.out",
                  overwrite: "auto"
                }
              );
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
            
            // Reset stats scale
            const stats = card.querySelectorAll('.profile-stat');
            stats.forEach((stat, i) => {
              gsap.to(stat, {
                scale: 1,
                duration: 0.3,
                delay: i * 0.1,
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

      // Stats animation
      const stats = gsap.utils.toArray(".profile-stat");
      
      if (stats.length > 0) {
        const statsTL = gsap.timeline({
          scrollTrigger: {
            trigger: activitiesRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
          }
        });

        stats.forEach((stat, index) => {
          statsTL.fromTo(stat,
            {
              opacity: 0,
              y: 30,
              scale: 0.5
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              ease: "back.out(1.7)",
              delay: index * 0.1
            },
            index * 0.1
          );
        });
      }

      // Create floating certificate icons in background
      createFloatingIcons();

    }, containerRef);

    // Refresh ScrollTrigger after a short delay
    setTimeout(() => {
      ScrollTrigger.refresh();
      createFloatingIcons();
    }, 100);

    // Recreate icons on window resize
    const handleResize = () => {
      createFloatingIcons();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up GSAP context
      ctx.revert();
      
      // Clean up resize listener
      window.removeEventListener('resize', handleResize);
      
      // Clean up all event listeners
      const allCards = [
        ...cardsRef.current.slice(0, 4).filter(Boolean),
        leetCodeCardRef.current,
        gfgCardRef.current
      ];
      
      allCards.forEach((card) => {
        if (card) {
          if (card._cleanupHandlers) {
            card._cleanupHandlers();
          }
          if (card._clickHandler) {
            card.removeEventListener('click', card._clickHandler);
          }
        }
      });
    };
  }, [isMobile]);

  return (
    <section 
      className="py-20 relative overflow-hidden"
      id="profiles"
      ref={sectionRef}
      style={{
        background: `linear-gradient(135deg, 
          hsl(var(--background)) 0%,
          hsl(var(--card)) 50%,
          hsl(var(--background)) 100%
        )`
      }}
    >
      {/* Animated background with floating icons */}
      <div className="absolute inset-0 overflow-hidden opacity-100 pointer-events-none">
        <div className="floating-icons absolute inset-0" />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      </div>

      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        {/* MAIN TITLE */}
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground opacity-0"
        >
          <span className="text-primary">Achievements & Profiles</span>
        </h2>

        {/* ======================= */}
        {/* CERTIFICATES SECTION */}
        {/* ======================= */}

        <h3 
          ref={certificatesTitleRef}
          className="text-2xl md:text-3xl font-bold mb-8 text-foreground opacity-0"
        >
          <span className="text-primary">Certificates</span>
        </h3>

        <div 
          ref={certificatesRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20 opacity-0"
        >
          {extraCertificates.map((cert, i) => (
            <Card
              key={cert.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className="
                bg-card/90 backdrop-blur-sm
                border border-border/50
                hover:border-primary/50
                hover:shadow-glow
                transition-all duration-300
                cursor-pointer
                rounded-xl p-6
                flex flex-col justify-between
                opacity-0
                group
              "
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg cert-icon">
                  <Award className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  <p className="text-primary text-sm mt-2 font-medium">
                    {cert.date}
                  </p>
                </div>
              </div>

              <div className="mt-6 w-full h-40 overflow-hidden rounded-lg border border-border/30 group-hover:border-primary/50 transition-colors duration-300">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 transform transition-transform duration-500"
                />
              </div>
            </Card>
          ))}
        </div>

        {/* ======================= */}
        {/* EXTRA ACTIVITIES SECTION */}
        {/* ======================= */}

        <h3
          ref={activitiesTitleRef}
          className="text-2xl md:text-3xl font-bold mb-8 text-foreground opacity-0"
        >
          <span className="text-primary">Extra Activities</span>
        </h3>

        <div 
          ref={activitiesRef}
          className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto opacity-0"
        >
          {/* LEETCODE BOX */}
          <Card
            ref={leetCodeCardRef}
            className="
              bg-card/90 backdrop-blur-sm
              border border-border/50
              hover:border-primary/50
              hover:shadow-glow
              transition-all duration-300
              rounded-xl p-6
              flex flex-col
              opacity-0
              group
            "
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Code2 className="h-6 w-6 text-primary" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {leetCodeProfile.username}
                </h3>
                <p className="text-muted-foreground text-sm">LeetCode Profile</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="profile-stat bg-background/30 p-3 rounded-lg border border-border/50">
                <p className="text-muted-foreground">Solved</p>
                <p className="font-semibold text-primary text-lg">
                  {leetCodeProfile.solved}
                </p>
              </div>

              <div className="profile-stat bg-background/30 p-3 rounded-lg border border-border/50">
                <p className="text-muted-foreground">Rank</p>
                <p className="font-semibold text-primary text-lg">
                  {leetCodeProfile.rank}
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-lg overflow-hidden border border-border/30 group-hover:border-primary/50 transition-colors duration-300">
              <img
                src={leetCodeProfile.pic}
                alt="LeetCode profile"
                className="w-full h-40 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 transform transition-transform duration-500"
              />
            </div>
          </Card>

          {/* GFG BOX */}
          <Card
            ref={gfgCardRef}
            className="
              bg-card/90 backdrop-blur-sm
              border border-border/50
              hover:border-primary/50
              hover:shadow-glow
              transition-all duration-300
              rounded-xl p-6
              flex flex-col
              opacity-0
              group
            "
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {gfgProfile.username}
                </h3>
                <p className="text-muted-foreground text-sm">GeeksforGeeks Profile</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="profile-stat bg-background/30 p-3 rounded-lg border border-border/50">
                <p className="text-muted-foreground">Coding Score</p>
                <p className="font-semibold text-primary text-lg">
                  {gfgProfile.codingScore}
                </p>
              </div>

              <div className="profile-stat bg-background/30 p-3 rounded-lg border border-border/50">
                <p className="text-muted-foreground">Institute Rank</p>
                <p className="font-semibold text-primary text-lg">
                  {gfgProfile.instituteRank}
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-lg overflow-hidden border border-border/30 group-hover:border-primary/50 transition-colors duration-300">
              <img
                src={gfgProfile.pic}
                alt="GeeksforGeeks profile"
                className="w-full h-40 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105 transform transition-transform duration-500"
              />
            </div>
          </Card>
        </div>
      </div>

      {/* IMAGE MODAL */}
      {openImage && (
        <div
          className="fixed inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setOpenImage(null)}
          style={{ animation: 'modalZoom 0.3s ease-out forwards' }}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setOpenImage(null)}
              className="absolute -top-10 right-0 p-2 text-foreground hover:text-primary transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
            { <img src={openImage} 
               alt="Certificate preview"
              className="w-full h-auto rounded-xl border-2 border-primary/50 shadow-2xl"
            /> }
          </div>
        </div>
      )}
    </section>
  );
};

export default CodingProfiles;