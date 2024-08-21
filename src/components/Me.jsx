import React, { Suspense } from "react";
import "./Me.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import Avatar from "./canvas/Avatar";
import { Chair, Computer, Loader } from "./canvas";
import { useMediaQuery } from "@mui/material";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { logo, me } from "../assets";
import {
  ClosedCaption,
  Code,
  Description,
  Email,
  GitHub,
  LinkedIn,
  X,
} from "@mui/icons-material";

const Me = () => {
  useGSAP(() => {
    gsap.from("#box", {
      x: 700,
      duration: 1,
      scale: 3,
      ease: "back.out",
    });
    gsap.from("#anuj", {
      duration: 1.5,
      y: 600,
      scale: 0.2,
    });
    gsap.from("#head-anuj", {
      duration: 1.5,
      x: -600,
      ease: "back.out",
      scale: 0.2,
    });
    gsap.from("#para-anuj", {
      duration: 1.5,
      x: -1200,
      delay: 1.5,
      scale: 2,
      ease: "back.out",
    });
  });
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[90px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
        <div>
          {useMediaQuery("(min-width:900px)") ? (
            ""
          ) : (
            <div id="anuj">
              <div>
                <img src="/anuj-av.png" alt="Anuj Sharma" />
              </div>
              <div className="flex flex-row gap-3 py-2 justify-center">
                <a href="#contact">
                  <Email size={24} />
                </a>
                <a
                  href="https://github.com/anujshandillya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anuj-sharma-957407227/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn size={24} />
                </a>
                <a
                  href="https://x.com/anujshandillya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <X size={24} />
                </a>
                <a
                  href="https://codeforces.com/profile/anujshandillya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code size={24} />
                </a>
                <a
                  href="https://www.codechef.com/users/anujshandillya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ClosedCaption size={24} />
                </a>
                <a
                  href="https://drive.google.com/file/d/1UsVNy7XtPSUGgBU6WsAk4lTzRK89JRGV/view?usp=drive_link"
                  target="_blank"
                >
                  <Description size={24} />
                </a>
              </div>
            </div>
          )}
          <h1
            id="head-anuj"
            className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2`}
          >
            Hi, I'm <span className="text_field">Anuj Sharma</span>
          </h1>
          <p
            id="para-anuj"
            className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-300`}
          >
            Web Developer, Competitive Programmer, <br /> Artist, Video Editor.
          </p>
        </div>
        {useMediaQuery("(min-width:900px)") ? (
          <div id="box" className="w-[330px] z-10">
            <img
              className="overflow-hidden rounded-full"
              src={me}
              alt="Anuj Sharma"
            />
            <div className="flex flex-row gap-3 py-2 justify-center">
              <a href="#contact">
                <Email size={24} />
              </a>
              <a
                href="https://github.com/anujshandillya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/anuj-sharma-957407227/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn size={24} />
              </a>
              <a
                href="https://x.com/anujshandillya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <X size={24} />
              </a>
              <a
                href="https://codeforces.com/profile/anujshandillya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code size={24} />
              </a>
              <a
                href="https://www.codechef.com/users/anujshandillya"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ClosedCaption size={24} />
              </a>
              <a
                href="https://drive.google.com/file/d/1UsVNy7XtPSUGgBU6WsAk4lTzRK89JRGV/view?usp=drive_link"
                target="_blank"
              >
                <Description size={24} />
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
        {useMediaQuery("(min-width:900px)") ? (
          <div className="absolute top-[300px] w-[90%] h-[100%] m-auto">
            <Suspense fallback={<Loader />}>
              <Canvas id="anuj" camera={{ position: [0, -20, 0], fov: 20 }}>
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
