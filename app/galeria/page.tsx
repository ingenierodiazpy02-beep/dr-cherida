import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";

export default function Galeria() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      <BeforeAfterGallery />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
