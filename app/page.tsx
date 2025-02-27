import Image from "next/image"
import Link from "next/link"
import HeroSection from "./ui/heroSection"
import InstructionSection from "./ui/instructionSection"
import ExploreSection from "./ui/exploreSection"
import DemoSection from "./ui/demoSection"
import TestimonialSection from "./ui/testimonialSection"
import InfrastructureSection from "./ui/infrastructureSection"
import ExtraSection from "./ui/extraSection"

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
        
      </main>

      <footer className="border-t bg-slate-50">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              {/*<Link href="/" className="flex items-center space-x-2">
                <Image src="/placeholder.svg" alt="Logo" width={32} height={32} />
                <span className="font-semibold">massdriver</span>
              </Link>*/}
            </div>
            {["Marketplace", "Templates", "Solutions", "Resources"].map((section) => (
              <div key={section}>
                <h3 className="mb-4 text-sm font-semibold">{section}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i}>
                      <Link href="#" className="hover:text-foreground">
                        Link {i}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Massdriver, Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

