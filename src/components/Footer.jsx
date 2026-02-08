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
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    const handleMouseMove = (e) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
      href: "https://github.com/Vishal710-max",
      label: "GitHub",
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      hoverColor: "group-hover:text-purple-400"
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-2.5v-8.5h2.5v8.5zm-1.25-9.75c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm15.25 9.75h-2.5v-4.25c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.63 1.1-1.63 2.23v4.33h-2.5v-8.5h2.4v1.16h.03c.33-.63 1.14-1.3 2.35-1.3 2.51 0 2.97 1.65 2.97 3.8v4.84z"/>
        </svg>
      ),
      href: "https://www.linkedin.com/in/vishal-bhingarde-bb23a2376",
      label: "LinkedIn",
      gradient: "from-blue-400 via-cyan-400 to-blue-500",
      hoverColor: "group-hover:text-blue-400"
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
          <radialGradient id="IGpaint0_radial" cx="1.464" cy="0.464" r="1.5" gradientTransform="matrix(16 0 0 16 2 2)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fd5"/>
            <stop offset=".5" stopColor="#ff543e"/>
            <stop offset="1" stopColor="#c837ab"/>
          </radialGradient>
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.75a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm5.25 1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" fill="url(#IGpaint0_radial)"/>
        </svg>
      ),
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
              {socialLinks.map((social, i) => (
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
                  <div className={`relative p-2.5 rounded-lg bg-gradient-to-br ${social.gradient} bg-opacity-10`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-20 rounded-lg blur-md transition-opacity duration-300`} />
                    {typeof social.icon === 'function' ? (
                      <span className={`text-slate-400 ${social.hoverColor} transition-colors duration-300 relative z-10`}>{social.icon()}</span>
                    ) : (
                      <social.icon className={`w-5 h-5 text-slate-400 ${social.hoverColor} transition-colors duration-300 relative z-10`} />
                    )}
                  </div>
                  <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors duration-300">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <button 
              className="group w-full relative overflow-hidden px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)'
              }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)'
                }}
              />
              <span className="relative flex items-center justify-center gap-2">
                <Coffee className="w-4 h-4" />
                Hire Me
                <Zap className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-8">
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
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-sm text-slate-500">
            <span>© {new Date().getFullYear()}</span>
            <span className="text-blue-900/50">•</span>
            <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Vishal Bhingarde
            </span>
            <span className="text-blue-900/50">•</span>
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

      {/* Scroll to Top Button */}
      {showScrollTop && (
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
