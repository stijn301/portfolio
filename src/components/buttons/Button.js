export default function Button({text, onClick}) {
  return (
    <button className="px-4 py-1 text-lg text-emerald-400 border-2 border-emerald-400 hover:bg-emerald-400 hover:bg-opacity-10 transition-colors" onClick={onClick}>{text}</button>
  )
}
