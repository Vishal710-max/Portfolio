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
} from "lucide-react";

const About = () => {
  const [visible, setVisible] = useState(false);
  const [activeHobby, setActiveHobby] = useState(null);
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

  const hobbies = [
    { icon: Code2, label: "Coding", color: "from-cyan-500 to-blue-500" },
    { icon: Music, label: "Music", color: "from-pink-500 to-rose-500" },
    { icon: Gamepad2, label: "Gaming", color: "from-green-500 to-emerald-500" },
    { icon: BookOpen, label: "Learning", color: "from-amber-500 to-orange-500" },
  ];

  const whatIDo = [
    {
      icon: Globe,
      title: "Web Applications",
      desc: "Building responsive, user-centric web experiences",
    },
    {
      icon: Terminal,
      title: "REST APIs",
      desc: "Crafting scalable backend architectures",
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      desc: "Creating intuitive and beautiful interfaces",
    },
    {
      icon: Database,
      title: "Database Design",
      desc: "Optimizing data structures for performance",
    },
  ];

  const infoCards = [
    {
      icon: GraduationCap,
      title: "Education",
      badge: "9/10 CGPA",
      description: "Pursuing B.Sc (ECS) with a CGPA of 9/10. 3rd Year | Graduation: May 2026.",
      color: "from-blue-500 to-indigo-500",
      borderColor: "hover:border-blue-500/30",
      iconBg: "from-blue-500/20 to-indigo-500/20",
      iconBorder: "border-blue-500/30",
    },
    {
      icon: Building2,
      title: "Experience",
      badge: "5+ Projects",
      description: "Hands-on experience building real-world full stack projects and solving practical problems.",
      color: "from-cyan-500 to-teal-500",
      borderColor: "hover:border-cyan-500/30",
      iconBg: "from-cyan-500/20 to-teal-500/20",
      iconBorder: "border-cyan-500/30",
    },
    {
      icon: Cpu,
      title: "Skills",
      badge: "10+ Tech",
      description: "Strong foundation in modern web technologies, databases, and secure development practices.",
      color: "from-purple-500 to-pink-500",
      borderColor: "hover:border-purple-500/30",
      iconBg: "from-purple-500/20 to-pink-500/20",
      iconBorder: "border-purple-500/30",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 md:py-28 overflow-hidden bg-slate-950"
    >
      {/* Matched Background from Hero Section */}
      <div className="absolute inset-0">
        {/* Static gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        {/* Subtle static glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.3) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">
              Get to know me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            <span className="text-white">About </span>
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
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
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 max-w-7xl mx-auto px-2 sm:px-0">
          {/* About Me Card - Large */}
          <div
            className={`group relative transition-all duration-700 delay-100 w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="absolute -inset-px bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-6 rounded-2xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500">
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <User className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Who I Am</h3>
                  <p className="text-xs text-slate-400">
                    The person behind the code
                  </p>
                </div>
                {/* Decorative dots */}
                <div className="ml-auto flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500/50 transition-colors duration-300"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3.5">
                <p className="text-slate-300 leading-relaxed text-sm">
                  I'm a{" "}
                  <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold">
                    passionate Full Stack Developer
                  </span>{" "}
                  with an unwavering drive to transform ideas into elegant digital
                  solutions. As a fresher, I bring fresh perspectives, boundless
                  enthusiasm, and a commitment to writing clean, efficient code.
                </p>
                <p className="text-slate-400 leading-relaxed text-sm">
                  I believe in continuous learning and pushing boundaries. Every
                  line of code I write is a step towards mastering my craft and
                  creating meaningful impact in the tech world.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-2.5 mt-5 pt-5 border-t border-slate-800/50">
                {[
                  { label: "Clean Code", value: "100%", icon: Zap },
                  { label: "Passion", value: "Infinite", icon: Heart },
                  { label: "Growth", value: "Daily", icon: Rocket },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center p-2.5 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-colors duration-300 group/stat"
                  >
                    <stat.icon className="w-4 h-4 text-blue-400 mx-auto mb-1.5 group-hover/stat:scale-110 transition-transform" />
                    <div className="text-base font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hobbies Card */}
          <div
            className={`group relative transition-all duration-700 delay-200 w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="absolute -inset-px bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full p-6 rounded-2xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-sm hover:border-pink-500/30 transition-all duration-500">
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-pink-500/20 to-orange-500/20 border border-pink-500/30 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  <Heart className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Hobbies & Passion
                  </h3>
                  <p className="text-xs text-slate-400">What fuels my creativity</p>
                </div>
              </div>

              {/* Hobbies Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {hobbies.map((hobby, i) => (
                  <button
                    key={i}
                    className={`relative p-3.5 rounded-xl border transition-all duration-300 text-left ${
                      activeHobby === i
                        ? "bg-gradient-to-br " +
                          hobby.color +
                          " border-transparent scale-105"
                        : "bg-slate-800/30 border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/50"
                    }`}
                    onMouseEnter={() => setActiveHobby(i)}
                    onMouseLeave={() => setActiveHobby(null)}
                  >
                    <hobby.icon
                      className={`w-5 h-5 mb-2 transition-colors ${
                        activeHobby === i ? "text-white" : "text-slate-400"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        activeHobby === i ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {hobby.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-4 p-3 rounded-lg bg-slate-800/30 border-l-2 border-pink-500/50">
                <p className="text-xs text-slate-400 italic">
                  "Creativity is thinking up new things. Innovation is doing new
                  things."
                </p>
              </div>
            </div>
          </div>

          {/* What I Do Card - Full Width */}
          <div
            className={`lg:col-span-2 group relative transition-all duration-700 delay-300 w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    What I Do & Love
                  </h3>
                  <p className="text-xs text-slate-400">
                    Turning passion into profession
                  </p>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                  <Star className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-xs text-cyan-300">Top Skills</span>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
                {whatIDo.map((item, i) => (
                  <div
                    key={i}
                    className="group/card p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-1"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 w-fit mb-3 group-hover/card:scale-110 group-hover/card:rotate-6 transition-transform duration-300">
                      <item.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Tag */}
              <div className="flex justify-center mt-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-colors duration-300">
                  <Coffee className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-xs text-slate-300">
                    Fueled by coffee & curiosity
                  </span>
                  <Palette className="w-3.5 h-3.5 text-pink-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Education, Experience, Skills Row - CENTERED ON MOBILE */}
          <div
            className={`lg:col-span-2 flex flex-col lg:grid lg:grid-cols-3 gap-4 w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {infoCards.map((card, index) => (
              <div
                key={card.title}
                className="group relative w-full"
              >
                <div className={`absolute -inset-px bg-gradient-to-r ${card.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className={`relative h-full p-5 rounded-2xl bg-slate-900/60 border border-slate-800/50 backdrop-blur-sm ${card.borderColor} transition-all duration-500 hover:-translate-y-1`}>
                  {/* Icon */}
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${card.iconBg} border ${card.iconBorder} w-fit mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                    <card.icon className="w-5 h-5 text-slate-300" />
                  </div>

                  {/* Header with Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white">{card.title}</h3>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${card.color} bg-clip-text text-transparent border border-slate-700/50`}>
                      {card.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {card.description}
                  </p>

                  {/* Decorative line */}
                  <div className={`absolute bottom-0 left-5 right-5 h-0.5 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continuously Learning Badge */}
        <div
          className={`flex justify-center mt-10 transition-all duration-700 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/80 border border-slate-800/50 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 group">
            {/* Pulsing dot */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">
              Continuously learning and improving
            </span>
            <TrendingUp className="w-4 h-4 text-green-400 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Custom Animations */}
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
      `}</style>
    </section>
  );
};

export default About;