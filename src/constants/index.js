import {
  mobile,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
    iconBg: "#383E56",
    date: "March 2023 - Octaber 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams, including other developers, to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "JavaScript Developer",
    company_name: "Pesto",
    icon: "https://pesto-restorant.netlify.app/images/logo.png",
    iconBg: "#383E56",
    date: "Aug 2024 - Sep 2024",
    points: [
      "Developing and maintaining web applications using JavaScript and other related technologies.",
      "Collaborating with cross-functional teams, including other developers, to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Endi qo'yaman",
    icon: "https://cdn-icons-png.flaticon.com/512/11096/11096817.png",
    iconBg: "#383E56",
    date: "Sep 2024 - Oct 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "PESTO Restaurant",
    description:
      "The goal of this project is to create a simple and user-friendly application for restaurants to manage daily operations such as order tracking, table management, and menu updates. It is designed to streamline processes and improve accuracy.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: "./project2.png",
    source_code_link: "https://github.com/OmadbekXusanboyev/PESTO-Restorant",
  },
  {
    name: "JARVIS Voice Assistant",
    description:
      "The JARVIS voice assistant is designed to help users perform various tasks on their computer or other devices through voice commands. For example, users can search for information, launch applications, or retrieve various data by simply using their voice.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: "./project3.png",
    source_code_link: "https://github.com/OmadbekXusanboyev/JARVIS-Voice-Assisent",
  },
  {
    name: "Typing Game",
    description:
      "Typing Game is an interactive game designed to help users improve their typing skills. During the game, users must type a given text as quickly and accurately as possible. Each typed text is analyzed, and feedback is provided to the user regarding their speed and accuracy.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: "./project5.png",
    source_code_link: "https://github.com/OmadbekXusanboyev/Typing-Game",
  },
];

export { services, technologies, experiences, projects };
