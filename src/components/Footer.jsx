import { useEffect, useState, useRef } from "react";
import { Github, Linkedin, Instagram, Mail, Code, ArrowUp, Sparkles, Heart } from "lucide-react";

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Vishal710-max", label: "GitHub", color: "hover:text-purple-400 hover:border-purple-500/50" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vishal-bhingarde-bb23a2376", label: "LinkedIn", color: "hover:text-blue-400 hover:border-blue-500/50" },
    { icon: Instagram, href: "https://www.instagram.com/vishal.bhingarde?igsh=MTJjcHR6ajI3dTNsYQ==", label: "Instagram", color: "hover:text-pink-400 hover:border-pink-500/50" },
    { icon: Mail, href: "mailto:bhingardevishal5@gmail.com", label: "Email", color: "hover:text-cyan-400 hover:border-cyan-500/50" },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-slate-950 overflow-hidden border-t border-slate-800/50"
    >
      {/* Background matching hero section */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.3) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className={`grid md:grid-cols-3 gap-8 md:gap-12 mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                <Code className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Vishal Bhingarde
              </h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Crafting elegant, scalable web solutions with clean code and exceptional user experiences.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-slate-400">Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-all duration-300"
                  >
                    <span className="w-0 h-px bg-cyan-400 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full" />
              Let's Connect
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
  key={i}
  href={social.href}
  target="_blank"
  rel="noopener noreferrer"
  className={`group
  p-2.5 sm:p-3.5
  rounded-lg sm:rounded-xl
  bg-slate-900/70
  border border-white/40 sm:border-white/20
  ${social.color}
  transition-all duration-300
  sm:hover:-translate-y-1 sm:hover:scale-105
  hover:shadow-lg hover:shadow-cyan-500/20
  flex items-center justify-center`}
  aria-label={social.label}
>
  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:scale-110 transition-all duration-300" />
</a>

                );
              })}
            </div>
            <div className="pt-2">
              <a
                href="mailto:bhingardevishal5@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                bhingardevishal5@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          </div>
          <div className="relative flex justify-center">
            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>© {new Date().getFullYear()} Vishal Bhingarde</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">All rights reserved</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-cyan-400" />
           
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3.5 rounded-xl bg-slate-900/70 border-2 border-slate-800/60 hover:border-cyan-500/50 hover:bg-slate-900/90 text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;