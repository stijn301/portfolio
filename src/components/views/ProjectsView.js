import { useState } from "react";

import FeaturedProjectCard from "../cards/FeaturedProjectCard";
import ProjectCard from "../cards/ProjectCard";
import ModalHeader from "../modals/ModalHeader";
import SectionHeader from "../sections/SectionHeader";

// Project imports
import SmartdoelenProject from "../projects/SmartdoelenProject";
import BombermanProject from "../projects/BombermanProject";
import CinemaProject from "../projects/CinemaProject";
import BitOfOrbitProject from "../projects/BitOfOrbitProject";
import TetrisProject from "../projects/TetrisProject";
import InteractiveGravityProject from "../projects/InteractiveGravityProject";

export default function ProjectsView(props) {
  const [currentModal, setCurrentModal] = useState()
  const [showModal, setShowModal] = useState(false)
  const [currentTitle, setCurrentTitle] = useState("")

  const [showProjectOnStart, setShowProjectOnStart] = useState(false)

  if(props.projectTitle && !showProjectOnStart) {
    viewProject(props.projectTitle)
    setShowProjectOnStart(true)
  }

  function viewProject(title = "") {
    setShowModal(title !== "")
    setCurrentTitle(title)

    let project = null;
    switch (title) {
      case "Smartgoals App":
        project = <SmartdoelenProject />
        break;
        
      case "Bomberman":
        project = <BombermanProject />
        break;
        
      case "Cinema":
        project = <CinemaProject />
        break;
        
      case "Bit of Orbit":
        project = <BitOfOrbitProject />
        break;
        
      case "Tetris":
        project = <TetrisProject />
        break;
      
      case "Interactive Gravity":
        project = <InteractiveGravityProject />
        break;

      default:
        project = null
        break;
    }

    setCurrentModal(project)
  }

  return (
    <>
      <div className="py-20 flex justify-center">
        <div className="max-w-5xl">
          <SectionHeader title="Larger Projects" />

          <div className="mb-12 p-6 flex flex-col gap-6">
            <FeaturedProjectCard
              title="Smartgoals App"
              text="A part of the CRM system at Spectrum Multimedia & IT for managing and tracking personal goals of clients."
              languages={["Laravel", "JavaScript", "Tailwind CSS"]}
              img="/images/Smartdoelen1.png"
              onReadMore={(title) => viewProject(title)}
            />
          </div>

          <SectionHeader title="All Projects" />

          <div className="p-6 grid grid-cols-3 auto-rows-auto gap-6">
            <ProjectCard 
              title="Bomberman" 
              text="A simple bomberman game made in JavaScript, with changeable game settings and enemy pathfinding."
              languages={["JavaScript"]}
              onReadMore={(title) => viewProject(title)}
            />

            <ProjectCard
              title="Cinema"
              text="A challenge to make an algorithm that finds the best seats in a cinema room for a given group size."
              languages={["JavaScript"]}
              onReadMore={(title) => viewProject(title)}
            />

            <ProjectCard
              title="Bit of Orbit"
              text="A little simulation of the solar system orbits."
              languages={["JavaScript"]}
              onReadMore={(title) => viewProject(title)}
            />

            <ProjectCard
              title="Tetris"
              text="Tetris game made in JavaScript, with score."
              languages={["JavaScript"]}
              onReadMore={(title) => viewProject(title)}
            />

            <ProjectCard
              title="Interactive Gravity"
              text="A little simulation with bouncing cirles affected by gravity."
              languages={["JavaScript"]}
              onReadMore={(title) => viewProject(title)}
            />
          </div>

        </div>
      </div>

      {showModal && (
      
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 overflow-auto z-20" onClick={() => viewProject()}>
          <div className="min-h-full flex justify-center items-center">
            <div className="relative top-0 max-w-6xl w-full mx-8 my-20 px-10 py-6" onClick={(e) => e.stopPropagation()}>
              <ModalHeader title={currentTitle} onClose={() => viewProject()} />
              {currentModal}
            </div>
          </div>
        </div>

      )}
    </>

  )
}
