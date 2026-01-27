"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  FileText,
  Github,
  Linkedin,
  Mail,
  Code2,
  Rocket,
  Terminal,
  Coffee,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [typedText, setTypedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [imageHover, setImageHover] = useState(false);
  const [imageTilt, setImageTilt] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  const roles = [
    "Full Stack Developer",
    "Problem Solver",
    "Clean Code Advocate",
    "Tech Enthusiast",
  ];

  const professionalSkills = [
    { label: "Patience", emoji: "🎯" },
    { label: "Dedication", emoji: "💪" },
    { label: "Knowledge", emoji: "🧠" },
  ];

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);

    const handleMouseMove = (e) => {
      if (heroRef.current && window.innerWidth >= 1024) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 3D Tilt effect for image - smooth and stable (no vibration)
  const handleImageMouseMove = (e) => {
    if (imageRef.current && window.innerWidth >= 768) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate tilt with reduced sensitivity
      const rawTiltX = (y - centerY) / 25;
      const rawTiltY = (centerX - x) / 25;
      
      // Clamp values to prevent extreme tilts
      const maxTilt = 8;
      const tiltX = Math.max(-maxTilt, Math.min(maxTilt, rawTiltX));
      const tiltY = Math.max(-maxTilt, Math.min(maxTilt, rawTiltY));
      
      setImageTilt({ x: tiltX, y: tiltY });
    }
  };

  const handleImageMouseLeave = () => {
    setImageTilt({ x: 0, y: 0 });
    setImageHover(false);
  };

  // Typing effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      if (!isDeleting) {
        if (charIndex <= currentRole.length) {
          setTypedText(currentRole.substring(0, charIndex));
          charIndex++;
          timeout = setTimeout(type, 80);
        } else {
          timeout = setTimeout(() => {
            isDeleting = true;
            type();
          }, 2000);
        }
      } else {
        if (charIndex > 0) {
          charIndex--;
          setTypedText(currentRole.substring(0, charIndex));
          timeout = setTimeout(type, 40);
        } else {
          isDeleting = false;
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    type();
    return () => clearTimeout(timeout);
  }, [currentRoleIndex]);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const socials = [
    { icon: Github, href: "https://github.com/Vishal710-max", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vishal-bhingarde-bb23a2376", label: "LinkedIn" },
    { icon: Mail, href: "mailto:bhingardevishal5@gmail.com", label: "Email" },
  ];

  const techTags = [
    { name: "React", color: "cyan", position: "left-top" },
    { name: "Node.js", color: "green", position: "right-top" },
    { name: "MongoDB", color: "emerald", position: "left-bottom" },
    { name: "TypeScript", color: "blue", position: "right-bottom" },
  ];

  const skills = [
    { name: "Patience", emoji: "🎯" },
    { name: "Dedication", emoji: "💪" },
    { name: "Knowledge", emoji: "🧠" },
  ];
return (
  <section
    id="home"
    ref={heroRef}
    className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950 pt-16"
  >
    {/* Simplified Static Background */}
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
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto py-8 sm:py-12 lg:py-0">
        {/* Content */}
        <div className="text-left space-y-6 order-2 lg:order-1">
         
          {/* Status badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-slate-800/50 backdrop-blur-sm transition-all duration-700 mt-4 lg:mt-8 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm text-slate-300 font-medium">
              Available for Opportunities
            </span>
          </div>

          {/* Name Section */}
          <div
            className={`space-y-2 transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xs sm:text-sm font-medium text-slate-500 tracking-widest uppercase flex items-center gap-2">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
              Hello, I am
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="block text-white">Vishal</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Bhingarde
              </span>
            </h1>
          </div>

          {/* Animated Role */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="h-6 sm:h-8 md:h-10 flex items-center">
                <span className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-200">
                  {typedText}
                </span>
                <span className="w-0.5 h-5 sm:h-6 md:h-8 bg-cyan-400 ml-1 animate-blink" />
              </div>
            </div>
            <div className="mt-2 sm:mt-3 w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
          </div>

          {/* Description */}
          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl max-w-lg leading-relaxed text-slate-400 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Crafting elegant, scalable web solutions with{" "}
            <span className="text-cyan-400 font-medium">clean code</span> and{" "}
            <span className="text-blue-400 font-medium">exceptional user experiences</span>.
            Passionate about turning complex problems into simple, beautiful solutions.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-3 sm:gap-4 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button
              onClick={scrollToProjects}
              className="group px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1 hover:scale-105 flex items-center gap-2"
            >
              View Projects
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>

            <button
              onClick={() => window.open("/Resume/Vishal Resume.pdf", "_blank")}
              className="group px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-xl bg-slate-900/70 border-2 border-slate-700/60 text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-900/90 hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 flex items-center gap-2"
            >
              Resume
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </div>

          {/* Social Links */}
          <div
            className={`flex items-center gap-4 pt-2 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-sm text-slate-500 uppercase tracking-wider font-medium">Connect</span>
            <div className="w-12 h-px bg-gradient-to-r from-slate-700 to-transparent" />
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3.5 rounded-xl bg-slate-900/70 border-2 border-slate-800/60 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="flex justify-center order-1 lg:order-2">
          <div
            ref={imageRef}
            onMouseMove={handleImageMouseMove}
            onMouseEnter={() => setImageHover(true)}
            onMouseLeave={handleImageMouseLeave}
            className={`relative group transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{
              transform: `perspective(1000px) rotateX(${imageTilt.x}deg) rotateY(${imageTilt.y}deg)`,
              transition: "transform 0.3s cubic-bezier(0.03, 0.98, 0.52, 0.99)",
            }}
          >
            {/* Animated rotating gradient border */}
            <div className="absolute -inset-1 rounded-2xl overflow-hidden">
              <div 
                className="absolute inset-0 animate-spin-slow"
                style={{
                  background: "conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #06b6d4)",
                }}
              />
              <div className="absolute inset-[3px] bg-slate-950 rounded-2xl" />
            </div>

            {/* Pulse rings that expand outward on hover */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-full h-full rounded-2xl border border-cyan-500/40 animate-ping-slow opacity-0 group-hover:opacity-100" />
              <div className="absolute w-full h-full rounded-2xl border border-blue-500/30 animate-ping-slower opacity-0 group-hover:opacity-100" />
              <div className="absolute w-full h-full rounded-2xl border border-indigo-500/20 animate-ping-slowest opacity-0 group-hover:opacity-100" />
            </div>

            {/* Outer ambient glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-pulse-glow" />

            {/* Orbiting particles */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-3 h-3 bg-cyan-400 rounded-full blur-[2px] animate-orbit" style={{ top: "50%", left: "0" }} />
              <div className="absolute w-2 h-2 bg-blue-400 rounded-full blur-[2px] animate-orbit-reverse" style={{ top: "0", left: "50%" }} />
              <div className="absolute w-2.5 h-2.5 bg-indigo-400 rounded-full blur-[2px] animate-orbit-slow" style={{ bottom: "20%", right: "0" }} />
              <div className="absolute w-2 h-2 bg-purple-400 rounded-full blur-[2px] animate-orbit-reverse-slow" style={{ bottom: "0", left: "30%" }} />
            </div>

            {/* Animated corner brackets */}
            <div className="absolute -inset-4 pointer-events-none">
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-cyan-400/70 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-400/70 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" style={{ transitionDelay: "50ms" }} />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-indigo-400/70 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" style={{ transitionDelay: "100ms" }} />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-purple-400/70 rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1" style={{ transitionDelay: "150ms" }} />
            </div>

            {/* Professional Skills Display */}
            {!imageHover && (
              <>
                <motion.div
                  className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none z-40"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0 }}
                >
                  <div className="px-4 py-2 rounded-lg bg-slate-900/90 border border-cyan-500/50 backdrop-blur-sm shadow-lg shadow-cyan-500/20 whitespace-nowrap">
                    <span className="text-sm font-semibold text-cyan-400">{professionalSkills[0].label}</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-10 -left-16 pointer-events-none z-40"
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="px-4 py-2 rounded-lg bg-slate-900/90 border border-blue-500/50 backdrop-blur-sm shadow-lg shadow-blue-500/20 whitespace-nowrap">
                    <span className="text-sm font-semibold text-blue-400">{professionalSkills[1].label}</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-10 -right-12 pointer-events-none z-40"
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="px-4 py-2 rounded-lg bg-slate-900/90 border border-emerald-500/50 backdrop-blur-sm shadow-lg shadow-emerald-500/20 whitespace-nowrap">
                    <span className="text-sm font-semibold text-emerald-400">{professionalSkills[2].label}</span>
                  </div>
                </motion.div>
              </>
            )}

            {/* Main image container */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl overflow-hidden bg-slate-900/80 border-2 border-slate-800/50 backdrop-blur-sm transition-all duration-500 animate-float group-hover:border-cyan-500/30">
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-indigo-500/10 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />

              {/* Scan line effect */}
              <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-scan-line" />
              </div>

              {/* Glowing border edges on hover */}
              <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-indigo-400 to-transparent" />
                <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent" />
              </div>

              {/* Profile Image */}
              <img
                src="/profile/v1.png"
                alt="Vishal Bhingarde"
                className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "flex";
                }}
              />

              {/* Fallback */}
              <div className="hidden w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 animate-pulse">
                    VB
                  </div>
                  <div className="text-xs text-slate-500 font-medium tracking-widest uppercase">
                    Developer
                  </div>
                </div>
              </div>

              {/* Shimmer sweep effect */}
              <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out skew-x-12" />
              </div>

              {/* Holographic color overlay */}
              <div className="absolute inset-0 z-15 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-pink-500/30 mix-blend-overlay animate-gradient-shift" />
            </div>

            

            {/* Floating tech tags */}
            <div className="absolute -left-6 top-1/4 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-cyan-500/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-2 z-20">
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                React
              </span>
            </div>
            <div className="absolute -right-6 top-1/3 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-green-500/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2 z-20" style={{ transitionDelay: "100ms" }}>
              <span className="text-xs font-mono text-green-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Node.js
              </span>
            </div>
            <div className="absolute -left-4 bottom-1/4 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-emerald-500/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-2 z-20" style={{ transitionDelay: "200ms" }}>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                MongoDB
              </span>
            </div>
            <div className="absolute -right-4 bottom-1/3 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-blue-500/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2 z-20" style={{ transitionDelay: "300ms" }}>
              <span className="text-xs font-mono text-blue-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div
      className={`hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <button
        onClick={scrollToAbout}
        className="group flex flex-col items-center gap-2"
        aria-label="Scroll to about"
      >
        <span className="text-xs text-slate-600 uppercase tracking-widest font-medium">
          Scroll
        </span>
        <div className="p-2 rounded-full border border-slate-800/50 group-hover:border-cyan-500/30 transition-all duration-300 group-hover:bg-slate-900/50">
          <ArrowDown className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 animate-bounce transition-colors duration-300" />
        </div>
      </button>
    </div>

    {/* CSS animations */}
    <style>{`
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }

      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
      }

      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      @keyframes ping-slow {
        0% { transform: scale(1); opacity: 0.6; }
        100% { transform: scale(1.4); opacity: 0; }
      }

      @keyframes ping-slower {
        0% { transform: scale(1); opacity: 0.5; }
        100% { transform: scale(1.6); opacity: 0; }
      }

      @keyframes ping-slowest {
        0% { transform: scale(1); opacity: 0.4; }
        100% { transform: scale(1.8); opacity: 0; }
      }

      @keyframes pulse-glow {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 0.8; }
      }

      @keyframes orbit {
        from { transform: rotate(0deg) translateX(160px) rotate(0deg); }
        to { transform: rotate(360deg) translateX(160px) rotate(-360deg); }
      }

      @keyframes orbit-reverse {
        from { transform: rotate(360deg) translateX(140px) rotate(-360deg); }
        to { transform: rotate(0deg) translateX(140px) rotate(0deg); }
      }

      @keyframes orbit-slow {
        from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
        to { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
      }

      @keyframes orbit-reverse-slow {
        from { transform: rotate(360deg) translateX(130px) rotate(-360deg); }
        to { transform: rotate(0deg) translateX(130px) rotate(0deg); }
      }

      @keyframes scan-line {
        0% { top: -5%; }
        100% { top: 105%; }
      }

      @keyframes gradient-shift {
        0%, 100% { opacity: 0.1; background-position: 0% 50%; }
        50% { opacity: 0.25; background-position: 100% 50%; }
      }

      .animate-blink { animation: blink 1s ease-in-out infinite; }
      .animate-pulse-slow { animation: pulse 4s ease-in-out infinite; }
      .animate-float { animation: float 5s ease-in-out infinite; }
      .animate-spin-slow { animation: spin-slow 10s linear infinite; }
      .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
      .animate-ping-slower { animation: ping-slower 2.5s cubic-bezier(0, 0, 0.2, 1) infinite 0.3s; }
      .animate-ping-slowest { animation: ping-slowest 3s cubic-bezier(0, 0, 0.2, 1) infinite 0.6s; }
      .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
      .animate-orbit { animation: orbit 15s linear infinite; }
      .animate-orbit-reverse { animation: orbit-reverse 12s linear infinite; }
      .animate-orbit-slow { animation: orbit-slow 18s linear infinite; }
      .animate-orbit-reverse-slow { animation: orbit-reverse-slow 20s linear infinite; }
      .animate-scan-line { animation: scan-line 2.5s ease-in-out infinite; }
      .animate-gradient-shift { animation: gradient-shift 4s ease-in-out infinite; background-size: 200% 200%; }
    `}</style>
  </section>
);
}

export default Hero;
