import { SectionWrapper } from "../hoc";
import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useMediaQuery } from "@mui/material";
import { styles } from "../styles";
import { useSelector } from "react-redux";

const Education = () => {
  const theme=useSelector((state)=>state.mode);
  const bool=theme==='dark';
  return (
    <>
      <motion.div
        variants={textVariant()}
        className={`${useMediaQuery("(min-width:390px)") ? "" : "mt-8"}`}
      >
        <motion.p className={`${bool?styles.sectionHeadText:styles.sectionHeadText2} my-2`}>
          EDUCATION..<span className="text-[#915EFF]">.</span>
        </motion.p>
        <motion.div className="mt-12 flex flex-row flex-wrap justify-center gap-10">
          <VerticalTimeline lineColor={bool?"white":"black"}>
            {education.map((edu) => (
              <VerticalTimelineElement
                key={edu.company_name}
                contentStyle={{ background: "#0000", color: bool?'#fff':'black' }}
                contentArrowStyle={{ borderRight: "7px solid  #915EFF" }}
                date={edu.date}
                icon={
                  <div className="bg-primary rounded-full">
                    <img className="rounded-full bg-slate-300" src={edu.icon} alt={edu.company_name} />
                  </div>
                }
              >
                <motion.div>
                  <motion.h3 className={`${bool?'text-white':'text-black'} text-[20px] font-bold`}>
                    {edu.title}
                  </motion.h3>
                  <motion.p className={`${bool?'text-white':'text-black'}`}>{edu.company_name}</motion.p>
                </motion.div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </motion.div>
    </>
  );
};

const EducationWrapper = SectionWrapper(Education, "education");

export default EducationWrapper;
