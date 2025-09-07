import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, Filter } from "lucide-react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "AI/ML", "Web Technologies", "Mobile", "DevOps", "Research"];

  type Project = {
    id: number;
    title: string;
    category: string[]; // Now an array of categories
    description: string;
    image: string;
    technologies: string[];
    features: string[];
    status: string;
    demoUrl?: string;
    githubUrl: string;
    type: string;
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Order Management System",
      category: ["Web Technologies"],
      description:
        "A microservices-based order management system built with Java Spring Boot. The application manages orders, product catalogs, and inventory, showcasing containerized deployments, inter-service communication, and CI/CD pipelines.",
      image: "📦",
      technologies: [
        "Java",
        "Spring Boot",
        "Docker",
        "Kubernetes",
        "Kyma Runtime",
        "GitHub Actions"
      ],
      features: [
        "Microservices architecture for order, catalog, and inventory",
        "Containerized deployment with Docker & Kubernetes",
        "WebClient for inter-service communication",
        "Correlation ID for request tracking",
        "Test-Driven Development approach",
        "CI/CD with GitHub Actions (unit, API tests, build, deploy)"
      ],
      status: "Open Source",
      githubUrl: "https://github.com/abhitatachar2000/order-management-system",
      type: "Backend System"
    },
    {
      id: 2,
      title: "Portfolio Web App",
      category: ["Web Technologies"],
      description:
        "A full-stack portfolio web application that models client-server interaction. It allows structured storage of user data like education, skills, and experience with a secure backend and dynamic frontend rendering.",
      image: "🌐",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Nginx",
        "Docker",
        "Kubernetes",
        "HashiCorp Vault"
      ],
      features: [
        "Frontend built with React.js",
        "Backend API with Node.js & MongoDB",
        "Nginx reverse proxy routing",
        "Basic authentication for secure POST requests",
        "Secrets managed with HashiCorp Vault",
        "Containerized deployment with Docker & Kubernetes"
      ],
      status: "Open Source",
      demoUrl: "#",
      githubUrl: "https://github.com/abhitatachar2000/Portfolio-Web-App",
      type: "Full Stack App"
    },
    {
      id: 3,
      title: "autoScrum",
      category: ["AI/ML", "Mobile"],
      description:
        "A cross-platform tool that automates scrum workflows. It processes meeting transcripts to create, update, and manage issues while ensuring adherence to organizational standards.",
      image: "🤝",
      technologies: ["React Native", "Node.js", "AI/NLP APIs", "Firebase"],
      features: [
        "Cross-platform support (iOS, Android, Web)",
        "Automates issue creation, updates, and deletion",
        "Parses meeting transcripts to identify tasks",
        "Defines done-criteria per organizational standards",
        "Streamlines tracking and reduces duplicate issues"
      ],
      status: "Beta",
      demoUrl: "#",
      githubUrl: "https://github.com/CPAD2023/CPAD2023SecBTeam10",
      type: "Productivity Tool"
    },
    {
      id: 4,
      title: "Dockerize ChromaDB",
      category: ["AI/ML", "DevOps"],
      description:
        "An example project demonstrating how to run ChromaDB, an AI-native open-source embedding database, locally and within Docker containers for managing high-dimensional text embeddings.",
      image: "🗄️",
      technologies: ["Python", "ChromaDB", "Docker"],
      features: [
        "Hands-on exploration of vector databases",
        "Local implementation of ChromaDB",
        "Dockerized setup for containerized deployments",
        "Efficient storage & retrieval of text embeddings",
        "Walkthrough of multiple deployment approaches"
      ],
      status: "Open Source",
      demoUrl: "#",
      githubUrl: "https://github.com/abhitatachar2000/dockerize-chromadb",
      type: "Database/Infrastructure"
    },
    {
      id: 5,
      title: "Kubernetes Starter",
      category: ["DevOps"],
      description:
        "A simple Node.js-based calculator application demonstrating Kubernetes orchestration, load balancing, and scaling of containerized services.",
      image: "🧮",
      technologies: ["Node.js", "Docker", "Kubernetes", "Minikube"],
      features: [
        "Node.js calculator app",
        "Deployed with Kubernetes on Minikube",
        "Kubernetes deployments & services",
        "Load balancing across replicas",
        "Hands-on orchestration demo"
      ],
      status: "Open Source",
      demoUrl: "#",
      githubUrl: "https://github.com/abhitatachar2000/Kubernetes-Starter",
      type: "DevOps Demo"
    },
    {
      id: 6,
      title: "Python101",
      category: ["Education"],
      description:
        "A collection of beginner-friendly Python examples covering core programming concepts. Organized into sections for easy learning and exploration.",
      image: "🐍",
      technologies: ["Python"],
      features: [
        "Covers numbers, strings, lists, dictionaries, and functions",
        "Beginner-friendly examples",
        "Organized into topic-based sections",
        "Encourages experimentation & hands-on learning",
        "Can serve as starter templates for small projects"
      ],
      status: "Open Source",
      demoUrl: "#",
      githubUrl: "https://github.com/abhitatachar2000/Python101",
      type: "Learning Resource"
    },
    {
      id: 7,
      title: "Project Daksha",
      category: ["AI/ML", "Research"],
      description:
        "An innovative face recognition-based attendance system that automates classroom attendance, prevents false entries, and simplifies record management for teachers.",
      image: "🧑‍🏫",
      technologies: [
        "Python",
        "OpenCV",
        "Firebase",
        "Android Studio",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      features: [
        "Face recognition-based attendance tracking",
        "Prevents false or proxy attendance",
        "Captures entry/exit times to validate attendance",
        "Database integration for record management",
        "Cross-platform accessibility (Web & Mobile)"
      ],
      status: "Prototype",
      demoUrl: "http://dakshaattendance.epizy.com/?i=1",
      githubUrl: "https://github.com/abhitatachar2000/ProjectDaksha",
      type: "AI/Computer Vision"
    }
  ];


  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));

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
    <section id="projects" className="py-20 bg-background">
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
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;