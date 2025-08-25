import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function Admin() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center animate-fade-in">
            Admin <span className="text-gradient">Dashboard</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Manage your Rish Tech platform with premium admin controls and analytics.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}