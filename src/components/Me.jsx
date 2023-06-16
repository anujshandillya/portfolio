import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import Box from './canvas/Box'
import Avatar from './canvas/Avatar'
import { Chair, Computer } from './canvas'

const Me = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className='absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5'>
        <div>
          <h1 className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Anuj Sharma</span>
          </h1>
          <p className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-300`}>
            Web Developer, Competitive Programmer, <br /> Artist, Video Editor.
          </p>
        </div>
        <div className="flex w-[400px] h-[400px]">
          <Canvas>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <spotLight position={[0, 4, 3]} />
            <Suspense fallback={null}>
              <Box />
            </Suspense>
          </Canvas>
        </div>
        <div className='absolute top-[360px] w-full h-[700px]'>
          <Canvas camera={{ position: [0, -20, 0], fov: 20 }}>
            {/* <OrbitControls /> */}
            <PerspectiveCamera />
            <ambientLight intensity={0.5} />
            <spotLight position={[-2, 1, 3]} />
            <Suspense fallback={null}>
              <Avatar position={[-2, 0, -2]} scale={3.5} />
              <Computer />
              <Chair />
            </Suspense>
          </Canvas>
        </div>
      </div>

    </section>
  )
}

export default Me