import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContactFormModal } from "@/components/ContactForm";
import { 
  Monitor, 
  Smartphone, 
  Brain, 
  Cloud, 
  Shield, 
  Network, 
  Code, 
  BarChart3, 
  Users, 
  Headphones, 
  Bot, 
  Zap,
  CheckCircle
} from "lucide-react";

const services = [
  {
    id: "website",
    title: "Website Development",
    description: "Create stunning, responsive websites that drive business growth and engage your audience.",
    icon: Monitor,
    features: [
      "Responsive Design & Mobile Optimization",
      "SEO-Friendly Architecture",
      "Fast Loading Performance",
      "Custom CMS Integration",
      "E-commerce Functionality",
      "Third-party API Integration"
    ],
    technologies: ["React", "Next.js", "WordPress", "Shopify", "HTML5", "CSS3"],
    startingPrice: "₹5,000"
  },
  {
    id: "app",
    title: "App Development",
    description: "Build powerful mobile applications for iOS and Android that users love to engage with.",
    icon: Smartphone,
    features: [
      "Cross-Platform Development",
      "Native Performance",
      "Intuitive UI/UX Design",
      "Push Notifications",
      "Offline Functionality",
      "App Store Optimization"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    startingPrice: "₹4,15,000"
  },
  {
    id: "ai",
    title: "AI/ML Solutions",
    description: "Harness the power of artificial intelligence to automate processes and gain valuable insights.",
    icon: Brain,
    features: [
      "Machine Learning Models",
      "Natural Language Processing", 
      "Computer Vision Solutions",
      "Predictive Analytics",
      "Recommendation Systems",
      "Intelligent Automation"
    ],
    technologies: ["TensorFlow", "PyTorch", "Python", "OpenAI", "Scikit-learn"],
    startingPrice: "₹6,64,000"
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    description: "Scale your infrastructure with secure, reliable cloud solutions and seamless migration services.",
    icon: Cloud,
    features: [
      "Cloud Migration Strategy",
      "Infrastructure as Code",
      "Auto-Scaling Solutions",
      "Disaster Recovery",
      "DevOps Implementation", 
      "Cost Optimization"
    ],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"],
    startingPrice: "₹4,150/month"
  },
  {
    id: "security",
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security audits and robust protection systems.",
    icon: Shield,
    features: [
      "Security Vulnerability Assessment",
      "Penetration Testing",
      "Security Architecture Design",
      "Compliance Management",
      "Incident Response Planning",
      "Security Training"
    ],
    technologies: ["Ethical Hacking", "OWASP", "ISO 27001", "NIST", "Security Tools"],
    startingPrice: "₹15,000"
  },
  {
    id: "network",
    title: "Network Management",
    description: "Optimize and maintain your network infrastructure for peak performance and reliability.",
    icon: Network,
    features: [
      "Network Design & Implementation",
      "24/7 Network Monitoring",
      "Performance Optimization",
      "Security Configuration",
      "Troubleshooting & Support",
      "Capacity Planning"
    ],
    technologies: ["Cisco", "Juniper", "Network Protocols", "SNMP", "VPN"],
    startingPrice: "₹6,640/user/month"
  },
  {
    id: "software",
    title: "Software Development",
    description: "Custom software solutions tailored to your specific business requirements and workflows.",
    icon: Code,
    features: [
      "Custom Application Development",
      "System Integration",
      "API Development",
      "Database Design",
      "Quality Assurance",
      "Maintenance & Support"
    ],
    technologies: ["Java", "Python", ".NET", "Node.js", "PostgreSQL", "MongoDB"],
    startingPrice: "₹1,50,000"
  },
  {
    id: "analytics",
    title: "Data Analytics",
    description: "Transform raw data into actionable business intelligence and insights for better decision making.",
    icon: BarChart3,
    features: [
      "Business Intelligence Dashboards",
      "Data Visualization",
      "Predictive Modeling",
      "Real-time Analytics",
      "Custom Reporting",
      "Data Pipeline Development"
    ],
    technologies: ["Tableau", "Power BI", "Python", "R", "SQL", "Apache Spark"],
    startingPrice: "₹800/hour"
  },
  {
    id: "consulting",
    title: "IT Consulting",
    description: "Strategic technology guidance to accelerate your digital transformation journey.",
    icon: Users,
    features: [
      "Technology Strategy Planning",
      "Digital Transformation Roadmap",
      "System Architecture Review",
      "Vendor Selection Guidance",
      "Project Management",
      "Training & Knowledge Transfer"
    ],
    technologies: ["TOGAF", "ITIL", "Agile", "Scrum", "Enterprise Architecture"],
    startingPrice: "₹2,075/hour"
  },
  {
    id: "support",
    title: "Help Desk Support",
    description: "24/7 technical support to keep your systems running smoothly and your team productive.",
    icon: Headphones,
    features: [
      "24/7 Technical Support",
      "Remote Troubleshooting", 
      "System Maintenance",
      "User Training",
      "Documentation & Guides",
      "Escalation Management"
    ],
    technologies: ["ServiceNow", "Zendesk", "Remote Support Tools", "ITIL"],
    startingPrice: "₹83/ticket"
  },
  {
    id: "chatbots",
    title: "Custom Chatbots",
    description: "Intelligent conversational interfaces for websites and applications to enhance customer experience.",
    icon: Bot,
    features: [
      "Natural Language Understanding",
      "Multi-channel Integration",
      "Custom Conversation Flows",
      "Analytics & Insights",
      "Human Handoff",
      "Continuous Learning"
    ],
    technologies: ["Dialogflow", "Rasa", "Microsoft Bot Framework", "Python"],
    startingPrice: "₹2,49,000"
  },
  {
    id: "ros",
    title: "ROS Development", 
    description: "Advanced robotics solutions using Robot Operating System technology for industrial automation.",
    icon: Zap,
    features: [
      "Robot Navigation Systems",
      "Sensor Integration",
      "Computer Vision for Robotics",
      "Industrial Automation",
      "Simulation & Testing",
      "Hardware Integration"
    ],
    technologies: ["ROS2", "Python", "C++", "Gazebo", "OpenCV", "PCL"],
    startingPrice: "₹1,66,000/hour"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto animate-slide-up">
            Comprehensive technology solutions designed to transform your business 
            and accelerate your digital journey. From web development to AI implementation, 
            we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.id}
                  className="card-premium animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-gradient-to-br from-accent/20 to-tech-cyan/20">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2 flex items-center justify-between">
                          {service.title}
                          <Badge variant="outline" className="text-accent border-accent">
                            Starting from {service.startingPrice}
                          </Badge>
                        </CardTitle>
                        <CardDescription className="text-lg">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <ContactFormModal selectedService={service.title}>
                        <Button className="btn-glow flex-1">
                          Request Quote
                        </Button>
                      </ContactFormModal>
                      <Button variant="outline" className="flex-1 hover:btn-glow">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a customized solution 
              that fits your budget and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-glow px-8">
                Get Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="px-8 hover:btn-glow">
                View Pricing
              </Button>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-muted/30 rounded-lg animate-fade-in">
            <p className="text-sm text-muted-foreground text-center">
              <strong>Note:</strong> Prices are introductory ranges based on 2025 Indian market averages. 
              Final quotes depend on project scope, complexity, and specific requirements. 
              Contact us for detailed, customized pricing.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}