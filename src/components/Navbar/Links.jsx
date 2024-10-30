import { motion } from 'framer-motion';
import { perspective } from "./anim";
import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Links({ toggleMenu }) {

    const links = [
        {
            title: "Home",
            href: "/"
        },
    
        {
            title: "Projects",
            href: "/projects"
        },
        {
            title: "Contacts",
            href: "/contacts"
        },
    ]

  return (
    <div className='nav'>
       <div className='body'>
        {
            links.map((link, i) => {
                const { title, href } = link;
                
                return (
                    <div key={`b_${i}`}>
                        <motion.div
                          href={href}
                          custom={i}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                        >
                            <Link to={href} onClick={toggleMenu}>
                                {title}
                            </Link>
                        </motion.div>
                    </div>
                )
            })
        }
       </div>
    </div>
  )
}