import { useEffect, useState, useRef } from "react";
import { ExternalLink, Github, Star, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Task Management Application",
    description:
      "Problem: Users struggle to organize daily tasks efficiently. Solution: Built a responsive task scheduler with real-time updates and local storage persistence. Role: Designed UI/UX, implemented CRUD operations, and deployed on Vercel.",
    tech: ["React", "Tailwind", "Local Storage"],
    github: "https://github.com/Vishal710-max/Task-Scheduler-application",
    live: "https://my-to-do-list-self.vercel.app/",
    image: "/Projects_images/task-scheduler.jpeg",
    featured: true,
  },
  {
    title: "Developer Portfolio",
    description:
      "Problem: Need a professional online presence to showcase skills. Solution: Created a modern, interactive portfolio with smooth animations and responsive design across all devices. Role: Designed entire frontend, implemented GSAP animations, and optimized for performance.",
    tech: ["React", "GSAP", "Tailwind"],
    live: "https://portfolio-sect.vercel.app/",
    github: "https://github.com/Vishal710-max/Portfolio",
    image: "/Projects_images/portfolio.png",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "Problem: Manual resume screening is time-consuming for recruiters. Solution: Built an AI-powered platform that parses resumes, identifies skill gaps, and matches candidates to job roles using NLP. Role: Developed full-stack application, integrated ML models, and handled MongoDB database.",
    tech: ["React", "Python", "MongoDB"],
    github: "https://github.com/Vishal710-max/AI-Resume-Analyzer-and-Job-Finder",
    live: "https://www.linkedin.com/posts/vishal-bhingarde-bb23a2376_fullstackdevelopment-react-fastapi-activity-7421110452086145024-7iBp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFz2QjYBjR8DKHAsIaERuPk2gqpJwVX2k-s",
    image: "/Projects_images/ai-resume-analyzer.jpeg",
    featured: true,
  },
  {
    title: "Password Manager",
    description:
      "Problem: Secure password storage is critical but complex. Solution: Developed a password manager with AES encryption and secure data storage using MongoDB. Role: Implemented encryption algorithms, built Streamlit interface, and ensured security best practices.",
    tech: ["Python", "MongoDB", "Streamlit"],
    github: "https://github.com/Vishal710-max/Password-manager",
    live: "https://www.linkedin.com/posts/vishal-bhingarde-bb23a2376_python-streamlit-mongodb-activity-7375179330664140800-kSph",
    image: "/Projects_images/password-manager.jpeg",
    featured: true,
  },
  {
    title: "Contact Manager",
    description:
      "Problem: Need efficient contact organization with database integration. Solution: Built a full CRUD contact management system with MySQL for structured data handling and search functionality. Role: Designed database schema, implemented all CRUD operations, and created intuitive Streamlit UI.",
    tech: ["Python", "MySQL", "Streamlit"],
    github: "https://github.com/Vishal710-max/Contact-Manager-App",
    live: "https://www.linkedin.com/posts/vishal-bhingarde-bb23a2376_python-streamlit-mysql-activity-7369326240106758146-rMmS",
    image: "/Projects_images/contact-manager.jpeg",
  },
];

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
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
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-white">Featured </span>
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Projects
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,8 Q25,0 50,8 T100,8"
                  fill="none"
                  stroke="url(#underline-gradient-projects)"
                  strokeWidth="3"
                  className="animate-draw-line"
                />
                <defs>
                  <linearGradient
                    id="underline-gradient-projects"
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
            Full-stack projects showcasing problem-solving with modern technologies. Each project includes complete source code and live demos.
          </p>
        </div>

        {/* Projects Grid */}
      {/* Projects Grid */}
<div
  className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
  gap-4 sm:gap-5 md:gap-6
  max-w-6xl mx-auto
  px-3 sm:px-0
  transition-all duration-1000 delay-100
  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
>

          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 bg-slate-900/60 border-2 border-slate-600/60 backdrop-blur-sm hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-900/20"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 z-10 flex items-center gap-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold shadow-lg">
                  <Star size={10} fill="currentColor" className="sm:w-3 sm:h-3" />
                  Featured
                </div>
              )}

              {/* Image */}
              <div className="relative h-36 sm:h-40 md:h-44 overflow-hidden bg-slate-800/50">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60" />
                
                {/* Hover Overlay with Icons */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5 sm:gap-3 bg-black/60">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-slate-900 p-2 sm:p-2.5 md:p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
                      title="View Live"
                    >
                      <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-slate-900 p-2 sm:p-2.5 md:p-3 rounded-full hover:bg-slate-800 hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
                      title="View Code"
                    >
                      <Github size={16} className="sm:w-5 sm:h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 line-clamp-1">
                  {project.title}
                </h3>


                <p
                  className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4 leading-relaxed line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: formatDescription(project.description) }}
                />          

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold bg-slate-800/50 text-slate-300 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 sm:gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/live"
                    >
                      <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 p-[2px] transition-all duration-300 group-hover/live:shadow-xl group-hover/live:shadow-blue-500/40 group-hover/live:scale-[1.03]">
                        <div className="relative flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full bg-slate-900 text-white font-semibold text-xs sm:text-sm transition-all duration-300 group-hover/live:bg-gradient-to-r group-hover/live:from-blue-500 group-hover/live:via-blue-600 group-hover/live:to-indigo-600">
                          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover/live:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="hidden xs:inline">Live Demo</span>
                          <span className="xs:hidden">Live</span>
                        </div>
                      </div>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/code"
                    >
                      <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 p-[2px] transition-all duration-300 group-hover/code:shadow-xl group-hover/code:shadow-slate-500/30 group-hover/code:scale-[1.03]">
                        <div className="relative flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full bg-slate-900 text-slate-300 font-semibold text-xs sm:text-sm transition-all duration-300 group-hover/code:bg-gradient-to-r group-hover/code:from-slate-600 group-hover/code:via-slate-700 group-hover/code:to-slate-800 group-hover/code:text-white">
                          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover/code:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                          <span>Code</span>
                        </div>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
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

// Utility to highlight Problem, Solution, and Role in descriptions
function formatDescription(desc) {
  return desc
    .replace(/Problem:/g, '<span class="font-bold text-red-400 bg-red-900/20 px-1.5 py-0.5 rounded">Problem:</span>')
    .replace(/Solution:/g, '<span class="font-bold text-green-400 bg-green-900/20 px-1.5 py-0.5 rounded">Solution:</span>')
    .replace(/Role:/g, '<span class="font-bold text-blue-400 bg-blue-900/20 px-1.5 py-0.5 rounded">Role:</span>');
}

export default Projects;

