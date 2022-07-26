import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <div className="py-20 flex justify-center text-lg">
      <div className="max-w-3xl p-6 bg-gray-900 bg-opacity-50">
        <SectionHeader title="About Me" />

        <div className="py-6 flex justify-between">

          <div className="w-1/2 bg-gray-700">
            
          </div>

          <div className="p-6">
            <p className="mb-4">Languages I've worked with:</p>
            <ul className="px-4">
              <li><span className="mr-2 text-emerald-400">-</span>HTML / CSS</li>
              <li><span className="mr-2 text-emerald-400">-</span>JavaScript</li>
              <li><span className="mr-2 text-emerald-400">-</span>Laravel</li>
              <li><span className="mr-2 text-emerald-400">-</span>React</li>
              <li><span className="mr-2 text-emerald-400">-</span>C#</li>
            </ul>
          </div>

        </div>

        <div>
          <p className="mb-4">I'm a Full-Stack Developer currently learning web development, My main focus is building fast and intuitive products, sometimes with some interesting visuals.</p>
          <p>In my free time I also make games and simulations with Unity, I'm interested in procedural generation & movement, complex AI, and algorithms.</p>
        </div>

      </div>
    </div>
  )
}
