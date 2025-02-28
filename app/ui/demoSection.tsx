import VideoPopup from "./videoPopup"
import Button from "./button"

export default function ExploreSection(){
    /* Deliver On-Demand, Self-Service of Standardized Infrastructure */


    return (
        <section className="flex flex-col gap-y-5 py-10 md:py-14 items-center w-full relative bg-white">
            <h1 className="text-2xl md:text-4xl text-black text-center max-w-3xl">
                Deliver On-Demand, Self-Service of Standardized Infrastructure
            </h1>
            <VideoPopup img="https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64c35b8d906b0993370872bb_video-placeholder.jpg" url="https://www.youtube.com/embed/Zd2SSE-iT3g?autoplay=1"/>
            <Button content="See a demo →" url="https://www.massdriver.cloud/demo"/>
        </section>
    )
}