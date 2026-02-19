import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServicesSection from "@/components/ServicesSection";

export default function Servicios() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      <ServicesSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
