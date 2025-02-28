import Link from "next/link"

const contacts = [
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a2f9fec5228650218c9f9f_slack-icon.svg",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a2f9fe0f2a17c8cbbdb1bf_youtube-icon.svg",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a2f9fe36adffb8a70bc4b5_twitter-icon.svg",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a2f9fe06f684a835537ff1_linkedin-icon.svg",
    "https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64a2f9fe5dad38fae32d072c_github-icon.svg"
]

const contactLinks = [
    "https://join.slack.com/t/massdrivercommunity/shared_invite/zt-1sxag35w2-eYw7gatS1hwlH2y8MCmwXA",
    "https://www.youtube.com/@massdrivercloud",
    "https://twitter.com/massdriver",
    "https://www.linkedin.com/company/massdriver",
    "https://github.com/massdriver-cloud"
]

const links = [
    {
        "title": "Marketplace",
        "sub": ["AWS", "Azure"]
    },
    {
        "title": "Templates",
        "sub": ["AWS", "GCP", "Azure"]
    },
    {
        "title": "Solutions",
        "sub": ["Developer Self Service", "OpenTofu for Enterprise", "Platform Engineering Accelerator", "Cost Management"]
        
    },
    {
        "title": "Resources",
        "sub": ["Pricing", "Blog", "Docs", "Webinars", "Pitch Deck", "FAQ"]
    },
    {
        "title": "Company",
        "sub": ["About Us", "Jobs", "News", "Contact Us"]
    },
    {
        "title": "Comparisons",
        "sub": ["Backstage Alternative", "Spacelift vs Massdriver"]
    }
]

export default function FooterSection() {
    /* Footer Section */


    return (
        <footer className="flex flex-col items-center w-full bg-sky-100">
            {/* first section: links and resources */}
            <div className="flex flex-col md:flex-row px-6 pt-16 pb-10 max-w-7xl w-full gap-x-12">
                {/* logo, status, socials */}
                <div className="flex flex-col gap-y-6 items-center md:items-start">
                    <Link href="/"><img className="w-[10rem]" src="https://www.massdriver.cloud/assets/645c0dea42f678e1f8b77774/64b77733fbfa9c69e4082105_massdriver-logomark%201.svg"/></Link>
                    <div className="flex flex-row items-center gap-3 w-fit px-4 py-1 border-[1px] border-blue-600 rounded-lg">
                        <span className="rounded-full border-[5px] border-green-500"/>
                        <p className="text-blue-400 text-md">System Operational</p>
                    </div>
                    <div className="grid grid-cols-5 gap-3">
                        {
                            contacts.map((v, ind) => (
                                <a href={contactLinks[ind]} key={ind}>
                                    <img
                                        className="md:w-[4rem] cursor-pointer"
                                        src={v}
                                    />
                                </a>
                            ))
                        }
                    </div>
                </div>
                {/* resource headings and links */}
                <div className="grid grid-cols-[repeat(3,auto)] lg:grid-cols-[repeat(6,auto)] w-full gap-3 mt-6 md:mt-0">
                    {
                        links.map((section, ind) => (
                            <div key={ind} className="flex flex-col gap-y-2">
                                <p className="text-black text-sm font-bold mb-2">{section.title}</p>
                                {
                                    section.sub.map((v, i) => (
                                        <p key={i} className="text-gray-600 text-sm cursor-pointer">{v}</p>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* second section: copyright, etc */}
            <div className="border-t border-gray-300 w-full"/>
            <div className="flex flex-col md:flex-row items-center max-w-7xl w-full my-[42px] px-6 text-gray-500 text-sm md:text-md gap-3">
                <p>© Massdriver, Inc. 2024</p>
                <span className="rounded-full border-2 border-gray-500 hidden md:block"/>
                <a href="https://www.massdriver.cloud/terms" className="cursor-pointer ">Terms of Service</a>
                <span className="rounded-full border-2 border-gray-500 hidden md:block"/>
                <a href="https://www.massdriver.cloud/privacy-policy" className="cursor-pointer">Privacy Policy</a>
                <span className="rounded-full border-2 border-gray-500 hidden md:block"/>
                <a href="https://www.massdriver.cloud/security" className="cursor-pointer">Security</a>
            </div>
        </footer>
      )
}

