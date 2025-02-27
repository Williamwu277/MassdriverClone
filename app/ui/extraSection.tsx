import Button from "./button"
import Image from "next/image"
import PodcastSection from "./podcastSection"
import CloudSection from "./cloudSection"



export default function TestimonialSection() {
    /* Extra Section */


    return (
        <>
        <section className="flex flex-col relative w-full items-center bg-cyan-950 py-16 px-6 overflow-hidden">
            <h1 className="text-4xl text-white mb-6 text-center max-w-[76rem]">
              How AMD Global Telemedicine Reduced Software Release Effort by 89%
            </h1>
            <div className="grid place-items-center grid-cols-[6fr_5fr] w-full mt-8 gap-x-16 max-w-[76rem] mb-[6rem]">
                <div className="flex flex-col bg-cyan-800 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-8">
                        <div className="text-white">
                            <p className="text-2xl">Chip McIntosh</p>
                            <p>Chief Innovation Officer</p>
                        </div>
                        <Image
                            src="https://www.massdriver.cloud/assets/649d16db05505718a723b2df/65e88e0dd0e42852e3a272ce_amd_logo_dark.png"
                            alt="amd global medicine"
                            width={200}
                            height={200}
                            className="h-16 w-auto object-contain"
                        />
                    </div>
                    <p className="text-md text-gray-400">
                        "Massdriver's platform has revolutionized our approach to infrastructure, saving us 89% of the time
                        spent managing infrastructure. Our operation could upscale by an order of magnitude, if not two, and we
                        would not be in crisis mode to hire somebody to manage infrastructure."
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-300 text-md mb-4">
                        Explore how AMD Global Telemedicine revolutionized their software deployment process, cutting down
                        release effort by 89% with Massdriver's cloud solutions. This case study is a must-read for those aiming
                        to scale efficiently and enhance team productivity through innovative cloud technology. Download now for
                        key insights.
                    </p>
                    <ul className="space-y-4 text-gray-300 mb-4">
                        <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2" />
                            <span>Reduced software release effort by 89% with Massdriver's cloud solutions.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2" />
                            <span>Managed a 100x workload surge without increasing engineering staff.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2" />
                            <span>Improved team collaboration and productivity ninefold.</span>
                        </li>
                    </ul>
                    <Button content="View Case Study →"/>
                </div>
            </div>
            <PodcastSection/>
            <div className="m-12"/>
            <CloudSection/>
            <h1 className="text-center mt-12 text-4xl max-w-2xl">We're confident Massdriver will transform how your team operates. Are you ready to simplify?</h1>
            <div className="grid grid-cols-3 w-fit mt-8">
                <Button content="Book a Demo →"/>
                <button className="rounded-lg border-[1px] border-white px-6 py-3 bg-cyan-950 text-white font-bold w-fit">Try Free Now →</button>
                <button className="rounded-lg border-[1px] border-white-400 px-6 py-3 bg-cyan-950 text-white font-bold w-fit">Get Our Newsletter →</button>
            </div>
            <img src="https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a77ff7fbb9f0a557f02e26_circle-accent.svg"
                className="absolute bottom-[-8rem] right-[-9rem]"/>
        </section>
        <div className="flex flex-col items-center w-full bg-cyan-800 p-3">
            <p className="hover:underline cursor-pointer">Need help persuading your manager?</p>
        </div>
        </>
      )
}

