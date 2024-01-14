import React, { Suspense } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Earth = (props) => {
  const earth = useGLTF("planet/scene.gltf");
  return (
    <>
      <primitive object={earth.scene} scale={2.7}></primitive>
    </>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{}}
    >
      
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Earth />
      
    </Canvas>
  );
};

export default EarthCanvas;
