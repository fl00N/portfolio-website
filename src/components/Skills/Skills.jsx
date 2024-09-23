import { useEffect, useRef, useState } from 'react';
import './Skills.css';
import { assets } from '../../assets/assets';

const skillsData = [
    {
        category: "Frontend Technologies",
        skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind CSS"]
    },
    {
        category: "Backend Integration",
        skills: ["REST API", "JSON handling", "Axios", "Fetch API"]
    },
    {
        category: "Additional Skills",
        skills: ["Node.js, Express.js, MongoDB and Firebase", "Responsive Design", "Git"]
    }
];

const Skills = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isVisible, setIsVisible] = useState({
        scrollText: false,
        skillColumns: false,
    });
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const scrollRef = useRef(null);
    const skillsColumnsRef = useRef(null);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', checkScreenSize);
        checkScreenSize();

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === scrollRef.current) {
                            setIsVisible((prevState) => ({
                                ...prevState,
                                scrollText: true,
                            }));
                        } else if (entry.target === skillsColumnsRef.current) {
                            setIsVisible((prevState) => ({
                                ...prevState,
                                skillColumns: true,
                            }));
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.3,
            }
        );

        if (scrollRef.current) observer.observe(scrollRef.current);
        if (skillsColumnsRef.current) observer.observe(skillsColumnsRef.current);

        return () => {
            if (scrollRef.current) observer.unobserve(scrollRef.current);
            if (skillsColumnsRef.current) observer.unobserve(skillsColumnsRef.current);
        };
    }, []);

    return (
        <div className="skills">
            <div id='skills' className="scroll" ref={scrollRef}>
                <ul>
                    <li>
                        <span className={`text ${isVisible.scrollText ? 'visible' : ''}`}>
                            My Skills
                        </span>
                    </li>
                </ul>
                <ul aria-hidden="true">
                    <li>
                        <span className={`text ${isVisible.scrollText ? 'visible' : ''}`}>
                            My Skills
                        </span>
                    </li>
                </ul>
            </div>
            <div className="container">
                <div className={`skills-columns ${isVisible.skillColumns ? 'visible' : ''}`} ref={skillsColumnsRef}>
                    {skillsData.map((category, index) => (
                        <div
                            className={`skills-column ${isVisible.skillColumns ? 'visible' : ''}`}
                            key={index}
                            onMouseEnter={() => !isSmallScreen && setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <h2>{category.category}</h2>
                            <ul>
                                {category.skills.map((skill, idx) => (
                                    <li key={idx}>
                                        <img
                                            src={hoveredIndex === index && !isSmallScreen ? assets.black_tick_icon : assets.tick_icon}
                                            alt="Tick icon"
                                        />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
