'use client';
import { useState } from "react";
import Image from "next/image"

export default function VideoPopup(){

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

        {/* Thumbnail (Click to Open Modal) */}
        <div className="flex relative justify-center w-full">
            <Image
                src="https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/656ff2a2c5caa0c1115f8a97_observe.png"
                alt="Video Thumbnail"
                height={1000}
                width={1000}
                className="w-5/6 max-w-3xl rounded-lg shadow-lg cursor-pointer"
                onClick={() => setIsOpen(true)}
            />
            {/* Play button overlay */}
            <img onClick={() => setIsOpen(true)} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:opacity-75" src="https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64acf11aea05539a1f8e2e4a_YouTube_play_button.svg"/>
        </div>

        {/* Video Modal */}
        {isOpen && (
            <div 
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-85 z-50"
                onClick={() => setIsOpen(false)} // Close when clicking outside
            >
                <div className="flex justify-center items-center w-full max-w-[940px] aspect-video">
                    <iframe 
                        className="w-full h-full" 
                        src="https://www.youtube.com/embed/yxAPMfGR0jE?autoplay=1" 
                        title="Massdriver Homepage Demo 2024" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    />
                </div>
                <button className="absolute top-2 right-2 text-2xl" onClick={() => setIsOpen(false)}>
                ✖
                </button>
            </div>
        )}
        </>
    );
}