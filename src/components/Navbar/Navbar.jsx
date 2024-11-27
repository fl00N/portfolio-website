import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  gsap.registerPlugin(CSSRulePlugin);

  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');
  const [timeline, setTimeline] = useState(null);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    let activeItemIndicator = CSSRulePlugin.getRule('.menu-item p#active::after');
    
    gsap.set('.menu-item p', { y: 225 });
    
    const tl = gsap.timeline({ paused: true });
    setTimeline(tl);

    tl.to('.overlay', {
      duration: 1.5,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: 'power4.inOut'
    })
    .to('.menu-item p', {
      duration: 1.5,
      y: 0,
      stagger: 0.2,
      ease: 'power4.out'
    }, '-=1')
    .to(activeItemIndicator, {
      width: '100%',
      duration: 1,
      ease: 'power4.out',
      delay: 0.5
    }, '<')
    .to('.sub-nav', {
      bottom: '10%',
      opacity: 1,
      duration: 0.5,
      delay: 0.5
    }, '<');
  }, [activeLink]);

  useEffect(() => {
    if (timeline) {
      if (isActive) {
        timeline.play();
      } else {
        timeline.reverse();
      }
    }
  }, [isActive, timeline]);

  const toggleMenu = () => {
    setIsActive(prevState => !prevState);
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/'>AB</Link>
        
        <div className='toggle-btn'>
          <button 
            className={`burger ${isActive ? 'active' : ''}`}
            onClick={toggleMenu}
          ></button>
        </div>
      </nav>

      <div className="overlay">
        <div className="overlay-menu">
          <div className="menu-item">
            <p id={activeLink === '/' ? 'active' : ''}><Link to="/">Home</Link></p>
          </div>

          <div className="menu-item">
            <p id={activeLink === '/projects' ? 'active' : ''}><Link to="/projects">Projects</Link></p>
          </div>

          <div className="menu-item">
            <p id={activeLink === '/contacts' ? 'active' : ''}><Link to="/contacts">Contacts</Link></p>
          </div>

          <div className="sub-nav">
            <p><a href="https://www.linkedin.com/in/andrii-bondar-178105255" target='blank'>LinkedIn</a></p>
            <p>•</p>
            <p><a href="https://github.com/fl00N" target='blank'>GitHub</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
