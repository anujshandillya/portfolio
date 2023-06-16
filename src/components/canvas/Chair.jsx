import { Clone, useGLTF } from '@react-three/drei'
import React from 'react'

const Chair = () => {
    const login = useGLTF("/scene.glb");
    console.log(login);
    return (
      <Clone object={login.scene} rotation={[2,1,6]} position={[-3.5,0.8,-2]} scale={0.01}>
  
      </Clone>
    )
}

export default Chair