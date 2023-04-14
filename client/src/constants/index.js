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
  hackathon,
  ctf,
  treasurehunt,
  triathlon,
  csgo,
  fifa,
  threejs,
  controller,
  flag,
  triathon,
  hack,
  trail,
  digiora,
  empty,
  tiara,
  eatkochieat,
  waytonikah,
  alan,
  anandu,
  anson,
  joyal,
  juby,
  klal,
  riya,
  sharon,
  asif,
  chetan,
  glen,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Events",
  },
  {
    id: "work",
    title: "People",
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
    title: "Sponsors",
    icon: web,
    source_code_link: "/sponsors",
  },
  {
    title: "Team",
    icon: mobile,
    source_code_link: "/team",
  },
  {
    title: "CSEA",
    icon: backend,
    source_code_link: "/csea",
  },
];

const sponsors = [
  {
    title: "Digiora",
    icon: digiora,
    people: ["Mr. Anil P Jose", "Mr. Jose Zacharias", "Mrs. Nayana Lal"],
    batch: "Batch of 2008",
  },
  {
    title: "JB Labs",
    icon: empty,
    people: ["Mr. Ajo John"],
    batch: "Batch of 2017",
  },
  {
    title: "Eat Kochi Eat",
    icon: eatkochieat,
    people: ["Mr. Karthik M: Batch of 2012", "Mr. Bobin Shaji: Batch of 2017"],
    batch: "",
  },
  {
    title: "Way to Nikah",
    icon: waytonikah,
    people: ["Mrs. Tasleem T P"],
    batch: "Batch of 2005",
  },
  {
    title: "Tiara",
    icon: tiara,
    people: ["Mrs. Ninu Mary Joseph"],
    batch: "Batch of 2005",
  },
];

const other_sponsors = [
  {
    name: ["Mr. Joseph Jose", "Mr. Prince Kuriakose"],
    batch: "Batch of 2009",
  },
  {
    name: ["Mrs. Anju Mathew"],
    batch: "Batch of 2017",
  },
  {
    name: ["Mr. Rex Jovikom"],
    batch: "Batch of 2021",
  },
  {
    name: ["Mr. Jithu K"],
    batch: "Batch of 2009",
  },
  {
    name: ["Mrs. Liyan Grace Joseph"],
    batch: "Batch of 2018 MTech",
  },
  {
    name: ["Mrs. Rintu mol Joseph"],
    batch: "Batch of 2011",
  },
];

const main = [
  {
    name: "Dr. Juby Mathew",
    image: juby,
    designation: "HoD",
  },
  {
    name: "Mr. Krishnalal G",
    image: klal,
    designation: "FIC: CSEA",
  },
];

const main_coords = [
  {
    name: "Sharon Thomas",
    image: sharon,
    designation: "President",
  },
  {
    name: "Anson Benny",
    image: anson,
    designation: "Secretary",
  },
  {
    name: "Joyal Joby",
    image: joyal,
    designation: "Treasurer",
  },
];

const coords = [
  {
    name: "Alan James",
    image: alan,
    designation: "EvolvX Coordinator",
  },
  {
    name: "Anandu Sunil",
    image: anandu,
    designation: "EvolvX Coordinator",
  },
  {
    name: "Riya M Jose",
    image: riya,
    designation: "EvolvX Coordinator",
  },
];

const web_team = [
  {
    name: "Asif Shereef",
    image: asif,
    designation: "Master Frontend",
  },
  {
    name: "Chetan Manoj",
    image: chetan,
    designation: "Darth CSS",
  },
  {
    name: "Glen Pereira",
    image: glen,
    designation: "Lord Fullstack",
  },
];

const event_teams = [
  {
    event: "EvolvHack Team",
    names: [
      "Anandu Sunil",
      "Febin K Dominic",
      "Glen Pereira",
      "Emal George",
      "Grace Maria Binu",
      "Anna Tennyson",
      "Gauthami S",
      "Josin P C",
      "Francis Tom",
      "Justin V George",
    ],
  },
  {
    event: "Gaming",
    names: [
      "Asif Shereef",
      "Joel Abraham Orethu",
      "Ryan Savio Shibu",
      "Harikrishnan S",
      "Tibin Abraham",
      "Subin K S",
      "Nivedh Mohan",
      "Chetan Manoj",
      "Ben Jacob Bobby",
    ],
  },
  {
    event: "Code Quest",
    names: [
      "Nikhil Prakash",
      "Meleena Ann Philip",
      "Neethu Liz",
      "Joel C Raju",
      "Jibu Samuel",
      "Elena Maria Varghese",
      "Joyal John Chacko",
      "Joyal Joseph",
    ],
  },
  {
    event: "Triathlon",
    names: [
      "Akhil P Dominic",
      "Antony Thomas",
      "Alen Scaria",
      "Aarsha V S",
      "Arya Shinod",
      "Lino Shaji",
      "Sreyas (MTech)",
      "Gopika S",
      "Athulya Anilkumar",
    ],
  },
  
  {
    event: "Capture the Flag",
    names: [
      "Sharon KJ",
      "Jonat J Mathew",
      "Reejo Kuriakose",
      "Marshel C Mathews",
      "Meghana Suresh",
    ],
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
    points: ["Joel Abraham - 9544357926", "Hari K - 9633234578"],
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
    name: "EVOLVHACK",
    description:
      "EvolveHack '23 is the perfect opportunity for university students to showcase their creativity and problem-solving skills. With a 24-hour timeframe and the freedom to identify and solve any problem, teams of 2-4 can create innovative and practical solutions",
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
    image: hackathon,
    source_code_link: "/evolvhack",
  },
  {
    name: "ARCHON CTF",
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
    image: ctf,
    source_code_link: "/ctf",
  },
  {
    name: "CODE QUEST",
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
    image: treasurehunt,
    source_code_link: "/codingcompetition",
  },
  {
    name: "TRIATHLON",
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
    image: triathlon,
    source_code_link: "/triathlon",
  },
  {
    name: "CSGO",
    description:
      "Join the ultimate gaming showdown featuring two of the most popular competitive titles - CSGO and FIFA 23. Battle it out with other skilled players and showcase your gaming prowess to win amazing prizes.",
    tags: [
      {
        name: "VideoGames",
        color: "blue-text-gradient",
      },
      {
        name: "FPS",
        color: "green-text-gradient",
      },
      {
        name: "shooter",
        color: "pink-text-gradient",
      },
    ],
    image: csgo,
    source_code_link: "/gaming/csgo",
  },
  {
    name: "FIFA23",
    description:
      "Join the ultimate gaming showdown featuring two of the most popular competitive titles - CSGO and FIFA 23. Battle it out with other skilled players and showcase your gaming prowess to win amazing prizes.",
    tags: [
      {
        name: "VideoGames",
        color: "blue-text-gradient",
      },
      {
        name: "Football",
        color: "green-text-gradient",
      },
      {
        name: "FIFA 23",
        color: "pink-text-gradient",
      },
    ],
    image: fifa,
    source_code_link: "/gaming/fifa",
  },
];

