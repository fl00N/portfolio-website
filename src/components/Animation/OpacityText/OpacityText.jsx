import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import './OpacityText.css';
import GsapMagnetic from '../magnetic';
import { Link } from 'react-router-dom';

export default function OpacityText({ paragraph }) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.6", "start 0.1"]
  })

  const words = paragraph.split(" ");
  
  return (
    <p 
      ref={container}         
      className='paragraph'
    >
    {
      words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word 
            key={i} 
            progress={scrollYProgress} 
            range={[start, end]}
            isHighlight={word === "motivated"}
          >
            {word}
          </Word>
        );
      })
    }
          <GsapMagnetic>
            <Link to='/projects' className='magneticBtn'>
              <p>Explore projects</p>
            </Link>
          </GsapMagnetic>
    </p>
  )
}

const Word = ({ children, progress, range, isHighlight }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className={`word ${isHighlight ? 'highlight' : ''}`}>
      {
        children.split("").map((char, i) => {
          const start = range[0] + (i * step);
          const end = range[0] + ((i + 1) * step);
          return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>;
        })
      }
    </span>
  )
}

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className='shadow'>{children}</span>
      <motion.span style={{opacity: opacity}}>{children}</motion.span>
    </span>
  )
}
