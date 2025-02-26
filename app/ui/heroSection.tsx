import Button from "./button"

export default function HeroSection(){
    /* Hero Section */
    return (
        <section className="flex flex-col items-center w-full text-center selection:text-white selection:bg-gray-600 bg-white py-24">
            <h1 className="text-5xl font-bold text-gray-700">
                DevOps Without the Red Tape
            </h1>
            <p className="mt-6 text-xl text-gray-500">
                At Massdriver, we believe in prevention, not permission.
            </p>
            <p className="mt-6 max-w-3xl text-xl text-gray-500">
                {"Our platform lets "}
                <span className="underline relative group inline-block cursor-help">
                    "ops"
                    <span className="absolute pointer-events-none w-max bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-2 text-lg text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        Ops teams, DevOps teams, platform 
                        <br/>
                        teams—whatever your org calls it
                    </span>
                </span> 
                {" teams encode their expertise and your organization’s non-negotiables into preapproved self-service infrastructure powered by the IaC tools you already know."}
            </p>
            <p className="mt-6 text-xl text-gray-500">
                Massdriver—Fast by default. Safe by design.
            </p>
            <div className="mt-10 flex gap-4">
                <button className="rounded-lg border-[1px] border-blue-400 px-6 py-3 bg-white text-blue-400 font-bold">See a demo</button>
                <Button content="Start free trial →"/>
            </div>
        </section>
    )
}