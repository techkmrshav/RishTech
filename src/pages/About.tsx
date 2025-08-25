import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap, Target, Users, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="container mx-auto py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center animate-fade-in">
            About <span className="text-gradient">Rish Tech</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-slide-up">
            Where Ideas Meet Technology - Transforming innovative concepts into cutting-edge technological solutions.
          </p>
        </div>

        {/* Company Story */}
        <section className="container mx-auto py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                RishTech, founded in March 2025 by Rishav Kumar, is a dynamic tech services company based in India, 
                dedicated to transforming innovative ideas into cutting-edge technological solutions. With a vision to 
                bridge creativity and technology, RishTech specializes in delivering premium, customized tech services 
                that empower businesses and individuals to thrive in a digital world.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At RishTech, we pride ourselves on our client-centric approach, offering tailored solutions in software 
                development, automation, and digital transformation. Our mission is to deliver excellence, combining 
                technical expertise with creative problem-solving to help our clients achieve their goals.
              </p>
            </div>
            <div className="relative animate-scale-in">
              <Card className="card-premium p-8 text-center">
                <div className="space-y-4">
                  <Calendar className="h-12 w-12 text-accent mx-auto animate-pulse-glow" />
                  <h3 className="text-2xl font-bold text-gradient">Founded in March 2025</h3>
                  <p className="text-muted-foreground">Starting our journey to shape the future of technology</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="container mx-auto py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient animate-fade-in">Meet Our Founder</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading innovation with expertise and passion
            </p>
          </div>
          
          <Card className="card-premium max-w-4xl mx-auto p-8 animate-slide-up">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 text-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center animate-float">
                  <span className="text-4xl font-bold text-primary-foreground">RK</span>
                </div>
                <h3 className="text-2xl font-bold text-gradient">Rishav Kumar</h3>
                <p className="text-accent">Founder & CEO</p>
              </div>
              
              <div className="md:col-span-2 space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our founder, Rishav Kumar, a B.Tech graduate in Automation and Robotics from Guru Gobind Singh 
                  Indraprastha University (GGSIPU) in 2025, brings a passion for innovation and a deep understanding 
                  of automation, robotics, and modern tech frameworks.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">B.Tech in Automation and Robotics, GGSIPU (2025)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">Based in India</span>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Under his leadership, RishTech is committed to pushing boundaries, leveraging the latest 
                  advancements in technology to solve real-world challenges.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Mission & Vision */}
        <section className="container mx-auto py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="card-premium p-8 text-center hover-float animate-fade-in">
              <Target className="h-12 w-12 text-accent mx-auto mb-4 animate-bounce-gentle" />
              <h3 className="text-2xl font-bold mb-4 text-gradient">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver excellence, combining technical expertise with creative problem-solving to help our 
                clients achieve their goals and thrive in a digital world.
              </p>
            </Card>
            
            <Card className="card-premium p-8 text-center hover-float animate-fade-in">
              <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4 animate-pulse-glow" />
              <h3 className="text-2xl font-bold mb-4 text-gradient">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To bridge creativity and technology, transforming innovative ideas into cutting-edge technological 
                solutions that empower businesses and communities.
              </p>
            </Card>
            
            <Card className="card-premium p-8 text-center hover-float animate-fade-in">
              <Users className="h-12 w-12 text-accent mx-auto mb-4 animate-wiggle" />
              <h3 className="text-2xl font-bold mb-4 text-gradient">Our Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Client-centric solutions with tailored approaches in software development, automation, and 
                digital transformation to create impactful, lasting results.
              </p>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient animate-fade-in">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
              Join us on this journey to shape the future of technology. Whether it's building scalable applications, 
              automating processes, or integrating smart technologies, we are your trusted partner in forging a tech-driven future.
            </p>
            <div className="space-y-4">
              <p className="text-lg text-accent font-semibold animate-pulse-glow">
                Visit us at rish-tech-forge.lovable.app
              </p>
              <p className="text-muted-foreground">
                Let RishTech bring your ideas to life.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}