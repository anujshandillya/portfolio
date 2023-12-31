import React, { Suspense } from "react";
import "./Me.css";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  OrthographicCamera,
} from "@react-three/drei";
import Box from "./canvas/Box";
import Avatar from "./canvas/Avatar";
import { Chair, Computer, Loader } from "./canvas";
import { useMediaQuery } from "@mui/material";

const Me = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[90px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
        <div>
          {useMediaQuery("(min-width:900px)") ? (
            ""
          ) : (
            <img src="/anuj-av.png" alt="Anuj Sharma" />
          )}
          <h1
            className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}
          >
            Hi, I'm <span className="text_field">Anuj Sharma</span>
          </h1>
          <p
            className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-300`}
          >
            Web Developer, Competitive Programmer, <br /> Artist, Video Editor.
          </p>
        </div>
        {useMediaQuery("(min-width:900px)") ? (
          <div className="flex w-[400px] h-[400px]">
            <Canvas>
              <ambientLight intensity={0.5} />
              <spotLight position={[0, 4, 3]} />
              <Suspense fallback={<Loader />}>
                <OrbitControls enableZoom={false}/>
                <Box scale={1} />
              </Suspense>
            </Canvas>
          </div>
        ) : (
          ""
        )}
        {useMediaQuery("(min-width:900px)") ? (
          <div className="absolute top-[300px] w-[90%] h-[100%] m-auto">
            <Suspense fallback={<Loader />}>
              <Canvas camera={{ position: [0, -20, 0], fov: 20 }}>
                <OrbitControls
                  enableZoom={false}
                  minPolarAngle={(5.7 * Math.PI) / 6}
                  maxPolarAngle={Math.PI}
                  minAzimuthAngle={0}
                  maxAzimuthAngle={0}
                />
                <OrthographicCamera />
                <pointLight position={[3, 1, 5]} intensity={300} />
                <ambientLight intensity={0.8} />
                <Avatar position={[-2, 0, -2]} scale={3.5} />
                <Computer scales={0.5} />
                <Chair position={[-3.5, 0.8, -2]} scales={0.01} />
              </Canvas>
            </Suspense>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Me;
