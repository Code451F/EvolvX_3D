import React from "react";

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
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Events",
    },
    {
      id: "gallery",
      title: "Gallery",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "EvolveHack",
      icon: web,
    },
    {
      title: "Coding Competition",
      icon: mobile,
    },
    {
      title: "Capture The Flag",
      icon: backend,
    },
    {
      title: "Gaming",
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
      title: "EvolvHack '23",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "23-24 April 2023, 2 PM - 2 PM",
      points: [
        "Team event with teams of 2-4 members",
        "Problem statements will not be provided to the participants.",
        "Participants are expected to identify problems and come up with practical solutions.",
        "Participants are then expected to build a working prototype of their solutions by the end of the event.",
        
      ],
    },
    {
      title: "Capture The Flag",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "24 April 2023, 9 AM",
      points: [
        "Team event with teams of 2-4 members",
        "Will be conducted in two phases where the first round will be a 24-hour online CTF and the final round being a 7-hour offline CTF",
        "Contestants will be tasked with solving a series of cybersecurity challenges in a given amount of time ",
        "The challenges could be related to cryptography, steganography, web application security, network security, digital forensics, and other related domains.",
      ],
    },
    {
      title: "Coding Competition",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "24 April 2023, 9 AM",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Triathon",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "24 April 2023, 9:30 AM",
      points: [
        "Team event with atmost 2 members.",
        "Will contain three challenges with each challenge having a set of tasks or questions to be solved",
        "Teams scoring above the cutoff in each challenge will move on to the subsequent challenge",
        
      ],
    },
    {
      title: "Gaming",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "24 April 2023, 9 AM",
      points: [
        "CSGO Tournament: Participants can form teams of 5 and are put in brackets wherein which the winners of the bracket will play a final match to win the tournament.",
        "FIFA 23 Tournament: Individuals can compete in knockout matches to try and win the final cash prize",
      
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
      name: "EvolvHack",
      description:
        "EvolveHack '23 is a 24-hour open hackathon for university students. Teams of 2-4 members can participate in this hackathon where the participants are expected to identify any problem of their liking and come up with practical solutions of their own.",
      tags: [
        {
          name: "Hack-a-thon",
          color: "blue-text-gradient",
        },
        {
          name: "24HRS",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "/evolvhack",
    },
    {
      name: "Capture The Flag",
      description:
        "Are you a cybersecurity enthusiast looking for a challenge? This event includes a series of cybersecurity challenges that will test your skills in cryptography, steganography, web application security, network security, and related domains.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "/ctf",
    },
    {
      name: "Coding Competition",
      description:
        "An individual competition where the contestant will be tasked with solving complex coding problems in a limited time frame, requiring them to write efficient, clean, and scalable code in various programming languages.",
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
      image: tripguide,
      source_code_link: "/codingcompetition",
    },
    {
      name: "Triathon",
      description:
        "Participate in a contest that will challenge your problem-solving skills in a series of three fun and engaging challenges. Test your abilities under time pressure and compete with other contestants to see who can solve the challenges the fastest.",
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
      image: carrent,
      source_code_link: "/triathon",
    },
    {
      name: "Gaming",
      description:
        "Join the ultimate gaming showdown featuring two of the most popular competitive titles - CSGO and FIFA 23. Battle it out with other skilled players and showcase your gaming prowess to win amazing prizes.",
      tags: [
        {
          name: "Video Games",
          color: "blue-text-gradient",
        },
        {
          name: "CSGO",
          color: "green-text-gradient",
        },
        {
          name: "FIFA 23",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "/gaming",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };