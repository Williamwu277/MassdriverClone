"use client";
import Button from "./button"
import { useState } from "react"



export default function QuestionsSection() {
    /* Questions and persuading your manager */

    const [ toggleSlider, setToggleSlider ] = useState(false);


    return (
        <>
            <div className={`relative flex flex-col w-full bg-cyan-800 overflow-hidden transition-all p-4 md:p-3 ${toggleSlider?"h-[10rem] md:h-[7rem]":"h-[3rem]"}`}>
                {/* Persuading manager section */}
                <p 
                    className={`text-xs md:text-base font-bold text-white text-center hover:underline cursor-pointer transition-opacity duration-500 ${toggleSlider?"opacity-0":"opacity-100"}`} 
                    onClick={()=>setToggleSlider(true)}
                >
                    Need help persuading your manager?
                </p>
                {/* Slide out portion */}
                <div className={`absolute flex flex-row justify-between items-center w-full text-white pl-6 pr-8 pt-3 pb-5 gap-x-3 transition-opacity duration-1000 ${toggleSlider?"opacity-100":"opacity-0 invisible"}`}>
                    <div>
                        <p className="text-xl mb-2">Cut the red tape.</p>
                        <p className="text-sm">Download the Massdriver pitch deck to convince them it&apos;s time for a true developer self-service.</p>
                    </div>
                    <a href="https://www.massdriver.cloud/assets/massdriver-pitch-deck-2025-01.pdf">
                        <div className="flex justify-center items-center hover:bg-cyan-600 rounded-lg cursor-pointer">
                            <svg className="w-[2rem] m-3" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 768"><path fill="white" d="M640 480v128c0 8.832-3.552 16.8-9.376 22.624s-13.792 9.376-22.624 9.376h-448c-8.832 0-16.8-3.552-22.624-9.376s-9.376-13.792-9.376-22.624v-128c0-17.664-14.336-32-32-32s-32 14.336-32 32v128c0 26.496 10.784 50.56 28.128 67.872s41.376 28.128 67.872 28.128h448c26.496 0 50.56-10.784 67.872-28.128s28.128-41.376 28.128-67.872v-128c0-17.664-14.336-32-32-32s-32 14.336-32 32zM416 402.752v-306.752c0-17.664-14.336-32-32-32s-32 14.336-32 32v306.752l-105.376-105.376c-12.512-12.512-32.768-12.512-45.248 0s-12.512 32.768 0 45.248l160 160c2.944 2.944 6.464 5.312 10.368 6.944s8.096 2.432 12.256 2.432c8.192 0 16.384-3.136 22.624-9.376l160-160c12.512-12.512 12.512-32.768 0-45.248s-32.768-12.512-45.248 0z"></path></svg>
                        </div>
                    </a>
                </div>
            </div>
            {/* Still have questions? section */}
            <div className="flex flex-col items-center py-12 px-6 bg-white">
                <h1 className="text-2xl md:text-4xl text-black">Still have questions?</h1>
                <p className="text-sm text-gray-500 mt-5 text-center">Check out our FAQs or ping us directly in our community Slack</p>
                <div className="grid grid-cols-1 md:grid-cols-2 w-fit gap-x-12 justify-items-center place-items-center mt-8">
                    <Button content="View the FAQ →" url="https://www.massdriver.cloud/faq"/>
                    <div className="flex flex-row w-fit gap-x-2 justify-center items-center p-3 cursor-pointer">
                        <img className="h-8" src="https://www.massdriver.cloud/assets/slack-icon-color.svg"/>
                        <a href="https://join.slack.com/t/massdrivercommunity/shared_invite/zt-1sxag35w2-eYw7gatS1hwlH2y8MCmwXA" className="text-black">Join us on Slack</a>
                    </div>
                </div>
            </div>
        </>
      )
}

