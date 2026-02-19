import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Testimonios() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
