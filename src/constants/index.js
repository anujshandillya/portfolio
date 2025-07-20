import {
  reactjs,
  redux,
  nodejs,
  mongodb,
  threejs,
  cpp,
  py,
  sm,
  next,
  aws,
  gsap,
  docker,
  docbot,
  subtext,
  lamur,
  flyzy,
  sio,
  go,
  js,
  ts,
  postgres,
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
    title: "PostgreSQL",
    icon: postgres,
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
    title: "Go",
    icon: go,
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
    title: "JavaScript",
    icon: js,
  },
  // 11
  {
    title: "socket.io",
    icon: sio
  },
  // 12
  {
    title: "Three JS",
    icon: threejs,
  },
  // 13
  {
    title: "gsap",
    icon: gsap,
  },
  // 14
  {
    title: "Redux Toolkit",
    icon: redux,
  },
  
  // 15
  {
    title: "Typescript",
    icon: ts
  },
  // 16
  {
    title: "python",
    icon: py,
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
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Flyzy",
    icon: flyzy,
    iconBg: "#383E56",
    date: "Jan 2025 - July 2025",
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
    name: "LamurType - Typing Game with single and multiplayer modes",
    site: "https://github.com/anujshandillya/lamurType",
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
        name: "Golang",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "text-blue-500",
      },
      {
        name: "ContextAPI",
        color: "text-purple-500",
      },
      {
        name: "Socket.io",
        color: "text-blue-600"
      },
      {
        name: "AWS",
        color: "text-orange-500",
      },
      {
        name: "Docker",
        color: "text-blue-400",
      },
    ],
    image: lamur,
  },
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
    name: "DocBot - Chat with PDF",
    site:
    "https://docbotpdf.streamlit.app/",
    tags: [
      {
        name: "Python",
        color: "bg-gradient-to-r from-yellow-400 via-yellow-500 via-green-400 to-blue-400 bg-clip-text text-transparent",
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
];

export { navLinks, services, experiences, projects };


// experiences, testimonials, projects, services