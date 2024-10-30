import './Projects.css'
import ProjectsText from './ProjectsText'
import transition from "../../transition";
import Navbar from "../Navbar/Navbar";

const Projects = () => {
  return (
    <div className="projectsContainer">
        <Navbar />
        <ProjectsText />

        <div className="projects">
          <h1>Projects</h1>
        </div>
    </div>
  )
}

export default transition(Projects)