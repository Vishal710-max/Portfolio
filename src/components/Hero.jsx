// // components/Hero.jsx
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { Button } from "./ui/button";
// import { ArrowDown, FileText } from "lucide-react";

// const Hero = () => {
//   const heroRef = useRef(null);
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const descRef = useRef(null);
//   const buttonRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(titleRef.current, {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         delay: 0.2,
//       });

//       gsap.from(subtitleRef.current, {
//         opacity: 0,
//         y: 30,
//         duration: 1,
//         delay: 0.5,
//       });

//       gsap.from(descRef.current, {
//         opacity: 0,
//         y: 30,
//         duration: 1,
//         delay: 0.8,
//       });

//       gsap.from(buttonRef.current, {
//         opacity: 0,
//         y: 20,
//         duration: 1,
//         delay: 1.1,
//       });

//       gsap.from(imageRef.current, {
//         opacity: 0,
//         scale: 0.8,
//         duration: 1.2,
//         delay: 0.3,
//         ease: "back.out(1.7)",
//       });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   const scrollToProjects = () => {
//     const element = document.querySelector("#projects");
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       id="home"
//       ref={heroRef}
//       className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-dark"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(142_76%_36%_/_0.1)_0%,_transparent_65%)]"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

//           {/* Image */}
//           <div className="flex justify-center md:justify-end order-1 md:order-2">
//             <div
//               ref={imageRef}
//               className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-glow"
//             >
//               <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
//                 <span className="text-6xl md:text-8xl font-bold text-primary-foreground">AJ</span>
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="text-center md:text-left order-2 md:order-1">
//             <h1
//               ref={titleRef}
//               className="text-4xl md:text-6xl font-bold mb-4 text-foreground"
//             >
//               Hi, I'm <span className="text-primary">Vishal Bhingarde</span>
//             </h1>

//             <p
//               ref={subtitleRef}
//               className="text-xl md:text-2xl text-muted-foreground mb-6"
//             >
//               Full Stack Developer
//             </p>

//             <p
//               ref={descRef}
//               className="text-base md:text-lg text-muted-foreground mb-8"
//             >
//               Crafting beautiful, responsive web applications with modern technologies.
//               Passionate about clean code and exceptional user experiences.
//             </p>

//             <div
//               ref={buttonRef}
//               className="flex gap-4 justify-center md:justify-start flex-wrap"
//             >
//               <Button
//                 onClick={scrollToProjects}
//                 size="lg"
//                 className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
//               >
//                 View My Work
//                 <ArrowDown className="ml-2 h-5 w-5" />
//               </Button>

//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
//                 onClick={() => window.open('#', '_blank')}
//               >
//                 View My Resume
//                 <FileText className="ml-2 h-5 w-5" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
//         <ArrowDown className="h-6 w-6 text-primary" />
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "./ui/button";
import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    // Create timeline for sequential animations
    const tl = gsap.timeline();

    // Background fade in
    tl.fromTo(heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );

    // Title animation
    tl.fromTo(titleRef.current,
      { 
        opacity: 0, 
        y: 30,
        scale: 0.95 
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8,
        ease: "power3.out"
      },
      "-=0.3"
    );

    // Subtitle animation
    tl.fromTo(subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    );

    // Description animation
    tl.fromTo(descRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    );

    // Buttons animation
    tl.fromTo(buttonsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    );

    // Social icons animation
    tl.fromTo(socialRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.3"
    );

    // Image animation
    tl.fromTo(imageRef.current,
      {
        opacity: 0,
        scale: 0.8,
        rotation: -5
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)"
      },
      "-=0.8"
    );

    // Add subtle floating animation to image
    gsap.to(imageRef.current, {
      y: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-2">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Welcome to my portfolio
              </span>
            </div>

            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight"
            >
              Hi, I'm{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
                Vishal Bhingarde
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium"
            >
              Full Stack Developer & Problem Solver
            </p>

            <p
              ref={descRef}
              className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              I build modern, responsive web applications with clean code and 
              exceptional user experiences. Passionate about turning ideas into 
              reality through technology.
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300 group px-8"
              >
                <span>View Projects</span>
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-border hover:border-primary hover:bg-primary/5 text-foreground transition-all duration-300 group px-8"
                onClick={() => window.open('/Resume/Vishal Resume.pdf', '_blank')}
              >
                <span>Download Resume</span>
                <FileText className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Social Links */}
            <div
              ref={socialRef}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/Vishal710-max"
                className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="www.linkedin.com/in/vishal-bhingarde-bb23a2376"
                className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:bhingardevishal5@gmail.com"
                className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                ref={imageRef}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-border"
              >
                <img
                  src="/profile/v1.png"
                  alt="Vishal Bhingarde"
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* Profile image placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl md:text-8xl font-bold text-primary mb-2">
                      <img src="/v1.png" alt="VB" />
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      Developer
                    </div>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-500" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-xl -z-10" />
              
              {/* Stats badges */}
              <div className="absolute -bottom-3 -right-3 bg-background border border-border rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-medium text-primary">5+ Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-2 group"
          aria-label="Scroll to projects"
        >
          <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
            Explore more
          </span>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <ArrowDown className="h-5 w-5 text-primary animate-bounce relative z-10" />
          </div>
        </button>
      </div>

      {/* Tech stack floating in background */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {['React', 'TypeScript', 'Next.js', 'Node.js', 'Tailwind', 'MongoDB'].map((tech, i) => (
          <div
            key={i}
            className="absolute font-mono text-lg text-foreground"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${15 + (Math.random() * 70)}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: 0.05 + Math.random() * 0.1
            }}
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;