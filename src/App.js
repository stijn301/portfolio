import { useState } from "react";

import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import ProjectsView from "./components/views/ProjectsView";
import HomeView from "./components/views/HomeView";

function App() {
  const [currentView, setCurrentView] = useState("Home");

  function ViewInProjects(projectTitle = "") {
    setCurrentView({name: "Projects", projectTitle: projectTitle})
  }

  // Select active view
  let view = <HomeView onNavProjects={() => setCurrentView("Projects")} onViewInProjects={(project, title) => ViewInProjects(project, title)} />

  if(currentView == "Projects") {
    view = <ProjectsView />

  } else if(currentView.name == "Projects") {
    view = <ProjectsView projectTitle={currentView.projectTitle} />
  }

  return (
    <div className="App">
      <div className="min-h-screen flex flex-col text-neutral-200">
        <Header onNavHome={() => setCurrentView("Home")} onNavProjects={() => setCurrentView("Projects")} />

        <main className="flex-1 flex flex-col">
          {view}
        </main>

        <Footer/>
      </div>
    </div>
  );
}

export default App;