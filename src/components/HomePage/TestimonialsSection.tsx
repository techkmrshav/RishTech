import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    position: "CEO, TechStart Solutions",
    company: "Mumbai, India",
    rating: 5,
    text: "Rish Tech transformed our business with seamless AI integration. Their team delivered beyond expectations, on time and within budget. The ROI was visible within the first quarter!",
    avatar: "PS"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    position: "CTO, InnovateLabs",
    company: "Bangalore, India",
    rating: 5,
    text: "Exceptional ROS development services! They built our robotic automation system that increased efficiency by 300%. Professional, knowledgeable, and highly recommended.",
    avatar: "RK"
  },
  {
    id: 3,
    name: "Anita Patel",
    position: "Founder, EcoGreen Tech",
    company: "Pune, India",
    rating: 5,
    text: "Our e-commerce platform built by Rish Tech handles 10,000+ daily transactions flawlessly. Their cloud infrastructure solution scaled perfectly with our growth.",
    avatar: "AP"
  },
  {
    id: 4,
    name: "Vikram Singh",
    position: "Director, FinSecure Systems",
    company: "Delhi, India",
    rating: 5,
    text: "Top-notch cybersecurity implementation. Rish Tech secured our financial systems with zero downtime migration. Their expertise in security is unmatched.",
    avatar: "VS"
  },
  {
    id: 5,
    name: "Deepika Agarwal",
    position: "VP Engineering, DataFlow Inc",
    company: "Hyderabad, India",
    rating: 5,
    text: "The custom chatbot they developed increased our customer satisfaction by 85%. Intelligent, responsive, and perfectly integrated with our existing systems.",
    avatar: "DA"
  },
  {
    id: 6,
    name: "Arjun Reddy",
    position: "Product Manager, CloudTech",
    company: "Chennai, India",
    rating: 5,
    text: "Phenomenal mobile app development. Our iOS and Android apps have 4.8-star ratings thanks to Rish Tech's attention to detail and user experience focus.",
    avatar: "AR"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about working with Rish Tech.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="card-premium animate-fade-in">
            <CardContent className="p-8 md:p-12 text-center">
              {/* Quote Icon */}
              <Quote className="h-12 w-12 text-accent mx-auto mb-6 opacity-50" />
              
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="h-12 w-12 bg-gradient-tech rounded-full flex items-center justify-center text-white font-bold">
                  {currentTestimonial.avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentTestimonial.position}
                  </div>
                  <div className="text-xs text-accent">
                    {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 hover-glow"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 hover-glow"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-accent scale-125"
                  : "bg-muted hover:bg-accent/50"
              }`}
            />
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in">
          {[
            { number: "98%", label: "Client Satisfaction" },
            { number: "100+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "4.9/5", label: "Average Rating" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}