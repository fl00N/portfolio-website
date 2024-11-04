import { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { useMotionValue, useSpring } from "framer-motion"
import Model from './ModelShapes';

export default function Shapes() {

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothMouse = {
    x: useSpring(mouse.x, {stiffness: 75, damping: 100, mass: 3}),
    y: useSpring(mouse.y, {stiffness: 75, damping: 100, mass: 3})
  }

  const manageMouse = e => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth
    const y = clientY / innerHeight
    mouse.x.set(x);
    mouse.y.set(y);
  }

  useEffect( () => {
    window.addEventListener("mousemove", manageMouse)
    return () => window.removeEventListener("mousemove", manageMouse)
  }, [])

  return (
    <Canvas 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none',
        background: "transparent", 
        height: '100vh', 
        width: '100vw'
      }} 
      orthographic 
      camera={{position: [0, 0, 200], zoom: 10}}
    >
        <Model mouse={smoothMouse}/>
        <Environment preset="studio"/>
    </Canvas>
  )
}
