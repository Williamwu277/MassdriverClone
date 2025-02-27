import Image from "next/image"

const podcastPlatforms = [
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/66577e52b88045437b579c40_66577afaa5675eb7c1b2c6b4_youtube.png",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/66577e52c2bfc0e68c2d3a32_664c1770ec799132e602ea6e_664c10f1016fe1d8806fac65_iheartradio-p-500.jpg",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/66577e567059b7cbb815f747_spotify.svg",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/66577e579309796aa60a17a5_apple.svg",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/66577e52d66054674c47c096_664c16a017c251f113f1533b_664c0fbc424ff980146f5a64_5f32ca48b1479.webp",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/66577e52287781368f3f09fa_664c173dafad5ef55cce4723_pocketcasts.png",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/66577e52b524b2f3fd05ad35_664c171952be1664d32eb0ad_664c10558b26d72dc542db83_listen-notes-p-500.png",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/66577e52d66054674c47c0b7_664c16e1a0e4dc6f751af654_664c0fff746f5f1799c10fa3_audible-p-500.jpg"
]

const cloudSponsors = [
    {
        "name": "AWS",
        "url": "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a77f12b76f7d5c013f6b68_aws-partner.png",
        "size": "w-[6rem]"
    },
    {
        "name": "Microsoft Azure",
        "url": "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a77f12b76f7d5c013f6b89_microsoft-founders-hub.svg",
        "size": "w-[16rem]"
    },
    {
        "name": "Google Cloud",
        "url": "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a77f12280b697bca531a91_google-cloud.png/",
        "size": "w-[6rem]"
    }
]

export default function CloudSection() {
    /* we know the cloud */ 


    return (
        <div className="flex flex-col items-center rounded-lg bg-cyan-800 py-16 w-full max-w-[76rem]">
            <h2 className="text-4xl font-bold text-white mb-3">We know the cloud</h2>
            <div className="relative max-w-[45rem] mx-auto">
                {/* Quote */}
                <div className="bg-gray-100 rounded-lg p-8 relative">

                    <p className="text-lg text-gray-800 mb-6">
                        "We are partnering with innovative companies like Massdriver to help founders achieve more. As a part of
                        Microsoft for Startups Founders Hub, startups can now receive access to Massdriver's productivity tools,
                        designed to streamline cloud management and reduce infrastructure development time."
                    </p>

                    <span className="text-xs text-gray-900">Kirk Safford</span>
                    <span className="text-xs text-gray-500 ml-2">Director, Microsoft for Startups</span>

                    {/* Speech bubble nub */}
                    <img src="https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64f1995c72eb3ced2c76e82d_quote-corner.svg"
                        className="absolute -bottom-4 left-1/6 -translate-x-1/2 translate-y-1/2"/>
                    <img src="https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64f1995c9d95e948bb6000a0_quote-icon.svg"
                        className="h-[8rem] absolute -top-20 -left-20"/>
                </div>
            </div>
            <div className="border-[1px] border-gray-100 border-dashed w-full mt-24 mb-8" />
            <p className="text-xl text-center max-w-3xl">
                Built by a team of world-class cloud certified experts. Massdriver has passed rigorous CIS benchmarks for your favorite cloud's partnership network.
            </p>
            <div className="grid grid-cols-[auto_auto_auto] gap-x-8 w-fit place-items-center mt-6">
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