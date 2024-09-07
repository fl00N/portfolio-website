import { useEffect, useRef, useState } from 'react';
import './AboutMe.css';
import Plane from '../3D/Plane';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState({
    aboutText: false,
    meText: false,
    textLines: Array(5).fill(false),
    porscheContainer: false,
  });

  const aboutTextRef = useRef(null);
  const meTextRef = useRef(null);
  const textRefs = useRef([]);
  const planeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === aboutTextRef.current) {
              setIsVisible((prevState) => ({
                ...prevState,
                aboutText: true,
              }));
            } else if (entry.target === meTextRef.current) {
              setIsVisible((prevState) => ({
                ...prevState,
                meText: true,
              }));
            } else if (entry.target === planeRef.current) {
              setIsVisible((prevState) => ({
                ...prevState,
                porscheContainer: true,
              }));
            } else {
              textRefs.current.forEach((ref, index) => {
                if (ref === entry.target) {
                  setIsVisible((prevState) => {
                    const newTextLines = [...prevState.textLines];
                    newTextLines[index] = true;
                    return { ...prevState, textLines: newTextLines };
                  });
                }
              });
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

    if (aboutTextRef.current) observer.observe(aboutTextRef.current);
    if (meTextRef.current) observer.observe(meTextRef.current);
    if (planeRef.current) observer.observe(planeRef.current);
    textRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (aboutTextRef.current) observer.unobserve(aboutTextRef.current);
      if (meTextRef.current) observer.unobserve(meTextRef.current);
      if (planeRef.current) observer.unobserve(planeRef.current);
      textRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="aboutMe">
      <h1 ref={aboutTextRef} className={`aboutText ${isVisible.aboutText ? 'visible' : ''}`}>
        About <span ref={meTextRef} className={`meText ${isVisible.meText ? 'visible' : ''}`}>Me</span>
      </h1>
      <div id='about' className='textWithModel'>
        <div className="textAboutMe">
          {['I am an 18-year-old', 'aspiring Front-End', 'Developer with a', 'strong passion for', 'web development.'].map(
            (text, index) => (
              <p
                key={index}
                ref={(el) => (textRefs.current[index] = el)}
                className={isVisible.textLines[index] ? 'visible' : ''}
              >
                {text}
              </p>
            )
          )}
        </div>
        <div ref={planeRef} className={`planeContainer ${isVisible.porscheContainer ? 'visible' : ''}`}>
          <Plane />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
