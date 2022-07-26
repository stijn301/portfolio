export default function Header({ onNavHome, onNavProjects }) {
  return (
    <header className="fixed top-0 w-full">
      <div className="px-12 py-6 flex justify-end text-emerald-400">
        <nav className="flex gap-12">
          <button className="hover:text-white transition-colors" onClick={onNavHome}>Home</button>
          <button className="hover:text-white transition-colors" onClick={onNavProjects}>Projects</button>
        </nav>
      </div>
    </header>
  )
}
