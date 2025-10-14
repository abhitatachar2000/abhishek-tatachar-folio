import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, Heart, Code, Mail, Linkedin, Github, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const footerLinks = {
    navigate: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Experience", href: "#experience" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" }
    ],
    connect: [
      { name: "LinkedIn", href: "https://linkedin.com/in/abhishektatachar", icon: Linkedin },
      { name: "GitHub", href: "https://github.com/abhitatachar2000", icon: Github },
      { name: "Twitter", href: "https://x.com/abhitatachar", icon: Twitter },
      { name: "Instagram", href: "https://www.instagram.com/abhishektatachar/", icon: Instagram }
    ]
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="bg-tech-light text-muted-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
      </div>

      {/* Back to Top Button */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-center mb-8">
          <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
        className="group inline-flex items-center px-6 py-3 border border-border/20 rounded-md bg-background/10 text-foreground hover:font-bold transition-all duration-300 text-lg"
          >
        <ArrowUp className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
        Back to Top
          </a>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-primary mb-2">
                  Abhishek V Tatachar
                </h3>
                <p className="text-lg text-secondary font-semibold mb-4">
                  Software Engineer & Researcher
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Crafting scalable, maintainable and reliable solutions at the intersection of Fullstack Development, 
                  Cloud Native Systems, Artificial Intelligence, and DevOps.
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Navigate</h4>
              <ul className="space-y-3">
                {footerLinks.navigate.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Connect</h4>
              <div className="space-y-4">
                {footerLinks.connect.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Separator className="bg-border/20 mb-8" />

            {/* Bottom Section */}
            <div className="flex flex-col justify-center items-center text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <span>© 2025 Abhishek V Tatachar. Design base by Lovable. Modified and customized by Abhishek.</span>
            </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;