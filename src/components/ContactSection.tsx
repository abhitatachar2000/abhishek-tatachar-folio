import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin, 
  Github, 
  Twitter, 
  Send,
  CheckCircle,
  Clock,
  Globe
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abhishek.tatachar@email.com",
      href: "mailto:abhishek.tatachar@email.com",
      primary: true
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: "#",
      primary: false
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: "#",
      primary: false
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/abhishekvtatachar",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/abhishekvtatachar",
      color: "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/abhishekvt",
      color: "text-blue-400 hover:text-blue-500"
    },
    {
      icon: Globe,
      label: "Website",
      href: "https://abhishekvtatachar.dev",
      color: "text-green-600 hover:text-green-700"
    }
  ];

  const quickTopics = [
    "Job Opportunities",
    "Research Collaboration",
    "Consulting Projects",
    "Speaking Engagements",
    "Open Source Contributions",
    "Technical Mentoring"
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss your next project, explore collaboration opportunities,
              or just have a conversation about technology? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <Card className="shadow-large border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                    <Send className="w-6 h-6 mr-3 text-primary" />
                    Send a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What would you like to discuss?"
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me more about your project or inquiry..."
                        rows={6}
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-6 text-lg font-semibold shadow-medium hover:shadow-large transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & Social Links */}
            <div className="space-y-8 animate-slide-up delay-200">
              {/* Contact Information */}
              <Card className="shadow-medium border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          info.primary ? 'bg-primary/10' : 'bg-muted/20'
                        }`}>
                          <info.icon className={`w-6 h-6 ${
                            info.primary ? 'text-primary' : 'text-muted-foreground'
                          }`} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                          <p className="text-foreground font-semibold">{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Topics */}
              <Card className="shadow-medium border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Quick Topics
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Some areas I'm particularly interested in discussing:
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {quickTopics.map((topic, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary/20 transition-colors"
                        onClick={() => setFormData(prev => ({ 
                          ...prev, 
                          subject: topic 
                        }))}
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-medium border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Connect on Social Media
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-auto p-4 justify-start group"
                        onClick={() => window.open(social.href, "_blank")}
                      >
                        <social.icon className={`w-5 h-5 mr-3 ${social.color} group-hover:scale-110 transition-transform`} />
                        <span className="font-medium">{social.label}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability Status */}
              <Card className="shadow-medium border-0 bg-gradient-primary text-primary-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="w-6 h-6" />
                    <h3 className="text-lg font-bold">Currently Available</h3>
                  </div>
                  <p className="opacity-90 mb-4">
                    I'm actively looking for new opportunities and exciting projects.
                    Open to both full-time positions and consulting engagements.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
                      Remote Work
                    </Badge>
                    <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
                      Consulting
                    </Badge>
                    <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
                      Full-time
                    </Badge>
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

export default ContactSection;