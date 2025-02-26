

export default function Button({ content } : { content: string }){
    return (
        <button className="rounded-lg px-6 py-3 bg-blue-800 text-white font-bold">{content}</button>
    )
}