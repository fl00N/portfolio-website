import Card from './Card/Card';
import './Skills.css';
import ReactLenis from '@studio-freight/react-lenis'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
    const containerRef = useRef(null)
    const cardRef = useRef([])

    useGSAP(() => {
        const cards = cardRef.current
        const totalScrollHeight = window.innerHeight * 3
        const positions = [14, 38, 62, 86]
        const rotations = [-15, -7.5, 7.5, 15]

        ScrollTrigger.create({
            trigger: containerRef.current.querySelector('.cards'),
            start: 'top top',
            end: () => `+=${totalScrollHeight}`,
            pin: true,
            pinSpacing: true
        })

        cards.forEach((card, index) => {
            gsap.to(card, {
                left: `${positions[index]}%`,
                rotation: `${rotations[index]}`,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current.querySelector('.cards'),
                    start: 'top top',
                    end: () => `+=${window.innerHeight}`,
                    scrub: 0.5, 
                    id: `spread-${index}`
                }
            })
        })

        cards.forEach((card, index) => {
            const frontEl = card.querySelector('.flip-card-front')
            const backEl = card.querySelector('.flip-card-back')

            const staggerOffset = index * 0.05
            const startOffset = 1 / 3 + staggerOffset
            const endOffset = 2 / 3 + staggerOffset

            ScrollTrigger.create({
                trigger: containerRef.current.querySelector('.cards'),
                start: 'top top',
                end: () => `+=${totalScrollHeight}`,
                scrub: 1,
                id: `rotate-flip-${index}`,
                onUpdate: (self) => {
                    const progress = self.progress
                    if (progress >= startOffset && progress <= endOffset) {
                        const animationProgress = (progress - startOffset) / (1 / 3)
                        const frontRotation = -180 * animationProgress
                        const backRotation = -180 - 180 * animationProgress
                        const cardRotation = rotations[index] * (1 - animationProgress)

                        gsap.to(frontEl, { rotateY: frontRotation, ease: 'power1.out'})
                        gsap.to(backEl, { rotateY: backRotation, ease: 'power1.out'})
                        gsap.to(card, {
                            xPercent: -50,
                            yPercent: -50,
                            rotate: cardRotation,
                            ease: 'power1.out'
                        })
                    }
                }
            })
        })

    }, { scope: containerRef })

    useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    const backTitles = [
        "Frontend Technologies",
        'Frameworks and Libraries',
        'State and animation',
        "Additional skills",
    ];

    const backTexts = [
        "HTML, CSS, Tailwind CSS, JavaScript, TypeScript",
        'React.js, Next.js, Three.js',
        'Zustand, Context API, GSAP, Framer Motion',
        "Responsive Design, OOP, Git, REST API, Vercel, Gemini AI, Node.js, Express.js, MongoDB, Firebase",
    ];

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
            <div className="svgContainer">
                <svg width="1442" height="2650" viewBox="0 0 1442 2596" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                    d="M1075.95 1C1367.1 125.138 339.498 174.793 245.302 278.241C151.105 381.69 1075.95 356.862 1324.28 427.207C1572.62 497.552 1379.95 781 1161.58 629.965C943.215 478.931 433.695 443.759 292.4 478.931C151.105 514.103 22.6546 613.414 22.6546 708.586C22.6546 803.759 356.625 882.379 356.625 882.379C356.625 882.379 793.356 1016.86 896.116 915.483C998.876 814.103 779.65 766.47 716.286 758.241C652.921 750.012 467.949 749.965 356.625 783.069C245.302 816.172 95.4429 822.379 22.6546 915.483C-50.1337 1008.59 69.753 1076.86 245.302 1068.59C420.85 1060.31 990.313 1052.03 1161.58 1114.1C1332.85 1176.17 1435.61 1217.55 1324.28 1292.03C1212.96 1366.52 977.468 1321 896.116 1271.34C814.764 1221.69 339.498 1236.17 245.302 1292.03C151.105 1347.9 -58.6973 1403.76 168.231 1490.66C395.16 1577.55 635.923 1749.79 781.5 1696C927.077 1642.21 1071.72 1180.31 1198 1490.66C1324.28 1801 830.5 1420.5 653.5 1565C476.5 1709.5 247.5 1816.5 379.5 1935C511.5 2053.5 1043.63 1551.5 1198 1935C1352.37 2318.5 653.525 2067.5 356.625 2093C59.7251 2118.5 521.071 2278 716.286 2395.5C911.5 2513 333.5 2693 462.5 2530.5" 
                    stroke="#F0FFFF"
                    strokeWidth={20}   
                    />
                </svg>
            </div>
            <div className="container" ref={containerRef}>
                <div className='cards'>
                    {[...Array(4)].map((_, index) => (
                        <Card
                            key={index}
                            id={`card-${index + 1}`}
                            frontSrc="/card.png"
                            frontAlt="Card Image"
                            backTitle={backTitles[index]}
                            backText={backTexts[index]}
                            ref={(el) => (cardRef.current[index] = el)}
                        />
                    ))}
                </div>
            </div>
        </ReactLenis>
    );
};

export default Skills;
