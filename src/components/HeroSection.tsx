import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";

const downloadResume = () => {
 const link = document.createElement("a");
 link.href = "documents/abhishekvtatachar-resume.pdf"
 link.download = "abhishekvtatachar-resume.pdf"
 document.body.appendChild(link);
 link.click();
 document.removeChild(link);
}

const HeroSection = () => {
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Profile Photo */}
            <div className="mt-16 mb-8 animate-scale-in">
            <Avatar className="w-36 h-36 mx-auto border-4 border-primary/20 shadow-large">
              <AvatarImage src="images/portfolio/1.png" alt="Abhishek V Tatachar" />
              <AvatarFallback className="text-2xl font-semibold bg-primary/10 text-primary">
              AV
              </AvatarFallback>
            </Avatar>
            </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6 animate-slide-up text-primary">
            Abhishek V Tatachar
          </h1>

          {/* Role & Company */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 mb-8 animate-slide-up delay-200">
            <h2 className="text-xl md:text-xl font-semibold text-foreground">
              Software Engineer & Researcher
            </h2>
            <div className="hidden md:block w-1 h-1 bg-muted rounded-full" />
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-base">SAP Labs, India</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-l text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up delay-300">
            Crafting scalable, maintainable and reliable solutions at the intersection of{" "}
            <span className="text-primary font-semibold">Fullstack Development</span>,{" "}
            <span className="text-primary font-semibold">Cloud Native Systems</span>,{" "}
            <span className="text-primary font-semibold">Artificial Intelligence</span>, and{" "}
            <span className="text-primary font-semibold">DevOps</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-scale-in delay-500">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="group bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-6 text-lg font-semibold shadow-medium hover:shadow-large transition-all duration-300"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="group bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-6 text-lg font-semibold shadow-medium hover:shadow-large transition-all duration-300"
            >
              Contact Me
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              className="group text-muted-foreground px-8 py-6 text-lg font-semibold transition-all duration-300 !bg-transparent hover:!bg-transparent focus:!bg-transparent active:!bg-transparent"
              onClick={downloadResume}
            >
              <Download className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="group-hover:scale-110 transition-transform">Download CV</span>
            </Button>
          </div>

          {/* Professional Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in delay-700">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">7+</div>
              <div className="text-muted-foreground">Research Papers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;