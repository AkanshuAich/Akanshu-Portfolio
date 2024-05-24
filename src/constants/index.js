import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  vaid,
  upmymind,
  django,
  society,
  estate,
  homework,
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
    title: "UI/UX Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/ML",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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

const experiences = [
  {
    title: "Junior Software Developer",
    company_name: "Vaid",
    icon: vaid,
    iconBg: "#E6DEDD",
    date: "April 2024 - Present",
    points: [
      "Enhanced user interfaces by actively contributing to web platform development using the MERN stack.",
      "Collaborated with cross-functional teams, refining backend functionalities with MongoDB and Express.js.",
      "Managed data efficiently and created APIs to support seamless backend operations.",
      "Delivered seamless user experiences by integrating robust backend capabilities into the medical AI website.",
    ],
  },
  {
    title: "UI/UX Developer",
    company_name: "UpMyMind",
    icon: upmymind,
    iconBg: "#383E56",
    date: "June 2020 - August 2020",
    points: [
      "Led design for a dynamic startup, creating intuitive and visually compelling user interfaces in FIGMA.",
      "Developed wireframes and prototypes, ensuring seamless user experiences and design consistency.",
      "Identified and solved design challenges, enhancing overall design quality through critiques and brainstorming.",
      "Managed multiple design projects, consistently meeting deadlines and delivering high-quality work.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Society-Expenditure-Manager",
    description:
      "Developed a Society-Expenditure-Manager app with Python Django, HTML/CSS, and JavaScript. Implemented secure user authentication, set up a Linux WSL environment.Dockerized the app for streamlined deployment.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Django-ODM",
        color: "green-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
    ],
    image: society,
    source_code_link: "https://github.com/AkanshuAich/Society-Expenditure-Tracker",
  },
  {
    name: "Real-Estate",
    description:
      "Developed a dynamic MERN stack real estate site with a user-friendly React.js front-end and a scalable MongoDB database. Created a secure Express.js backend with user authentication and RESTful APIs, ensuring efficient data management, enhanced functionality, and security.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
    ],
    image: estate,
    source_code_link: "https://github.com/AkanshuAich/RealEstate-Mern",
  },
  {
    name: "Homework-Bot",
    description:
      "Homework-Bot, powered by LangChain, Hugging Face, and Google Palm API, is a cutting-edge LLM model deployed on Streamlit. It revolutionizes education by extracting insights from PDFs, providing instant answers to user queries, thus enhancing learning efficiency.",
    tags: [
      {
        name: "Langchain",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
      {
        name: "Google-Palm-API",
        color: "pink-text-gradient",
      },
      {
        name: "HuggingFace",
        color: "green-text-gradient",
      },
    ],
    image: homework,
    source_code_link: "https://github.com/AkanshuAich/Homework-Bot",
  },

];

export { services, technologies, experiences, testimonials, projects };
