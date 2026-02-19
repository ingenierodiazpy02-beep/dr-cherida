import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactSection from "@/components/ContactSection";

export default function Contacto() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
