import React, { useRef } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { projects } from "../constants";
import { useMediaQuery } from "@mui/material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const theme=useSelector((state)=>state.mode);
  const bool=theme==='dark';
  const mapping = projects;
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
          scrub: 2,
        },
      });
    }
  });
  return (
    <>
      <div className={`${useMediaQuery("(min-width:350px)") ? "" : "mt-8"}`}>
        <p className={`${bool?styles.sectionHeadText:styles.sectionHeadText2} my-2`}>
          Projects..<span className="text-[#915EFF]">.</span>
        </p>
        <div id="proimages" className="mt-20 flex flex-wrap gap-9" ref={imgref}>
          {mapping.map((project) => (
            <div key={project.name} className="items-center m-auto">
              <Link to={`${project.site}`} target="_blank" rel="noopener noreferrer">
              <img
                className="rounded-3xl"
                width="1000px"
                src={project.image}
                alt={project.name}
                />
              </Link>
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
