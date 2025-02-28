import Link from "next/link"
import Button from "./button"


const sections = ["Features ▼", "Solutions ▼", "Pricing", "Blog", "Docs", "Templates", "Community ▼"];


export default function NavSection(){
    /* Navbar component */

    return (
        <header className="flex items-center justify-center sticky top-0 z-50 w-full border-b-[1px] border-gray-300 bg-gray-100">
            <div className="grid p-5 grid-cols-[auto_auto_auto] place-items-center w-full max-w-[88rem]">
                {/* logo */}
                <Link href="/" className="flex justify-start space-x-2 w-[8rem] md:w-[10rem]">
                    <img src="https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64b77733fbfa9c69e4082105_massdriver-logomark%201.svg"/>
                </Link>
                <div className="flex flex-1 justify-between space-x-2">
                    {/* section headers */}
                    <div className="hidden lg:flex">
                        {sections.map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className="px-4 py-2 font-bold text-xs text-muted-foreground hover:text-foreground text-black"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* sign in */}
                <div className="flex items-center gap-x-3">
                    <a href="https://app.massdriver.cloud/login" className="text-sm hover:underline text-black font-bold">
                    Sign in
                    </a>
                    <Button content="Try Free →"/>
                </div>
            </div>
        </header>
    )
}