import Image from "next/image"
import VideoPopup from "./videoPopup"

const cloudSponsors = [
    {
        "name": "Google Cloud",
        "url": "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a77f12280b697bca531a91_google-cloud.png/",
        "size": "w-[3rem] md:w-[4rem] lg:w-[3rem]"
    },
    {
        "name": "AWS",
        "url": "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a77f12b76f7d5c013f6b68_aws-partner.png",
        "size": "w-[3rem] md:w-[4rem] lg:w-[3rem]"
    },
    {
        "name": "Microsoft Azure",
        "url": "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/6525f5938c508e0a376a808a_microsoft-startups.svg",
        "size": "w-[9rem] md:w-[14rem] lg:w-[10rem]"
    }
]

const ventureSponsors = [
    {
        "name": "Y Combinator",
        "url": "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a88bff08bfaa50ce12aecd_yc.png",
        "size": "w-[3rem] md:w-[4rem] lg:w-[3rem]"
    },
    {
        "name": "Builders VC",
        "url": "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64e2a461333767c273ac7376_builders-dark-p-500.png",
        "size": "w-[10rem] md:w-[16rem] lg:w-[12rem]"
    },
    {
        "name": "1984",
        "url": "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a88bff08bfaa50ce12aec9_1984-vc.png",
        "size": "w-[3rem] md:w-[4rem] lg:w-[3rem]"
    }
]

export default function ExploreSection(){
    /* See What's Possible with Massdriver's IaC-Powered Platform */

    return (
        <section className="flex flex-col items-center w-full relative overflow-hidden bg-gradient-to-b from-sky-100 to-white py-10">
            {/* corner svg */}
            <img className="absolute top-[-5rem] right-[-3rem]" src="https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a7ac1334017c29afcc086a_shape.svg"></img>
            {/* title */}
            <h1 className="text-black text-center w-3/4 text-2xl md:text-4xl mb-8">
                See What&apos;s Possible with Massdriver&apos;s IaC-Powered Platform
            </h1>
            {/* video */}
            <VideoPopup img="https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/656ff2a2c5caa0c1115f8a97_observe.png" url="https://www.youtube.com/embed/yxAPMfGR0jE?autoplay=1"/>
            {/* certification section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 w-fit gap-x-20 gap-y-12 place-content-center mt-10 mb-3">
                <div className="flex flex-col items-center">
                    <p className="text-center text-lg text-gray-400">CLOUD CERTIFIED</p>
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
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-center text-lg text-gray-400">VC BACKED</p>
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
            </div>
        </section>
    )
}