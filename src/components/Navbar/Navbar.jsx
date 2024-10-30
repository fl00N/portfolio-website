import './Navbar.css';
import { useState } from 'react';
import Button from './Button';
import { AnimatePresence, motion } from 'framer-motion';
import Links from './Links';

const menu = {
    open: {
        width: "480px",
        height: "340px",
        top: "-25px",
        right: "-25px",
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1]}
    },

    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1]}
    }
}

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='navbar'>
      <h1>AB</h1>
      
      <div className='header'>
        <Button isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>
        <motion.div 
          className='menu'
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>
            {isActive && <Links toggleMenu={() => {setIsActive(!isActive)}} />}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;
