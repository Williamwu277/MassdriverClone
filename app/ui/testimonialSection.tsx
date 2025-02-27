"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import Button from "./button"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"

const testimonials = [
    {
      quote: "Massdriver is incredibly easy to use, and makes best practices for operations approachable even for novices. Despite this, it also provides immense power to more advanced users.",
      author: "Zachary Hueras",
      title: "Principle Software Engineer",
      logo: "https://www.massdriver.cloud/assets/649d16db05505718a723b2df/65d39a4b61b3cfdaf779659c_AMD-logo.png",
      case: "View AMD Case Study →",
      stats: "AMD Global Telemedicine experienced an 89% reduction in \"DevOps\" tasks and saw ROI in about 10 days."
    },
    {
      quote: "Massdriver is a must for small teams that don’t have the resources for a dedicated DevOps team, as it significantly simplifies and improves their deployment processes. It is also a great tool for bigger teams as it follows best practices when provisioning infrastructure and modernizes processes by using Infrastructure as Code.",
      author: "Ivan Ivanov",
      title: "Head of Engineering",
      logo: "https://www.massdriver.cloud/assets/649d16db05505718a723b2df/65d3995730fbec7d65ac5b18_gamestake-p-500.png",
      case: "View GameStake Case Study →",
      stats: "GameStake saved 25% on their cloud costs by adopting Massdriver."
    },
    {
      quote: "We are partnering with innovative companies like Massdriver to help founders achieve more. As a part of Microsoft for Startups Founders Hub, startups can now receive access to Massdriver's productivity tools, designed to streamline cloud management and reduce infrastructure development time.",
      author: "Kirk Safford",
      title: "Director",
      logo: "https://www.massdriver.cloud/assets/649d16db05505718a723b2df/65d39b472184fbdd39992664_microsoft-founders-hub.png",
      case: "", 
      stats: ""
    },
    {
      quote: "Their proactive approach to user feedback, coupled with the platform's open-source nature, ensures it remains an essential tool in our DevOps arsenal.",
      author: "Valeriy Tverdohleb",
      title: "CTO",
      logo: "https://www.massdriver.cloud/assets/649d16db05505718a723b2df/65d39918479620018d69aa57_vp-p-500.png",
      case: "", 
      stats: ""
    },
    {
      quote: "Massdriver is a comprehensive platform engineering solution that combines ease of use with robust functionality. Its focus on compliance, security, and cost-effectiveness makes it a valuable tool for organizations of all sizes.",
      author: "Minith Jain",
      title: "Founding Engineer",
      logo: "https://www.massdriver.cloud/assets/649d16db05505718a723b2df/65d3989be61427c51ea48c3b_energos-p-500.png",
      case: "", 
      stats: ""
    },
    {
      quote: "As an engineer who no longer has their own DevOps team, Massdriver is a great abstraction for a team who wants to move away from their PaaS, but doesn’t want to go completely to the IaaS side.",
      author: "Elijah Kim",
      title: "Senior Software Engineer",
      logo: "https://www.massdriver.cloud/assets/649d16db05505718a723b2df/65d39a05e63dedb683bc5fd7_invibe-p-500.png",
      case: "", 
      stats: ""
    },
]

const featuredIn = [
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/6602151061ba9c9405dc641a_Microsoft%20logo%20%201.svg",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/660215c953ef4eed71e1b9db_tc.svg",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/660215c95d90ccaee4794f60_Group%2037704.svg",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/660215c9a8496bbc4f258658_Product%20Hunt%201.svg",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/660215cab280f05b2e4f8f88_DevOps%20Logo%20TSG%201.png",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/660215c9d40de5504d384429_AWS%20reInvent%20Highlights%20Logo%201.png",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/660215c9896b7b00f39e168a_image%2012.png",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/660215c906aae38c39da85d7_SL%20Mix%20Logo%201.svg",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/660215ca6f7f77cb2bcc9ab2_LABJ%20logo%20white%20horizontal%201.png",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/660215ca936e70fb1765761c_Massdriver%20Raises%201.png"
]

export default function TestimonialSection() {

    return (
        <section className="flex flex-col items-center bg-slate-800 py-24 gap-y-14 overflow-hidden h-auto">
            <h1 className="text-4xl font-bold text-white">Loved by DevOps and Software Engineers</h1>
            <div className="container relative h-auto max-w-[78rem] px-3">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    loop={true}
                    autoHeight={true}
                    breakpoints={{
                        500: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        780: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1140: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="flex flex-col bg-white rounded-lg h-full min-h-[32rem]">
                            {testimonial.stats!=="" &&
                                <p className="text-white bg-slate-900 py-4 px-6 rounded-t-md">{testimonial.stats}</p>
                            }
                            <div className="flex flex-col py-4 px-6 h-fitrelative">
                                <p className="text-lg text-gray-800 mb-3">{testimonial.quote}</p>
                                {testimonial.case !== "" && 
                                    <p className="text-sky-600 cursor-pointer">{testimonial.case}</p>
                                }
                                <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-900">{testimonial.author}</p>
                                        <p className="text-gray-600">{testimonial.title}</p>
                                    </div>
                                    <Image
                                        src={testimonial.logo}
                                        alt={testimonial.author}
                                        width={100}
                                        height={40}
                                        className="h-10 w-auto object-contain"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="flex flex-row justify-between w-11/12 max-w-5xl mt-3">
                <p className="text-3xl text-white">Featured In</p>
                <Button content="Read News →"/>
            </div>
            <div className="grid grid-cols-5 gap-y-12 gap-x-5 place-items-center w-11/12 max-w-5xl">
                {
                    featuredIn.map((link, index) => (
                        <Image
                            key={index}
                            src={link}
                            alt={`${index} logo`}
                            width={100}
                            height={100}
                            className="h-8 w-auto object-contain"
                        />
                    ))
                }
            </div>
        </section>
    ) 
}

