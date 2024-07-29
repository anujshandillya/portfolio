import React, { useRef } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { projects, projectsmobile } from "../constants";
import { useMediaQuery } from "@mui/material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const mapping = useMediaQuery("(min-width:390px)")
    ? projects
    : projectsmobile;
  const imgref = useRef();
  useGSAP(() => {
    const imgs = gsap.utils.toArray(imgref.current.children);
    for (var i = 0; i < imgs.length - 1; i++) {
      gsap.to(imgs[i], {
        duration: 2,
        opacity: 0,
        scale: 0.6,
        zIndex: -1000,
        scrollTrigger: {
          trigger: imgs[i],
          start: "top 10%",
          end: "bottom 20%",
          pin: true,
          // markers: {
          //   startColor: "white",
          //   endColor: "white",
          //   fontSize: "12px",
          //   indent: 20,
          // },
          scrub: 2,
        },
      });
    }
  });
  return (
    <>
      <div className={`${useMediaQuery("(min-width:350px)") ? "" : "mt-8"}`}>
        <p className={`${styles.sectionHeadText} my-2`}>
          Projects..<span className="text-[#915EFF]">.</span>
        </p>
        <div id="proimages" className="mt-20 flex flex-wrap gap-9" ref={imgref}>
          {mapping.map((project) => (
            <div key={project.name} className="items-center m-auto">
              <img
                className="rounded-3xl"
                width="1000px"
                src={project.image}
                alt={project.name}
              />
              <p className={`items-center text-bold text-[20px] text-center`}>
                {project.name}
              </p>
              <p className={`items-center text-center`}>
                {project.tags.map((tag) => (
                  <span className={`${tag.color} px-auto`}>&nbsp; {`#${tag.name}`} &nbsp;</span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
