import { useEffect, useState, useRef } from "react";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Code, 
  ArrowUp, 
  Rocket,
  Zap,
  Heart,
  Globe,
  Phone,
  MapPin,
  Terminal,
  Coffee
} from "lucide-react";

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isInFooter, setIsInFooter] = useState(false);
  const footerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          setIsInFooter(true);
        } else {
          setIsInFooter(false);
          // Reset to original position when leaving footer
          setButtonPosition({ x: 0, y: 0 });
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    const handleScroll = () => {
      const shouldShow = window.scrollY > 500;
      setShowScrollTop(shouldShow);
      
      // Reset position when scrolling up
      if (!shouldShow) {
        setButtonPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseMove = (e) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }

      // Handle dragging
      if (isDragging && footerRef.current && buttonRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const buttonRect = buttonRef.current.getBoundingClientRect();
        
        let newX = e.clientX - dragOffset.x;
        let newY = e.clientY - dragOffset.y;
        
        // Constrain within footer bounds
        const minX = footerRect.left;
        const maxX = footerRect.right - buttonRect.width;
        const minY = footerRect.top;
        const maxY = footerRect.bottom - buttonRect.height;
        
        newX = Math.max(minX, Math.min(maxX, newX));
        newY = Math.max(minY, Math.min(maxY, newY));
        
        setButtonPosition({
          x: newX - footerRect.left,
          y: newY - footerRect.top,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const scrollToTop = () => {
    if (!isDragging) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Vishal710-max",
      label: "GitHub",
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      hoverColor: "group-hover:text-purple-400"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vishal-bhingarde-bb23a2376",
      label: "LinkedIn",
      gradient: "from-blue-400 via-cyan-400 to-blue-500",
      hoverColor: "group-hover:text-blue-400"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/vishal.bhingarde?igsh=MTJjcHR6ajI3dTNsYQ==",
      label: "Instagram",
      gradient: "from-pink-500 via-rose-500 to-orange-500",
      hoverColor: "group-hover:text-pink-400"
    },
    {
      icon: Mail,
      href: "mailto:bhingardevishal5@gmail.com",
      label: "Email",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      hoverColor: "group-hover:text-emerald-400"
    },
  ];

  const stats = [
    { value: "50+", label: "Projects Completed", icon: Rocket },
    { value: "100%", label: "Client Satisfaction", icon: Heart },
    { value: "24/7", label: "Support Available", icon: Zap },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0a1628 0%, #050d1a 50%, #020510 100%)'
      }}
    >
      {/* Dynamic Background - Navy Blue Theme */}
      <div className="absolute inset-0">
        {/* Base gradient - Deep Navy */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0a1628 0%, #050d1a 50%, #020510 100%)'
          }}
        />
        
        {/* Animated gradient blobs - Blue tones */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-10 animate-blob"
          style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
            top: '10%',
            left: '10%',
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000"
          style={{
            background: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
            bottom: '10%',
            right: '10%',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-10 animate-blob animation-delay-4000"
          style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1.5px, transparent 1.5px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1.5px, transparent 1.5px)`,
            backgroundSize: "50px 50px",
          }}
        />
        
        {/* Mouse follow gradient - Blue theme */}
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none transition-all duration-300"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        />

        {/* Additional navy overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020510]/50" />
      </div>

      {/* Top Wave Decoration */}
      <div className="relative">
        <svg className="w-full h-16 sm:h-20" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64 C360,20 720,20 1080,64 C1440,108 1440,108 1440,108 L1440,0 L0,0 Z" fill="rgba(10, 22, 40, 0.3)" />
          <path d="M0,80 C360,40 720,40 1080,80 C1440,120 1440,120 1440,120 L1440,0 L0,0 Z" fill="rgba(10, 22, 40, 0.2)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        
        {/* Stats Section */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl backdrop-blur-xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(10, 18, 34, 0.8) 100%)',
                  borderColor: 'rgba(59, 130, 246, 0.2)',
                }}
              >
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(37, 99, 235, 0.05) 100%)'
                  }}
                />
                
                <div className="relative flex flex-col items-center text-center space-y-3">
                  <div 
                    className="p-3 rounded-xl border"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.2) 100%)',
                      borderColor: 'rgba(59, 130, 246, 0.3)'
                    }}
                  >
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Footer Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl blur-lg opacity-50" />
                  <div 
                    className="relative p-3 rounded-xl"
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
                    }}
                  >
                    <Terminal className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Vishal Bhingarde
                  </h3>
                  <p className="text-sm text-blue-300/60">Full Stack Developer</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed max-w-md">
                Transforming ideas into powerful digital experiences. Specializing in modern web technologies and creating scalable, user-centric solutions that make a difference.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="mailto:bhingardevishal5@gmail.com"
                  className="group flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <div 
                    className="p-2 rounded-lg border transition-colors duration-300"
                    style={{
                      background: 'rgba(15, 23, 42, 0.5)',
                      borderColor: 'rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">bhingardevishal5@gmail.com</span>
                </a>
                
                <div className="flex items-center gap-3 text-slate-400">
                  <div 
                    className="p-2 rounded-lg border"
                    style={{
                      background: 'rgba(15, 23, 42, 0.5)',
                      borderColor: 'rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Solapur, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div 
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border backdrop-blur-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)',
                borderColor: 'rgba(16, 185, 129, 0.3)'
              }}
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-lg shadow-emerald-500/50" />
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Available for Freelance Projects
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded-full" />
              <h4 className="text-lg font-bold text-white">Navigation</h4>
            </div>
            
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Skills", "Contact"].map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="group flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-900/50 group-hover:bg-blue-400 group-hover:shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Connect */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 via-blue-500 to-blue-600 rounded-full" />
              <h4 className="text-lg font-bold text-white">Connect</h4>
            </div>

            {/* Social Links - Stacked Design */}
            <div className="space-y-3">
              {socialLinks.map((social, i) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
                    style={{
                      background: 'rgba(15, 23, 42, 0.5)',
                      borderColor: 'rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    <div className={`relative p-2.5 rounded-lg bg-gradient-to-br ${social.gradient} bg-opacity-5`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`} />
                      <SocialIcon className={`w-5 h-5 text-slate-400 ${social.hoverColor} transition-colors duration-300 relative z-10`} />
                    </div>
                    <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors duration-300">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div 
              className="w-full h-px"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.3), transparent)'
              }}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-sm text-slate-500">
            <span>© {new Date().getFullYear()}</span>
            <span className="text-blue-900/50 mx-1">•</span>
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Vishal Bhingarde
            </span>
            <span className="text-blue-900/50 mx-1">•</span>
            <span>All Rights Reserved</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-slate-500">Crafted with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse-heart" />
            <span className="text-slate-500">using</span>
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              React
            </span>
          </div>
        </div>
      </div>

      {/* Draggable Scroll to Top Button - Only visible when in footer */}
      {showScrollTop && isInFooter && (
        <button
          ref={buttonRef}
          onMouseDown={handleMouseDown}
          onClick={scrollToTop}
          className={`absolute z-50 group ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{
            left: buttonPosition.x === 0 ? 'auto' : `${buttonPosition.x}px`,
            top: buttonPosition.x === 0 ? 'auto' : `${buttonPosition.y}px`,
            right: buttonPosition.x === 0 ? '2rem' : 'auto',
            bottom: buttonPosition.x === 0 ? '2rem' : 'auto',
            transition: isDragging ? 'none' : 'all 0.3s ease',
          }}
          aria-label="Scroll to top"
        >
          <div className="relative">
            {/* Glow effect */}
            <div 
              className={`absolute inset-0 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 ${isDragging ? 'opacity-75 blur-2xl' : ''}`}
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
              }}
            />
            
            {/* Button */}
            <div 
              className={`relative p-3 sm:p-4 rounded-xl shadow-xl transition-all duration-300 ${isDragging ? 'scale-110' : 'group-hover:scale-110'}`}
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
              }}
            >
              <ArrowUp className={`w-5 h-5 text-white transition-transform duration-300 ${isDragging ? '' : 'group-hover:-translate-y-1'}`} />
            </div>
          </div>
        </button>
      )}

      {/* Fixed Scroll to Top Button - Only visible when outside footer */}
      {showScrollTop && !isInFooter && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 group"
          aria-label="Scroll to top"
        >
          <div className="relative">
            {/* Glow effect */}
            <div 
              className="absolute inset-0 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
              }}
            />
            
            {/* Button */}
            <div 
              className="relative p-3 sm:p-4 rounded-xl shadow-xl transition-all duration-300 group-hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
              }}
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </div>
        </button>
      )}

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes pulse-heart {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        
        .animate-blob {
          animation: blob 20s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-pulse-heart {
          animation: pulse-heart 1.5s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
