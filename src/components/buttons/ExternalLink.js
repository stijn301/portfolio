export default function ExternalLink({text, href}) {
  return (
    <a className="px-2 py-1 text-lg text-emerald-400 hover:text-white transition-colors" href={href} target="_blank" rel="noreferrer" >{text}</a>
  )
}
