import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Zap } from "lucide-react";

const pricingPlans = [
  {
    category: "Website Development",
    plans: [
      {
        name: "Basic Website",
        price: "₹5,000",
        period: "one-time",
        description: "Perfect for small businesses and personal websites",
        features: [
          "Up to 5 pages",
          "Responsive design",
          "Basic SEO setup",
          "Contact form",
          "1 month support"
        ],
        popular: false
      },
      {
        name: "Business Website",
        price: "₹25,000",
        period: "one-time", 
        description: "Ideal for growing businesses with advanced features",
        features: [
          "Up to 15 pages",
          "Custom design",
          "Advanced SEO",
          "CMS integration",
          "Analytics setup",
          "3 months support"
        ],
        popular: true
      },
      {
        name: "E-commerce Website",
        price: "₹75,000",
        period: "one-time",
        description: "Full-featured online store with payment integration",
        features: [
          "Unlimited products",
          "Payment gateway",
          "Inventory management",
          "Order tracking",
          "Customer accounts",
          "6 months support"
        ],
        popular: false
      }
    ]
  },
  {
    category: "App Development",
    plans: [
      {
        name: "Simple App",
        price: "₹4,15,000",
        period: "one-time",
        description: "Basic mobile app with core functionality",
        features: [
          "Single platform (iOS or Android)",
          "Up to 10 screens",
          "Basic features",
          "App store submission",
          "3 months support"
        ],
        popular: false
      },
      {
        name: "Advanced App",
        price: "₹8,30,000",
        period: "one-time",
        description: "Cross-platform app with advanced features",
        features: [
          "iOS + Android",
          "Custom UI/UX",
          "API integration",
          "Push notifications",
          "Analytics",
          "6 months support"
        ],
        popular: true
      },
      {
        name: "Enterprise App",
        price: "₹16,60,000",
        period: "one-time",
        description: "Complex business application with enterprise features",
        features: [
          "Multi-platform",
          "Advanced security",
          "Backend development",
          "Third-party integrations",
          "Admin dashboard",
          "1 year support"
        ],
        popular: false
      }
    ]
  },
  {
    category: "AI/ML Solutions",
    plans: [
      {
        name: "Basic ML Model",
        price: "₹6,64,000",
        period: "one-time",
        description: "Simple machine learning model for basic predictions",
        features: [
          "Data analysis",
          "Basic ML model",
          "Model training",
          "Performance evaluation",
          "Documentation"
        ],
        popular: false
      },
      {
        name: "Advanced AI Solution",
        price: "₹16,60,000",
        period: "one-time",
        description: "Complex AI system with multiple models",
        features: [
          "Multiple ML models",
          "Deep learning",
          "NLP capabilities",
          "Computer vision",
          "API development",
          "6 months support"
        ],
        popular: true
      },
      {
        name: "Enterprise AI Platform",
        price: "₹41,50,000",
        period: "one-time",
        description: "Complete AI platform with advanced features",
        features: [
          "Custom AI platform",
          "Real-time processing",
          "Scalable architecture",
          "Advanced analytics",
          "Integration support",
          "1 year support"
        ],
        popular: false
      }
    ]
  },
  {
    category: "Hourly Services",
    plans: [
      {
        name: "Software Testing",
        price: "₹830",
        period: "per hour",
        description: "Comprehensive software testing services",
        features: [
          "Manual testing",
          "Automated testing",
          "Bug reporting",
          "Test documentation",
          "Quality assurance"
        ],
        popular: false
      },
      {
        name: "IT Consulting",
        price: "₹2,075",
        period: "per hour",
        description: "Expert technology consulting services",
        features: [
          "Technology strategy",
          "Architecture review",
          "Best practices",
          "Project guidance",
          "Technical advice"
        ],
        popular: true
      },
      {
        name: "ROS Development",
        price: "₹1,66,000",
        period: "per hour",
        description: "Specialized robotics development services",
        features: [
          "Robot programming",
          "Sensor integration",
          "Navigation systems",
          "Industrial automation",
          "Testing & validation"
        ],
        popular: false
      }
    ]
  }
];

const monthlyServices = [
  {
    name: "Cloud Computing",
    price: "₹4,150",
    period: "per month",
    description: "Complete cloud infrastructure management",
    features: [
      "Cloud setup & migration",
      "Infrastructure monitoring",
      "Security management",
      "Cost optimization",
      "24/7 support",
      "Backup & disaster recovery"
    ]
  },
  {
    name: "Network Management",
    price: "₹6,640",
    period: "per user/month",
    description: "Comprehensive network infrastructure management",
    features: [
      "Network design",
      "24/7 monitoring",
      "Performance optimization",
      "Security configuration",
      "Troubleshooting",
      "Capacity planning"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Transparent <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto animate-slide-up">
            Competitive rates based on Indian market standards. Choose the package that fits 
            your needs and budget. All prices are starting ranges - contact us for detailed quotes.
          </p>
        </div>
      </section>

      {/* Pricing Cards by Category */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto space-y-16">
          {pricingPlans.map((category, categoryIndex) => (
            <div key={category.category} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="text-gradient">{category.category}</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {category.plans.map((plan, planIndex) => (
                  <Card 
                    key={plan.name}
                    className={`card-premium relative hover-lift ${plan.popular ? 'ring-2 ring-accent' : ''}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-tech text-white px-4 py-1">
                          <Star className="h-3 w-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-6">
                      <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                      <div className="text-3xl font-bold text-gradient mb-2">
                        {plan.price}
                        <span className="text-sm text-muted-foreground font-normal">
                          /{plan.period}
                        </span>
                      </div>
                      <CardDescription className="text-sm">
                        {plan.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className={`w-full ${plan.popular ? 'btn-glow' : 'hover:btn-glow'}`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          {/* Monthly Services */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="text-gradient">Monthly Services</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {monthlyServices.map((service) => (
                <Card key={service.name} className="card-premium hover-lift">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                    <div className="text-3xl font-bold text-gradient mb-2">
                      {service.price}
                      <span className="text-sm text-muted-foreground font-normal">
                        /{service.period}
                      </span>
                    </div>
                    <CardDescription className="text-sm">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full btn-glow">
                      Subscribe Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <Zap className="h-16 w-16 text-accent mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-muted-foreground mb-8">
              Every business is unique. If our standard packages don't fit your needs, 
              let's create a custom solution tailored specifically for you.
            </p>
            <Button size="lg" className="btn-glow px-8">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="font-semibold mb-2 text-center">Important Pricing Information</h3>
            <ul className="text-sm text-muted-foreground space-y-1 max-w-4xl mx-auto">
              <li>• Prices are starting ranges based on 2025 Indian market averages</li>
              <li>• Final quotes depend on project scope, complexity, and specific requirements</li>
              <li>• All development includes basic testing, documentation, and deployment</li>
              <li>• Support periods can be extended with additional maintenance contracts</li>
              <li>• Enterprise discounts available for large projects and long-term partnerships</li>
              <li>• Payment terms: 50% advance, 50% on completion for most projects</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}