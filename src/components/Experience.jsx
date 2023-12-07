import React from "react";
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

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className={`${useMediaQuery("(min-width:390px)") ? "" : "mt-8"}`}
      >
        <motion.p className={`${styles.sectionHeadText} my-2`}>
          EXPERIENCE..<span className="text-[#915EFF]">.</span>
        </motion.p>
        <motion.div className="mt-12 flex flex-row flex-wrap justify-center gap-10">
          <VerticalTimeline>
            {experiences.map((exp) => (
              <VerticalTimelineElement
                key={exp.company_name}
                contentStyle={{ background: "#0000", color: "#fff" }}
                contentArrowStyle={{ borderRight: '7px solid  #915EFF' }}
                date={exp.date}
                icon={
                  <div className="bg-primary rounded-full">
                    <img 
                      src={exp.icon}
                      alt={exp.company_name}
                    />
                  </div>
                }
              >
                <motion.div>
                  <motion.h3 className="text-white text-[20px] font-bold">
                    {exp.title}
                  </motion.h3>
                  <motion.p>{exp.company_name}</motion.p>
                </motion.div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {exp.points.map((point) => (
                    <li>{point}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
