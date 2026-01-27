import { useEffect, useState, useRef } from "react";
import { Award, Calendar, Building2, X, Sparkles } from "lucide-react";

const certificates = [
  {
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle University",
    date: "Sep 2025",
    image: "/Certificates/c1.png",
  },
  {
    title: "TCS iON Career Edge – Young Professional",
    issuer: "Tata Consultancy Services",
    date: "Nov 2025",
    image: "/Certificates/c2.png",
  },
  {
    title: "Microsoft Certified Azure Funamentals",
    issuer: "Microsoft",
    date: "Jan 2026",
    image: "/Certificates/c3.png",
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Forage",
    date: "Aug 2025",
    image: "/Certificates/c4.png",
  },
];

const profiles = [
  {
    platform: "LeetCode",
    username: "Vishal-710",
    stat1: "85+ Problems",
    stat2: "Global Rank 1.4M+",
    image: "/Certificates/LeetCode.png",
  },
  {
    platform: "GeeksforGeeks",
    username: "Vishal Bhingarde",
    stat1: "Coding Score 120",
    stat2: "Institute Rank 175",
    image: "/Certificates/gfg.png",
  },
];

const Certifications = () => {
  const [active, setActive] = useState("certs");
  const [visible, setVisible] = useState(false);
  const [openImage, setOpenImage] = useState(null);
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
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 md:py-28 overflow-hidden bg-slate-950"
    >
      {/* Optimized Background - Removed blur effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.3) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full">
        {/* Header */}
        <div className={`text-center max-w-4xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">
              Achievements
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-white">Certifications & </span>
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Profiles
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,8 Q25,0 50,8 T100,8"
                  fill="none"
                  stroke="url(#underline-gradient-certs)"
                  strokeWidth="3"
                  className="animate-draw-line"
                />
                <defs>
                  <linearGradient
                    id="underline-gradient-certs"
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

        {/* Tabs */}
        <div className={`flex justify-center mb-8 sm:mb-10 md:mb-12 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="inline-flex gap-1.5 sm:gap-2 bg-slate-900/60 border-2 border-slate-600/60 rounded-xl p-1">
            {[
              { id: "certs", label: "Certificates" },
              { id: "profiles", label: "Coding Profiles" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  active === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "text-slate-400 hover:text-slate-300 hover:bg-slate-800/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certificates */}
        {active === "certs" && (
          <div className={`transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
            {/* Mobile: Horizontal scroll */}
            <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
              <div className="flex gap-3 sm:gap-4 min-w-max">
                {certificates.map((cert, i) => (
                  <article
                    key={i}
                    onClick={() => setOpenImage(cert.image)}
                    className="relative group cursor-pointer rounded-xl overflow-hidden bg-slate-900/60 border-2 border-slate-600/60 transition-all duration-300 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/10 w-64 sm:w-72 flex-shrink-0 animate-slide-in"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    {/* Image container */}
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-4 flex items-center justify-center overflow-hidden border-b-2 border-slate-700/50">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="relative z-10 w-full h-full object-cover rounded transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const parent = e.target.parentElement;
                          const placeholder = document.createElement('div');
                          placeholder.className = 'flex flex-col items-center justify-center w-full h-full text-slate-600 gap-2';
                          placeholder.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg><span class="text-xs">Certificate</span>';
                          parent.appendChild(placeholder);
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="relative p-4">
                      <h3 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors duration-200 line-clamp-2 leading-snug mb-3">
                        {cert.title}
                      </h3>

                      <div className="text-xs text-slate-400 space-y-1.5">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-3.5 h-3.5 flex-shrink-0 text-slate-500 group-hover:text-blue-400 transition-colors duration-200" />
                          <span className="truncate">{cert.issuer}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 flex-shrink-0 text-slate-500 group-hover:text-blue-400 transition-colors duration-200" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Desktop: Grid layout - Optimized */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-4 xl:gap-5 max-w-6xl mx-auto">
              {certificates.map((cert, i) => (
                <article
                  key={i}
                  onClick={() => setOpenImage(cert.image)}
                  className="relative group cursor-pointer rounded-xl overflow-hidden bg-slate-900/60 border-2 border-slate-600/60 transition-all duration-300 hover:border-blue-400/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 animate-slide-in will-change-transform"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Image container */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-4 flex items-center justify-center overflow-hidden border-b-2 border-slate-700/50">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="relative z-10 w-full h-full object-cover rounded transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const parent = e.target.parentElement;
                        const placeholder = document.createElement('div');
                        placeholder.className = 'flex flex-col items-center justify-center w-full h-full text-slate-600 gap-3';
                        placeholder.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg><span class="text-sm">Certificate</span>';
                        parent.appendChild(placeholder);
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative p-4">
                    <h3 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors duration-200 line-clamp-2 leading-snug mb-2.5">
                      {cert.title}
                    </h3>

                    <div className="text-xs text-slate-400 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5 flex-shrink-0 text-slate-500 group-hover:text-blue-400 transition-colors duration-200" />
                        <span className="truncate">{cert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 flex-shrink-0 text-slate-500 group-hover:text-blue-400 transition-colors duration-200" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Scroll indicator for mobile */}
            <div className="lg:hidden flex justify-center mt-4">
              <div className="flex gap-1.5">
                {certificates.map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-700/60" />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Profiles */}
        {active === "profiles" && (
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
            {profiles.map((p, i) => (
              <article
                key={i}
                className="relative group rounded-xl overflow-hidden bg-slate-900/60 border-2 border-slate-600/60 transition-all duration-300 hover:border-blue-400/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 animate-slide-in will-change-transform"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Image container */}
                <div className="relative aspect-video bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-5 flex items-center justify-center overflow-hidden border-b-2 border-slate-700/50">
                  <img
                    src={p.image}
                    alt={p.platform}
                    className="relative z-10 w-full h-full object-cover rounded opacity-95 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const parent = e.target.parentElement;
                      const placeholder = document.createElement('div');
                      placeholder.className = 'text-3xl font-bold text-slate-700';
                      placeholder.textContent = p.platform;
                      parent.appendChild(placeholder);
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-200 group-hover:text-white transition-colors duration-200 mb-1">
                    {p.username}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4 font-medium">
                    {p.platform}
                  </p>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-800/60 border-2 border-slate-700/60 rounded-lg p-3 text-sm text-slate-300 font-medium hover:border-blue-400/60 hover:bg-slate-800/80 transition-all duration-200 text-center">
                      {p.stat1}
                    </div>
                    <div className="bg-slate-800/60 border-2 border-slate-700/60 rounded-lg p-3 text-sm text-slate-300 font-medium hover:border-blue-400/60 hover:bg-slate-800/80 transition-all duration-200 text-center">
                      {p.stat2}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Bottom Badge */}
        <div className={`mt-10 sm:mt-12 md:mt-16 flex justify-center transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-slate-900/80 border-2 border-slate-700/60 hover:border-blue-400/40 transition-all duration-200 hover:scale-105">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-slate-300 font-medium tracking-wide">
              {active === "certs" ? "More certifications in progress" : "Actively solving problems daily"}
            </span>
          </div>
        </div>
      </div>

      {/* Modal - Optimized */}
      {openImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 animate-fade-in"
          onClick={() => setOpenImage(null)}
        >
          <div className="relative w-full h-full max-w-7xl flex items-center justify-center p-4 sm:p-6 md:p-8 animate-scale-in">
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenImage(null);
              }}
              className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 p-2.5 sm:p-3 rounded-full bg-slate-800/90 border-2 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-blue-400/60 transition-all duration-200 hover:scale-105 z-[60] shadow-2xl"
              aria-label="Close"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            {/* Certificate container */}
            <div 
              className="bg-slate-900/95 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border-2 border-slate-700/80 shadow-2xl max-w-full max-h-full overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full overflow-hidden rounded-lg">
                <img
                  src={openImage}
                  alt="Certificate"
                  className="w-full h-auto max-h-[calc(100vh-180px)] sm:max-h-[calc(100vh-160px)] md:max-h-[calc(100vh-140px)] object-contain mx-auto"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
              
              {/* Download/View hint */}
              <div className="mt-3 sm:mt-4 text-center">
                <p className="text-xs sm:text-sm text-slate-400">
                  Click outside or press the close button to exit
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.97);
          }
          to {
            opacity: 1;
            transform: scale(1);
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

        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        
        .animate-draw-line {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: draw-line 1.5s ease-out forwards;
          animation-delay: 0.5s;
        }

        /* Hardware acceleration hints */
        .will-change-transform {
          will-change: transform;
        }

        /* Optimize transforms for performance */
        .group:hover img {
          transform: scale(1.05);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default Certifications;