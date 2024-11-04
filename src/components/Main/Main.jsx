import Start from "../Start/Start"
import transition from "../Animation/transition";
import ReactLenis from "@studio-freight/react-lenis";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";

const Main = () => {

  return (
    <ReactLenis root>
      <Navbar />

      <div className="main">
        <Start />
        <Skills />
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default transition(Main)