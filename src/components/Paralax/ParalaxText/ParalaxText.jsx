import './ParalaxText.css'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from "framer-motion";

const ParalaxText = () => {

    const containerRef = useRef();

    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start end', 'end start']
    })

  return (
    <div className='paralax-text'>
        <div ref={containerRef}>
            <Slide direction={'left'} left={"-25%"} progress={scrollYProgress} />
        </div>
    </div>
  )
}

const Slide = (props) => {

    const direction = props.direction == 'left' ? -1 : 1;
    const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])

    return (
      <motion.div style={{x: translateX, left: props.left}} className="slide">
        <Phrase />
        <Phrase />
        <Phrase />
      </motion.div>
    )
  }
    
  const Phrase = ({src}) => {
    return (
      <div className='phrase'>
        <p>MY SKILLS • MY SKILLS •</p>
      </div>
    )
  }

export default ParalaxText