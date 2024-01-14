import React, { Suspense, useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant, fadeIn, slideIn } from "../utils/motion";
import { useMediaQuery } from "@mui/material";
import { styles } from "../styles";
import { Earth } from "./canvas";
import Loader from "./canvas/Loader";
import emailjs from "@emailjs/browser";

const PopUp = (props) => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className={`${useMediaQuery("(min-width:390px)") ? "" : "mt-8"}`}
      >
        <motion.div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
          >
            <motion.p
              variants={slideIn("right", "tween", 0.2, 1)}
              className={`${styles.sectionHeadText} my-2`}
            >
              Error..<span className="text-red-600">.</span>
            </motion.p>
            <form
              className="mt-12 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="text-white font-mediummb-4">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name..."
                  onChange={(e) => setName(e.target.value)}
                  value={props.field==="name" ? "Name cannot be empty!!!" : ""}
                  className="bg-tertiaty py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="t-white font-mediummb-4">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email..."
                  onChange={(e) => setEmail(e.target.value)}
                  value={props.field==="email" ? "Email cannot be empty!!!" : ""}
                  className="bg-tertiaty py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-mediummb-4">Message</span>
                <textarea
                  rows="9"
                  name="message"
                  placeholder="What's your message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={props.field==="message" ? "Write something!!!" : ""}
                  className="bg-tertiaty py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                />
              </label>
              </form>
          </motion.div>
          <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
            <Suspense fallback={<Loader />}>
              <Earth />
            </Suspense>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default  SectionWrapper(PopUp, "contact")