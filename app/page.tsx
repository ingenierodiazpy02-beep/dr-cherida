import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesCallToAction from "@/components/ServicesCallToAction";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import SimplifiedContact from "@/components/SimplifiedContact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesCallToAction />
      <BeforeAfterGallery />
      <TestimonialsSection />
      <SimplifiedContact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
