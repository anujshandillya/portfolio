import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { projects, projectsmobile } from "../constants";
import { useMediaQuery } from "@mui/material";
import { Tilt } from "react-tilt";

const Projects = () => {
  const mapping = useMediaQuery("(min-width:390px)") ? projects : projectsmobile;
  return (
    <>
      <motion.div
        variants={textVariant()}
        className={`${useMediaQuery("(min-width:350px)") ? "" : "mt-8"}`}
      >
        <motion.p className={`${styles.sectionHeadText} my-2`}>
          Projects..<span className="text-[#915EFF]">.</span>
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-9">
          {mapping.map((project, index) => (
            <Tilt className="xs:w-[360px] w-full" key={index}>
              <motion.div
                variants={fadeIn("right", "spring", index * 1, 0.75)}
                className="w-full bg-gradient-to-br from-purple-200 via-purple-400 to-purple-800 p-[2px] rounded-[20px] shadow-card"
              >
                <div
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                  className="bg-primary rounded-[20px] py-2 px-2 min-h-[280px] flex justify-evenly flex-col"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-[20px] w-full object-contain"
                  />
                  <h3 className="ml-2 mt-4 text-[20px] font-bold">
                    {project.name}
                  </h3>
                  <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-1 text-secondary text-[14px] max-w-3xl leading-[30px]"
                  >
                    {project.description}
                  </motion.p>
                  <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-1 text-secondary text-[14px] max-w-3xl leading-[30px]"
                  >
                    {project.tags.map((tag, index) => (
                      <span className={tag.color} key={tag.name}>
                        #{tag.name}&nbsp;
                      </span>
                    ))}
                  </motion.p>
                  <br />
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
