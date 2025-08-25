import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/HomePage/HeroSection";
import ServicesGrid from "@/components/HomePage/ServicesGrid";
import TestimonialsSection from "@/components/HomePage/TestimonialsSection";
import PortfolioSection from "@/components/HomePage/PortfolioSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <PortfolioSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
