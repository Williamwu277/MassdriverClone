"use client";
import { useState, useRef } from "react";
import Button from "./button"


const sections = [
    {
        title: "Cloud Service Catalog",
        desc: [
            "Your DevOps teams have a lot on their plate, don't lose another great teammate to burnout.",
            "Enable developers to self-serve cloud infrastructure from approved IaC templates in a central catalog.",
            "Developers drag, connect, and deploy. No more last minute Jira tickets to the DevOps team."
        ],
        video: "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/6616fbcfbcb3de08831ec767_catalog-transcode.mp4"
    },
    {
        title: "Cost & Health Insights",
        desc: [
            "Get a clear view of your cloud's health and costs right where your developers manage their infrastructure.",
            "With real-time insights, you can make proactive adjustments, ensuring systems are efficient and cost-effective.",
            "Never get caught with a surprise cloud bill again."
        ],
        video: "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/6616fe02b28533fff5f58980_cost-transcode.mp4"
    },
    {
        title: "Inventory & Audit Records",
        desc: [
            "Get instant visibility into every asset, streamline your workflows, and keep your projects moving forward efficiently.",
            "Say goodbye to the chaos of scattered resources and hello to seamless, organized control.",
            "No more hunting for assets or piecing together the puzzle of your cloud infrastructure."
        ],
        video: "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/6616fe81dd1bdb3e48d7064c_audit-transcode.mp4"
    },
]


export default function TestimonialSection() {
    /* Infrastructure Section */

    const [videoState, setVideoState] = useState<boolean[]>([true, true, true]);
    const videoRefs = [
        useRef<HTMLVideoElement>(null),
        useRef<HTMLVideoElement>(null),
        useRef<HTMLVideoElement>(null)
    ]

    function handlePause(index: number){
        if(videoRefs[index].current == null) return;
        let newState = [...videoState];
        newState[index] = !newState[index];
        setVideoState(newState);
        if(newState[index]){
            videoRefs[index].current.play();
        }else{
            videoRefs[index].current.pause();
        }
    }



    return (
        <section className="flex flex-col items-center bg-slate-800 py-16 px-8 text-white">
            <h1 className="text-4xl font-bold text-center">Infrastructure at the Speed of Thought</h1>
            <p className="mt-4 max-w-[30rem] text-center text-lg">
                Enable developer self-service without risking compliance, security, cost, or reliability.
            </p>
            {
                sections.map((section, index) => {
                    if(index % 2 === 1){
                        return (
                            <div 
                                key={index}
                                className="grid relative place-items-center grid-cols-[3fr_2fr] w-full h-full mt-12 max-w-[76rem] gap-x-8"
                            >
                                <video 
                                    ref={videoRefs[index]}
                                    width="800"
                                    height="450"
                                    autoPlay
                                    loop
                                >
                                    <source src={section.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <img 
                                    className="absolute bottom-4 left-4 cursor-pointer" 
                                    src={
                                        videoState[index]?
                                        "https://www.massdriver.cloud/assets/6022af993a6b2191db3ed10c/628299f8aa233b83918e24fd_Pause.svg":
                                        "https://www.massdriver.cloud/assets/6022af993a6b2191db3ed10c/628298b20ae0236682d4b87f_Play-24.svg"
                                    }
                                    onClick={() => handlePause(index)}
                                />
                                <div className="flex flex-col gap-y-6 mt-3 mb-6">
                                    <p className="text-4xl">{section.title}</p>
                                    <p className="text-sm">{section.desc[0]}</p>
                                    <p className="text-sm">{section.desc[1]}</p>
                                    <p className="text-sm">{section.desc[2]}</p>
                                </div>
                            </div>
                        )
                    }
                    return (
                        <div 
                            key={index}
                            className="grid relative place-items-center grid-cols-[2fr_3fr] w-full h-full mt-12 max-w-[76rem] gap-x-8"
                        >
                            <div className="flex flex-col gap-y-6 mt-3 mb-6">
                                <p className="text-4xl">{section.title}</p>
                                <p className="text-sm">{section.desc[0]}</p>
                                <p className="text-sm">{section.desc[1]}</p>
                                <p className="text-sm">{section.desc[2]}</p>
                            </div>
                            <video 
                                ref={videoRefs[index]}
                                width="800"
                                height="450"
                                autoPlay
                                loop
                            >
                                <source src={section.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <img 
                                className="absolute bottom-4 right-4 cursor-pointer" 
                                src={
                                    videoState[index]?
                                    "https://www.massdriver.cloud/assets/6022af993a6b2191db3ed10c/628299f8aa233b83918e24fd_Pause.svg":
                                    "https://www.massdriver.cloud/assets/6022af993a6b2191db3ed10c/628298b20ae0236682d4b87f_Play-24.svg"
                                }
                                onClick={() => handlePause(index)}
                            />
                        </div>
                    )
                })
            }
            <span className="m-6"/>
            <Button content="See a demo →"/>
        </section>
    ) 
}

