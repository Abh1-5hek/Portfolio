
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
    starbucks,
    shopify,
    carrent,
    jobit,
    threejs,
    simply,
    devPlayground,
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI/UX Design",
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
  
  const experiences = [
    {
      title: "Core java",
      company_name: "United College of Engineering & research, Prayagraj",
      icon: meta,
      iconBg: "#383E56",
      date: "June 2022 - Jully 2022",
      points: [
        "Developing a java CLI Application for Goods management System. ",
        "The main objective of this project is to implement a software which can be used to access and manage certain types of goods, in this concept there is no mediator the user is able to directly access the goods. Same goes for the person who is managing the software.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     ""
    //   ],
    // },
    {
      title: "Web Development using Html & Css",
      company_name: "IIIt Allahabad",
      icon: shopify,
      iconBg: "#383E56",
      date: "Aug 2023 - Sept 2023",
      points: [
        "Developing and maintaining a SimplyRecipes webiste using CSS, HTML, JavaScript.",
        "Learning the new concepts of designing, color thems and color gardients.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Techkriti iit Kanpur",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "Aug 2024 - Sept 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Abhishek proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Abhishek does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Abhishek optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "DevPlayground",
      description:
        "DevPlayground is a real-time multiplayer monitoring and control system that connects Unreal Engine 5.4 with a MERN stack dashboard. It enables secure tracking and live editing of player stats through a web interface, offering a scalable, open-source alternative to costly game backend tools.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Unreal Engine",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "white-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
      ],
      image: devPlayground,
      source_code_link: "https://devvplayground.github.io/home/",
    },
    {
      name: "SimplyRecipes",
      description:
        "Created a responsive, multi-page static food Recipes website. Enhanced user experience across various devices with responsive design principles ",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: simply,
      source_code_link: "https://abh1-5hek.github.io/SimplyRecipes/",
    },
    {
      name: "Dev-Notes",
      description:
        "This note making application, developed using React and vite , incorporates robust sate management and component based architecture to deliver a smooth and efficent user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Abh1-5hek/DevNotes",
    },
    {
      name: "QR-Generator",
      description:
        "OR Generator easily convert any text or URL int a QR code, making it simpler to share websites links, contact info, or any import details. No more long URLs just scan and go! Perfect for enhancing your digital presence.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Abh1-5hek/QrGenerator",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };