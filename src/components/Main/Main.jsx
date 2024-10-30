import Start from "../Start/Start"
import './Main.css'
import transition from "../../transition";
import Projects from "../Projects/Projects";
import ReactLenis from "@studio-freight/react-lenis";
import Navbar from "../Navbar/Navbar";
import Skills from '../Skills/Skills'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {

  useEffect(() => {
    let svg = document.querySelector('svg');
    let path = svg.querySelector('path');
    const pathLength = path.getTotalLength();

    gsap.set(path, { strokeDasharray: pathLength });

    gsap.fromTo(
      path,
      {
        strokeDashoffset: pathLength,
      },
      {
        strokeDashoffset: 0,
        duration: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: '.svgContainer',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <ReactLenis root>
      <Navbar />

    <div className="main">
      <Start />
      <div className="svgContainer">
        <svg width="1442" height="2650" viewBox="0 0 1442 2596" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M1075.95 1C1367.1 125.138 339.498 174.793 245.302 278.241C151.105 381.69 1075.95 356.862 1324.28 427.207C1572.62 497.552 1379.95 781 1161.58 629.965C943.215 478.931 433.695 443.759 292.4 478.931C151.105 514.103 22.6546 613.414 22.6546 708.586C22.6546 803.759 356.625 882.379 356.625 882.379C356.625 882.379 793.356 1016.86 896.116 915.483C998.876 814.103 779.65 766.47 716.286 758.241C652.921 750.012 467.949 749.965 356.625 783.069C245.302 816.172 95.4429 822.379 22.6546 915.483C-50.1337 1008.59 69.753 1076.86 245.302 1068.59C420.85 1060.31 990.313 1052.03 1161.58 1114.1C1332.85 1176.17 1435.61 1217.55 1324.28 1292.03C1212.96 1366.52 977.468 1321 896.116 1271.34C814.764 1221.69 339.498 1236.17 245.302 1292.03C151.105 1347.9 -58.6973 1403.76 168.231 1490.66C395.16 1577.55 635.923 1749.79 781.5 1696C927.077 1642.21 1071.72 1180.31 1198 1490.66C1324.28 1801 830.5 1420.5 653.5 1565C476.5 1709.5 247.5 1816.5 379.5 1935C511.5 2053.5 1043.63 1551.5 1198 1935C1352.37 2318.5 653.525 2067.5 356.625 2093C59.7251 2118.5 521.071 2278 716.286 2395.5C911.5 2513 333.5 2693 462.5 2530.5" 
            stroke="#F0FFFF"
            strokeWidth={20}   />
        </svg>
      </div>
      <Skills />
      {/* <Projects /> */}
    </div>
    </ReactLenis>
  )
}

export default transition(Main)