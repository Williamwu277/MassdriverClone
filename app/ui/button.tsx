

export default function Button({ content, url } : { content: string, url: string }){
    return (
        <a href={url} className="rounded-md px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-400 text-white font-medium w-fit">{content}</a>
    )
}