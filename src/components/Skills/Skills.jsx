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
        "Backend Technologies",
        "Additional skills",
        "Courses"
    ];

    const backTexts = [
        "• HTML • CSS • Tailwind CSS • JavaScript • TypeScript • Three.js • React.js • Next.js • Vite • Zustand • GSAP • Framer Motion",
        "• Node.js • Express.js • MongoDB • Firebase",
        "• Responsive Design • OOP • Git • REST API • Vercel • Gemini AI",
        "• Coursera: Meta Front End Developer By Meta • Udemy: JavaSript By Ivan Petrichenko • Udemy:  JavaSript + React.js By Ivan Petrichenko • Udemy: MERN Full Stack By Maximilian Schwarzmüller • Udemy: MERN 2024 Edition By John Smilga"
    ];


    return (
        <ReactLenis root>
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
