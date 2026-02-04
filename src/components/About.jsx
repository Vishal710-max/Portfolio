import { useEffect, useState, useRef } from "react";
import {
  User,
  Heart,
  Rocket,
  Code2,
  Palette,
  Gamepad2,
  Music,
  BookOpen,
  Coffee,
  Globe,
  Sparkles,
  Zap,
  Star,
  Terminal,
  Layers,
  Database,
  GraduationCap,
  Building2,
  Cpu,
  TrendingUp,
  Award,
  Target,
} from "lucide-react";

const About = () => {
  const [visible, setVisible] = useState(false);
  const [activeHobby, setActiveHobby] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Subtle mouse tracking for glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const hobbies = [
    { icon: Code2, label: "Coding", color: "from-cyan-500 to-blue-500", glow: "hover:shadow-cyan-500/20" },
    { icon: Music, label: "Music", color: "from-pink-500 to-rose-500", glow: "hover:shadow-pink-500/20" },
    { icon: Gamepad2, label: "Gaming", color: "from-green-500 to-emerald-500", glow: "hover:shadow-green-500/20" },
    { icon: BookOpen, label: "Learning", color: "from-amber-500 to-orange-500", glow: "hover:shadow-amber-500/20" },
  ];

  const whatIDo = [
    {
      icon: Globe,
      title: "Web Applications",
      desc: "Building responsive, user-centric web experiences",
      accent: "cyan",
    },
    {
      icon: Terminal,
      title: "REST APIs",
      desc: "Crafting scalable backend architectures",
      accent: "blue",
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      desc: "Creating intuitive and beautiful interfaces",
      accent: "indigo",
    },
    {
      icon: Database,
      title: "Database Design",
      desc: "Optimizing data structures for performance",
      accent: "purple",
    },
  ];

  const infoCards = [
    {
      icon: GraduationCap,
      title: "Education",
      badge: "9/10 CGPA",
      description: "Pursuing B.Sc (ECS) with a CGPA of 9/10. 3rd Year | Graduation: May 2026.",
      color: "from-blue-500 to-indigo-500",
      borderColor: "hover:border-blue-500/40",
      iconBg: "from-blue-500/20 to-indigo-500/20",
      iconBorder: "border-blue-500/30",
      glowColor: "group-hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.25)]",
    },
    {
      icon: Building2,
      title: "Experience",
      badge: "5+ Projects",
      description: "Hands-on experience building real-world full stack projects and solving practical problems.",
      color: "from-cyan-500 to-teal-500",
      borderColor: "hover:border-cyan-500/40",
      iconBg: "from-cyan-500/20 to-teal-500/20",
      iconBorder: "border-cyan-500/30",
      glowColor: "group-hover:shadow-[0_20px_50px_-12px_rgba(34,211,238,0.25)]",
    },
    {
      icon: Cpu,
      title: "Skills",
      badge: "10+ Tech",
      description: "Strong foundation in modern web technologies, databases, and secure development practices.",
      color: "from-purple-500 to-pink-500",
      borderColor: "hover:border-purple-500/40",
      iconBg: "from-purple-500/20 to-pink-500/20",
      iconBorder: "border-purple-500/30",
      glowColor: "group-hover:shadow-[0_20px_50px_-12px_rgba(168,85,247,0.25)]",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 md:py-28 overflow-hidden bg-slate-950"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        {/* Multiple layered glows for depth */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/3 rounded-full blur-3xl" />

        {/* Enhanced grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.4) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Subtle diagonal lines */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(148, 163, 184, 0.5) 100px, rgba(148, 163, 184, 0.5) 101px)'
          }} />
        </div>

        {/* Radial gradient overlay for vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.4)_100%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
        {/* Enhanced Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border border-blue-500/30 mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-all duration-300 group">
            <Sparkles className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm text-blue-300 font-medium">
              Get to know me
            </span>
            <Sparkles className="w-3 h-3 text-cyan-400 group-hover:-rotate-12 transition-transform duration-300" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-4">
            <span className="text-white">About </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
                Me
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,8 Q25,0 50,8 T100,8"
                  fill="none"
                  stroke="url(#underline-gradient)"
                  strokeWidth="3"
                  className="animate-draw-line"
                />
                <defs>
                  <linearGradient
                    id="underline-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-4">
            Developer, learner, and problem solver
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-x-8 lg:gap-y-10 max-w-7xl mx-auto px-2 sm:px-0">
          {/* About Me Card - Enhanced */}
          <div
            className={`group relative transition-all duration-700 delay-100 w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Enhanced glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute -inset-px bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full p-6 md:p-7 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 shadow-[0_12px_32px_-24px_rgba(59,130,246,0.45)] hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.35)]">
              {/* Decorative corner accents */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300" />
                  <div className="relative p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/40 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <User className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white">Who I Am</h3>
                  <p className="text-xs text-slate-400">
                    The person behind the code
                  </p>
                </div>
                {/* Animated decorative dots */}
                <div className="flex gap-1.5">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500/70 transition-all duration-300"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  I'm a beginner full‑stack developer who enjoys solving
                  problems and building web experiences that feel clean and
                  useful. I focus on{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400 font-medium">
                    strong fundamentals
                  </span>
                  ,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400 font-medium">
                    readable code
                  </span>
                  , and{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400 font-medium">
                    real‑world product thinking
                  </span>
                  . I'm also exploring{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400 font-medium">
                    cloud fundamentals
                  </span>{" "}
                  to better understand how modern applications run in
                  production.
                </p>
                <p className="text-slate-400 leading-relaxed text-sm">
                  Academically, I scored{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400 font-medium">
                    88% in 10th
                  </span>{" "}
                  and{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400 font-medium">
                    79.63% in 12th
                  </span>
                  , which taught me{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400 font-medium">
                    consistency
                  </span>{" "}
                  and the value of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400 font-medium">
                    steady improvement
                  </span>
                  . Those lessons, along with my interest in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400 font-medium">
                    modern tools
                  </span>{" "}
                  and{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400 font-medium">
                    cloud‑based systems
                  </span>
                  , keep me motivated to grow into a strong, dependable
                  developer.
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Hobbies Card - Enhanced */}
          <div
            className={`group relative transition-all duration-700 delay-200 w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Enhanced glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600/20 via-orange-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute -inset-px bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full p-6 md:p-7 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm hover:border-pink-500/50 transition-all duration-500 shadow-[0_12px_32px_-24px_rgba(236,72,153,0.45)] hover:shadow-[0_20px_50px_-12px_rgba(236,72,153,0.35)]">
              {/* Decorative accents */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-pink-500/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300" />
                  <div className="relative p-2.5 rounded-xl bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-pink-500/40 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    <Heart className="w-5 h-5 text-pink-400 group-hover:fill-pink-400/20 transition-all duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    Hobbies & Passion
                  </h3>
                  <p className="text-xs text-slate-400">What fuels my creativity</p>
                </div>
              </div>

              {/* Enhanced Hobbies Grid */}
              <div className="grid grid-cols-2 gap-3">
                {hobbies.map((hobby, i) => (
                  <button
                    key={i}
                    className={`relative p-4 rounded-xl border transition-all duration-300 text-left overflow-hidden ${
                      activeHobby === i
                        ? "bg-gradient-to-br " +
                          hobby.color +
                          " border-transparent scale-[1.05] shadow-[0_10px_30px_-10px] " + hobby.glow
                        : "bg-slate-800/40 border-slate-700/60 hover:border-slate-600/60 hover:bg-slate-800/60 hover:scale-[1.02]"
                    }`}
                    onMouseEnter={() => setActiveHobby(i)}
                    onMouseLeave={() => setActiveHobby(null)}
                  >
                    {/* Shine effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full ${activeHobby === i ? 'animate-shine' : ''}`} />
                    
                    <hobby.icon
                      className={`w-6 h-6 mb-2.5 transition-all duration-300 ${
                        activeHobby === i ? "text-white scale-110" : "text-slate-400"
                      }`}
                    />
                    <span
                      className={`text-sm font-semibold block ${
                        activeHobby === i ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {hobby.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Enhanced Quote */}
              <div className="mt-5 p-4 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700/50 border-l-4 border-l-pink-500/60 shadow-[0_8px_20px_-16px_rgba(236,72,153,0.4)] hover:border-l-pink-400 transition-all duration-300 group/quote">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0 group-hover/quote:rotate-12 transition-transform duration-300" />
                  <p className="text-xs text-slate-400 italic leading-relaxed">
                    "Creativity is thinking up new things. Innovation is doing new
                    things."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What I Do Card - Enhanced Full Width */}
          <div
            className={`lg:col-span-2 group relative transition-all duration-700 delay-300 w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Multi-layer glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 shadow-[0_12px_32px_-24px_rgba(34,211,238,0.45)] hover:shadow-[0_20px_50px_-12px_rgba(34,211,238,0.35)]">
              {/* Decorative corners */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-7">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-md group-hover:blur-lg transition-all duration-300" />
                    <div className="relative p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 group-hover:scale-110 transition-transform duration-300">
                      <Rocket className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      What I Do & Love
                    </h3>
                    <p className="text-xs text-slate-400">
                      Turning passion into profession
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/40 hover:border-cyan-400/50 transition-all duration-300 group/badge">
                  <Star className="w-4 h-4 text-cyan-400 group-hover/badge:rotate-180 transition-transform duration-500" />
                  <span className="text-xs text-cyan-300 font-medium">Top Skills</span>
                </div>
              </div>

              {/* Enhanced Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {whatIDo.map((item, i) => (
                  <div
                    key={i}
                    className="group/card relative p-5 rounded-xl bg-slate-800/40 border border-slate-700/60 hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_-10px_rgba(34,211,238,0.35)] overflow-hidden"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="relative">
                      <div className="relative mb-3">
                        <div className="absolute inset-0 bg-cyan-500/10 rounded-lg blur-sm opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                        <div className="relative p-2.5 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 w-fit group-hover/card:scale-110 group-hover/card:rotate-6 transition-transform duration-300">
                          <item.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>
                ))}
              </div>

              {/* Enhanced Bottom Tag */}
              <div className="flex justify-center mt-7">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-800/60 border border-slate-700/60 hover:border-cyan-500/40 transition-all duration-300 group/tag hover:shadow-[0_10px_30px_-10px_rgba(34,211,238,0.3)]">
                  <Coffee className="w-4 h-4 text-amber-400 group-hover/tag:rotate-12 transition-transform duration-300" />
                  <span className="text-sm text-slate-300 group-hover/tag:text-white transition-colors duration-300">
                    Fueled by coffee & curiosity
                  </span>
                  <Palette className="w-4 h-4 text-pink-400 group-hover/tag:-rotate-12 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Education, Experience, Skills Row */}
          <div
            className={`lg:col-span-2 flex flex-col lg:grid lg:grid-cols-3 gap-4 md:gap-5 w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {infoCards.map((card, index) => (
              <div
                key={card.title}
                className="group relative w-full"
              >
                {/* Multi-layer glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${card.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500`} />
                <div className={`absolute -inset-px bg-gradient-to-r ${card.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className={`relative h-full p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm ${card.borderColor} transition-all duration-500 hover:-translate-y-1.5 ${card.glowColor} overflow-hidden`}>
                  {/* Animated background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Icon with enhanced glow */}
                    <div className="relative mb-4">
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.iconBg} rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      <div className={`relative p-3 rounded-xl bg-gradient-to-br ${card.iconBg} border ${card.iconBorder} w-fit group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                        <card.icon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Header with Enhanced Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-base md:text-lg font-bold text-white">{card.title}</h3>
                      <div className={`relative px-3 py-1.5 rounded-full bg-gradient-to-r ${card.color} bg-opacity-10 border border-slate-700/60 group-hover:border-slate-600 transition-all duration-300 overflow-hidden`}>
                        <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-10`} />
                        <span className={`relative text-xs font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                          {card.badge}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Enhanced decorative line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-40 transition-all duration-500 rounded-full`} />
                  
                  {/* Corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${card.color} opacity-0 group-hover:opacity-5 rounded-tr-2xl transition-opacity duration-500`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Continuously Learning Badge */}
        <div
          className={`flex justify-center mt-12 transition-all duration-700 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative group/badge">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600/30 via-emerald-600/30 to-green-600/30 rounded-full blur-lg opacity-0 group-hover/badge:opacity-100 transition-all duration-500" />
            
            <div className="relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-slate-900/90 border border-slate-800/80 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300 shadow-[0_10px_26px_-20px_rgba(34,197,94,0.45)] hover:shadow-[0_15px_40px_-15px_rgba(34,197,94,0.35)]">
              {/* Enhanced pulsing dot */}
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              </span>
              <span className="text-sm md:text-base text-slate-300 font-medium group-hover/badge:text-white transition-colors">
                Continuously learning and improving
              </span>
              <TrendingUp className="w-5 h-5 text-green-400 group-hover/badge:translate-x-1 group-hover/badge:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Animations */}
      <style>{`
        @keyframes draw-line {
          from {
            stroke-dashoffset: 200;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        
        .animate-draw-line {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: draw-line 1.5s ease-out forwards;
          animation-delay: 0.5s;
        }

        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.05;
            transform: scale(1);
          }
          50% {
            opacity: 0.08;
            transform: scale(1.05);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.03;
            transform: scale(1);
          }
          50% {
            opacity: 0.06;
            transform: scale(1.08);
          }
        }

        .animate-pulse-slower {
          animation: pulse-slower 10s ease-in-out infinite;
        }

        @keyframes shine {
          to {
            transform: translateX(100%);
          }
        }

        .animate-shine {
          animation: shine 0.8s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default About;

