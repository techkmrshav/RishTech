import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
}