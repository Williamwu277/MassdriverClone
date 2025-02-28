import Image from "next/image"

const cloudSponsors = [
    {
        "name": "AWS",
        "url": "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a77f12b76f7d5c013f6b68_aws-partner.png",
        "size": "w-[3rem] md:w-[6rem]"
    },
    {
        "name": "Microsoft Azure",
        "url": "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a77f12b76f7d5c013f6b89_microsoft-founders-hub.svg",
        "size": "w-[8rem] md:w-[16rem]"
    },
    {
        "name": "Google Cloud",
        "url": "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a77f12280b697bca531a91_google-cloud.png/",
        "size": "w-[3rem] md:w-[6rem]"
    }
]

export default function CloudSection() {
    /* we know the cloud */ 


    return (
        <div className="flex flex-col items-center rounded-lg bg-cyan-800 py-8 md:py-16 w-full max-w-[76rem]">
            {/* Title */}
            <h2 className="text-2xl md:text-4xl text-white mb-3 mt-6 md:mt-0">We know the cloud</h2>
            <div className="relative w-5/6 max-w-[45rem] mx-auto">
                {/* Quote */}
                <div className="bg-gray-100 rounded-lg p-6 relative">

                    <p className="text-sm md:text-lg text-gray-800 mb-6">
                        "We are partnering with innovative companies like Massdriver to help founders achieve more. As a part of
                        Microsoft for Startups Founders Hub, startups can now receive access to Massdriver's productivity tools,
                        designed to streamline cloud management and reduce infrastructure development time."
                    </p>

                    <span className="text-xs font-bold text-gray-700">Kirk Safford</span>
                    <span className="block md:inline text-xs text-gray-500 ml-2">Director, Microsoft for Startups</span>

                    {/* Speech bubble nub */}
                    <img src="https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64f1995c72eb3ced2c76e82d_quote-corner.svg"
                        className="absolute -bottom-4 left-1/4 -translate-x-1/2 translate-y-1/2"/>
                    <img src="https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64f1995c9d95e948bb6000a0_quote-icon.svg"
                        className="h-[8rem] absolute -top-20 -left-20 hidden md:block"/>
                </div>
            </div>
            {/* breakpoint */}
            <div className="border-[1px] border-gray-100 border-dashed w-full mt-24 mb-8" />
            <p className="text-sm md:text-xl text-center max-w-3xl text-gray-400 w-3/4">
                Built by a team of world-class cloud certified experts. Massdriver has passed rigorous CIS benchmarks for your favorite cloud's partnership network.
            </p>
            {/* logos */}
            <div className="grid grid-cols-[auto_auto_auto] gap-x-4 md:gap-x-8 w-fit place-items-center mt-6">
                {
                    cloudSponsors.map(v => {
                        return (
                            <Image 
                                key = {v.name}
                                className={v.size}
                                src={v.url}
                                alt={v.name}
                                height={200}
                                width={200}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}