import { useEffect, useRef } from "react";
import "./Contacts.css";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import transition from "../Animation/transition";
import Navbar from "../Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";

const variants = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const Contacts = () => {
  const ref = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ width: "100vw", backgroundColor: "#000" }}>
      <Navbar />

      <motion.div
        ref={ref}
        className="contact"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="textContainer" variants={variants}>
          <motion.h1 variants={variants}>Let’s work together</motion.h1>
          <div className="linksContainer">
            <motion.div className="item" variants={variants}>
              <a
                href="https://www.linkedin.com/in/andrii-bondar-178105255/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={assets.linkedin_icon} alt="LinkedIn" />
                LinkedIn
              </a>
            </motion.div>
            <motion.div className="item" variants={variants}>
              <a
                href="https://github.com/fl00N"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={assets.github_icon} alt="GitHub" />
                GitHub
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default transition(Contacts);
