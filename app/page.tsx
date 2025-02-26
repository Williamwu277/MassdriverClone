import Image from "next/image"
import Link from "next/link"
import HeroSection from "./ui/heroSection"
import InstructionSection from "./ui/instructionSection"
import ExploreSection from "./ui/exploreSection"

export default function Home() {
  return (
    <div className="flex w-full flex-col">

      <main className="flex flex-col w-full">

        <HeroSection/>
        
        <InstructionSection/>

        <ExploreSection/>

        {/* Infrastructure Section */}
        <section className="bg-slate-950 py-24 text-white">
          <div className="container">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">Infrastructure at the Speed of Thought</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
              Enable developer self-service without risking compliance, security, cost, or reliability.
            </p>

            <div className="mt-24 grid gap-24">
              {/* Cloud Service Catalog */}
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-bold sm:text-3xl">Cloud Service Catalog</h3>
                  <p className="mt-4 text-muted-foreground">
                    Your DevOps teams have a lot on their plate, don't lose another great teammate to burnout.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    Enable developers to self-serve cloud infrastructure from approved IaC templates in a central
                    catalog.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    Developers drag, connect, and deploy. No more last minute Jira tickets to the DevOps team.
                  </p>
                </div>
                <div className="relative">
                  {/*<Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-26%20at%2012.08.09%E2%80%AFPM-BwDWARlCE3XbBl77WU8LyJBlEdcP7m.png"
                    alt="Cloud Service Catalog"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />*/}
                </div>
              </div>

              {/* Cost & Health Insights */}
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:grid-flow-col-dense">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-bold sm:text-3xl">Cost & Health Insights</h3>
                  <p className="mt-4 text-muted-foreground">
                    Get a clear view of your cloud's health and costs right where your developers manage their
                    infrastructure.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    With real-time insights, you can make proactive adjustments, ensuring systems are efficient and
                    cost-effective.
                  </p>
                  <p className="mt-4 text-muted-foreground">Never get caught with a surprise cloud bill again.</p>
                </div>
                <div className="relative lg:col-start-1">
                  {/*<Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-26%20at%2012.08.09%E2%80%AFPM-BwDWARlCE3XbBl77WU8LyJBlEdcP7m.png"
                    alt="Cost & Health Insights"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />*/}
                </div>
              </div>

              {/* Inventory & Audit Records */}
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-bold sm:text-3xl">Inventory & Audit Records</h3>
                  <p className="mt-4 text-muted-foreground">
                    Get instant visibility into every asset, streamline your workflows, and keep your projects moving
                    forward efficiently.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    Say goodbye to the chaos of scattered resources and hello to seamless, organized control.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    No more hunting for assets or piecing together the puzzle of your cloud infrastructure.
                  </p>
                </div>
                <div className="relative">
                  {/*<Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-26%20at%2012.08.09%E2%80%AFPM-BwDWARlCE3XbBl77WU8LyJBlEdcP7m.png"
                    alt="Inventory & Audit Records"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />*/}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="bg-slate-950 py-24 text-white">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-3xl font-bold sm:text-4xl">
                How AMD Global Telemedicine Reduced Software Release Effort by 89%
              </h2>
              <div className="mt-12 grid gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="font-medium">Chip McIntosh</div>
                    <div className="text-sm text-muted-foreground">Chief Innovation Officer</div>
                  </div>
                  <blockquote className="text-lg">
                    "Massdriver's platform has revolutionized our approach to infrastructure, saving us 89% of the time
                    spent managing infrastructure. Our operation could upscale by an order of magnitude, if not two, and
                    we would not be in crisis mode to hire somebody to manage infrastructure."
                  </blockquote>
                  <button>View Case Study →</button>
                </div>
                <div className="relative">
                  {/*<Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-26%20at%2012.09.42%E2%80%AFPM-QFLsD19kUffD4KRYd2OP3Q5YPPaOQR.png"
                    alt="AMD Global Telemedicine"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />*/}
                </div>
              </div>

              {/* Platform Engineering Podcast */}
              <div className="mt-24 rounded-xl bg-white p-8 text-slate-950">
                <h3 className="text-center text-xl font-bold uppercase tracking-wide">Platform Engineering</h3>
                <p className="mt-4 text-center text-muted-foreground">
                  This podcast caters to professionals and enthusiasts passionate about the intricacies of platform
                  architecture, cloud operations, and scaling DevOps practices.
                </p>
                <div className="mt-8">
                  <div className="text-center font-medium">LISTEN TO THE PODCAST</div>
                  <div className="mt-4 flex justify-center gap-4">
                    {["YouTube", "Apple Podcasts", "Spotify", "iTunes", "Amazon Music", "Google Podcasts", "RSS"].map(
                      (platform) => (
                        <button key={platform} className="h-10 w-10">
                          <span className="sr-only">{platform}</span>
                          <div className="h-6 w-6 rounded-full bg-slate-200" />
                        </button>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Cloud Quote */}
              <div className="mt-24 text-center">
                <h3 className="text-3xl font-bold">We know the cloud</h3>
                <blockquote className="mx-auto mt-8 max-w-3xl rounded-lg bg-slate-900 p-8">
                  "We are partnering with innovative companies like Massdriver to help founders achieve more. As a part
                  of Microsoft for Startups Founders Hub, startups can now receive access to Massdriver's productivity
                  tools, designed to streamline cloud management and reduce infrastructure development time."
                  <footer className="mt-4 text-sm">
                    <cite className="font-medium">Kirk Safford</cite>
                    <div className="text-muted-foreground">Director, Microsoft for Startups</div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-950 py-24 text-center text-white">
          <div className="container">
            <h2 className="text-3xl font-bold">
              We're confident Massdriver will
              <br />
              transform how your team operates.
              <br />
              Are you ready to simplify?
            </h2>
            <div className="mt-10 flex justify-center gap-4">
              <button >
                Book a Demo
              </button>
              <button>
                Try Free Now
              </button>
              <button>
                Get our Newsletter
              </button>
            </div>
          </div>
        </section>
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