const guidelines_EH = [
  {
    description: `EvolveHack '23 is a 24-hour hackathon to be held at Amal Jyothi College of Engineering, 
                        Kanjirappally, Kerala, India during April 23-24. EvolveHack intends to find open-source solutions to relevant 
                        problems by bringing together passionate teams of developers and innovators together.
                        EvolveHack will be open to all university students across the country without any restrictions. This
                        is an exciting opportunity for students and innovators to network with their peers and industry
                        experts as well as brainstorm new solutions to problems at an accelerated pace.
                        This is an open hackathon. Problem statements will not be provided to the participants. Participants
                        are expected to identify problems and come up with practical solutions. Participants are then
                        expected to build a working prototype of their solutions by the end of the event.
                        All participants are required to strictly adhere to the following guidelines. Any failure to do the
                        same will lead to immediate disqualification. Participants are expected to maintain the proper
                        decorum that enriches the spirit of the hackathon.`,
    points: [
      "Participants are required to form a team of minimum two members and a maximum of four members.",
      "Each member of the team will be required to pay ₹250 as the registration fees.",
      "The hackathon will be from 2:00 PM on Sunday, 23rd April till 2:00 PM on Monday, 24th April. All teams are expected to report at the venue by 1:00 PM on 23rd April at the latest. Members that fail to comply will be deemed disqualified.",
      "Participants should carry their college ID card and another government-issued ID card while entering the hackathon premises.",
      "This is an open hackathon. Teams can choose any problem statement and work on any solution. Both hardware and software solutions are welcome.",
      "Hack4AJCE is a special segment of EvolveHack '23. Participants will be asked to provide innovative solutions to problems faced by the college. Participants can refer to the problem statements on the website. Participants providing solutions to these problem statements will be give appropriate priority during valuation.",
      "Participants are expected to bring any equipment that they require to complete the solution. Participants should inform the volunteers beforehand if they require any other facilities.",
      "Participants should not roam around the campus during the hackathon hours.",
      "All participants must wear their event ID card visibly at all times. All participants should also carry their college ID card and should reproduce the same when asked.",
      "Participants are expected to keep the decorum of the event and maintain the spirit of the hackathon.",
      "Food and snacks will be provided for participants from Sunday 4:00 PM till Monday 2:00 PM. Nap-rooms will be provided for participants during the hackathon hours.",
      "The hackathon will be divided into two rounds:",
      "All solutions presented at the hackathon must be original and not infringe any third-party intellectual property rights. Participants should not use any copyrighted material without the owner's consent. We also require all solutions to be open-source and be freely available to all.",
      "Participants are encouraged to collaborate with other teams during the event. However, they should not sabotage or plagiarize other teams' work. Any unethical behaviour will result in disqualification.",
      "Participants should ensure their safety during the event. They should not indulge in any behaviour that can cause harm to themselves or others. If they notice any hazardous situation, they should inform the volunteers immediately.",
      "The winners will receive their awards during the Awards and Closure Ceremony at 4:00 PM on Monday.",
      "All participants are expected to clear out of the campus by Monday, 5:30 PM.",
      "Participants are also expected to respect volunteers and follow their instructions. Participants should approach volunteers for help and to resolve any doubts related to the event.",
      "Certificates will be provided to all participants. Participants must make sure to collect their certificates before they leave the campus unless specified.",
    ],
    sub_points: [
      "A 24-hour hackathon round to develop and present the solution to mentors. The mentors will then select teams that qualify the minimum requirements for round 2.",
      "Qualified teams will be required to present their solution to an expert judging panel and will face questions from both the judges as well as the audience.",
    ],
    description_end: `Last but not least, participants should have fun during the hackathon. The event is an opportunity to
                            showcase your skills, learn from others, and make new connections. Enjoy the experience!`,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  guidelines_EH,
  sponsors,
  other_sponsors,
  main,
  main_coords,
  coords,
  web_team,
  event_teams,
};
