import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { useMediaQuery } from "@mui/material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NavBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggler] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    gsap.from("#navbar", {
      duration: 1.5,
      y: -100,
    });
    gsap.from("#anujsharmartx", {
      duration: 1.5,
      x: -600,
      delay: 1.2,
    });
    gsap.from("#nav-list", {
      duration: 1.5,
      x: 600,
      delay: 1.2,
    });
    gsap.from("#link", {
      duration: 1.5,
      opacity: 0,
      delay: 0.2,
      stagger: 0.2,
    });
  }, []);

  return (
    <div>
      <nav
        id="navbar"
        className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            id="anujsharmartx"
            to="/"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
            className="flex items-center"
          >
            <img
              src={`${logo}`}
              className="w-12 h-12 object-contain rounded-full"
              alt="Me"
            />
            <p className="text-color-white text-[20px] font-bold cursor-pointer flex">
              &nbsp; Anuj Sharma &nbsp;
              {useMediaQuery("(min-width:1000px)") ? "| @anujsharmartx" : ""}
            </p>
          </Link>
          <ul
            id="nav-list"
            className="list-none hidden sm:flex flex-row gap-10"
          >
            {navLinks.map((nav) => (
              <li
                id="link"
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggler(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    id="link"
                    key={nav.id}
                    className={`font-poppins hover:text-white font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggler(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
