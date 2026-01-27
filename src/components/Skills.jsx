'use client';

import { useEffect, useState, useRef } from "react";
import { Code2, Server, Wrench, Palette, Sparkles } from "lucide-react";

const skillData = [
  {
    category: "Frontend",
    icon: Code2,
    color: "from-cyan-400 to-blue-500",
    categoryColor: "blue",
    skills: [
      { name: "React", proficiency: 95, icon: "⚡", color: "bg-blue-500" },
      { name: "TypeScript", proficiency: 90, icon: ">_", color: "bg-blue-600" },
      { name: "Tailwind CSS", proficiency: 95, icon: "🎨", color: "bg-cyan-500" },
      { name: "Next.js", proficiency: 90, icon: "🌐", color: "bg-gray-400" },
      { name: "Vue.js", proficiency: 85, icon: "V", color: "bg-green-500" },
      { name: "Angular", proficiency: 80, icon: "A", color: "bg-red-500" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    color: "from-emerald-400 to-teal-800",
    categoryColor: "green",
    skills: [
      { name: "Node.js", proficiency: 90, icon: "📦", color: "bg-green-500" },
      { name: "Express", proficiency: 88, icon: "E", color: "bg-gray-600" },
      { name: "Python", proficiency: 85, icon: "🐍", color: "bg-yellow-500" },
      { name: "Java", proficiency: 80, icon: "☕", color: "bg-orange-600" },
      { name: "PostgreSQL", proficiency: 88, icon: "🐘", color: "bg-blue-600" },
      { name: "MongoDB", proficiency: 82, icon: "🍃", color: "bg-green-600" },
    ],
  },
  {
    category: "Design & UX",
    icon: Palette,
    color: "from-violet-800 to-purple-600",
    categoryColor: "purple",
    skills: [
      { name: "Figma", proficiency: 85, icon: "F", color: "bg-purple-500" },
      { name: "UI Design", proficiency: 88, icon: "✨", color: "bg-pink-500" },
      { name: "Prototyping", proficiency: 82, icon: "📱", color: "bg-indigo-500" },
      { name: "Responsive Design", proficiency: 92, icon: "📐", color: "bg-blue-500" },
      { name: "Adobe XD", proficiency: 78, icon: "Xd", color: "bg-pink-600" },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: Wrench,
    color: "from-amber-400 to-orange-500",
    categoryColor: "orange",
    skills: [
      { name: "Git", proficiency: 92, icon: "🔀", color: "bg-orange-600" },
      { name: "Docker", proficiency: 85, icon: "🐳", color: "bg-blue-500" },
      { name: "AWS", proficiency: 80, icon: "☁️", color: "bg-orange-500" },
      { name: "CI/CD", proficiency: 82, icon: "🔄", color: "bg-green-500" },
      { name: "Kubernetes", proficiency: 75, icon: "☸️", color: "bg-blue-600" },
      { name: "Linux", proficiency: 85, icon: "🐧", color: "bg-yellow-500" },
    ],
  },
];

const learningTechnologies = [
  { name: "React Native", category: "Frontend" },
  { name: "GraphQL", category: "Backend" },
  { name: "Three.js", category: "Frontend" },
  { name: "Rust", category: "Backend" },
  { name: "Web3/Blockchain", category: "Backend" },
  { name: "AI/Machine Learning", category: "DevOps" },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getProficiencyLabel = (proficiency) => {
    if (proficiency >= 90) return "ADVANCED";
    if (proficiency >= 80) return "INTERMEDIATE";
    if (proficiency >= 70) return "Beginner";
    return "LEARNING";
  };

  const getProficiencyDots = (proficiency) => {
    const dots = Math.round(proficiency / 20);
    return dots;
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-slate-950 min-h-screen flex items-center justify-center"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">
              Skills & Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-white">My </span>
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Skills
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,8 Q25,0 50,8 T100,8"
                  fill="none"
                  stroke="url(#underline-gradient-skills)"
                  strokeWidth="3"
                  className="animate-draw-line"
                />
                <defs>
                  <linearGradient
                    id="underline-gradient-skills"
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
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-4">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 transition-all duration-1000 delay-100 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          {skillData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`group relative px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 flex items-center gap-1.5 sm:gap-2 border-2 ${
                  activeCategory === idx
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30 border-blue-400/50"
                    : "bg-slate-900/60 text-slate-300 hover:bg-slate-900/80 border-slate-600/60 hover:border-blue-400/40"
                }`}
              >
                <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="hidden xs:inline">{item.category}</span>
                <span className="xs:hidden">{item.category.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid - Card Style */}
        <div className={`transition-all duration-1000 delay-200 max-w-6xl mx-auto ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 md:gap-6">
            {skillData[activeCategory].skills.map((skill, idx) => (
              <div
                key={idx}
                className="group relative"
                style={{
                  animation: visible ? `slideInUp 0.5s ease-out ${idx * 0.1}s both` : "none",
                }}
              >
                {/* Premium Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                
                {/* Skill Card */}
                <div className="relative p-4 sm:p-5 md:p-6 rounded-xl bg-slate-900/60 backdrop-blur-sm border-2 border-slate-600/60 hover:border-blue-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 hover:bg-slate-900/80">
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg ${skill.color} flex items-center justify-center text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>

                  {/* Skill Name */}
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2 sm:mb-2.5 line-clamp-1">
                    {skill.name}
                  </h3>

                  {/* Proficiency Dots */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                          i < getProficiencyDots(skill.proficiency)
                            ? "bg-blue-500 group-hover:bg-cyan-400"
                            : "bg-slate-700"
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Proficiency Label */}
                  <span className="block mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-medium">
                    {getProficiencyLabel(skill.proficiency)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {[
            { label: "Skills", value: "20+" },
            { label: "Technologies", value: "15+" },
            { label: "Years Active", value: "3+" },
            { label: "Projects", value: "10+" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group relative p-3 sm:p-4 md:p-5 rounded-xl bg-slate-900/60 backdrop-blur-sm border-2 border-slate-600/60 hover:border-blue-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 text-center hover:-translate-y-1"
              style={{
                animation: visible ? `slideInUp 0.5s ease-out ${0.5 + idx * 0.1}s both` : "none",
              }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 group-hover:text-slate-300 transition-colors uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div
          className={`mt-16 sm:mt-20 md:mt-28 transition-all duration-1000 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse" />
                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-slate-400 font-semibold">
                  Currently Learning
                </span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg px-4">
                Always evolving and exploring emerging technologies to stay ahead in the industry.
              </p>
            </div>

            {/* Learning Technologies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-3.5 md:gap-4 max-w-3xl mx-auto">
              {learningTechnologies.map((tech, idx) => {
                let categoryColor, borderColor, shadowColor;
                
                if (tech.category === "Frontend") {
                  categoryColor = "from-cyan-500/10 to-blue-500/10";
                  borderColor = "border-cyan-500/40 hover:border-cyan-400/60";
                  shadowColor = "hover:shadow-cyan-500/20";
                } else if (tech.category === "Backend") {
                  categoryColor = "from-emerald-500/10 to-teal-500/10";
                  borderColor = "border-emerald-500/40 hover:border-emerald-400/60";
                  shadowColor = "hover:shadow-emerald-500/20";
                } else if (tech.category === "Design") {
                  categoryColor = "from-violet-500/10 to-purple-500/10";
                  borderColor = "border-violet-500/40 hover:border-violet-400/60";
                  shadowColor = "hover:shadow-purple-500/20";
                } else {
                  categoryColor = "from-amber-500/10 to-orange-500/10";
                  borderColor = "border-amber-500/40 hover:border-amber-400/60";
                  shadowColor = "hover:shadow-orange-500/20";
                }

                return (
                  <div
                    key={idx}
                    className={`group relative p-3 sm:p-3.5 md:p-4 rounded-lg bg-gradient-to-br ${categoryColor} backdrop-blur-sm border-2 ${borderColor} transition-all duration-300 ${shadowColor} cursor-default hover:-translate-y-1 text-center hover:bg-slate-900/40`}
                    style={{
                      animation: visible ? `slideInUp 0.5s ease-out ${0.8 + idx * 0.08}s both` : "none",
                    }}
                  >
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300 pointer-events-none" />
                    <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

export default Skills;