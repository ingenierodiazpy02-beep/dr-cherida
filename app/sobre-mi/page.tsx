import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AboutSection from "@/components/AboutSection";

export default function SobreMi() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      <AboutSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
