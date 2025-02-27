import Image from "next/image"
import Link from "next/link"
import HeroSection from "./ui/heroSection"
import InstructionSection from "./ui/instructionSection"
import ExploreSection from "./ui/exploreSection"
import DemoSection from "./ui/demoSection"
import TestimonialSection from "./ui/testimonialSection"
import InfrastructureSection from "./ui/infrastructureSection"
import ExtraSection from "./ui/extraSection"
import QuestionsSection from "./ui/questionsSection"

export default function Home() {
  return (
    <div className="flex w-full flex-col">

      <main className="flex flex-col w-full">

        <HeroSection/>
        
        <InstructionSection/>

        <ExploreSection/>

        <TestimonialSection/>

        <DemoSection/>

        <InfrastructureSection/>

        <ExtraSection/>

        <QuestionsSection/>
        
      </main>

    </div>
  )
}

