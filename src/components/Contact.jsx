import React, { useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant, fadeIn, slideIn } from "../utils/motion";
import { useMediaQuery } from "@mui/material";
import { styles } from "../styles";
import { Earth } from "./canvas";

const Contact = () => {
  const ref = useRef();
  const [form, setform] = useState([
    {
      name: "",
      email: "",
      message: "",
    },
  ]);

  const [loading, setloading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};
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
              Contact..<span className="text-[#915EFF]">.</span>
            </motion.p>
            <form
              ref={ref}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="text-white font-mediummb-4">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name..."
                  onChange={handleChange}
                  value={form.name}
                  className="bg-tertiaty py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="t-white font-mediummb-4">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email..."
                  onChange={handleChange}
                  value={form.email}
                  className="bg-tertiaty py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-mediummb-4">Message</span>
                <textarea
                  rows="9"
                  name="message"
                  placeholder="What's your message"
                  onChange={handleChange}
                  value={form.message}
                  className="bg-tertiaty py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                />
              </label>
            </form>
          </motion.div>
          <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
            <Earth />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
