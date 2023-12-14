import React from "react";
import { LocationOn, Email } from "@mui/icons-material";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { services, servicesmobile } from "../constants";
import { Tilt } from "react-tilt";
import { useMediaQuery } from "@mui/material";

const ServiceCard = (index, title, icon) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 1, 0.75)}
      className="w-full white-[#915EFF]-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const mapping = useMediaQuery("(min-width:390px)") ? services : servicesmobile
  return (
    <>
      <motion.div
        variants={textVariant()}
        className={`${useMediaQuery("(min-width:390px)") ? "" : "mt-8"}`}
      >
        <p className={`${styles.sectionSubText}`}>INTRODUCTION</p>
        <p className={`${styles.sectionHeadText} my-2`}>
          OVERVIEW..<span className="text-[#915EFF]">.</span>
        </p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello! I'm Anuj Sharma, a creative developer specializing in MERN stack
        web development. With a strong command of frontend and backend
        technologies, I craft dynamic and user-friendly websites. Beyond coding,
        I'm a skilled artist in sketching, painting, video editing, and photo
        editing.
        <br />
        <br />I strive to combine my technical prowess with my artistic
        sensibilities, delivering websites and digital experiences that are not
        only visually appealing but also functionally robust. I am constantly
        seeking opportunities to learn and grow, staying up-to-date with the
        latest trends and technologies in the industry.
        <br />
        <br /> My diverse skill set allows me to create visually captivating
        digital experiences. Let's collaborate and bring your ideas to life!
      </motion.p>
      <br />
      <span className="mx-10">
        Faridabad <LocationOn />
      </span>
      <a className="mx-9" href="#contact">
        Email <Email />
      </a>

      <div className="mt-20 flex flex-wrap gap-10">
        {mapping.map((services, index) => (
          <Tilt className="xs:w-[250px] w-full" key={index}>
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
                className="bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              >
                <img
                  src={services.icon}
                  alt={services.title}
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  {services.title}
                </h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
