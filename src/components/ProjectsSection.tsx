import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, Filter } from "lucide-react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "AI/ML", "Web Development", "Mobile", "DevOps", "Research"];

  const projects = [
    {
      id: 1,
      title: "Enterprise AI Analytics Platform",
      category: "AI/ML",
      description: "A comprehensive AI-powered analytics platform that provides real-time insights for enterprise customers. Features include predictive modeling, anomaly detection, and automated reporting.",
      image: "🤖", // Placeholder - would be actual image in production
      technologies: ["React", "Python", "TensorFlow", "AWS", "PostgreSQL", "Docker"],
      features: [
        "Real-time data processing",
        "Machine learning predictions",
        "Interactive dashboards",
        "Automated alerting system"
      ],
      status: "Production",
      demoUrl: "#",
      githubUrl: "#",
      type: "Enterprise"
    },
    {
      id: 2,
      title: "Smart DevOps Pipeline Orchestrator",
      category: "DevOps",
      description: "An intelligent CI/CD pipeline orchestration system that automatically optimizes deployment strategies based on project characteristics and historical performance data.",
      image: "⚙️",
      technologies: ["Node.js", "Kubernetes", "Jenkins", "Terraform", "Prometheus", "Grafana"],
      features: [
        "Automated pipeline optimization",
        "Multi-cloud deployment",
        "Performance monitoring",
        "Rollback automation"
      ],
      status: "Beta",
      demoUrl: "#",
      githubUrl: "#",
      type: "Infrastructure"
    },
    {
      id: 3,
      title: "Collaborative Research Network",
      category: "Research",
      description: "A platform connecting researchers worldwide for collaborative projects. Features include paper sharing, peer review systems, and research matching algorithms.",
      image: "📚",
      technologies: ["Vue.js", "Django", "PostgreSQL", "Redis", "Elasticsearch", "AWS"],
      features: [
        "Researcher matching",
        "Collaborative editing",
        "Peer review system",
        "Citation tracking"
      ],
      status: "Production",
      demoUrl: "#",
      githubUrl: "#",
      type: "Academic"
    },
    {
      id: 4,
      title: "Mobile Health Monitoring App",
      category: "Mobile",
      description: "A comprehensive health monitoring application with AI-powered insights, real-time vitals tracking, and personalized health recommendations.",
      image: "📱",
      technologies: ["React Native", "Python", "Firebase", "TensorFlow Lite", "HealthKit"],
      features: [
        "Real-time vitals monitoring",
        "AI health insights",
        "Personalized recommendations",
        "Doctor consultation booking"
      ],
      status: "Production",
      demoUrl: "#",
      githubUrl: "#",
      type: "Mobile App"
    },
    {
      id: 5,
      title: "Distributed Microservices Framework",
      category: "Web Development",
      description: "A lightweight framework for building and managing distributed microservices with built-in service discovery, load balancing, and monitoring.",
      image: "🏗️",
      technologies: ["Go", "Docker", "Kubernetes", "Consul", "Prometheus", "Jaeger"],
      features: [
        "Service discovery",
        "Load balancing",
        "Distributed tracing",
        "Auto-scaling"
      ],
      status: "Open Source",
      demoUrl: "#",
      githubUrl: "#",
      type: "Framework"
    },
    {
      id: 6,
      title: "Natural Language Processing Suite",
      category: "AI/ML",
      description: "A comprehensive NLP toolkit with pre-trained models for sentiment analysis, entity recognition, and text summarization, designed for enterprise integration.",
      image: "🔤",
      technologies: ["Python", "PyTorch", "FastAPI", "BERT", "spaCy", "Docker"],
      features: [
        "Multiple NLP models",
        "REST API interface",
        "Real-time processing",
        "Custom model training"
      ],
      status: "Production",
      demoUrl: "#",
      githubUrl: "#",
      type: "API"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "Beta":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Open Source":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of innovative solutions spanning AI/ML, enterprise software,
              and research platforms that solve real-world challenges.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="transition-all duration-300"
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="shadow-medium hover:shadow-large transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm group animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{project.image}</div>
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {project.type}
                          </Badge>
                          <Badge className={getStatusColor(project.status)}>
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      <Eye className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="px-3"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-fade-in">
            <Card className="shadow-large border-0 bg-gradient-primary text-primary-foreground max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
                <p className="text-lg opacity-90 mb-6">
                  I'm always excited to work on innovative projects that push the boundaries
                  of technology and create meaningful impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    View All Projects
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Discuss a Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;