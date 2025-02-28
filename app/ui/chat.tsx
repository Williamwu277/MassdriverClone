'use client'
import { useState } from "react"

export default function Chat(){

    const [ chat, setChat ] = useState(false);

    return (
        <>
            <div className="fixed bottom-6 right-6">   
                <div 
                    className="p-5 bg-gray-600 rounded-full hover:shadow-2xl hover:shadow-black/80 cursor-pointer"
                    onClick={() => setChat(!chat)}
                >
                    {
                        chat ?
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="4" y1="4" x2="20" y2="20" stroke="white" strokeWidth="2" stroke-linecap="round"/>
                            <line x1="4" y1="20" x2="20" y2="4" stroke="white" strokeWidth="2" stroke-linecap="round"/>
                        </svg>
                        :
                        <svg width="24" height="24" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M240.808 240.808H122.123C56.6994 240.808 3.45695 187.562 3.45695 122.122C3.45695 56.7031 56.6994 3.45697 122.124 3.45697C187.566 3.45697 240.808 56.7031 240.808 122.122V240.808Z" fill="#FFFFFF"></path></svg>
                    }
                </div>
                {
                    chat &&
                    <div className="absolute -top-10 -left-10 flex flex-col p-30 bg-blue-800">
                        <p>HI</p>
                    </div>
                }
            </div>
        </>
    )
}