import { useRef } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { useMediaQuery } from "@mui/material";
import { services } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const theme=useSelector((state)=>state.mode);
  const bool=theme==='dark';
  const umq=useMediaQuery("(min-width:450px)");
  const x=umq?"30px":"0px"
  const g=umq?"200px":"0px"
  console.log(x);
  const div1=useRef();
  const div2=useRef();
  const div3=useRef();
  const div4=useRef();
  const div5=useRef();
  useGSAP(() => {
    const ser1=gsap.utils.toArray(div1.current.children);
    const ser2=gsap.utils.toArray(div2.current.children);
    const ser3=gsap.utils.toArray(div3.current.children);
    const ser4=gsap.utils.toArray(div4.current.children);
    const ser5=gsap.utils.toArray(div5.current.children);
    if(umq) {
      for(let i=0;i<ser1.length;i++) {
        gsap.to(ser1[i],{
          gap: g,
          margin: x,
          duration: 0.5,
          scrollTrigger: {
            trigger: ser1[i],
            start: "top 80%",
            end: "top 60%",
            scrub: 3,
          },
        });
      }
      for(let i=0;i<ser2.length;i++) {
        gsap.to(ser2[i],{
          gap: g,
          margin: x,
          duration: 0.5,
          scrollTrigger: {
            trigger: ser2[i],
            start: "top 75%",
            end: "top 60%",
            scrub: 3,
          },
        });
      }
      for(let i=0;i<ser3.length;i++) {
        gsap.to(ser3[i],{
          gap: g,
          margin: x,
          duration: 0.5,
          scrollTrigger: {
            trigger: ser3[i],
            start: "top 70%",
            end: "top 60%",
            scrub: 3,
          },
        });
      }
      for(let i=0;i<ser4.length;i++) {
        gsap.to(ser4[i],{
          gap: g,
          margin: x,
          duration: 0.5,
          scrollTrigger: {
            trigger: ser4[i],
            start: "top 65%",
            end: "top 60%",
            scrub: 3,
          },
        });
      }
      for(let i=0;i<ser5.length;i++) {
        gsap.to(ser5[i],{
          gap: g,
          margin: x,
          duration: 0.5,
          scrollTrigger: {
            trigger: ser5[i],
            start: "top 60%",
            end: "top 60%",
            scrub: 3,
          },
        });
      }
    }else {
      for(let i=0;i<ser1.length;i++) {
        gsap.from(ser1[i],{
          gap: g,
          margin: x,
          duration: 0.5,
          scrollTrigger: {
            trigger: ser1[i],
            start: "top 80%",
            end: "top 60%",
            scrub: 3,
          },
        });
      }
      for(let i=0;i<ser2.length;i++) {
        gsap.from(ser2[i],{
          gap: g,
          margin: x,
          duration: 0.5,
          scrollTrigger: {
            trigger: ser2[i],
            start: "top 75%",
            end: "top 60%",
            scrub: 3,
          },
        });
      }
      for(let i=0;i<ser3.length;i++) {
        gsap.from(ser3[i],{
          gap: g,
          margin: x,
          duration: 0.5,
          scrollTrigger: {
            trigger: ser3[i],
            start: "top 70%",
            end: "top 60%",
            scrub: 3,
          },
        });
      }
      for(let i=0;i<ser4.length;i++) {
        gsap.from(ser4[i],{
          gap: g,
          margin: x,
          duration: 0.5,
          scrollTrigger: {
            trigger: ser4[i],
            start: "top 65%",
            end: "top 60%",
            scrub: 3,
          },
        });
      }
      for(let i=0;i<ser5.length;i++) {
        gsap.from(ser5[i],{
          gap: g,
          margin: x,
          duration: 0.5,
          scrollTrigger: {
            trigger: ser5[i],
            start: "top 60%",
            end: "top 60%",
            scrub: 3,
          },
        });
      }
    }
  })

  return (
    <>
      <div className={`${useMediaQuery("(min-width:390px)") ? "" : "mt-8"}`}>
        <p className={`${bool?styles.sectionHeadText:styles.sectionHeadText2}`}>
          SKILLS..<span className="text-[#915EFF] mb-6">.</span>
        </p>

        <div ref={div1} className="mt-28 flex flex-row flex-wrap justify-center gap-10">
          <div className="flex gap-10">
            {/* node */}
            <span className="xs:w-[50px]">
              <img width="50px" height="50px" src={services[0].icon} alt={services[0].title} />
            </span>
            {/* cpp */}
            <span className="xs:w-[50px]">
              <img width="50px" height="50px" src={services[1].icon} alt={services[0].title} />
            </span>
            {/* python */}
            <span className="xs:w-[50px]">
              <img width="50px" height="50px" src={services[2].icon} alt={services[0].title} />
            </span>
            {/* mongo */}
            <span className="xs:w-[50px]">
              <img width="50px" height="50px" src={services[3].icon} alt={services[0].title} />
            </span>
          </div>
        </div>

        <div ref={div2} className=" flex flex-row flex-wrap justify-center gap-10">
          <div className="flex gap-10">
            {/* reactjs */}
            <span className="xs:w-[50px]">
              <img width="50px" height="50px" src={services[4].icon} alt={services[0].title} />
            </span>
            {/* gsap */}
            <span className="xs:w-[50px]">
              <img width="50px" height="50px" src={services[5].icon} alt={services[0].title} />
            </span>
            {/* next */}
            <span className="xs:w-[50px]">
              <img width="50px" height="50px" className="bg-white rounded-full" src={services[6].icon} alt={services[0].title} />
            </span>
          </div>
        </div>

        <div ref={div3} className=" flex flex-row flex-wrap justify-center gap-10">
          <div className="flex gap-10">
            {/* aws */}
            <span className="xs:w-[50px]">
              <img width="50px" height="50px" src={services[7].icon} alt={services[0].title} />
            </span>
            {/* docker */}
            <span className="xs:w-[50px]">
              <img width="50px" height="50px"
                className="rounded-full"
                src={services[8].icon}
                alt={services[0].title}
              />
            </span>
          </div>
        </div>

        <div ref={div4} className=" flex flex-row flex-wrap justify-center gap-10">
          <div className="flex gap-10">
            {/* redux */}
            <span className="xs:w-[50px]">
              <img width="50px" height="50px" src={services[9].icon} alt={services[0].title} />
            </span>
            {/* framer motion */}
            <span className="xs:w-[50px]">
              <img width="50px" height="50px" src={services[10].icon} alt={services[0].title} />
            </span>
            {/* three  */}
            <span className="xs:w-[50px]">
              <img width="50px" height="50px" className="bg-white rounded-full" src={services[11].icon} alt={services[0].title} />
            </span>
          </div>
        </div>

        <div ref={div5} className="flex flex-row flex-wrap justify-center gap-10">
          <div className="flex gap-10">
            {/* ai */}
            <span className="xs:w-[50px]">
              <img width="50px" height="50px" src={services[12].icon} alt={services[0].title} />
            </span>
            {/* photo */}
            <span className="xs:w-[50px]">
              <img width="50px" height="50px" src={services[13].icon} alt={services[0].title} />
            </span>
            {/* pr */}
            <span className="xs:w-[50px]">
              <img width="50px" height="50px" src={services[14].icon} alt={services[0].title} />
            </span>
            {/* blender */}
            <span className="xs:w-[50px]">
              <img width="50px" height="50px" src={services[15].icon} alt={services[0].title} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const SkillsWrapper = SectionWrapper(Skills, "skills");

export default SkillsWrapper;
