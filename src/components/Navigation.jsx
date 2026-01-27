import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {  
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
      setIsScrolled(scrollTop > 50);

      const sections = ["home", "about", "projects", "skills", "certifications", "contact"];
      const scrollPosition = scrollTop + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const smoothScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 transition-all duration-300 shadow-lg shadow-blue-500/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-slate-950/80 backdrop-blur-2xl shadow-2xl shadow-blue-900/20 border-b border-slate-800/60"
            : "bg-slate-950/40 backdrop-blur-md"
        }`}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-violet-600/5 to-cyan-600/5 opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{
               backgroundImage: `linear-gradient(to right, rgb(51, 65, 85) 1px, transparent 1px), 
                                linear-gradient(to bottom, rgb(51, 65, 85) 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }} 
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Enhanced Logo */}
            <a
              href="#home"
              onClick={(e) => smoothScroll(e, "#home")}
              className="group flex items-center gap-2 sm:gap-3 relative z-10"
            >
              {/* Orbital rings */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-blue-500/30 to-violet-600/30 blur-2xl rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700" />
                
                {/* Rotating ring */}
                <div className="absolute -inset-3 border-2 border-transparent border-t-blue-400/40 border-r-cyan-400/40 rounded-full animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Logo container with depth */}
                <div className="relative p-2 sm:p-2.5 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/70 shadow-xl shadow-blue-900/30 group-hover:border-blue-500/60 group-hover:shadow-blue-500/50 transition-all duration-500 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:text-blue-400 group-hover:rotate-12 transition-all duration-500 relative z-10 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                </div>
              </div>
              
              {/* Logo text with holographic effect */}
              <div className="relative">
                <span className="text-xl sm:text-2xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-violet-400 transition-all duration-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                  Portfolio
                </span>
                {/* Underline animation */}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-700" />
              </div>
            </a>

            {/* Desktop Navigation - Enhanced */}
            <div className="hidden md:flex items-center gap-1 relative">
              {/* Glass container with depth */}
              <div className="relative flex items-center gap-1 bg-slate-900/60 backdrop-blur-xl border border-slate-700/70 rounded-2xl px-2 py-2 shadow-2xl shadow-slate-900/50 overflow-hidden">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-cyan-600/10 animate-gradient-shift" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" />
                
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => smoothScroll(e, item.href)}
                      className={`relative px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-500 group/link overflow-hidden ${
                        isActive
                          ? "text-white scale-105"
                          : "text-slate-400 hover:text-white hover:scale-105"
                      }`}
                      style={{
                        animation: `fadeInNav 0.6s ease-out ${index * 0.1}s both`
                      }}
                    >
                      {/* Active state - Holographic effect */}
                      {isActive && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 rounded-xl" />
                          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/40 to-violet-500/40 rounded-xl animate-pulse-glow" />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/link:translate-x-full transition-transform duration-1000" />
                        </>
                      )}
                      
                      {/* Hover state */}
                      {!isActive && (
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 to-slate-700/60 rounded-xl opacity-0 group-hover/link:opacity-100 transition-all duration-300" />
                      )}
                      
                      {/* Text */}
                      <span className="relative z-10 flex items-center gap-2">
                        {item.name}
                        {/* Active indicator */}
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-lg shadow-cyan-400/60 animate-pulse" />
                        )}
                      </span>
                      
                      {/* Bottom indicator line */}
                      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                        isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover/link:opacity-60 group-hover/link:scale-x-100"
                      }`} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <button
              className="md:hidden relative p-2 rounded-xl text-slate-300 hover:text-white transition-all duration-500 group border border-slate-700/60 hover:border-cyan-500/60 bg-slate-900/60 backdrop-blur-xl shadow-lg hover:shadow-cyan-500/30 overflow-hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              {isOpen ? (
                <X size={18} className="relative z-10 transition-transform duration-500 rotate-90" />
              ) : (
                <Menu size={18} className="relative z-10 group-hover:rotate-12 transition-transform duration-500" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Enhanced */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Enhanced backdrop */}
        <div
          className={`absolute inset-0 bg-slate-950/90 backdrop-blur-2xl transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        >
          {/* Animated particles effect */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl animate-float-1" />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-violet-600/10 rounded-full blur-3xl animate-float-2" />
          <div className="absolute top-1/2 right-1/3 w-44 h-44 bg-cyan-600/10 rounded-full blur-3xl animate-float-3" />
        </div>

        {/* Menu Panel - Enhanced - Smaller for mobile */}
        <div
          className={`absolute top-0 right-0 w-72 sm:w-80 h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-l border-slate-700/70 shadow-2xl transition-transform duration-700 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } overflow-hidden`}
        >
          {/* Animated background */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-600/20 via-violet-600/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-cyan-600/20 via-blue-600/20 to-transparent rounded-full blur-3xl animate-pulse-slower" />
          </div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" 
               style={{
                 backgroundImage: `linear-gradient(to right, rgb(100, 116, 139) 1px, transparent 1px), 
                                  linear-gradient(to bottom, rgb(100, 116, 139) 1px, transparent 1px)`,
                 backgroundSize: '24px 24px'
               }} 
          />

          {/* Header */}
          <div className="relative flex items-center justify-between p-4 sm:p-5 border-b border-slate-700/70 backdrop-blur-xl bg-slate-900/40">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/30 blur-lg rounded-full animate-pulse" />
                <div className="relative p-1.5 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/70 shadow-lg shadow-blue-900/30">
                  <Zap className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                </div>
              </div>
              <span className="text-base font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                Navigation
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="relative p-2 rounded-lg text-slate-300 hover:text-white transition-all duration-500 group border border-slate-700/60 hover:border-cyan-500/60 bg-slate-800/40 hover:shadow-lg hover:shadow-cyan-500/30 overflow-hidden"
              aria-label="Close menu"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <X size={16} className="relative z-10" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="relative p-4 sm:p-5 space-y-1.5 overflow-y-auto max-h-[calc(100vh-160px)]">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => smoothScroll(e, item.href)}
                  className={`group/item relative block px-3.5 py-3 rounded-xl transition-all duration-500 overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60 hover:scale-102 border border-transparent hover:border-slate-700/60"
                  }`}
                  style={{
                    animationDelay: `${index * 80}ms`,
                    animation: isOpen ? "slideInMobile 0.5s ease-out forwards" : "none",
                  }}
                >
                  {/* Active state effects */}
                  {isActive && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-violet-600/20 animate-pulse-glow" />
                    </>
                  )}
                  
                  {/* Hover gradient for inactive items */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-violet-600/5 to-cyan-600/5 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                  )}
                  
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Indicator bar */}
                      <div className={`w-0.5 h-6 rounded-full transition-all duration-500 ${
                        isActive 
                          ? "bg-white shadow-lg shadow-white/50" 
                          : "bg-slate-600 group-hover/item:bg-cyan-400 group-hover/item:shadow-lg group-hover/item:shadow-cyan-400/50"
                      }`} />
                      <span className="font-semibold text-sm tracking-wide">{item.name}</span>
                    </div>
                    
                    {/* Animated dot indicator */}
                    <div className="relative w-6 h-6 flex items-center justify-center">
                      {isActive && (
                        <>
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
                          <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse" />
                        </>
                      )}
                      <div
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                          isActive
                            ? "bg-white scale-125 shadow-lg shadow-white/60"
                            : "bg-slate-600 group-hover/item:bg-cyan-400 group-hover/item:scale-125 group-hover/item:shadow-lg group-hover/item:shadow-cyan-400/60"
                        }`}
                      />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 border-t border-slate-700/70 backdrop-blur-xl bg-slate-900/40">
            <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/70 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 to-blue-600/5 animate-pulse-slow" />
              <div className="relative flex items-center gap-2">
                <div className="relative">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/60" />
                  <div className="absolute inset-0 bg-cyan-400 rounded-full blur-sm animate-pulse" />
                </div>
                <span className="text-xs text-slate-300 font-semibold tracking-wide">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInMobile {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInNav {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% { 
            background-position: 0% 50%; 
          }
          50% { 
            background-position: 100% 50%; 
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.6; 
          }
          50% { 
            opacity: 1; 
          }
        }
        
        @keyframes float-1 {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg); 
          }
          33% { 
            transform: translate(30px, -30px) rotate(120deg); 
          }
          66% { 
            transform: translate(-20px, 20px) rotate(240deg); 
          }
        }
        
        @keyframes float-2 {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg); 
          }
          33% { 
            transform: translate(-25px, 25px) rotate(-120deg); 
          }
          66% { 
            transform: translate(20px, -15px) rotate(-240deg); 
          }
        }
        
        @keyframes float-3 {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
          }
          50% { 
            transform: translate(15px, -25px) scale(1.1); 
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1);
          }
          50% { 
            opacity: 0.5; 
            transform: scale(1.05);
          }
        }
        
        @keyframes pulse-slower {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(1);
          }
          50% { 
            opacity: 0.4; 
            transform: scale(1.08);
          }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 8s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-float-1 {
          animation: float-1 20s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 25s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float-3 18s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
};

export default Navigation;