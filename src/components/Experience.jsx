import { SectionWrapper } from "../hoc";
import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useMediaQuery } from "@mui/material";
import { styles } from "../styles";
import { useSelector } from "react-redux";

const Experience = () => {
  const theme=useSelector((state)=>state.mode);
  const bool=theme==='dark';
  return (
    <>
      <motion.div
        variants={textVariant()}
        className={`${useMediaQuery("(min-width:390px)") ? "" : "mt-8"}`}
      >
        <motion.p className={`${bool?styles.sectionHeadText:styles.sectionHeadText2} my-2`}>
          EXPERIENCE..<span className="text-[#915EFF]">.</span>
        </motion.p>
        <motion.div className="mt-12 flex flex-row flex-wrap justify-center gap-10">
          <VerticalTimeline lineColor={bool?"white":"black"}>
            {experiences.map((exp) => (
              <VerticalTimelineElement
                key={exp.company_name}
                contentStyle={{ background: "#0000", color: bool?'#fff':'black' }}
                contentArrowStyle={{ borderRight: "7px solid  #915EFF" }}
                date={exp.date}
                icon={
                  <div className="bg-primary rounded-full">
                    <img className="rounded-full" src={exp.icon} alt={exp.company_name} />
                  </div>
                }
              >
                <motion.div>
                  <motion.h3 className={`${bool?'text-white':'text-black'} text-[20px] font-bold`}>
                    {exp.title}
                  </motion.h3>
                  <motion.p className={`${bool?'text-white':'text-black'}`}>@{exp.company_name}</motion.p>
                </motion.div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </motion.div>
    </>
  );
};

const ExperienceWrapper = SectionWrapper(Experience, "experience");

export default ExperienceWrapper;
