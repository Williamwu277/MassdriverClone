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

export default function PodcastSection() {
    /* Podcast links */


    return (
        <div className="flex flex-col items-center rounded-lg bg-white p-8 md:p-12 w-full max-w-3xl">
            {/* links */}
            <h2 className="text-black text-xl md:text-3xl tracking-tight uppercase">Platform Engineering</h2>
            <p className="text-black text-xs md:text-sm uppercase tracking-widest mb-4">Podcast</p>
            <p className="text-gray-600 font-light max-w-xl mx-auto text-center mb-10 text-sm md:text-base">
                This podcast caters to professionals and enthusiasts passionate about the intricacies of platform
                architecture, cloud operations, and scaling DevOps practices.
            </p>
            <p className="text-sm text-black uppercase mb-4">Listen to the Podcast</p>
            {/* logos */}
            <div className="grid grid-cols-4 sm:flex sm:flex-wrap lg:grid-cols-8 justify-center gap-6">
                {podcastPlatforms.map((platform, index) => (
                    <Image
                        className="h-12 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-110"
                        src={platform}
                        alt={index + " icon"}
                        key={index}
                        width={200}
                        height={200}
                    />
                ))}
            </div>
        </div>
    )
}
