import React, { Suspense, useEffect, useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { useMediaQuery } from "@mui/material";
import { styles } from "../styles";
import { Earth } from "./canvas";
import Loader from "./canvas/Loader";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const earthref = useRef();
  const contactref = useRef();
  const form = useRef();
  const [field, setfield] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  useGSAP(() => {
    gsap.from(earthref.current, {
      x:1000,
      duration: 2,
      ease: "back.out",
      scrollTrigger: {
        trigger: earthref.current,
      }
    });
    gsap.from(contactref.current, {
      x:-1000,
      duration: 2,
      ease: "back.out",
      scrollTrigger: {
        trigger: earthref.current,
      }
    })
  })
  useEffect(() => {
    if (field !== "" || field !== "success") {
      setInterval(() => {
        setfield("");
      }, 3000);
    }
  }, [field]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const Msg = {
      name,
      email,
      message,
    };
    try {
      if (name.length === 0) {
        setfield("name");
        throw "Name field cannot be empty.";
      }
      if (email.length === 0) {
        setfield("email");
        throw "Email field cannot be empty.";
      }
      if (message.length === 0) {
        setfield("message");
        throw "Message field cannot be empty.";
      }
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then((result) => {
          console.log(result.text);
          setfield("success");
        })
        .catch((error) => {
          console.log(error.text);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className={`${useMediaQuery("(min-width:390px)") ? "" : "mt-8"}`}
      >
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
          <div
            ref={contactref}
            className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
          >
            {field === "" ? (
              <p
                className={`${styles.sectionHeadText} my-2`}
              >
                Contact..<span className="text-[#915EFF]">.</span>
              </p>
            ) : field === "success" ? (
              <p
                className={`${styles.sectionHeadText} my-2`}
              >
                Success..<span className="text-green-500">.</span>
              </p>
            ) : (
              <p
                className={`${styles.sectionHeadText} my-2`}
              >
                Error..<span className="text-red-600">.</span>
              </p>
            )}
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="text-white font-mediummb-4">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder={
                    field === "name"
                      ? "Name field cannot be empty!!!"
                      : "Your name..."
                  }
                  onChange={(e) => setName(e.target.value)}
                  value={form.name}
                  className={`bg-tertiaty py-4 px-6 ${
                    field === "name"
                      ? "placeholder:text-red-400"
                      : "placeholder:text-secondary"
                  } text-white rounded-lg outlined-none border-none font-medium`}
                />
              </label>
              <label className="flex flex-col">
                <span className="t-white font-mediummb-4">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder={
                    field === "email"
                      ? "Email field cannot be empty!!!"
                      : "Your email..."
                  }
                  onChange={(e) => setEmail(e.target.value)}
                  value={form.email}
                  className={`bg-tertiaty py-4 px-6 ${
                    field === "email"
                      ? "placeholder:text-red-400"
                      : "placeholder:text-secondary"
                  } text-white rounded-lg outlined-none border-none font-medium`}
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-mediummb-4">Message</span>
                <textarea
                  rows="9"
                  name="message"
                  placeholder={
                    field === "message"
                      ? "Message field cannot be empty!!!"
                      : "What's your message"
                  }
                  onChange={(e) => setMessage(e.target.value)}
                  value={form.message}
                  className={`bg-tertiaty py-4 px-6 ${
                    field === "message"
                      ? "placeholder:text-red-400"
                      : "placeholder:text-secondary"
                  } text-white rounded-lg outlined-none border-none font-medium`}
                />
              </label>
              <button
                type="submit"
                onClick={handleSubmit}
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Submit...
              </button>
            </form>
          </div>
          <div ref={earthref} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
            <Suspense fallback={<Loader />}>
              <Earth />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
