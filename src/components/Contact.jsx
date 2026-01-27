import { useEffect, useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram,Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
const Contact = () => {
  const [visible, setVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [copied, setCopied] = useState(null);
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

    const handleMouseMove = (e) => {
      if (sectionRef.current && window.innerWidth >= 1024) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message") {
      if (value.length <= 1000) {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Vishal710-max",
    label: "GitHub",
    bgColor: "bg-slate-800",
    hoverColor: "hover:bg-slate-700",
    iconColor: "text-white",
    hoverIconColor: "hover:text-white",
    borderColor: "border-transparent",
    hoverBorderColor: "hover:border-slate-600"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vishal-bhingarde-bb23a2376",
    label: "LinkedIn",
    bgColor: "bg-slate-800",
    hoverColor: "hover:bg-slate-700",
    iconColor: "text-[#0A66C2]",
    hoverIconColor: "hover:text-[#0A66C2]",
    borderColor: "border-transparent",
    hoverBorderColor: "hover:border-slate-600"
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/919970957409",
    label: "WhatsApp",
    bgColor: "bg-slate-800",
    hoverColor: "hover:bg-slate-700",
    iconColor: "text-[#25D366]",
    hoverIconColor: "hover:text-[#25D366]",
    borderColor: "border-transparent",
    hoverBorderColor: "hover:border-slate-600"
  },
  {
    icon: Instagram,
    href: "https://instagram.com/vishal.bhingarde?igsh=MTJjcHR6ajI3dTNsYQ==",
    label: "Instagram",
    bgColor: "bg-slate-800",
    hoverColor: "hover:bg-slate-700",
    iconColor: "text-[#E4405F]",
    hoverIconColor: "hover:text-[#E4405F]",
    borderColor: "border-transparent",
    hoverBorderColor: "hover:border-slate-600"
  }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 md:py-28 overflow-hidden bg-slate-950"
    >
      {/* Matched Background from About Section */}
      <div className="absolute inset-0">
        {/* Static gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        {/* Subtle static glow with blur */}
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

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-white">Let's </span>
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Connect
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,8 Q25,0 50,8 T100,8"
                    fill="none"
                    stroke="url(#underline-gradient-contact)"
                    strokeWidth="3"
                    className="animate-draw-line"
                  />
                  <defs>
                    <linearGradient
                      id="underline-gradient-contact"
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
            </h1>
            <p className="text-base text-slate-400 max-w-2xl mx-auto">
              Open to work opportunities and internships. Let's build something great together!
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-5 mb-10 max-w-5xl mx-auto">
            {/* Left Column - Form */}
            <div className="group relative">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl border border-slate-800/50 bg-slate-900/60 backdrop-blur-sm p-4 md:p-5 hover:border-blue-500/30 transition-all duration-500">
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2.5">
                  <Send className="w-5 h-5 text-blue-400" />
                  Send a Message
                </h2>

                <div className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 text-sm"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="youremail@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 text-sm"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here"
                      rows={4}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 resize-none text-sm"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-5">
              {/* Contact Information Card */}
              <div className="group relative">
                <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-2xl border border-slate-800/50 bg-slate-900/60 backdrop-blur-sm p-4 md:p-5 hover:border-cyan-500/30 transition-all duration-500">
                  <h3 className="text-lg font-bold text-white mb-4">
                    Contact Information
                  </h3>

                  <div className="space-y-3.5">
                    {/* Email */}
                    <a
                      href="mailto:bhingardevishal5@gmail.com"
                      className="flex items-start gap-3 group/item cursor-pointer hover:scale-105 transition-transform duration-200"
                    >
                      <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover/item:bg-blue-500/20 transition-colors duration-200">
                        <Mail className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-white mb-0.5">Email</div>
                        <div className="text-xs text-blue-400 group-hover/item:text-blue-300 transition-colors duration-200">
                          bhingardevishal5@gmail.com
                        </div>
                      </div>
                    </a>

                    {/* Phone */}
                    <a
                      href="tel:+919970957409"
                      className="flex items-start gap-3 group/item cursor-pointer hover:scale-105 transition-transform duration-200"
                    >
                      <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/20 group-hover/item:bg-orange-500/20 transition-colors duration-200">
                        <Phone className="w-5 h-5 text-orange-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-white mb-0.5">Phone</div>
                        <div className="text-xs text-orange-400 group-hover/item:text-orange-300 transition-colors duration-200">
                          +91 9970957409
                        </div>
                      </div>
                    </a>

                    {/* Location */}
                    <a
                      href="https://www.google.com/maps/place/Solapur,+Maharashtra,+India"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group/item cursor-pointer hover:scale-105 transition-transform duration-200"
                    >
                      <div className="p-2.5 rounded-lg bg-green-500/10 border border-green-500/20 group-hover/item:bg-green-500/20 transition-colors duration-200">
                        <MapPin className="w-5 h-5 text-green-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-white mb-0.5">Location</div>
                        <div className="text-xs text-green-400 group-hover/item:text-green-300 transition-colors duration-200">
                          Solapur, India
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links Card */}
              <div className="group relative">
                <div className="absolute -inset-px bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-2xl border border-slate-800/50 bg-slate-900/60 backdrop-blur-sm p-4 md:p-5 hover:border-purple-500/30 transition-all duration-500">
                  <h3 className="text-lg font-bold text-white mb-4">
                    Connect With Me
                  </h3>

                  <div className="flex items-center gap-3">
                    {socialLinks.map((social, i) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={i}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-lg ${social.bgColor} border ${social.borderColor} ${social.iconColor} ${social.hoverIconColor} ${social.hoverBorderColor} ${social.hoverColor} hover:scale-110 transition-all duration-200`}
                          title={social.label}
                        >
                          <Icon className="w-6 h-6" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Available for Work - Centered */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-900/80 border border-slate-800/50 backdrop-blur-sm hover:border-green-500/30 transition-all duration-300 group">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <Sparkles className="w-4 h-4 text-green-400" />
              <div className="text-center">
                <div className="text-sm text-white font-semibold">Available for Work</div>
                <div className="text-xs text-slate-400">Currently open to freelance projects and full-time opportunities.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default Contact;