import { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const portfolioItems = [
  {
    id: 1,
    title: "EcoMart E-commerce Platform",
    category: "Website Development",
    description: "Full-stack e-commerce solution with AI-powered recommendations and real-time inventory management.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Node.js", "MongoDB", "AI/ML"],
    client: "EcoGreen Solutions",
    outcome: "300% increase in online sales",
    rating: 5,
    testimonial: "Exceptional work! Our sales tripled within 3 months of launch."
  },
  {
    id: 2,
    title: "MediCare Mobile App",
    category: "App Development", 
    description: "Healthcare management app with telemedicine features and patient record system.",
    image: "/api/placeholder/400/250",
    technologies: ["React Native", "Firebase", "WebRTC"],
    client: "HealthFirst Clinic",
    outcome: "50,000+ active users",
    rating: 5,
    testimonial: "User-friendly design and robust functionality. Patients love it!"
  },
  {
    id: 3,
    title: "AutoBot Manufacturing System",
    category: "ROS Development",
    description: "Robotic automation system for assembly line optimization using ROS2.",
    image: "/api/placeholder/400/250", 
    technologies: ["ROS2", "Python", "Computer Vision"],
    client: "TechManufacturing Ltd",
    outcome: "400% efficiency increase",
    rating: 5,
    testimonial: "Revolutionary automation that transformed our production line."
  },
  {
    id: 4,
    title: "FinSecure Banking Platform",
    category: "Cybersecurity",
    description: "Comprehensive security audit and implementation for digital banking infrastructure.",
    image: "/api/placeholder/400/250",
    technologies: ["Security Audit", "Penetration Testing", "Cloud Security"],
    client: "SecureBank India",
    outcome: "Zero security incidents",
    rating: 5,
    testimonial: "Unparalleled security expertise. Our systems are now fortress-level secure."
  },
  {
    id: 5,
    title: "DataInsight Analytics Dashboard",
    category: "Data Analytics",
    description: "Real-time business intelligence platform with predictive analytics and custom reporting.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
    client: "DataFlow Corporation",
    outcome: "85% faster decision making",
    rating: 5,
    testimonial: "Transformed our data into actionable insights. Game-changing solution!"
  },
  {
    id: 6,
    title: "CloudScale Infrastructure",
    category: "Cloud Computing",
    description: "Enterprise cloud migration and scalable infrastructure setup with auto-scaling capabilities.",
    image: "/api/placeholder/400/250",
    technologies: ["AWS", "Kubernetes", "Docker", "Terraform"],
    client: "GrowthTech Startup",
    outcome: "99.9% uptime achieved",
    rating: 5,
    testimonial: "Seamless cloud migration with zero downtime. Incredible expertise!"
  }
];

const categories = ["All", "Website Development", "App Development", "ROS Development", "Cybersecurity", "Data Analytics", "Cloud Computing"];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses transform through technology. 
            Each project showcases our commitment to excellence and innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "btn-glow" : "hover:btn-glow"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id}
              className="card-premium group hover-lift animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-accent/20 to-tech-cyan/20 h-48">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-metallic-silver opacity-20 mb-2">
                      {item.id}
                    </div>
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                {hoveredItem === item.id && (
                  <div className="absolute inset-0 bg-background/90 flex items-center justify-center animate-fade-in">
                    <div className="flex space-x-3">
                      <Button size="sm" variant="outline" className="hover-glow">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="hover-glow">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-lg group-hover:text-accent transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Client & Outcome */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Client:</span>
                    <span className="font-medium text-foreground">{item.client}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Result:</span>
                    <span className="font-medium text-accent">{item.outcome}</span>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-xs italic text-muted-foreground mb-2">
                    "{item.testimonial}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">⭐</span>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {item.rating}/5 rating
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Impressed by Our Work?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These are just a few examples of how we've helped businesses succeed. 
            Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-glow px-8">
              View Full Portfolio
            </Button>
            <Button variant="outline" size="lg" className="px-8 hover:btn-glow">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}