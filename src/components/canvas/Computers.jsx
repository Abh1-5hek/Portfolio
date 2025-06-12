import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('/desktop_pc/scene.gltf');

  return (  
    <primitive
      object={computer.scene}
      scale={isMobile ? 0.65:0.75}
      position={isMobile ? [0,-3,-2.2]:[0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
    /> 
  );
};

export const ComputersCanvas = () => {

  const [isMobile, setIsMobile]= useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)'); // Correct syntax for media query
    setIsMobile(mediaQuery.matches); // Set initial value

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches); // Update state on change
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange); // Use correct listener syntax

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange); // Clean up on unmount
    };
  }, []);

  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.3} />
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
