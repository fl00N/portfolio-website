import { useEffect, useRef, useCallback, useState } from 'react';
import gsap from 'gsap';
import './Projects.css';
import transition from "../Animation/transition";
import Navbar from "../Navbar/Navbar";

const sliderContent = [
    'Food Delivery',
    'Spotify Clone',
    'AI Chat',
    'Chat App'
];

const projectLinks = [
    { liveDemo: 'https://learn-react-food-delivery-project.vercel.app', github: 'https://github.com/fl00N/learn-react-food-delivery-project' },
    { liveDemo: 'https://learn-react-spotify-clone-project.vercel.app', github: 'https://github.com/fl00N/learn-react-spotify-clone-project' },
    { liveDemo: 'https://learn-react-ai-chat.vercel.app/', github: 'https://github.com/fl00N/learn-react-ai-chat' },
    { liveDemo: 'https://learn-react-chat-app.vercel.app', github: 'https://github.com/fl00N/learn-react-chat-app' },
];

const totalImages = sliderContent.length;

const Projects = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(1);
    const [currentMobileImageIndex, setCurrentMobileImageIndex] = useState(0);
    const [currentContentIndex, setCurrentContentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [showCursor, setShowCursor] = useState(false);
    const sliderRef = useRef(null);
    const contentRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const splitTextIntoSpans = (selector) => {
        const els = document.querySelectorAll(selector);
        els.forEach((el) => {
            const text = el.innerText;
            const splitText = text
                .split('')
                .map((char) => `<span>${char === ' ' ? '&nbsp;&nbsp;' : char}</span>`)
                .join('');
            el.innerHTML = splitText;
        });
    };

    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseEnter = () => {
        setShowCursor(true);
        const cursorElement = document.querySelector('.custom-cursor');
        if (cursorElement) {
            cursorElement.classList.remove('fade-out'); 
            cursorElement.classList.add('fade-in'); 
        }
    };
    
    const handleMouseLeave = () => {
        const cursorElement = document.querySelector('.custom-cursor');
        if (cursorElement) {
            cursorElement.classList.remove('fade-in');
            cursorElement.classList.add('fade-out'); 
        }
        setTimeout(() => {
            setShowCursor(false);
        }, 300); 
    };
    

    const handleAnimation = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);

        splitTextIntoSpans('.slider-content-active h1');

        const activeImage = document.querySelector('.slide-active img');
        gsap.to(activeImage, {
            scale: 2,
            duration: 2,
            ease: 'power3.out'
        });

        gsap.to('.slider-content-active h1 span', {
            top: '-175px',
            stagger: 0.05,
            ease: 'power3.out',
            duration: 0.5,
            onComplete: () => {
                gsap.to('.slider-content-active', {
                    top: '-175px',
                    duration: 0.25,
                    ease: 'power3.out',
                    onComplete: () => {
                        const activeContent = document.querySelector('.slider-content-active');
                        if (activeContent) {
                            activeContent.remove();
                        }
                    }
                });
            }
        });

        const nextContentIndex = (currentContentIndex + 1) % totalImages;
        const nextContentText = sliderContent[nextContentIndex];
        const newContentHTML = `<div class='slider-content-next' style='top: 200px'><h1>${nextContentText}</h1></div>`;
        contentRef.current.insertAdjacentHTML('beforeend', newContentHTML);

        splitTextIntoSpans('.slider-content-next h1');
        gsap.set('.slider-content-next h1 span', { top: '200px' });

        gsap.to('.slider-content-next', {
            top: '50%',
            duration: 1.125,
            ease: 'power3.out',
            onComplete: () => {
                gsap.to('.slider-content-next h1 span', {
                    top: 0,
                    stagger: 0.05,
                    ease: 'power3.out',
                    duration: 0.5,
                    onComplete: () => {
                        const nextContent = document.querySelector('.slider-content-next');
                        nextContent.classList.remove('slider-content-next');
                        nextContent.classList.add('slider-content-active');
                        nextContent.style.top = '50%';

                        const liveDemoLink = projectLinks[nextContentIndex].liveDemo;
                        const githubLink = projectLinks[nextContentIndex].github;
                        document.querySelector('.live-demo-link').href = liveDemoLink;
                        document.querySelector('.github-link').href = githubLink;

                        setCurrentContentIndex(nextContentIndex);
                    }
                });
            }
        });

        const newImageIndex = (currentImageIndex + 1) % totalImages;
        const newSlideHTML =
            `<div class='slide-next'>
              <div class='slide-next-img'>
                  <img src='/img${newImageIndex + 1}.png' alt='' />
              </div>
          </div>`;

        sliderRef.current.insertAdjacentHTML('beforeend', newSlideHTML);

        gsap.to('.slider .slide-next:last-child .slide-next-img', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 1.5,
            ease: 'power3.out',
            delay: 3
        });

        const slideNextImg = document.querySelector('.slide-next-img');
        gsap.to(slideNextImg, {
            width: '70vw',
            height: '70vh',
            duration: 2,
            ease: 'power3.out',
            onComplete: () => {
                const currentActiveSlide = document.querySelector('.slide-active');
                if (currentActiveSlide) {
                    currentActiveSlide.parentNode.removeChild(currentActiveSlide);
                }

                const nextSlide = document.querySelector('.slide-next');
                if (nextSlide) {
                    nextSlide.classList.remove('slide-next');
                    nextSlide.classList.add('slide-active');

                    const nextSlideImg = nextSlide.querySelector('.slide-next-img');
                    if (nextSlideImg) {
                        nextSlideImg.classList.remove('slide-next-img');
                    }
                }

                setCurrentImageIndex(newImageIndex);
                setIsAnimating(false);
            }
        });
    }, [currentImageIndex, currentContentIndex, isAnimating]);

    const mobileHandleAnimation = (direction = 'next') => {
        if (isAnimating) return;
        setIsAnimating(true);

        // Content animation
        splitTextIntoSpans('.slider-content-active h1');
        gsap.to('.slider-content-active h1 span', {
            top: '-175px',
            stagger: 0.05,
            ease: 'power3.out',
            duration: 0.5,
            onComplete: () => {
                gsap.to('.slider-content-active', {
                    top: '-175px',
                    duration: 0.25,
                    ease: 'power3.out',
                    onComplete: () => {
                        const activeContent = document.querySelector('.slider-content-active');
                        if (activeContent) {
                            activeContent.remove();
                        }
                    }
                });
            }
        });

        // Content preparation
        const nextContentIndex = direction === 'next' 
            ? (currentContentIndex + 1) % totalImages
            : (currentContentIndex - 1 + totalImages) % totalImages;
        const nextContentText = sliderContent[nextContentIndex];
        const newContentHTML = `<div class='slider-content-next' style='top: 200px'><h1>${nextContentText}</h1></div>`;
        contentRef.current.insertAdjacentHTML('beforeend', newContentHTML);

        splitTextIntoSpans('.slider-content-next h1');
        gsap.set('.slider-content-next h1 span', { top: '200px' });

        // Simple image transition
        const nextIndex = direction === 'next'
            ? (currentMobileImageIndex + 1) % totalImages
            : (currentMobileImageIndex - 1 + totalImages) % totalImages;

        const currentSlide = document.querySelector('.mobile-slide-active');
        currentSlide.classList.add('fade-out');

        const newSlideHTML = `
            <div class='mobile-slide-active' style="opacity: 0">
                <img src='/img${nextIndex + 1}.png' alt='' />
            </div>`;
        document.querySelector('.mobile-slider').insertAdjacentHTML('beforeend', newSlideHTML);

        // Fade in new slide
        setTimeout(() => {
            const newSlide = document.querySelector('.mobile-slide-active:last-child');
            newSlide.style.opacity = '1';
            
            // Remove old slide after transition
            setTimeout(() => {
                currentSlide.remove();
                setCurrentMobileImageIndex(nextIndex);
                setIsAnimating(false);
            }, 1000);
        }, 1000);

        // Content animation completion
        gsap.to('.slider-content-next', {
            top: '50%',
            duration: 1.125,
            ease: 'power3.out',
            onComplete: () => {
                gsap.to('.slider-content-next h1 span', {
                    top: 0,
                    stagger: 0.05,
                    ease: 'power3.out',
                    duration: 0.5,
                    onComplete: () => {
                        const nextContent = document.querySelector('.slider-content-next');
                        nextContent.classList.remove('slider-content-next');
                        nextContent.classList.add('slider-content-active');
                        nextContent.style.top = '50%';

                        const liveDemoLink = projectLinks[nextContentIndex].liveDemo;
                        const githubLink = projectLinks[nextContentIndex].github;
                        document.querySelector('.live-demo-link').href = liveDemoLink;
                        document.querySelector('.github-link').href = githubLink;

                        setCurrentContentIndex(nextContentIndex);
                    }
                });
            }
        });
    };

    useEffect(() => {
        const initialContentHTML = `<div class='slider-content-active'><h1>${sliderContent[currentContentIndex]}</h1></div>`;
        contentRef.current.insertAdjacentHTML('beforeend', initialContentHTML);
        splitTextIntoSpans('.slider-content-active h1');

        if (isMobile) {
            gsap.to('.mobile-slide-next .slide-next-img', {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 1.5,
                ease: 'power3.out',
                delay: 3
            });
        } else {
            gsap.to('.slide-next-img', {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 1.5,
                ease: 'power3.out',
                delay: 3
            });
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Navbar />
            <div className='projects'>
                <div
                    className="slider"
                    ref={sliderRef}
                    onClick={!isMobile ? handleAnimation : undefined}
                    onMouseMove={!isMobile ? handleMouseMove : undefined}
                    onMouseEnter={!isMobile ? handleMouseEnter : undefined}
                    onMouseLeave={!isMobile ? handleMouseLeave : undefined}
                >
                    {isMobile ? (
                        <>
                            <div className="mobile-slider">
                                <div className="mobile-slide-active">
                                    <img src="/img1.png" alt="Active Slide" />
                                </div>
                            </div>
                            <div className="mobile-controls">
                                <button className="mobile-button" onClick={() => mobileHandleAnimation('prev')}>Previous</button>
                                <button className="mobile-button" onClick={() => mobileHandleAnimation('next')}>Next</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="slide-active">
                                <img src='/img1.png' alt="Active Slide" />
                            </div>
                            <div className="slide-next">
                                <div className="slide-next-img">
                                    <img src='/img2.png' alt="Next Slide" />
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className="slider-content" ref={contentRef}>
                    <a href={projectLinks[currentContentIndex].liveDemo} target='blank' className="live-demo-link">Live Demo</a>
                    <a href={projectLinks[currentContentIndex].github} target='blank' className="github-link">GitHub</a>
                </div>

                {showCursor && !isMobile && (
                    <div className={`custom-cursor ${showCursor ? 'fade-in' : 'fade-out'}`} style={{ left: cursorPosition.x, top: cursorPosition.y }}>
                        Click Me
                    </div>
                )}
            </div>
        </>
    );
};

export default transition(Projects);
