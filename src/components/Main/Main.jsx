import { useEffect, useState } from 'react';
import transition from "../Animation/transition";
import ReactLenis from "@studio-freight/react-lenis";
import Navbar from "../Navbar/Navbar";
import Start from "../Start/Start"
import Skills from "../Skills/DesktopSkills/Skills";
import MobileSkills from "../Skills/MobileSkills/MobileSkills";
import Footer from "../Footer/Footer";

const Main = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ReactLenis root>
      <Navbar />

      <div className="main">
        <Start />
        {!isMobile ? <Skills /> : <MobileSkills />}

        {!isMobile && <Footer />}
      </div>
    </ReactLenis>
  )
}

export default transition(Main)