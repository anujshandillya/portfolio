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
  subtext,
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
    name: "Subtext - Subtitle Generator and Embedder",
    site:
    "https://subtext.vercel.app/",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "text-blue-500",
      },
      {
        name: "Redux",
        color: "text-purple-500",
      },
      {
        name: "AWS",
        color: "text-orange-500",
      },
      {
        name: "Docker",
        color: "text-blue-400",
      },
      {
        name: "FFMpegWasm",
        color: "text-purple-200",
      },
    ],
    image: subtext,
  },
  {
    name: "InstaChat - Social Media",
    site:
    "https://ic-client.vercel.app/",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "text-blue-500",
      },
      {
        name: "Redux",
        color: "text-purple-500",
      },
    ],
    image: sm,
  },
  {
    name: "DocBot - Chat with PDF",
    site:
    "https://docbotpdf.streamlit.app/",
    tags: [
      {
        name: "Python",
        color: "text-lime-200",
      },
      {
        name: "JupyterNotebook",
        color: "orange-text-gradient",
      },
      {
        name: "Numpy",
        color: "text-blue-200",
      },
      {
        name: "Streamlit",
        color: "text-red-500",
      },
    ],
    image: docbot,
  },
];

export { navLinks, services, experiences, projects };


// experiences, testimonials, projects, services