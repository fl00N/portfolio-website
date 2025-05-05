import "./Skills.css";

const Skills = () => {
  const cardsContent = [
    {
      name: "Frontend",
      tech: [
        "HTML",
        "CSS",
        "Tailwind",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Firebase",
        "Zustand",
        "Context API",
        "Three.js",
        "GSAP",
        "Framer Motion",
        "WebSocket",
      ],
    },
    {
      name: "Backend",
      tech: ["Node.js", "Express", "MongoDB", "REST API"],
    },
    {
      name: "Tools & DevOps",
      tech: ["Git", "Vercel", "Gemini AI", "Postman"],
    },
    {
      name: "Soft Skills",
      tech: [
        "Problem-solving",
        "Adaptability",
        "Flexibility",
        "Stress Resistance",
        "Fast Learning",
      ],
    },
  ];

  return (
    <section className="skills-section">
      <div className="section-header">
        <h1>Skills & Technologies</h1>
        <p>Tools I work with to bring ideas to life.</p>
      </div>
      <div className="cards-grid">
        {cardsContent.map((card, index) => (
          <div key={index} className="card">
            <h2>{card.name}</h2>
            <div className="tags">
              {card.tech.map((tech, i) => (
                <span key={i} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
