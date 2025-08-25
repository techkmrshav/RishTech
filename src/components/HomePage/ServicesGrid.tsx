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
  Zap 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Website Development",
    description: "Craft responsive, high-performance websites with cutting-edge design and functionality.",
    icon: Monitor,
    color: "text-tech-blue",
    href: "/services#website"
  },
  {
    title: "App Development",
    description: "Build powerful mobile applications that engage users and drive business growth.",
    icon: Smartphone,
    color: "text-tech-cyan",
    href: "/services#app"
  },
  {
    title: "AI/ML Solutions",
    description: "Harness artificial intelligence to automate processes and unlock data insights.",
    icon: Brain,
    color: "text-metallic-silver",
    href: "/services#ai"
  },
  {
    title: "Cloud Computing",
    description: "Scale your infrastructure with secure, reliable cloud solutions and migration services.",
    icon: Cloud,
    color: "text-tech-blue",
    href: "/services#cloud"
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security audits and solutions.",
    icon: Shield,
    color: "text-tech-cyan",
    href: "/services#security"
  },
  {
    title: "Network Management",
    description: "Optimize and maintain your network infrastructure for peak performance.",
    icon: Network,
    color: "text-metallic-silver",
    href: "/services#network"
  },
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your specific business requirements.",
    icon: Code,
    color: "text-tech-blue",
    href: "/services#software"
  },
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable business intelligence and insights.",
    icon: BarChart3,
    color: "text-tech-cyan",
    href: "/services#analytics"
  },
  {
    title: "IT Consulting",
    description: "Strategic technology guidance to accelerate your digital transformation journey.",
    icon: Users,
    color: "text-metallic-silver",
    href: "/services#consulting"
  },
  {
    title: "Help Desk Support",
    description: "24/7 technical support to keep your systems running smoothly.",
    icon: Headphones,
    color: "text-tech-blue",
    href: "/services#support"
  },
  {
    title: "Custom Chatbots",
    description: "Intelligent conversational interfaces for websites and applications.",
    icon: Bot,
    color: "text-tech-cyan",
    href: "/services#chatbots"
  },
  {
    title: "ROS Development",
    description: "Advanced robotics solutions using Robot Operating System technology.",
    icon: Zap,
    color: "text-metallic-silver",
    href: "/services#ros"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business 
            and accelerate your digital journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="card-premium group hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-br from-accent/20 to-tech-cyan/20 w-fit">
                    <Icon className={`h-8 w-8 ${service.color} group-hover:animate-pulse`} />
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full group-hover:btn-glow transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your goals.
          </p>
          <Button size="lg" className="btn-glow px-8">
            Get Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}