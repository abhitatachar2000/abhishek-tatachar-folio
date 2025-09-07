import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Cloud,
  Brain,
  Smartphone,
  Settings,
  GitBranch,
  Shield,
  Cpu,
  Globe,
  Users,
  ChartBar,
  Layers,
  ClipboardList
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming and Scripting Languages",
      icon: Code2,
      color: "text-navy-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      skills: [
        "Python", "JavaScript", "TypeScript", "Java", "Bash", "C++"
      ]
    },
    {
      title: "Web Development",
      icon: Smartphone,
      color: "text-navy-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      skills: [
        "HTML", "CSS", "JavaScript", "TypeScript", "SAP UI5", "Fiori Elements",
        "React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Responsive Design", "Progressive Web Apps"
      ]
    },
    {
      title: "Database Management",
      icon: Database,
      color: "text-navy-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      skills: [
        "PostgreSQL", "MySQL", "Firebase", "Chroma Vector Database", "MongoDB",
        "Redis", "Elasticsearch"
      ]
    },
    {
      title: "API Design, Development and Documentation",
      icon: Cpu,
      color: "text-navy-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      skills: [
        "REST APIs", "FastAPI", "Node.js", "Swagger", "GraphQL", "OAuth",
        "API Gateway", "Postman", "Insomnia", "gRPC"
      ]
    },
    {
      title: "DevOps & Version Control",
      icon: Settings,
      color: "text-navy-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      skills: [
        "Git", "GitHub", "Docker", "Kubernetes", "Jenkins", "Azure Pipelines",
        "Ansible", "Helm Charts", "Terraform", "Monitoring & Logging", "CI/CD"
      ]
    },
    {
      title: "Cloud Engineering",
      icon: Cloud,
      color: "text-navy-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      skills: [
        "Amazon Web Services (AWS)", "SAP BTP", "Cloud Foundry",
        "Serverless Architecture", "Cloud Security"
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "text-navy-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      skills: [
        "Scikit-Learn", "TensorFlow", "Keras", "PyTorch",
        "Natural Language Processing (NLP)", "HuggingFace", "Langchain",
        "OpenAI API", "Embedding Models", "Retrieval Augmented Generation",
        "Feature Engineering", "MLOps", "Computer Vision"
      ]
    },
    {
      title: "Data Analysis & Visualization",
      icon: ChartBar,
      color: "text-navy-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      skills: [
        "NumPy", "Pandas", "Seaborn", "Matplotlib", "Jupyter", "Statistical Modeling"
      ]
    },
    {
      title: "System Design & Architecture",
      icon: Layers,
      color: "text-navy-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      skills: [
        "System Design Patterns", "Architecture & Flow Diagrams", "Microservices",
        "Event-Driven Architecture", "Graph Databases", "Scaling Strategies"
      ]
    },
    {
      title: "Security & Testing",
      icon: Shield,
      color: "text-navy-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      skills: [
        "Unit Testing", "Integration Testing", "E2E Testing", "Jest",
        "Cypress", "Selenium", "Security Auditing", "JWT", "Encryption",
        "Penetration Testing", "OWASP"
      ]
    },
    {
      title: "Project Management",
      icon: ClipboardList,
      color: "text-navy-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      skills: [
        "Agile Methodologies", "Scrum", "SAFe", "Sprint Planning",
        "JIRA", "Confluence", "Stakeholder Communication"
      ]
    },
    {
      title: "Leadership & Soft Skills",
      icon: Users,
      color: "text-navy-blue-700",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      skills: [
        "Ownership", "Effective Communication", "Structured Thinking",
        "Storytelling", "Mentoring", "Cross-Team Collaboration",
        "Conflict Resolution"
      ]
    }
  ];

  const certifications = [
    { name: "SAP Certified Cloud Native Developer in Java", issuer: "SAP", year: "Issued July 2025 - No Expiry" },
    { name: "Software Design and Architecture Specialization", issuer: "University of Alberta", year: "Issued Jan 2025 - No Expiry" },
    { name: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "Issued May 2024 - Expires May 2027" },
    { name: "AWS Certified Cloud Practioner", issuer: "Amazon Web Services", year: "Issued Nov 2023 • Expires Nov 2026" },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience,
              continuous learning, and real-world problem solving.
            </p>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-medium transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 rounded-md text-xs font-medium bg-gray-200 text-black"
                        >
                          {skill}
                        </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Soft Skills & Certifications */}
          {/* Certifications */}
          <div className="mb-16">
            <Card className="shadow-medium border-0 bg-card/50 backdrop-blur-sm animate-slide-up delay-200 w-full">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Layers className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Certifications
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Validated expertise through industry-recognized certifications
                  and continuous professional development.
                </p>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <Badge variant="secondary">{cert.year}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;