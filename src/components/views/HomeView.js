import About from "../sections/About";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

export default function HomeView({ onNavProjects, onViewInProjects }) {
  

  return (
    <>
      <Hero />
      <About />
      <Projects onNavProjects={onNavProjects} onViewInProjects={onViewInProjects} />
    </>
  )
}
