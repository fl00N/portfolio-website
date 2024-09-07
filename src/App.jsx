import { useEffect, useState } from 'react';
import Start from './components/Start/Start';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ top: '0px', left: '0px' });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorClass, setCursorClass] = useState('custom-cursor');
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [showScrollMe, setShowScrollMe] = useState(true);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [navbarColorClass, setNavbarColorClass] = useState('');

  const handleScroll = (event) => {
    if (event.target.scrollTop > 20) {
      setShowScrollMe(false);
    }
    if (event.target.scrollTop > 2800) {
      setBackgroundColor('#f9f9f9');
      setNavbarColorClass('scrolled-navbar');
    } else {
      setBackgroundColor('');
      setNavbarColorClass('');
    }
  };

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      setScrollEnabled(true);
      setOverlayVisible(false);
    }, 8000);

    return () => {
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ top: `${e.clientY}px`, left: `${e.clientX}px` });
    };

    const handleMouseEnter = () => setCursorVisible(true);
    const handleMouseLeave = () => setCursorVisible(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleNavbarHover = (isHover) => {
    setCursorClass(isHover ? 'custom-cursor-navbar-hover' : 'custom-cursor');
  };

  const handleProjectsHover = (isHover) => {
    setCursorClass(isHover ? 'custom-cursor-projects-hover' : 'custom-cursor');
  };

  return (
    <div
      onScroll={handleScroll}
      className={`scrollable-content ${scrollEnabled ? 'show-scrollable' : ''}`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        className={cursorClass}
        style={{
          top: cursorPosition.top,
          left: cursorPosition.left,
          opacity: cursorVisible ? 1 : 0,
        }}
      />
      <Navbar onHoverChange={handleNavbarHover} navbarColorClass={navbarColorClass} />
      <Start showScrollMe={showScrollMe} />
      <AboutMe />
      <Skills />
      <Projects onHoverChange={handleProjectsHover} onHover={handleNavbarHover}/>
      <Footer onHoverChange={handleNavbarHover} />
      {overlayVisible && <div className="scroll-overlay"></div>}
    </div>
  );
};

export default App;
