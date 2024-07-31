import React, { useRef } from "react";
import { Email } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import CodeIcon from "@mui/icons-material/Code";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { useMediaQuery } from "@mui/material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const divref=useRef();
  const anchoref=useRef();
  useGSAP(() => {
    const target=divref.current;
    const target2=anchoref.current;
    const links=gsap.utils.toArray(target2.children);
    gsap.from(target,{
      x:-1000,
      duration: 0.5,
      scrollTrigger: {
        trigger: target,
        start: "top 40%",
        end: "top 5%",
      },
    });
    gsap.to(target,{
      y:100,
      duration: 0.5,
      scrollTrigger: {
        trigger: target,
        start: "top 10%",
        end: "top 5%",
        scrub: 1,
      },
    });
    for(var i=0;i<links.length;i++) {
      gsap.to(links[i],{
        opacity: 1,
        y: 10,
        margin: "50px",
        duration: 0.5,
        scrollTrigger: {
          trigger: links[i],
          start: "top 60%",
          end: "top 40%",
        }
      });
    }
  },[])
  return (
    <>
      <div ref={divref}>
        <div className={`${useMediaQuery("(min-width:390px)") ? "" : "mt-8"}`}>
          <p className={`${styles.sectionSubText}`}>INTRODUCTION</p>
          <p className={`${styles.sectionHeadText} my-2`}>
            OVERVIEW..<span className="text-[#915EFF]">.</span>
          </p>
        </div>

        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Hello! I'm Anuj Sharma, a creative developer specializing in MERN
          stack web development. With a strong command of frontend and backend
          technologies, I craft dynamic and user-friendly websites. Beyond
          coding, I'm a skilled artist in sketching, painting, video editing,
          and photo editing.
          <br />
          <br />I strive to combine my technical prowess with my artistic
          sensibilities, delivering websites and digital experiences that are
          not only visually appealing but also functionally robust. I am
          constantly seeking opportunities to learn and grow, staying up-to-date
          with the latest trends and technologies in the industry.
          <br />
          <br /> My diverse skill set allows me to create visually captivating
          digital experiences. Let's collaborate and bring your ideas to life!
        </p>
        <br />
        <div class="flex items-center justify-center">
          <div ref={anchoref} class="p-8 rounded shadow-lg">
            <a className="opacity-0" href="#contact">
              <Email style={{ fontSize: "2rem" }} />
              <span className="text-[18px]">Email</span>
            </a>
            <a className="opacity-0" href="https://github.com/anujshandillya">
              <GitHubIcon style={{ fontSize: "2rem" }} />
              <span className="text-[18px]">Github</span>
            </a>
            <a
              className="opacity-0"
              href="https://www.linkedin.com/in/anuj-sharma-957407227/"
            >
              <LinkedInIcon style={{ fontSize: "2rem" }} />
              <span className="text-[18px]">LinkedIn</span>
            </a>
            <a
              className="opacity-0"
              href="https://codeforces.com/profile/anujshandillya"
            >
              <CodeIcon style={{ fontSize: "2rem" }} />
              <span className="text-[18px]">Codeforces</span>
            </a>
            <a
              className="opacity-0"
              href="https://www.codechef.com/users/anujshandillya"
            >
              <ClosedCaptionIcon style={{ fontSize: "2rem" }} />
              <span className="text-[18px]">CodeChef</span>
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center text-center"></div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
