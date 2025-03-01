'use client'
import Link from "next/link"
import Button from "./button"
import { useState, useEffect } from "react"

const dropdownSections = [
    {
        title: "Features",
        link: ""
    },
    {
        title: "Solutions",
        link: ""
    },
    {
        title: "Pricing",
        link: "https://www.massdriver.cloud/pricing"
    },
    {
        title: "Blog",
        link: "https://www.massdriver.cloud/blog"
    },
    {
        title: "Docs",
        link: "https://docs.massdriver.cloud/"
    },
    {
        title: "Templates",
        link: "https://www.massdriver.cloud/templates"
    },
    {
        title: "Community",
        link: ""
    }
];


export default function NavSection(){
    /* Navbar component */

    const [expand, setExpand] = useState(false);

    // if window gets resized above a "lg" screen, automatically close the dropdown
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth > 1024){
                setExpand(false);
            }
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="z-30 flex items-center justify-center sticky top-0 w-full border-b-[1px] border-gray-300 bg-gray-50">
            <div className="z-40 bg-gray-50 grid p-5 grid-cols-[auto_auto_auto] w-full max-w-[80rem]">
                {/* logo */}
                <Link href="/" className="flex justify-start space-x-2 w-[8rem] md:w-[10rem]">
                    <img src="https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64b77733fbfa9c69e4082105_massdriver-logomark%201.svg"/>
                </Link>
                <div className="flex flex-1 justify-between">
                    {/* section headers */}
                    <div className="hidden lg:flex place-items-center">
                        {dropdownSections.map((item) => (
                            <a
                                key={item.title}
                                href={item.link}
                                className={`px-4 py-2 font-medium text-xs xl:text-sm cursor-pointer transition-colors duration-250 ${(item.link===''?"hover:text-gray-500":"hover:text-blue-500")} text-black`}
                            >
                                {item.title} {item.link===""&&"▼"}
                            </a>
                        ))}
                    </div>
                </div>
                {/* sign in */}
                <div className="hidden lg:flex justify-end items-center gap-x-3">
                    <a href="https://app.massdriver.cloud/login" className="text-sm transition-colors duration-250 hover:text-blue-500 text-black font-medium">
                    Sign in
                    </a>
                    <Button content="Try Free →" url="https://app.massdriver.cloud/register"/>
                </div>
                {/* expansion option (smaller screens) */}
                <div className="flex lg:hidden justify-end items-center">
                    <svg 
                        onClick={() => setExpand(!expand)} 
                        className="cursor-pointer" 
                        width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path><path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path><path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"></path>
                    </svg>
                </div>
            </div>
            {/* drop down navigation bar */}
            <div className={`lg:hidden absolute top-0 h-[100dvh] w-full flex flex-col items-center gap-y-3 bg-white transition-all duration-500 ease-in-out ${expand?"translate-y-0":"-translate-y-full"}`}>
                {/* section options */}
                <div className="flex flex-col w-full mt-[76px] md:mt-[82px]">
                    {dropdownSections.map((item) => (
                        <a href={item.link} key={item.title}>
                            <div
                                className={`flex flex-row w-full justify-between px-1 py-2 border-b-[1px] border-gray-300 transition-colors duration-250 text-black ${item.link===""?"hover:text-gray-200":"hover:text-blue-500"}`}
                            >
                                <p className="px-4 py-2 font-medium text-sm xl:text-sm">{item.title}</p>
                                { (item.link === "") &&
                                    <p className="pr-2">▼</p>
                                }
                            </div>
                        </a>
                    ))}
                </div>
                {/* buttons */}
                <a href="https://app.massdriver.cloud/login"><button className="rounded-md border-[1px] border-blue-400 px-6 py-3 bg-white text-blue-400 font-medium">Sign In</button></a>
                <Button content="Try Free →" url="https://app.massdriver.cloud/register"/>
            </div>
        </header>
    )
}