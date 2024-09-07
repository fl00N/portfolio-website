import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onHoverChange, navbarColorClass }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${navbarColorClass}`}>
      <h1 className={`logo ${navbarColorClass}`}>AB</h1>
      <div className='menuDiv'>
        <ul className={isOpen ? 'show' : 'hide'}>
          <a href="#about" onClick={() => setIsOpen(false)}>About me</a>  
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a> 
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a> 
          <a href="#contacts" onClick={() => setIsOpen(false)}>Contacts</a> 
        </ul>
        <div 
          className={`hamburger-menu ${isOpen ? 'open' : ''} ${navbarColorClass}`} 
          onClick={toggleMenu}
          onMouseEnter={() => onHoverChange(true)}
          onMouseLeave={() => onHoverChange(false)}
        >
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
