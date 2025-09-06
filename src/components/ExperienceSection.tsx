import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "SAP Labs India",
      role: "Senior Software Engineer",
      type: "Full-time",
      duration: "2022 - Present",
      location: "Bangalore, India",
      logo: "🏢", // Placeholder - would be actual logo in production
      description: "Leading development of AI-powered enterprise solutions and cloud-native applications. Architecting scalable microservices and implementing DevOps best practices for continuous delivery.",
      achievements: [
        "Led a team of 5 engineers in developing AI-driven analytics platform",
        "Reduced deployment time by 60% through CI/CD pipeline optimization",
        "Implemented machine learning models for predictive maintenance",
        "Mentored 10+ junior developers in modern web technologies"
      ],
      technologies: ["React", "Node.js", "Python", "AWS", "Kubernetes", "TensorFlow", "PostgreSQL"],
      link: "https://saplabs.com"
    },
    {
      id: 2,
      company: "Tech Innovation Hub",
      role: "Full Stack Developer",
      type: "Full-time",
      duration: "2020 - 2022",
      location: "Mumbai, India",
      logo: "💻",
      description: "Developed and maintained multiple web applications for enterprise clients. Focused on creating responsive, accessible, and performant user experiences.",
      achievements: [
        "Built 15+ production applications serving 100,000+ users",
        "Improved application performance by 40% through optimization",
        "Implemented automated testing reducing bugs by 35%",
        "Collaborated with UX team to enhance user engagement by 25%"
      ],
      technologies: ["Vue.js", "Django", "MySQL", "Docker", "Redis", "GraphQL"],
      link: "#"
    },
    {
      id: 3,
      company: "StartupCo",
      role: "Software Developer",
      type: "Full-time",
      duration: "2019 - 2020",
      location: "Pune, India",
      logo: "🚀",
      description: "Early-stage startup experience building products from scratch. Worked across the full stack with emphasis on rapid prototyping and iterative development.",
      achievements: [
        "Built MVP that acquired 1000+ users in first month",
        "Developed real-time collaboration features",
        "Implemented payment gateway integration",
        "Created automated backup and monitoring systems"
      ],
      technologies: ["JavaScript", "Express.js", "MongoDB", "Socket.io", "Stripe API"],
      link: "#"
    },
    {
      id: 4,
      company: "University Research Lab",
      role: "Research Assistant",
      type: "Part-time",
      duration: "2018 - 2019",
      location: "Bangalore, India",
      logo: "🎓",
      description: "Conducted research in machine learning and natural language processing. Published papers in international conferences and collaborated with industry partners.",
      achievements: [
        "Published 3 research papers in top-tier conferences",
        "Developed novel algorithms for text classification",
        "Presented research at IEEE International Conference",
        "Collaborated with 5 international research institutions"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Jupyter", "Scikit-learn", "NLTK"],
      link: "#"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A journey through innovation, leadership, and technical excellence across
              enterprise, startup, and research environments.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10" />

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 
                      ? "md:ml-0 md:mr-auto md:pr-8" 
                      : "md:ml-auto md:mr-0 md:pl-8"
                  }`}>
                    <Card className="shadow-medium hover:shadow-large transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm group">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="text-3xl">{exp.logo}</div>
                            <div>
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {exp.role}
                              </h3>
                              <div className="flex items-center space-x-2 text-secondary font-semibold">
                                <Building2 className="w-4 h-4" />
                                <span>{exp.company}</span>
                                {exp.link !== "#" && (
                                  <ExternalLink className="w-3 h-3 opacity-60" />
                                )}
                              </div>
                            </div>
                          </div>
                          <Badge variant="secondary" className="shrink-0">
                            {exp.type}
                          </Badge>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-fade-in">
            <Card className="shadow-medium border-0 bg-gradient-primary text-primary-foreground max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready for New Challenges</h3>
                <p className="mb-6 opacity-90">
                  Passionate about taking on complex technical challenges and driving innovation
                  in fast-paced environments.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
                    Team Leadership
                  </Badge>
                  <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
                    Technical Architecture
                  </Badge>
                  <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
                    AI/ML Implementation
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;