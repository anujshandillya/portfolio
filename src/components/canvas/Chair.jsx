import { Clone, useGLTF } from '@react-three/drei'
import React from 'react'

const Chair = (props) => {
    const login = useGLTF("/scene.glb");
    return (
      <Clone object={login.scene} rotation={[2,1,6]} position={props.position} scale={props.scales}>
  
      </Clone>
    )
}

export default Chair