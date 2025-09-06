import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUp, Heart, Code, Mail, Linkedin, Github, Twitter } from "lucide-react";

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
      { name: "LinkedIn", href: "https://linkedin.com/in/abhishekvtatachar", icon: Linkedin },
      { name: "GitHub", href: "https://github.com/abhishekvtatachar", icon: Github },
      { name: "Twitter", href: "https://twitter.com/abhishekvt", icon: Twitter },
      { name: "Email", href: "mailto:abhishek.tatachar@email.com", icon: Mail }
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
    <footer className="bg-tech-dark text-muted-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20" />
      </div>

      {/* Back to Top Button */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-center mb-8">
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToTop}
            className="group bg-background/10 border-border/20 text-foreground hover:bg-background/20 transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
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
                  Crafting intelligent solutions at the intersection of artificial intelligence,
                  software systems, and DevOps excellence. Always eager to tackle new challenges
                  and drive innovation.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">20+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">10+</div>
                  <div className="text-xs text-muted-foreground">Publications</div>
                </div>
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

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h5 className="text-sm font-semibold text-foreground mb-3">Stay Updated</h5>
                <p className="text-xs text-muted-foreground mb-3">
                  Get notified about new projects and research
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-background/10 border-border/20 text-foreground hover:bg-background/20"
                >
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>
          </div>

          <Separator className="bg-border/20 mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2024 Abhishek V Tatachar. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and</span>
              <Code className="w-4 h-4 text-primary" />
              <span>in India</span>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/sitemap"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>

          {/* Tech Credits */}
          <div className="mt-8 pt-6 border-t border-border/10">
            <p className="text-xs text-muted-foreground/70 text-center">
              Built with React, TypeScript, Tailwind CSS, and deployed on modern cloud infrastructure.
              Open source and available on GitHub.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;