import { MeshDistortMaterial, Sphere, useAnimations } from '@react-three/drei'
import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import {TextureLoader} from 'three/src/loaders/TextureLoader'
// import me from "./me2.png"

const Box = (props) => {
  // const colorMap = useLoader( TextureLoader, me);
  const myMesh = useRef();
  useFrame(({clock}) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a/2;
    myMesh.current.rotation.y = a/20;
    myMesh.current.rotation.z = a/3;
  });
  return (
      <mesh ref={myMesh} scale={props.scale}>
        <boxBufferGeometry attach="geometry" args={[3,3,3]} />
        <meshNormalMaterial attach="material" />
      </mesh>
  )
}

export default Box