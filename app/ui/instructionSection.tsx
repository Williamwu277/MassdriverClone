'use client';
import { useState } from "react"
import Image from "next/image"

const content = [
    {
        title: "Ops Teams Write IaC",
        desc: `DevOps and Platform teams use the infrastructure-as-code tools they know, 
                such as Terraform / OpenTofu, Helm, or CloudFormation, and package them into
                use-case-specific modules with your policy tooling built in.`,
        bold: `Your IaC is no longer just config, its a functional software asset. Policy 
                and cost tools are embedded, cutting down maintenance for Ops teams.`,
        url: "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/66170749b76c8a177e5a9bc1_package-p-800.webp"
    },
    {
        title: "Ops Teams Publish Modules",
        desc: `Bundled modules are published in the Massdriver Service Catalog, where developers
                can easily discover supported cloud services and applications with your organization's
                compliance, security, and guardrails in place.`,
        bold: `A central repository for provisioning, policy, and cost controls of your cloud resources.`,
        url: "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/66170749dffdf98ba19852e1_publish-p-800.webp"
    },
    {
        title: "Devs Diagram to Provision",
        desc: `Developers diagram what they want and your IaC modules are used to provision. Developers
         don't have to copy Helm Charts or Terraform Modules. They don't have brittle IaC pipelines.
          Instead, Massdriver uses your modules to provision and builds ephemeral CI/CD pipelines behind
           the scenes based on the tooling in your modules.`,
        bold: `Say goodbye to 100's of brittle IaC pipelines.`,
        url: "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/66170749f3b56aa4e994d6d2_production-p-800.webp"
    }
]

export default function InstructionSection(){
    /* How It Works Section */

    const [page, setPage] = useState(0);

    function pageHandler(id: number){
        setPage(id);
    }

    return (
        <section className="flex flex-col items-center bg-slate-800 py-8 md:py-14 gap-y-7 md:gap-y-14 px-6">
            {/* Title */}
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl">How it Works</h1>
            <div className="flex flex-col items-center py-3 px-3 md:px-8 gap-y-2 md:gap-y-8 border-slate-400 border-[1px] w-full max-w-[95rem]">
                {/* Navigation */}
                <div className="grid grid-cols-3 w-full max-w-xl text-md md:text-xl justify-items-center text-gray-500">
                    <button className={(page===0?"text-white":"hover:text-gray-400")+" transition-colors duration-300"} onClick={() => pageHandler(0)}>1. Code</button>
                    <button className={(page===1?"text-white":"hover:text-gray-400")+" transition-colors duration-300"} onClick={() => pageHandler(1)}>2. Publish</button>
                    <button className={(page===2?"text-white":"hover:text-gray-400")+" transition-colors duration-300"} onClick={() => pageHandler(2)}>3. Diagram</button>
                </div>
                {/* Page render */}
                <div className="grid relative grid-cols-1 md:grid-cols-[1fr_2fr] w-full h-full">
                    <div className="flex flex-col justify-self-center gap-y-6 mt-3 mb-6 text-white">
                        <p className="text-xl">{content[page].title}</p>
                        <p className="text-sm font-light md:font-normal [word-spacing:0.2em]">{content[page].desc}</p>
                        <p className="text-sm font-bold [word-spacing:0.2em]">{content[page].bold}</p>
                    </div>
                    <Image 
                        className="place-self-center justify-self-center mb-6 w-full md:w-5/6"
                        src={content[page].url}
                        alt={"1. Code"}
                        width={1000}
                        height={1000}
                    />
                    <div className="absolute bottom-8 left-1/2 md:left-2/3 -translate-x-1/2 bg-slate-600 text-white opacity-75 text-xs px-3 py-1 rounded-lg">
                        {page + 1} / {content.length}
                    </div>
                </div>
            </div>
        </section>
    )
}