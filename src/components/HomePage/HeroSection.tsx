import { useState, useEffect } from "react";
import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [taglineVisible, setTaglineVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  
  const taglineWords = ["Ideas", "Meet", "Technology"];

  useEffect(() => {
    const timer = setTimeout(() => setTaglineVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (taglineVisible && currentWord < taglineWords.length) {
      const wordTimer = setTimeout(() => {
        setCurrentWord(prev => prev + 1);
      }, 600);
      return () => clearTimeout(wordTimer);
    }
  }, [taglineVisible, currentWord]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/95 to-card">
      {/* Galaxy Universe Background Effects */}
      <div className="absolute inset-0">
        {/* Animated galaxy particles */}
        <div className="absolute top-10 left-10 w-1 h-1 bg-accent rounded-full animate-twinkle opacity-80"></div>
        <div className="absolute top-20 right-16 w-2 h-2 bg-metallic-gold rounded-full animate-pulse-glow opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-32 left-1/3 w-1 h-1 bg-classic-blue rounded-full animate-twinkle opacity-70" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-royal-purple rounded-full animate-orbit opacity-50" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-emerald rounded-full animate-float opacity-60" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-twinkle opacity-90" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-1/2 left-16 w-2 h-2 bg-burgundy rounded-full animate-pulse-glow opacity-40" style={{ animationDelay: '6s' }}></div>
        
        {/* Galaxy nebula effects */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-royal rounded-full blur-3xl opacity-20 animate-rotate-slow"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-emerald rounded-full blur-2xl opacity-15 animate-float"></div>
        <div className="absolute top-1/3 left-1/2 w-1/4 h-1/4 bg-gradient-primary rounded-full blur-xl opacity-10 animate-pulse"></div>
        
        {/* Cosmic dust */}
        <div className="absolute inset-0 bg-stars opacity-30"></div>
        
        {/* Moving stars layers */}
        <div className="moving-stars opacity-20"></div>
        <div className="moving-stars opacity-15" style={{ animationDelay: '-5s', animationDuration: '25s' }}></div>
        
        {/* Shooting stars */}
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Logo Animation */}
        <div className="mb-8 animate-scale-in">
          <img 
            src="/lovable-uploads/56e6746a-9ed5-4080-a15b-3a175717b733.png" 
            alt="RishTech Logo" 
            className="mx-auto h-32 w-auto animate-pulse-glow drop-shadow-2xl galaxy-glow"
          />
        </div>

        {/* Company Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in galaxy-text">
          <span className="text-gradient font-extrabold tracking-wider">
            RishTech
          </span>
        </h1>

        {/* Animated Tagline */}
        <div className="mb-12 h-16 flex items-center justify-center">
          {taglineVisible && (
            <p className="text-xl md:text-2xl text-muted-foreground animate-slide-up">
              Where{" "}
              {taglineWords.slice(0, currentWord).map((word, index) => (
                <span
                  key={word}
                  className={`inline-block mx-1 transition-all duration-500 ${
                    word === "Technology" 
                      ? "text-gradient font-semibold" 
                      : word === "Ideas" 
                      ? "text-metallic-silver font-medium"
                      : "text-foreground"
                  }`}
                >
                  {word}
                </span>
              ))}
              {currentWord >= taglineWords.length && (
                <span className="animate-pulse">.</span>
              )}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in leading-relaxed">
          We transform businesses through cutting-edge technology solutions. 
          From AI-powered applications to cloud infrastructure, we bridge the gap 
          between innovative ideas and real-world implementation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button size="lg" className="btn-glow px-8 py-4 text-lg group">
            Get Started Today
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-4 text-lg border-metallic-silver text-metallic-silver hover:bg-metallic-silver hover:text-background group"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>

        {/* Stats Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '2s' }}>
          {[
            { number: "100+", label: "Projects Delivered" },
            { number: "50+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}