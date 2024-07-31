import {
  reactjs,
  redux,
  nodejs,
  mongodb,
  threejs,
  ps,
  ai,
  blender,
  cpp,
  py,
  pr,
  fm,
  ina,
  sm,
  next,
  aws,
  gsap,
  docker,
  zaika,
  docbot,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  // 1
  {
    title: "Backend Developer",
    icon: nodejs,
  },
  // 2
  {
    title: "Competitive Programmer",
    icon: cpp,
  },
  // 3
  {
    title: "python",
    icon: py,
  },
  // 4
  {
    title: "MongoDB",
    icon: mongodb,
  },
  // 5
  {
    title: "React Developer",
    icon: reactjs,
  },
  // 6
  {
    title: "gsap",
    icon: gsap,
  },
  // 7
  {
    title: "next",
    icon: next,
  },
  // 8
  {
    title: "aws",
    icon: aws,
  },
  // 9
  {
    title: "docker",
    icon: docker,
  },
  // 10
  {
    title: "Redux Toolkit",
    icon: redux,
  },
  // 11
  {
    title: "Framer Motion",
    icon: fm
  },
  // 12
  {
    title: "Three JS",
    icon: threejs,
  },
  // 13
  {
    title: "Artist",
    icon: ai,
  },
  // 14
  {
    title: "Editor",
    icon: ps,
  },
  // 15
  {
    title: "Video Editor",
    icon: pr
  },
  // 16
  {
    title: "Blender",
    icon: blender,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "HS Webtech Solutions",
    icon: reactjs,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Incorporated Google Adsense for client business website."
    ],
  }
];

const projects = [
  {
    name: "Social Media",
    description:
    "Enabling seamless social experiences, our recently developed platform facilitates user registration, effortless login, and easy sharing of memorable moments through hassle-free uploads.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "text-blue-500",
      },
    ],
    image: sm,
  },
  {
    name: "ZAIKA - Pure veg",
    description:
    "Elevate your dining experience with our Restaurant App, offering a seamless interface for browsing menus, making reservations, and savoring culinary delights, all at your fingertips.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "text-purple-500",
      },
      {
        name: "stripe",
        color: "text-indigo-500",
      },
    ],
    image: zaika,
  },
  {
    name: "DocBot - Chat with PDF",
    description:
    "\"DocBot\" suggests a platform where users can upload PDF documents and ask questions related to the content of those documents. It implies a central hub or repository for querying information from PDF files. Users can search for specific information, extract data, or seek answers to their queries by interacting with the uploaded PDF documents.",
    tags: [
      {
        name: "python",
        color: "text-lime-200",
      },
      {
        name: "jupyter-notebook",
        color: "orange-text-gradient",
      },
      {
        name: "numpy",
        color: "text-blue-200",
      },
      {
        name: "streamlit",
        color: "text-purple-500",
      },
    ],
    image: docbot,
  },
];

export { navLinks, services, experiences, projects };


// experiences, testimonials, projects, services