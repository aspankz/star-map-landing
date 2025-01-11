import { CasesSection } from '@/widgets/CasesSection'
import ConstructorSection from '../widgets/ConstructorSection'
import Footer from '../widgets/Footer'
import GallerySection from '../widgets/GallerySection'
import HowItWorksSection from '../widgets/HowItWorksSection'
import { BenefitSection } from '@/widgets/BenefitSection'
import { QuestionSection } from '@/widgets/QuestionsSection'
import ConstructorSection2 from '@/widgets/ConstructorSection2'

export default function Home() {
  return (
    <div className="h-full w-full items-center justify-center">
      <ConstructorSection />
      <CasesSection />
      <HowItWorksSection />
      <BenefitSection />
      <GallerySection />
      <QuestionSection />
      <ConstructorSection2 />
      <Footer />
    </div>
  )
}
