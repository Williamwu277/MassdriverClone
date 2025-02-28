

export default function Banner(){
    /* Component for the banner on top of the page */
    
    return (
        <div className="flex justify-center bg-gradient-to-r from-blue-400 to-cyan-500">
            <p className="m-2 font-medium text-white text-[0.65rem] md:text-sm">Take a look at our latest blog post! <a className="underline" href="https://www.massdriver.cloud/blogs/the-case-for-abstractions-in-iac">The Case for Abstractions in IaC</a></p>
        </div>
    )
}