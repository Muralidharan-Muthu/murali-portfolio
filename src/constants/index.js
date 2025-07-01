import {
  mobile,
  backend,
  creator,
  web,
  python,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  imagegenerator,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Figma Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
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
    name: "TypeScript",
    icon: typescript,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const educations = [
  {
    title: "Bachelor of Computer Science Engineering",
    school: "Krishnasamy College of Engineering and Technology",
    percentage: "83",
    iconBg: "#383E56",
    date: "Nov 2022 -  Apr 2026",
    points: [
      "Developed my core knowlegdes in computer science.",
      "i have gained knowledge in DBMS, OOPS, Data Structures and Algorithms, and Networking.",
    ],
  },
  {
    title: "Higher Secondary Education",
    school: "Seventh Day Adventist Higher Secondary School",
    percentage: "76",
    iconBg: "#383E56",
    date: "June 2020 - June 2022",
    points: [
      "I have developed my knowlegdes in Python Programming Language.",
      "I was scored 98% in Python.",
    ],
  },
  {
    title: "Secondary Education",
    school: "Shree Maedha Matriculation School",
    percentage: "72",
    iconBg: "#383E56",
    date: "June 2019 -  June 2020",
    points: [
      "Practiced my disciplines and well manners.",
      "Started reading books and self improvement guides.",
    ],
  },
];

const certificates = [
  {
    title: "Python Programming",
    issuer: "Coursera",
    date: "2023",
    description: "Completed comprehensive Python programming course covering data structures, algorithms, and object-oriented programming.",
    image: "https://img.icons8.com/color/96/000000/python.png",
    link: "#",
  },
  {
    title: "React.js Development",
    issuer: "Udemy",
    date: "2023",
    description: "Mastered React.js fundamentals including hooks, state management, and component lifecycle.",
    image: "https://img.icons8.com/color/96/000000/react-native.png",
    link: "#",
  },
  {
    title: "Web Development Internship",
    issuer: "Tech Solutions Inc.",
    date: "2023",
    description: "6-month internship working on real-world web development projects using modern technologies.",
    image: "https://img.icons8.com/color/96/000000/internship.png",
    link: "#",
  },
];

const projects = [
  {
    name: "Imagify",
    description:
      "Web-based platform that allows users to make their own images with AI. It is a web application that allows users to upload their prompt and create powerfull image based on that promp.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: imagegenerator,
    source_code_link: "https://github.com/Muralidharan-Muthu/text-to-image-generator-application-IMAGIFY",
  },
];

export { services, technologies, educations, certificates, projects };
