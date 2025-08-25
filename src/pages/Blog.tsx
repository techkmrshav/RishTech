import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center animate-fade-in">
            Tech <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Stay updated with the latest technology trends, insights, and industry best practices.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}