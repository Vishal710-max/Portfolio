import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const Footer = () => {
  const footerRef = useRef(null);

  useScrollReveal([footerRef], { y: 20 });

  const socialLinks = [
    { icon: Github, href: "https://github.com/Vishal710-max", label: "GitHub" },
    { icon: Linkedin, href: "www.linkedin.com/in/vishal-bhingarde-bb23a2376", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/vishal.bhingarde?igsh=MTJjcHR6ajI3dTNsYQ==", label: "Instagram" },
    { icon: Mail, href: "mailto:bhingardevishal5@gmail.com", label: "Email" },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-card border-t border-border py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">

          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="text-muted-foreground hover:text-primary transition"
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Vishal Bhingarde. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
