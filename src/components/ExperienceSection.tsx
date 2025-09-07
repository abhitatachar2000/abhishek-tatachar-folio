import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      company: "SAP Labs India",
      role: "Fullstack Cloud Engineer",
      type: "Full-time",
      duration: "March 2024 - Present",
      location: "Bengaluru, India",
      description: "Key contributor to the development of Tenant Provisioning, Integration, and User Identity Management features for SAP Signavio Process Insights. Responsible for managing DevOps processes, monitoring systems, and overseeing CI/CD pipelines, while ensuring adherence to enterprise-wide best practices.",
      achievements: [
        "Drove product unification by leading core engineering in provisioning and identity management, enabling seamless tenant integration, cross-app authentication, and paving the way for a unified User Interface.",
        "Architected and extended CI/CD pipelines to enable isolated deployments to a Managed Private Cloud (MPC) landscape. Supported with setting up of a new dedicated and isolated production landscape, ensuring a secure, customer-specific environment.",
        "Mentored working student through their rotations in our team, easing their transition from campus to industry and accelerating skill growth and team integration."
      ],
      technologies: ["Java", "Spring Boot", "Typescript", "React.js", "Python", "SAP BTP", "Cloud Foundry", "Kubernetes", "Azure ADO", "Github Actions", "Terraform", "Kibana", "Dynatrace", "Grafana"],
      link: "https://saplabs.com"
    },
    {
      id: 2,
      company: "SAP Labs India",
      role: "Generative AI Developer",
      type: "Working Student",
      duration: "May 2023 - Mar 2024",
      location: "Bengaluru, India",
      logo: "💻",
      description: "Conducted detailed experimentation and POCs on Retrieval Augmented Generation (RAG), advanced search techniques and vector databases, and AI agents, translating outcomes of the experiments into impactful product features. Delivered innovations that enhanced user experience and created measurable value within our business applications.",
      achievements: [
        "Built a semantic search RAG pipeline with optimized chunking, indexing, and contextual filtering, enabling precise multi-source retrieval and boosting LLM response quality by 40% while cutting token costs.",
        "Architected and developed an AI-Agent using LLMs and RAG to enable Q&A on regulatory frameworks (e.g., NIST, C5) and built automated control mapping to identify policy gaps and alignment opportunities against industry standards.",
        "Developed a hybrid search framework combining keyword and semantic retrieval with Reciprocal Rank Fusion (RRF), delivering superior performance over standalone methods and documented the findings in a comprehensive research paper with both practical and theoretical impact.",
      ],
      technologies: ["Python", "FastAPI", "LLMs and ReAct Agents", "Azure OpenAI", "Embedding Models", "Chroma Vector DB", "Retrieval-Augmented Generation", "LangChain", "Prompt Engineering & Optimization", "Docker", "Kubernetes"],
      link: "#"
    },
    {
      id: 3,
      company: "SAP Labs India",
      role: "Frontend Developer",
      type: "Working Student ",
      duration: "Aug 2022 – May 2023",
      location: "Bengaluru, India",
      logo: "🚀",
      description: "Leveraged expertise in TypeScript, Node.js, SAP UI5 and OData protocols to develop and deliver scalable features, developer tools, and reusable components with clear documentation, resulting in accelerated enterprise adoption of SAP Fiori Elements.",
      achievements: [
        "Designed and implemented variant management for SAP FE Charts at tech-app and macro levels. Empowered users to quickly switch between personalized chart views, compare data, and make faster, informed decisions.",
        "Implemented an asynchronous deep-linking to route directly from My Inbox to SAP Fiori Elements V4 Object Pages using startup parameters, eliminating the need for intermediate List Report views, streamlining user workflows and enhancing task efficiency.",
        "Demonstrated strong communication and collaboration skills, along with a proactive approach to continuous learning, by organizing and facilitating cross-team learning workshops."
      ],
      technologies: ["Typescript", "SAP UI5", "Open Data Protocol", "Jest", "One Page Acceptance Tests", "Jenkins"],
      link: "#"
    },
    {
      id: 4,
      company: "Dhi Innovation Centre",
      role: "Project Intern – Research and Development, and Stakeholder Engagement",
      type: "Internship",
      duration: "Aug 2022 – May 2023",
      location: "Bengaluru, Karnataka",
      description: "Led research, development, and stakeholder engagement for the design and prototyping of an intelligent cane stick aimed at assisting visually impaired individuals. Responsible for guiding the team, fostering NGO partnerships, and iteratively improving prototype performance based on real-world feedback.",
      achievements: [
        "Directed a multidisciplinary team in developing a smart cane prototype that achieved over 90% accuracy in obstacle detection, significantly enhancing mobility for visually impaired users.",
        "Established collaboration with a local NGO supporting the blind and visually impaired to understand user challenges, gather feedback, and validate design improvements.",
        "Designed and implemented multiple prototypes using HC-SR04 ultrasonic sensors for distance estimation and coin vibration motors for obstacle alerts, refining functionality through iterative testing with end users."
      ],
      technologies: ["Microprocessors and Embedded Systems", "Python", "HC-SR04 Ultrasonic Sensors", "Coin Vibration Motors", "Prototyping", "User-Centered Design", "Stakeholder Engagement", "Requirement Elicitation"],
      link: "#"
    },
    {
      id: 5,
      company: "Smart ICT Solutions PTY LTD",
      role: "Project and Research Intern – Machine Learning",
      type: "Internship",
      duration: "March 2021 – Jan 2022",
      location: "Victoria, Australia (Remote)",
      description: "Contributed to the research, design and development of an intelligent water sprinkler system leveraging machine learning, predictive analytics, and wireless sensor networks to optimize irrigation and reduce water wastage. Engaged in technical research and collaborations with stakeholders to align project outcomes with evolving requirements.",
      achievements: [
        "Developed an intelligent water sprinkler system using live field data to enable data-driven irrigation decisions, reducing water wastage by up to 40%.",
        "Applied machine learning and predictive analytics to forecast soil moisture and temperature, minimizing the dependency on additional field sensors.",
        "Designed and implemented a robust Wireless Sensor Network (WSN) with ZigBee to transmit live sensor data reliably from the field to the controller system.",
        "Authored and published three research papers evaluating communication technologies (ZigBee, Bluetooth, LoRaWAN, Wi-Fi) for intelligent and automated systems, considering range and environmental factors.",
        "Collaborated closely with product owners and stakeholders to refine requirements and redesign system architecture, ensuring alignment with evolving project needs."
      ],
      technologies: ["Python", "Machine Learning", "Predictive Analytics", "IoT", "Wireless Sensor Networks", "ZigBee", "LoRaWAN", "Bluetooth", "Wi-Fi", "Design Thinking"],
      link: "#"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-subtle">
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
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1.5 bg-border transform md:-translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2.5 md:left-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10" />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 pl-10 md:pl-0 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-8"
                        : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm group rounded-2xl">
                      <CardHeader className="pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                          {/* Role & Company */}
                          <div className="flex items-start space-x-3 sm:space-x-4">
                            <div>
                              <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                                {exp.role}
                              </h3>
                              <div className="flex items-center space-x-2 text-sm text-secondary font-medium mt-1">
                                <Building2 className="w-4 h-4" />
                                <span>{exp.company}</span>
                                {exp.link !== "#" && (
                                  <ExternalLink className="w-3 h-3 opacity-60" />
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Job Type Badge */}
                          <Badge
                            variant="secondary"
                            className="mt-3 sm:mt-0 sm:ml-4 shrink-0 self-start sm:self-center"
                          >
                            {exp.type}
                          </Badge>
                        </div>

                        {/* Metadata (stacked on mobile) */}
                        <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-muted-foreground space-y-1 sm:space-y-0">
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
                        {/* Description */}
                        <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start space-x-2 text-sm text-muted-foreground"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, i) => (
                              <Badge key={i} variant="outline" className="text-xs px-2 py-1">
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
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;