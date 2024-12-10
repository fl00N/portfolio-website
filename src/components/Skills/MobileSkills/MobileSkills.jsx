import "./MobileSkills.css";
import ReactLenis from "@studio-freight/react-lenis";

const MobileSkills = () => {
  const backTitles = [
    "Frontend Technologies",
    "Frameworks and Libraries",
    "State and animation",
    "Additional skills",
  ];

  const backTexts = [
    "HTML, CSS, Tailwind CSS, JavaScript, TypeScript",
    "React.js, Next.js, Three.js",
    "Zustand, Context API, GSAP, Framer Motion",
    "Responsive Design, OOP, Git, REST API, Vercel, Gemini AI, Node.js, Express.js, MongoDB, Firebase",
  ];

  return (
    <ReactLenis root>
      <div className="container-mobile">
        <div className="cards-mobile">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="card-mobile">
              <h1>{backTitles[index]}</h1>
              <p>{backTexts[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </ReactLenis>
  );
};

export default MobileSkills;
