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
    controller,
    flag,
    triathon,
    hack,
    trail,
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
      title: "Anju Mathew",
      icon: web,
    },
    {
      title: "Bobin Shaji",
      icon: mobile,
    },
    {
      title: "Joesph",
      icon: backend,
    },
    {
      title: "Karthik Murali",
      icon: creator,
    },
    {
      title: "Ninu",
      icon: mobile,
    },
    {
      title: "Prince",
      icon: backend,
    },
    {
      title: "Rex",
      icon: creator,
    },
    {
      title: "Tasleem",
      icon: creator,
    },
    {
      title: "Anil",
      icon: creator,
    },
    {
      title: "Franics Alexander",
      icon: creator,
    },
    {
      title: "Jaison",
      icon: creator,
    },
    {
      title: "Jithu",
      icon: creator,
    },
    {
      title: "Nishad Hameed",
      icon: creator,
    },
    {
      title: "Athul Jacob",
      icon: creator,
    },
    {
      title: "Nirmal Mtech",
      icon: creator,
    },
    {
      title: "Anil",
      icon: creator,
    },
    {
      title: "Rintumol",
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
      company_name: "Event Coordinators",
      icon: hack,
      iconBg: "#fff",
      date: "24 April 2023",
      points: [
        "Anandu Sunil - 8590159583",
        "Febin K Dominic - 9495505782",
        // "Participants are expected to identify problems and come up with practical solutions.",
        // "Participants are then expected to build a working prototype of their solutions by the end of the event.",
        
      ],
    },
    {
      title: "Capture The Flag",
      company_name: "Event Coordinators",
      icon: flag,
      iconBg: "#fff",
      date: "24 April 2023, 9 AM",
      points: [
        "Jonat J - 9654352870",
        "Meghana S - 8547427115",
        // "Contestants will be tasked with solving a series of cybersecurity challenges in a given amount of time ",
        // "The challenges could be related to cryptography, steganography, web application security, network security, digital forensics, and other related domains.",
      ],
    },
    {
      title: "Code Quest",
      company_name: "Event Coordinators",
      icon: trail,
      iconBg: "#fff",
      date: "24 April 2023, 9 AM",
      points: [
        "Nikhil Prakash - 6282409303",
        "Joel C Raju - 8750940057",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Triathlon",
      company_name: "Event Coordinators",
      icon: triathon,
      iconBg: "#fff",
      date: "24 April 2023, 9:30 AM",
      points: [
        "Antony Thomas - 9496615892",
        "Akhil P Dominic - 6235136689",
        // "Teams scoring above the cutoff in each challenge will move on to the subsequent challenge",
        
      ],
    },
    {
      title: "Gaming",
      company_name: "Event Coordinators",
      icon: controller,
      iconBg: "#fff",
      date: "24 April 2023, 9 AM",
      points: [
        "Joel Abraham - 9544357926",
        "Hari K - 9633234578",
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
          name: "Hack4AJCE",
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
          name: "CTF",
          color: "blue-text-gradient",
        },
        {
          name: "CEH",
          color: "green-text-gradient",
        },
        {
          name: "capturetheflag",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "/ctf",
    },
    {
      name: "Code Quest",
      description:
        "A team coding competition where the contestants will be tasked with solving complex coding problems in a limited time frame, requiring them to write efficient, clean, and scalable code in various programming languages.",
      tags: [
        {
          name: "coding",
          color: "blue-text-gradient",
        },
        {
          name: "programming",
          color: "green-text-gradient",
        },
        {
          name: "problems",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "/codingcompetition",
    },
    {
      name: "Triathlon",
      description:
        "Participate in a contest that will challenge your problem-solving skills in a series of three fun and engaging challenges. Test your abilities under time pressure and compete with other contestants to see who can solve the challenges the fastest.",
      tags: [
        {
          name: "triathlon",
          color: "blue-text-gradient",
        },
        {
          name: "coding",
          color: "green-text-gradient",
        },
        {
          name: "programming",
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
          name: "VideoGames",
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