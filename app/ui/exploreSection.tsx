import Image from "next/image"
import VideoPopup from "./videoPopup"

export default function ExploreSection(){
    /* See Wnat's Possible with Massdriver's IaC-Powered Platform */

    const cloudSponsors = [
        {
            "name": "Google Cloud",
            "url": "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a77f12280b697bca531a91_google-cloud.png/",
            "size": "w-[3rem]"
        },
        {
            "name": "AWS",
            "url": "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a77f12b76f7d5c013f6b68_aws-partner.png",
            "size": "w-[3rem]"
        },
        {
            "name": "Microsoft Azure",
            "url": "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/6525f5938c508e0a376a808a_microsoft-startups.svg",
            "size": "w-[10rem]"
        }
    ]

    const ventureSponsors = [
        {
            "name": "Y Combinator",
            "url": "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a88bff08bfaa50ce12aecd_yc.png",
            "size": "w-[3rem]"
        },
        {
            "name": "Builders VC",
            "url": "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64e2a461333767c273ac7376_builders-dark-p-500.png",
            "size": "w-[12rem]"
        },
        {
            "name": "1984",
            "url": "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a88bff08bfaa50ce12aec9_1984-vc.png",
            "size": "w-[3rem]"
        }
    ]

    return (
        <section className="flex flex-col items-center w-full relative overflow-hidden bg-gradient-to-b from-sky-100 to-white py-10">
            <img className="absolute top-[-5rem] right-0" src="https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a7ac1334017c29afcc086a_shape.svg"></img>
            <h1 className="text-black text-center text-3xl sm:text-4xl mb-8">
                See What's Possible with Massdriver's IaC-Powered Platform
            </h1>
            <VideoPopup/>
            <div className="grid grid-cols-2 w-fit gap-x-20 place-content-center mt-10 mb-3">
                <p className="text-center text-lg text-gray-400">CLOUD CERTIFIED</p>
                <p className="text-center text-lg text-gray-400">VC BACKED</p>
                <div className="grid grid-cols-[auto_auto_auto] gap-x-8 w-fit place-content-center mt-6">
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
                <div className="grid grid-cols-[auto_auto_auto] gap-x-8 w-fit place-content-center mt-6">
                    {
                        ventureSponsors.map(v => {
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
        </section>
    )
}