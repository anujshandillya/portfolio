import { Clone, useGLTF } from '@react-three/drei'
import React from 'react'

const Computer = () => {
  const login = useGLTF("/mydesktop.glb");
  console.log(login);
  return (
    <Clone object={login.scene} rotation={[1.8,2.3,6.3]} position={[-1,-3,0.1]} scale={0.5}>

    </Clone>
  )
}

export default Computer