import Button from "./button"

export default function HeroSection(){
    /* Hero Section */
    return (
        <section className="flex flex-col relative items-center w-full text-center selection:text-white selection:bg-gray-600 bg-gradient-to-b from-white to-sky-100 py-12 md:py-24 overflow-hidden">
            {/* corner svg */}
            <img className="absolute top-[-5rem] right-[-6rem]" src="https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a7ac1334017c29afcc086a_shape.svg"></img>
            {/* Title */}
            <h1 className="text-2xl md:text-4xl lg:text-5xl w-5/6 font-medium text-gray-700 text-center">
                DevOps Without the Red Tape
            </h1>
            {/* Description */}
            <p className="mt-6 w-5/6 text-sm md:text-lg lg:text-xl text-gray-500 font-light">
                At Massdriver, we believe in prevention, not permission.
            </p>
            <p className="mt-6 w-5/6 max-w-sm md:max-w-2xl lg:max-w-3xl text-sm md:text-lg lg:text-xl text-gray-500 font-light">
                {"Our platform lets "}
                {/* help pop up */}
                <span className="underline relative group inline-block cursor-help">
                    "ops"
                    <span className="absolute pointer-events-none w-max bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-2 text-sm md:text-lg text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        Ops teams, DevOps teams, platform 
                        <br/>
                        teams—whatever your org calls it
                    </span>
                </span> 
                {" teams encode their expertise and your organization’s non-negotiables into preapproved self-service infrastructure powered by the IaC tools you already know."}
            </p>
            <p className="mt-6 w-5/6 text-sm md:text-lg lg:text-xl text-gray-500 font-light">
                Massdriver—Fast by default. Safe by design.
            </p>
            {/* Sign up */}
            <div className="mt-10 flex gap-4">
                <a href="https://www.massdriver.cloud/demo"><button className="rounded-md border-[1px] border-blue-400 px-6 py-3 bg-white text-blue-400 font-medium">See a demo</button></a>
                <Button content="Start free trial →" url="https://app.massdriver.cloud/register"/>
            </div>
        </section>
    )
}