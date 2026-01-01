import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "./ui/card";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const cardRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  // 🔹 NEW refs for last 3 cards
  const principleCardsRef = useRef([]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.config({
        limitCallbacks: true,
        ignoreMobileResize: true,
      });

      /* =========================
         SECTION + TITLE
      ========================= */
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      /* =========================
         MAIN CARD
      ========================= */
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        leftContentRef.current,
        { opacity: 0, x: isMobile ? 0 : -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: leftContentRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        rightContentRef.current,
        { opacity: 0, x: isMobile ? 0 : 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: rightContentRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      /* =========================
         🔹 LAST 3 BOXES ANIMATION
      ========================= */
      gsap.fromTo(
        principleCardsRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.97,
          willChange: "transform, opacity",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.18,
          scrollTrigger: {
            trigger: principleCardsRef.current[0],
            start: "top 90%",
            end: "top 60%",
            scrub: 0.6, // 🔥 THIS is the smoothness
          },
        }
      );
    }, containerRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-20 bg-background relative"
    >
      <div ref={containerRef} className="container mx-auto px-4">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          About <span className="text-primary">Me</span>
        </h2>

        {/* MAIN CARD */}
        <Card
          ref={cardRef}
          className="p-6 md:p-8 max-w-4xl mx-auto mb-16 opacity-0"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div ref={leftContentRef} className="opacity-0">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Who I Am
              </h3>
              <p className="text-muted-foreground">
                I am a Full Stack Developer with hands-on experience in Python-based development, modern web technologies, cloud platforms, and cyber security practices. I specialize in building secure, scalable, and efficient applications, with a strong focus on performance, reliability, and system security.
              </p>
            </div>

            <div ref={rightContentRef} className="opacity-0">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                What I Do
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>▹ Web Applications</li>
                <li>▹ REST APIs</li>
                <li>▹ Performance Optimization</li>
                <li>▹ Team Collaboration</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* ======================
            🔹 LAST SECTION (3 BOXES)
        ====================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: "🎓",
              title: "Education",
              description:
                "Pursuing B.Sc (ECS) with a CGPA of 9/10. 3rd Year | Graduation: May 2026.",
            },
            {
              icon: "💼",
              title: "Experience",
              description:
                "Hands-on experience through academic and personal projects in C++, web development, and problem-solving.",
            },
            {
              icon: "🌟",
              title: "Skills",
              description:
                "Strong foundation in programming, web technologies, and databases with a growth mindset.",
            },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => (principleCardsRef.current[i] = el)}
              // className="opacity-0 p-6 md:p-8 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg border shadow-lg hover:shadow-xl transition"
              className="
                opacity-0
                p-6 md:p-8
                rounded-2xl
                bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/80
                border border-cyan-400/20
                shadow-[0_20px_50px_rgba(0,255,255,0.08)]
                backdrop-blur-xl
                transition-all duration-300
                hover:border-cyan-400/40
                hover:shadow-[0_25px_70px_rgba(0,255,255,0.18)]
              "
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
