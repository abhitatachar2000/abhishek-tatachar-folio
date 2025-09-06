import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Brain, Rocket, Award, Users, BookOpen } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Excellence",
      description: "Expertise in modern web technologies, cloud platforms, and scalable architecture design.",
    },
    {
      icon: Brain,
      title: "AI & Research",
      description: "Published researcher in machine learning with focus on practical AI implementations.",
    },
    {
      icon: Rocket,
      title: "Innovation Driver",
      description: "Leading digital transformation initiatives at SAP Labs with cutting-edge solutions.",
    },
  ];

  const achievements = [
    "Senior Software Engineer at SAP Labs India",
    "10+ peer-reviewed research publications",
    "Led development of AI-powered enterprise solutions",
    "Speaker at international technology conferences",
    "Mentor for emerging technology professionals",
  ];

  const values = [
    { icon: Award, label: "Excellence" },
    { icon: Users, label: "Collaboration" },
    { icon: BookOpen, label: "Continuous Learning" },
    { icon: Rocket, label: "Innovation" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about bridging the gap between theoretical research and practical
              implementation, I bring both academic rigor and industry experience to every project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Story & Philosophy */}
            <div className="animate-slide-up">
              <Card className="shadow-medium border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    My Journey
                  </h3>
                  
                  <div className="prose prose-lg text-muted-foreground space-y-6">
                    <p>
                      As a Senior Software Engineer at SAP Labs India, I specialize in developing
                      intelligent systems that solve complex business challenges. My work spans
                      the full spectrum from research and prototyping to production deployment
                      of AI-powered solutions.
                    </p>
                    
                    <p>
                      My academic background in computer science, combined with hands-on industry
                      experience, allows me to approach problems with both theoretical depth and
                      practical insight. I believe in writing clean, maintainable code that not
                      only works today but evolves with future needs.
                    </p>
                    
                    <p>
                      Beyond individual contributions, I'm passionate about knowledge sharing
                      and team growth. I regularly mentor junior developers and contribute to
                      open-source projects that benefit the broader tech community.
                    </p>
                  </div>

                  {/* Core Values */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Core Values</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {values.map((value, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <value.icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="font-medium text-foreground">{value.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Highlights & Achievements */}
            <div className="space-y-8 animate-slide-up delay-200">
              {/* Key Highlights */}
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                          <highlight.icon className="w-6 h-6 text-secondary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-2">
                            {highlight.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Career Achievements */}
              <Card className="shadow-medium border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-foreground mb-6">
                    Career Highlights
                  </h4>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Current Focus */}
              <Card className="shadow-medium border-0 bg-gradient-primary text-primary-foreground">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold mb-4">Current Focus</h4>
                  <p className="mb-6 opacity-90">
                    Exploring the intersection of large language models and enterprise software,
                    with a focus on creating more intuitive and intelligent user experiences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["LLMs", "DevOps", "Cloud Architecture", "AI Ethics"].map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;