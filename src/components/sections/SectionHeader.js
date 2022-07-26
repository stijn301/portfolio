export default function SectionHeader({ title }) {
  return (
    <div className="ml-6 flex items-center gap-4">
      <h2 className="text-3xl text-emerald-400">{title}</h2>
      <div className="h-[1px] w-60 bg-neutral-400"></div>
    </div>
  )
}
