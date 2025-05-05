import { useEffect, useState } from "react";
import transition from "../Animation/transition";
import Navbar from "../Navbar/Navbar";
import Start from "../Start/Start";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";

const Main = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />

      <div className="main">
        <Start />
        <Skills />
        <Footer />
      </div>
    </>
  );
};

export default transition(Main);
