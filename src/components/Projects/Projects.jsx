import "./Projects.css";
import transition from "../Animation/transition";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";

const projectContent = [
  {
    image: "img1.png",
    name: "Food Delivery",
    tech: ["React", "NodeJS", "Express", "MongoDB"],
    liveDemo: "https://learn-react-food-delivery-project.vercel.app",
    github: "https://github.com/fl00N/learn-react-food-delivery-project",
  },
  {
    image: "img2.png",
    name: "Spotify Clone",
    tech: ["React", "TailwindCSS", "NodeJS", "Express", "MongoDB"],
    liveDemo: "https://learn-react-spotify-clone-project.vercel.app",
    github: "https://github.com/fl00N/learn-react-spotify-clone-project",
  },
  {
    image: "img3.png",
    name: "AI Chat",
    tech: ["React", "Gemini AI", "NodeJS", "Express", "MongoDB"],
    liveDemo: "https://learn-react-ai-chat.vercel.app/",
    github: "https://github.com/fl00N/learn-react-ai-chat",
  },
  {
    image: "img4.png",
    name: "Chat App",
    tech: ["React", "Firebase", "Zustand", "JavaScript"],
    liveDemo: "https://learn-react-chat-app.vercel.app",
    github: "https://github.com/fl00N/learn-react-chat-app",
  },
];

const Projects = () => {
  return (
    <>
      <Navbar />

      <div className="projectsPage">
        <div className="projects-title">
          <h1>Side Projects</h1>
          <p>
            All my projects are focused on improving my skills and
            <br />
            gaining hands-on experience in web application development.
          </p>
        </div>

        <div className="projects">
          {projectContent.map((project, index) => (
            <div key={index} className="project">
              <img src={project.image} alt="" />
              <div className="underImg">
                <h1>{project.name}</h1>
                <div className="techs-links">
                  <div className="techs">
                    {project.tech.map((tech, techIndex) => (
                      <div key={techIndex} className="tech">
                        <p>{tech}</p>
                      </div>
                    ))}
                  </div>
                  <div className="links">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={projectContent[index].github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default transition(Projects);
