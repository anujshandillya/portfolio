import {
  Decal,
  Float,
  MeshDistortMaterial,
  OrbitControls,
  PerspectiveCamera,
  Sphere,
  useAnimations,
} from "@react-three/drei";
import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
// import { CircleLoader } from "react-spinners";

const Ball = (props) => {
  const colorMap = useLoader(TextureLoader, props.url);
  return (
    <>
      <Float speed={1.75} rotationIntensity={0.75} floatIntensity={10}>
        <ambientLight intensity={1} />
        <Sphere scale={2}>
          <meshNormalMaterial />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
            map={colorMap}
          />
        </Sphere>
      </Float>
    </>
  );
};

const BallCanvas = (props) => {
  return (
    <>
      <Canvas>
        <PerspectiveCamera />
        <ambientLight />
        <spotLight />
        <Suspense fallback={null}>
          <Ball url={props.imgurl} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default BallCanvas;
