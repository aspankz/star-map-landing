import ConstructorSection from "../widgets/ConstructorSection";
import Footer from "../widgets/Footer";
import GallerySection from "../widgets/GallerySection";
import HowItWorksSection from "../widgets/HowItWorksSection";

export default function Home() {
  return (
    <div className="w-full h-full  items-center justify-center">
      <ConstructorSection />
      <HowItWorksSection />
      <GallerySection />
      <Footer />
    </div>
  );
}
