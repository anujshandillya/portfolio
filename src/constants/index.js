import {
  reactjs,
  redux,
  nodejs,
  mongodb,
  threejs,
  dig,
  ps,
  ai,
  blender,
  cpp,
  py,
  pr,
  fm,
  ina,
  fnd,
  sm,
  dc,
  next,
  aws,
  gsap,
  docker,
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

const servicesmobile = [
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: nodejs,
  },
  {
    title: "Competitive Programmer",
    icon: cpp,
  },
  {
    title: "Artist",
    icon: ai,
  }
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Framer Motion",
    icon: fm
  },
  {
    name: "python",
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
  }
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Weather forecasting app",
    description:
    "Experience precision weather predictions at your fingertips with our innovative Weather Forecasting App, leveraging real-time data through seamless API integration to deliver accurate and up-to-the-minute weather updates.",
    tags: [
      {
        name: "html",
        color: "text-red-500",
      },
      {
        name: "css",
        color: "text-orange-500",
      },
      {
        name: "javascript",
        color: "text-yellow-200",
      },
      {
        name: "bootstrap",
        color: "text-purple-500",
      },
    ],
    image: ina,
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
    image: ina,
  },
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
    name: "Discord bot",
    description:
    "Enhance your Discord server with our custom bot, bringing functionality and fun through features like moderation, automation, and entertainment, creating a vibrant and engaging community experience.",
    tags: [
      {
        name: "python",
        color: "text-lime-200",
      },
      {
        name: "discord.py",
        color: "text-indigo-400",
      },
    ],
    image: dc,
  },
  {
    name: "Fake News Detector",
    description:
    "Deploying a robust arsenal of algorithms including logistic regression, gradient boosting, decision trees, and random forest, our Fake News Detector employs cutting-edge technology to enhance accuracy in identifying and mitigating misinformation.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "jupyter-notebook",
        color: "orange-text-gradient",
      },
      {
        name: "python",
        color: "text-lime-200",
      },
      {
        name: "bootstrap",
        color: "text-purple-500",
      },
    ],
    image: fnd,
  },
];

const projectsmobile = [
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
    image: ina,
  },
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
    name: "Discord bot",
    description:
    "Enhance your Discord server with our custom bot, bringing functionality and fun through features like moderation, automation, and entertainment, creating a vibrant and engaging community experience.",
    tags: [
      {
        name: "python",
        color: "text-lime-200",
      },
      {
        name: "discord.py",
        color: "text-indigo-400",
      },
    ],
    image: dc,
  },
];

export { navLinks, technologies, services, experiences, projects, projectsmobile, servicesmobile };


// experiences, testimonials, projects, services