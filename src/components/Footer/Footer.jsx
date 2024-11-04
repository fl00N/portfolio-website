import { motion } from "framer-motion";
import './Footer.css'
import { Link } from 'react-router-dom';
import FooterShapes from "../3D/FooterShapes/FooterShapes";
import GsapMagnetic from '../Animation/magnetic'

const Footer = () => {
  return (
    <div 
        className="footer" 
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
        <div className="footerContent">
            <FooterShapes />
            <GsapMagnetic>
                <div className="svgWrapper">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                        viewBox="0 0 300 300"
                        className="svg"
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>

                        <text fill="#000">
                        <textPath xlinkHref="#circlePath" className="textPath">
                        Andrii Bondar Front-end Developer
                        </textPath>
                        </text>
                    </motion.svg>

                    <Link
                        to="/contacts"
                        className="hireMe"
                    >
                        Hire Me
                    </Link>
                </div>
            </GsapMagnetic>
        </div>
    </div>
  );
};

export default Footer;