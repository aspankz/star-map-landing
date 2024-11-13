import ConstructorSection from "../widgets/ConstructorSection";
import Footer from "../widgets/Footer";
import GallerySection from "../widgets/GallerySection";
import HowItWorksSection from "../widgets/HowItWorksSection";
import ConstructorLink from "@/shared/ui/constructorLink";

export default function Home() {
  return (
    <div className="w-full h-full  items-center justify-center">
      <ConstructorSection />
      <HowItWorksSection />
      <GallerySection />
      <div className="bg-[#021327] flex justify-center py-[40px] ">
        <ConstructorLink
          className="text-[20px] py-[17px] px-[32px] "
          label="Создайте свою карту"
        />
      </div>
      <Footer />
    </div>
  );
}
