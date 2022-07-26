import SectionHeader from "./SectionHeader";
import FeaturedProjectCard from "../cards/FeaturedProjectCard";
import ProjectCard from "../cards/ProjectCard";
import Button from "../buttons/Button";

export default function Projects({ onNavProjects, onViewInProjects }) {
  return (
    <div className="py-20 flex justify-center">
      <div className="max-w-5xl bg-gray-900 bg-opacity-50">
        <SectionHeader title="Projects" />

        <div className="py-6 flex flex-col gap-6">

          <FeaturedProjectCard
            title="Smartgoals App"
            text="A part of the CRM system at Spectrum Multimedia & IT for managing and tracking personal goals of clients."
            languages={["Laravel", "JavaScript", "Tailwind CSS"]}
            img="/images/Smartdoelen1.png"
            onReadMore={onViewInProjects}
          />
  
        </div>

        <div className="p-6 grid grid-cols-3 auto-rows-auto gap-6">

          <ProjectCard 
            title="Bomberman" 
            text="A simple bomberman game made in JavaScript, with changeable game settings and enemy pathfinding."
            languages={["JavaScript"]}
            onReadMore={onViewInProjects}
          />

          <ProjectCard
            title="Cinema"
            text="A challenge to make an algorithm that finds the best seats in a cinema room for a given group size."
            languages={["JavaScript"]}
            onReadMore={onViewInProjects}
          />

        </div>

        <div className="flex justify-center">
          <Button text="View all projects" onClick={onNavProjects} />
        </div>
      </div>
    </div>
  )
}
