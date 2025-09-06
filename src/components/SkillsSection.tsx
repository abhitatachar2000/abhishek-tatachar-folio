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
  Users
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      skills: [
        "React", "Vue.js", "Angular", "TypeScript", "JavaScript",
        "Next.js", "Tailwind CSS", "SASS", "HTML5", "CSS3",
        "Responsive Design", "Progressive Web Apps", "Webpack", "Vite"
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/30",
      skills: [
        "Node.js", "Python", "Java", "C++", "Express.js", "Django",
        "FastAPI", "Spring Boot", "RESTful APIs", "GraphQL",
        "Microservices", "Serverless", "WebSockets", "gRPC"
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      skills: [
        "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes",
        "Jenkins", "GitLab CI", "Terraform", "Ansible", "Nginx",
        "CI/CD", "Infrastructure as Code", "Monitoring", "Logging"
      ]
    },
    {
      title: "Data & AI",
      icon: Brain,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/30",
      skills: [
        "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch",
        "Scikit-learn", "Pandas", "NumPy", "NLP", "Computer Vision",
        "MLOps", "Data Analysis", "Statistical Modeling", "Jupyter", "R"
      ]
    },
    {
      title: "Databases",
      icon: Cpu,
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/30",
      skills: [
        "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch",
        "DynamoDB", "Cassandra", "Neo4j", "InfluxDB", "SQL",
        "Database Design", "Query Optimization", "Data Modeling", "ETL"
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
      skills: [
        "React Native", "Flutter", "Android", "iOS", "Kotlin",
        "Swift", "Ionic", "Progressive Web Apps", "Mobile UI/UX",
        "App Store Optimization", "Push Notifications", "Offline Storage"
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      color: "text-teal-600",
      bgColor: "bg-teal-50 dark:bg-teal-950/30",
      skills: [
        "Git", "GitHub", "GitLab", "Jira", "Confluence", "Slack",
        "Figma", "Adobe XD", "Postman", "Insomnia", "VS Code",
        "IntelliJ", "Chrome DevTools", "Swagger", "API Documentation"
      ]
    },
    {
      title: "Security & Testing",
      icon: Shield,
      color: "text-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-950/30",
      skills: [
        "Unit Testing", "Integration Testing", "E2E Testing", "Jest",
        "Cypress", "Selenium", "Security Auditing", "OAuth", "JWT",
        "Encryption", "Penetration Testing", "Code Review", "OWASP"
      ]
    }
  ];

  const softSkills = [
    "Team Leadership", "Project Management", "Agile/Scrum", "Technical Writing",
    "Code Review", "Mentoring", "Public Speaking", "Cross-functional Collaboration",
    "Problem Solving", "System Design", "Architecture Planning", "Strategic Thinking"
  ];

  const certifications = [
    { name: "AWS Solutions Architect", issuer: "Amazon", year: "2023" },
    { name: "Google Cloud Professional", issuer: "Google", year: "2022" },
    { name: "Certified Kubernetes Administrator", issuer: "CNCF", year: "2022" },
    { name: "TensorFlow Developer Certificate", issuer: "Google", year: "2021" },
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
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs font-medium hover:bg-muted transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Soft Skills & Certifications */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Soft Skills */}
            <Card className="shadow-medium border-0 bg-card/50 backdrop-blur-sm animate-slide-up">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Leadership & Soft Skills
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Beyond technical expertise, I bring strong leadership and communication
                  skills that enable effective collaboration and project success.
                </p>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="font-medium hover:bg-secondary/10 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="shadow-medium border-0 bg-card/50 backdrop-blur-sm animate-slide-up delay-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent" />
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

          {/* Skills Philosophy */}
          <div className="mt-16 animate-fade-in">
            <Card className="shadow-large border-0 bg-gradient-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <Globe className="w-12 h-12 mx-auto mb-6 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">Continuous Evolution</h3>
                <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
                  Technology evolves rapidly, and so do I. My commitment to continuous learning
                  ensures I stay at the forefront of emerging technologies and best practices,
                  always ready to tackle tomorrow's challenges with today's cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;