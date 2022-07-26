export default function ProjectCard({title, text, languages, onReadMore, link}) {
  return (
    <div className="p-6 flex flex-col gap-6 items-center bg-gray-700 hover:bg-gray-800 text-white hover:text-emerald-400 transition-colors cursor-pointer"
      onClick={() => onReadMore(title)}
    >
      <h3 className="text-2xl">{title}</h3>

      <p className="text-white">{text}</p>

      {languages && (
        <div className="ml-2 flex gap-6 text-neutral-400">
          {languages.map((text, index) => <p key={index} >{text}</p> )}
        </div>
      )}
    </div>
  )
}
