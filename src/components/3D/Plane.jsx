import React, { useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

const Model = ({ scale }) => {
  const { scene, animations } = useGLTF("/plane.glb");
  const modelRef = useRef();
  const mixer = useRef();

  useEffect(() => {
    if (animations && animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
    }

    return () => mixer.current?.stopAllAction();
  }, [animations, scene]);

  useFrame((state, delta) => {
    mixer.current?.update(delta);
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={scale}
      position={[0, 0, 0]}
    />
  );
};

const Plane = () => {
  const [scale, setScale] = useState([2.5, 2.5, 2.5]);
  const [dimensions, setDimensions] = useState({ width: "60rem", height: "50rem" });

  const updateScaleAndDimensions = () => {
    if (window.innerWidth < 1320) {
      setScale([3.2, 3.2, 3.2]);
      setDimensions({ width: "30rem", height: "25rem" });
    } else {
      setScale([2.5, 2.5, 2.5]);
      setDimensions({ width: "60rem", height: "50rem" });
    }
  };

  useEffect(() => {
    updateScaleAndDimensions();
    window.addEventListener("resize", updateScaleAndDimensions);

    return () => {
      window.removeEventListener("resize", updateScaleAndDimensions);
    };
  }, []);

  return (
    <div
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
    >
      <Canvas camera={{ position: [3, 1, 4], fov: 50 }} shadows={true}>
        <ambientLight intensity={2} />
        <spotLight
          position={[1, 6, 1.5]}
          angle={0.2}
          penumbra={1}
          intensity={2.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <spotLight
          position={[-5, 5, -1.5]}
          angle={0.03}
          penumbra={1}
          intensity={4}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <spotLight
          position={[5, 5, -5]}
          angle={0.3}
          penumbra={1}
          intensity={4}
          castShadow
          shadow-mapSize={[256, 256]}
          color="#ffffc0"
        />
        <Suspense fallback={null}>
          <Model scale={scale} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />      
      </Canvas>
    </div>
  );
};

export default Plane;
